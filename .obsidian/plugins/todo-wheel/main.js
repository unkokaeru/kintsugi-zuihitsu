"use strict";

/*
 * To-Do Wheel — Obsidian Plugin
 *
 * Parses bullet lists under a configurable heading and renders
 * an interactive spinning picker wheel.
 *
 * Usage: place a ```todo-wheel``` code block in the same note.
 * Optionally pass  heading: My Heading  inside the code block.
 */

const { Plugin, PluginSettingTab, Setting, Notice } = require("obsidian");

/* ═══════════════════════════════════════════
   Constants
   ═══════════════════════════════════════════ */

const DEFAULT_SETTINGS = { heading: "To-Do List" };

const COLORS = [
    "#E74C3C", "#3498DB", "#2ECC71", "#F39C12",
    "#9B59B6", "#1ABC9C", "#E67E22", "#2980B9",
    "#27AE60", "#D35400", "#8E44AD", "#16A085",
    "#C0392B", "#2C3E50", "#F1C40F", "#7F8C8D"
];

const CANVAS_SIZE  = 420;
const WHEEL_RADIUS = 175;
const CX           = CANVAS_SIZE / 2;
const CY           = CANVAS_SIZE / 2;
const BTN_R        = 36;
const SPIN_MS      = 4500;
const POINTER_ANG  = -Math.PI / 2;          // 12-o'clock

/* ═══════════════════════════════════════════
   Utility helpers
   ═══════════════════════════════════════════ */

function stripMd(text) {
    return text
        .replace(/\[\[([^\]]*?\|)([^\]]*?)\]\]/g, "$2")   // [[x|display]]
        .replace(/\[\[([^\]]*?)\]\]/g, "$1")               // [[link]]
        .replace(/\*\*(.+?)\*\*/g, "$1")                   // bold
        .replace(/\*(.+?)\*/g, "$1")                       // italic
        .replace(/`(.+?)`/g, "$1")                         // inline code
        .trim();
}

function splitColon(text) {
    const m = text.match(/^(.+?):\s+(.+)$/);
    if (m) return [m[1].trim(), m[2].trim()];
    return [text.replace(/[:…]+\s*$/, "").replace(/\.{2,}\s*$/, "").trim(), null];
}

