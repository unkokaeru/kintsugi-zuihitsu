"use strict";

/*
 * To-Do Wheel - Obsidian Plugin
 *
 * Parses nested bullet lists under a configurable heading
 * into an interactive, uncapped spinning picker wheel that
 * descends sublevel by sublevel.
 *
 * Embed with a ```todo-wheel``` code block in any note.
 * Code-block options (one per line, "key: value"):
 *   heading: Custom Text   - parse a different heading
 *   accent:  #rrggbb       - override the wheel colour
 *   only:    ! %           - spin only items with these markers
 *   exclude: ?             - hide items with these markers
 *
 * Weighting mode, recently-picked cooldown and history
 * logging are configured in the plugin settings.
 */

const { Plugin, PluginSettingTab, Setting, Notice, MarkdownRenderChild } = require("obsidian");

/* =============================================
   User-facing labels (single source for i18n)
   ============================================= */

const LABELS = {
    PLUGIN_TITLE:           "To-Do Wheel",
    SPIN_PROMPT:            "Spin to choose",
    CHOOSING:               "Choosing\u2026",
    ITEM_CHOSEN_HEADER:     "Chosen",
    DONE:                   "Done",
    YOUR_TASK:              "Your task",
    TRY_AGAIN:              "Try again",
    REROLL:                 "Reroll",
    MARK_DONE:              "Mark done \u2713",
    BACK_ONE_LEVEL:         "Back a level",
    START_OVER:             "Start over",
    NOTHING_TO_SPIN:        "Nothing to spin",
    SPIN_BUTTON:            "SPIN",
    SPINNING_INDICATOR:     "\u2026",
    FILE_READ_ERROR:        "Could not read this file.",
    NO_MATCHES:             "Nothing matches this filter.",
    SETTINGS_TITLE:         "To-Do Wheel",
    SETTING_HEADING_NAME:   "Target heading",
    SETTING_HEADING_DESC:   "Bullet lists under headings matching this text will be parsed. Case-insensitive.",
    SETTING_MODE_NAME:      "Weighting mode",
    SETTING_MODE_DESC:      "How sector sizes (and odds) are decided when spinning.",
    SETTING_COOLDOWN_NAME:  "Recently-picked cooldown",
    SETTING_COOLDOWN_DESC:  "Temporarily shrink the last N picks so the wheel stops repeating itself. Set to 0 to disable.",
    SETTING_LOG_NAME:       "Log spin history",
    SETTING_LOG_DESC:       "Append every pick (and completion) to a note in your vault.",
    SETTING_LOG_PATH_NAME:  "History note path",
    SETTING_LOG_PATH_DESC:  "Vault-relative path of the log note. Created automatically if missing.",
    SETTING_STREAK_NAME:    "Momentum",
    HISTORY_HEADING:        "# To-Do Wheel History\n",

    chooseFrom:             (breadcrumb) => "Choose from " + breadcrumb,
    choosingFrom:           (breadcrumb) => "Choosing from " + breadcrumb + "\u2026",
    pickFrom:               (name) => 'Pick from "' + name + '"',
    itemChosen:             (name) => "Chosen: " + name,
    noTasksFound:           (heading) => 'No tasks found under a "' + heading + '" heading. Add a matching heading with bullet points beneath it.',
    noticeStandaloneTask:   (name) => "Your task: " + name,
    noticeTask:             (name, description) => "Task: " + name + (description ? " - " + description : ""),
    resultHeader:           (parent) => parent,
    noticeDone:             (name) => "Nice \u2014 done: " + name,
    streakBadge:            (days) => "\uD83D\uDD25 " + days,
    streakNotice:           (days) => days <= 1 ? "Streak started \u2014 1 day" : "\uD83D\uDD25 " + days + "-day streak!",
    streakSummary:          (current, longest) => "Current streak: " + current + " day" + (current === 1 ? "" : "s") + "  \u00b7  Best: " + longest,
};

/* =============================================
   Weighting modes (Feature: weighting modes)
   - chars    : sector size ~ subtree characters (the
                amount of work) x marker priority.
   - equal    : every sibling equally likely.
   - priority : marker priority only; length ignored.
   - shallow  : favour small / near-done items.
   ============================================= */

const WEIGHT_MODE_CHARS              = "chars";
const WEIGHT_MODE_EQUAL              = "equal";
const WEIGHT_MODE_PRIORITY           = "priority";
const WEIGHT_MODE_SHALLOW            = "shallow";
const WEIGHT_MODE_VALUES             = [WEIGHT_MODE_CHARS, WEIGHT_MODE_EQUAL, WEIGHT_MODE_PRIORITY, WEIGHT_MODE_SHALLOW];
const WEIGHT_MODE_LABELS             = {
    [WEIGHT_MODE_CHARS]:    "By size (characters \u00d7 priority)",
    [WEIGHT_MODE_EQUAL]:    "Equal (pure random)",
    [WEIGHT_MODE_PRIORITY]: "Priority only (markers)",
    [WEIGHT_MODE_SHALLOW]:  "Shallow (favour quick wins)"
};
const EQUAL_WEIGHT_VALUE             = 1;
const SHALLOW_REFERENCE_CHARS        = 40;

/* =============================================
   Recently-picked cooldown
   ============================================= */

const DEFAULT_COOLDOWN_COUNT         = 3;
const COOLDOWN_MIN_MULTIPLIER        = 0.15;

/* =============================================
   Marker glyphs shown on the result card
   ============================================= */

const MARKER_EMOJI = {
    "!": "\u2757",
    "%": "\u23F3",
    "?": "\u2753"
};

/* =============================================
   Confetti celebration on completion
   ============================================= */

const CONFETTI_PARTICLE_COUNT        = 90;
const CONFETTI_DURATION_MS           = 1300;
const CONFETTI_GRAVITY               = 0.16;
const CONFETTI_DRAG                  = 0.985;
const CONFETTI_MIN_SPEED             = 3;
const CONFETTI_SPEED_VARIANCE        = 7;
const CONFETTI_MIN_SIZE              = 4;
const CONFETTI_SIZE_VARIANCE         = 5;
const CONFETTI_COLORS                = ["#FFD700", "#FF6B6B", "#4ECDC4", "#7b6cd9", "#52D273", "#FF9F1C"];
const MILLISECONDS_PER_DAY           = 86400000;

/* =============================================
   Default settings
   ============================================= */

const DEFAULT_HEADING_TEXT = "To-Do List";
const DEFAULT_HISTORY_PATH = "To-Do Wheel History.md";
const DEFAULT_SETTINGS     = {
    heading:        DEFAULT_HEADING_TEXT,
    weightMode:     WEIGHT_MODE_CHARS,
    cooldownCount:  DEFAULT_COOLDOWN_COUNT,
    logHistory:     true,
    historyLogPath: DEFAULT_HISTORY_PATH,
    streak:         { last: "", current: 0, longest: 0 }
};

/* =============================================
   Layout dimensions
   ============================================= */

const CANVAS_PIXEL_SIZE              = 420;
const WHEEL_RADIUS                   = 175;
const CENTER_X                       = CANVAS_PIXEL_SIZE / 2;
const CENTER_Y                       = CANVAS_PIXEL_SIZE / 2;
const CENTER_BUTTON_RADIUS           = 36;
const LABEL_INNER_OFFSET             = 14;
const LABEL_OUTER_MARGIN             = 28;

/* =============================================
   Animation parameters
   ============================================= */

const SPIN_DURATION_MS               = 4500;
const EASING_EXPONENT                = 3;
const MINIMUM_EXTRA_FULL_ROTATIONS   = 5;
const EXTRA_ROTATION_VARIANCE        = 5;
const LANDING_JITTER_FACTOR          = 0.6;
const LANDING_CENTER_OFFSET          = 0.5;

/* =============================================
   Angle constants
   ============================================= */

const FULL_CIRCLE                    = 2 * Math.PI;
const HALF_CIRCLE                    = Math.PI;
const QUARTER_CIRCLE                 = Math.PI / 2;
const THREE_QUARTER_CIRCLE           = 3 * Math.PI / 2;
const POINTER_ANGLE                  = -QUARTER_CIRCLE;

/* =============================================
   Pointer triangle geometry
   ============================================= */

const POINTER_HEIGHT                 = 16;
const POINTER_GAP_FROM_WHEEL         = 2;
const POINTER_WIDTH_RATIO            = 0.7;
const POINTER_TIP_EXTENSION          = 2;
const POINTER_BASE_INSET             = 4;
const POINTER_STROKE_WIDTH           = 2;

/* =============================================
   Typography
   ============================================= */

