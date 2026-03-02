"use strict";

/*
 * To-Do Wheel - Obsidian Plugin
 *
 * Parses bullet lists under a configurable heading into
 * an interactive two-stage spinning picker wheel.
 *
 * Embed with a ```todo-wheel``` code block in any note.
 * Override the heading: heading: Custom Text
 */

const { Plugin, PluginSettingTab, Setting, Notice } = require("obsidian");

/* =============================================
   User-facing labels (single source for i18n)
   ============================================= */

const LABELS = {
    PLUGIN_TITLE:           "To-Do Wheel",
    SPIN_PROMPT:            "Spin to choose a project",
    CHOOSING_PROJECT:       "Choosing a project...",
    CHOOSING_TASK:          "Choosing a task...",
    PROJECT_CHOSEN_HEADER:  "Project chosen",
    PICK_TASK_BUTTON:       "Now pick a task",
    DONE:                   "Done",
    YOUR_TASK:              "Your task",
    TRY_AGAIN:              "Try again",
    BACK_TO_PROJECTS:       "Back to projects",
    NOTHING_TO_SPIN:        "Nothing to spin",
    SPIN_BUTTON:            "SPIN",
    SPINNING_INDICATOR:     "...",
    FILE_READ_ERROR:        "Could not read this file.",
    SETTINGS_TITLE:         "To-Do Wheel",
    SETTING_HEADING_NAME:   "Target heading",
    SETTING_HEADING_DESC:   "Bullet lists under headings matching this text will be parsed. Case-insensitive.",

    projectLabel:           (name) => "Project: " + name,
    chooseTaskFrom:         (name) => 'Choose a task from "' + name + '"',
    noTasksFound:           (heading) => 'No tasks found under a "' + heading + '" heading. Add a matching heading with bullet points beneath it.',
    noticeProjectChosen:    (name) => "Project chosen: " + name,
    noticeStandaloneTask:   (name) => "Your task: " + name,
    noticeTask:             (name, description) => "Task: " + name + (description ? " - " + description : ""),
    resultHeader:           (project) => project,
};

/* =============================================
   Default settings
   ============================================= */

const DEFAULT_HEADING_TEXT = "To-Do List";
const DEFAULT_SETTINGS     = { heading: DEFAULT_HEADING_TEXT };

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
const TOP_LEVEL_INDENT               = 0;

/* =============================================
   Wheel state values
   ============================================= */

const PROJECT_SELECTION_STAGE        = 1;
const TASK_SELECTION_STAGE           = 2;
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
   Parse bullet lists under a target heading
   into a project-to-tasks map
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

    const todosByProject     = {};
    let   currentProjectName = null;

    for (const line of sectionLines) {
        const bulletMatch = line.match(/^(\s*)([-*+])\s+(.+)$/);
        if (!bulletMatch) continue;

        const strippedText = stripMarkdownFormatting(bulletMatch[3]);
        const indentSpaces = bulletMatch[1].replace(/\t/g, " ".repeat(TAB_WIDTH_IN_SPACES)).length;
        const [taskName, taskDescription] = splitAtFirstColon(strippedText);

        if (indentSpaces === TOP_LEVEL_INDENT) {
            currentProjectName = taskName;
            todosByProject[currentProjectName] = {};
        } else if (currentProjectName) {
            todosByProject[currentProjectName][taskName] = taskDescription;
        }
    }
    return todosByProject;
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
   Determine which segment the pointer rests on
   after the wheel stops spinning
   ============================================= */

function calculateWinnerIndex(currentRotation, itemCount) {
    const segmentAngle = FULL_CIRCLE / itemCount;
    let normalizedAngle = (POINTER_ANGLE - currentRotation) % FULL_CIRCLE;
    if (normalizedAngle < 0) normalizedAngle += FULL_CIRCLE;
    return Math.floor(normalizedAngle / segmentAngle) % itemCount;
}

/* =============================================
   Compute total rotation delta for a fair
   random spin with extra full rotations
   ============================================= */