function parseTodoSection(content, headingText) {
    const lines      = content.split("\n");
    let   inSection   = false;
    let   sectionLvl  = 0;
    const bullets     = [];

    for (const line of lines) {
        const hm = line.match(/^(#{1,6})\s+(.+)$/);
        if (hm) {
            const lvl = hm[1].length;
            if (inSection && lvl <= sectionLvl) break;
            if (hm[2].trim().toLowerCase().includes(headingText.toLowerCase())) {
                inSection  = true;
                sectionLvl = lvl;
                continue;
            }
        }
        if (inSection) bullets.push(line);
    }

    const todos = {};
    let curProject = null;

    for (const line of bullets) {
        const bm = line.match(/^(\s*)([-*+])\s+(.+)$/);
        if (!bm) continue;

        const raw    = stripMd(bm[3]);
        const indent = bm[1].replace(/\t/g, "    ").length;
        const [name, desc] = splitColon(raw);

        if (indent === 0) {
            curProject = name;
            todos[curProject] = {};
        } else if (curProject) {
            todos[curProject][name] = desc;
        }
    }
    return todos;                              // { project: { task: desc|null } }
}

function truncText(ctx, text, maxW) {
    if (ctx.measureText(text).width <= maxW) return text;
    let t = text;
    while (t.length > 1 && ctx.measureText(t + "\u2026").width > maxW) t = t.slice(0, -1);
    return t + "\u2026";
}

function winnerIndex(rotation, n) {
    const seg = (2 * Math.PI) / n;
    let a = (POINTER_ANG - rotation) % (2 * Math.PI);
    if (a < 0) a += 2 * Math.PI;
    return Math.floor(a / seg) % n;
}

function calcSpin(curRot, n) {
    const seg    = (2 * Math.PI) / n;
    const winner = Math.floor(Math.random() * n);
    const target = POINTER_ANG - (winner + 0.5) * seg + (Math.random() - 0.5) * seg * 0.6;
    let delta    = ((target - curRot) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    delta       += (5 + Math.floor(Math.random() * 5)) * 2 * Math.PI;
    return delta;
}

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

function contrastOn(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55 ? "#1a1a1a" : "#ffffff";
}

/* ═══════════════════════════════════════════
   WheelRenderer — builds & drives the wheel
   ═══════════════════════════════════════════ */

class WheelRenderer {
    constructor(root, todos, app) {
        this.app        = app;
        this.todos      = todos;
        this.stage      = 1;
        this.project    = null;
        this.rotation   = Math.random() * 2 * Math.PI;
        this.spinning   = false;
        this.highlight  = -1;           // index to highlight after spin
        this.frameId    = null;

        this._build(root);
        this._draw();
    }

    /* ── DOM scaffold ── */

    _build(root) {
        root.empty();
        root.classList.add("todo-wheel-container");

        // header
        const hdr      = root.createDiv({ cls: "todo-wheel-header" });
        hdr.createEl("h3", { text: "\uD83C\uDFA1 To-Do Wheel" });
        this.stageEl   = hdr.createEl("p", { text: "Click SPIN to pick a project", cls: "todo-wheel-stage" });

        // canvas
        const wrap     = root.createDiv({ cls: "todo-wheel-canvas-wrapper" });
        this.canvas    = wrap.createEl("canvas", { cls: "todo-wheel-canvas" });
        const dpr      = window.devicePixelRatio || 1;
        this.canvas.width        = CANVAS_SIZE * dpr;
        this.canvas.height       = CANVAS_SIZE * dpr;
        this.canvas.style.width  = CANVAS_SIZE + "px";
        this.canvas.style.height = CANVAS_SIZE + "px";
        this.ctx = this.canvas.getContext("2d");
        this.ctx.scale(dpr, dpr);

        this.canvas.addEventListener("click",     e => this._onClick(e));
        this.canvas.addEventListener("mousemove", e => this._onMove(e));

        // result area
        this.resultEl  = root.createDiv({ cls: "todo-wheel-result" });
        this.resultEl.style.display = "none";

        // action buttons
        this.actionsEl = root.createDiv({ cls: "todo-wheel-actions" });
    }

    /* ── items for current stage ── */

    _items() {
        if (this.stage === 1) return Object.keys(this.todos);
        if (this.stage === 2 && this.project) return Object.keys(this.todos[this.project]);
        return [];
    }

    /* ── input handlers ── */

    _canvasXY(e) {
        const r = this.canvas.getBoundingClientRect();
        return [e.clientX - r.left - CX, e.clientY - r.top - CY];
    }

    _onClick(e) {
        if (this.spinning) return;
        const [x, y] = this._canvasXY(e);
        if (Math.hypot(x, y) <= BTN_R) this._spin();
    }

    _onMove(e) {
        const [x, y] = this._canvasXY(e);
        this.canvas.style.cursor = Math.hypot(x, y) <= BTN_R ? "pointer" : "default";
    }

    /* ── spin logic ── */

    _spin() {
        const items = this._items();
        if (items.length === 0 || this.spinning) return;

        this.spinning  = true;
        this.highlight = -1;
        this.resultEl.style.display = "none";
        this.actionsEl.empty();
        this.stageEl.setText(this.stage === 1 ? "Spinning for a project\u2026" : "Spinning for a task\u2026");

        const delta = calcSpin(this.rotation, items.length);
        const start = this.rotation;
        const t0    = performance.now();

        const tick = () => {
            if (!this.canvas.isConnected) return;       // cleanup guard
            const p = Math.min((performance.now() - t0) / SPIN_MS, 1);
            this.rotation = start + delta * easeOut(p);
            this._draw();
            if (p < 1) {
                this.frameId = requestAnimationFrame(tick);
            } else {
                this.spinning = false;
                this.highlight = winnerIndex(this.rotation, items.length);
                this._draw();
                this._announce(items);
            }
        };
        this.frameId = requestAnimationFrame(tick);
    }

    /* ── result announcement ── */

    _announce(items) {
        const idx    = this.highlight;
        const winner = items[idx];

        if (this.stage === 1) {
            const tasks    = this.todos[winner];
            const taskKeys = Object.keys(tasks);

            if (taskKeys.length > 0) {
                this.stageEl.setText("Project: " + winner);
                this._showResult("\uD83C\uDFAF Selected Project", winner, null);

                const next = this.actionsEl.createEl("button", {
                    text: "\uD83C\uDFB2 Spin for a task \u2192",
                    cls: "todo-wheel-btn todo-wheel-primary"
                });
                next.addEventListener("click", () => {
                    this.project   = winner;
                    this.stage     = 2;
                    this.highlight = -1;
                    this.resultEl.style.display = "none";
                    this.actionsEl.empty();
                    this.stageEl.setText('Stage 2: Pick a task from "' + winner + '"');
                    this.rotation = Math.random() * 2 * Math.PI;
                    this._draw();
                });

                this._addRespin();
                new Notice("\uD83C\uDFAF Project: " + winner);
            } else {
                this.stageEl.setText("Result!");
                this._showResult("\uD83C\uDF89 Your task", winner, null);
                this._addReset();
                new Notice("\uD83C\uDF89 Your task: " + winner);
            }
        } else {
            const desc = this.todos[this.project][winner];
            this.stageEl.setText("Result!");
            this._showResult("\uD83C\uDF89 " + this.project, winner, desc);
            this._addReset();
            new Notice("\uD83C\uDF89 Task: " + winner + (desc ? " \u2014 " + desc : ""));
        }
    }

    _showResult(label, text, desc) {
        this.resultEl.empty();
        this.resultEl.style.display = "block";
        this.resultEl.createEl("div", { text: label, cls: "todo-wheel-result-label" });
        this.resultEl.createEl("div", { text: text,  cls: "todo-wheel-result-text"  });
        if (desc) this.resultEl.createEl("div", { text: desc, cls: "todo-wheel-result-desc" });
    }

    _addRespin() {
        const btn = this.actionsEl.createEl("button", { text: "\u21BB Re-spin", cls: "todo-wheel-btn" });
        btn.addEventListener("click", () => {
            this.highlight = -1;
            this.resultEl.style.display = "none";
            this.actionsEl.empty();
            this._spin();
        });
    }

    _addReset() {
        this.actionsEl.empty();

        const back = this.actionsEl.createEl("button", { text: "\u2190 Back to Projects", cls: "todo-wheel-btn" });
        back.addEventListener("click", () => {
            this.stage     = 1;
            this.project   = null;
            this.highlight = -1;
            this.resultEl.style.display = "none";
            this.actionsEl.empty();
            this.stageEl.setText("Click SPIN to pick a project");
            this.rotation = Math.random() * 2 * Math.PI;
            this._draw();
        });

        this._addRespin();
    }

    /* ── canvas drawing ── */

    _draw() {
        const ctx   = this.ctx;
        const items = this._items();
        const n     = items.length;

        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        if (n === 0) {
            ctx.fillStyle = "#888";
            ctx.font      = "16px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("No items", CX, CY);
            return;
        }

        const seg = (2 * Math.PI) / n;
        const fontSize = n > 12 ? 11 : n > 6 ? 12 : 14;

        /* segments */
        for (let i = 0; i < n; i++) {
            const a0   = this.rotation + i * seg;
            const a1   = a0 + seg;
            const col  = COLORS[i % COLORS.length];

            // fill
            ctx.beginPath();
            ctx.moveTo(CX, CY);
            ctx.arc(CX, CY, WHEEL_RADIUS, a0, a1);
            ctx.closePath();
            ctx.fillStyle = col;
            ctx.fill();

            // border
            ctx.strokeStyle = "rgba(255,255,255,0.55)";
            ctx.lineWidth   = 2;
            ctx.stroke();

            // highlight winner
            if (i === this.highlight) {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(CX, CY);
                ctx.arc(CX, CY, WHEEL_RADIUS, a0, a1);
                ctx.closePath();
                ctx.strokeStyle = "#FFD700";
                ctx.lineWidth   = 5;
                ctx.shadowColor = "#FFD700";
                ctx.shadowBlur  = 14;
                ctx.stroke();
                ctx.restore();
            }

            // text
            const mid  = a0 + seg / 2;
            const norm = ((mid % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            const maxW = WHEEL_RADIUS - BTN_R - 28;

            ctx.save();
            ctx.translate(CX, CY);
            ctx.rotate(mid);
            ctx.font      = "bold " + fontSize + "px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
            ctx.fillStyle = contrastOn(col);

            if (norm > Math.PI / 2 && norm < 3 * Math.PI / 2) {
                ctx.rotate(Math.PI);
                ctx.textAlign    = "right";
                ctx.textBaseline = "middle";
                ctx.fillText(truncText(ctx, items[i], maxW), -(BTN_R + 14), 0);
            } else {
                ctx.textAlign    = "left";
                ctx.textBaseline = "middle";
                ctx.fillText(truncText(ctx, items[i], maxW), BTN_R + 14, 0);
            }
            ctx.restore();
        }

        /* outer ring */
        ctx.beginPath();
        ctx.arc(CX, CY, WHEEL_RADIUS, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(0,0,0,0.15)";
        ctx.lineWidth   = 4;
        ctx.stroke();

        /* center button */
        const grad = ctx.createRadialGradient(CX, CY - 4, 0, CX, CY, BTN_R);
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(1, "#dcdcdc");
        ctx.beginPath();
        ctx.arc(CX, CY, BTN_R, 0, 2 * Math.PI);
        ctx.fillStyle   = grad;
        ctx.fill();
        ctx.strokeStyle = "#bbb";
        ctx.lineWidth   = 2;
        ctx.stroke();

        ctx.fillStyle    = "#333";
        ctx.font         = "bold 16px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.spinning ? "\u2022\u2022\u2022" : "SPIN", CX, CY);

        /* pointer triangle */
        const ps = 16;
        const py = CY - WHEEL_RADIUS - 2;
        ctx.beginPath();
        ctx.moveTo(CX, py + ps + 2);
        ctx.lineTo(CX - ps * 0.7, py - 4);
        ctx.lineTo(CX + ps * 0.7, py - 4);
        ctx.closePath();
        ctx.fillStyle   = "#E74C3C";
        ctx.strokeStyle = "#C0392B";
        ctx.lineWidth   = 2;
        ctx.fill();
        ctx.stroke();
    }

    destroy() {
        if (this.frameId) cancelAnimationFrame(this.frameId);
    }
}

/* ═══════════════════════════════════════════
   Settings tab
   ═══════════════════════════════════════════ */

class TodoWheelSettingTab extends PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        containerEl.createEl("h2", { text: "To-Do Wheel Settings" });

        new Setting(containerEl)
            .setName("Heading text")
            .setDesc("Bullet lists under headings containing this text will be used (case-insensitive).")
            .addText(t =>
                t.setPlaceholder("To-Do List")
                 .setValue(this.plugin.settings.heading)
                 .onChange(async v => {
                     this.plugin.settings.heading = v || "To-Do List";
                     await this.plugin.saveSettings();
                 })
            );
    }
}

/* ═══════════════════════════════════════════
   Plugin entry point
   ═══════════════════════════════════════════ */

class TodoWheelPlugin extends Plugin {
    async onload() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
        this.addSettingTab(new TodoWheelSettingTab(this.app, this));

        this.registerMarkdownCodeBlockProcessor("todo-wheel", async (source, el, ctx) => {
            // parse optional overrides from code-block body
            const opts = {};
            for (const line of source.trim().split("\n")) {
                const m = line.match(/^(\w[\w-]*)\s*:\s*(.+)$/);
                if (m) opts[m[1].trim().toLowerCase()] = m[2].trim();
            }

            const heading = opts.heading || this.settings.heading;

            const file = this.app.vault.getAbstractFileByPath(ctx.sourcePath);
            if (!file) {
                el.createEl("p", { text: "Error: could not read file.", cls: "todo-wheel-empty" });
                return;
            }

            const content = await this.app.vault.cachedRead(file);
            const todos   = parseTodoSection(content, heading);

            if (Object.keys(todos).length === 0) {
                el.createEl("p", {
                    text: 'No to-do items found under a heading containing "' + heading + '". '
                        + "Add a markdown heading with that text and bullet points below it.",
                    cls: "todo-wheel-empty"
                });
                return;
            }

            new WheelRenderer(el, todos, this.app);
        });
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}

/* ── module export (esbuild CJS convention) ── */
var _exports = {};
Object.defineProperty(_exports, "__esModule", { value: true });
Object.defineProperty(_exports, "default", { get: () => TodoWheelPlugin, enumerable: true });
module.exports = _exports;