const SYSTEM_FONT_STACK              = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const FONT_SIZE_MANY_SEGMENTS        = 11;
const FONT_SIZE_MODERATE_SEGMENTS    = 12;
const FONT_SIZE_FEW_SEGMENTS         = 14;
const FONT_SIZE_CENTER_BUTTON        = 16;
const FONT_SIZE_EMPTY_STATE          = 16;
const MANY_SEGMENTS_THRESHOLD        = 12;
const MODERATE_SEGMENTS_THRESHOLD    = 6;

/* =============================================
   Accent-based palette generation
   ============================================= */

const DEFAULT_ACCENT_COLOR           = "#7b6cd9";
const SHADE_LIGHTNESS_MIN            = 28;
const SHADE_LIGHTNESS_MAX            = 72;
const SHADE_SATURATION_MIN           = 35;
const SHADE_SATURATION_MAX           = 70;
const SHADE_HUE_NUDGE_DEGREES        = 8;
const HUE_DEGREES_FULL_CIRCLE        = 360;
const PERCENT_SCALE                  = 100;
const HSL_HUE_SECTOR_SIZE            = 60;
const HSL_MAX_CHANNEL_FLOAT          = 1.0;
const POINTER_DARKENING_AMOUNT       = 15;

/* =============================================
   Rendering colors
   ============================================= */

const SEGMENT_BORDER_COLOR           = "rgba(255,255,255,0.55)";
const SEGMENT_BORDER_WIDTH           = 2;
const WINNER_HIGHLIGHT_COLOR         = "#FFD700";
const WINNER_HIGHLIGHT_STROKE_WIDTH  = 5;
const WINNER_HIGHLIGHT_SHADOW_BLUR   = 14;
const OUTER_RING_COLOR               = "rgba(0,0,0,0.15)";
const OUTER_RING_WIDTH               = 4;
const BUTTON_GRADIENT_START_COLOR    = "#ffffff";
const BUTTON_GRADIENT_END_COLOR      = "#dcdcdc";
const BUTTON_GRADIENT_VERTICAL_SHIFT = 4;
const BUTTON_BORDER_COLOR            = "#bbb";
const BUTTON_BORDER_WIDTH            = 2;
const BUTTON_TEXT_COLOR              = "#333";
const EMPTY_STATE_TEXT_COLOR         = "#888";
const DARK_TEXT_ON_BRIGHT_SEGMENT    = "#1a1a1a";
const LIGHT_TEXT_ON_DARK_SEGMENT     = "#ffffff";

/* =============================================
   Luminance calculation (ITU-R BT.601 weights)
   ============================================= */

const LUMINANCE_RED_WEIGHT           = 0.299;
const LUMINANCE_GREEN_WEIGHT         = 0.587;
const LUMINANCE_BLUE_WEIGHT          = 0.114;
const LUMINANCE_FULL_SCALE           = 255;
const BRIGHTNESS_THRESHOLD           = 0.55;

/* =============================================
   Hex color component parse offsets
   ============================================= */

const HEX_RED_START                  = 1;
const HEX_RED_END                    = 3;
const HEX_GREEN_START                = 3;
const HEX_GREEN_END                  = 5;
const HEX_BLUE_START                 = 5;
const HEX_BLUE_END                   = 7;
const HEX_RADIX                      = 16;

/* =============================================
   Parsing
   ============================================= */

const TAB_WIDTH_IN_SPACES            = 4;
const BULLET_LINE_PATTERN            = /^(\s*)([-*+])\s+(.+)$/;
const LEADING_MARKER_PATTERN         = /^([!?%])\s+/;
const MARKER_IMPORTANT               = "!";
const MARKER_IN_PROGRESS             = "%";
const MARKER_UNCERTAIN               = "?";

/* =============================================
   Sector weighting
   - A sector's angular size is proportional to the
     total character count of its subtree (the item
     plus everything nested beneath it), scaled by a
     priority multiplier for a leading marker:
       "!" important   -> larger  (surfaced more often)
       "%" in progress -> larger  (finish what was started)
       "?" uncertain   -> smaller (deferred)
     A larger sector is therefore more likely to be
     landed on.
   ============================================= */

const WEIGHT_MULTIPLIER_IMPORTANT    = 1.8;
const WEIGHT_MULTIPLIER_IN_PROGRESS  = 1.5;
const WEIGHT_MULTIPLIER_UNCERTAIN    = 0.55;
const WEIGHT_MULTIPLIER_NEUTRAL      = 1.0;
const MIN_SUBTREE_CHAR_COUNT         = 1;
const MIN_SECTOR_ANGLE_FRACTION      = 0.035;

/* =============================================
   Wheel state values
   ============================================= */

const NO_HIGHLIGHT_INDEX             = -1;
const DEFAULT_DEVICE_PIXEL_RATIO     = 1;
const CANVAS_RENDERING_CONTEXT_TYPE  = "2d";

/* =============================================
   Ellipsis character for truncated labels
   ============================================= */

const ELLIPSIS = "\u2026";

/* =============================================
   Parse any CSS color string into [r, g, b]
   each in 0-255 range. Handles #hex, #shorthand,
   rgb(), and rgba() formats.
   ============================================= */