function calculateSpinDelta(currentRotation, itemCount) {
    const segmentAngle   = FULL_CIRCLE / itemCount;
    const winnerSegment  = Math.floor(Math.random() * itemCount);
    const targetAngle    = POINTER_ANGLE
        - (winnerSegment + LANDING_CENTER_OFFSET) * segmentAngle
        + (Math.random() - LANDING_CENTER_OFFSET) * segmentAngle * LANDING_JITTER_FACTOR;
    let rotationDelta    = ((targetAngle - currentRotation) % FULL_CIRCLE + FULL_CIRCLE) % FULL_CIRCLE;
    rotationDelta       += (MINIMUM_EXTRA_FULL_ROTATIONS + Math.floor(Math.random() * EXTRA_ROTATION_VARIANCE)) * FULL_CIRCLE;
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
   WheelRenderer - builds and drives the wheel
   ============================================= */

class WheelRenderer {
    constructor(rootElement, todosByProject, application, accentRgb) {
        this.application          = application;
        this.todosByProject       = todosByProject;
        this.accentRgb            = accentRgb;
        this.currentStage         = PROJECT_SELECTION_STAGE;
        this.selectedProjectName  = null;
        this.currentRotation      = Math.random() * FULL_CIRCLE;
        this.isSpinning           = false;
        this.highlightedIndex     = NO_HIGHLIGHT_INDEX;
        this.animationFrameId     = null;

        this._buildLayout(rootElement);
        this._drawWheel();
    }

    _buildLayout(rootElement) {
        rootElement.empty();
        rootElement.classList.add("todo-wheel-container");

        const headerContainer = rootElement.createDiv({ cls: "todo-wheel-header" });
        headerContainer.createEl("h3", { text: LABELS.PLUGIN_TITLE });
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

    _currentItems() {
        if (this.currentStage === PROJECT_SELECTION_STAGE) {
            return Object.keys(this.todosByProject);
        }
        if (this.currentStage === TASK_SELECTION_STAGE && this.selectedProjectName) {
            return Object.keys(this.todosByProject[this.selectedProjectName]);
        }
        return [];
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

    _startSpin() {
        const items = this._currentItems();
        if (items.length === 0 || this.isSpinning) return;

        this.isSpinning       = true;
        this.highlightedIndex = NO_HIGHLIGHT_INDEX;
        this.resultContainer.style.display = "none";
        this.actionsContainer.empty();
        this.stageIndicator.setText(
            this.currentStage === PROJECT_SELECTION_STAGE
                ? LABELS.CHOOSING_PROJECT
                : LABELS.CHOOSING_TASK
        );

        const totalDelta           = calculateSpinDelta(this.currentRotation, items.length);
        const rotationAtSpinStart  = this.currentRotation;
        const spinStartTimestamp   = performance.now();

        const animationTick = () => {
            if (!this.wheelCanvas.isConnected) return;

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
                this.highlightedIndex = calculateWinnerIndex(this.currentRotation, items.length);
                this._drawWheel();
                this._announceResult(items);
            }
        };
        this.animationFrameId = requestAnimationFrame(animationTick);
    }

    _announceResult(items) {
        const winningItemName = items[this.highlightedIndex];

        if (this.currentStage === PROJECT_SELECTION_STAGE) {
            const projectTasks = this.todosByProject[winningItemName];
            const taskNames    = Object.keys(projectTasks);

            if (taskNames.length > 0) {
                this.stageIndicator.setText(LABELS.projectLabel(winningItemName));
                this._displayResult(LABELS.PROJECT_CHOSEN_HEADER, winningItemName, null);

                const pickTaskButton = this.actionsContainer.createEl("button", {
                    text: LABELS.PICK_TASK_BUTTON,
                    cls: "todo-wheel-btn todo-wheel-primary"
                });
                pickTaskButton.addEventListener("click", () => {
                    this.selectedProjectName = winningItemName;
                    this.currentStage        = TASK_SELECTION_STAGE;
                    this.highlightedIndex    = NO_HIGHLIGHT_INDEX;
                    this.resultContainer.style.display = "none";
                    this.actionsContainer.empty();
                    this.stageIndicator.setText(LABELS.chooseTaskFrom(winningItemName));
                    this.currentRotation = Math.random() * FULL_CIRCLE;
                    this._drawWheel();
                });

                this._addTryAgainButton();
                new Notice(LABELS.noticeProjectChosen(winningItemName));
            } else {
                this.stageIndicator.setText(LABELS.DONE);
                this._displayResult(LABELS.YOUR_TASK, winningItemName, null);
                this._addResetButtons();
                new Notice(LABELS.noticeStandaloneTask(winningItemName));
            }
        } else {
            const taskDescription = this.todosByProject[this.selectedProjectName][winningItemName];
            this.stageIndicator.setText(LABELS.DONE);
            this._displayResult(
                LABELS.resultHeader(this.selectedProjectName),
                winningItemName,
                taskDescription
            );
            this._addResetButtons();
            new Notice(LABELS.noticeTask(winningItemName, taskDescription));
        }
    }

    _displayResult(labelText, mainText, descriptionText) {
        this.resultContainer.empty();
        this.resultContainer.style.display = "block";
        this.resultContainer.createEl("div", { text: labelText,   cls: "todo-wheel-result-label" });
        this.resultContainer.createEl("div", { text: mainText,    cls: "todo-wheel-result-text"  });
        if (descriptionText) {
            this.resultContainer.createEl("div", { text: descriptionText, cls: "todo-wheel-result-desc" });
        }
    }

    _addTryAgainButton() {
        const tryAgainButton = this.actionsContainer.createEl("button", {
            text: LABELS.TRY_AGAIN,
            cls: "todo-wheel-btn"
        });
        tryAgainButton.addEventListener("click", () => {
            this.highlightedIndex = NO_HIGHLIGHT_INDEX;
            this.resultContainer.style.display = "none";
            this.actionsContainer.empty();
            this._startSpin();
        });
    }

    _addResetButtons() {
        this.actionsContainer.empty();

        const backButton = this.actionsContainer.createEl("button", {
            text: LABELS.BACK_TO_PROJECTS,
            cls: "todo-wheel-btn"
        });
        backButton.addEventListener("click", () => {
            this.currentStage        = PROJECT_SELECTION_STAGE;
            this.selectedProjectName = null;
            this.highlightedIndex    = NO_HIGHLIGHT_INDEX;
            this.resultContainer.style.display = "none";
            this.actionsContainer.empty();
            this.stageIndicator.setText(LABELS.SPIN_PROMPT);
            this.currentRotation = Math.random() * FULL_CIRCLE;
            this._drawWheel();
        });

        this._addTryAgainButton();
    }

    _drawWheel() {
        const context   = this.renderingContext;
        const items     = this._currentItems();
        const itemCount = items.length;

        context.clearRect(0, 0, CANVAS_PIXEL_SIZE, CANVAS_PIXEL_SIZE);

        if (itemCount === 0) {
            context.fillStyle = EMPTY_STATE_TEXT_COLOR;
            context.font      = FONT_SIZE_EMPTY_STATE + "px sans-serif";
            context.textAlign = "center";
            context.fillText(LABELS.NOTHING_TO_SPIN, CENTER_X, CENTER_Y);
            return;
        }

        const segmentAngle      = FULL_CIRCLE / itemCount;
        const fontSize           = segmentFontSize(itemCount);
        const maximumLabelWidth  = WHEEL_RADIUS - CENTER_BUTTON_RADIUS - LABEL_OUTER_MARGIN;
        const segmentPalette     = generatePaletteFromAccent(itemCount, this.accentRgb);

        for (let segmentIndex = 0; segmentIndex < itemCount; segmentIndex++) {
            const segmentStartAngle = this.currentRotation + segmentIndex * segmentAngle;
            const segmentEndAngle   = segmentStartAngle + segmentAngle;
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

            const segmentMidAngle    = segmentStartAngle + segmentAngle / 2;
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
                    truncateTextToFit(context, items[segmentIndex], maximumLabelWidth),
                    -(CENTER_BUTTON_RADIUS + LABEL_INNER_OFFSET),
                    0
                );
            } else {
                context.textAlign    = "left";
                context.textBaseline = "middle";
                context.fillText(
                    truncateTextToFit(context, items[segmentIndex], maximumLabelWidth),
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
    }
}

/* =============================================
   Plugin entry point
   ============================================= */

class TodoWheelPlugin extends Plugin {
    async onload() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
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
            const todosByProject = parseTodoSection(fileContent, headingText);

            if (Object.keys(todosByProject).length === 0) {
                containerElement.createEl("p", {
                    text: LABELS.noTasksFound(headingText),
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
            new WheelRenderer(containerElement, todosByProject, this.app, accentRgb);
        });
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