function parseCssColorToRgb(colorString) {
    const trimmed = colorString.trim();

    const rgbMatch = trimmed.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (rgbMatch) {
        return [parseInt(rgbMatch[1], 10), parseInt(rgbMatch[2], 10), parseInt(rgbMatch[3], 10)];
    }

    const hexLongMatch = trimmed.match(/^#([0-9a-fA-F]{6})$/);
    if (hexLongMatch) {
        const hexDigits = hexLongMatch[1];
        return [
            parseInt(hexDigits.slice(0, 2), HEX_RADIX),
            parseInt(hexDigits.slice(2, 4), HEX_RADIX),
            parseInt(hexDigits.slice(4, 6), HEX_RADIX)
        ];
    }

    const hexShortMatch = trimmed.match(/^#([0-9a-fA-F]{3})$/);
    if (hexShortMatch) {
        const shortDigits = hexShortMatch[1];
        return [
            parseInt(shortDigits[0] + shortDigits[0], HEX_RADIX),
            parseInt(shortDigits[1] + shortDigits[1], HEX_RADIX),
            parseInt(shortDigits[2] + shortDigits[2], HEX_RADIX)
        ];
    }

    return null;
}

/* =============================================
   Read Obsidian's accent color from CSS vars,
   returning [r, g, b] in 0-255 range
   ============================================= */

const APPEARANCE_CONFIG_PATH         = ".obsidian/appearance.json";
const APPEARANCE_ACCENT_KEY          = "accentColor";

/* =============================================
   Read accent color with multiple fallbacks:
   1. appearance.json from vault (most reliable)
   2. CSS variable --accent-h/s/l (Obsidian HSL)
   3. CSS variable --interactive-accent
   4. Hardcoded default
   Returns [r, g, b] in 0-255 range.
   ============================================= */

async function readAccentColorFromVault(vaultAdapter) {
    try {
        const configText = await vaultAdapter.read(APPEARANCE_CONFIG_PATH);
        const config = JSON.parse(configText);
        if (config[APPEARANCE_ACCENT_KEY]) {
            const parsed = parseCssColorToRgb(config[APPEARANCE_ACCENT_KEY]);
            if (parsed) return parsed;
        }
    } catch (_ignored) { /* file missing or unreadable, try next fallback */ }

    const bodyStyles = getComputedStyle(document.body);

    const accentHue        = bodyStyles.getPropertyValue("--accent-h").trim();
    const accentSaturation = bodyStyles.getPropertyValue("--accent-s").trim();
    const accentLightness  = bodyStyles.getPropertyValue("--accent-l").trim();
    if (accentHue && accentSaturation && accentLightness) {
        const hue = parseFloat(accentHue);
        const sat = parseFloat(accentSaturation);
        const lit = parseFloat(accentLightness);
        if (!isNaN(hue) && !isNaN(sat) && !isNaN(lit)) {
            const hex = hslToHex(hue, sat, lit);
            const parsed = parseCssColorToRgb(hex);
            if (parsed) return parsed;
        }
    }

    const accentValue = bodyStyles.getPropertyValue("--interactive-accent").trim();
    if (accentValue) {
        const parsed = parseCssColorToRgb(accentValue);
        if (parsed) return parsed;
    }

    return parseCssColorToRgb(DEFAULT_ACCENT_COLOR);
}

/* =============================================
   Convert [r, g, b] (0-255 each) to HSL
   [h, s, l] where h is 0-360, s and l are 0-100
   ============================================= */

function rgbToHsl(redByte, greenByte, blueByte) {
    const redNormalized   = redByte / LUMINANCE_FULL_SCALE;
    const greenNormalized = greenByte / LUMINANCE_FULL_SCALE;
    const blueNormalized  = blueByte / LUMINANCE_FULL_SCALE;

    const channelMax = Math.max(redNormalized, greenNormalized, blueNormalized);
    const channelMin = Math.min(redNormalized, greenNormalized, blueNormalized);
    const delta      = channelMax - channelMin;
    const lightness  = (channelMax + channelMin) / 2;

    if (delta === 0) return [0, 0, Math.round(lightness * PERCENT_SCALE)];

    const saturation = delta / (1 - Math.abs(2 * lightness - HSL_MAX_CHANNEL_FLOAT));
    let hue = 0;

    if (channelMax === redNormalized) {
        hue = HSL_HUE_SECTOR_SIZE * (((greenNormalized - blueNormalized) / delta) % 6);
    } else if (channelMax === greenNormalized) {
        hue = HSL_HUE_SECTOR_SIZE * ((blueNormalized - redNormalized) / delta + 2);
    } else {
        hue = HSL_HUE_SECTOR_SIZE * ((redNormalized - greenNormalized) / delta + 4);
    }

    if (hue < 0) hue += HUE_DEGREES_FULL_CIRCLE;
    return [
        Math.round(hue),
        Math.round(saturation * PERCENT_SCALE),
        Math.round(lightness * PERCENT_SCALE)
    ];
}

/* =============================================
   Convert HSL back to hex (#rrggbb)
   ============================================= */

function hslToHex(hue, saturationPercent, lightnessPercent) {
    const saturation = saturationPercent / PERCENT_SCALE;
    const lightness  = lightnessPercent / PERCENT_SCALE;
    const chroma     = (1 - Math.abs(2 * lightness - HSL_MAX_CHANNEL_FLOAT)) * saturation;
    const hueSector  = hue / HSL_HUE_SECTOR_SIZE;
    const secondary  = chroma * (1 - Math.abs(hueSector % 2 - HSL_MAX_CHANNEL_FLOAT));
    const lightnessOffset = lightness - chroma / 2;

    let redPrime = 0, greenPrime = 0, bluePrime = 0;
    if      (hueSector < 1) { redPrime = chroma; greenPrime = secondary; }
    else if (hueSector < 2) { redPrime = secondary; greenPrime = chroma; }
    else if (hueSector < 3) { greenPrime = chroma; bluePrime = secondary; }
    else if (hueSector < 4) { greenPrime = secondary; bluePrime = chroma; }
    else if (hueSector < 5) { redPrime = secondary; bluePrime = chroma; }
    else                    { redPrime = chroma; bluePrime = secondary; }

    const redByte   = Math.round((redPrime + lightnessOffset) * LUMINANCE_FULL_SCALE);
    const greenByte = Math.round((greenPrime + lightnessOffset) * LUMINANCE_FULL_SCALE);
    const blueByte  = Math.round((bluePrime + lightnessOffset) * LUMINANCE_FULL_SCALE);

    return "#"
        + redByte.toString(HEX_RADIX).padStart(2, "0")
        + greenByte.toString(HEX_RADIX).padStart(2, "0")
        + blueByte.toString(HEX_RADIX).padStart(2, "0");
}

/* =============================================
   Generate shades and tints of the accent color.
   Keeps the same hue family with a small
   alternating nudge for visual separation.
   ============================================= */

function generatePaletteFromAccent(segmentCount, accentRgb) {
    const [accentHue] = rgbToHsl(accentRgb[0], accentRgb[1], accentRgb[2]);
    const palette = [];

    for (let index = 0; index < segmentCount; index++) {
        const interpolation = segmentCount === 1
            ? 0.5
            : index / (segmentCount - 1);
        const lightness  = Math.round(
            SHADE_LIGHTNESS_MIN + interpolation * (SHADE_LIGHTNESS_MAX - SHADE_LIGHTNESS_MIN)
        );
        const saturation = Math.round(
            SHADE_SATURATION_MAX - interpolation * (SHADE_SATURATION_MAX - SHADE_SATURATION_MIN)
        );
        const hueNudgeDirection = index % 2 === 0 ? 1 : -1;
        const hue = (accentHue + hueNudgeDirection * SHADE_HUE_NUDGE_DEGREES + HUE_DEGREES_FULL_CIRCLE) % HUE_DEGREES_FULL_CIRCLE;
        palette.push(hslToHex(hue, saturation, lightness));
    }
    return palette;
}

/* =============================================
   Derive pointer colors from the accent
   ============================================= */

function accentPointerColors(accentRgb) {
    const [hue, saturation, lightness] = rgbToHsl(accentRgb[0], accentRgb[1], accentRgb[2]);
    const fillColor   = hslToHex(hue, saturation, lightness);
    const borderColor = hslToHex(hue, saturation, Math.max(0, lightness - POINTER_DARKENING_AMOUNT));
    return { fillColor, borderColor };
}

/* =============================================
   Extract the first bold phrase from raw
   markdown text, or return null if none found
   ============================================= */

function extractFirstBoldPhrase(rawText) {
    const boldMatch = rawText.match(/\*\*(.+?)\*\*/);
    if (boldMatch) return stripMarkdownFormatting(boldMatch[1]);
    return null;
}

/* =============================================
   Fix capitalisation for display text.
   - Capitalises the first letter if lowercase
   - Preserves capitalisation of all other words
     (keeps acronyms, proper nouns, etc. intact)
   - Strips trailing punctuation that looks like
     a mid-sentence fragment (colon, comma, semicolon)
   ============================================= */

function fixCapitalisation(text) {
    let cleaned = text.replace(/[,:;]+\s*$/, "").trim();
    if (cleaned.length === 0) return cleaned;
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/* =============================================
   Strip markdown formatting from raw text
   ============================================= */

function stripMarkdownFormatting(text) {
    return text
        .replace(/\[\[([^\]]*?\|)([^\]]*?)\]\]/g, "$2")
        .replace(/\[\[([^\]]*?)\]\]/g, "$1")
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\*(.+?)\*/g, "$1")
        .replace(/`(.+?)`/g, "$1")
        .trim();
}

/* =============================================
   Split "Name: description" at the first colon
   ============================================= */

function splitAtFirstColon(text) {
    const colonMatch = text.match(/^(.+?):\s+(.+)$/);
    if (colonMatch) return [colonMatch[1].trim(), colonMatch[2].trim()];
    return [text.replace(/[:…]+\s*$/, "").replace(/\.{2,}\s*$/, "").trim(), null];
}

/* =============================================
   Create a single to-do node from a bullet's raw
   text. Captures a leading "!"/"%"/"?" priority marker
   (stripped from the label) and the character count
   of the cleaned text used for sector sizing.
   ============================================= */

function createTodoNode(rawBulletText) {
    const markerMatch       = rawBulletText.match(LEADING_MARKER_PATTERN);
    const marker            = markerMatch ? markerMatch[1] : null;
    const textWithoutMarker = marker ? rawBulletText.replace(LEADING_MARKER_PATTERN, "") : rawBulletText;

    const strippedText                = stripMarkdownFormatting(textWithoutMarker);
    const boldLabel                   = extractFirstBoldPhrase(textWithoutMarker);
    const [taskName, taskDescription] = splitAtFirstColon(strippedText);

    return {
        label:            fixCapitalisation(boldLabel || taskName),
        fullName:         fixCapitalisation(taskName),
        description:      taskDescription,
        marker:           marker,
        ownCharCount:     strippedText.length,
        subtreeCharCount: 0,
        children:         []
    };
}

/* =============================================
   Map a leading priority marker to its weight
   multiplier
   ============================================= */

function markerWeightMultiplier(marker) {
    if (marker === MARKER_IMPORTANT)   return WEIGHT_MULTIPLIER_IMPORTANT;
    if (marker === MARKER_IN_PROGRESS) return WEIGHT_MULTIPLIER_IN_PROGRESS;
    if (marker === MARKER_UNCERTAIN)   return WEIGHT_MULTIPLIER_UNCERTAIN;
    return WEIGHT_MULTIPLIER_NEUTRAL;
}

/* =============================================
   Resolve a node's base sector weight under the
   chosen weighting mode (before any cooldown).
     chars    : subtree characters x marker priority
     equal    : the same for every sibling
     priority : marker priority only (length ignored)
     shallow  : favour small / near-done subtrees
   ============================================= */

function weightForNode(node, weightMode) {
    const markerMultiplier = markerWeightMultiplier(node.marker);
    const subtreeChars     = Math.max(node.subtreeCharCount, MIN_SUBTREE_CHAR_COUNT);

    if (weightMode === WEIGHT_MODE_EQUAL)    return EQUAL_WEIGHT_VALUE;
    if (weightMode === WEIGHT_MODE_PRIORITY) return markerMultiplier;
    if (weightMode === WEIGHT_MODE_SHALLOW) {
        return markerMultiplier * (SHALLOW_REFERENCE_CHARS / (subtreeChars + SHALLOW_REFERENCE_CHARS));
    }
    return subtreeChars * markerMultiplier;
}

/* =============================================
   Recursively total a node's whole-subtree
   character count (itself plus everything nested
   beneath it). Used by every weighting mode.
   ============================================= */

function computeSubtreeWeights(node) {
    let subtreeCharCount = Math.max(node.ownCharCount, 0);
    for (const child of node.children) {
        computeSubtreeWeights(child);
        subtreeCharCount += child.subtreeCharCount;
    }
    node.subtreeCharCount = subtreeCharCount;
    return node;
}

/* =============================================
   Build an uncapped tree of to-do nodes from the
   bullet lines of a section. Indentation governs
   parent/child relationships with no depth limit,
   so every sublevel is preserved rather than being
   flattened into a single list.
   ============================================= */

function buildTodoTree(sectionLines) {
    const rootNodes = [];
    const ancestry  = [];

    for (const line of sectionLines) {
        const bulletMatch = line.match(BULLET_LINE_PATTERN);
        if (!bulletMatch) continue;

        const indentSpaces = bulletMatch[1].replace(/\t/g, " ".repeat(TAB_WIDTH_IN_SPACES)).length;
        const node         = createTodoNode(bulletMatch[3]);

        while (ancestry.length > 0 && ancestry[ancestry.length - 1].indent >= indentSpaces) {
            ancestry.pop();
        }

        if (ancestry.length === 0) {
            rootNodes.push(node);
        } else {
            ancestry[ancestry.length - 1].node.children.push(node);
        }
        ancestry.push({ indent: indentSpaces, node });
    }

    for (const rootNode of rootNodes) computeSubtreeWeights(rootNode);
    return rootNodes;
}

/* =============================================
   Parse the bullet list under the first heading
   matching the target text into an uncapped tree
   of to-do nodes
   ============================================= */

function parseTodoSection(noteContent, targetHeadingText) {
    const lines         = noteContent.split("\n");
    let   insideSection = false;
    let   sectionLevel  = 0;
    const sectionLines  = [];

    for (const line of lines) {
        const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
        if (headingMatch) {
            const headingLevel = headingMatch[1].length;
            if (insideSection && headingLevel <= sectionLevel) break;
            if (headingMatch[2].trim().toLowerCase().includes(targetHeadingText.toLowerCase())) {
                insideSection = true;
                sectionLevel  = headingLevel;
                continue;
            }
        }
        if (insideSection) sectionLines.push(line);
    }

    return { rootNodes: buildTodoTree(sectionLines) };
}

/* =============================================
   Parse a marker filter option value such as
   "! %", "!,%" or "!%" into a set of marker
   characters, plus whether unmarked items count
   (via the keyword "none"/"neutral").
   ============================================= */

function parseMarkerFilter(rawValue) {
    const lower          = rawValue.toLowerCase();
    const includeUnmarked = /\bnone\b/.test(lower) || /\bneutral\b/.test(lower);
    const stripped        = lower.replace(/\bnone\b/g, "").replace(/\bneutral\b/g, "");
    const markerChars     = new Set();
    for (const character of stripped) {
        if (character !== " " && character !== "," && character !== "\t") {
            markerChars.add(character);
        }
    }
    return { markerChars, includeUnmarked };
}

/* =============================================
   Does a node's own marker satisfy a filter spec?
   ============================================= */

function nodeMarkerMatches(node, filterSpec) {
    return node.marker
        ? filterSpec.markerChars.has(node.marker)
        : filterSpec.includeUnmarked;
}

/* =============================================
   Keep only items matching the filter. A matching
   item keeps its whole subtree (so you can still
   descend into its real subtasks); a non-matching
   item survives only as a path to matching
   descendants.
   ============================================= */

function filterTreeOnly(nodes, filterSpec) {
    const kept = [];
    for (const node of nodes) {
        if (nodeMarkerMatches(node, filterSpec)) {
            kept.push(node);
        } else {
            const keptChildren = filterTreeOnly(node.children, filterSpec);
            if (keptChildren.length > 0) {
                kept.push(Object.assign({}, node, { children: keptChildren }));
            }
        }
    }
    return kept;
}

/* =============================================
   Drop items matching the filter, along with
   everything nested beneath them.
   ============================================= */

function filterTreeExclude(nodes, filterSpec) {
    const kept = [];
    for (const node of nodes) {
        if (nodeMarkerMatches(node, filterSpec)) continue;
        kept.push(Object.assign({}, node, {
            children: filterTreeExclude(node.children, filterSpec)
        }));
    }
    return kept;
}

/* =============================================
   Apply optional "only" / "exclude" marker filters
   from a code block, then recompute subtree totals
   so weighting reflects the pruned tree.
   ============================================= */

function applyMarkerFilters(rootNodes, onlyValue, excludeValue) {
    let nodes = rootNodes;
    if (onlyValue) {
        nodes = filterTreeOnly(nodes, parseMarkerFilter(onlyValue));
    }
    if (excludeValue) {
        nodes = filterTreeExclude(nodes, parseMarkerFilter(excludeValue));
    }
    if (nodes !== rootNodes) {
        for (const node of nodes) computeSubtreeWeights(node);
    }
    return nodes;
}

/* =============================================
   Format a Date as "YYYY-MM-DD" (local time)
   ============================================= */

function formatDate(date) {
    const pad = (value) => String(value).padStart(2, "0");
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
}

/* =============================================
   Format a Date as "YYYY-MM-DD HH:mm" (local time)
   ============================================= */

function formatDateTime(date) {
    const pad = (value) => String(value).padStart(2, "0");
    return formatDate(date) + " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
}

/* =============================================
   Update a streak record given a completion today.
   Returns a new record; never mutates the input.
   ============================================= */

function advanceStreak(streak, todayString, yesterdayString) {
    const safe = {
        last:    (streak && streak.last) || "",
        current: (streak && streak.current) || 0,
        longest: (streak && streak.longest) || 0
    };
    if (safe.last === todayString) return safe;

    const current = safe.last === yesterdayString ? safe.current + 1 : 1;
    return {
        last:    todayString,
        current: current,
        longest: Math.max(safe.longest, current)
    };
}

/* =============================================
   Truncate text to fit within a pixel width,
   appending ellipsis if needed
   ============================================= */

function truncateTextToFit(renderingContext, text, maximumWidth) {
    if (renderingContext.measureText(text).width <= maximumWidth) return text;
    let truncated = text;
    while (truncated.length > 1 && renderingContext.measureText(truncated + ELLIPSIS).width > maximumWidth) {
        truncated = truncated.slice(0, -1);
    }
    return truncated + ELLIPSIS;
}

/* =============================================
   Convert sector weights into cumulative angular
   segments. Every sector keeps at least a minimum
   fraction of the circle so thin slices stay
   readable; the remainder is shared proportionally
   to weight. Sweeps always sum to a full circle.
   ============================================= */

function computeSegmentAngles(weights) {
    const segmentCount = weights.length;
    if (segmentCount === 0) return [];

    const totalWeight    = weights.reduce((sum, weight) => sum + Math.max(weight, 0), 0);
    const floorFraction  = Math.min(MIN_SECTOR_ANGLE_FRACTION, 1 / segmentCount);
    const sharedFraction = 1 - floorFraction * segmentCount;

    const segments = [];
    let   cumulativeOffset = 0;
    for (let index = 0; index < segmentCount; index++) {
        const weightFraction = totalWeight > 0
            ? Math.max(weights[index], 0) / totalWeight
            : 1 / segmentCount;
        const sweep = (floorFraction + sharedFraction * weightFraction) * FULL_CIRCLE;
        segments.push({ start: cumulativeOffset, sweep: sweep, end: cumulativeOffset + sweep });
        cumulativeOffset += sweep;
    }
    return segments;
}

/* =============================================
   Determine which segment the pointer rests on
   after the wheel stops spinning
   ============================================= */

function calculateWinnerIndex(currentRotation, segments) {
    let pointerLocalAngle = (POINTER_ANGLE - currentRotation) % FULL_CIRCLE;
    if (pointerLocalAngle < 0) pointerLocalAngle += FULL_CIRCLE;
    for (let index = 0; index < segments.length; index++) {
        if (pointerLocalAngle >= segments[index].start && pointerLocalAngle < segments[index].end) {
            return index;
        }
    }
    return segments.length - 1;
}

/* =============================================
   Pick a segment index at random, weighted so a
   larger sector is proportionally more likely
   ============================================= */

function pickWeightedIndex(weights, totalWeight) {
    if (totalWeight <= 0) return Math.floor(Math.random() * weights.length);
    let threshold = Math.random() * totalWeight;
    for (let index = 0; index < weights.length; index++) {
        threshold -= Math.max(weights[index], 0);
        if (threshold < 0) return index;
    }
    return weights.length - 1;
}

/* =============================================
   Compute total rotation delta for a weighted
   random spin with extra full rotations. The
   winning sector is chosen in proportion to its
   drawn size, and the landing target is biased
   toward the centre of that sector. An optional
   excludeIndex is never chosen (used by "Reroll"
   to guarantee a different result).
   ============================================= */

function calculateSpinDelta(currentRotation, segments, excludeIndex) {
    const sweeps = segments.map((segment, index) =>
        index === excludeIndex ? 0 : segment.sweep
    );
    let totalSweep = sweeps.reduce((sum, sweep) => sum + sweep, 0);
    if (totalSweep <= 0) {
        for (let index = 0; index < sweeps.length; index++) sweeps[index] = segments[index].sweep;
        totalSweep = sweeps.reduce((sum, sweep) => sum + sweep, 0);
    }
    const winnerSegment = segments[pickWeightedIndex(sweeps, totalSweep)];

    const landingWithinSegment = LANDING_CENTER_OFFSET
        + (Math.random() - LANDING_CENTER_OFFSET) * LANDING_JITTER_FACTOR;
    const targetLocalAngle = winnerSegment.start + winnerSegment.sweep * landingWithinSegment;

    let rotationDelta = ((POINTER_ANGLE - targetLocalAngle - currentRotation) % FULL_CIRCLE + FULL_CIRCLE) % FULL_CIRCLE;
    rotationDelta    += (MINIMUM_EXTRA_FULL_ROTATIONS + Math.floor(Math.random() * EXTRA_ROTATION_VARIANCE)) * FULL_CIRCLE;
    return rotationDelta;
}

/* =============================================
   Cubic ease-out curve for natural deceleration
   ============================================= */

function cubicEaseOut(progress) {
    return 1 - Math.pow(1 - progress, EASING_EXPONENT);
}

/* =============================================
   Choose readable text color (dark or light)
   for a given background hex color
   ============================================= */

function readableTextColorForBackground(hexColor) {
    const redComponent   = parseInt(hexColor.slice(HEX_RED_START, HEX_RED_END), HEX_RADIX);
    const greenComponent = parseInt(hexColor.slice(HEX_GREEN_START, HEX_GREEN_END), HEX_RADIX);
    const blueComponent  = parseInt(hexColor.slice(HEX_BLUE_START, HEX_BLUE_END), HEX_RADIX);
    const perceivedBrightness =
        (LUMINANCE_RED_WEIGHT * redComponent
            + LUMINANCE_GREEN_WEIGHT * greenComponent
            + LUMINANCE_BLUE_WEIGHT * blueComponent)
        / LUMINANCE_FULL_SCALE;
    return perceivedBrightness > BRIGHTNESS_THRESHOLD
        ? DARK_TEXT_ON_BRIGHT_SEGMENT
        : LIGHT_TEXT_ON_DARK_SEGMENT;
}

/* =============================================
   Choose font size based on segment count
   ============================================= */

function segmentFontSize(itemCount) {
    if (itemCount > MANY_SEGMENTS_THRESHOLD)     return FONT_SIZE_MANY_SEGMENTS;
    if (itemCount > MODERATE_SEGMENTS_THRESHOLD)  return FONT_SIZE_MODERATE_SEGMENTS;
    return FONT_SIZE_FEW_SEGMENTS;
}

/* =============================================
   Launch a brief, dependency-free confetti burst
   over a (position: relative) parent element.
   Self-cleans when the animation finishes.
   ============================================= */

function launchConfetti(parentElement) {
    if (!parentElement) return;

    const width  = parentElement.clientWidth  || CANVAS_PIXEL_SIZE;
    const height = parentElement.clientHeight || CANVAS_PIXEL_SIZE;

    const confettiCanvas = parentElement.createEl("canvas", { cls: "todo-wheel-confetti" });
    confettiCanvas.width  = width;
    confettiCanvas.height = height;
    const context = confettiCanvas.getContext(CANVAS_RENDERING_CONTEXT_TYPE);

    const particles = [];
    for (let index = 0; index < CONFETTI_PARTICLE_COUNT; index++) {
        const angle = Math.random() * FULL_CIRCLE;
        const speed = CONFETTI_MIN_SPEED + Math.random() * CONFETTI_SPEED_VARIANCE;
        particles.push({
            x:        width / 2,
            y:        height / 2,
            velocityX: Math.cos(angle) * speed,
            velocityY: Math.sin(angle) * speed - speed,
            size:     CONFETTI_MIN_SIZE + Math.random() * CONFETTI_SIZE_VARIANCE,
            color:    CONFETTI_COLORS[index % CONFETTI_COLORS.length],
            spin:     Math.random() * FULL_CIRCLE,
            spinRate: (Math.random() - 0.5) * 0.3
        });
    }

    const startTimestamp = performance.now();
    const tick = () => {
        if (!confettiCanvas.isConnected) return;
        const elapsed = performance.now() - startTimestamp;
        context.clearRect(0, 0, width, height);

        for (const particle of particles) {
            particle.velocityX *= CONFETTI_DRAG;
            particle.velocityY  = particle.velocityY * CONFETTI_DRAG + CONFETTI_GRAVITY * 3;
            particle.x         += particle.velocityX;
            particle.y         += particle.velocityY;
            particle.spin      += particle.spinRate;

            context.save();
            context.globalAlpha = Math.max(0, 1 - elapsed / CONFETTI_DURATION_MS);
            context.translate(particle.x, particle.y);
            context.rotate(particle.spin);
            context.fillStyle = particle.color;
            context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 0.6);
            context.restore();
        }

        if (elapsed < CONFETTI_DURATION_MS) {
            requestAnimationFrame(tick);
        } else {
            confettiCanvas.remove();
        }
    };
    requestAnimationFrame(tick);
}

/* =============================================
   WheelRenderer - builds and drives the wheel
   ============================================= */

class WheelRenderer {
    constructor(rootElement, rootNodes, application, accentRgb, options) {
        options = options || {};
        this.application      = application;
        this.rootNodes        = rootNodes;
        this.accentRgb        = accentRgb;
        this.weightMode       = WEIGHT_MODE_VALUES.includes(options.weightMode) ? options.weightMode : WEIGHT_MODE_CHARS;
        this.cooldownCount    = Math.max(0, Math.floor(options.cooldownCount || 0));
        this.onStateChange    = typeof options.onStateChange === "function" ? options.onStateChange : null;
        this.onPick           = typeof options.onPick === "function" ? options.onPick : null;
        this.onComplete       = typeof options.onComplete === "function" ? options.onComplete : null;
        this.streakDays       = Math.max(0, Math.floor(options.streakDays || 0));
        this.recent           = [];
        this.path             = [];
        this.segments         = [];
        this.currentRotation  = Math.random() * FULL_CIRCLE;
        this.isSpinning       = false;
        this.highlightedIndex = NO_HIGHLIGHT_INDEX;
        this.animationFrameId = null;

        this._buildLayout(rootElement);
        this._restoreState(options.savedState);
        this._recomputeSegments();
        this._drawWheel();
    }

    /* Restore a previously saved descent path (by sibling indices) and rotation
       so an Obsidian re-render of the code block does not reset progress. */
    _restoreState(savedState) {
        if (!savedState) return;
        if (Array.isArray(savedState.pathIndices)) {
            let level = this.rootNodes;
            for (const childIndex of savedState.pathIndices) {
                if (!Number.isInteger(childIndex) || childIndex < 0 || childIndex >= level.length) break;
                const node = level[childIndex];
                if (node.children.length === 0) break;
                this.path.push(node);
                level = node.children;
            }
        }
        if (typeof savedState.rotation === "number" && isFinite(savedState.rotation)) {
            this.currentRotation = savedState.rotation;
        }
        if (Array.isArray(savedState.recent)) {
            this.recent = savedState.recent.filter((name) => typeof name === "string");
        }
        this.stageIndicator.setText(this._promptText());
    }

    /* Persist the current descent path (as sibling indices), rotation and the
       recently-picked list (for cooldown). */
    _persist() {
        if (!this.onStateChange) return;
        const pathIndices = [];
        let level = this.rootNodes;
        for (const node of this.path) {
            const childIndex = level.indexOf(node);
            if (childIndex === -1) break;
            pathIndices.push(childIndex);
            level = node.children;
        }
        this.onStateChange({ pathIndices, rotation: this.currentRotation, recent: this.recent.slice() });
    }

    _buildLayout(rootElement) {
        rootElement.empty();
        rootElement.classList.add("todo-wheel-container");

        const headerContainer = rootElement.createDiv({ cls: "todo-wheel-header" });
        const titleRow        = headerContainer.createDiv({ cls: "todo-wheel-title-row" });
        titleRow.createEl("h3", { text: LABELS.PLUGIN_TITLE });
        this.streakBadge = titleRow.createEl("span", { cls: "todo-wheel-streak" });
        this._renderStreakBadge();
        this.stageIndicator = headerContainer.createEl("p", {
            text: LABELS.SPIN_PROMPT,
            cls: "todo-wheel-stage"
        });

        const canvasWrapper = rootElement.createDiv({ cls: "todo-wheel-canvas-wrapper" });
        this.wheelCanvas    = canvasWrapper.createEl("canvas", { cls: "todo-wheel-canvas" });

        const devicePixelRatio         = window.devicePixelRatio || DEFAULT_DEVICE_PIXEL_RATIO;
        this.wheelCanvas.width         = CANVAS_PIXEL_SIZE * devicePixelRatio;
        this.wheelCanvas.height        = CANVAS_PIXEL_SIZE * devicePixelRatio;
        this.wheelCanvas.style.width   = CANVAS_PIXEL_SIZE + "px";
        this.wheelCanvas.style.height  = CANVAS_PIXEL_SIZE + "px";
        this.renderingContext          = this.wheelCanvas.getContext(CANVAS_RENDERING_CONTEXT_TYPE);
        this.renderingContext.scale(devicePixelRatio, devicePixelRatio);

        this.wheelCanvas.addEventListener("click",     (event) => this._handleCanvasClick(event));
        this.wheelCanvas.addEventListener("mousemove", (event) => this._handleCanvasMouseMove(event));

        this.resultContainer = rootElement.createDiv({ cls: "todo-wheel-result" });
        this.resultContainer.style.display = "none";

        this.actionsContainer = rootElement.createDiv({ cls: "todo-wheel-actions" });
    }

    _currentNodes() {
        if (this.path.length === 0) return this.rootNodes;
        return this.path[this.path.length - 1].children;
    }

    _breadcrumb() {
        return this.path.map((node) => node.fullName).join(" \u203a ");
    }

    _promptText() {
        return this.path.length === 0
            ? LABELS.SPIN_PROMPT
            : LABELS.chooseFrom(this._breadcrumb());
    }

    _choosingText() {
        return this.path.length === 0
            ? LABELS.CHOOSING
            : LABELS.choosingFrom(this._breadcrumb());
    }

    _renderStreakBadge() {
        if (!this.streakBadge) return;
        if (this.streakDays > 0) {
            this.streakBadge.setText(LABELS.streakBadge(this.streakDays));
            this.streakBadge.style.display = "";
            this.streakBadge.setAttribute("aria-label", LABELS.streakSummary(this.streakDays, this.streakDays));
        } else {
            this.streakBadge.setText("");
            this.streakBadge.style.display = "none";
        }
    }

    /* Down-weight a node that was picked recently so the wheel stops
       repeating itself. The most recent pick is damped most, easing
       back to full weight as it ages out of the cooldown window. */
    _cooldownMultiplier(node) {
        if (this.cooldownCount <= 0 || this.recent.length === 0) return 1;
        const positionFromOldest = this.recent.lastIndexOf(node.fullName);
        if (positionFromOldest === -1) return 1;
        const recencyFromNewest = this.recent.length - 1 - positionFromOldest;
        const easing = Math.min(1, recencyFromNewest / this.cooldownCount);
        return COOLDOWN_MIN_MULTIPLIER + (1 - COOLDOWN_MIN_MULTIPLIER) * easing;
    }

    _effectiveWeights(nodes) {
        return nodes.map((node) =>
            Math.max(0, weightForNode(node, this.weightMode)) * this._cooldownMultiplier(node)
        );
    }

    _recomputeSegments() {
        this.segments = computeSegmentAngles(this._effectiveWeights(this._currentNodes()));
    }

    _recordRecent(node) {
        if (this.cooldownCount <= 0) return;
        this.recent.push(node.fullName);
        while (this.recent.length > this.cooldownCount) this.recent.shift();
    }

    _canvasOffsetFromCenter(event) {
        const canvasRect = this.wheelCanvas.getBoundingClientRect();
        return [
            event.clientX - canvasRect.left - CENTER_X,
            event.clientY - canvasRect.top  - CENTER_Y
        ];
    }

    _handleCanvasClick(event) {
        if (this.isSpinning) return;
        const [offsetX, offsetY] = this._canvasOffsetFromCenter(event);
        if (Math.hypot(offsetX, offsetY) <= CENTER_BUTTON_RADIUS) this._startSpin();
    }

    _handleCanvasMouseMove(event) {
        const [offsetX, offsetY] = this._canvasOffsetFromCenter(event);
        this.wheelCanvas.style.cursor =
            Math.hypot(offsetX, offsetY) <= CENTER_BUTTON_RADIUS ? "pointer" : "default";
    }

    _startSpin(options) {
        options = options || {};
        const nodes = this._currentNodes();
        if (nodes.length === 0 || this.isSpinning) return;

        this._recomputeSegments();
        const segments = this.segments;

        this.isSpinning       = true;
        this.highlightedIndex = NO_HIGHLIGHT_INDEX;
        this.resultContainer.style.display = "none";
        this.actionsContainer.empty();
        this.stageIndicator.setText(this._choosingText());

        const excludeIndex        = Number.isInteger(options.excludeIndex) ? options.excludeIndex : -1;
        const totalDelta          = calculateSpinDelta(this.currentRotation, segments, excludeIndex);
        const rotationAtSpinStart  = this.currentRotation;
        const spinStartTimestamp   = performance.now();

        const animationTick = () => {
            if (!this.wheelCanvas.isConnected) {
                this.isSpinning = false;
                return;
            }

            const elapsedProgress = Math.min(
                (performance.now() - spinStartTimestamp) / SPIN_DURATION_MS,
                1
            );
            this.currentRotation = rotationAtSpinStart + totalDelta * cubicEaseOut(elapsedProgress);
            this._drawWheel();

            if (elapsedProgress < 1) {
                this.animationFrameId = requestAnimationFrame(animationTick);
            } else {
                this.isSpinning       = false;
                this.highlightedIndex = calculateWinnerIndex(this.currentRotation, segments);
                this._drawWheel();
                this._recordRecent(nodes[this.highlightedIndex]);
                this._persist();
                this._announceResult(nodes);
            }
        };
        this.animationFrameId = requestAnimationFrame(animationTick);
    }

    _announceResult(nodes) {
        const winner = nodes[this.highlightedIndex];

        if (winner.children.length > 0) {
            this.stageIndicator.setText(LABELS.itemChosen(winner.fullName));
            this._displayResult(LABELS.ITEM_CHOSEN_HEADER, winner.fullName, null, winner.marker);

            const descendButton = this.actionsContainer.createEl("button", {
                text: LABELS.pickFrom(winner.fullName),
                cls: "todo-wheel-btn todo-wheel-primary"
            });
            descendButton.addEventListener("click", () => {
                this.path.push(winner);
                this._returnToSelection();
            });

            this._addRerollButton();
            this._addBackButton();
            this._addStartOverButton();
            new Notice(LABELS.itemChosen(winner.fullName));
        } else {
            const parentName = this.path.length === 0
                ? LABELS.YOUR_TASK
                : LABELS.resultHeader(this.path[this.path.length - 1].fullName);
            this.stageIndicator.setText(LABELS.DONE);
            this._displayResult(parentName, winner.fullName, winner.description, winner.marker);
            this._addLeafButtons(winner);
            new Notice(
                this.path.length === 0
                    ? LABELS.noticeStandaloneTask(winner.fullName)
                    : LABELS.noticeTask(winner.fullName, winner.description)
            );
            this._logPick(winner);
        }
    }

    _displayResult(labelText, mainText, descriptionText, marker) {
        this.resultContainer.empty();
        this.resultContainer.style.display = "block";
        this.resultContainer.classList.remove("todo-wheel-pop");
        void this.resultContainer.offsetWidth;
        this.resultContainer.classList.add("todo-wheel-pop");

        const labelRow = this.resultContainer.createEl("div", { cls: "todo-wheel-result-label" });
        if (marker && MARKER_EMOJI[marker]) {
            labelRow.createEl("span", { text: MARKER_EMOJI[marker], cls: "todo-wheel-result-marker" });
        }
        labelRow.createSpan({ text: labelText });

        this.resultContainer.createEl("div", { text: mainText, cls: "todo-wheel-result-text" });
        if (descriptionText) {
            this.resultContainer.createEl("div", { text: descriptionText, cls: "todo-wheel-result-desc" });
        }
    }

    _returnToSelection() {
        this.highlightedIndex = NO_HIGHLIGHT_INDEX;
        this.resultContainer.style.display = "none";
        this.actionsContainer.empty();
        this.stageIndicator.setText(this._promptText());
        this.currentRotation = Math.random() * FULL_CIRCLE;
        this._recomputeSegments();
        this._persist();
        this._drawWheel();
    }

    /* Respin the current level. When excludeCurrent is set, the item just
       landed on is never chosen again, guaranteeing a different result
       within the same branch (Feature: reroll within branch). */
    _addRerollButton(excludeCurrent) {
        const rerollButton = this.actionsContainer.createEl("button", {
            text: excludeCurrent ? LABELS.REROLL : LABELS.TRY_AGAIN,
            cls: "todo-wheel-btn"
        });
        const excludeIndex = excludeCurrent ? this.highlightedIndex : -1;
        rerollButton.addEventListener("click", () => {
            this.highlightedIndex = NO_HIGHLIGHT_INDEX;
            this.resultContainer.style.display = "none";
            this.actionsContainer.empty();
            this._startSpin({ excludeIndex });
        });
    }

    _addBackButton() {
        if (this.path.length === 0) return;
        const backButton = this.actionsContainer.createEl("button", {
            text: LABELS.BACK_ONE_LEVEL,
            cls: "todo-wheel-btn"
        });
        backButton.addEventListener("click", () => {
            this.path.pop();
            this._returnToSelection();
        });
    }

    _addStartOverButton() {
        if (this.path.length === 0) return;
        const startOverButton = this.actionsContainer.createEl("button", {
            text: LABELS.START_OVER,
            cls: "todo-wheel-btn"
        });
        startOverButton.addEventListener("click", () => {
            this.path = [];
            this._returnToSelection();
        });
    }

    /* Buttons shown when the wheel lands on an actual task (a leaf):
       a celebratory "Mark done", a guaranteed-different "Reroll", and
       the usual navigation. */
    _addLeafButtons(winner) {
        this.actionsContainer.empty();

        const markDoneButton = this.actionsContainer.createEl("button", {
            text: LABELS.MARK_DONE,
            cls: "todo-wheel-btn todo-wheel-primary"
        });
        markDoneButton.addEventListener("click", () => this._markDone(winner, markDoneButton));

        this._addRerollButton(true);
        this._addBackButton();
        this._addStartOverButton();
    }

    _markDone(winner, button) {
        button.disabled = true;
        button.classList.add("todo-wheel-done");
        button.setText(LABELS.DONE);

        const wrapper = this.wheelCanvas && this.wheelCanvas.parentElement;
        launchConfetti(wrapper);
        new Notice(LABELS.noticeDone(winner.fullName));

        if (this.onComplete) {
            Promise.resolve(this.onComplete(this._taskInfo(winner))).then((streakDays) => {
                if (typeof streakDays === "number") {
                    this.streakDays = streakDays;
                    this._renderStreakBadge();
                    if (streakDays > 0) new Notice(LABELS.streakNotice(streakDays));
                }
            }).catch(() => { /* logging is best-effort */ });
        }
    }

    _taskInfo(winner) {
        return {
            name:        winner.fullName,
            description: winner.description || "",
            marker:      winner.marker || "",
            breadcrumb:  this._breadcrumb()
        };
    }

    _logPick(winner) {
        if (this.onPick) {
            Promise.resolve(this.onPick(this._taskInfo(winner))).catch(() => { /* best-effort */ });
        }
    }

    _drawWheel() {
        const context   = this.renderingContext;
        const nodes     = this._currentNodes();
        const itemCount = nodes.length;

        context.clearRect(0, 0, CANVAS_PIXEL_SIZE, CANVAS_PIXEL_SIZE);

        if (itemCount === 0) {
            context.fillStyle = EMPTY_STATE_TEXT_COLOR;
            context.font      = FONT_SIZE_EMPTY_STATE + "px sans-serif";
            context.textAlign = "center";
            context.fillText(LABELS.NOTHING_TO_SPIN, CENTER_X, CENTER_Y);
            return;
        }

        const weights            = this._effectiveWeights(nodes);
        const segments           = (this.segments && this.segments.length === itemCount)
            ? this.segments
            : computeSegmentAngles(weights);
        this.segments            = segments;
        const fontSize           = segmentFontSize(itemCount);
        const maximumLabelWidth  = WHEEL_RADIUS - CENTER_BUTTON_RADIUS - LABEL_OUTER_MARGIN;
        const segmentPalette     = generatePaletteFromAccent(itemCount, this.accentRgb);

        for (let segmentIndex = 0; segmentIndex < itemCount; segmentIndex++) {
            const segment           = segments[segmentIndex];
            const segmentStartAngle = this.currentRotation + segment.start;
            const segmentEndAngle   = segmentStartAngle + segment.sweep;
            const segmentColor      = segmentPalette[segmentIndex];

            context.beginPath();
            context.moveTo(CENTER_X, CENTER_Y);
            context.arc(CENTER_X, CENTER_Y, WHEEL_RADIUS, segmentStartAngle, segmentEndAngle);
            context.closePath();
            context.fillStyle   = segmentColor;
            context.fill();
            context.strokeStyle = SEGMENT_BORDER_COLOR;
            context.lineWidth   = SEGMENT_BORDER_WIDTH;
            context.stroke();

            if (segmentIndex === this.highlightedIndex) {
                context.save();
                context.beginPath();
                context.moveTo(CENTER_X, CENTER_Y);
                context.arc(CENTER_X, CENTER_Y, WHEEL_RADIUS, segmentStartAngle, segmentEndAngle);
                context.closePath();
                context.strokeStyle = WINNER_HIGHLIGHT_COLOR;
                context.lineWidth   = WINNER_HIGHLIGHT_STROKE_WIDTH;
                context.shadowColor = WINNER_HIGHLIGHT_COLOR;
                context.shadowBlur  = WINNER_HIGHLIGHT_SHADOW_BLUR;
                context.stroke();
                context.restore();
            }

            const segmentMidAngle    = segmentStartAngle + segment.sweep / 2;
            const normalizedMidAngle = ((segmentMidAngle % FULL_CIRCLE) + FULL_CIRCLE) % FULL_CIRCLE;

            context.save();
            context.translate(CENTER_X, CENTER_Y);
            context.rotate(segmentMidAngle);
            context.font      = "bold " + fontSize + "px " + SYSTEM_FONT_STACK;
            context.fillStyle = readableTextColorForBackground(segmentColor);

            if (normalizedMidAngle > QUARTER_CIRCLE && normalizedMidAngle < THREE_QUARTER_CIRCLE) {
                context.rotate(HALF_CIRCLE);
                context.textAlign    = "right";
                context.textBaseline = "middle";
                context.fillText(
                    truncateTextToFit(context, nodes[segmentIndex].label, maximumLabelWidth),
                    -(CENTER_BUTTON_RADIUS + LABEL_INNER_OFFSET),
                    0
                );
            } else {
                context.textAlign    = "left";
                context.textBaseline = "middle";
                context.fillText(
                    truncateTextToFit(context, nodes[segmentIndex].label, maximumLabelWidth),
                    CENTER_BUTTON_RADIUS + LABEL_INNER_OFFSET,
                    0
                );
            }
            context.restore();
        }

        context.beginPath();
        context.arc(CENTER_X, CENTER_Y, WHEEL_RADIUS, 0, FULL_CIRCLE);
        context.strokeStyle = OUTER_RING_COLOR;
        context.lineWidth   = OUTER_RING_WIDTH;
        context.stroke();

        const buttonGradient = context.createRadialGradient(
            CENTER_X, CENTER_Y - BUTTON_GRADIENT_VERTICAL_SHIFT, 0,
            CENTER_X, CENTER_Y, CENTER_BUTTON_RADIUS
        );
        buttonGradient.addColorStop(0, BUTTON_GRADIENT_START_COLOR);
        buttonGradient.addColorStop(1, BUTTON_GRADIENT_END_COLOR);
        context.beginPath();
        context.arc(CENTER_X, CENTER_Y, CENTER_BUTTON_RADIUS, 0, FULL_CIRCLE);
        context.fillStyle   = buttonGradient;
        context.fill();
        context.strokeStyle = BUTTON_BORDER_COLOR;
        context.lineWidth   = BUTTON_BORDER_WIDTH;
        context.stroke();

        context.fillStyle    = BUTTON_TEXT_COLOR;
        context.font         = "bold " + FONT_SIZE_CENTER_BUTTON + "px " + SYSTEM_FONT_STACK;
        context.textAlign    = "center";
        context.textBaseline = "middle";
        context.fillText(
            this.isSpinning ? LABELS.SPINNING_INDICATOR : LABELS.SPIN_BUTTON,
            CENTER_X,
            CENTER_Y
        );

        const pointerColors = accentPointerColors(this.accentRgb);
        const pointerBaseY  = CENTER_Y - WHEEL_RADIUS - POINTER_GAP_FROM_WHEEL;
        context.beginPath();
        context.moveTo(CENTER_X, pointerBaseY + POINTER_HEIGHT + POINTER_TIP_EXTENSION);
        context.lineTo(CENTER_X - POINTER_HEIGHT * POINTER_WIDTH_RATIO, pointerBaseY - POINTER_BASE_INSET);
        context.lineTo(CENTER_X + POINTER_HEIGHT * POINTER_WIDTH_RATIO, pointerBaseY - POINTER_BASE_INSET);
        context.closePath();
        context.fillStyle   = pointerColors.fillColor;
        context.strokeStyle = pointerColors.borderColor;
        context.lineWidth   = POINTER_STROKE_WIDTH;
        context.fill();
        context.stroke();
    }

    destroy() {
        this.isSpinning = false;
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    }
}

/* =============================================
   Settings tab
   ============================================= */

class TodoWheelSettingTab extends PluginSettingTab {
    constructor(application, plugin) {
        super(application, plugin);
        this.plugin = plugin;
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();
        containerEl.createEl("h2", { text: LABELS.SETTINGS_TITLE });

        new Setting(containerEl)
            .setName(LABELS.SETTING_HEADING_NAME)
            .setDesc(LABELS.SETTING_HEADING_DESC)
            .addText((textInput) =>
                textInput
                    .setPlaceholder(DEFAULT_HEADING_TEXT)
                    .setValue(this.plugin.settings.heading)
                    .onChange(async (value) => {
                        this.plugin.settings.heading = value || DEFAULT_HEADING_TEXT;
                        await this.plugin.saveSettings();
                    })
            );

        new Setting(containerEl)
            .setName(LABELS.SETTING_MODE_NAME)
            .setDesc(LABELS.SETTING_MODE_DESC)
            .addDropdown((dropdown) => {
                for (const mode of WEIGHT_MODE_VALUES) {
                    dropdown.addOption(mode, WEIGHT_MODE_LABELS[mode]);
                }
                dropdown
                    .setValue(this.plugin.settings.weightMode)
                    .onChange(async (value) => {
                        this.plugin.settings.weightMode = value;
                        await this.plugin.saveSettings();
                    });
            });

        new Setting(containerEl)
            .setName(LABELS.SETTING_COOLDOWN_NAME)
            .setDesc(LABELS.SETTING_COOLDOWN_DESC)
            .addText((textInput) =>
                textInput
                    .setPlaceholder(String(DEFAULT_COOLDOWN_COUNT))
                    .setValue(String(this.plugin.settings.cooldownCount))
                    .onChange(async (value) => {
                        const parsed = parseInt(value, 10);
                        this.plugin.settings.cooldownCount = isNaN(parsed) || parsed < 0 ? 0 : parsed;
                        await this.plugin.saveSettings();
                    })
            );

        new Setting(containerEl)
            .setName(LABELS.SETTING_LOG_NAME)
            .setDesc(LABELS.SETTING_LOG_DESC)
            .addToggle((toggle) =>
                toggle
                    .setValue(this.plugin.settings.logHistory)
                    .onChange(async (value) => {
                        this.plugin.settings.logHistory = value;
                        await this.plugin.saveSettings();
                    })
            );

        new Setting(containerEl)
            .setName(LABELS.SETTING_LOG_PATH_NAME)
            .setDesc(LABELS.SETTING_LOG_PATH_DESC)
            .addText((textInput) =>
                textInput
                    .setPlaceholder(DEFAULT_HISTORY_PATH)
                    .setValue(this.plugin.settings.historyLogPath)
                    .onChange(async (value) => {
                        this.plugin.settings.historyLogPath = value.trim() || DEFAULT_HISTORY_PATH;
                        await this.plugin.saveSettings();
                    })
            );

        const streak = this.plugin.settings.streak || { current: 0, longest: 0 };
        new Setting(containerEl)
            .setName(LABELS.SETTING_STREAK_NAME)
            .setDesc(LABELS.streakSummary(streak.current || 0, streak.longest || 0));
    }
}

/* =============================================
   Plugin entry point
   ============================================= */

class TodoWheelPlugin extends Plugin {
    async onload() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
        this.wheelStates = new Map();
        this.addSettingTab(new TodoWheelSettingTab(this.app, this));

        this.registerMarkdownCodeBlockProcessor("todo-wheel", async (source, containerElement, processorContext) => {
            const codeBlockOptions = {};
            for (const line of source.trim().split("\n")) {
                const optionMatch = line.match(/^(\w[\w-]*)\s*:\s*(.+)$/);
                if (optionMatch) {
                    codeBlockOptions[optionMatch[1].trim().toLowerCase()] = optionMatch[2].trim();
                }
            }

            const headingText = codeBlockOptions.heading || this.settings.heading;

            const sourceFile = this.app.vault.getAbstractFileByPath(processorContext.sourcePath);
            if (!sourceFile) {
                containerElement.createEl("p", {
                    text: LABELS.FILE_READ_ERROR,
                    cls: "todo-wheel-empty"
                });
                return;
            }

            const fileContent    = await this.app.vault.cachedRead(sourceFile);
            const parsed         = parseTodoSection(fileContent, headingText);
            const hasFilter      = codeBlockOptions.only || codeBlockOptions.exclude;
            const rootNodes      = applyMarkerFilters(
                parsed.rootNodes,
                codeBlockOptions.only || "",
                codeBlockOptions.exclude || ""
            );

            if (parsed.rootNodes.length === 0) {
                containerElement.createEl("p", {
                    text: LABELS.noTasksFound(headingText),
                    cls: "todo-wheel-empty"
                });
                return;
            }

            if (rootNodes.length === 0) {
                containerElement.createEl("p", {
                    text: hasFilter ? LABELS.NO_MATCHES : LABELS.noTasksFound(headingText),
                    cls: "todo-wheel-empty"
                });
                return;
            }

            let accentRgb = null;
            if (codeBlockOptions.accent) {
                accentRgb = parseCssColorToRgb(codeBlockOptions.accent);
            }
            if (!accentRgb) {
                accentRgb = await readAccentColorFromVault(this.app.vault.adapter);
            }

            const stateKey = processorContext.sourcePath + "::" + headingText.toLowerCase()
                + "::" + (codeBlockOptions.only || "") + "::" + (codeBlockOptions.exclude || "");
            const renderer = new WheelRenderer(containerElement, rootNodes, this.app, accentRgb, {
                weightMode:    this.settings.weightMode,
                cooldownCount: this.settings.cooldownCount,
                streakDays:    (this.settings.streak && this.settings.streak.current) || 0,
                savedState:    this.wheelStates.get(stateKey) || null,
                onStateChange: (state) => this.wheelStates.set(stateKey, state),
                onPick:        (taskInfo) => this.recordPick(taskInfo),
                onComplete:    (taskInfo) => this.recordCompletion(taskInfo)
            });

            const renderChild = new MarkdownRenderChild(containerElement);
            renderChild.onunload = () => renderer.destroy();
            processorContext.addChild(renderChild);
        });
    }

    /* Append a single line to the history note, creating it if missing. */
    async appendHistoryLine(line) {
        const path = this.settings.historyLogPath || DEFAULT_HISTORY_PATH;
        try {
            const existing = this.app.vault.getAbstractFileByPath(path);
            if (existing) {
                await this.app.vault.append(existing, line + "\n");
            } else {
                await this.app.vault.create(path, LABELS.HISTORY_HEADING + line + "\n");
            }
        } catch (error) {
            new Notice("To-Do Wheel: could not write history note (" + path + ").");
        }
    }

    /* Log a picked task (Feature: spin history log). */
    async recordPick(taskInfo) {
        if (!this.settings.logHistory) return;
        const where = taskInfo.breadcrumb ? " (" + taskInfo.breadcrumb + ")" : "";
        await this.appendHistoryLine("- " + formatDateTime(new Date()) + " \u00b7 picked \u00b7 " + taskInfo.name + where);
    }

    /* Log a completion and advance the daily streak
       (Features: spin history log + momentum counter). */
    async recordCompletion(taskInfo) {
        if (this.settings.logHistory) {
            await this.appendHistoryLine("- " + formatDateTime(new Date()) + " \u00b7 \u2705 done \u00b7 " + taskInfo.name);
        }
        const now      = new Date();
        const today    = formatDate(now);
        const yesterday = formatDate(new Date(now.getTime() - MILLISECONDS_PER_DAY));
        this.settings.streak = advanceStreak(this.settings.streak, today, yesterday);
        await this.saveSettings();
        return this.settings.streak.current;
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}

/* Module export (CJS convention) */
var _exports = {};
Object.defineProperty(_exports, "__esModule", { value: true });
Object.defineProperty(_exports, "default", { get: () => TodoWheelPlugin, enumerable: true });
module.exports = _exports;
