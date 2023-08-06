/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Thinlet is an XUI (XML UI) implemented using the anti-pattern of a single big class instead of a series of small classes. <br/>
         * <br/>
         * Thinlet is suitable for low-footprint applications with low- to medium-complex user interface interaction.<br/>
         * <br/>
         * Thinlet was originally developed by Robert Bajzat (rbajzat at freemail.hu), and modified for Java Micro Edition by Thomas R�rvik Skj�lberg (thomas.skjolberg at adactus.no).<br/>
         * <br/>
         * @param {HTMLCanvasElement} canvas
         * @class
         */
        class Thinlet {
            constructor(canvas) {
                if (this.font === undefined) {
                    this.font = null;
                }
                if (this.c_bg === undefined) {
                    this.c_bg = 0;
                }
                if (this.c_text === undefined) {
                    this.c_text = 0;
                }
                if (this.c_textbg === undefined) {
                    this.c_textbg = 0;
                }
                if (this.c_border === undefined) {
                    this.c_border = 0;
                }
                if (this.c_disable === undefined) {
                    this.c_disable = 0;
                }
                if (this.c_hover === undefined) {
                    this.c_hover = 0;
                }
                if (this.c_press === undefined) {
                    this.c_press = 0;
                }
                if (this.c_focus === undefined) {
                    this.c_focus = 0;
                }
                if (this.c_select === undefined) {
                    this.c_select = 0;
                }
                if (this.c_ctrl === undefined) {
                    this.c_ctrl = 0;
                }
                if (this.block === undefined) {
                    this.block = 0;
                }
                if (this.hgradient === undefined) {
                    this.hgradient = null;
                }
                if (this.vgradient === undefined) {
                    this.vgradient = null;
                }
                if (this.watchdelay === undefined) {
                    this.watchdelay = 0;
                }
                if (this.watch === undefined) {
                    this.watch = 0;
                }
                if (this.clipboard === undefined) {
                    this.clipboard = null;
                }
                this.findprefix = "";
                if (this.findtime === undefined) {
                    this.findtime = 0;
                }
                this.content = Thinlet.createImpl("desktop");
                if (this.mouseinside === undefined) {
                    this.mouseinside = null;
                }
                if (this.insidepart === undefined) {
                    this.insidepart = null;
                }
                if (this.mousepressed === undefined) {
                    this.mousepressed = null;
                }
                if (this.pressedpart === undefined) {
                    this.pressedpart = null;
                }
                if (this.referencex === undefined) {
                    this.referencex = 0;
                }
                if (this.referencey === undefined) {
                    this.referencey = 0;
                }
                if (this.mousex === undefined) {
                    this.mousex = 0;
                }
                if (this.mousey === undefined) {
                    this.mousey = 0;
                }
                if (this.focusowner === undefined) {
                    this.focusowner = null;
                }
                if (this.focusinside === undefined) {
                    this.focusinside = false;
                }
                if (this.popupowner === undefined) {
                    this.popupowner = null;
                }
                if (this.tooltipowner === undefined) {
                    this.tooltipowner = null;
                }
                if (this.attentionReference === undefined) {
                    this.attentionReference = null;
                }
                this.attentionRect = null;
                this.attentionSpan = 20;
                this.attentionProgress = 0;
                this.pointer = null;
                this.pointerRect = null;
                this.inverseShadow = null;
                if (this.canvas === undefined) {
                    this.canvas = null;
                }
                if (this.ctx === undefined) {
                    this.ctx = null;
                }
                if (this.g === undefined) {
                    this.g = null;
                }
                if (this.width === undefined) {
                    this.width = 0;
                }
                if (this.height === undefined) {
                    this.height = 0;
                }
                this.canvas = canvas;
                this.installListeners();
                this.ctx = canvas.getContext("2d");
                this.ctx.font = "15px Arial";
                this.font = new org.shikhar.Font("15px Arial", this.ctx);
                this.g = new org.shikhar.Graphics(canvas);
                this.width = ((canvas.width / 2) | 0);
                this.height = ((canvas.height / 2) | 0);
                this.setRectangle(this.content, "bounds", 0, 0, (this.width | 0), (this.height | 0));
                this.setFont$org_shikhar_Font(this.font);
                this.doLayout(this.content);
                const background = 15132390;
                const text = 0;
                const textbackground = 16777215;
                const border = 9474192;
                const disable = -1431261008;
                const hover = 15592941;
                const press = 12171705;
                const focus = 9013658;
                const select = 12961245;
                this.setColors(background, text, textbackground, border, disable, hover, press, focus, select);
            }
            static __static_initialize() { if (!Thinlet.__static_initialized) {
                Thinlet.__static_initialized = true;
                Thinlet.__static_initializer_0();
                Thinlet.__static_initializer_1();
            } }
            static getLocalImage(path) {
                try {
                    const image = new org.shikhar.AWTImage(path);
                    return image;
                }
                catch (ioe) {
                    console.log("imgae can\'t be created " + path + " " + ioe.message);
                    return null;
                }
            }
            static getBlue(color) {
                return (color & 255);
            }
            static getGreen(color) {
                return (color & 65280) >> 8;
            }
            static getRed(color) {
                return (color & 16711680) >> 16;
            }
            static getAlpha(color) {
                return (color & -16777216) >> 24;
            }
            static brighter(color) {
                return Thinlet.offset(color, 10);
            }
            static darker(color) {
                return Thinlet.offset(color, -10);
            }
            static offset(color, delta) {
                return ((((Thinlet.getGreen(color) + 10) & Thinlet.GREEN) << 8) + ((Thinlet.getBlue(color) + 10) & Thinlet.BLUE) + (((Thinlet.getRed(color) + 10) & Thinlet.RED) << 16) + (((Thinlet.getAlpha(color) + 10) & Thinlet.ALPHA) << 24));
            }
            /**
             *
             * Translate the directional and fire keys to the Canvas defaults.
             *
             * @param {number} key
             * @return
             * @return {number}
             */
            translateKey(key) {
                return key;
            }
            static DRAG_ENTERED_$LI$() { Thinlet.__static_initialize(); if (Thinlet.DRAG_ENTERED == null) {
                Thinlet.DRAG_ENTERED = org.shikhar.AWTEvent.RESERVED_ID_MAX_$LI$() + 1;
            } return Thinlet.DRAG_ENTERED; }
            static DRAG_EXITED_$LI$() { Thinlet.__static_initialize(); if (Thinlet.DRAG_EXITED == null) {
                Thinlet.DRAG_EXITED = org.shikhar.AWTEvent.RESERVED_ID_MAX_$LI$() + 2;
            } return Thinlet.DRAG_EXITED; }
            static TXT_AA_$LI$() { Thinlet.__static_initialize(); return Thinlet.TXT_AA; }
            static G_AA_$LI$() { Thinlet.__static_initialize(); return Thinlet.G_AA; }
            static __static_initializer_0() {
                Thinlet.WHEEL_MASK = 0;
                Thinlet.MOUSE_WHEEL = 1;
                try {
                    if ((java.lang.System.getProperty("java.vendor").indexOf("Insignia") !== -1) && java.lang.System.getProperty("os.name").indexOf("Windows CE") === -1) {
                        Thinlet.evm = -1;
                    }
                }
                catch (exc) {
                }
            }
            /**
             * Sets the 9 colors used for components, and repaints the whole UI
             *
             * @param {number} background
             * the backround of panels (dialogs, desktops), and disabled
             * controls, not editable texts, lines between list items (the
             * default value if <i>#e6e6e6</i>)
             * @param {number} text
             * for text, arrow foreground (<i>black</i> by default)
             * @param {number} textbackground
             * the background of text components, and lists (<i>white</i>
             * by default)
             * @param {number} border
             * for outer in inner borders of enabled components (<i>#909090</i>
             * by default)
             * @param {number} disable
             * for text, border, arrow color in disabled components (<i>#b0b0b0</i>
             * by default)
             * @param {number} hover
             * indicates that the mouse is inside a button area (<i>#ededed</i>
             * by default)
             * @param {number} press
             * for pressed buttons, gradient image is calculated using the
             * background and this press color (<i>#b9b9b9</i> by default)
             * @param {number} focus
             * for text caret and rectagle color marking the focus owner (<i>#89899a</i>
             * by default)
             * @param {number} select
             * used as the background of selected text, and list items, and
             * in slider (<i>#c5c5dd</i> by default)
             */
            setColors(background, text, textbackground, border, disable, hover, press, focus, select) {
                this.c_bg = (background);
                this.c_text = (text);
                this.c_textbg = (textbackground);
                this.c_border = (border);
                this.c_disable = (disable);
                this.c_hover = (hover);
                this.c_press = (press);
                this.c_focus = (focus);
                this.c_select = (select);
            }
            /*private*/ repaint$int$int$int$int(x, y, width, height) {
                this.paint$();
            }
            setFont$org_shikhar_Font(font) {
                this.g.setFont(font);
                this.block = font.getHeight();
                this.font = font;
                if (this.content != null)
                    this.validate(this.content);
            }
            doLayout(component) {
                const classname = Thinlet.getComponentClass(component);
                if ("combobox" === classname) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true)) {
                        const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                        this.layoutField(component, this.block, false, (((icon != null) ? icon.width : 0) | 0));
                    }
                    else {
                        const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", -1);
                        if (selected !== -1) {
                            const choice = this.getItem(component, selected);
                            Thinlet.set(component, "text", Thinlet.get$java_lang_Object$java_lang_Object(choice, "text"));
                            Thinlet.set(component, "icon", Thinlet.get$java_lang_Object$java_lang_Object(choice, "icon"));
                        }
                    }
                }
                else if (("textfield" === classname) || ("passwordfield" === classname)) {
                    this.layoutField(component, 0, ("passwordfield" === classname), 0);
                }
                else if ("textarea" === classname) {
                    const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                    let start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                    if (start > text.length) {
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", start = text.length, 0);
                    }
                    let end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                    if (end > text.length) {
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", end = text.length, 0);
                    }
                    const wrap = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "wrap", false);
                    let chars = null;
                    if (wrap) {
                        const bounds = this.getRectangle(component, "bounds");
                        chars = this.getChars(component, text, true, bounds.width - 4, bounds.height);
                        if (chars == null) {
                            chars = this.getChars(component, text, true, bounds.width - this.block - 4, 0);
                        }
                    }
                    else {
                        chars = this.getChars(component, text, false, 0, 0);
                    }
                    const currentfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                    const fm = (currentfont != null) ? currentfont : this.font;
                    let width = 0;
                    let height = 0;
                    let caretx = 0;
                    let carety = 0;
                    for (let i = 0, j = 0; j <= chars.length; j++) {
                        {
                            if ((j === chars.length) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[j]) == '\n'.charCodeAt(0))) {
                                width = Math.max(width, fm.charsWidth(chars, i, j - i));
                                if ((end >= i) && (end <= j)) {
                                    caretx = fm.charsWidth(chars, i, end - i);
                                    carety = height;
                                }
                                height += fm.getHeight();
                                i = j + 1;
                            }
                        }
                        ;
                    }
                    this.layoutScroll(component, width + 2, height - fm.getHeight() + 2, 0, 0, 0, 0, this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", true), 0);
                    this.scrollToVisible(component, caretx, carety, 2, this.font.getHeight() + 2);
                }
                else if ("tabbedpane" === classname) {
                    const bounds = this.getRectangle(component, "bounds");
                    const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                    const horizontal = ((placement === "top") || (placement === "bottom"));
                    const stacked = (placement === "stacked");
                    let tabd = 0;
                    let first = null;
                    let tabsize = 0;
                    for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            if ((tabd === 0) && ((first = this.getRectangle(tab, "bounds")) != null)) {
                                tabd = horizontal ? first.x : first.y;
                            }
                            const d = this.getSize$java_lang_Object$int$int(tab, stacked ? 8 : horizontal ? 12 : 9, stacked ? 3 : horizontal ? 5 : 8);
                            this.setRectangle(tab, "bounds", horizontal ? tabd : 0, horizontal ? 0 : tabd, stacked ? bounds.width : d.width, d.height);
                            if (stacked) {
                                tabd += d.height;
                            }
                            else {
                                tabd += (horizontal ? d.width : d.height) - 3;
                                tabsize = Math.max(tabsize, horizontal ? d.height : d.width);
                            }
                        }
                        ;
                    }
                    const cx = (placement === "left") ? (tabsize + 1) : 2;
                    const cy = (placement === "top") ? (tabsize + 1) : 2;
                    const cwidth = bounds.width - ((horizontal || stacked) ? 4 : (tabsize + 3));
                    const cheight = bounds.height - (stacked ? (tabd + 3) : (horizontal ? (tabsize + 3) : 4));
                    for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            if (!stacked) {
                                if (horizontal) {
                                    if (placement === "bottom") {
                                        r.y = bounds.height - tabsize;
                                    }
                                    r.height = tabsize;
                                }
                                else {
                                    if (placement === "right") {
                                        r.x = bounds.width - tabsize;
                                    }
                                    r.width = tabsize;
                                }
                            }
                            const comp = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":comp");
                            if ((comp != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                this.setRectangle(comp, "bounds", cx - r.x, stacked ? (r.height + 1) : (cy - r.y), cwidth, cheight);
                                this.doLayout(comp);
                            }
                        }
                        ;
                    }
                    this.checkOffset(component);
                }
                else if (("panel" === classname) || (classname === "dialog")) {
                    const gap = this.getInteger$java_lang_Object$java_lang_String$int(component, "gap", 0);
                    const grid = this.getGrid(component);
                    let top = 0;
                    let left = 0;
                    let contentwidth = 0;
                    let contentheight = 0;
                    if (grid != null) {
                        top = this.getInteger$java_lang_Object$java_lang_String$int(component, "top", 0);
                        left = this.getInteger$java_lang_Object$java_lang_String$int(component, "left", 0);
                        const bottom = this.getInteger$java_lang_Object$java_lang_String$int(component, "bottom", 0);
                        const right = this.getInteger$java_lang_Object$java_lang_String$int(component, "right", 0);
                        contentwidth = left + this.getSum(grid[0], 0, grid[0].length, gap, false) + right;
                        contentheight = top + this.getSum(grid[1], 0, grid[1].length, gap, false) + bottom;
                    }
                    const titleheight = this.getSize$java_lang_Object$int$int(component, 0, 0).height;
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, ":titleheight", titleheight, 0);
                    let scrollable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "scrollable", false);
                    const border = ("panel" === classname) && this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", false);
                    const iborder = (border ? 1 : 0);
                    if (scrollable) {
                        if ("panel" === classname) {
                            const head = (titleheight / 2 | 0);
                            const headgap = (titleheight > 0) ? (titleheight - head - iborder) : 0;
                            scrollable = this.layoutScroll(component, contentwidth, contentheight, head, 0, 0, 0, border, headgap);
                        }
                        else {
                            scrollable = this.layoutScroll(component, contentwidth, contentheight, 3 + titleheight, 3, 3, 3, true, 0);
                        }
                    }
                    if (!scrollable) {
                        Thinlet.set(component, ":view", null);
                        Thinlet.set(component, ":port", null);
                    }
                    if (grid != null) {
                        let areax = 0;
                        let areay = 0;
                        let areawidth = 0;
                        let areaheight = 0;
                        if (scrollable) {
                            const view = this.getRectangle(component, ":view");
                            areawidth = view.width;
                            areaheight = view.height;
                        }
                        else {
                            const bounds = this.getRectangle(component, "bounds");
                            areawidth = bounds.width;
                            areaheight = bounds.height;
                            if ("panel" === classname) {
                                areax = iborder;
                                areay = Math.max(iborder, titleheight);
                                areawidth -= 2 * iborder;
                                areaheight -= areay + iborder;
                            }
                            else {
                                areax = 4;
                                areay = 4 + titleheight;
                                areawidth -= 8;
                                areaheight -= areay + 4;
                            }
                        }
                        for (let i = 0; i < 2; i++) {
                            {
                                const d = ((i === 0) ? (areawidth - contentwidth) : (areaheight - contentheight));
                                if (d !== 0) {
                                    const w = this.getSum(grid[2 + i], 0, grid[2 + i].length, 0, false);
                                    if (w > 0) {
                                        for (let j = 0; j < grid[i].length; j++) {
                                            {
                                                if (grid[2 + i][j] !== 0) {
                                                    grid[i][j] += (d * grid[2 + i][j] / w | 0);
                                                }
                                            }
                                            ;
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                        for (let i = 0; comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                            {
                                if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                    continue;
                                }
                                let ix = areax + left + this.getSum(grid[0], 0, grid[4][i], gap, true);
                                let iy = areay + top + this.getSum(grid[1], 0, grid[5][i], gap, true);
                                let iwidth = this.getSum(grid[0], grid[4][i], grid[6][i], gap, false);
                                let iheight = this.getSum(grid[1], grid[5][i], grid[7][i], gap, false);
                                const halign = this.getString$java_lang_Object$java_lang_String$java_lang_String(comp, "halign", "fill");
                                const valign = this.getString$java_lang_Object$java_lang_String$java_lang_String(comp, "valign", "fill");
                                if ((halign !== "fill") || (valign !== "fill")) {
                                    const d = this.getPreferredSize$java_lang_Object(comp);
                                    if (halign !== "fill") {
                                        const dw = Math.max(0, iwidth - d.width);
                                        if (halign === "center") {
                                            ix += (dw / 2 | 0);
                                        }
                                        else if (halign === "right") {
                                            ix += dw;
                                        }
                                        iwidth -= dw;
                                    }
                                    if (valign !== "fill") {
                                        const dh = Math.max(0, iheight - d.height);
                                        if (valign === "center") {
                                            iy += (dh / 2 | 0);
                                        }
                                        else if (valign === "bottom") {
                                            iy += dh;
                                        }
                                        iheight -= dh;
                                    }
                                }
                                this.setRectangle(comp, "bounds", ix, iy, iwidth, iheight);
                                this.doLayout(comp);
                                i++;
                            }
                            ;
                        }
                    }
                }
                else if ("desktop" === classname) {
                    const bounds = this.getRectangle(component, "bounds");
                    for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            const iclass = Thinlet.getComponentClass(comp);
                            if (iclass === "dialog") {
                                const d = this.getPreferredSize$java_lang_Object(comp);
                                if (Thinlet.get$java_lang_Object$java_lang_Object(comp, "bounds") == null)
                                    this.setRectangle(comp, "bounds", Math.max(0, ((bounds.width - d.width) / 2 | 0)), Math.max(0, ((bounds.height - d.height) / 2 | 0)), Math.min(d.width, bounds.width), Math.min(d.height, bounds.height));
                            }
                            else if ((iclass !== ":combolist") && (iclass !== ":popup")) {
                                this.setRectangle(comp, "bounds", 0, 0, bounds.width, bounds.height);
                            }
                            this.doLayout(comp);
                        }
                        ;
                    }
                }
                else if ("spinbox" === classname) {
                    this.layoutField(component, this.block, false, 0);
                }
                else if ("splitpane" === classname) {
                    const bounds = this.getRectangle(component, "bounds");
                    const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    let divider = this.getInteger$java_lang_Object$java_lang_String$int(component, "divider", -1);
                    const maxdiv = Math.max(0, (horizontal ? bounds.width : bounds.height) - 5);
                    const comp1 = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                    const visible1 = (comp1 != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp1, "visible", true);
                    if (divider === -1) {
                        let d1 = 0;
                        if (visible1) {
                            const d = this.getPreferredSize$java_lang_Object(comp1);
                            d1 = horizontal ? d.width : d.height;
                        }
                        divider = Math.min(d1, maxdiv);
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "divider", divider, -1);
                    }
                    else if (divider > maxdiv) {
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "divider", divider = maxdiv, -1);
                    }
                    if (visible1) {
                        this.setRectangle(comp1, "bounds", 0, 0, horizontal ? divider : bounds.width, horizontal ? bounds.height : divider);
                        this.doLayout(comp1);
                    }
                    const comp2 = (comp1 != null) ? Thinlet.get$java_lang_Object$java_lang_Object(comp1, ":next") : null;
                    if ((comp2 != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp2, "visible", true)) {
                        this.setRectangle(comp2, "bounds", horizontal ? (divider + 5) : 0, horizontal ? 0 : (divider + 5), horizontal ? (bounds.width - 5 - divider) : bounds.width, horizontal ? bounds.height : (bounds.height - 5 - divider));
                        this.doLayout(comp2);
                    }
                }
                else if (("list" === classname) || ("table" === classname) || ("tree" === classname)) {
                    const line = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "line", true) ? 1 : 0;
                    let width = 0;
                    let columnheight = 0;
                    if ("table" === classname) {
                        const header = Thinlet.get$java_lang_Object$java_lang_Object(component, "header");
                        let columnwidths = null;
                        if (header != null) {
                            columnwidths = (s => { let a = []; while (s-- > 0)
                                a.push(0); return a; })(this.getCount(header));
                            let column = Thinlet.get$java_lang_Object$java_lang_Object(header, ":comp");
                            for (let i = 0; i < columnwidths.length; i++) {
                                {
                                    if (i !== 0) {
                                        column = Thinlet.get$java_lang_Object$java_lang_Object(column, ":next");
                                    }
                                    columnwidths[i] = this.getInteger$java_lang_Object$java_lang_String$int(column, "width", 80);
                                    width += columnwidths[i];
                                    const d = this.getSize$java_lang_Object$int$int(column, 2, 2);
                                    columnheight = Math.max(columnheight, d.height);
                                }
                                ;
                            }
                        }
                        Thinlet.set(component, ":widths", columnwidths);
                    }
                    let y = 0;
                    let level = 0;
                    for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null;) {
                        {
                            let x = 0;
                            let iwidth = 0;
                            let iheight = 0;
                            if ("table" === classname) {
                                iwidth = width;
                                for (let cell = Thinlet.get$java_lang_Object$java_lang_Object(item, ":comp"); cell != null; cell = Thinlet.get$java_lang_Object$java_lang_Object(cell, ":next")) {
                                    {
                                        const d = this.getSize$java_lang_Object$int$int(cell, 2, 2);
                                        iheight = Math.max(iheight, d.height);
                                    }
                                    ;
                                }
                            }
                            else {
                                if ("tree" === classname) {
                                    x = (level + 1) * this.block;
                                }
                                const d = this.getSize$java_lang_Object$int$int(item, 6, 2);
                                iwidth = d.width;
                                iheight = d.height;
                                width = Math.max(width, x + d.width);
                            }
                            this.setRectangle(item, "bounds", x, y, iwidth, iheight);
                            y += iheight + line;
                            if ("tree" === classname) {
                                let next = Thinlet.get$java_lang_Object$java_lang_Object(item, ":comp");
                                if ((next != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true)) {
                                    level++;
                                }
                                else {
                                    while ((((next = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) == null) && (level > 0))) {
                                        {
                                            item = this.getParent(item);
                                            level--;
                                        }
                                    }
                                    ;
                                }
                                item = next;
                            }
                            else {
                                item = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next");
                            }
                        }
                        ;
                    }
                    this.layoutScroll(component, width, y - line, columnheight, 0, 0, 0, true, 0);
                }
                else if ("menubar" === classname) {
                    const bounds = this.getRectangle(component, "bounds");
                    let x = 0;
                    for (let menu = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Thinlet.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            const d = this.getSize$java_lang_Object$int$int(menu, 8, 4);
                            this.setRectangle(menu, "bounds", x, 0, d.width, bounds.height);
                            x += d.width;
                        }
                        ;
                    }
                }
                else if ("bean" === classname) {
                    throw new java.lang.RuntimeException("Bean not implemented!");
                }
            }
            /**
             * Scroll tabs to make the selected one visible
             *
             * @param {*} component
             * a tabbedpane
             */
            checkOffset(component) {
                const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                let i = 0;
                if (placement === "stacked") {
                    let dy = 0;
                    for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            r.y = dy;
                            dy += r.height;
                            if (i === selected) {
                                dy += this.getRectangle(Thinlet.get$java_lang_Object$java_lang_Object(tab, ":comp"), "bounds").height + 2;
                            }
                            i++;
                        }
                        ;
                    }
                    this.checkLocation(component);
                    return;
                }
                const horizontal = ((placement === "top") || (placement === "bottom"));
                const bounds = this.getRectangle(component, "bounds");
                const panesize = horizontal ? bounds.width : bounds.height;
                let first = 0;
                let last = 0;
                let d = 0;
                for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                    {
                        const r = this.getRectangle(tab, "bounds");
                        if (i === 0) {
                            first = (horizontal ? r.x : r.y);
                        }
                        last = (horizontal ? (r.x + r.width) : (r.y + r.height));
                        if (i === selected) {
                            const ifrom = (horizontal ? r.x : r.y) - 6;
                            const ito = (horizontal ? (r.x + r.width) : (r.y + r.height)) + 6;
                            if (ifrom < 0) {
                                d = -ifrom;
                            }
                            else if (ito > panesize) {
                                d = panesize - ito;
                            }
                        }
                        i++;
                    }
                    ;
                }
                d = Math.min(-first, Math.max(d, panesize - last));
                if (d !== 0) {
                    for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            if (horizontal) {
                                r.x += d;
                            }
                            else {
                                r.y += d;
                            }
                            const comp = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":comp");
                            if ((comp != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                const rc = this.getRectangle(comp, "bounds");
                                if (horizontal) {
                                    rc.x -= d;
                                }
                                else {
                                    rc.y -= d;
                                }
                            }
                        }
                        ;
                    }
                    this.checkLocation(component);
                }
            }
            getChars(component, text, wrap, width, height) {
                let chars = Thinlet.get$java_lang_Object$java_lang_Object(component, ":text");
                if ((chars == null) || (chars.length !== text.length)) {
                    chars = /* toCharArray */ (text).split('');
                    Thinlet.set(component, ":text", chars);
                }
                else /* getChars */
                    ((a, s, e, d, l) => { d.splice.apply(d, [l, e - s].concat(a.substring(s, e).split(''))); })(text, 0, chars.length, chars, 0);
                if (wrap) {
                    const currentfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                    const fm = ((currentfont != null) ? currentfont : this.font);
                    const lines = ((height - 4 + fm.getHeight()) / fm.getHeight() | 0);
                    let prevletter = false;
                    const n = chars.length;
                    let linecount = 0;
                    for (let i = 0, j = -1, k = 0; k <= n; k++) {
                        {
                            if (((k === n) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[k]) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[k]) == ' '.charCodeAt(0))) && (j > i) && (fm.charsWidth(chars, i, k - i) > width)) {
                                chars[j] = '\n';
                                k--;
                            }
                            else if ((k === n) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[k]) == '\n'.charCodeAt(0))) {
                                j = k;
                                prevletter = false;
                            }
                            else {
                                if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[k]) == ' '.charCodeAt(0)) && (prevletter || (j > i))) {
                                    j = k;
                                }
                                prevletter = ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[k]) != ' '.charCodeAt(0));
                                continue;
                            }
                            linecount++;
                            if ((lines !== 0) && (linecount === lines)) {
                                return null;
                            }
                            i = j + 1;
                        }
                        ;
                    }
                }
                return chars;
            }
            /**
             * @param {*} component
             * a menuitem
             * @return {string} key modifier strings and key text
             */
            getAccelerator(component) {
                const accelerator = Thinlet.get$java_lang_Object$java_lang_Object(component, "accelerator");
                if (accelerator != null) {
                    const keystroke = accelerator;
                    const keycode = ((keystroke >> 32) | 0);
                    const modifiers = ((keystroke & 65535) | 0);
                    return org.shikhar.AWTKeyEvent.getKeyModifiersText(keycode) + " " + org.shikhar.AWTKeyEvent.getKeyText(modifiers);
                }
                return null;
            }
            /**
             * Pop up the list of choices for the given combobox
             *
             * @param {*} combobox
             * @return {*} the created combolist
             */
            popupCombo(combobox) {
                let combox = 0;
                let comboy = 0;
                let combowidth = 0;
                let comboheight = 0;
                for (let comp = combobox; comp !== this.content; comp = this.getParent(comp)) {
                    {
                        const r = this.getRectangle(comp, "bounds");
                        combox += r.x;
                        comboy += r.y;
                        const view = this.getRectangle(comp, ":view");
                        if (view != null) {
                            combox -= view.x;
                            comboy -= view.y;
                            const port = this.getRectangle(comp, ":port");
                            combox += port.x;
                            comboy += port.y;
                        }
                        if (comp === combobox) {
                            combowidth = r.width;
                            comboheight = r.height;
                        }
                    }
                    ;
                }
                const combolist = Thinlet.createImpl(":combolist");
                Thinlet.set(combolist, "combobox", combobox);
                Thinlet.set(combobox, ":combolist", combolist);
                this.popupowner = combobox;
                this.insertItem(this.content, ":comp", combolist, 0);
                Thinlet.set(combolist, ":parent", this.content);
                let pw = 0;
                let ph = 0;
                for (let item = Thinlet.get$java_lang_Object$java_lang_Object(combobox, ":comp"); item != null; item = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) {
                    {
                        const d = this.getSize$java_lang_Object$int$int(item, 8, 4);
                        this.setRectangle(item, "bounds", 0, ph, d.width, d.height);
                        pw = Math.max(pw, d.width);
                        ph += d.height;
                    }
                    ;
                }
                if (combowidth < pw) {
                    ph += this.block;
                }
                let listy = 0;
                let listheight = 0;
                const bellow = this.getRectangle(this.content, "bounds").height - comboy - comboheight - 1;
                if ((ph + 2 > bellow) && (comboy - 1 > bellow)) {
                    listy = Math.max(0, comboy - 1 - ph - 2);
                    listheight = Math.min(comboy - 1, ph + 2);
                }
                else {
                    listy = comboy + comboheight + 1;
                    listheight = Math.min(bellow, ph + 2);
                }
                this.setRectangle(combolist, "bounds", combox, listy, combowidth, listheight);
                this.layoutScroll(combolist, pw, ph, 0, 0, 0, 0, true, 0);
                this.repaint$java_lang_Object(combolist);
                const selected = this.getInteger$java_lang_Object$java_lang_String$int(combobox, "selected", -1);
                this.setInside(combolist, (selected !== -1) ? this.getItem(combobox, selected) : null, true);
                return combolist;
            }
            /**
             * @param {*} component
             * menubar or :popup
             * @return {*} the created popupmenu
             */
            popupMenu(component) {
                let popup = Thinlet.get$java_lang_Object$java_lang_Object(component, ":popup");
                const selected = Thinlet.get$java_lang_Object$java_lang_Object(component, "selected");
                if (popup != null) {
                    if (Thinlet.get$java_lang_Object$java_lang_Object(popup, "menu") === selected) {
                        return null;
                    }
                    Thinlet.set(popup, "selected", null);
                    Thinlet.set(popup, "menu", null);
                    this.repaint$java_lang_Object(popup);
                    this.removeItemImpl(this.content, popup);
                    Thinlet.set(popup, ":parent", null);
                    Thinlet.set(component, ":popup", null);
                    this.checkLocation(popup);
                    this.popupMenu(popup);
                }
                if ((selected == null) || (Thinlet.getComponentClass(selected) !== "menu")) {
                    return null;
                }
                popup = Thinlet.createImpl(":popup");
                Thinlet.set(popup, "menu", selected);
                Thinlet.set(component, ":popup", popup);
                this.insertItem(this.content, ":comp", popup, 0);
                Thinlet.set(popup, ":parent", this.content);
                let menux = 0;
                let menuy = 0;
                let menuwidth = 0;
                let menuheight = 0;
                for (let comp = component; comp !== this.content; comp = this.getParent(comp)) {
                    {
                        const r = this.getRectangle(comp, "bounds");
                        menux += r.x;
                        menuy += r.y;
                        const view = this.getRectangle(comp, ":view");
                        if (view != null) {
                            menux -= view.x;
                            menuy -= view.y;
                            const port = this.getRectangle(comp, ":port");
                            menux += port.x;
                            menuy += port.y;
                        }
                        if (comp === component) {
                            menuwidth = r.width;
                            menuheight = r.height;
                        }
                    }
                    ;
                }
                const menubounds = this.getRectangle(selected, "bounds");
                const menubar = ("menubar" === Thinlet.getComponentClass(component));
                if (menubar) {
                    this.popupowner = component;
                }
                this.popup(selected, popup, menubar ? 'D' : 'R', menubar ? (menux + menubounds.x) : menux, menuy + menubounds.y, menubar ? menubounds.width : menuwidth, menubar ? menuheight : menubounds.height, menubar ? 1 : 3);
                return popup;
            }
            /**
             * @param {*} popupmenu
             * @param {number} x
             * @param {number} y
             */
            popupPopup(popupmenu, x, y) {
                const popup = Thinlet.createImpl(":popup");
                Thinlet.set(popup, "menu", popupmenu);
                Thinlet.set(popupmenu, ":popup", popup);
                this.popupowner = popupmenu;
                this.insertItem(this.content, ":comp", popup, 0);
                Thinlet.set(popup, ":parent", this.content);
                this.popup(popupmenu, popup, 'D', x, y, 0, 0, 0);
                this.invoke(popupmenu, null, "menushown");
            }
            /**
             * Lays out a popupmenu
             *
             * @param {*} menu
             * menubar's menu, menu's menu, or component's popupmenu
             * including items
             * @param {*} popup
             * created popupmenu
             * @param {string} direction
             * 'U' for up, 'D' for down, and 'R' for right
             * @param {number} x
             * menu's x location relative to the desktop
             * @param {number} y
             * menu's y location
             * @param {number} width
             * menu's width, or zero for popupmenu
             * @param {number} height
             * menu's height
             * @param {number} offset
             * inner padding relative to the menu's bounds
             */
            popup(menu, popup, direction, x, y, width, height, offset) {
                let pw = 0;
                let ph = 0;
                for (let item = Thinlet.get$java_lang_Object$java_lang_Object(menu, ":comp"); item != null; item = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) {
                    {
                        const itemclass = Thinlet.getComponentClass(item);
                        const d = (itemclass === "separator") ? new org.shikhar.Dimension(1, 1) : this.getSize$java_lang_Object$int$int(item, 8, 4);
                        if (itemclass === "checkboxmenuitem") {
                            d.width = d.width + this.block + 3;
                            d.height = Math.max(this.block, d.height);
                        }
                        else if (itemclass === "menu") {
                            d.width += this.block;
                        }
                        const accelerator = this.getAccelerator(item);
                        if (accelerator != null) {
                            d.width += 4 + this.font.stringWidth(accelerator);
                        }
                        this.setRectangle(item, "bounds", 1, 1 + ph, d.width, d.height);
                        pw = Math.max(pw, d.width);
                        ph += d.height;
                    }
                    ;
                }
                pw += 2;
                ph += 2;
                const desktop = this.getRectangle(this.content, "bounds");
                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(direction) == 'R'.charCodeAt(0)) {
                    x += ((x + width - offset + pw > desktop.width) && (x >= pw - offset)) ? (offset - pw) : (width - offset);
                    if ((y + ph > desktop.height) && (ph <= y + height)) {
                        y -= ph - height;
                    }
                }
                else {
                    const topspace = (y >= ph - offset);
                    const bottomspace = (desktop.height - y - height >= ph - offset);
                    y += (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(direction) == 'U'.charCodeAt(0)) ? (topspace || !bottomspace) : (!bottomspace && topspace)) ? (offset - ph) : (height - offset);
                }
                this.setRectangle(popup, "bounds", Math.max(0, Math.min(x, desktop.width - pw)), Math.max(0, Math.min(y, desktop.height - ph)), pw, ph);
                this.repaint$java_lang_Object(popup);
            }
            /**
             * @param {*} item
             * //TODO can be scrollbar string
             * @param {*} combobox
             * @param {*} combolist
             */
            closeCombo(combobox, combolist, item) {
                if ((item != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "enabled", true)) {
                    const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(item, "text", "");
                    Thinlet.set(combobox, "text", text);
                    this.setInteger$java_lang_Object$java_lang_String$int$int(combobox, "start", text.length, 0);
                    this.setInteger$java_lang_Object$java_lang_String$int$int(combobox, "end", 0, 0);
                    Thinlet.set(combobox, "icon", Thinlet.get$java_lang_Object$java_lang_Object(item, "icon"));
                    this.validate(combobox);
                    this.setInteger$java_lang_Object$java_lang_String$int$int(combobox, "selected", this.getIndex(combobox, item), -1);
                    this.invoke(combobox, item, "action");
                }
                Thinlet.set(combolist, "combobox", null);
                Thinlet.set(combobox, ":combolist", null);
                this.removeItemImpl(this.content, combolist);
                this.repaint$java_lang_Object(combolist);
                Thinlet.set(combolist, ":parent", null);
                this.popupowner = null;
                this.checkLocation(combolist);
            }
            closeup() {
                if (this.popupowner != null) {
                    const classname = Thinlet.getComponentClass(this.popupowner);
                    if ("menubar" === classname) {
                        Thinlet.set(this.popupowner, "selected", null);
                        this.popupMenu(this.popupowner);
                        this.repaint$java_lang_Object(this.popupowner);
                    }
                    else if ("combobox" === classname) {
                        this.closeCombo(this.popupowner, Thinlet.get$java_lang_Object$java_lang_Object(this.popupowner, ":combolist"), null);
                    }
                    else {
                        this.popupMenu(this.popupowner);
                    }
                    this.popupowner = null;
                }
            }
            showTip() {
                let text = null;
                this.tooltipowner = null;
                const classname = Thinlet.getComponentClass(this.mouseinside);
                if ((classname === "tabbedpane") || (classname === "menubar") || (classname === ":popup")) {
                    if (this.insidepart != null) {
                        text = this.getString$java_lang_Object$java_lang_String$java_lang_String(this.insidepart, "tooltip", null);
                    }
                }
                else if (classname === ":combolist") {
                    if (this.insidepart != null && this.insidepart instanceof Array && (this.insidepart.length == 0 || this.insidepart[0] == null || this.insidepart[0] != null)) {
                        text = this.getString$java_lang_Object$java_lang_String$java_lang_String(this.insidepart, "tooltip", null);
                    }
                }
                if (text == null) {
                    text = this.getString$java_lang_Object$java_lang_String$java_lang_String(this.mouseinside, "tooltip", null);
                }
                else {
                    this.tooltipowner = this.insidepart;
                }
                if (text != null && text.length > 0) {
                    const fm = this.font;
                    const width = fm.stringWidth(text) + 4;
                    const height = fm.getHeight() + 4;
                    if (this.tooltipowner == null) {
                        this.tooltipowner = this.mouseinside;
                    }
                    const bounds = this.getRectangle(this.content, "bounds");
                    const tx = Math.max(0, Math.min(this.mousex + 10, bounds.width - width));
                    const ty = Math.max(0, Math.min(this.mousey + 10, bounds.height - height));
                    this.setRectangle(this.tooltipowner, ":tooltipbounds", tx, ty, width, height);
                    const shadow = this.inverseShadow;
                    this.inverseShadow = null;
                    this.repaint$int$int$int$int(tx, ty, width, height);
                    this.inverseShadow = shadow;
                }
            }
            hideTip() {
                if (this.tooltipowner != null) {
                    const bounds = this.getRectangle(this.tooltipowner, ":tooltipbounds");
                    Thinlet.set(this.tooltipowner, ":tooltipbounds", null);
                    this.tooltipowner = null;
                    this.repaint$int$int$int$int(bounds.x, bounds.y, bounds.width, bounds.height);
                }
            }
            layoutField(component, dw, hidden, left) {
                const width = this.getRectangle(component, "bounds").width - left - dw;
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                let start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                if (start > text.length) {
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", start = text.length, 0);
                }
                let end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                if (end > text.length) {
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", end = text.length, 0);
                }
                const offset = this.getInteger$java_lang_Object$java_lang_String$int(component, ":offset", 0);
                let off = offset;
                const currentfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                const fm = this.font;
                const textwidth = hidden ? (fm.charWidth('*') * text.length) : fm.stringWidth(text);
                const caret = hidden ? (fm.charWidth('*') * end) : fm.stringWidth(text.substring(0, end));
                if (textwidth <= width - 4) {
                    const align = Thinlet.get$java_lang_Object$java_lang_Object(component, "alignment");
                    if (align == null) {
                        off = 0;
                    }
                    else {
                        off = textwidth - width + 4;
                        if (align === "center") {
                            off = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(off / 2);
                        }
                    }
                }
                else {
                    if (off > caret) {
                        off = caret;
                    }
                    else if (off < caret - width + 4) {
                        off = caret - width + 4;
                    }
                    off = Math.max(0, Math.min(off, textwidth - width + 4));
                }
                if (off !== offset) {
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, ":offset", off, 0);
                }
            }
            /**
             * Set viewport (:port) bounds excluding borders, view position and content
             * size (:view), horizontal (:horizontal), and vertical (:vertical)
             * scrollbar bounds
             *
             * @param {*} component
             * scrollable widget
             * @param {number} contentwidth
             * preferred component width
             * @param {number} contentheight
             * preferred component height
             * @param {number} top
             * top inset (e.g. table header, dialog title, half of panel
             * title)
             * @param {number} left
             * left inset (e.g. dialog border)
             * @param {number} bottom
             * bottom inset (e.g. dialog border)
             * @param {number} right
             * right inset (e.g. dialog border)
             * @param {number} topgap
             * (lower half of panel title)
             * @return {boolean} true if scrollpane is required, otherwise false
             *
             * list: 0, 0, 0, 0, true, 0 | table: header, ... | dialog: header, 3, 3, 3,
             * true, 0 title-border panel: header / 2, 0, 0, 0, true, head
             * @param {boolean} border
             */
            layoutScroll(component, contentwidth, contentheight, top, left, bottom, right, border, topgap) {
                const bounds = this.getRectangle(component, "bounds");
                const iborder = border ? 1 : 0;
                const iscroll = this.block + 1 - iborder;
                let portwidth = bounds.width - left - right - 2 * iborder;
                let portheight = bounds.height - top - topgap - bottom - 2 * iborder;
                let hneed = contentwidth > portwidth;
                const vneed = contentheight > portheight - (hneed ? iscroll : 0);
                if (vneed) {
                    portwidth -= iscroll;
                }
                hneed = hneed || (vneed && (contentwidth > portwidth));
                if (hneed) {
                    portheight -= iscroll;
                }
                this.setRectangle(component, ":port", left + iborder, top + iborder + topgap, portwidth, portheight);
                if (hneed) {
                    this.setRectangle(component, ":horizontal", left, bounds.height - bottom - this.block - 1, bounds.width - left - right - (vneed ? this.block : 0), this.block + 1);
                }
                else {
                    Thinlet.set(component, ":horizontal", null);
                }
                if (vneed) {
                    this.setRectangle(component, ":vertical", bounds.width - right - this.block - 1, top, this.block + 1, bounds.height - top - bottom - (hneed ? this.block : 0));
                }
                else {
                    Thinlet.set(component, ":vertical", null);
                }
                contentwidth = Math.max(contentwidth, portwidth);
                contentheight = Math.max(contentheight, portheight);
                let viewx = 0;
                let viewy = 0;
                const view = this.getRectangle(component, ":view");
                if (view != null) {
                    viewx = Math.max(0, Math.min(view.x, contentwidth - portwidth));
                    viewy = Math.max(0, Math.min(view.y, contentheight - portheight));
                }
                this.setRectangle(component, ":view", viewx, viewy, contentwidth, contentheight);
                return vneed || hneed;
            }
            scrollToVisible(component, x, y, width, height) {
                const view = this.getRectangle(component, ":view");
                const port = this.getRectangle(component, ":port");
                if (view != null && port != null) {
                    const vx = Math.max(x + width - port.width, Math.min(view.x, x));
                    const vy = Math.max(y + height - port.height, Math.min(view.y, y));
                    if ((view.x !== vx) || (view.y !== vy)) {
                        this.repaint$java_lang_Object(component);
                        view.x = vx;
                        view.y = vy;
                    }
                }
            }
            getPreferredSize$() {
                return this.getPreferredSize$java_lang_Object(this.content);
            }
            getPreferredSize$java_lang_Object(component) {
                const width = this.getInteger$java_lang_Object$java_lang_String$int(component, "width", 0);
                const height = this.getInteger$java_lang_Object$java_lang_String$int(component, "height", 0);
                if ((width > 0) && (height > 0)) {
                    return new org.shikhar.Dimension(width, height);
                }
                const classname = Thinlet.getComponentClass(component);
                if ("label" === classname) {
                    return this.getSize$java_lang_Object$int$int(component, 0, 0);
                }
                if (("button" === classname) || ("togglebutton" === classname)) {
                    const link = ("button" === classname) && (Thinlet.get$java_lang_Object$java_lang_Object(component, "type") === "link");
                    return this.getSize$java_lang_Object$int$int(component, link ? 0 : 12, link ? 0 : 6);
                }
                if ("checkbox" === classname) {
                    const d = this.getSize$java_lang_Object$int$int(component, 0, 0);
                    d.width = d.width + this.block + 3;
                    d.height = Math.max(this.block, d.height);
                    return d;
                }
                if ("combobox" === classname) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true)) {
                        const size = this.getFieldSize(component);
                        const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                        if (icon != null) {
                            size.width += icon.width;
                            size.height = (Math.max(size.height, icon.height + 2) | 0);
                        }
                        size.width += this.block;
                        return size;
                    }
                    else {
                        const size = this.getSize$java_lang_Object$int$int(component, 4, 4);
                        for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) {
                            {
                                const d = this.getSize$java_lang_Object$int$int(item, 4, 4);
                                size.width = Math.max(d.width, size.width);
                                size.height = Math.max(d.height, size.height);
                            }
                            ;
                        }
                        size.width += this.block;
                        if (size.height === 4) {
                            const customfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                            const fm = ((customfont != null) ? customfont : this.font);
                            size.height = this.font.getHeight() + 4;
                        }
                        return size;
                    }
                }
                if (("textfield" === classname) || ("passwordfield" === classname)) {
                    return this.getFieldSize(component);
                }
                if ("textarea" === classname) {
                    const columns = this.getInteger$java_lang_Object$java_lang_String$int(component, "columns", 0);
                    const rows = this.getInteger$java_lang_Object$java_lang_String$int(component, "rows", 0);
                    const currentfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                    const fm = ((currentfont != null) ? currentfont : this.font);
                    return new org.shikhar.Dimension(((columns > 0) ? (columns * fm.charWidth('e') + 2) : 76) + 2 + this.block, ((rows > 0) ? (rows * fm.getHeight() - fm.getHeight() + 2) : 76) + 2 + this.block);
                }
                if ("tabbedpane" === classname) {
                    const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                    const horizontal = ((placement !== "left") && (placement !== "right"));
                    let tabsize = 0;
                    let contentwidth = 0;
                    let contentheight = 0;
                    for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const d = this.getSize$java_lang_Object$int$int(tab, 0, 0);
                            if (placement === "stacked") {
                                tabsize += d.height + 3;
                            }
                            else {
                                tabsize = Math.max(tabsize, horizontal ? d.height + 5 : d.width + 9);
                            }
                            const comp = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":comp");
                            if ((comp != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                const dc = this.getPreferredSize$java_lang_Object(comp);
                                contentwidth = Math.max(contentwidth, dc.width);
                                contentheight = Math.max(contentheight, dc.height);
                            }
                        }
                        ;
                    }
                    return new org.shikhar.Dimension(contentwidth + (horizontal ? 4 : (tabsize + 3)), contentheight + (horizontal ? (tabsize + 3) : 4));
                }
                if (("panel" === classname) || (classname === "dialog")) {
                    const size = this.getSize$java_lang_Object$int$int(component, 0, 0);
                    if (classname === "dialog") {
                        size.width = 8;
                        size.height += 8;
                    }
                    else if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", false)) {
                        size.width = 2;
                        size.height += (size.height > 0) ? 1 : 2;
                    }
                    else {
                        size.width = 0;
                    }
                    size.width += this.getInteger$java_lang_Object$java_lang_String$int(component, "left", 0) + this.getInteger$java_lang_Object$java_lang_String$int(component, "right", 0);
                    size.height += this.getInteger$java_lang_Object$java_lang_String$int(component, "top", 0) + this.getInteger$java_lang_Object$java_lang_String$int(component, "bottom", 0);
                    const gap = this.getInteger$java_lang_Object$java_lang_String$int(component, "gap", 0);
                    const grid = this.getGrid(component);
                    if (grid != null) {
                        size.width += this.getSum(grid[0], 0, grid[0].length, gap, false);
                        size.height += this.getSum(grid[1], 0, grid[1].length, gap, false);
                    }
                    return size;
                }
                else if ("desktop" === classname) {
                    const size = new org.shikhar.Dimension();
                    for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            const iclass = Thinlet.getComponentClass(comp);
                            if ((iclass !== "dialog") && (iclass !== ":popup") && (iclass !== ":combolist")) {
                                const d = this.getPreferredSize$java_lang_Object(comp);
                                size.width = Math.max(d.width, size.width);
                                size.height = Math.max(d.height, size.height);
                            }
                        }
                        ;
                    }
                    return size;
                }
                if ("spinbox" === classname) {
                    const size = this.getFieldSize(component);
                    size.width += this.block;
                    return size;
                }
                if ("progressbar" === classname) {
                    const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    return new org.shikhar.Dimension(horizontal ? 76 : 6, horizontal ? 6 : 76);
                }
                if ("slider" === classname) {
                    const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    return new org.shikhar.Dimension(horizontal ? 76 : 10, horizontal ? 10 : 76);
                }
                if ("splitpane" === classname) {
                    const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    const comp1 = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                    const size = ((comp1 == null) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(comp1, "visible", true)) ? new org.shikhar.Dimension() : this.getPreferredSize$java_lang_Object(comp1);
                    const comp2 = Thinlet.get$java_lang_Object$java_lang_Object(comp1, ":next");
                    if ((comp2 != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp2, "visible", true)) {
                        const d = this.getPreferredSize$java_lang_Object(comp2);
                        size.width = horizontal ? (size.width + d.width) : Math.max(size.width, d.width);
                        size.height = horizontal ? Math.max(size.height, d.height) : (size.height + d.height);
                    }
                    if (horizontal) {
                        size.width += 5;
                    }
                    else {
                        size.height += 5;
                    }
                    return size;
                }
                if (("list" === classname) || ("table" === classname) || ("tree" === classname)) {
                    return new org.shikhar.Dimension(76 + 2 + this.block, 76 + 2 + this.block);
                }
                if ("separator" === classname) {
                    return new org.shikhar.Dimension(1, 1);
                }
                if ("menubar" === classname) {
                    const size = new org.shikhar.Dimension(0, 0);
                    for (let menu = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Thinlet.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            const d = this.getSize$java_lang_Object$int$int(menu, 8, 4);
                            size.width += d.width;
                            size.height = Math.max(size.height, d.height);
                        }
                        ;
                    }
                    return size;
                }
                if ("bean" === classname) {
                    throw new java.lang.RuntimeException("Not implemented");
                }
                throw new java.lang.IllegalArgumentException(classname);
            }
            /**
             *
             * @throws java.lang.IllegalArgumentException
             * @param {*} component
             * @return {org.shikhar.Dimension}
             */
            getPreferredSize(component) {
                if (((component != null) || component === null)) {
                    return this.getPreferredSize$java_lang_Object(component);
                }
                else if (component === undefined) {
                    return this.getPreferredSize$();
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * @param {*} component
             * a container
             * @return {int[][]} null for zero visible subcomponent, otherwise an array contains
             * the following lists:
             * <ul>
             * <li>columnwidths, preferred width of grid columns</li>
             * <li>rowheights, preferred heights of grid rows</li>
             * <li>columnweights, grid column-width weights</li>
             * <li>rowweights, grid row-height weights</li>
             * <li>gridx, horizontal location of the subcomponents</li>
             * <li>gridy, vertical locations</li>
             * <li>gridwidth, column spans</li>
             * <li>gridheight, row spans</li>
             * </ul>
             */
            getGrid(component) {
                let count = 0;
                for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        if (this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                            count++;
                        }
                    }
                    ;
                }
                if (count === 0) {
                    return null;
                }
                const columns = this.getInteger$java_lang_Object$java_lang_String$int(component, "columns", 0);
                const icols = (columns !== 0) ? columns : count;
                const irows = (columns !== 0) ? (((count + columns - 1) / columns | 0)) : 1;
                const grid = [(s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(icols), (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(irows), (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(icols), (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(irows), (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(count), (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(count), (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(count), (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(count)];
                const columnheight = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(icols);
                let cache = null;
                let i = 0;
                let x = 0;
                let y = 0;
                let nextsize = 0;
                for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                            continue;
                        }
                        const colspan = ((columns !== 0) && (columns < count)) ? Math.min(this.getInteger$java_lang_Object$java_lang_String$int(comp, "colspan", 1), columns) : 1;
                        const rowspan = (columns !== 1) ? this.getInteger$java_lang_Object$java_lang_String$int(comp, "rowspan", 1) : 1;
                        for (let j = 0; j < colspan; j++) {
                            {
                                if ((columns !== 0) && (x + colspan > columns)) {
                                    x = 0;
                                    y++;
                                    j = -1;
                                }
                                else if (columnheight[x + j] > y) {
                                    x += (j + 1);
                                    j = -1;
                                }
                            }
                            ;
                        }
                        if (y + rowspan > grid[1].length) {
                            const rowheights = (s => { let a = []; while (s-- > 0)
                                a.push(0); return a; })(y + rowspan);
                            java.lang.System.arraycopy(grid[1], 0, rowheights, 0, grid[1].length);
                            grid[1] = rowheights;
                            const rowweights = (s => { let a = []; while (s-- > 0)
                                a.push(0); return a; })(y + rowspan);
                            java.lang.System.arraycopy(grid[3], 0, rowweights, 0, grid[3].length);
                            grid[3] = rowweights;
                        }
                        for (let j = 0; j < colspan; j++) {
                            {
                                columnheight[x + j] = y + rowspan;
                            }
                            ;
                        }
                        const weightx = this.getInteger$java_lang_Object$java_lang_String$int(comp, "weightx", 0);
                        const weighty = this.getInteger$java_lang_Object$java_lang_String$int(comp, "weighty", 0);
                        const d = this.getPreferredSize$java_lang_Object(comp);
                        if (colspan === 1) {
                            grid[0][x] = Math.max(grid[0][x], d.width);
                            grid[2][x] = Math.max(grid[2][x], weightx);
                        }
                        else {
                            if (cache == null) {
                                cache = (function (dims) { let allocate = function (dims) { if (dims.length === 0) {
                                    return 0;
                                }
                                else {
                                    let array = [];
                                    for (let i = 0; i < dims[0]; i++) {
                                        array.push(allocate(dims.slice(1)));
                                    }
                                    return array;
                                } }; return allocate(dims); })([4, count]);
                            }
                            cache[0][i] = d.width;
                            cache[2][i] = weightx;
                            if ((nextsize === 0) || (colspan < nextsize)) {
                                nextsize = colspan;
                            }
                        }
                        if (rowspan === 1) {
                            grid[1][y] = Math.max(grid[1][y], d.height);
                            grid[3][y] = Math.max(grid[3][y], weighty);
                        }
                        else {
                            if (cache == null) {
                                cache = (function (dims) { let allocate = function (dims) { if (dims.length === 0) {
                                    return 0;
                                }
                                else {
                                    let array = [];
                                    for (let i = 0; i < dims[0]; i++) {
                                        array.push(allocate(dims.slice(1)));
                                    }
                                    return array;
                                } }; return allocate(dims); })([4, count]);
                            }
                            cache[1][i] = d.height;
                            cache[3][i] = weighty;
                            if ((nextsize === 0) || (rowspan < nextsize)) {
                                nextsize = rowspan;
                            }
                        }
                        grid[4][i] = x;
                        grid[5][i] = y;
                        grid[6][i] = colspan;
                        grid[7][i] = rowspan;
                        x += colspan;
                        i++;
                    }
                    ;
                }
                while ((nextsize !== 0)) {
                    {
                        const size = nextsize;
                        nextsize = 0;
                        for (let j = 0; j < 2; j++) {
                            {
                                for (let k = 0; k < count; k++) {
                                    {
                                        if (grid[6 + j][k] === size) {
                                            const gridpoint = grid[4 + j][k];
                                            let weightdiff = cache[2 + j][k];
                                            for (let m = 0; (weightdiff > 0) && (m < size); m++) {
                                                {
                                                    weightdiff -= grid[2 + j][gridpoint + m];
                                                }
                                                ;
                                            }
                                            if (weightdiff > 0) {
                                                let weightsum = cache[2 + j][k] - weightdiff;
                                                for (let m = 0; (weightsum > 0) && (m < size); m++) {
                                                    {
                                                        const weight = grid[2 + j][gridpoint + m];
                                                        if (weight > 0) {
                                                            const weightinc = (weight * weightdiff / weightsum | 0);
                                                            grid[2 + j][gridpoint + m] += weightinc;
                                                            weightdiff -= weightinc;
                                                            weightsum -= weightinc;
                                                        }
                                                    }
                                                    ;
                                                }
                                                grid[2 + j][gridpoint + size - 1] += weightdiff;
                                            }
                                            let sizediff = cache[j][k];
                                            let weightsum = 0;
                                            for (let m = 0; (sizediff > 0) && (m < size); m++) {
                                                {
                                                    sizediff -= grid[j][gridpoint + m];
                                                    weightsum += grid[2 + j][gridpoint + m];
                                                }
                                                ;
                                            }
                                            if (sizediff > 0) {
                                                for (let m = 0; (weightsum > 0) && (m < size); m++) {
                                                    {
                                                        const weight = grid[2 + j][gridpoint + m];
                                                        if (weight > 0) {
                                                            const sizeinc = (weight * sizediff / weightsum | 0);
                                                            grid[j][gridpoint + m] += sizeinc;
                                                            sizediff -= sizeinc;
                                                            weightsum -= weight;
                                                        }
                                                    }
                                                    ;
                                                }
                                                grid[j][gridpoint + size - 1] += sizediff;
                                            }
                                        }
                                        else if ((grid[6 + j][k] > size) && ((nextsize === 0) || (grid[6 + j][k] < nextsize))) {
                                            nextsize = grid[6 + j][k];
                                        }
                                    }
                                    ;
                                }
                            }
                            ;
                        }
                    }
                }
                ;
                return grid;
            }
            getSum(values, from, length, gap, last) {
                if (length <= 0) {
                    return 0;
                }
                let value = 0;
                for (let i = 0; i < length; i++) {
                    {
                        value += values[from + i];
                    }
                    ;
                }
                return value + (length - (last ? 0 : 1)) * gap;
            }
            getFieldSize(component) {
                const columns = this.getInteger$java_lang_Object$java_lang_String$int(component, "columns", 0);
                const currentfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                const fm = ((currentfont != null) ? currentfont : this.font);
                return new org.shikhar.Dimension(((columns > 0) ? (columns * fm.charWidth('e')) : 76) + 4, fm.getHeight() + 4);
            }
            getSize$java_lang_Object$int$int(component, dx, dy) {
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", null);
                let tw = 0;
                let th = 0;
                if (text != null) {
                    const customfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                    const fm = this.font;
                    tw = fm.stringWidth(text);
                    th = fm.getHeight();
                }
                const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                let iw = 0;
                let ih = 0;
                if (icon != null) {
                    iw = icon.width;
                    ih = icon.height;
                    if (text != null) {
                        iw += 2;
                    }
                }
                return new org.shikhar.Dimension(tw + iw + dx, Math.max(th, ih) + dy);
            }
            /**
             * @param {*} component
             * a widget including the text and icon parameters
             * @param {number} dx
             * increase width by this value
             * @param {number} dy
             * increase height by this value
             * @return {org.shikhar.Dimension} size of the text and the image (plus a gap) including the given
             * offsets
             */
            getSize(component, dx, dy) {
                if (((component != null) || component === null) && ((typeof dx === 'number') || dx === null) && ((typeof dy === 'number') || dy === null)) {
                    return this.getSize$java_lang_Object$int$int(component, dx, dy);
                }
                else if (component === undefined && dx === undefined && dy === undefined) {
                    return this.getSize$();
                }
                else
                    throw new Error('invalid overload');
            }
            paintShadowImpl(g, x, y, width, height) {
                g.setClip(x, y, width, height);
                g.setColor(this.c_disable);
                const canvasWidth = (this.width | 0);
                const canvasHeight = (this.height | 0);
                for (let i = -canvasWidth; i < canvasHeight; i += 2) {
                    {
                        g.drawLine(x, i, x + width, i + width);
                    }
                    ;
                }
            }
            paintShadow(g, x, y, width, height, rect) {
                if (!(x + width < rect.x || x > rect.x + rect.width || y + height < rect.y || y > rect.y + rect.height)) {
                    if (rect.y > y && rect.y < y + height) {
                        this.paintShadowImpl(g, x, y, width, rect.y - y);
                    }
                    if (rect.y + rect.height >= y && rect.y + rect.height < y + height) {
                        this.paintShadowImpl(g, x, rect.y + rect.height, width, y + height - (rect.y + rect.height));
                    }
                    if (rect.x > x && rect.x < x + width) {
                        this.paintShadowImpl(g, x, rect.y, rect.x - x, rect.height);
                    }
                    if (rect.x + rect.width >= x && rect.x + rect.width < x + width) {
                        this.paintShadowImpl(g, rect.x + rect.width, rect.y, x + width - (rect.x + rect.width), rect.height);
                    }
                }
            }
            paint$() {
                this.width = ((this.canvas.width / 2) | 0);
                this.height = ((this.canvas.height / 2) | 0);
                if (this.hgradient == null) {
                    this.initGradients();
                }
                this.ctx.save();
                this.ctx.scale(2, 2);
                this.g.setFont(this.font);
                this.g.translate(0, 0);
                const x = this.g.getClipX();
                const y = this.g.getClipY();
                const width = this.g.getClipWidth();
                const height = this.g.getClipHeight();
                this.g.setTranslation(0, 0);
                this.g.setClip(0, 0, this.width, this.height);
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(this.g, x, y, width, height, this.content, true);
                let dialog = this.content;
                for (let next = Thinlet.get$java_lang_Object$java_lang_Object(this.content, ":comp"); next != null; next = Thinlet.get$java_lang_Object$java_lang_Object(this.content, ":next")) {
                    {
                        if (Thinlet.getComponentClass(next) === "dialog") {
                            dialog = next;
                            break;
                        }
                    }
                    ;
                }
                if (this.inverseShadow != null) {
                    this.paintShadow(this.g, x, y, width, height, this.inverseShadow);
                }
                if (this.attentionProgress <= this.attentionSpan && this.attentionRect != null) {
                    const desktop = this.getRectangle(this.content, "bounds");
                    this.g.setColor(-16777216);
                    this.g.setClip(0, 0, this.width, this.height);
                    for (let i = 0; i < Thinlet.attentionThickness; i++) {
                        {
                            this.g.drawRect(desktop.x - i + (((this.attentionRect.x - desktop.x) * this.attentionProgress) / this.attentionSpan | 0), desktop.y - i + (((this.attentionRect.y - desktop.y) * this.attentionProgress) / this.attentionSpan | 0), desktop.width + 2 * i + (((this.attentionRect.width - desktop.width) * this.attentionProgress) / this.attentionSpan | 0) - 1, desktop.height + 2 * i + (((this.attentionRect.height - desktop.height) * this.attentionProgress) / this.attentionSpan | 0) - 1);
                        }
                        ;
                    }
                }
                this.g.clipRect(0, 0, this.width, this.height);
                this.ctx.restore();
            }
            scrollToEnd(component, y, height) {
                const view = this.getRectangle(component, ":view");
                const port = this.getRectangle(component, ":port");
                try {
                    view.y = Math.max(y + height - port.height, Math.min(view.y, y));
                    this.repaint$java_lang_Object(component);
                }
                catch (ex) {
                }
            }
            /**
             * rcs: returns the focus owner name
             * @return {string}
             */
            getFocusOwner() {
                return this.getString$java_lang_Object$java_lang_String(this.focusowner, "name");
            }
            initGradients() {
                const pix = (function (dims) { let allocate = function (dims) { if (dims.length === 0) {
                    return 0;
                }
                else {
                    let array = [];
                    for (let i = 0; i < dims[0]; i++) {
                        array.push(allocate(dims.slice(1)));
                    }
                    return array;
                } }; return allocate(dims); })([2, this.block * this.block]);
                const r1 = Thinlet.getRed(this.c_bg);
                const r2 = Thinlet.getRed(this.c_press);
                const g1 = Thinlet.getGreen(this.c_bg);
                const g2 = Thinlet.getGreen(this.c_press);
                const b1 = Thinlet.getBlue(this.c_bg);
                const b2 = Thinlet.getBlue(this.c_press);
                for (let i = 0; i < this.block; i++) {
                    {
                        const cr = r1 - ((r1 - r2) * i / this.block | 0);
                        const cg = g1 - ((g1 - g2) * i / this.block | 0);
                        const cb = b1 - ((b1 - b2) * i / this.block | 0);
                        const color = (255 << 24) | (cr << 16) | (cg << 8) | cb;
                        for (let j = 0; j < this.block; j++) {
                            {
                                pix[0][i * this.block + j] = color;
                                pix[1][j * this.block + i] = color;
                            }
                            ;
                        }
                    }
                    ;
                }
                this.hgradient = this.ctx.createLinearGradient(0, 0, this.width, 100);
                console.log(this.c_bg + "rgb(" + r1 + "," + g1 + "," + b1 + ")");
                this.hgradient.addColorStop(0, "rgb(" + 156 + "," + 156 + "," + 156 + ")");
                this.hgradient.addColorStop(0.5, "white");
                this.hgradient.addColorStop(1, "rgb(" + r2 + "," + g2 + "," + b2 + ")");
                console.log("rgb(" + r2 + "," + g2 + "," + b2 + ")");
                console.log(this.hgradient);
                this.vgradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
                this.vgradient.addColorStop(0, this.g.toColor(this.c_bg));
                this.vgradient.addColorStop(1, this.g.toColor(this.c_press));
                console.log(this.vgradient);
            }
            getAbsoluteBounds(component) {
                const bounds = this.getRectangle(component, "bounds");
                if (bounds == null)
                    throw new java.lang.RuntimeException("Component of type \'" + Thinlet.getComponentClass(component) + "\' has not been initiated");
                let x = bounds.x;
                let y = bounds.y;
                let width = bounds.width;
                const height = bounds.height;
                let parent = this.getParent(component);
                let parentBounds = null;
                while ((parent != null)) {
                    {
                        parentBounds = this.getRectangle(parent, "bounds");
                        if (Thinlet.getComponentClass(parent) !== "node") {
                            const port = this.getRectangle(parent, ":port");
                            const view = this.getRectangle(parent, ":view");
                            if (port != null && view != null) {
                                x -= view.x - port.x;
                                y -= view.y - port.y;
                                if (x + width > port.width) {
                                    width = port.width - x;
                                }
                            }
                            x += parentBounds.x;
                            y += parentBounds.y;
                        }
                        parent = this.getParent(parent);
                    }
                }
                ;
                return new org.shikhar.Rectangle(x, y, width, height);
            }
            /**
             * Get the next focusable component given a directional key. This allowes for free-space navigation in 2D!
             *
             * @param {org.shikhar.Graphics} g graphics object for visualization
             * @param {*} content the subtree from which to consider navigation
             * @param {number} key the direction key
             * @return {*} the most probably match in the given direction
             *
             * @author Thomas R�rvik Skj�lberg
             */
            findNextFocuable(g, content, key) {
                let closest = null;
                let reference = this.focusowner;
                if (Thinlet.getComponentClass(this.focusowner) === "tabbedpane" || Thinlet.getComponentClass(this.focusowner) === "menubar") {
                    reference = Thinlet.get$java_lang_Object$java_lang_Object(this.focusowner, ":lead");
                    if (reference == null) {
                        reference = this.getItem(this.focusowner, this.getInteger$java_lang_Object$java_lang_String$int(this.focusowner, "selected", 0));
                    }
                }
                let absoluteReference;
                let referenceXPos;
                let referenceYPos;
                if (reference != null) {
                    absoluteReference = this.getAbsoluteBounds(reference);
                    referenceXPos = absoluteReference.x + (absoluteReference.width / 2 | 0);
                    referenceYPos = absoluteReference.y + (absoluteReference.height / 2 | 0);
                }
                else {
                    referenceXPos = referenceYPos = -1;
                    absoluteReference = new org.shikhar.Rectangle(-1, -1, 0, 0);
                }
                if (g != null) {
                    g.setColor(Thinlet.GREEN);
                    for (let i = 3; i < 6; i++) {
                        {
                            g.drawRect(referenceXPos - i, referenceYPos - i, 2 * i, 2 * i);
                        }
                        ;
                    }
                }
                let closestDistance = (javaemul.internal.IntegerHelper.MAX_VALUE / 2 | 0);
                let x = 0;
                let y = 0;
                for (let next = null, parent = content; true; parent = next) {
                    {
                        if (Thinlet.getComponentClass(parent) === "tab") {
                            const tabParent = this.getParent(next);
                            const skip = this.getItem(tabParent, this.getInteger$java_lang_Object$java_lang_String$int(tabParent, "selected", 0)) !== next;
                            if (skip) {
                                next = null;
                            }
                            else {
                                next = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":comp");
                            }
                        }
                        else if (Thinlet.getComponentClass(parent) === "node") {
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(next, "expanded", true)) {
                                this.doNodeTree(g, next, x, y);
                            }
                            next = null;
                        }
                        else if (Thinlet.getComponentClass(parent) === "combobox" || Thinlet.getComponentClass(parent) === "menu" || Thinlet.getComponentClass(parent) === "list" || Thinlet.getComponentClass(parent) === "tree" || Thinlet.getComponentClass(parent) === "table") {
                            next = null;
                        }
                        else {
                            next = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":comp");
                        }
                        if (next == null) {
                            next = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":next");
                        }
                        else {
                            const r = this.getRectangle(parent, "bounds");
                            if (r != null) {
                                x += r.x;
                                y += r.y;
                            }
                            const port = this.getRectangle(parent, ":port");
                            const view = this.getRectangle(parent, ":view");
                            if (port != null && view != null) {
                                x += port.x - view.x;
                                y += port.y - view.y;
                            }
                        }
                        while ((next == null)) {
                            {
                                parent = this.getParent(parent);
                                if (parent != null) {
                                    const r = this.getRectangle(parent, "bounds");
                                    if (r != null) {
                                        x -= r.x;
                                        y -= r.y;
                                    }
                                    const port = this.getRectangle(parent, ":port");
                                    const view = this.getRectangle(parent, ":view");
                                    if (port != null && view != null) {
                                        x -= port.x - view.x;
                                        y -= port.y - view.y;
                                    }
                                }
                                if (parent == null) {
                                    return closest;
                                }
                                if (parent === content) {
                                    next = parent;
                                }
                                else {
                                    next = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":next");
                                }
                            }
                        }
                        ;
                        const r = this.getRectangle(next, "bounds");
                        if (r != null) {
                            if (g != null) {
                                g.setColor(Thinlet.BLUE);
                            }
                            const classname = Thinlet.getComponentClass(next);
                            if (classname === "list" || classname === "spinbox" || classname === "menu" || classname === "combobox" || classname === "checkbox" || classname === "button" || classname === "tab" || classname === "item" || classname === "row" || classname === "node" || classname === "textarea" || classname === "textfield" || classname === "passwordfield" || classname === "slider" || classname === "choice" || classname === "list" || classname === "tree" || classname === "table") {
                                if (this.getBoolean$java_lang_Object$java_lang_String$boolean(next, "editable", true) || classname === "combobox") {
                                    if (this.isEnabledAndVisible(next) || classname === "tab" || classname === "item" || classname === "node") {
                                        if (g != null) {
                                            g.drawLine(x + r.x, y + r.y, x + r.x + r.width, y + r.y + r.height);
                                        }
                                        const asKeyNavigates = Thinlet.get$java_lang_Object$java_lang_Object(next, "asKeyNavigates");
                                        if (key !== -1 && (asKeyNavigates == null || !((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(asKeyNavigates, "ignore"))) {
                                            const distance = this.getDistance(reference, referenceXPos, referenceYPos, absoluteReference, next, key);
                                            if (distance !== -1 && distance < closestDistance) {
                                                closestDistance = distance;
                                                closest = next;
                                            }
                                            else if (distance === -1) {
                                            }
                                        }
                                    }
                                }
                                else {
                                }
                            }
                            else {
                            }
                        }
                        else {
                        }
                        if (next === content) {
                            return closest;
                        }
                    }
                    ;
                }
            }
            /**
             *
             * Get the weigthed distance from a center and a rectangle.
             *
             * TODO additional logic
             *
             * @param {*} reference
             * @param {number} x the horizontal coordinate for the center distance
             * @param {number} y the vertical coordinate for the center distance
             * @param {org.shikhar.Rectangle} absoluteBounds the rectangle to which border distance is absolute
             * @param {*} next
             * @param {number} key the directional key.
             * @return {number} -1 if travel in the wrong direction - else the weigthed relative distance
             */
            getDistance(reference, x, y, absoluteBounds, next, key) {
                let policy = null;
                policy = Thinlet.get$java_lang_Object$java_lang_Object(next, ":interactiveFocusPolicy");
                if (policy === "center") {
                    return this.getCenterDistance(x, y, key, next, 3, 10);
                }
                else if (policy === "edge") {
                    return this.getBorderDistance(absoluteBounds, key, next, 3, 10);
                }
                else if (policy == null) {
                    let border = this.getBorderDistance(absoluteBounds, key, next, 1, 10);
                    const center = this.getCenterDistance(x, y, key, next, 1, 10);
                    if ((Thinlet.getComponentClass(reference) === ("tab")) && (Thinlet.getComponentClass(next) === ("tab"))) {
                        border = 0;
                    }
                    if (border === -1 || center === -1) {
                        return -1;
                    }
                    return border + center;
                }
                return -1;
            }
            getCenterDistance(x, y, key, component, sidewaysFactorX, sidewaysFactorY) {
                const bounds = this.getAbsoluteBounds(component);
                const dx = bounds.x + (bounds.width / 2 | 0) - x;
                const dy = bounds.y + (bounds.height / 2 | 0) - y;
                if (key === org.shikhar.AWTKeyEvent.VK_RIGHT) {
                    if (dx <= 0)
                        return -1;
                    return dx + sidewaysFactorY * Math.abs(dy);
                }
                else if (key === org.shikhar.AWTKeyEvent.VK_LEFT) {
                    if (dx >= 0)
                        return -1;
                    return -dx + sidewaysFactorY * Math.abs(dy);
                }
                else if (key === org.shikhar.AWTKeyEvent.VK_UP) {
                    if (dy >= 0)
                        return -1;
                    return -dy + sidewaysFactorX * Math.abs(dx);
                }
                else if (key === org.shikhar.AWTKeyEvent.VK_DOWN) {
                    if (dy <= 0)
                        return -1;
                    return dy + sidewaysFactorX * Math.abs(dx);
                }
                else
                    return -1;
            }
            getBorderDistance(absoluteBounds, key, component, sidewaysFactorX, sidewaysFactorY) {
                const bounds = this.getAbsoluteBounds(component);
                let dx;
                if (absoluteBounds.x + absoluteBounds.width <= bounds.x) {
                    if (key === org.shikhar.AWTKeyEvent.VK_LEFT)
                        return -1;
                    dx = bounds.x - (absoluteBounds.x + absoluteBounds.width);
                }
                else if (absoluteBounds.x >= bounds.x + bounds.width) {
                    if (key === org.shikhar.AWTKeyEvent.VK_RIGHT)
                        return -1;
                    dx = absoluteBounds.x - (bounds.x + bounds.width);
                }
                else {
                    if (key === org.shikhar.AWTKeyEvent.VK_LEFT || key === org.shikhar.AWTKeyEvent.VK_RIGHT) {
                        return -1;
                    }
                    dx = 0;
                }
                let dy;
                if (absoluteBounds.y + absoluteBounds.height <= bounds.y) {
                    if (key === org.shikhar.AWTKeyEvent.VK_UP)
                        return -1;
                    dy = bounds.y - (absoluteBounds.y + absoluteBounds.height);
                }
                else if (absoluteBounds.y >= bounds.y + bounds.height) {
                    if (key === org.shikhar.AWTKeyEvent.VK_DOWN)
                        return -1;
                    dy = absoluteBounds.y - (bounds.y + bounds.height);
                }
                else {
                    if (key === org.shikhar.AWTKeyEvent.VK_UP || key === org.shikhar.AWTKeyEvent.VK_DOWN) {
                        return -1;
                    }
                    dy = 0;
                }
                if (key === org.shikhar.AWTKeyEvent.VK_DOWN || key === org.shikhar.AWTKeyEvent.VK_UP) {
                    return dy + sidewaysFactorX * dx;
                }
                else if (key === org.shikhar.AWTKeyEvent.VK_RIGHT || key === org.shikhar.AWTKeyEvent.VK_LEFT) {
                    return dx + sidewaysFactorY * dy;
                }
                return -1;
            }
            doNodeTree(g, root, x, y) {
                for (let next = null, parent = root; true; parent = next) {
                    {
                        next = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":comp");
                        if (next == null) {
                            next = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":next");
                        }
                        if (next != null) {
                            if (g != null)
                                g.setColor(-16711681);
                            const r = this.getRectangle(next, "bounds");
                            if (r != null) {
                                if (g != null)
                                    g.drawLine(x + r.x, y + r.y, x + r.x + r.width, y + r.y + r.height);
                            }
                            if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(next, "expanded", true)) {
                                next = null;
                            }
                        }
                        while ((next == null)) {
                            {
                                parent = this.getParent(parent);
                                if (parent == null || Thinlet.getComponentClass(parent) !== "node") {
                                    return;
                                }
                                if (parent === root) {
                                    next = parent;
                                }
                                else {
                                    next = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":next");
                                }
                            }
                        }
                        ;
                        if (next === root) {
                            return;
                        }
                    }
                    ;
                }
            }
            paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(g, clipx, clipy, clipwidth, clipheight, component, enabled) {
                const classname = Thinlet.getComponentClass(component);
                if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "visible", true)) {
                    return;
                }
                const bounds = this.getRectangle(component, "bounds");
                if (bounds == null) {
                    return;
                }
                if (bounds.width < 0) {
                    bounds.width = Math.abs(bounds.width);
                    this.doLayout(component);
                }
                if ((clipx + clipwidth < bounds.x) || (clipx > bounds.x + bounds.width) || (clipy + clipheight < bounds.y) || (clipy > bounds.y + bounds.height)) {
                    return;
                }
                clipx -= bounds.x;
                clipy -= bounds.y;
                g.translate(bounds.x, bounds.y);
                const pressed = (this.mousepressed === component);
                const inside = (this.mouseinside === component) && ((this.mousepressed == null) || pressed);
                const focus = this.focusinside && (this.focusowner === component);
                enabled = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "enabled", true);
                if ("label" === classname) {
                    this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, 0, 0, bounds.width, bounds.height, g, clipx, clipy, clipwidth, clipheight, false, false, false, false, 0, 0, 0, 0, false, enabled ? 'e' : 'd', "left", true, false);
                }
                else if (("button" === classname) || ("togglebutton" === classname)) {
                    const toggled = ("togglebutton" === classname) && this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", false);
                    const link = ("button" === classname) && (Thinlet.get$java_lang_Object$java_lang_Object(component, "type") === "link");
                    if (link) {
                        this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, 0, 0, bounds.width, bounds.height, g, clipx, clipy, clipwidth, clipheight, false, false, false, false, 0, 0, 0, 0, focus, enabled ? (pressed ? 'e' : 'l') : 'd', "center", true, enabled && (inside !== pressed));
                    }
                    else {
                        const mode = enabled ? ((inside !== pressed) ? 'h' : ((pressed || toggled) ? 'p' : 'g')) : 'd';
                        this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, 0, 0, bounds.width, bounds.height, g, clipx, clipy, clipwidth, clipheight, true, true, true, true, 2, 5, 2, 5, focus, mode, "center", true, false);
                    }
                }
                else if ("checkbox" === classname) {
                    this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, 0, 0, bounds.width, bounds.height, g, clipx, clipy, clipwidth, clipheight, false, false, false, false, 0, this.block + 3, 0, 0, false, enabled ? 'e' : 'd', "left", true, false);
                    const selected = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", false);
                    const group = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "group", null);
                    const border = enabled ? this.c_border : this.c_disable;
                    const foreground = enabled ? ((inside !== pressed) ? this.c_hover : (pressed ? this.c_press : this.c_ctrl)) : this.c_bg;
                    const dy = ((bounds.height - this.block + 2) / 2 | 0);
                    if (group == null) {
                        this.paintRect(g, 1, dy + 1, this.block - 2, this.block - 2, border, foreground, true, true, true, true, true);
                    }
                    else {
                        g.setColor((foreground !== this.c_ctrl) ? foreground : this.c_bg);
                        g.fillRect(1, dy + 1, this.block - 3 + Thinlet.evm, this.block - 3 + Thinlet.evm);
                        g.setColor(border);
                        g.drawRect(1, dy + 1, this.block - 3, this.block - 3);
                    }
                    if (focus) {
                        this.drawFocus(g, 0, 0, bounds.width - 1, bounds.height - 1);
                    }
                    if ((!selected && inside && pressed) || (selected && (!inside || !pressed))) {
                        g.setColor(enabled ? this.c_text : this.c_disable);
                        if (group == null) {
                            g.fillRect(3, dy + this.block - 9, 2 + Thinlet.evm, 6 + Thinlet.evm);
                            g.drawLine(3, dy + this.block - 4, this.block - 4, dy + 3);
                            g.drawLine(4, dy + this.block - 4, this.block - 4, dy + 4);
                        }
                        else {
                            g.fillRect(5, dy + 5, this.block - 10 + Thinlet.evm, this.block - 10 + Thinlet.evm);
                            g.drawRect(4, dy + 4, this.block - 9, this.block - 9);
                        }
                    }
                }
                else if ("combobox" === classname) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true)) {
                        const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                        const left = (((icon != null) ? icon.width : 0) | 0);
                        this.paintField(g, clipx, clipy, clipwidth, clipheight, component, bounds.width - this.block, bounds.height, focus, enabled, false, left);
                        if (icon != null) {
                            g.drawImage$org_shikhar_AWTImage$int$int$int(icon, 2, ((bounds.height - icon.height) / 2 | 0), org.shikhar.Graphics.TOP | org.shikhar.Graphics.LEFT);
                        }
                        this.paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, bounds.width - this.block, 0, this.block, bounds.height, 'S', enabled, inside, pressed, "down", true, false, true, true, true);
                    }
                    else {
                        this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, 0, 0, bounds.width, bounds.height, g, clipx, clipy, clipwidth, clipheight, true, true, true, true, 1, 1, 1, 1 + this.block, focus, enabled ? ((inside !== pressed) ? 'h' : (pressed ? 'p' : 'g')) : 'd', "left", false, false);
                        g.setColor(enabled ? this.c_text : this.c_disable);
                        this.paintArrow$org_shikhar_Graphics$int$int$int$int$char(g, bounds.width - this.block, 0, this.block, bounds.height, 'S');
                    }
                }
                else if (":combolist" === classname) {
                    this.paintScroll(component, classname, pressed, inside, focus, false, enabled, g, clipx, clipy, clipwidth, clipheight);
                }
                else if (("textfield" === classname) || ("passwordfield" === classname)) {
                    this.paintField(g, clipx, clipy, clipwidth, clipheight, component, bounds.width, bounds.height, focus, enabled, ("passwordfield" === classname), 0);
                }
                else if ("textarea" === classname) {
                    this.paintScroll(component, classname, pressed, inside, focus, true, enabled, g, clipx, clipy, clipwidth, clipheight);
                }
                else if ("tabbedpane" === classname) {
                    let i = 0;
                    let selectedtab = null;
                    const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                    const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                    const horizontal = ((placement === "top") || (placement === "bottom"));
                    const stacked = (placement === "stacked");
                    const bx = stacked ? 0 : horizontal ? 2 : 1;
                    const by = stacked ? 0 : horizontal ? 1 : 2;
                    const bw = 2 * bx;
                    const bh = 2 * by;
                    const pcx = clipx;
                    const pcy = clipy;
                    const pcw = clipwidth;
                    const pch = clipheight;
                    clipx = Math.max(0, clipx);
                    clipy = Math.max(0, clipy);
                    clipwidth = Math.min(bounds.width, pcx + pcw) - clipx;
                    clipheight = Math.min(bounds.height, pcy + pch) - clipy;
                    g.clipRect(clipx, clipy, clipwidth, clipheight);
                    const lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                    for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            if (selected !== i) {
                                const hover = inside && (this.mousepressed == null) && (this.insidepart === tab);
                                const tabenabled = enabled && this.getBoolean$java_lang_Object$java_lang_String$boolean(tab, "enabled", true);
                                this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(tab, r.x + bx, r.y + by, r.width - bw, r.height - bh, g, clipx, clipy, clipwidth, clipheight, (placement !== "bottom"), (placement !== "right"), !stacked && (placement !== "top"), (placement !== "left"), 1, 3, 1, 3, focus && tab === lead, tabenabled ? (hover ? 'h' : 'g') : 'd', "left", true, false);
                            }
                            else {
                                selectedtab = tab;
                                this.paintBorderBackground(tab, (placement === "left") ? r.width - 1 : 0, stacked ? (r.y + r.height - 1) : (placement === "top") ? r.height - 1 : 0, (horizontal || stacked) ? bounds.width : (bounds.width - r.width + 1), stacked ? (bounds.height - r.y - r.height + 1) : horizontal ? (bounds.height - r.height + 1) : bounds.height, g, true, true, true, true, enabled ? 'e' : 'd');
                                const comp = Thinlet.get$java_lang_Object$java_lang_Object(selectedtab, ":comp");
                                if ((comp != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                    clipx -= r.x;
                                    clipy -= r.y;
                                    g.translate(r.x, r.y);
                                    this.paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(g, clipx, clipy, clipwidth, clipheight, comp, enabled);
                                    clipx += r.x;
                                    clipy += r.y;
                                    g.translate(-r.x, -r.y);
                                }
                            }
                            i++;
                        }
                        ;
                    }
                    if (selectedtab != null) {
                        const r = this.getRectangle(selectedtab, "bounds");
                        const ph = stacked ? 3 : (horizontal ? 5 : 4);
                        const pv = stacked ? 1 : (horizontal ? 2 : 3);
                        this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(selectedtab, r.x, r.y, r.width, r.height, g, clipx, clipy, clipwidth, clipheight, (placement !== "bottom"), (placement !== "right"), !stacked && (placement !== "top"), (placement !== "left"), pv, ph, pv, ph, focus && selectedtab === lead, enabled ? 'b' : 'i', "left", true, false);
                    }
                    g.setClip(pcx, pcy, pcw, pch);
                }
                else if (("panel" === classname) || ("dialog" === classname)) {
                    const titleheight = this.getInteger$java_lang_Object$java_lang_String$int(component, ":titleheight", 0);
                    if ("dialog" === classname) {
                        this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, 0, 0, bounds.width, 3 + titleheight, g, clipx, clipy, clipwidth, clipheight, true, true, false, true, 1, 2, 1, 2, false, 'g', "left", false, false);
                        let controlx = bounds.width - titleheight - 1;
                        if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "closable", false)) {
                            this.paint$java_lang_Object$org_shikhar_Graphics$int$int$int$int$char(component, g, controlx, 3, titleheight - 2, titleheight - 2, 'c');
                            controlx -= titleheight;
                        }
                        if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "maximizable", false)) {
                            this.paint$java_lang_Object$org_shikhar_Graphics$int$int$int$int$char(component, g, controlx, 3, titleheight - 2, titleheight - 2, 'm');
                            controlx -= titleheight;
                        }
                        if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "iconifiable", false)) {
                            this.paint$java_lang_Object$org_shikhar_Graphics$int$int$int$int$char(component, g, controlx, 3, titleheight - 2, titleheight - 2, 'i');
                        }
                        this.paintRect(g, 0, 3 + titleheight, bounds.width, bounds.height - 3 - titleheight, this.c_border, this.c_press, false, true, true, true, true);
                        this.paintBorderBackground(component, 3, 3 + titleheight, bounds.width - 6, bounds.height - 6 - titleheight, g, true, true, true, true, 'b');
                    }
                    else {
                        const border = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", false);
                        this.paintBorderBackground(component, 0, (titleheight / 2 | 0), bounds.width, bounds.height - ((titleheight / 2 | 0)), g, border, border, border, border, enabled ? 'e' : 'd');
                        this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, 0, 0, bounds.width, titleheight, g, clipx, clipy, clipwidth, clipheight, false, false, false, false, 0, 3, 0, 3, false, enabled ? 'x' : 'd', "left", false, false);
                    }
                    if (Thinlet.get$java_lang_Object$java_lang_Object(component, ":port") != null) {
                        this.paintScroll(component, classname, pressed, inside, focus, false, enabled, g, clipx, clipy, clipwidth, clipheight);
                    }
                    else {
                        for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                            {
                                this.paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(g, clipx, clipy, clipwidth, clipheight, comp, enabled);
                            }
                            ;
                        }
                    }
                }
                else if ("desktop" === classname) {
                    this.paintRect(g, 0, 0, bounds.width, bounds.height, this.c_border, this.c_bg, false, false, false, false, true);
                    this.paintReverse(g, clipx, clipy, clipwidth, clipheight, Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"), enabled);
                    if ((this.tooltipowner != null) && (component === this.content)) {
                        const r = this.getRectangle(this.tooltipowner, ":tooltipbounds");
                        this.paintRect(g, r.x, r.y, r.width, r.height, this.c_border, this.c_bg, true, true, true, true, true);
                        const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(this.tooltipowner, "tooltip", null);
                        g.setColor(this.c_text);
                        g.drawString$java_lang_String$int$int$int(text, r.x + 2, r.y + g.getFont().getBaselinePosition() + 2, org.shikhar.Graphics.LEFT | org.shikhar.Graphics.BASELINE);
                    }
                }
                else if ("spinbox" === classname) {
                    this.paintField(g, clipx, clipy, clipwidth, clipheight, component, bounds.width - this.block, bounds.height, focus, enabled, false, 0);
                    this.paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, bounds.width - this.block, 0, this.block, (bounds.height / 2 | 0), 'N', enabled, inside, pressed, "up", true, false, false, true, true);
                    this.paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, bounds.width - this.block, (bounds.height / 2 | 0), this.block, bounds.height - ((bounds.height / 2 | 0)), 'S', enabled, inside, pressed, "down", true, false, true, true, true);
                }
                else if ("progressbar" === classname) {
                    const minimum = this.getInteger$java_lang_Object$java_lang_String$int(component, "minimum", 0);
                    const maximum = this.getInteger$java_lang_Object$java_lang_String$int(component, "maximum", 100);
                    const value = this.getInteger$java_lang_Object$java_lang_String$int(component, "value", 0);
                    const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    let length;
                    if (maximum - minimum !== 0) {
                        length = ((value - minimum) * ((horizontal ? bounds.width : bounds.height) - 1) / (maximum - minimum) | 0);
                    }
                    else {
                        length = 0;
                    }
                    this.paintRect(g, 0, 0, horizontal ? length : bounds.width, horizontal ? bounds.height : length, enabled ? this.c_border : this.c_disable, this.c_select, true, true, horizontal, !horizontal, true);
                    this.paintRect(g, horizontal ? length : 0, horizontal ? 0 : length, horizontal ? (bounds.width - length) : bounds.width, horizontal ? bounds.height : (bounds.height - length), enabled ? this.c_border : this.c_disable, this.c_bg, true, true, true, true, true);
                }
                else if ("slider" === classname) {
                    if (focus) {
                        this.drawFocus(g, 0, 0, bounds.width - 1, bounds.height - 1);
                    }
                    const minimum = this.getInteger$java_lang_Object$java_lang_String$int(component, "minimum", 0);
                    const maximum = this.getInteger$java_lang_Object$java_lang_String$int(component, "maximum", 100);
                    const value = this.getInteger$java_lang_Object$java_lang_String$int(component, "value", 0);
                    const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    let length;
                    if (maximum - minimum !== 0) {
                        length = ((value - minimum) * ((horizontal ? bounds.width : bounds.height) - this.block) / (maximum - minimum) | 0);
                    }
                    else {
                        length = 0;
                    }
                    this.paintRect(g, horizontal ? 0 : 3, horizontal ? 3 : 0, horizontal ? length : (bounds.width - 6), horizontal ? (bounds.height - 6) : length, enabled ? this.c_border : this.c_disable, this.c_bg, true, true, horizontal, !horizontal, true);
                    this.paintRect(g, horizontal ? length : 0, horizontal ? 0 : length, horizontal ? this.block : bounds.width, horizontal ? bounds.height : this.block, enabled ? this.c_border : this.c_disable, enabled ? this.focusowner === component ? this.c_hover : (this.insidepart === component ? this.c_hover : this.c_ctrl) : this.c_bg, true, true, true, true, true);
                    this.paintRect(g, horizontal ? (this.block + length) : 3, horizontal ? 3 : (this.block + length), bounds.width - (horizontal ? (this.block + length) : 6), bounds.height - (horizontal ? 6 : (this.block + length)), enabled ? this.c_border : this.c_disable, this.c_bg, horizontal, !horizontal, true, true, true);
                }
                else if ("splitpane" === classname) {
                    const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    const divider = this.getInteger$java_lang_Object$java_lang_String$int(component, "divider", -1);
                    this.paintRect(g, horizontal ? divider : 0, horizontal ? 0 : divider, horizontal ? 5 : bounds.width, horizontal ? bounds.height : 5, this.c_border, this.c_bg, false, false, false, false, true);
                    if (focus) {
                        if (horizontal) {
                            this.drawFocus(g, divider, 0, 4, bounds.height - 1);
                        }
                        else {
                            this.drawFocus(g, 0, divider, bounds.width - 1, 4);
                        }
                    }
                    g.setColor(enabled ? this.c_border : this.c_disable);
                    const xy = horizontal ? bounds.height : bounds.width;
                    const xy1 = Math.max(0, (xy / 2 | 0) - 12);
                    const xy2 = Math.min((xy / 2 | 0) + 12, xy - 1);
                    for (let i = divider + 1; i < divider + 4; i += 2) {
                        {
                            if (horizontal) {
                                g.drawLine(i, xy1, i, xy2);
                            }
                            else {
                                g.drawLine(xy1, i, xy2, i);
                            }
                        }
                        ;
                    }
                    const comp1 = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                    if (comp1 != null) {
                        this.paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(g, clipx, clipy, clipwidth, clipheight, comp1, enabled);
                        const comp2 = Thinlet.get$java_lang_Object$java_lang_Object(comp1, ":next");
                        if (comp2 != null) {
                            this.paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(g, clipx, clipy, clipwidth, clipheight, comp2, enabled);
                        }
                    }
                }
                else if (("list" === classname) || ("table" === classname) || ("tree" === classname)) {
                    this.paintScroll(component, classname, pressed, inside, focus, focus && (Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp") == null), enabled, g, clipx, clipy, clipwidth, clipheight);
                }
                else if ("separator" === classname) {
                    g.setColor(enabled ? this.c_border : this.c_disable);
                    g.fillRect(0, 0, bounds.width + Thinlet.evm, bounds.height + Thinlet.evm);
                }
                else if ("menubar" === classname) {
                    const selected = Thinlet.get$java_lang_Object$java_lang_Object(component, "selected");
                    let lastx = 0;
                    const lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                    for (let menu = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Thinlet.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            const mb = this.getRectangle(menu, "bounds");
                            if (clipx + clipwidth <= mb.x) {
                                break;
                            }
                            if (clipx >= mb.x + mb.width) {
                                continue;
                            }
                            const menuenabled = enabled && this.getBoolean$java_lang_Object$java_lang_String$boolean(menu, "enabled", true);
                            const armed = (selected === menu);
                            const hoover = (selected == null) && (this.insidepart === menu);
                            this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(menu, mb.x, 0, mb.width, bounds.height, g, clipx, clipy, clipwidth, clipheight, armed, armed, true, armed, 1, 3, 1, 3, menu === lead && this.focusowner === component, enabled ? (menuenabled ? (armed ? 's' : (hoover ? 'h' : 'g')) : 'r') : 'd', "left", true, false);
                            lastx = mb.x + mb.width;
                        }
                        ;
                    }
                    this.paintRect(g, lastx, 0, bounds.width - lastx, bounds.height, enabled ? this.c_border : this.c_disable, enabled ? this.c_ctrl : this.c_bg, false, false, true, false, true);
                }
                else if (":popup" === classname) {
                    this.paintRect(g, 0, 0, bounds.width, bounds.height, this.c_border, this.c_textbg, true, true, true, true, true);
                    const selected = Thinlet.get$java_lang_Object$java_lang_Object(component, "selected");
                    for (let menu = Thinlet.get$java_lang_Object$java_lang_Object(Thinlet.get$java_lang_Object$java_lang_Object(component, "menu"), ":comp"); menu != null; menu = Thinlet.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            const r = this.getRectangle(menu, "bounds");
                            if (clipy + clipheight <= r.y) {
                                break;
                            }
                            if (clipy >= r.y + r.height) {
                                continue;
                            }
                            const itemclass = Thinlet.getComponentClass(menu);
                            if (itemclass === "separator") {
                                g.setColor(this.c_border);
                                g.fillRect(r.x, r.y, bounds.width - 2 + Thinlet.evm, r.height + Thinlet.evm);
                            }
                            else {
                                const armed = (selected === menu);
                                const menuenabled = this.getBoolean$java_lang_Object$java_lang_String$boolean(menu, "enabled", true);
                                this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(menu, r.x, r.y, bounds.width - 2, r.height, g, clipx, clipy, clipwidth, clipheight, false, false, false, false, 2, (itemclass === "checkboxmenuitem") ? (this.block + 7) : 4, 2, 4, false, menuenabled ? (armed ? 's' : 't') : 'd', "left", true, false);
                                if (itemclass === "checkboxmenuitem") {
                                    const checked = this.getBoolean$java_lang_Object$java_lang_String$boolean(menu, "selected", false);
                                    const group = this.getString$java_lang_Object$java_lang_String$java_lang_String(menu, "group", null);
                                    g.translate(r.x + 4, r.y + 2);
                                    g.setColor(menuenabled ? this.c_border : this.c_disable);
                                    if (group == null) {
                                        g.drawRect(1, 1, this.block - 3, this.block - 3);
                                    }
                                    else {
                                        g.drawRect(1, 1, this.block - 3, this.block - 3);
                                    }
                                    if (checked) {
                                        g.setColor(menuenabled ? this.c_text : this.c_disable);
                                        if (group == null) {
                                            g.fillRect(3, this.block - 9, 2 + Thinlet.evm, 6 + Thinlet.evm);
                                            g.drawLine(3, this.block - 4, this.block - 4, 3);
                                            g.drawLine(4, this.block - 4, this.block - 4, 4);
                                        }
                                        else {
                                            g.fillRect(5, 5, this.block - 10 + Thinlet.evm, this.block - 10 + Thinlet.evm);
                                            g.drawRect(4, 4, this.block - 9, this.block - 9);
                                        }
                                    }
                                    g.translate(-r.x - 4, -r.y - 2);
                                }
                                if (itemclass === "menu") {
                                    this.paintArrow$org_shikhar_Graphics$int$int$int$int$char(g, r.x + bounds.width - this.block, r.y, this.block, r.height, 'E');
                                }
                                else {
                                    const accelerator = this.getAccelerator(menu);
                                    if (accelerator != null) {
                                        g.drawString$java_lang_String$int$int$int(accelerator, bounds.width - 4 - this.font.stringWidth(accelerator), r.y + 2 + 10, org.shikhar.Graphics.LEFT | org.shikhar.Graphics.BASELINE);
                                    }
                                }
                            }
                        }
                        ;
                    }
                }
                else if ("bean" === classname) {
                    throw new java.lang.RuntimeException("not implemented");
                }
                else
                    throw new java.lang.IllegalArgumentException(classname);
                g.translate(-bounds.x, -bounds.y);
                clipx += bounds.x;
                clipy += bounds.y;
            }
            paintReverse(g, clipx, clipy, clipwidth, clipheight, component, enabled) {
                if (component != null) {
                    const bounds = this.getRectangle(component, "bounds");
                    if ((clipx < bounds.x) || (clipx + clipwidth > bounds.x + bounds.width) || (clipy < bounds.y) || (clipy + clipheight > bounds.y + bounds.height)) {
                        this.paintReverse(g, clipx, clipy, clipwidth, clipheight, Thinlet.get$java_lang_Object$java_lang_Object(component, ":next"), enabled);
                    }
                    this.paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(g, clipx, clipy, clipwidth, clipheight, component, enabled);
                }
            }
            paintField(g, clipx, clipy, clipwidth, clipheight, component, width, height, focus, enabled, hidden, left) {
                const editable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true);
                this.paintRect(g, 0, 0, width, height, enabled ? this.c_border : this.c_disable, editable ? this.getColor(component, "background", this.c_textbg) : this.c_bg, true, true, true, true, true);
                g.clipRect(1 + left, 1, width - left - 2, height - 2);
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                const offset = this.getInteger$java_lang_Object$java_lang_String$int(component, ":offset", 0);
                const currentfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                if (currentfont != null) {
                    g.setFont(currentfont);
                }
                const fm = g.getFont();
                let caret = 0;
                if (focus) {
                    const start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                    const end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                    caret = hidden ? (fm.charWidth('*') * end) : fm.stringWidth(text.substring(0, end));
                    if (start !== end) {
                        const is = hidden ? (fm.charWidth('*') * start) : fm.stringWidth(text.substring(0, start));
                        g.setColor(this.c_select);
                        g.fillRect(2 + left - offset + Math.min(is, caret), 1, Math.abs(caret - is) + Thinlet.evm, height - 2 + Thinlet.evm);
                    }
                }
                if (focus) {
                    g.setColor(this.c_focus);
                    g.fillRect(1 + left - offset + caret, 1, 1 + Thinlet.evm, height - 2 + Thinlet.evm);
                }
                this.setColor(g, enabled ? this.getColor(component, "foreground", this.c_text) : this.c_disable);
                let fx = 2 + left - offset;
                const fy = ((height + this.font.getBaselinePosition() - (this.font.getHeight() - this.font.getBaselinePosition())) / 2 | 0);
                if (hidden) {
                    const fh = fm.charWidth('*');
                    for (let i = text.length; i > 0; i--) {
                        {
                            g.drawString$java_lang_String$int$int$int("*", fx, fy, org.shikhar.Graphics.LEFT | org.shikhar.Graphics.BASELINE);
                            fx += fh;
                        }
                        ;
                    }
                }
                else {
                    g.drawString$java_lang_String$int$int$int(text, fx, fy, org.shikhar.Graphics.LEFT | org.shikhar.Graphics.BASELINE);
                }
                if (currentfont != null) {
                    g.setFont(this.font);
                }
                g.setClip(clipx, clipy, clipwidth, clipheight);
                if (focus) {
                    this.drawFocus(g, 1, 1, width - 3, height - 3);
                }
            }
            setColor(g, color) {
                if (g == null)
                    throw new java.lang.RuntimeException("Cannot set color on null graphics");
                g.setColor(color);
            }
            getColor(component, key, defaultColor) {
                const value = Thinlet.get$java_lang_Object$java_lang_Object(component, key);
                return (value != null) ? /* intValue */ (value | 0) : defaultColor;
            }
            /**
             * @param {*} component
             * scrollable widget
             * @param {string} classname
             * @param {boolean} pressed
             * @param {boolean} inside
             * @param {boolean} focus
             * @param {boolean} enabled
             * @param {org.shikhar.Graphics} g
             * grahics context
             * @param {number} clipx
             * current cliping x location relative to the component
             * @param {number} clipy
             * y location of the cliping area relative to the component
             * @param {number} clipwidth
             * width of the cliping area
             * @param {number} clipheight
             * height of the cliping area
             * @param header
             * column height
             * @param topborder
             * bordered on the top if true
             * @param border
             * define left, bottom, and right border if true
             * @param {boolean} drawfocus
             */
            paintScroll(component, classname, pressed, inside, focus, drawfocus, enabled, g, clipx, clipy, clipwidth, clipheight) {
                const port = this.getRectangle(component, ":port");
                const horizontal = this.getRectangle(component, ":horizontal");
                const vertical = this.getRectangle(component, ":vertical");
                const view = this.getRectangle(component, ":view");
                if (horizontal != null) {
                    const x = horizontal.x;
                    const y = horizontal.y;
                    const width = horizontal.width;
                    const height = horizontal.height;
                    this.paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, x, y, this.block, height, 'W', enabled, inside, pressed, "left", true, true, true, false, true);
                    this.paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, x + width - this.block, y, this.block, height, 'E', enabled, inside, pressed, "right", true, false, true, true, true);
                    const track = width - (2 * this.block);
                    if (track < 10) {
                        this.paintRect(g, x + this.block, y, track, height, enabled ? this.c_border : this.c_disable, this.c_bg, true, true, true, true, true);
                    }
                    else {
                        const knob = Math.max((track * port.width / view.width | 0), 10);
                        const decrease = (view.x * (track - knob) / (view.width - port.width) | 0);
                        this.paintRect(g, x + this.block, y, decrease, height, enabled ? this.c_border : this.c_disable, this.c_bg, false, true, true, false, true);
                        this.paintRect(g, x + this.block + decrease, y, knob, height, enabled ? this.c_border : this.c_disable, enabled ? this.c_ctrl : this.c_bg, true, true, true, true, true);
                        const n = Math.min(5, ((knob - 4) / 3 | 0));
                        g.setColor(enabled ? this.c_border : this.c_disable);
                        const cx = (x + this.block + decrease) + ((knob + 2 - n * 3) / 2 | 0);
                        for (let i = 0; i < n; i++) {
                            {
                                g.drawLine(cx + i * 3, y + 3, cx + i * 3, y + height - 5);
                            }
                            ;
                        }
                        const increase = track - decrease - knob;
                        this.paintRect(g, x + this.block + decrease + knob, y, increase, height, enabled ? this.c_border : this.c_disable, this.c_bg, false, false, true, true, true);
                    }
                }
                if (vertical != null) {
                    const x = vertical.x;
                    const y = vertical.y;
                    const width = vertical.width;
                    const height = vertical.height;
                    this.paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, x, y, width, this.block, 'N', enabled, inside, pressed, "up", true, true, false, true, false);
                    this.paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, x, y + height - this.block, width, this.block, 'S', enabled, inside, pressed, "down", false, true, true, true, false);
                    const track = height - (2 * this.block);
                    if (track < 10) {
                        this.paintRect(g, x, y + this.block, width, track, enabled ? this.c_border : this.c_disable, this.c_bg, true, true, true, true, false);
                    }
                    else {
                        const knob = Math.max((track * port.height / view.height | 0), 10);
                        const decrease = (view.y * (track - knob) / (view.height - port.height) | 0);
                        this.paintRect(g, x, y + this.block, width, decrease, enabled ? this.c_border : this.c_disable, this.c_bg, true, false, false, true, false);
                        this.paintRect(g, x, y + this.block + decrease, width, knob, enabled ? this.c_border : this.c_disable, enabled ? this.c_ctrl : this.c_bg, true, true, true, true, false);
                        const n = Math.min(5, ((knob - 4) / 3 | 0));
                        g.setColor(enabled ? this.c_border : this.c_disable);
                        const cy = (y + this.block + decrease) + ((knob + 2 - n * 3) / 2 | 0);
                        for (let i = 0; i < n; i++) {
                            {
                                g.drawLine(x + 3, cy + i * 3, x + width - 5, cy + i * 3);
                            }
                            ;
                        }
                        const increase = track - decrease - knob;
                        this.paintRect(g, x, y + this.block + decrease + knob, width, increase, enabled ? this.c_border : this.c_disable, this.c_bg, false, false, true, true, false);
                    }
                }
                const hneed = (horizontal != null);
                const vneed = (vertical != null);
                if (("panel" !== classname) && ("dialog" !== classname) && (("textarea" !== classname) || this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", true))) {
                    this.paintRect(g, port.x - 1, port.y - 1, port.width + (vneed ? 1 : 2), port.height + (hneed ? 1 : 2), enabled ? this.c_border : this.c_disable, this.getColor(component, "background", this.c_textbg), true, true, !hneed, !vneed, true);
                    if ("table" === classname) {
                        const header = Thinlet.get$java_lang_Object$java_lang_Object(component, "header");
                        if (header != null) {
                            const columnwidths = Thinlet.get$java_lang_Object$java_lang_Object(component, ":widths");
                            let column = Thinlet.get$java_lang_Object$java_lang_Object(header, ":comp");
                            let x = 0;
                            g.clipRect(0, 0, port.width + 2, port.y);
                            for (let i = 0; i < columnwidths.length; i++) {
                                {
                                    if (i !== 0) {
                                        column = Thinlet.get$java_lang_Object$java_lang_Object(column, ":next");
                                    }
                                    const lastcolumn = (i === columnwidths.length - 1);
                                    const width = lastcolumn ? (view.width - x + 2) : columnwidths[i];
                                    this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(column, x - view.x, 0, width, port.y - 1, g, clipx, clipy, clipwidth, clipheight, true, true, false, lastcolumn, 1, 1, 0, 0, false, enabled ? 'g' : 'd', "left", false, false);
                                    const sort = Thinlet.get$java_lang_Object$java_lang_Object(column, "sort");
                                    if (sort != null) {
                                        this.paintArrow$org_shikhar_Graphics$int$int$int$int$char(g, x - view.x + width - this.block, 0, this.block, port.y, (sort === "ascent") ? 'S' : 'N');
                                    }
                                    x += width;
                                }
                                ;
                            }
                            g.setClip(clipx, clipy, clipwidth, clipheight);
                        }
                    }
                }
                const x1 = Math.max(clipx, port.x);
                const x2 = Math.min(clipx + clipwidth, port.x + port.width);
                const y1 = Math.max(clipy, port.y);
                const y2 = Math.min(clipy + clipheight, port.y + port.height);
                if ((x2 > x1) && (y2 > y1)) {
                    g.clipRect(x1, y1, x2 - x1, y2 - y1);
                    g.translate(port.x - view.x, port.y - view.y);
                    this.paint$java_lang_Object$java_lang_String$boolean$boolean$org_shikhar_Graphics$int$int$int$int$int$int(component, classname, focus, enabled, g, view.x - port.x + x1, view.y - port.y + y1, x2 - x1, y2 - y1, port.width, view.width);
                    g.translate(view.x - port.x, view.y - port.y);
                    g.setClip(clipx, clipy, clipwidth, clipheight);
                }
                if (focus && drawfocus) {
                    this.drawFocus(g, port.x, port.y, port.width - 1, port.height - 1);
                }
            }
            paint$java_lang_Object$java_lang_String$boolean$boolean$org_shikhar_Graphics$int$int$int$int$int$int(component, classname, focus, enabled, g, clipx, clipy, clipwidth, clipheight, portwidth, viewwidth) {
                if ("textarea" === classname) {
                    const chars = Thinlet.get$java_lang_Object$java_lang_Object(component, ":text");
                    const start = focus ? this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0) : 0;
                    const end = focus ? this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0) : 0;
                    const is = Math.min(start, end);
                    const ie = Math.max(start, end);
                    const customfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                    if (customfont != null) {
                        g.setFont(customfont);
                    }
                    const fm = g.getFont();
                    const fontascent = fm.getBaselinePosition();
                    const fontheight = fm.getHeight();
                    let ascent = 1;
                    const textcolor = enabled ? this.getColor(component, "foreground", this.c_text) : this.c_disable;
                    for (let i = 0, j = 0; j <= chars.length; j++) {
                        {
                            if ((j === chars.length) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[j]) == '\n'.charCodeAt(0))) {
                                if (clipy + clipheight <= ascent) {
                                    break;
                                }
                                if (clipy < ascent + fontheight) {
                                    if (focus && (is !== ie) && (ie >= i) && (is <= j)) {
                                        const xs = (is < i) ? -1 : ((is > j) ? (viewwidth - 1) : fm.charsWidth(chars, i, is - i));
                                        const xe = ((j !== -1) && (ie > j)) ? (viewwidth - 1) : fm.charsWidth(chars, i, ie - i);
                                        g.setColor(this.c_select);
                                        g.fillRect(1 + xs, ascent, xe - xs + Thinlet.evm, fontheight + Thinlet.evm);
                                    }
                                    g.setColor(textcolor);
                                    g.drawChars$char_A$int$int$int$int$int(chars, i, j - i, 1, ascent + fontascent, org.shikhar.Graphics.LEFT | org.shikhar.Graphics.BASELINE);
                                    if (focus && (end >= i) && (end <= j)) {
                                        const caret = fm.charsWidth(chars, i, end - i);
                                        g.setColor(this.c_focus);
                                        g.fillRect(caret, ascent, 1 + Thinlet.evm, fontheight + Thinlet.evm);
                                    }
                                }
                                ascent += fontheight;
                                i = j + 1;
                            }
                        }
                        ;
                    }
                    if (customfont != null) {
                        g.setFont(this.font);
                    }
                }
                else if (":combolist" === classname) {
                    const lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                    for (let choice = Thinlet.get$java_lang_Object$java_lang_Object(Thinlet.get$java_lang_Object$java_lang_Object(component, "combobox"), ":comp"); choice != null; choice = Thinlet.get$java_lang_Object$java_lang_Object(choice, ":next")) {
                        {
                            const r = this.getRectangle(choice, "bounds");
                            if (clipy + clipheight <= r.y) {
                                break;
                            }
                            if (clipy >= r.y + r.height) {
                                continue;
                            }
                            this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(choice, r.x, r.y, portwidth, r.height, g, clipx, clipy, clipwidth, clipheight, false, false, false, false, 2, 4, 2, 4, false, this.getBoolean$java_lang_Object$java_lang_String$boolean(choice, "enabled", true) ? ((lead === choice) ? 's' : 't') : 'd', "left", false, false);
                        }
                        ;
                    }
                }
                else if (("panel" === classname) || ("dialog" === classname)) {
                    for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            this.paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(g, clipx, clipy, clipwidth, clipheight, comp, enabled);
                        }
                        ;
                    }
                }
                else {
                    let lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                    const columnwidths = ("table" === classname) ? Thinlet.get$java_lang_Object$java_lang_Object(component, ":widths") : null;
                    const line = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "line", true);
                    const iline = line ? 1 : 0;
                    const angle = ("tree" === classname) && this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "angle", false);
                    for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"), next = null; item != null; item = next) {
                        {
                            if (focus && (lead == null)) {
                                Thinlet.set(component, ":lead", lead = item);
                            }
                            const r = this.getRectangle(item, "bounds");
                            if (clipy + clipheight <= r.y) {
                                break;
                            }
                            let subnode = false;
                            let expanded = false;
                            if ("tree" !== classname) {
                                next = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next");
                            }
                            else {
                                subnode = (next = Thinlet.get$java_lang_Object$java_lang_Object(item, ":comp")) != null;
                                expanded = subnode && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true);
                                if (!expanded) {
                                    for (let node = item; (node !== component) && ((next = Thinlet.get$java_lang_Object$java_lang_Object(node, ":next")) == null); node = this.getParent(node)) {
                                        ;
                                    }
                                }
                            }
                            if (clipy >= r.y + r.height + iline) {
                                if (angle) {
                                    const nodebelow = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next");
                                    if (nodebelow != null) {
                                        g.setColor(this.c_bg);
                                        const x = r.x - (this.block / 2 | 0);
                                        g.drawLine(x, r.y, x, this.getRectangle(nodebelow, "bounds").y);
                                    }
                                }
                                continue;
                            }
                            const selected = this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false);
                            this.paintRect(g, ("tree" !== classname) ? 0 : r.x, r.y, ("tree" !== classname) ? viewwidth : r.width, r.height, this.c_border, selected ? this.c_select : this.c_textbg, false, false, false, false, true);
                            if (focus && (lead === item)) {
                                this.drawFocus(g, ("tree" !== classname) ? 0 : r.x, r.y, (("tree" !== classname) ? viewwidth : r.width) - 1, r.height - 1);
                            }
                            if (line) {
                                g.setColor(this.c_bg);
                                g.drawLine(0, r.y + r.height, viewwidth, r.y + r.height);
                            }
                            if ("table" !== classname) {
                                const itemenabled = enabled && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "enabled", true);
                                this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(item, r.x, r.y, viewwidth, r.height, g, clipx, clipy, clipwidth, clipheight, false, false, false, false, 1, 3, 1, 3, false, itemenabled ? 'e' : 'd', "left", false, false);
                                if ("tree" === classname) {
                                    const x = r.x - (this.block / 2 | 0);
                                    const y = r.y + ((r.height - 1) / 2 | 0);
                                    if (angle) {
                                        g.setColor(this.c_bg);
                                        g.drawLine(x, r.y, x, y);
                                        g.drawLine(x, y, r.x - 1, y);
                                        const nodebelow = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next");
                                        if (nodebelow != null) {
                                            g.drawLine(x, y, x, this.getRectangle(nodebelow, "bounds").y);
                                        }
                                    }
                                    if (subnode) {
                                        this.paintRect(g, x - 4, y - 4, 9, 9, itemenabled ? this.c_border : this.c_disable, itemenabled ? this.c_ctrl : this.c_bg, true, true, true, true, true);
                                        g.setColor(itemenabled ? this.c_text : this.c_disable);
                                        g.drawLine(x - 2, y, x + 2, y);
                                        if (!expanded) {
                                            g.drawLine(x, y - 2, x, y + 2);
                                        }
                                    }
                                }
                            }
                            else {
                                let i = 0;
                                let x = 0;
                                for (let cell = Thinlet.get$java_lang_Object$java_lang_Object(item, ":comp"); cell != null; cell = Thinlet.get$java_lang_Object$java_lang_Object(cell, ":next")) {
                                    {
                                        if (clipx + clipwidth <= x) {
                                            break;
                                        }
                                        let iwidth = 80;
                                        if ((columnwidths != null) && (columnwidths.length > i)) {
                                            iwidth = (i !== columnwidths.length - 1) ? columnwidths[i] : Math.max(iwidth, viewwidth - x);
                                        }
                                        if (clipx < x + iwidth) {
                                            const cellenabled = enabled && this.getBoolean$java_lang_Object$java_lang_String$boolean(cell, "enabled", true);
                                            this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(cell, r.x + x, r.y, iwidth, r.height - 1, g, clipx, clipy, clipwidth, clipheight, false, false, false, false, 1, 1, 1, 1, false, cellenabled ? 'e' : 'd', "left", false, false);
                                        }
                                        i++;
                                        x += iwidth;
                                    }
                                    ;
                                }
                            }
                        }
                        ;
                    }
                }
            }
            paintRect(g, x, y, width, height, border, bg, top, left, bottom, right, horizontal) {
                if ((width <= 0) || (height <= 0))
                    return;
                g.setColor(border);
                if (top) {
                    g.drawLine(x + width - 1, y, x, y);
                    y++;
                    height--;
                    if (height <= 0)
                        return;
                }
                if (left) {
                    g.drawLine(x, y, x, y + height - 1);
                    x++;
                    width--;
                    if (width <= 0)
                        return;
                }
                if (bottom) {
                    g.drawLine(x, y + height - 1, x + width - 1, y + height - 1);
                    height--;
                    if (height <= 0)
                        return;
                }
                if (right) {
                    g.drawLine(x + width - 1, y + height - 1, x + width - 1, y);
                    width--;
                    if (width <= 0)
                        return;
                }
                if (bg === this.c_ctrl) {
                    this.fill(g, x, y, width, height, horizontal);
                }
                else {
                    g.setColor(bg);
                    g.fillRect(x, y, width + Thinlet.evm, height + Thinlet.evm);
                }
            }
            /**
             * Fill the given rectangle with gradient
             * @param {org.shikhar.Graphics} g
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
             * @param {boolean} horizontal
             */
            fill(g, x, y, width, height, horizontal) {
                if (horizontal) {
                    let part;
                    let offset;
                    if (height > this.block) {
                        this.setColor(g, this.c_bg);
                        g.fillRect(x, y, width + Thinlet.evm, height - this.block + Thinlet.evm);
                        offset = height - this.block;
                        part = 0;
                    }
                    else {
                        part = this.block - height;
                        offset = 0;
                    }
                    for (let i = 0; i < width; i += this.block) {
                        {
                            g.drawRegion(this.hgradient, 0, part, Math.min(this.block, width - i) + Thinlet.evm, this.block - part + Thinlet.evm, x + Math.min(i, width) + Thinlet.evm, y + Thinlet.evm + offset, org.shikhar.Graphics.TOP | org.shikhar.Graphics.LEFT);
                        }
                        ;
                    }
                }
                else {
                    let part;
                    let offset;
                    if (width > this.block) {
                        this.setColor(g, this.c_bg);
                        g.fillRect(x, y, width - this.block + Thinlet.evm, height + Thinlet.evm);
                        offset = width - this.block;
                        part = 0;
                    }
                    else {
                        part = this.block - width;
                        offset = 0;
                    }
                    for (let i = 0; i < height; i += this.block) {
                        {
                            g.drawRegion(this.hgradient, 0, part, Math.min(this.block, height - i) + Thinlet.evm, this.block - part + Thinlet.evm, x + Thinlet.evm + offset, y + Math.min(i, height) + Thinlet.evm, org.shikhar.Graphics.TOP | org.shikhar.Graphics.LEFT);
                        }
                        ;
                    }
                }
            }
            paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, x, y, width, height, dir, enabled, inside, pressed, part, top, left, bottom, right, horizontal) {
                inside = inside && (this.insidepart === part);
                pressed = pressed && (this.pressedpart === part);
                this.paintRect(g, x, y, width, height, enabled ? this.c_border : this.c_disable, enabled ? ((inside !== pressed) ? this.c_hover : (pressed ? this.c_press : this.c_ctrl)) : this.c_bg, top, left, bottom, right, horizontal);
                this.setColor(g, enabled ? this.c_text : this.c_disable);
                this.paintArrow$org_shikhar_Graphics$int$int$int$int$char(g, x + (left ? 1 : 0), y + (top ? 1 : 0), width - (left ? 1 : 0) - (right ? 1 : 0), height - (top ? 1 : 0) - (bottom ? 1 : 0), dir);
            }
            paintArrow(g, x, y, width, height, dir, enabled, inside, pressed, part, top, left, bottom, right, horizontal) {
                if (((g != null && g instanceof org.shikhar.Graphics) || g === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof dir === 'string') || dir === null) && ((typeof enabled === 'boolean') || enabled === null) && ((typeof inside === 'boolean') || inside === null) && ((typeof pressed === 'boolean') || pressed === null) && ((typeof part === 'string') || part === null) && ((typeof top === 'boolean') || top === null) && ((typeof left === 'boolean') || left === null) && ((typeof bottom === 'boolean') || bottom === null) && ((typeof right === 'boolean') || right === null) && ((typeof horizontal === 'boolean') || horizontal === null)) {
                    return this.paintArrow$org_shikhar_Graphics$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(g, x, y, width, height, dir, enabled, inside, pressed, part, top, left, bottom, right, horizontal);
                }
                else if (((g != null && g instanceof org.shikhar.Graphics) || g === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof dir === 'string') || dir === null) && enabled === undefined && inside === undefined && pressed === undefined && part === undefined && top === undefined && left === undefined && bottom === undefined && right === undefined && horizontal === undefined) {
                    return this.paintArrow$org_shikhar_Graphics$int$int$int$int$char(g, x, y, width, height, dir);
                }
                else
                    throw new Error('invalid overload');
            }
            paintArrow$org_shikhar_Graphics$int$int$int$int$char(g, x, y, width, height, dir) {
                const cx = x + (width / 2 | 0) - 2;
                const cy = y + (height / 2 | 0) - 2;
                for (let i = 0; i < 4; i++) {
                    {
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(dir) == 'N'.charCodeAt(0)) {
                            g.drawLine(cx + 1 - i, cy + i, cx + 1 + i, cy + i);
                        }
                        else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(dir) == 'W'.charCodeAt(0)) {
                            g.drawLine(cx + i, cy + 1 - i, cx + i, cy + 1 + i);
                        }
                        else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(dir) == 'S'.charCodeAt(0)) {
                            g.drawLine(cx + 1 - i, cy + 4 - i, cx + 1 + i, cy + 4 - i);
                        }
                        else {
                            g.drawLine(cx + 4 - i, cy + 1 - i, cx + 4 - i, cy + 1 + i);
                        }
                    }
                    ;
                }
            }
            /**
             * Paint component's borders and background
             * @param {*} component
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
             * @param {org.shikhar.Graphics} g
             * @param {boolean} top
             * @param {boolean} left
             * @param {boolean} bottom
             * @param {boolean} right
             * @param {string} mode
             */
            paintBorderBackground(component, x, y, width, height, g, top, left, bottom, right, mode) {
                if ((width <= 0) || (height <= 0)) {
                    return;
                }
                if (top || left || bottom || right) {
                    this.setColor(g, (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'd'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'i'.charCodeAt(0))) ? this.c_border : this.c_disable);
                    if (top) {
                        g.drawLine(x + width - 1, y, x, y);
                        y++;
                        height--;
                        if (height <= 0) {
                            return;
                        }
                    }
                    if (left) {
                        g.drawLine(x, y, x, y + height - 1);
                        x++;
                        width--;
                        if (width <= 0) {
                            return;
                        }
                    }
                    if (bottom) {
                        g.drawLine(x, y + height - 1, x + width - 1, y + height - 1);
                        height--;
                        if (height <= 0) {
                            return;
                        }
                    }
                    if (right) {
                        g.drawLine(x + width - 1, y + height - 1, x + width - 1, y);
                        width--;
                        if (width <= 0) {
                            return;
                        }
                    }
                }
                const background = Thinlet.get$java_lang_Object$java_lang_Object(component, "background");
                switch ((mode).charCodeAt(0)) {
                    case 101 /* 'e' */:
                    case 108 /* 'l' */:
                    case 100 /* 'd' */:
                        if (background == null) {
                            return;
                        }
                        break;
                    case 103 /* 'g' */:
                    case 114 /* 'r' */:
                        if (background == null) {
                            this.fill(g, x, y, width, height, true);
                            return;
                        }
                    case 120 /* 'x' */:
                        return;
                    case 98 /* 'b' */:
                    case 105 /* 'i' */:
                        if (background == null) {
                            g.setColor(this.c_bg);
                        }
                        else {
                            g.setColor(/* intValue */ (background | 0));
                        }
                        break;
                    case 104 /* 'h' */:
                        if (background != null) {
                            g.setColor(Thinlet.brighter(/* intValue */ (background | 0)));
                        }
                        else {
                            g.setColor(this.c_hover);
                        }
                        break;
                    case 112 /* 'p' */:
                        if (background != null) {
                            g.setColor(Thinlet.darker(/* intValue */ (background | 0)));
                        }
                        else {
                            g.setColor(this.c_press);
                        }
                        break;
                    case 116 /* 't' */:
                        if (background == null) {
                            g.setColor(this.c_textbg);
                        }
                        else {
                            g.setColor(/* intValue */ (background | 0));
                        }
                        break;
                    case 115 /* 's' */:
                        g.setColor(this.c_select);
                        break;
                    default:
                        throw new java.lang.IllegalArgumentException();
                }
                g.fillRect(x, y, width + Thinlet.evm, height + Thinlet.evm);
            }
            paint$java_lang_Object$org_shikhar_Graphics$int$int$int$int$char(component, g, x, y, width, height, type) {
                this.paintBorderBackground(component, x, y, width, height, g, true, true, true, true, 'g');
                g.setColor(-16777216);
                switch ((type).charCodeAt(0)) {
                    case 99 /* 'c' */:
                        g.drawLine(x + 3, y + 4, x + width - 5, y + height - 4);
                        g.drawLine(x + 3, y + 3, x + width - 4, y + height - 4);
                        g.drawLine(x + 4, y + 3, x + width - 4, y + height - 5);
                        g.drawLine(x + width - 5, y + 3, x + 3, y + height - 5);
                        g.drawLine(x + width - 4, y + 3, x + 3, y + height - 4);
                        g.drawLine(x + width - 4, y + 4, x + 4, y + height - 4);
                        break;
                    case 109 /* 'm' */:
                        g.drawRect(x + 3, y + 3, width - 7, height - 7);
                        g.drawLine(x + 4, y + 4, x + width - 5, y + 4);
                        break;
                    case 105 /* 'i' */:
                        g.fillRect(x + 3, y + height - 5, width - 6, 2);
                        break;
                }
            }
            paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, x, y, width, height, g, clipx, clipy, clipwidth, clipheight, top, left, bottom, right, toppadding, leftpadding, bottompadding, rightpadding, focus, mode, alignment, mnemonic, underline) {
                this.paintBorderBackground(component, x, y, width, height, g, top, left, bottom, right, mode);
                if (top) {
                    y++;
                    height--;
                }
                if (left) {
                    x++;
                    width--;
                }
                if (bottom) {
                    height--;
                }
                if (right) {
                    width--;
                }
                if ((width <= 0) || (height <= 0)) {
                    return;
                }
                if (focus) {
                    this.drawFocus(g, x + 1, y + 1, width - 3, height - 3);
                }
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", null);
                const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                if ((text == null) && (icon == null)) {
                    return;
                }
                x += leftpadding;
                y += toppadding;
                width -= leftpadding + rightpadding;
                height -= toppadding + bottompadding;
                alignment = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "alignment", alignment);
                const customfont = (text != null) ? Thinlet.get$java_lang_Object$java_lang_Object(component, "font") : null;
                if (customfont != null) {
                    g.setFont(customfont);
                }
                let fm = this.font;
                let tw = 0;
                let th = 0;
                let ta = 0;
                if (text != null) {
                    fm = this.font;
                    tw = fm.stringWidth(text);
                    ta = fm.getBaselinePosition();
                    th = fm.getHeight() - fm.getBaselinePosition() + ta;
                }
                let iw = 0;
                let ih = 0;
                if (icon != null) {
                    iw = icon.width;
                    ih = icon.height;
                    if (text != null) {
                        iw += 2;
                    }
                }
                const clipped = (tw + iw > width) || (th > height) || (ih > height);
                let cx = x;
                if ("center" === alignment) {
                    cx += ((width - tw - iw) / 2 | 0);
                }
                else if ("right" === alignment) {
                    cx += width - tw - iw;
                }
                if (clipped) {
                    g.clipRect(x, y, width, height);
                }
                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'x'.charCodeAt(0)) {
                    g.drawLine(cx, y + (height / 2 | 0), cx + iw + tw, y + (height / 2 | 0));
                }
                if (icon != null) {
                    g.drawImage$org_shikhar_AWTImage$int$int$int(icon, cx, y + ((height - ih) / 2 | 0), org.shikhar.Graphics.TOP | org.shikhar.Graphics.LEFT);
                    cx += iw;
                }
                if (text != null) {
                    const foreground = this.getInteger$java_lang_Object$java_lang_String$int(component, "foreground", ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'l'.charCodeAt(0)) ? 255 : ((((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'd'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'r'.charCodeAt(0))) ? this.c_text : this.c_disable));
                    g.setColor(foreground);
                    const ty = y + ((height - th) / 2 | 0) + ta;
                    g.drawString$java_lang_String$int$int$int(text, cx, ty, org.shikhar.Graphics.LEFT | org.shikhar.Graphics.BASELINE);
                    if (mnemonic) {
                        const imnemonic = this.getInteger$java_lang_Object$java_lang_String$int(component, "mnemonic", -1);
                        if ((imnemonic !== -1) && (imnemonic < text.length)) {
                            const mx = cx + fm.stringWidth(text.substring(0, imnemonic));
                            g.drawLine(mx, ty + 1, mx + fm.charWidth(text.charAt(imnemonic)), ty + 1);
                        }
                    }
                    if (underline) {
                        g.drawLine(cx, ty + 1, cx + tw, ty + 1);
                    }
                }
                if (clipped) {
                    g.setClip(clipx, clipy, clipwidth, clipheight);
                }
                if (customfont != null) {
                    g.setFont(this.font);
                }
            }
            /**
             * Paint component icon and text (using default or custom font)
             *
             * @param {boolean} mnemonic
             * find mnemonic index and underline text
             * @param {*} component
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
             * @param {org.shikhar.Graphics} g
             * @param {number} clipx
             * @param {number} clipy
             * @param {number} clipwidth
             * @param {number} clipheight
             * @param {boolean} top
             * @param {boolean} left
             * @param {boolean} bottom
             * @param {boolean} right
             * @param {number} toppadding
             * @param {number} leftpadding
             * @param {number} bottompadding
             * @param {number} rightpadding
             * @param {boolean} focus
             * @param {string} mode
             * @param {string} alignment
             * @param {boolean} underline
             */
            paint(component, x, y, width, height, g, clipx, clipy, clipwidth, clipheight, top, left, bottom, right, toppadding, leftpadding, bottompadding, rightpadding, focus, mode, alignment, mnemonic, underline) {
                if (((component != null) || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((g != null && g instanceof org.shikhar.Graphics) || g === null) && ((typeof clipx === 'number') || clipx === null) && ((typeof clipy === 'number') || clipy === null) && ((typeof clipwidth === 'number') || clipwidth === null) && ((typeof clipheight === 'number') || clipheight === null) && ((typeof top === 'boolean') || top === null) && ((typeof left === 'boolean') || left === null) && ((typeof bottom === 'boolean') || bottom === null) && ((typeof right === 'boolean') || right === null) && ((typeof toppadding === 'number') || toppadding === null) && ((typeof leftpadding === 'number') || leftpadding === null) && ((typeof bottompadding === 'number') || bottompadding === null) && ((typeof rightpadding === 'number') || rightpadding === null) && ((typeof focus === 'boolean') || focus === null) && ((typeof mode === 'string') || mode === null) && ((typeof alignment === 'string') || alignment === null) && ((typeof mnemonic === 'boolean') || mnemonic === null) && ((typeof underline === 'boolean') || underline === null)) {
                    return this.paint$java_lang_Object$int$int$int$int$org_shikhar_Graphics$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean(component, x, y, width, height, g, clipx, clipy, clipwidth, clipheight, top, left, bottom, right, toppadding, leftpadding, bottompadding, rightpadding, focus, mode, alignment, mnemonic, underline);
                }
                else if (((component != null) || component === null) && ((typeof x === 'string') || x === null) && ((typeof y === 'boolean') || y === null) && ((typeof width === 'boolean') || width === null) && ((height != null && height instanceof org.shikhar.Graphics) || height === null) && ((typeof g === 'number') || g === null) && ((typeof clipx === 'number') || clipx === null) && ((typeof clipy === 'number') || clipy === null) && ((typeof clipwidth === 'number') || clipwidth === null) && ((typeof clipheight === 'number') || clipheight === null) && ((typeof top === 'number') || top === null) && left === undefined && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined) {
                    return this.paint$java_lang_Object$java_lang_String$boolean$boolean$org_shikhar_Graphics$int$int$int$int$int$int(component, x, y, width, height, g, clipx, clipy, clipwidth, clipheight, top);
                }
                else if (((component != null && component instanceof org.shikhar.Graphics) || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((g != null) || g === null) && ((typeof clipx === 'boolean') || clipx === null) && clipy === undefined && clipwidth === undefined && clipheight === undefined && top === undefined && left === undefined && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined) {
                    return this.paint$org_shikhar_Graphics$int$int$int$int$java_lang_Object$boolean(component, x, y, width, height, g, clipx);
                }
                else if (((component != null) || component === null) && ((x != null && x instanceof org.shikhar.Graphics) || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof g === 'number') || g === null) && ((typeof clipx === 'string') || clipx === null) && clipy === undefined && clipwidth === undefined && clipheight === undefined && top === undefined && left === undefined && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined) {
                    return this.paint$java_lang_Object$org_shikhar_Graphics$int$int$int$int$char(component, x, y, width, height, g, clipx);
                }
                else if (component === undefined && x === undefined && y === undefined && width === undefined && height === undefined && g === undefined && clipx === undefined && clipy === undefined && clipwidth === undefined && clipheight === undefined && top === undefined && left === undefined && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined) {
                    return this.paint$();
                }
                else
                    throw new Error('invalid overload');
            }
            drawFocus(g, x, y, width, height) {
                this.setColor(g, this.c_focus);
                const x2 = x + 1 - height % 2;
                for (let i = 0; i <= width; i += 2) {
                    {
                        g.fillRect(x + i, y, 1, 1);
                        g.fillRect(x2 + i, y + height, 1, 1);
                    }
                    ;
                }
                const y2 = y - width % 2;
                for (let i = 2; i <= height; i += 2) {
                    {
                        g.fillRect(x, y + i, 1, 1);
                        g.fillRect(x + width, y2 + i, 1, 1);
                    }
                    ;
                }
            }
            /**
             *
             * Get the current focus center rectangle
             *
             * @return
             * @return {org.shikhar.Rectangle}
             */
            getFocusCenter() {
                if (this.popupowner != null) {
                    let last = null;
                    for (let i = Thinlet.get$java_lang_Object$java_lang_Object(this.popupowner, ":popup"); i != null; i = Thinlet.get$java_lang_Object$java_lang_Object(i, ":popup")) {
                        {
                            last = i;
                        }
                        ;
                    }
                    const target = Thinlet.get$java_lang_Object$java_lang_Object(last, "selected");
                    if (target != null) {
                        const next = this.getRectangle(last, "bounds");
                        const x = next.x;
                        const y = next.y;
                        const targetBounds = this.getRectangle(target, "bounds");
                        return new org.shikhar.Rectangle(x + targetBounds.x, y + targetBounds.y, next.width, targetBounds.height);
                    }
                }
                const classname = Thinlet.getComponentClass(this.focusowner);
                if (classname === "tabbedpane" || classname === "menubar" || classname === "tree" || classname === "list" || classname === "table") {
                    let target = Thinlet.get$java_lang_Object$java_lang_Object(this.focusowner, ":lead");
                    if (target == null) {
                        target = this.getItem(this.focusowner, this.getInteger$java_lang_Object$java_lang_String$int(this.focusowner, "selected", 0));
                    }
                    return this.getAbsoluteBounds(target);
                }
                else {
                    return this.getAbsoluteBounds(this.focusowner);
                }
            }
            /**
             *
             * Paint thick rectangle of decreasing size so that the current point of focus easily can be seen.
             *
             * @param {org.shikhar.Rectangle} attentionRect
             * @throws InterruptedException
             */
            paintAttention(attentionRect) {
                this.attentionRect = attentionRect;
                this.attentionProgress = 0;
                const desktop = this.getRectangle(this.content, "bounds");
                do {
                    {
                        this.repaint$int$int$int$int(desktop.x - Thinlet.attentionThickness + (((attentionRect.x - desktop.x) * (this.attentionProgress - Thinlet.attentionDelta)) / this.attentionSpan | 0), desktop.y - Thinlet.attentionThickness + (((attentionRect.y - desktop.y) * (this.attentionProgress - Thinlet.attentionDelta)) / this.attentionSpan | 0), desktop.width + 2 * Thinlet.attentionThickness + (((attentionRect.width - desktop.width) * (this.attentionProgress - Thinlet.attentionDelta)) / this.attentionSpan | 0), desktop.height + 2 * Thinlet.attentionThickness + (((attentionRect.height - desktop.height) * (this.attentionProgress - Thinlet.attentionDelta)) / this.attentionSpan | 0));
                        this.attentionProgress += Thinlet.attentionDelta;
                    }
                } while ((this.attentionProgress <= this.attentionSpan + 1));
                this.attentionProgress = this.attentionSpan + 1;
                this.repaint$int$int$int$int(attentionRect.x - Thinlet.attentionThickness, attentionRect.y - Thinlet.attentionThickness, attentionRect.width + 2 * Thinlet.attentionThickness, attentionRect.height + 2 * Thinlet.attentionThickness);
            }
            setTimer(delay) {
            }
            /**
             * This component can be traversed using Tab or Shift-Tab keyboard focus
             * traversal, although 1.4 replaced this method by <i>isFocusable</i>, so
             * 1.4 compilers write deprecation warning
             *
             * @return {boolean} true as focus-transverable component, overwrites the default
             * false value
             */
            isFocusTraversable() {
                return true;
            }
            /**
             * Dispatches mouse, key, focus, and component events occurring on the
             * <i>Thinlet</i> component internally
             * @param {org.shikhar.AWTEvent} e
             */
            processEvent(e) {
                const id = e.getID();
                if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())) {
                    const me = e;
                    const x = me.getX();
                    const y = me.getY();
                    const clickcount = me.getClickCount();
                    const shiftdown = me.isShiftDown();
                    const controldown = me.isControlDown();
                    const popuptrigger = (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) && me.isMetaDown();
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) {
                        if (this.mousepressed == null) {
                            this.findComponent(this.content, x, y);
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$()) {
                        const previnside = this.mouseinside;
                        const prevpart = this.insidepart;
                        this.findComponent(this.content, x, y);
                        if ((previnside === this.mouseinside) && (prevpart === this.insidepart)) {
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$(), this.mouseinside, this.insidepart);
                        }
                        else {
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$(), previnside, prevpart);
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                        if (this.mousepressed == null) {
                            const mouseexit = this.mouseinside;
                            const exitpart = this.insidepart;
                            this.mouseinside = this.insidepart = null;
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$(), mouseexit, exitpart);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        if (this.popupowner != null) {
                            const classname = Thinlet.getComponentClass(this.mouseinside);
                            if ((this.popupowner !== this.mouseinside) && (classname !== ":popup") && (classname !== ":combolist")) {
                                this.closeup();
                            }
                        }
                        this.hideTip();
                        this.mousepressed = this.mouseinside;
                        this.pressedpart = this.insidepart;
                        this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$(), this.mousepressed, this.pressedpart);
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                        this.hideTip();
                        const previnside = this.mouseinside;
                        const prevpart = this.insidepart;
                        this.findComponent(this.content, x, y);
                        const same = (previnside === this.mouseinside) && (prevpart === this.insidepart);
                        const isin = (this.mousepressed === this.mouseinside) && (this.pressedpart === this.insidepart);
                        const wasin = (this.mousepressed === previnside) && (this.pressedpart === prevpart);
                        if (wasin && !isin) {
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$(), this.mousepressed, this.pressedpart);
                        }
                        else if (!same && (this.popupowner != null) && !wasin) {
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, Thinlet.DRAG_EXITED_$LI$(), previnside, prevpart);
                        }
                        if (isin && !wasin) {
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mousepressed, this.pressedpart);
                        }
                        else if (!same && (this.popupowner != null) && !isin) {
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, Thinlet.DRAG_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                        }
                        if (isin === wasin) {
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$(), this.mousepressed, this.pressedpart);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                        this.hideTip();
                        const mouserelease = this.mousepressed;
                        const releasepart = this.pressedpart;
                        this.mousepressed = this.pressedpart = null;
                        this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$(), mouserelease, releasepart);
                        if ((this.mouseinside != null) && ((mouserelease !== this.mouseinside) || (releasepart !== this.insidepart))) {
                            this.handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                        }
                    }
                }
                else if (id === Thinlet.MOUSE_WHEEL) {
                }
                else if ((id === org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$()) || (id === org.shikhar.AWTKeyEvent.KEY_TYPED_$LI$())) {
                    console.log("key event !");
                    if (this.focusinside && ((this.popupowner != null) || (this.focusowner != null))) {
                        this.hideTip();
                        const ke = e;
                        const keychar = ke.getKeyChar();
                        const control = (keychar <= 31) || ((keychar >= 127) && (keychar <= 159)) || (keychar >= 65535) || ke.isControlDown();
                        const keycode = ke.getKeyCode();
                        console.log("key event ! keycode:" + keycode + " keychar" + keychar);
                        if ((control === (id === org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$())) && this.processKeyPress((this.popupowner != null) ? this.popupowner : this.focusowner, ke.isShiftDown(), ke.isControlDown(), ke.getModifiers(), control ? 0 : keychar, keycode, false)) {
                            ke.consume();
                        }
                        else if ((keycode === org.shikhar.AWTKeyEvent.VK_TAB) || ((keycode === org.shikhar.AWTKeyEvent.VK_F6) && (ke.isAltDown() || ke.isControlDown()))) {
                            const outgo = (keycode === org.shikhar.AWTKeyEvent.VK_F6);
                            if (!ke.isShiftDown() ? this.setNextFocusable(this.focusowner, outgo) : this.setPreviousFocusable(this.focusowner, outgo)) {
                                ke.consume();
                            }
                            this.repaint$java_lang_Object(this.focusowner);
                            this.closeup();
                        }
                        else if (keycode === org.shikhar.AWTKeyEvent.VK_F8) {
                            for (let splitpane = this.focusowner; splitpane != null; splitpane = this.getParent(splitpane)) {
                                {
                                    if (Thinlet.getComponentClass(splitpane) === "splitpane") {
                                        this.setFocus(splitpane, false);
                                        this.repaint$java_lang_Object(splitpane);
                                        ke.consume();
                                        break;
                                    }
                                }
                                ;
                            }
                        }
                        else if ((id === org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$()) && ((keychar !== 0) || ke.isActionKey()) && this.checkMnemonic(this.focusowner, true, null, ke.getKeyCode(), ke.getModifiers())) {
                            ke.consume();
                        }
                        else {
                            let dialog = this.content;
                            for (let next = Thinlet.get$java_lang_Object$java_lang_Object(this.content, ":comp"); next != null; next = Thinlet.get$java_lang_Object$java_lang_Object(this.content, ":next")) {
                                {
                                    if (Thinlet.getComponentClass(next) === "dialog") {
                                        dialog = next;
                                        break;
                                    }
                                }
                                ;
                            }
                            const next = this.findNextFocuable(null, dialog, keycode);
                            if (next != null) {
                                this.setFocusImpl(next);
                            }
                        }
                    }
                }
                else if (id === org.shikhar.FocusEvent.FOCUS_LOST_$LI$()) {
                    this.focusinside = false;
                    if (this.focusowner != null) {
                        this.repaint$java_lang_Object(this.focusowner);
                    }
                    this.closeup();
                }
                else if (id === org.shikhar.FocusEvent.FOCUS_GAINED_$LI$()) {
                    this.focusinside = true;
                    if (this.focusowner == null) {
                        this.setFocus(this.content, false);
                    }
                    else {
                        this.repaint$java_lang_Object(this.focusowner);
                    }
                }
                else if ((id === org.shikhar.ComponentEvent.COMPONENT_RESIZED_$LI$()) || (id === org.shikhar.ComponentEvent.COMPONENT_SHOWN_$LI$())) {
                    const d = this.getSize$();
                    this.setRectangle(this.content, "bounds", 0, 0, d.width, d.height);
                    this.validate(this.content);
                    this.closeup();
                    if (!this.focusinside) {
                        this.requestFocus$();
                    }
                }
            }
            getSize$() {
                return new org.shikhar.Dimension((this.width | 0), (this.height | 0));
            }
            requestFocus$() {
                const focus = new org.shikhar.FocusEvent(org.shikhar.FocusEvent.FOCUS_GAINED_$LI$(), 0);
                this.processEvent(focus);
            }
            /**
             *
             * Print friendly method call signature
             *
             * @param {string} method
             * @param {java.lang.Object[]} data
             * @return
             * @return {java.lang.StringBuffer}
             */
            spyMethod(method, data) {
                const b = new java.lang.StringBuffer();
                b.append(method);
                b.append("(");
                if (data != null) {
                    for (let i = 0; i < data.length; i++) {
                        {
                            if (data[i] != null) {
                                b.append(data[i]);
                                if (i !== data.length - 1) {
                                    b.append(", ");
                                }
                            }
                        }
                        ;
                    }
                }
                b.append(")");
                return b;
            }
            setFocusImpl(next) {
                if (Thinlet.getComponentClass(next) === "tab" || Thinlet.getComponentClass(next) === "menu" || Thinlet.getComponentClass(next) === "item" || Thinlet.getComponentClass(next) === "cell") {
                    const parent = this.getParent(next);
                    Thinlet.set(parent, ":lead", next);
                    next = parent;
                }
                if (this.focusowner !== next) {
                    this.closeup();
                }
                this.setFocus(next, false);
                this.setTimerImpl(next);
                const parent = this.getParent(next);
                const scrollable = this.getBoolean$java_lang_Object$java_lang_String$boolean(parent, "scrollable", false);
                if (scrollable) {
                    const bounds = this.getRectangle(next, "bounds");
                    this.scrollToVisible(parent, bounds.x, bounds.y, bounds.width, bounds.height);
                }
                this.repaint$java_lang_Object(this.content);
            }
            setTimerImpl(next) {
                this.hideTip();
                if (Thinlet.getComponentClass(next) === "tabbedpane" || Thinlet.getComponentClass(next) === "menubar" || Thinlet.getComponentClass(next) === "table" || Thinlet.getComponentClass(next) === "list" || Thinlet.getComponentClass(next) === "tree") {
                    this.mouseinside = Thinlet.get$java_lang_Object$java_lang_Object(next, ":lead");
                }
                else {
                    this.mouseinside = next;
                }
                const ref = this.getAbsoluteBounds(next);
                if (Thinlet.getComponentClass(next) === "textarea") {
                    this.mousex = ref.x + (3 * ref.width / 5 | 0);
                    this.mousey = ref.y + (3 * ref.height / 5 | 0);
                }
                else {
                    this.mousex = ref.x - 2 + (ref.width / 2 | 0);
                    this.mousey = ref.y - 2 + ref.height;
                }
                this.setTimer(1500);
            }
            /**
             * Check the previous mouse location again because of a possible layout change
             * @param {*} component
             */
            checkLocation(component) {
                if (this.mouseinside === component) {
                    this.findComponent(this.content, this.mousex, this.mousey);
                    this.handleMouseEvent(this.mousex, this.mousex, 1, false, false, false, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                }
            }
            processKeyPress(component, shiftdown, controldown, modifiers, keychar, keycode, replace) {
                const classname = Thinlet.getComponentClass(component);
                if ("button" === classname) {
                    if (keychar === org.shikhar.AWTKeyEvent.VK_SPACE || ((keycode === org.shikhar.AWTKeyEvent.VK_ENTER) && ((Thinlet.get$java_lang_Object$java_lang_Object(component, "type") === "default") || (Thinlet.get$java_lang_Object$java_lang_Object(component, "type") == null))) || ((keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE) && (Thinlet.get$java_lang_Object$java_lang_Object(component, "type") === "cancel"))) {
                        this.invoke(component, null, "action");
                        this.repaint$java_lang_Object(component);
                        return true;
                    }
                }
                else if (("checkbox" === classname) || ("togglebutton" === classname)) {
                    if (keychar === org.shikhar.AWTKeyEvent.VK_SPACE || keycode === org.shikhar.AWTKeyEvent.VK_ENTER) {
                        this.changeCheck(component, true);
                        this.repaint$java_lang_Object(component);
                        return true;
                    }
                }
                else if ("combobox" === classname) {
                    const combolist = Thinlet.get$java_lang_Object$java_lang_Object(component, ":combolist");
                    if (combolist == null) {
                        const editable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true);
                        if (editable && this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, false, false, replace)) {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "selected", -1, -1);
                            return true;
                        }
                        if ((keychar === org.shikhar.AWTKeyEvent.VK_SPACE) || keycode === org.shikhar.AWTKeyEvent.VK_ENTER) {
                            this.popupCombo(component);
                        }
                        else
                            return false;
                    }
                    else {
                        if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_HOME) || (keycode === org.shikhar.AWTKeyEvent.VK_END)) {
                            const next = this.getListItem(component, combolist, keycode, Thinlet.get$java_lang_Object$java_lang_Object(combolist, ":lead"), false);
                            if (next != null) {
                                this.setInside(combolist, next, true);
                            }
                        }
                        else if ((keycode === org.shikhar.AWTKeyEvent.VK_ENTER) || (keychar === org.shikhar.AWTKeyEvent.VK_SPACE)) {
                            this.closeCombo(component, combolist, Thinlet.get$java_lang_Object$java_lang_Object(combolist, ":lead"));
                        }
                        else if (keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE) {
                            this.closeCombo(component, combolist, null);
                        }
                        else if (!this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, false, false, replace)) {
                            const item = this.findText(String.fromCharCode(keychar), component, combolist, false);
                            if (item != null) {
                                this.setInside(combolist, item, true);
                            }
                            else
                                return false;
                        }
                    }
                    return true;
                }
                else if (("textfield" === classname) || ("passwordfield" === classname)) {
                    return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, ("passwordfield" === classname), false, replace);
                }
                else if ("textarea" === classname) {
                    const mode = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionMode", true);
                    const selected = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", false);
                    if (keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE && selected) {
                        this.setBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", false);
                        return true;
                    }
                    else if (keycode === org.shikhar.AWTKeyEvent.VK_ENTER && mode && !selected) {
                        this.setBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", true);
                        return true;
                    }
                    else if (selected || !mode) {
                        const chars = Thinlet.get$java_lang_Object$java_lang_Object(component, ":text");
                        const start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                        const end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                        let istart = start;
                        let iend = end;
                        const insert = null;
                        if ((keycode === org.shikhar.AWTKeyEvent.VK_HOME) && !controldown) {
                            while (((iend > 0) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[iend - 1]) != '\n'.charCodeAt(0)))) {
                                {
                                    iend--;
                                }
                            }
                            ;
                            if (!shiftdown) {
                                istart = iend;
                            }
                        }
                        else if ((keycode === org.shikhar.AWTKeyEvent.VK_END) && !controldown) {
                            while (((iend < chars.length) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[iend]) != '\n'.charCodeAt(0)))) {
                                {
                                    iend++;
                                }
                            }
                            ;
                            if (!shiftdown) {
                                istart = iend;
                            }
                        }
                        else if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN)) {
                            const currentfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                            const fm = ((currentfont != null) ? currentfont : this.font);
                            const fh = fm.getHeight();
                            let y = 0;
                            let linestart = 0;
                            for (let i = 0; i < iend; i++) {
                                {
                                    if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\t'.charCodeAt(0))) {
                                        linestart = i + 1;
                                        y += fh;
                                    }
                                }
                                ;
                            }
                            if (keycode === org.shikhar.AWTKeyEvent.VK_UP) {
                                y -= fh;
                            }
                            else if (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) {
                                y += fh;
                            }
                            else {
                                const dy = this.getRectangle(component, ":port").height - fm.getHeight();
                                y += (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) ? -dy : dy;
                            }
                            const x = fm.charsWidth(chars, linestart, iend - linestart);
                            iend = this.getCaretLocation(component, x, y, true, false);
                            if (!shiftdown) {
                                istart = iend;
                            }
                        }
                        else
                            return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, true, false, false, replace);
                        return this.changeField(component, this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", ""), insert, istart, iend, start, end);
                    }
                }
                else if ("tabbedpane" === classname) {
                    if (keycode === org.shikhar.AWTKeyEvent.VK_ENTER) {
                        const selected = this.getItem(component, this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0));
                        const lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                        if (lead !== selected) {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "selected", this.getIndex(component, lead), 0);
                            this.checkOffset(component);
                            this.repaint$java_lang_Object(component);
                            this.setTimer(1500);
                            this.invoke(component, lead, "action");
                        }
                    }
                }
                else if ("spinbox" === classname) {
                    const mode = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionMode", true);
                    const selected = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", false);
                    if (keycode === org.shikhar.AWTKeyEvent.VK_ENTER && mode) {
                        this.setBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", !selected);
                        return true;
                    }
                    else if (selected || !mode) {
                        if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN)) {
                            this.processSpin(component, (keycode === org.shikhar.AWTKeyEvent.VK_UP) ? "up" : "down");
                            return true;
                        }
                        return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, false, true, replace);
                    }
                    else if (org.shikhar.AWTKeyEvent.VK_0 <= keychar && keychar <= org.shikhar.AWTKeyEvent.VK_9) {
                        return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, false, true, replace);
                    }
                }
                else if ("slider" === classname) {
                    const mode = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionMode", true);
                    const selected = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", false);
                    if (keycode === org.shikhar.AWTKeyEvent.VK_ENTER && mode) {
                        this.setBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", !selected);
                        return true;
                    }
                    else if (selected || !mode) {
                        const value = this.getInteger$java_lang_Object$java_lang_String$int(component, "value", 0);
                        let d = 0;
                        if ((keycode === org.shikhar.AWTKeyEvent.VK_HOME) || (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP)) {
                            d = this.getInteger$java_lang_Object$java_lang_String$int(component, "minimum", 0) - value;
                            if ((keycode === org.shikhar.AWTKeyEvent.VK_LEFT) || (keycode === org.shikhar.AWTKeyEvent.VK_UP)) {
                                d = Math.max(d, -this.getInteger$java_lang_Object$java_lang_String$int(component, "unit", 5));
                            }
                            else if (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) {
                                d = Math.max(d, -this.getInteger$java_lang_Object$java_lang_String$int(component, "block", 25));
                            }
                        }
                        else if ((keycode === org.shikhar.AWTKeyEvent.VK_END) || (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN)) {
                            d = this.getInteger$java_lang_Object$java_lang_String$int(component, "maximum", 100) - value;
                            if ((keycode === org.shikhar.AWTKeyEvent.VK_RIGHT)) {
                                d = Math.min(d, this.getInteger$java_lang_Object$java_lang_String$int(component, "unit", 5));
                            }
                            else if (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN) {
                                d = Math.min(d, this.getInteger$java_lang_Object$java_lang_String$int(component, "block", 25));
                            }
                        }
                        if (d !== 0) {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "value", value + d, 0);
                            this.repaint$java_lang_Object(component);
                            this.invoke(component, null, "action");
                            return true;
                        }
                    }
                }
                else if ("splitpane" === classname) {
                    const divider = this.getInteger$java_lang_Object$java_lang_String$int(component, "divider", -1);
                    let d = 0;
                    if (keycode === org.shikhar.AWTKeyEvent.VK_HOME) {
                        d = -divider;
                    }
                    else if ((keycode === org.shikhar.AWTKeyEvent.VK_LEFT) || (keycode === org.shikhar.AWTKeyEvent.VK_UP)) {
                        d = Math.max(-10, -divider);
                    }
                    else if ((keycode === org.shikhar.AWTKeyEvent.VK_END) || (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN)) {
                        const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                        const bounds = this.getRectangle(component, "bounds");
                        const max = (horizontal ? bounds.width : bounds.height) - 5;
                        d = max - divider;
                        if (keycode !== org.shikhar.AWTKeyEvent.VK_END) {
                            d = Math.min(d, 10);
                        }
                    }
                    if (d !== 0) {
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "divider", divider + d, -1);
                        this.validate(component);
                    }
                }
                else if (("list" === classname) || ("table" === classname)) {
                    return this.processList(component, shiftdown, controldown, keychar, keycode, false);
                }
                else if ("tree" === classname) {
                    if (keycode === org.shikhar.AWTKeyEvent.VK_ENTER) {
                        const lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                        const node = Thinlet.get$java_lang_Object$java_lang_Object(lead, ":comp");
                        if (node != null) {
                            if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(lead, "expanded", true)) {
                                this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(lead, "expanded", true, true);
                                this.validate(component);
                                this.invoke(component, lead, "expand");
                            }
                            else {
                                this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(lead, "expanded", false, true);
                                this.validate(component);
                                this.invoke(component, lead, "collapse");
                                return true;
                            }
                            return true;
                        }
                    }
                    return this.processList(component, shiftdown, controldown, keychar, keycode, true);
                }
                else if (("menubar" === classname) || ("popupmenu" === classname)) {
                    let previous = null;
                    let last = null;
                    for (let i = Thinlet.get$java_lang_Object$java_lang_Object(component, ":popup"); i != null; i = Thinlet.get$java_lang_Object$java_lang_Object(i, ":popup")) {
                        {
                            previous = last;
                            last = i;
                        }
                        ;
                    }
                    let selected = Thinlet.get$java_lang_Object$java_lang_Object(last, "selected");
                    const hotpopup = ((selected != null) || (previous == null)) ? last : previous;
                    if ((selected == null) && (previous != null)) {
                        selected = Thinlet.get$java_lang_Object$java_lang_Object(previous, "selected");
                    }
                    if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN)) {
                        const next = this.getMenu(hotpopup, selected, keycode === org.shikhar.AWTKeyEvent.VK_DOWN, true);
                        if (next != null) {
                            Thinlet.set(hotpopup, "selected", null);
                            this.popupMenu(hotpopup);
                            Thinlet.set(hotpopup, "selected", next);
                            this.repaint$java_lang_Object(hotpopup);
                        }
                        else if (this.popupowner !== component) {
                            return false;
                        }
                        else {
                            this.closeup();
                        }
                    }
                    else if (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) {
                        if (previous != null) {
                            selected = Thinlet.get$java_lang_Object$java_lang_Object(previous, "selected");
                            Thinlet.set(previous, "selected", null);
                            this.popupMenu(previous);
                            Thinlet.set(previous, "selected", selected);
                            this.repaint$java_lang_Object(previous);
                        }
                        else if ("menubar" === classname) {
                            if (last != null || selected != null) {
                                const next = this.getMenu(component, Thinlet.get$java_lang_Object$java_lang_Object(component, "selected"), false, false);
                                if (next != null) {
                                    Thinlet.set(component, "selected", next);
                                    const popup = this.popupMenu(component);
                                    Thinlet.set(popup, "selected", this.getMenu(popup, null, true, true));
                                    this.repaint$java_lang_Object(component);
                                }
                                else {
                                    this.closeup();
                                }
                            }
                            return false;
                        }
                    }
                    else if (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) {
                        if ((previous != null) && (selected == null)) {
                            Thinlet.set(last, "selected", Thinlet.get$java_lang_Object$java_lang_Object(Thinlet.get$java_lang_Object$java_lang_Object(last, "menu"), ":comp"));
                            this.repaint$java_lang_Object(last);
                        }
                        else if ((selected != null) && (Thinlet.getComponentClass(selected) === "menu")) {
                            const popup = this.popupMenu(last);
                            Thinlet.set(popup, "selected", this.getMenu(popup, null, true, true));
                        }
                        else if ("menubar" === classname) {
                            if (last != null || selected != null) {
                                const next = this.getMenu(component, Thinlet.get$java_lang_Object$java_lang_Object(component, "selected"), true, false);
                                if (next != null) {
                                    Thinlet.set(component, "selected", next);
                                    const popup = this.popupMenu(component);
                                    Thinlet.set(popup, "selected", this.getMenu(popup, null, true, true));
                                    this.repaint$java_lang_Object(component);
                                }
                                else {
                                    this.closeup();
                                }
                            }
                            return false;
                        }
                    }
                    else if ((keycode === org.shikhar.AWTKeyEvent.VK_ENTER) || (keychar === org.shikhar.AWTKeyEvent.VK_SPACE) || (keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE)) {
                        if ((keycode !== org.shikhar.AWTKeyEvent.VK_ESCAPE) && this.getBoolean$java_lang_Object$java_lang_String$boolean(selected, "enabled", true)) {
                            const next = this.getMenu(hotpopup, selected, keycode === org.shikhar.AWTKeyEvent.VK_DOWN, true);
                            const lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                            if ((selected != null) && (Thinlet.getComponentClass(selected) === "checkboxmenuitem")) {
                                this.changeCheck(selected, false);
                            }
                            else if (selected == null && lead != null && (lead !== next)) {
                                if (this.popupowner !== component) {
                                    Thinlet.set(component, "selected", lead);
                                    this.popupMenu(component);
                                    this.repaint$java_lang_Object(component);
                                }
                                else {
                                    this.closeup();
                                }
                                return true;
                            }
                            else {
                                this.invoke(selected, null, "action");
                            }
                        }
                        this.closeup();
                    }
                    else
                        return false;
                    this.setTimer(3000);
                    return true;
                }
                return false;
            }
            changeCheck(component, box) {
                const group = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "group", null);
                if (group != null) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", false)) {
                        return false;
                    }
                    for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(this.getParent(component), ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            if (comp === component) {
                                this.setBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", true);
                            }
                            else if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(group, Thinlet.get$java_lang_Object$java_lang_Object(comp, "group")) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "selected", false)) {
                                this.setBoolean$java_lang_Object$java_lang_String$boolean(comp, "selected", false);
                                if (box) {
                                    this.repaint$java_lang_Object(comp);
                                }
                            }
                        }
                        ;
                    }
                }
                else {
                    this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(component, "selected", !this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", false), false);
                }
                this.invoke(component, null, "action");
                return true;
            }
            /**
             * @param {*} component
             * a :popup or a menubar
             * @param {*} part
             * the currently selected item, return the first/last if null
             * @param {boolean} forward
             * find the next item if true, the previous otherwise
             * @param {boolean} popup
             * the given component is :popup if true, menubar otherwise
             * @return {*} the next/previous item relative to the current one excluding
             * separators, or null
             */
            getMenu(component, part, forward, popup) {
                let previous = null;
                const i = forward && part != null ? 0 : 1;
                for (let item = (i === 0) ? Thinlet.get$java_lang_Object$java_lang_Object(part, ":next") : Thinlet.get$java_lang_Object$java_lang_Object(popup ? Thinlet.get$java_lang_Object$java_lang_Object(component, "menu") : component, ":comp"); (i === 0) ? (item != null) : (item !== part); item = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) {
                    {
                        if ((Thinlet.getComponentClass(item) !== "separator") && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "enabled", true)) {
                            if (forward) {
                                if (item === part) {
                                    return null;
                                }
                                else {
                                    return item;
                                }
                            }
                            previous = item;
                        }
                    }
                    ;
                }
                if (previous === part) {
                    return null;
                }
                else {
                    return previous;
                }
            }
            processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, multiline, hidden, filter, replace) {
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                const start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                const end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                const editable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true);
                let istart = start;
                let iend = end;
                let insert = null;
                if (editable && (keychar !== 0) && (modifiers !== org.shikhar.InputEvent.ALT_MASK)) {
                    insert = /* valueOf */ String(String.fromCharCode(keychar)).toString();
                    if (replace) {
                        istart--;
                    }
                }
                else if (editable && (keycode === org.shikhar.AWTKeyEvent.VK_ENTER)) {
                    if (multiline) {
                        insert = "\n";
                    }
                    else {
                        return this.invoke(component, null, "perform");
                    }
                }
                else if (editable && (keycode === org.shikhar.AWTKeyEvent.VK_BACK_SPACE)) {
                    insert = "";
                    if (start === end) {
                        istart -= 1;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_END) {
                    iend = text.length;
                    if (!shiftdown) {
                        istart = iend;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_HOME) {
                    iend = 0;
                    if (!shiftdown) {
                        istart = iend;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) {
                    if (controldown) {
                        for (let i = 0; i < 2; i++) {
                            {
                                while (((iend > 0) && ((i !== 0) === org.shikhar.AWTKeyEvent.isLetterOrDigit(text.charAt(iend - 1))))) {
                                    {
                                        iend--;
                                    }
                                }
                                ;
                            }
                            ;
                        }
                    }
                    else {
                        iend -= 1;
                    }
                    if (!shiftdown) {
                        istart = iend;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) {
                    if (controldown) {
                        for (let i = 0; i < 2; i++) {
                            {
                                while (((iend < text.length) && ((i === 0) === org.shikhar.AWTKeyEvent.isLetterOrDigit(text.charAt(iend))))) {
                                    {
                                        iend++;
                                    }
                                }
                                ;
                            }
                            ;
                        }
                    }
                    else {
                        iend += 1;
                    }
                    if (!shiftdown) {
                        istart = iend;
                    }
                }
                else if (editable && (keycode === org.shikhar.AWTKeyEvent.VK_DELETE)) {
                    insert = "";
                    if (start === end) {
                        iend += 1;
                    }
                }
                else if (controldown && ((keycode === org.shikhar.AWTKeyEvent.VK_A) || (keycode === 191))) {
                    istart = 0;
                    iend = text.length;
                }
                else if (controldown && (keycode === 220)) {
                    istart = iend = text.length;
                }
                else if ((editable && !hidden && controldown && (keycode === org.shikhar.AWTKeyEvent.VK_X)) || (!hidden && controldown && (keycode === org.shikhar.AWTKeyEvent.VK_C))) {
                    if (start !== end) {
                        if (keycode === org.shikhar.AWTKeyEvent.VK_X) {
                            insert = "";
                        }
                        else {
                            return true;
                        }
                    }
                }
                else if (editable && controldown && (keycode === org.shikhar.AWTKeyEvent.VK_V)) {
                    insert = this.clipboard;
                    if (insert != null) {
                        insert = Thinlet.filter(insert, multiline);
                    }
                }
                if (filter && (insert != null)) {
                    for (let i = insert.length - 1; i >= 0; i--) {
                        {
                            if (!javaemul.internal.CharacterHelper.isDigit(insert.charAt(i))) {
                                return false;
                            }
                        }
                        ;
                    }
                }
                return this.changeField(component, text, insert, istart, iend, start, end);
            }
            /**
             * Process keyboard events for textfield, passwordfield, textarea, combobox,
             * and spinbox
             *
             * @param {boolean} multiline
             * true for textarea, otherwise false
             * @param {boolean} hidden
             * true for passwordfield, otherwise false
             * @param {boolean} filter
             * true for spinbox, otherwise false
             * @param {*} component
             * @param {boolean} shiftdown
             * @param {boolean} controldown
             * @param {number} modifiers
             * @param {number} keychar
             * @param {number} keycode
             * @param {boolean} replace
             * @return {boolean}
             */
            processField(component, shiftdown, controldown, modifiers, keychar, keycode, multiline, hidden, filter, replace) {
                if (((component != null) || component === null) && ((typeof shiftdown === 'boolean') || shiftdown === null) && ((typeof controldown === 'boolean') || controldown === null) && ((typeof modifiers === 'number') || modifiers === null) && ((typeof keychar === 'number') || keychar === null) && ((typeof keycode === 'number') || keycode === null) && ((typeof multiline === 'boolean') || multiline === null) && ((typeof hidden === 'boolean') || hidden === null) && ((typeof filter === 'boolean') || filter === null) && ((typeof replace === 'boolean') || replace === null)) {
                    return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, multiline, hidden, filter, replace);
                }
                else if (((typeof component === 'number') || component === null) && ((typeof shiftdown === 'number') || shiftdown === null) && ((typeof controldown === 'number') || controldown === null) && ((typeof modifiers === 'number') || modifiers === null) && ((keychar != null) || keychar === null) && ((typeof keycode === 'boolean') || keycode === null) && ((typeof multiline === 'boolean') || multiline === null) && ((typeof hidden === 'number') || hidden === null) && ((typeof filter === 'boolean') || filter === null) && replace === undefined) {
                    return this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, multiline, hidden, filter);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * @param {string} text
             * @param {boolean} multiline
             * @return
             * @return {string}
             */
            static filter(text, multiline) {
                const filtered = new java.lang.StringBuffer(text.length);
                for (let i = 0; i < text.length; i++) {
                    {
                        const ckey = text.charAt(i);
                        if ((((c => c.charCodeAt == null ? c : c.charCodeAt(0))(ckey) > 31) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(ckey) < 127)) || (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(ckey) > 159) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(ckey) < 65535)) || (multiline && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(ckey) == '\n'.charCodeAt(0)))) {
                            filtered.append(ckey);
                        }
                    }
                    ;
                }
                return (filtered.length() !== text.length) ? filtered.toString() : text;
            }
            /**
             * @param {*} component
             * a textfield, passwordfield, textarea, combobox, or spinbox
             * @param {string} text
             * current text
             * @param {string} insert
             * a string to replace thr current selection
             * @param {number} movestart
             * new selection start position
             * @param {number} moveend
             * new caret (selection end) position
             * @param {number} start
             * current selection start position
             * @param {number} end
             * current caret position
             * @return {boolean} true if selection, caret location, or text content changed
             */
            changeField(component, text, insert, movestart, moveend, start, end) {
                movestart = Math.max(0, Math.min(movestart, text.length));
                moveend = Math.max(0, Math.min(moveend, text.length));
                if ((insert == null) && (start === movestart) && (end === moveend)) {
                    return false;
                }
                if (insert != null) {
                    const min = Math.min(movestart, moveend);
                    Thinlet.set(component, "text", text.substring(0, min) + insert + text.substring(Math.max(movestart, moveend)));
                    movestart = moveend = min + insert.length;
                    this.invoke(component, null, "action");
                }
                if (start !== movestart) {
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", movestart, 0);
                }
                if (end !== moveend) {
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", moveend, 0);
                }
                this.validate(component);
                this.invoke(component, null, (insert != null) ? ((insert.length > 0) ? "insert" : "remove") : "caret");
                return true;
            }
            processList(component, shiftdown, controldown, keychar, keycode, recursive) {
                if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_HOME) || (keycode === org.shikhar.AWTKeyEvent.VK_END)) {
                    const lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                    const row = this.getListItem(component, component, keycode, lead, recursive);
                    if (row != null) {
                        const selection = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "selection", "single");
                        if (shiftdown && (selection !== "single") && (lead != null)) {
                            this.extend(component, lead, row, recursive);
                        }
                        else if (!controldown) {
                        }
                        this.setLead(component, lead, row);
                        this.setTimer(1500);
                        return true;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) {
                    return this.processScroll$java_lang_Object$java_lang_Object(component, "left");
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) {
                    return this.processScroll$java_lang_Object$java_lang_Object(component, "right");
                }
                else if (keychar === org.shikhar.AWTKeyEvent.VK_SPACE || keycode === org.shikhar.AWTKeyEvent.VK_ENTER) {
                    this.select(component, Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead"), recursive, shiftdown, true);
                    return true;
                }
                else if (controldown) {
                    if (((keycode === org.shikhar.AWTKeyEvent.VK_A) || (keycode === 191)) && (this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "selection", "single") !== "single")) {
                        this.selectAll(component, true, recursive);
                        return true;
                    }
                    else if (keycode === 220) {
                        this.selectAll(component, false, recursive);
                        return true;
                    }
                }
                else {
                    const item = this.findText(String.fromCharCode(keychar), component, component, recursive);
                    if (item != null) {
                        this.select(component, item, recursive, false, false);
                        return true;
                    }
                }
                return false;
            }
            /**
             * Search for the next/first appropriate item starting with the collected
             * string or the given single character
             *
             * @param {string} keychar
             * the last typed character
             * @param {*} component
             * a list, tree, table, or combobox
             * @param {*} leadowner
             * the list, tree, table, or the combobox's drop down list
             * @param {boolean} recursive
             * if the component is a tree
             * @return {*} the appropriate item or null
             */
            findText(keychar, component, leadowner, recursive) {
                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(keychar) != 0) {
                    const current = java.lang.System.currentTimeMillis();
                    let i = (current > this.findtime + 1000) ? 1 : 0;
                    this.findtime = current;
                    const lead = Thinlet.get$java_lang_Object$java_lang_Object(leadowner, ":lead");
                    for (; i < 2; i++) {
                        {
                            this.findprefix = (i === 0) ? (this.findprefix + keychar) : /* valueOf */ String(keychar).toString();
                            for (let j = 0; j < 2; j++) {
                                {
                                    for (let item = (j === 0) ? ((i === 0) ? lead : this.getNextItem(component, lead, recursive)) : Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); (j === 0) ? (item != null) : (item !== lead); item = this.getNextItem(component, item, recursive)) {
                                        {
                                            if ( /* contains */(this.getString$java_lang_Object$java_lang_String$java_lang_String(item, "text", "").indexOf(this.findprefix) != -1)) {
                                                return item;
                                            }
                                        }
                                        ;
                                    }
                                }
                                ;
                            }
                        }
                        ;
                    }
                }
                return null;
            }
            getListItem(component, scrollpane, keycode, lead, recursive) {
                let row = null;
                if (keycode === org.shikhar.AWTKeyEvent.VK_UP) {
                    for (let prev = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); prev !== lead; prev = this.getNextItem(component, prev, recursive)) {
                        {
                            row = prev;
                        }
                        ;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) {
                    row = (lead == null) ? Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp") : this.getNextItem(component, lead, recursive);
                }
                else if ((keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN)) {
                    const view = this.getRectangle(scrollpane, ":view");
                    const port = this.getRectangle(scrollpane, ":port");
                    const rl = (lead != null) ? this.getRectangle(lead, "bounds") : null;
                    let vy = (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) ? view.y : (view.y + port.height);
                    if ((keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) && (rl != null) && (rl.y <= view.y)) {
                        vy -= port.height;
                    }
                    if ((keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN) && (rl != null) && (rl.y + rl.height >= view.y + port.height)) {
                        vy += port.height;
                    }
                    for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = this.getNextItem(component, item, recursive)) {
                        {
                            const r = this.getRectangle(item, "bounds");
                            if (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) {
                                row = item;
                                if (r.y + r.height > vy) {
                                    break;
                                }
                            }
                            else {
                                if (r.y > vy) {
                                    break;
                                }
                                row = item;
                            }
                        }
                        ;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_HOME) {
                    row = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_END) {
                    for (let last = lead; last != null; last = this.getNextItem(component, last, recursive)) {
                        {
                            row = last;
                        }
                        ;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_ENTER) {
                    return lead;
                }
                return row;
            }
            /**
             * Select all the items
             *
             * @param {*} component
             * a list/tree/table
             * @param {boolean} selected
             * selects or deselects items
             * @param {boolean} recursive
             * true for tree
             */
            selectAll(component, selected, recursive) {
                let changed = false;
                for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = this.getNextItem(component, item, recursive)) {
                    {
                        if (this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(item, "selected", selected, false)) {
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, item);
                            changed = true;
                        }
                    }
                    ;
                }
                Thinlet.set(component, ":anchor", null);
                if (changed) {
                    this.invoke(component, null, "action");
                }
            }
            /**
             * Select a single given item, deselect others
             *
             * @param {*} component
             * a list/tree/table
             * @param {*} row
             * the item/node/row to select
             * @param {boolean} recursive
             * true for tree
             */
            selectItem(component, row, recursive) {
                let changed = false;
                for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = this.getNextItem(component, item, recursive)) {
                    {
                        if (this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(item, "selected", (item === row), false)) {
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, item);
                            changed = true;
                        }
                    }
                    ;
                }
                Thinlet.set(component, ":anchor", null);
                if (changed) {
                    this.invoke(component, row, "action");
                }
            }
            extend(component, lead, row, recursive) {
                let anchor = Thinlet.get$java_lang_Object$java_lang_Object(component, ":anchor");
                if (anchor == null) {
                    Thinlet.set(component, ":anchor", anchor = lead);
                }
                let select = 'n';
                let changed = false;
                for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = this.getNextItem(component, item, recursive)) {
                    {
                        if (item === anchor)
                            select = ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(select) == 'n'.charCodeAt(0)) ? 'y' : 'r';
                        if (item === row)
                            select = ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(select) == 'n'.charCodeAt(0)) ? 'y' : 'r';
                        if (this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(item, "selected", ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(select) != 'n'.charCodeAt(0)), false)) {
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, item);
                            changed = true;
                        }
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(select) == 'r'.charCodeAt(0))
                            select = 'n';
                    }
                    ;
                }
                if (changed) {
                    this.invoke(component, row, "action");
                }
            }
            /**
             * Update the lead item of a list/tree/table, repaint, and scroll
             *
             * @param {*} component
             * a list, tree, or table
             * @param {*} oldlead
             * the current lead item
             * @param {*} lead
             * the new lead item
             */
            setLead(component, oldlead, lead) {
                if (oldlead !== lead) {
                    if (oldlead != null) {
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, oldlead);
                    }
                    Thinlet.set(component, ":lead", lead);
                    this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, lead);
                    const r = this.getRectangle(lead, "bounds");
                    this.scrollToVisible(component, r.x, r.y, 0, r.height);
                }
            }
            /**
             * Update the lead item of a combolist, repaint, and scroll
             *
             * @param {*} component
             * a combobox drop down list
             * @param {*} part
             * the current hotspot item
             * @param {boolean} scroll
             * scroll to the part if true
             */
            setInside(component, part, scroll) {
                const previous = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                if (previous != null) {
                    this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, ":combolist", previous);
                }
                Thinlet.set(component, ":lead", part);
                if (part != null) {
                    this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, ":combolist", part);
                    if (scroll) {
                        const r = this.getRectangle(part, "bounds");
                        this.scrollToVisible(component, r.x, r.y, 0, r.height);
                    }
                }
            }
            /**
             * @param {number} x
             * mouse x position relative to thinlet component
             * @param {number} y
             * mouse y position relative to the main desktop
             * @param {number} clickcount
             * @param {boolean} shiftdown
             * @param {boolean} controldown
             * @param {boolean} popuptrigger
             * @param {number} id
             * @param {*} component
             * @param {*} part
             */
            handleMouseEvent(x, y, clickcount, shiftdown, controldown, popuptrigger, id, component, part) {
                if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) {
                    this.setTimer(750);
                }
                else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                    this.hideTip();
                }
                if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "enabled", true)) {
                    return;
                }
                const classname = Thinlet.getComponentClass(component);
                if (("button" === classname) || ("checkbox" === classname) || ("togglebutton" === classname)) {
                    if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())) {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            this.setFocus(component, true);
                        }
                        if (("button" === classname) && ((this.mousepressed == null) || (this.mousepressed === component)) && ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$())) && (Thinlet.get$java_lang_Object$java_lang_Object(component, "type") === "link")) {
                        }
                        else if ((id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) && (this.mouseinside === component)) {
                            if ("button" !== classname) {
                                this.changeCheck(component, true);
                            }
                            else
                                this.invoke(component, null, "action");
                        }
                        this.repaint$java_lang_Object(component);
                    }
                }
                else if ("combobox" === classname) {
                    const editable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true);
                    if (editable && (part == null)) {
                        let icon = null;
                        const left = ((((id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) && ((icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null)) != null)) ? icon.width : 0) | 0);
                        this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int$boolean(x, y, clickcount, id, component, false, false, left, popuptrigger);
                    }
                    else if (part !== "icon") {
                        if (((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$())) && (this.mousepressed == null)) {
                            if (editable) {
                                this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, "combobox", part);
                            }
                            else {
                                this.repaint$java_lang_Object(component);
                            }
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            const combolist = Thinlet.get$java_lang_Object$java_lang_Object(component, ":combolist");
                            if (combolist == null) {
                                this.setFocus(component, true);
                                this.repaint$java_lang_Object(component);
                                this.popupCombo(component);
                            }
                            else {
                                this.closeCombo(component, combolist, null);
                            }
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                            if (this.mouseinside !== component) {
                                const combolist = Thinlet.get$java_lang_Object$java_lang_Object(component, ":combolist");
                                this.closeCombo(component, combolist, ((this.mouseinside === combolist) && (this.insidepart != null && this.insidepart instanceof Array && (this.insidepart.length == 0 || this.insidepart[0] == null || this.insidepart[0] != null))) ? this.insidepart : null);
                            }
                            else {
                                this.repaint$java_lang_Object(component);
                            }
                        }
                    }
                }
                else if (":combolist" === classname) {
                    if (!this.processScroll$int$int$int$java_lang_Object$java_lang_Object(x, y, id, component, part)) {
                        if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === Thinlet.DRAG_ENTERED_$LI$())) {
                            if (part != null) {
                                this.setInside(component, part, false);
                            }
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                            this.closeCombo(Thinlet.get$java_lang_Object$java_lang_Object(component, "combobox"), component, part);
                        }
                    }
                }
                else if (("textfield" === classname) || ("passwordfield" === classname)) {
                    this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int$boolean(x, y, clickcount, id, component, false, ("passwordfield" === classname), 0, popuptrigger);
                }
                else if ("textarea" === classname) {
                    if (!this.processScroll$int$int$int$java_lang_Object$java_lang_Object(x, y, id, component, part)) {
                        this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int$boolean(x, y, clickcount, id, component, true, false, 0, popuptrigger);
                    }
                }
                else if ("panel" === classname) {
                    this.processScroll$int$int$int$java_lang_Object$java_lang_Object(x, y, id, component, part);
                }
                else if ("desktop" === classname) {
                    if (part === "modal") {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) {
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                        }
                    }
                }
                else if ("spinbox" === classname) {
                    if (part == null) {
                        this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int$boolean(x, y, clickcount, id, component, false, false, 0, popuptrigger);
                    }
                    else {
                        if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())) {
                            if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                                this.setFocus(component, true);
                                if (this.processSpin(component, part)) {
                                    this.setTimer(375);
                                }
                            }
                            else {
                                if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                                    this.setTimer(0);
                                }
                            }
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                        }
                    }
                }
                else if ("tabbedpane" === classname) {
                    if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$())) {
                        if ((part != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true) && (this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0) !== this.getIndex(component, part))) {
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, "tabbedpane", part);
                        }
                    }
                    else if ((part != null) && (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                        const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                        const current = this.getIndex(component, part);
                        if (selected === current) {
                            this.setFocus(component, true);
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, "tabbedpane", part);
                        }
                        else {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "selected", current, 0);
                            this.setFocusImpl(part);
                            this.checkOffset(component);
                            this.repaint$java_lang_Object(component);
                            this.invoke(component, part, "action");
                        }
                    }
                }
                else if ("slider" === classname) {
                    if ((id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$())) {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            this.setReference(component, (this.block / 2 | 0), (this.block / 2 | 0));
                            this.setFocus(component, true);
                        }
                        const minimum = this.getInteger$java_lang_Object$java_lang_String$int(component, "minimum", 0);
                        const maximum = this.getInteger$java_lang_Object$java_lang_String$int(component, "maximum", 100);
                        const value = this.getInteger$java_lang_Object$java_lang_String$int(component, "value", 0);
                        const bounds = this.getRectangle(component, "bounds");
                        const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                        let newvalue = minimum + ((horizontal ? (x - this.referencex) : (y - this.referencey)) * (maximum - minimum) / ((horizontal ? bounds.width : bounds.height) - this.block) | 0);
                        newvalue = Math.max(minimum, Math.min(newvalue, maximum));
                        if (value !== newvalue) {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "value", newvalue, 0);
                            this.invoke(component, null, "action");
                        }
                        if ((value !== newvalue) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$())) {
                            this.repaint$java_lang_Object(component);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                        this.repaint$java_lang_Object(component);
                    }
                }
                else if ("splitpane" === classname) {
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        this.setReference(component, 2, 2);
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                        const divider = this.getInteger$java_lang_Object$java_lang_String$int(component, "divider", -1);
                        const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                        let moveto = horizontal ? (x - this.referencex) : (y - this.referencey);
                        const bounds = this.getRectangle(component, "bounds");
                        moveto = Math.max(0, Math.min(moveto, Math.abs(horizontal ? bounds.width : bounds.height) - 5));
                        if (divider !== moveto) {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "divider", moveto, -1);
                            this.validate(component);
                        }
                    }
                    else if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) && (this.mousepressed == null)) {
                        const horizontal = ("vertical" !== Thinlet.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    }
                    else if (((id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) && (this.mousepressed == null)) || ((id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) && (this.mouseinside !== component))) {
                    }
                }
                else if (("list" === classname) || ("table" === classname) || ("tree" === classname)) {
                    if (!this.processScroll$int$int$int$java_lang_Object$java_lang_Object(x, y, id, component, part)) {
                        if (((id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || ((id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) && !shiftdown && !controldown))) {
                            const port = this.getRectangle(component, ":port");
                            const my = y + port.y - this.referencey;
                            for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null;) {
                                {
                                    const r = this.getRectangle(item, "bounds");
                                    if (my < r.y + r.height) {
                                        if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                                            this.scrollToVisible(component, r.x, r.y, 0, r.height);
                                        }
                                        else if ("tree" === classname) {
                                            const mx = x + port.x - this.referencex;
                                            if (mx < r.x) {
                                                if ((mx >= r.x - this.block) && (Thinlet.get$java_lang_Object$java_lang_Object(item, ":comp") != null)) {
                                                    const expanded = this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true);
                                                    this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(item, "expanded", !expanded, true);
                                                    this.selectItem(component, item, true);
                                                    this.setLead(component, Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead"), item);
                                                    this.setFocus(component, true);
                                                    this.validate(component);
                                                    this.invoke(component, item, expanded ? "collapse" : "expand");
                                                }
                                                break;
                                            }
                                        }
                                        if ((id !== org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false)) {
                                            if (id !== org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                                                if (this.setFocus(component, true)) {
                                                    this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, item);
                                                }
                                            }
                                            if (!popuptrigger || !this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false)) {
                                                this.select(component, item, ("tree" === classname), shiftdown, controldown);
                                                if (clickcount === 2) {
                                                    this.invoke(component, item, "perform");
                                                }
                                            }
                                        }
                                        break;
                                    }
                                    item = this.getNextItem(component, item, ("tree" === classname));
                                }
                                ;
                            }
                        }
                    }
                }
                else if ("menubar" === classname) {
                    const selected = Thinlet.get$java_lang_Object$java_lang_Object(component, "selected");
                    if (((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$())) && (part != null) && (selected == null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                    }
                    else if ((part != null) && ((selected == null) ? (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) : ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === Thinlet.DRAG_ENTERED_$LI$()))) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                        Thinlet.set(component, "selected", part);
                        this.setFocus(component, true);
                        this.popupMenu(component);
                        const lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead");
                        Thinlet.set(component, ":lead", part);
                        if (lead == null) {
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                        }
                        else {
                            this.repaint$java_lang_Object(component);
                        }
                    }
                    else if ((id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) && (selected != null)) {
                        this.closeup();
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                        if ((part !== this.insidepart) && ((this.insidepart == null) || ((this.insidepart != null && this.insidepart instanceof Array && (this.insidepart.length == 0 || this.insidepart[0] == null || this.insidepart[0] != null)) && (Thinlet.getComponentClass(this.insidepart) !== "menu")))) {
                            if ((this.insidepart != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(this.insidepart, "enabled", true)) {
                                if (Thinlet.getComponentClass(this.insidepart) === "checkboxmenuitem") {
                                    this.changeCheck(this.insidepart, false);
                                }
                                else
                                    this.invoke(this.insidepart, null, "action");
                            }
                            this.closeup();
                        }
                    }
                }
                else if ((":popup" === classname) || ("popupmenu" === classname)) {
                    if (((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === Thinlet.DRAG_ENTERED_$LI$())) && (part != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                        Thinlet.set(component, "selected", part);
                        this.popupMenu(component);
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                    }
                    else if ((id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) && ((part != null) || ((this.insidepart != null) && ("popupmenu" === classname)))) {
                        if ((this.insidepart == null) || (Thinlet.getComponentClass(this.insidepart) !== "menu")) {
                            if ((this.insidepart != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(this.insidepart, "enabled", true)) {
                                if (Thinlet.getComponentClass(this.insidepart) === "checkboxmenuitem") {
                                    this.changeCheck(this.insidepart, false);
                                }
                                else
                                    this.invoke(this.insidepart, null, "action");
                            }
                            this.closeup();
                        }
                    }
                    else if (((id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === Thinlet.DRAG_EXITED_$LI$())) && (part != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                        if (Thinlet.getComponentClass(part) !== "menu") {
                            Thinlet.set(component, "selected", null);
                        }
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                    }
                }
                else if ("dialog" === classname) {
                    if (part === "header") {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            const bounds = this.getRectangle(component, "bounds");
                            this.referencex = x - bounds.x;
                            this.referencey = y - bounds.y;
                            const parent = this.getParent(component);
                            if (Thinlet.get$java_lang_Object$java_lang_Object(parent, ":comp") !== component) {
                                this.removeItemImpl(parent, component);
                                this.insertItem(parent, ":comp", component, 0);
                                Thinlet.set(component, ":parent", parent);
                                this.repaint$java_lang_Object(component);
                                this.setNextFocusable(component, false);
                            }
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                            const bounds = this.getRectangle(component, "bounds");
                            const parents = this.getRectangle(this.getParent(component), "bounds");
                            const mx = Math.max(0, Math.min(x - this.referencex, parents.width - bounds.width));
                            const my = Math.max(0, Math.min(y - this.referencey, parents.height - bounds.height));
                            if ((bounds.x !== mx) || (bounds.y !== my)) {
                                this.repaint$java_lang_Object$int$int$int$int(component, Math.min(bounds.x, mx), Math.min(bounds.y, my), bounds.width + Math.abs(mx - bounds.x), bounds.height + Math.abs(my - bounds.y));
                                bounds.x = mx;
                                bounds.y = my;
                            }
                        }
                    }
                    else if (part === "closebutton") {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                            if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$() && this.mouseinside === component)
                                this.invoke(component, null, "close");
                            this.repaint$java_lang_Object(component);
                        }
                    }
                    else if (!this.processScroll$int$int$int$java_lang_Object$java_lang_Object(x, y, id, component, part) && (part != null)) {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            this.referencex = x;
                            this.referencey = y;
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                            this.repaint$java_lang_Object(component);
                            const bounds = this.getRectangle(component, "bounds");
                            if ((part === ":nw") || (part === ":n") || (part === ":ne")) {
                                bounds.y += y - this.referencey;
                                bounds.height -= y - this.referencey;
                            }
                            if ((part === ":ne") || (part === ":e") || (part === ":se")) {
                                bounds.width += x - this.referencex;
                            }
                            if ((part === ":sw") || (part === ":s") || (part === ":se")) {
                                bounds.height += y - this.referencey;
                            }
                            if ((part === ":nw") || (part === ":w") || (part === ":sw")) {
                                bounds.x += x - this.referencex;
                                bounds.width -= x - this.referencex;
                            }
                            this.referencex = x;
                            this.referencey = y;
                            this.doLayout(component);
                            this.repaint$java_lang_Object(component);
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) {
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                        }
                    }
                }
                if (popuptrigger) {
                    const popupmenu = Thinlet.get$java_lang_Object$java_lang_Object(component, "popupmenu");
                    if (popupmenu != null) {
                        this.popupPopup(popupmenu, x, y);
                        this.mouseinside = this.mousepressed = popupmenu;
                        this.insidepart = this.pressedpart = null;
                    }
                }
            }
            setCursor(predefinedCursor) {
            }
            /**
             * Calculate the given point in a component relative to the thinlet desktop
             * and set as reference value
             *
             * @param {*} component
             * a widget
             * @param {number} x
             * reference point relative to the component left edge
             * @param {number} y
             * relative to the top edge
             */
            setReference(component, x, y) {
                this.referencex = x;
                this.referencey = y;
                for (; component != null; component = this.getParent(component)) {
                    {
                        const bounds = this.getRectangle(component, "bounds");
                        this.referencex += bounds.x;
                        this.referencey += bounds.y;
                        const port = this.getRectangle(component, ":port");
                        if (port != null) {
                            const view = this.getRectangle(component, ":view");
                            this.referencex -= view.x - port.x;
                            this.referencey -= view.y - port.y;
                        }
                    }
                    ;
                }
            }
            select(component, row, recursive, shiftdown, controldown) {
                const selection = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "selection", "single");
                let lead = null;
                if (shiftdown && (selection !== "single") && ((lead = Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead")) != null)) {
                    this.extend(component, lead, row, recursive);
                }
                else {
                    if (controldown && (selection === "multiple")) {
                        this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(row, "selected", !this.getBoolean$java_lang_Object$java_lang_String$boolean(row, "selected", false), false);
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, row);
                        this.invoke(component, row, "action");
                        Thinlet.set(component, ":anchor", null);
                    }
                    else if (controldown && this.getBoolean$java_lang_Object$java_lang_String$boolean(row, "selected", false)) {
                        for (let item = row; item != null; item = this.getNextItem(component, item, recursive)) {
                            {
                                if (this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(item, "selected", false, false)) {
                                    this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, item);
                                }
                            }
                            ;
                        }
                        this.invoke(component, row, "action");
                        Thinlet.set(component, ":anchor", null);
                    }
                    else {
                        this.selectItem(component, row, recursive);
                    }
                }
                this.setLead(component, (lead != null) ? lead : Thinlet.get$java_lang_Object$java_lang_Object(component, ":lead"), row);
            }
            /**
             * Find the next item after the given
             *
             * @param {*} component
             * a list/tree/table widget
             * @param {*} item
             * the next item after this, or the first if null
             * @param {boolean} recursive
             * true if tree
             * @return {*} next (or first) item
             */
            getNextItem(component, item, recursive) {
                if (!recursive) {
                    return Thinlet.get$java_lang_Object$java_lang_Object(item, ":next");
                }
                let next = Thinlet.get$java_lang_Object$java_lang_Object(item, ":comp");
                if ((next == null) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true)) {
                    while (((item !== component) && ((next = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) == null))) {
                        {
                            item = this.getParent(item);
                        }
                    }
                    ;
                }
                return next;
            }
            processField$int$int$int$int$java_lang_Object$boolean$boolean$int$boolean(x, y, clickcount, id, component, multiline, hidden, left, popuptrigger) {
                if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                    this.setReference(component, 2 + left, 2);
                    let mx = x - this.referencex;
                    let my = 0;
                    if (!multiline) {
                        mx += this.getInteger$java_lang_Object$java_lang_String$int(component, ":offset", 0);
                    }
                    else {
                        const port = this.getRectangle(component, ":port");
                        mx += port.x - 1;
                        my = y - this.referencey + port.y - 1;
                    }
                    let caretstart = this.getCaretLocation(component, mx, my, multiline, hidden);
                    if (popuptrigger) {
                        const start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                        const end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                        if ((caretstart >= Math.min(start, end)) && (caretstart <= Math.max(start, end)))
                            return;
                    }
                    let caretend = caretstart;
                    if (clickcount > 1) {
                        const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                        while (((caretstart > 0) && ((clickcount === 2) ? org.shikhar.AWTKeyEvent.isLetterOrDigit(text.charAt(caretstart - 1)) : ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(caretstart - 1)) != '\n'.charCodeAt(0))))) {
                            {
                                caretstart--;
                            }
                        }
                        ;
                        while (((caretend < text.length) && ((clickcount === 2) ? org.shikhar.AWTKeyEvent.isLetterOrDigit(text.charAt(caretend)) : ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(caretend)) != '\n'.charCodeAt(0))))) {
                            {
                                caretend++;
                            }
                        }
                        ;
                    }
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", caretstart, 0);
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", caretend, 0);
                    this.setFocus(component, true);
                    this.validate(component);
                }
                else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                    let mx = x - this.referencex;
                    let my = 0;
                    if (!multiline) {
                        mx += this.getInteger$java_lang_Object$java_lang_String$int(component, ":offset", 0);
                    }
                    else {
                        const port = this.getRectangle(component, ":port");
                        mx += port.x - 1;
                        my = y - this.referencey + port.y - 1;
                    }
                    const dragcaret = this.getCaretLocation(component, mx, my, multiline, hidden);
                    if (dragcaret !== this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0)) {
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", dragcaret, 0);
                        this.validate(component);
                    }
                }
                else if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) && (this.mousepressed == null)) {
                }
                else if (((id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) && (this.mousepressed == null)) || ((id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) && ((this.mouseinside !== component) || (this.insidepart != null)))) {
                }
            }
            getCaretLocation(component, x, y, multiline, hidden) {
                const currentfont = Thinlet.get$java_lang_Object$java_lang_Object(component, "font");
                const fm = ((currentfont != null) ? currentfont : this.font);
                const chars = multiline ? Thinlet.get$java_lang_Object$java_lang_Object(component, ":text") : /* toCharArray */ (this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "")).split('');
                let linestart = 0;
                if (multiline) {
                    const height = fm.getHeight();
                    for (let i = 0; (y >= height) && (i < chars.length); i++) {
                        {
                            if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\t'.charCodeAt(0))) {
                                linestart = i + 1;
                                y -= height;
                            }
                        }
                        ;
                    }
                }
                for (let i = linestart; i < chars.length; i++) {
                    {
                        if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\t'.charCodeAt(0))) {
                            return i;
                        }
                        const charwidth = fm.charWidth(hidden ? '*' : chars[i]);
                        if (x <= ((charwidth / 2 | 0))) {
                            return i;
                        }
                        x -= charwidth;
                    }
                    ;
                }
                return chars.length;
            }
            processScroll$int$int$int$java_lang_Object$java_lang_Object(x, y, id, component, part) {
                if ((part === "up") || (part === "down") || (part === "left") || (part === "right")) {
                    if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())) {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            if (this.processScroll$java_lang_Object$java_lang_Object(component, part)) {
                                this.setTimer(300);
                                return true;
                            }
                        }
                        else {
                            if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                                this.setTimer(0);
                            }
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, part);
                        }
                    }
                }
                else if ((part === "uptrack") || (part === "downtrack") || (part === "lefttrack") || (part === "righttrack")) {
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        if (this.processScroll$java_lang_Object$java_lang_Object(component, part)) {
                            this.setTimer(300);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                        this.setTimer(0);
                    }
                }
                else if ((part === "vknob") || (part === "hknob")) {
                    if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())) {
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, (part === "vknob") ? "vertical" : "horizontal");
                    }
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        const port = this.getRectangle(component, ":port");
                        const view = this.getRectangle(component, ":view");
                        if (part === "hknob") {
                            this.referencex = x - (view.x * (port.width - 2 * this.block) / view.width | 0);
                        }
                        else {
                            this.referencey = y - (view.y * (port.height - 2 * this.block) / view.height | 0);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                        const port = this.getRectangle(component, ":port");
                        const view = this.getRectangle(component, ":view");
                        if (part === "hknob") {
                            let viewx = ((x - this.referencex) * view.width / (port.width - 2 * this.block) | 0);
                            viewx = Math.max(0, Math.min(viewx, view.width - port.width));
                            if (view.x !== viewx) {
                                view.x = viewx;
                                this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, "horizontal");
                            }
                        }
                        else {
                            let viewy = ((y - this.referencey) * view.height / (port.height - 2 * this.block) | 0);
                            viewy = Math.max(0, Math.min(viewy, view.height - port.height));
                            if (view.y !== viewy) {
                                view.y = viewy;
                                this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, "vertical");
                            }
                        }
                    }
                }
                else if (part === "corner") {
                    part = "corner";
                }
                else {
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        const port = this.getRectangle(component, ":port");
                        if (port != null) {
                            this.setReference(component, port.x, port.y);
                        }
                    }
                    return false;
                }
                return true;
            }
            processScroll(x, y, id, component, part) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof id === 'number') || id === null) && ((component != null) || component === null) && ((part != null) || part === null)) {
                    return this.processScroll$int$int$int$java_lang_Object$java_lang_Object(x, y, id, component, part);
                }
                else if (((x != null) || x === null) && ((y != null) || y === null) && id === undefined && component === undefined && part === undefined) {
                    return this.processScroll$java_lang_Object$java_lang_Object(x, y);
                }
                else
                    throw new Error('invalid overload');
            }
            processScroll$java_lang_Object$java_lang_Object(component, part) {
                const view = this.getRectangle(component, ":view");
                const port = ((part === "left") || (part === "up")) ? null : this.getRectangle(component, ":port");
                let dx = 0;
                let dy = 0;
                if (part === "left") {
                    dx = -10;
                }
                else if (part === "lefttrack") {
                    dx = -port.width;
                }
                else if (part === "right") {
                    dx = 10;
                }
                else if (part === "righttrack") {
                    dx = port.width;
                }
                else if (part === "up") {
                    dy = -10;
                }
                else if (part === "uptrack") {
                    dy = -port.height;
                }
                else if (part === "down") {
                    dy = 10;
                }
                else if (part === "downtrack") {
                    dy = port.height;
                }
                if (dx !== 0) {
                    dx = (dx < 0) ? Math.max(-view.x, dx) : Math.min(dx, view.width - port.width - view.x);
                }
                else if (dy !== 0) {
                    dy = (dy < 0) ? Math.max(-view.y, dy) : Math.min(dy, view.height - port.height - view.y);
                }
                else
                    return false;
                if ((dx === 0) && (dy === 0)) {
                    return false;
                }
                view.x += dx;
                view.y += dy;
                this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, (dx !== 0) ? "horizontal" : "vertical");
                return true;
            }
            processSpin(component, part) {
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                try {
                    const itext = javaemul.internal.IntegerHelper.parseInt(text);
                    const step = this.getInteger$java_lang_Object$java_lang_String$int(component, "step", 1);
                    if ((part === "up") ? (itext + step <= this.getInteger$java_lang_Object$java_lang_String$int(component, "maximum", javaemul.internal.IntegerHelper.MAX_VALUE)) : (itext - step >= this.getInteger$java_lang_Object$java_lang_String$int(component, "minimum", javaemul.internal.IntegerHelper.MIN_VALUE))) {
                        const value = String((part === "up") ? (itext + step) : (itext - step)).toString();
                        this.setString$java_lang_Object$java_lang_String$java_lang_String$java_lang_String(component, "text", value, null);
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", value.length, 0);
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", 0, 0);
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, "spinbox", "text");
                        this.invoke(component, null, "action");
                        return true;
                    }
                }
                catch (nfe) {
                }
                return false;
            }
            /**
             * Invokes a method, such as an action, on the specified component.
             *
             * @param {*} component
             * the component to fire the event on, such as a textfield or
             * table
             * @param {*} part
             * the part of the component, null for a textfield, the row for a
             * table
             * @param {string} event
             * the event to send, such as 'action'
             * @return {boolean} true if a method object was fired
             */
            invoke(component, part, event) {
                const method = Thinlet.get$java_lang_Object$java_lang_Object(component, event);
                if (method != null) {
                    this.invokeImpl$java_lang_Object$java_lang_Object$java_lang_Object(component, method, part);
                    return true;
                }
                return false;
            }
            invokeImpl$java_lang_Object$java_lang_Object$java_lang_Object(component, method, part) {
                const data = method;
                const args = (data.length > 2) ? (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(((data.length - 2) / 3 | 0)) : null;
                if (args != null)
                    for (let i = 0; i < args.length; i++) {
                        {
                            let target = data[2 + 3 * i];
                            if ("thinlet" === target) {
                                args[i] = this;
                            }
                            else if (("constant" === target)) {
                                args[i] = data[2 + 3 * i + 1];
                            }
                            else {
                                if ("item" === target) {
                                    target = part;
                                }
                                const parametername = data[2 + 3 * i + 1];
                                if (parametername == null) {
                                    args[i] = target;
                                }
                                else {
                                    args[i] = (target != null) ? Thinlet.get$java_lang_Object$java_lang_Object(target, parametername) : null;
                                    if (args[i] == null) {
                                        args[i] = data[2 + 3 * i + 2];
                                    }
                                }
                            }
                        }
                        ;
                    }
                try {
                    this.invokeImpl$java_lang_Object$java_lang_String$java_lang_Object_A(component, data[1], args);
                }
                catch (e) {
                    console.error(e.message, e);
                }
            }
            /**
             * Overwrite this method to handle exceptions thrown by the invoked custom
             * methods
             *
             * @param {java.lang.Throwable} throwable
             * the thrown exception by the bussiness logic
             */
            handleException(throwable) {
                console.error(throwable.message, throwable);
            }
            findComponent(component, x, y) {
                if (component === this.content) {
                    this.mouseinside = this.insidepart = null;
                    this.mousex = x;
                    this.mousey = y;
                }
                if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "visible", true)) {
                    return false;
                }
                const classname = Thinlet.getComponentClass(component);
                const bounds = this.getRectangle(component, "bounds");
                if ((bounds == null) || !(bounds.contains$int$int(x, y))) {
                    return false;
                }
                this.mouseinside = component;
                x -= bounds.x;
                y -= bounds.y;
                if ("combobox" === classname) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true) && (x <= bounds.width - this.block)) {
                        const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                        this.insidepart = ((icon != null) && (x <= 2 + icon.width)) ? "icon" : null;
                    }
                    else {
                        this.insidepart = "down";
                    }
                }
                else if (":combolist" === classname) {
                    if (!this.findScroll$java_lang_Object$int$int(component, x, y)) {
                        y += this.getRectangle(component, ":view").y;
                        for (let choice = Thinlet.get$java_lang_Object$java_lang_Object(Thinlet.get$java_lang_Object$java_lang_Object(component, "combobox"), ":comp"); choice != null; choice = Thinlet.get$java_lang_Object$java_lang_Object(choice, ":next")) {
                            {
                                const r = this.getRectangle(choice, "bounds");
                                if ((y >= r.y) && (y < r.y + r.height)) {
                                    this.insidepart = choice;
                                    break;
                                }
                            }
                            ;
                        }
                    }
                }
                else if ("textarea" === classname) {
                    this.findScroll$java_lang_Object$int$int(component, x, y);
                }
                else if ("tabbedpane" === classname) {
                    const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                    let i = 0;
                    for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            if (i === selected) {
                                const tabcontent = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":comp");
                                if ((tabcontent != null) && this.findComponent(tabcontent, x - r.x, y - r.y)) {
                                    break;
                                }
                            }
                            if (r.contains$int$int(x, y)) {
                                this.insidepart = tab;
                                break;
                            }
                            i++;
                        }
                        ;
                    }
                }
                else if (("panel" === classname) || ("desktop" === classname) || ("dialog" === classname)) {
                    if ("dialog" === classname) {
                        const resizable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "resizable", false);
                        if (resizable && (x < 4)) {
                            this.insidepart = (y < this.block) ? ":nw" : (y >= bounds.height - this.block) ? ":sw" : ":w";
                        }
                        else if (resizable && (y < 4)) {
                            this.insidepart = (x < this.block) ? ":nw" : (x >= bounds.width - this.block) ? ":ne" : ":n";
                        }
                        else if (resizable && (x >= bounds.width - 4)) {
                            this.insidepart = (y < this.block) ? ":ne" : (y >= bounds.height - this.block) ? ":se" : ":e";
                        }
                        else if (resizable && (y >= bounds.height - 4)) {
                            this.insidepart = (x < this.block) ? ":sw" : (x >= bounds.width - this.block) ? ":se" : ":s";
                        }
                        else {
                            const titleheight = this.getInteger$java_lang_Object$java_lang_String$int(component, ":titleheight", 0);
                            if (y < 4 + titleheight) {
                                this.insidepart = "header";
                            }
                        }
                    }
                    if ((this.insidepart == null) && !this.findScroll$java_lang_Object$int$int(component, x, y)) {
                        const port = this.getRectangle(component, ":port");
                        if (port != null) {
                            const view = this.getRectangle(component, ":view");
                            x += view.x - port.x;
                            y += view.y - port.y;
                        }
                        for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                            {
                                if (this.findComponent(comp, x, y)) {
                                    break;
                                }
                                if (("desktop" === classname) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "modal", false)) {
                                    this.insidepart = "modal";
                                    break;
                                }
                            }
                            ;
                        }
                    }
                }
                else if ("spinbox" === classname) {
                    this.insidepart = (x <= bounds.width - this.block) ? null : ((y <= (bounds.height / 2 | 0)) ? "up" : "down");
                }
                else if ("splitpane" === classname) {
                    const comp1 = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                    if (comp1 != null) {
                        if (!this.findComponent(comp1, x, y)) {
                            const comp2 = Thinlet.get$java_lang_Object$java_lang_Object(comp1, ":next");
                            if (comp2 != null) {
                                this.findComponent(comp2, x, y);
                            }
                        }
                    }
                }
                else if ("list" === classname) {
                    this.findScroll$java_lang_Object$int$int(component, x, y);
                }
                else if ("table" === classname) {
                    if (!this.findScroll$java_lang_Object$int$int(component, x, y)) {
                    }
                }
                else if ("tree" === classname) {
                    this.findScroll$java_lang_Object$int$int(component, x, y);
                }
                else if ("menubar" === classname) {
                    for (let menu = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Thinlet.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            const r = this.getRectangle(menu, "bounds");
                            if ((x >= r.x) && (x < r.x + r.width)) {
                                this.insidepart = menu;
                                break;
                            }
                        }
                        ;
                    }
                }
                else if ("slider" === classname) {
                    this.insidepart = component;
                }
                else if (":popup" === classname) {
                    for (let menu = Thinlet.get$java_lang_Object$java_lang_Object(Thinlet.get$java_lang_Object$java_lang_Object(component, "menu"), ":comp"); menu != null; menu = Thinlet.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            const r = this.getRectangle(menu, "bounds");
                            if ((y >= r.y) && (y < r.y + r.height)) {
                                this.insidepart = menu;
                                break;
                            }
                        }
                        ;
                    }
                }
                return true;
            }
            findScroll$java_lang_Object$int$int(component, x, y) {
                const port = this.getRectangle(component, ":port");
                if ((port == null) || port.contains$int$int(x, y)) {
                    return false;
                }
                const view = this.getRectangle(component, ":view");
                const horizontal = this.getRectangle(component, ":horizontal");
                const vertical = this.getRectangle(component, ":vertical");
                if ((horizontal != null) && horizontal.contains$int$int(x, y)) {
                    this.findScroll$int$int$int$int$int$boolean(x - horizontal.x, horizontal.width, port.width, view.x, view.width, true);
                }
                else if ((vertical != null) && vertical.contains$int$int(x, y)) {
                    this.findScroll$int$int$int$int$int$boolean(y - vertical.y, vertical.height, port.height, view.y, view.height, false);
                }
                else {
                    this.insidepart = "corner";
                }
                return true;
            }
            findScroll$int$int$int$int$int$boolean(p, size, portsize, viewp, viewsize, horizontal) {
                if (p < this.block) {
                    this.insidepart = horizontal ? "left" : "up";
                }
                else if (p > size - this.block) {
                    this.insidepart = horizontal ? "right" : "down";
                }
                else {
                    const track = size - 2 * this.block;
                    if (track < 10) {
                        this.insidepart = "corner";
                        return;
                    }
                    const knob = Math.max((track * portsize / viewsize | 0), 10);
                    const decrease = (viewp * (track - knob) / (viewsize - portsize) | 0);
                    if (p < this.block + decrease) {
                        this.insidepart = horizontal ? "lefttrack" : "uptrack";
                    }
                    else if (p < this.block + decrease + knob) {
                        this.insidepart = horizontal ? "hknob" : "vknob";
                    }
                    else {
                        this.insidepart = horizontal ? "righttrack" : "downtrack";
                    }
                }
            }
            /**
             * @param {number} p
             * x or y relative to the scrollbar begin
             * @param {number} size
             * scrollbar width or height
             * @param {number} portsize
             * viewport width or height
             * @param {number} viewp
             * view x or y
             * @param {number} viewsize
             * view width or height
             * @param {boolean} horizontal
             * if true horizontal, vertical otherwise
             */
            findScroll(p, size, portsize, viewp, viewsize, horizontal) {
                if (((typeof p === 'number') || p === null) && ((typeof size === 'number') || size === null) && ((typeof portsize === 'number') || portsize === null) && ((typeof viewp === 'number') || viewp === null) && ((typeof viewsize === 'number') || viewsize === null) && ((typeof horizontal === 'boolean') || horizontal === null)) {
                    return this.findScroll$int$int$int$int$int$boolean(p, size, portsize, viewp, viewsize, horizontal);
                }
                else if (((p != null) || p === null) && ((typeof size === 'number') || size === null) && ((typeof portsize === 'number') || portsize === null) && viewp === undefined && viewsize === undefined && horizontal === undefined) {
                    return this.findScroll$java_lang_Object$int$int(p, size, portsize);
                }
                else
                    throw new Error('invalid overload');
            }
            repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part) {
                const b = this.getRectangle(component, "bounds");
                if (classname === "combobox") {
                    this.repaint$java_lang_Object$int$int$int$int(component, b.x + b.width - this.block, b.y, this.block, b.height);
                }
                else if (classname === "spinbox") {
                    if (part === "text") {
                        this.repaint$java_lang_Object$int$int$int$int(component, b.x, b.y, b.width - this.block, b.height);
                    }
                    else {
                        this.repaint$java_lang_Object$int$int$int$int(component, b.x + b.width - this.block, (part === "up") ? b.y : (b.y + b.height - (b.height / 2 | 0)), this.block, (b.height / 2 | 0));
                    }
                }
                else if ((classname === "tabbedpane") || (classname === "menubar") || (classname === ":popup")) {
                    const r = this.getRectangle(part, "bounds");
                    this.repaint$java_lang_Object$int$int$int$int(component, b.x + r.x, b.y + r.y, (classname === ":popup") ? b.width : r.width, r.height);
                }
                else if ((part === "left") || (part === "right")) {
                    const r = this.getRectangle(component, ":horizontal");
                    this.repaint$java_lang_Object$int$int$int$int(component, b.x + ((part === "left") ? r.x : (r.x + r.width - this.block)), b.y + r.y, this.block, r.height);
                }
                else if ((part === "up") || (part === "down")) {
                    const r = this.getRectangle(component, ":vertical");
                    this.repaint$java_lang_Object$int$int$int$int(component, b.x + r.x, b.y + ((part === "up") ? r.y : (r.y + r.height - this.block)), r.width, this.block);
                }
                else if ((part === "text") || (part === "horizontal") || (part === "vertical")) {
                    const port = this.getRectangle(component, ":port");
                    this.repaint$java_lang_Object$int$int$int$int(component, b.x + port.x, b.y + port.y, port.width, port.height);
                    if (part === "horizontal") {
                        const r = this.getRectangle(component, ":horizontal");
                        this.repaint$java_lang_Object$int$int$int$int(component, b.x + r.x, b.y + r.y, r.width, r.height);
                        this.repaint$java_lang_Object$int$int$int$int(component, b.x + r.x, b.y, r.width, port.y);
                    }
                    else if (part === "vertical") {
                        const r = this.getRectangle(component, ":vertical");
                        this.repaint$java_lang_Object$int$int$int$int(component, b.x + r.x, b.y + r.y, r.width, r.height);
                    }
                }
                else {
                    const port = this.getRectangle(component, ":port");
                    const view = this.getRectangle(component, ":view");
                    const r = this.getRectangle(part, "bounds");
                    if ((r.y + r.height >= view.y) && (r.y <= view.y + port.height)) {
                        this.repaint$java_lang_Object$int$int$int$int(component, b.x + port.x, b.y + port.y - view.y + r.y, port.width, r.height);
                    }
                }
            }
            /**
             * Layout and paint the given component later
             *
             * @param {*} component
             */
            validate(component) {
                this.repaint$java_lang_Object(component);
                const bounds = this.getRectangle(component, "bounds");
                if (bounds != null) {
                    bounds.width = -1 * Math.abs(bounds.width);
                }
            }
            repaint$java_lang_Object(component) {
                const bounds = this.getRectangle(component, "bounds");
                if (bounds != null) {
                    this.repaint$java_lang_Object$int$int$int$int(component, bounds.x, bounds.y, bounds.width, bounds.height);
                }
            }
            repaint$java_lang_Object$int$int$int$int(component, x, y, width, height) {
                while (((component = this.getParent(component)) != null)) {
                    {
                        const bounds = this.getRectangle(component, "bounds");
                        x += bounds.x;
                        y += bounds.y;
                        const view = this.getRectangle(component, ":view");
                        if (view != null) {
                            const port = this.getRectangle(component, ":port");
                            x += -view.x + port.x;
                            y += -view.y + port.y;
                        }
                    }
                }
                ;
                this.repaint$int$int$int$int(x, y, width, height);
            }
            /**
             * Repaint the given component's area later
             *
             * @param {*} component
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
             */
            repaint(component, x, y, width, height) {
                if (((component != null) || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                    return this.repaint$java_lang_Object$int$int$int$int(component, x, y, width, height);
                }
                else if (((typeof component === 'number') || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && height === undefined) {
                    return this.repaint$int$int$int$int(component, x, y, width);
                }
                else if (((component != null) || component === null) && ((x != null) || x === null) && ((y != null) || y === null) && width === undefined && height === undefined) {
                    return this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, x, y);
                }
                else if (((component != null) || component === null) && x === undefined && y === undefined && width === undefined && height === undefined) {
                    return this.repaint$java_lang_Object(component);
                }
                else
                    throw new Error('invalid overload');
            }
            requestFocus$java_lang_Object(component) {
                if (this.isFocusable(component, true)) {
                    this.setFocus(component, false);
                    this.repaint$java_lang_Object(component);
                    return true;
                }
                return false;
            }
            /**
             * Requests that both the <i>Thinlet</i> component, and the given widget
             * get the input focus
             *
             * @param {*} component
             * a focusable widget inside visible and enabled parents, and
             * tabbedpane's selected tab
             * @return {boolean} true, if the given component was focusable
             */
            requestFocus(component) {
                if (((component != null) || component === null)) {
                    return this.requestFocus$java_lang_Object(component);
                }
                else if (component === undefined) {
                    return this.requestFocus$();
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Request focus for the given component
             *
             * @param {*} component
             * a focusable component
             * @return {boolean} true if the focusowner was changed, otherwise false
             * @param {boolean} enter
             */
            setFocus(component, enter) {
                if (!this.focusinside) {
                    this.requestFocus$();
                }
                if (this.focusowner !== component) {
                    const focused = this.focusowner;
                    if (this.focusowner != null) {
                        this.focusowner = null;
                        const classname = Thinlet.getComponentClass(focused);
                        if (classname === "spinbox" || classname === "slider" || classname === "textfield" || classname === "textarea") {
                            if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(focused, "interactionMode", true)) {
                                this.setBoolean$java_lang_Object$java_lang_String$boolean(focused, "interactionState", false);
                            }
                        }
                        this.repaint$java_lang_Object(focused);
                        this.invoke(focused, null, "focuslost");
                    }
                    if (this.focusowner == null) {
                        this.focusowner = component;
                        const classname = Thinlet.getComponentClass(component);
                        if (classname === "spinbox" || classname === "slider" || classname === "textfield" || classname === "textarea") {
                            if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionMode", false)) {
                                this.setBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", enter);
                            }
                        }
                        this.invoke(component, null, "focusgained");
                    }
                    return true;
                }
                else {
                    const classname = Thinlet.getComponentClass(component);
                    if (classname === "spinbox" || classname === "slider" || classname === "textfield" || classname === "textarea") {
                        if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionMode", false)) {
                            this.setBoolean$java_lang_Object$java_lang_String$boolean(component, "interactionState", enter);
                            return true;
                        }
                    }
                }
                return false;
            }
            /**
             * @return {boolean} next focusable component is found (not the first of the
             * desktop/dialog)
             * @param {*} current
             * @param {boolean} outgo
             */
            setNextFocusable(current, outgo) {
                let consumed = true;
                for (let next = null, component = current; true; component = next) {
                    {
                        next = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                        if (next == null) {
                            next = Thinlet.get$java_lang_Object$java_lang_Object(component, ":next");
                        }
                        while ((next == null)) {
                            {
                                component = this.getParent(component);
                                if (component == null) {
                                    return false;
                                }
                                if ((component === this.content) || ((Thinlet.getComponentClass(component) === "dialog") && (!outgo || this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "modal", false)))) {
                                    consumed = false;
                                    next = component;
                                }
                                else {
                                    next = Thinlet.get$java_lang_Object$java_lang_Object(component, ":next");
                                }
                            }
                        }
                        ;
                        if (next === current) {
                            return false;
                        }
                        if (this.isFocusable(next, false)) {
                            this.setFocusImpl(next);
                            return consumed;
                        }
                    }
                    ;
                }
            }
            /**
             * @return {boolean} previous focusable component is found (not the last of the
             * desktop/dialog)
             * @param {*} component
             * @param {boolean} outgo
             */
            setPreviousFocusable(component, outgo) {
                for (let i = 0; i < 2; i++) {
                    {
                        const previous = this.getPreviousFocusable(component, null, true, false, (i === 0), outgo);
                        if (previous != null) {
                            this.setFocus(previous, false);
                            return (i === 0);
                        }
                    }
                    ;
                }
                return false;
            }
            /**
             * For the starting component search its parent direction for a focusable
             * component, and then its next component (if not search backward from the
             * component).<br />
             * For its parent components check its first component, the current one, and
             * its parent direction (backward search), or its parent, then next
             * component (forward direction).<br />
             * For the rest components check the next, then the first subcomponent
             * direction, and finally check whether the component is focusable.
             * @param {*} component
             * @param {*} block
             * @param {boolean} start
             * @param {boolean} upward
             * @param {boolean} backward
             * @param {boolean} outgo
             * @return {*}
             */
            getPreviousFocusable(component, block, start, upward, backward, outgo) {
                let previous = null;
                if ((component != null) && (component !== block)) {
                    const go = ((Thinlet.getComponentClass(component) !== "dialog") || (outgo && !this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "modal", false)));
                    if (!start && !upward && go) {
                        previous = this.getPreviousFocusable(Thinlet.get$java_lang_Object$java_lang_Object(component, ":next"), block, false, false, backward, outgo);
                    }
                    if ((previous == null) && ((upward && backward) || (!start && !upward))) {
                        previous = this.getPreviousFocusable(Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"), block, false, false, backward, outgo);
                        if ((previous == null) && this.isFocusable(component, false)) {
                            previous = component;
                        }
                    }
                    if ((previous == null) && (start || upward) && go) {
                        previous = this.getPreviousFocusable(this.getParent(component), component, false, true, backward, outgo);
                    }
                    if ((previous == null) && (start || upward) && !backward && go) {
                        previous = this.getPreviousFocusable(Thinlet.get$java_lang_Object$java_lang_Object(component, ":next"), block, false, false, backward, outgo);
                    }
                }
                return previous;
            }
            isEnabledAndVisible(component) {
                for (let comp = component; comp != null;) {
                    {
                        if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "enabled", true) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                            return false;
                        }
                        const parent = this.getParent(comp);
                        if ((Thinlet.getComponentClass(comp) === "tab") && (this.getItem(parent, this.getInteger$java_lang_Object$java_lang_String$int(parent, "selected", 0)) !== comp)) {
                            return false;
                        }
                        comp = parent;
                    }
                    ;
                }
                return true;
            }
            /**
             * Check whether the given widget can become focusowner
             *
             * @param {*} component
             * check this widget
             * @param {boolean} forced
             * splitpane is also checked (e.g. false for tab navigating, and
             * true for mouse selection or application request)
             * @return {boolean} true if focusable, otherwise false
             */
            isFocusable(component, forced) {
                const classname = Thinlet.getComponentClass(component);
                if ((classname === "button") || (classname === "checkbox") || ("togglebutton" === classname) || (classname === "combobox") || (classname === "textfield") || (classname === "passwordfield") || (classname === "textarea") || (classname === "spinbox") || (classname === "slider") || (classname === "list") || (classname === "table") || (classname === "tree") || (classname === "tabbedpane") || (forced && (classname === "splitpane"))) {
                    for (let comp = component; comp != null;) {
                        {
                            if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "enabled", true) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                return false;
                            }
                            const parent = this.getParent(comp);
                            if ((Thinlet.getComponentClass(comp) === "tab") && (this.getItem(parent, this.getInteger$java_lang_Object$java_lang_String$int(parent, "selected", 0)) !== comp)) {
                                return false;
                            }
                            comp = parent;
                        }
                        ;
                    }
                    return true;
                }
                return false;
            }
            /**
             * Creates a new component
             *
             * @param {string} classname
             * the widget type (e.g. <i>button</i>)
             * @return {*} a new component, every component is simply an <i>Object</i>
             * @throws java.lang.IllegalArgumentException
             * for unknown widget type
             */
            static create(classname) {
                for (let i = 0; i < Thinlet.dtd_$LI$().length; i += 3) {
                    {
                        if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(Thinlet.dtd_$LI$()[i], classname)) {
                            const impl = Thinlet.createImpl(Thinlet.dtd_$LI$()[i]);
                            if (Thinlet.dtd_$LI$()[i] === "spinbox" || Thinlet.dtd_$LI$()[i] === "slider" || Thinlet.dtd_$LI$()[i] === "textarea" || Thinlet.dtd_$LI$()[i] === "textfield") {
                                Thinlet.set(impl, "tooltip", "Toggle to edit");
                            }
                            return impl;
                        }
                    }
                    ;
                }
                throw new java.lang.IllegalArgumentException("unknown " + classname);
            }
            /**
             * Gets the type of the given component
             *
             * @param {*} component
             * a widget
             * @return {string} the class name of the component (e.g. <i>button</i>)
             */
            static getComponentClass(component) {
                return Thinlet.get$java_lang_Object$java_lang_Object(component, ":class");
            }
            /**
             * Get the topmost component
             *
             * @return {*} the root object (it is a <i>desktop</i>), never <i>null</i>
             */
            getDesktop() {
                return this.content;
            }
            static createImpl(classname) {
                return [":class", classname, null];
            }
            static set(component, key, value) {
                let previous = component;
                for (let entry = previous; entry != null; entry = entry[2]) {
                    {
                        if (entry[0] === key) {
                            if (value != null) {
                                const oldvalue = entry[1];
                                entry[1] = value;
                                return !((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(value, oldvalue);
                            }
                            else {
                                previous[2] = entry[2];
                                entry[2] = null;
                                return true;
                            }
                        }
                        previous = entry;
                    }
                    ;
                }
                if (value != null) {
                    previous[2] = [key, value, null];
                    return true;
                }
                return false;
            }
            static get$java_lang_Object$java_lang_Object(component, key) {
                for (let entry = component; entry != null; entry = entry[2]) {
                    {
                        if (entry[0] === key) {
                            return entry[1];
                        }
                    }
                    ;
                }
                return null;
            }
            /**
             * Gets the count of subcomponents in the list of the given component
             *
             * @param {*} component
             * a widget
             * @return {number} the number of components in this component
             */
            getCount(component) {
                return Thinlet.getItemCountImpl(component, ":comp");
            }
            /**
             * Gets the parent of this component
             *
             * @param {*} component
             * a widget
             * @return {*} the parent container of this component or item
             */
            getParent(component) {
                return Thinlet.get$java_lang_Object$java_lang_Object(component, ":parent");
            }
            /**
             * Gets the index of the first selected item in the given component
             *
             * @param {*} component
             * a widget (combobox, tabbedpane, list, table, or tree)
             * @return {number} the first selected index or -1
             */
            getSelectedIndex(component) {
                const classname = Thinlet.getComponentClass(component);
                if ((classname === "combobox") || (classname === "tabbedpane")) {
                    return this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", (classname === "combobox") ? -1 : 0);
                }
                if ((classname === "list") || (classname === "table") || (classname === "tree")) {
                    let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                    for (let i = 0; item != null; i++) {
                        {
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false)) {
                                return i;
                            }
                            item = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next");
                        }
                        ;
                    }
                    return -1;
                }
                throw new java.lang.IllegalArgumentException(classname);
            }
            /**
             * Gets the first selected item of the given component
             *
             * @param {*} component
             * a widget (combobox, tabbedpane, list, table, or tree)
             * @return {*} the first selected item or null
             */
            getSelectedItem(component) {
                const classname = Thinlet.getComponentClass(component);
                if ((classname === "combobox") || (classname === "tabbedpane")) {
                    const index = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", (classname === "combobox") ? -1 : 0);
                    return (index !== -1) ? Thinlet.getItemImpl(component, ":comp", index) : null;
                }
                if ((classname === "list") || (classname === "table") || (classname === "tree")) {
                    for (let item = this.findNextItem(component, classname, null); item != null; item = this.findNextItem(component, classname, item)) {
                        {
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false)) {
                                return item;
                            }
                        }
                        ;
                    }
                    return null;
                }
                throw new java.lang.IllegalArgumentException(classname);
            }
            /**
             * Gets the selected item of the given component (list, table, or tree) when
             * multiple selection is allowed
             *
             * @param {*} component
             * a widget
             * @return {java.lang.Object[]} the array of selected items, or a 0 length array
             */
            getSelectedItems(component) {
                const classname = Thinlet.getComponentClass(component);
                let selecteds = [];
                for (let item = this.findNextItem(component, classname, null); item != null; item = this.findNextItem(component, classname, item)) {
                    {
                        if (this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false)) {
                            const temp = (s => { let a = []; while (s-- > 0)
                                a.push(null); return a; })(selecteds.length + 1);
                            java.lang.System.arraycopy(selecteds, 0, temp, 0, selecteds.length);
                            temp[selecteds.length] = item;
                            selecteds = temp;
                        }
                    }
                    ;
                }
                return selecteds;
            }
            /**
             * @return {*} the first or the next item of the (list, table, or tree)
             * component
             * @param {*} component
             * @param {string} classname
             * @param {*} item
             */
            findNextItem(component, classname, item) {
                if (item == null) {
                    return Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                }
                else if ("tree" === classname) {
                    let next = Thinlet.get$java_lang_Object$java_lang_Object(item, ":comp");
                    if ((next == null) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true)) {
                        while (((item !== component) && ((next = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) == null))) {
                            {
                                item = this.getParent(item);
                            }
                        }
                        ;
                    }
                    return next;
                }
                else {
                    return Thinlet.get$java_lang_Object$java_lang_Object(item, ":next");
                }
            }
            /**
             * Removes all the components from this container's specified list
             *
             * @param {*} component
             * the specified container
             */
            removeAll(component) {
                if (Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp") != null) {
                    Thinlet.set(component, ":comp", null);
                    this.update(component, "validate");
                }
            }
            static getItemCountImpl(component, key) {
                let i = 0;
                for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, key); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        i++;
                    }
                    ;
                }
                return i;
            }
            /**
             * Returns the subcomponent of the given component's specified list at the
             * given index
             *
             * @param {*} component
             * a specified container
             * @param {number} index
             * the index of the component to get
             * @return {*} the index<sup>th</sup> component in this container
             */
            getItem(component, index) {
                return Thinlet.getItemImpl(component, ":comp", index);
            }
            /**
             * Gets all the components in this container
             *
             * @param {*} component
             * a specified container
             * @return {java.lang.Object[]} an array of all the components in this container
             */
            getItems(component) {
                const items = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(Thinlet.getItemCountImpl(component, ":comp"));
                let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp");
                for (let i = 0; i < items.length; i++) {
                    {
                        items[i] = comp;
                        comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next");
                    }
                    ;
                }
                return items;
            }
            /**
             * Referenced by DOM, replace by getItem for others
             * @param {*} component
             * @param {*} key
             * @param {number} index
             * @return {*}
             */
            static getItemImpl(component, key, index) {
                let i = 0;
                for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, key); item != null; item = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) {
                    {
                        if (i === index) {
                            return item;
                        }
                        i++;
                    }
                    ;
                }
                return null;
            }
            getIndex(component, value) {
                let index = 0;
                for (let item = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = Thinlet.get$java_lang_Object$java_lang_Object(item, ":next")) {
                    {
                        if (value === item) {
                            return index;
                        }
                        index++;
                    }
                    ;
                }
                return -1;
            }
            add$java_lang_Object(component) {
                this.add$java_lang_Object$java_lang_Object$int(this.content, component, 0);
            }
            add$java_lang_Object$java_lang_Object(parent, component) {
                this.add$java_lang_Object$java_lang_Object$int(parent, component, -1);
            }
            add$java_lang_Object$java_lang_Object$int(parent, component, index) {
                this.addImpl(parent, component, index);
                this.update(component, "validate");
                this.validate(parent == null ? this.content : parent);
            }
            /**
             * Adds the specified component to the container at the given position
             *
             * @param {*} parent
             * a container
             * @param {*} component
             * a component to be inserted
             * @param {number} index
             * the position at which to insert the component, or -1 to insert
             * the component at the end
             */
            add(parent, component, index) {
                if (((parent != null) || parent === null) && ((component != null) || component === null) && ((typeof index === 'number') || index === null)) {
                    return this.add$java_lang_Object$java_lang_Object$int(parent, component, index);
                }
                else if (((parent != null) || parent === null) && ((component != null) || component === null) && index === undefined) {
                    return this.add$java_lang_Object$java_lang_Object(parent, component);
                }
                else if (((parent != null) || parent === null) && component === undefined && index === undefined) {
                    return this.add$java_lang_Object(parent);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Referenced by DOM
             * @param {*} parent
             * @param {*} key
             * @param {*} component
             * @param {number} index
             */
            insertItem(parent, key, component, index) {
                let item = parent;
                let next = Thinlet.get$java_lang_Object$java_lang_Object(parent, key);
                for (let i = 0;; i++) {
                    {
                        if ((i === index) || (next == null)) {
                            Thinlet.set(item, key, component);
                            Thinlet.set(component, ":next", next);
                            break;
                        }
                        next = Thinlet.get$java_lang_Object$java_lang_Object(item = next, key = ":next");
                    }
                    ;
                }
            }
            /**
             * Remove the specified component from its parent list, or delete
             * component's popupmenu or table's header
             *
             * @param {*} component
             * the component to be removed
             */
            remove(component) {
                this.update(component, "validate");
                const parent = this.getParent(component);
                const classname = Thinlet.getComponentClass(component);
                if (("popupmenu" === classname) || ("header" === classname)) {
                    Thinlet.set(parent, classname, null);
                }
                else {
                    this.removeItemImpl(parent, component);
                }
            }
            /**
             * Delete the give component from its parent list
             *
             * @param {*} parent
             * @param {*} component
             */
            removeItemImpl(parent, component) {
                let previous = null;
                for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":comp"); comp != null;) {
                    {
                        const next = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next");
                        if (next === component) {
                            previous = comp;
                            break;
                        }
                        comp = next;
                    }
                    ;
                }
                Thinlet.set((previous != null) ? previous : parent, (previous != null) ? ":next" : ":comp", Thinlet.get$java_lang_Object$java_lang_Object(component, ":next"));
                Thinlet.set(component, ":next", null);
                Thinlet.set(component, ":parent", null);
            }
            find$java_lang_String(name) {
                return this.find$java_lang_Object$java_lang_String(this.content, name);
            }
            find$java_lang_Object$java_lang_String(component, name) {
                if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(name, Thinlet.get$java_lang_Object$java_lang_Object(component, "name"))) {
                    return component;
                }
                let found = null;
                for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        if ((found = this.find$java_lang_Object$java_lang_String(comp, name)) != null) {
                            return found;
                        }
                    }
                    ;
                }
                const header = Thinlet.get$java_lang_Object$java_lang_Object(component, "header");
                if ((header != null) && ((found = this.find$java_lang_Object$java_lang_String(header, name)) != null)) {
                    return found;
                }
                const popupmenu = Thinlet.get$java_lang_Object$java_lang_Object(component, "popupmenu");
                if ((popupmenu != null) && ((found = this.find$java_lang_Object$java_lang_String(popupmenu, name)) != null)) {
                    return found;
                }
                return null;
            }
            /**
             * Finds the first component from the specified component by a name
             *
             * @param {*} component
             * the widget is searched inside this component
             * @param {string} name
             * parameter value identifies the widget
             * @return {*} the first suitable component, or null
             */
            find(component, name) {
                if (((component != null) || component === null) && ((typeof name === 'string') || name === null)) {
                    return this.find$java_lang_Object$java_lang_String(component, name);
                }
                else if (((typeof component === 'string') || component === null) && name === undefined) {
                    return this.find$java_lang_String(component);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * mnemonic (e.g. Alt-X): - check: label, button, checkbox, togglebutton,
             * menubar menus, tabbedpane tabs - path: panel, desktop, dialog, splitpane
             * components, tabbedpane selected component accelerator (e.g. Ctrl-Shift-X,
             * F4): - check: menuitem, checkboxmenuitem - path: see above, and menubar,
             * and menu items menubar F10: check menubar only button enter, escape:
             * check button only
             *
             * @param {*} component
             * @param {boolean} parent
             * check upwards if true
             * @param {*} checked
             * this leaf is already checked
             * @param mnemonic
             * @return {boolean} true if the char was consumed
             * @param {number} keycode
             * @param {number} modifiers
             */
            checkMnemonic(component, parent, checked, keycode, modifiers) {
                if ((component == null) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "visible", true) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "enabled", true)) {
                    return false;
                }
                const classname = Thinlet.getComponentClass(component);
                if ("label" === classname) {
                    if (this.hasMnemonic(component, keycode, modifiers)) {
                        const labelfor = Thinlet.get$java_lang_Object$java_lang_Object(component, "for");
                        if (labelfor != null) {
                            this.requestFocus$java_lang_Object(labelfor);
                            return true;
                        }
                    }
                }
                else if ("button" === classname) {
                    if (((modifiers === 0) && (((keycode === org.shikhar.AWTKeyEvent.VK_ENTER) && (Thinlet.get$java_lang_Object$java_lang_Object(component, "type") === "default")) || ((keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE) && (Thinlet.get$java_lang_Object$java_lang_Object(component, "type") === "cancel")))) || this.hasMnemonic(component, keycode, modifiers)) {
                        this.invoke(component, null, "action");
                        this.repaint$java_lang_Object(component);
                        return true;
                    }
                }
                else if (("checkbox" === classname) || ("togglebutton" === classname)) {
                    if (this.hasMnemonic(component, keycode, modifiers)) {
                        this.changeCheck(component, true);
                        this.repaint$java_lang_Object(component);
                        return true;
                    }
                }
                else if ("menubar" === classname) {
                    for (let menu = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Thinlet.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            if (this.hasMnemonic(menu, keycode, modifiers) || ((modifiers === 0) && (keycode === org.shikhar.AWTKeyEvent.VK_F10))) {
                                this.closeup();
                                Thinlet.set(component, "selected", menu);
                                this.popupMenu(component);
                                this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, "menubar", menu);
                                return true;
                            }
                        }
                        ;
                    }
                }
                else if (("menuitem" === classname) || ("checkboxmenuitem" === classname)) {
                    if (this.hasAccelerator(component, keycode, modifiers)) {
                        this.invoke(component, null, "action");
                    }
                }
                else if ("tabbedpane" === classname) {
                    const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                    let i = 0;
                    for (let tab = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Thinlet.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            if (this.hasMnemonic(tab, keycode, modifiers)) {
                                if (selected !== i) {
                                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "selected", i, 0);
                                    this.repaint$java_lang_Object(component);
                                    this.invoke(component, this.getItem(component, i), "action");
                                }
                                return true;
                            }
                            i++;
                        }
                        ;
                    }
                    const comp = Thinlet.get$java_lang_Object$java_lang_Object(this.getItem(component, selected), ":comp");
                    if ((comp != null) && (comp !== checked) && this.checkMnemonic(comp, false, null, keycode, modifiers)) {
                        return true;
                    }
                }
                if (("panel" === classname) || ("desktop" === classname) || ("dialog" === classname) || ("splitpane" === classname) || ("menubar" === classname) || ("menu" === classname)) {
                    for (let comp = Thinlet.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Thinlet.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            if ((comp !== checked) && this.checkMnemonic(comp, false, null, keycode, modifiers)) {
                                return true;
                            }
                        }
                        ;
                    }
                }
                if (parent && (("dialog" !== classname) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "modal", false))) {
                    if (this.checkMnemonic(this.getParent(component), true, ("tab" === classname) ? checked : component, keycode, modifiers)) {
                        return true;
                    }
                }
                return false;
            }
            /**
             * @param {*} component
             * @param {number} keycode
             * @param {number} modifiers
             * @return {boolean} true if the component has the given mnemonic
             */
            hasMnemonic(component, keycode, modifiers) {
                if (modifiers === org.shikhar.InputEvent.ALT_MASK) {
                    const index = this.getInteger$java_lang_Object$java_lang_String$int(component, "mnemonic", -1);
                    if (index !== -1) {
                        const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", null);
                        return (text != null) && (text.length > index) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(javaemul.internal.CharacterHelper.toUpperCase(text.charAt(index))) == keycode);
                    }
                }
                return false;
            }
            /**
             * @param {*} component
             * @param {number} keycode
             * @param {number} modifiers
             * @return {boolean} true if the component has the given accelerator
             */
            hasAccelerator(component, keycode, modifiers) {
                const accelerator = Thinlet.get$java_lang_Object$java_lang_Object(component, "accelerator");
                if (accelerator != null) {
                    const keystroke = accelerator;
                    return ((keystroke >> 32) === modifiers) && ((keystroke & 65535) === keycode);
                }
                return false;
            }
            /**
             * Binds the specified key to the specified value, and stores in this
             * component. <i>Null</i> value removes the property. Use the parameter tag
             * in the xml resource to bind a string value, the format is:
             * <i>parameter='key=value'</i>
             *
             * @param {*} component
             * the hashtable is binded to this component
             * @param {*} key
             * the client property key
             * @param {*} value
             * the new client property value
             */
            putProperty(component, key, value) {
                let table = Thinlet.get$java_lang_Object$java_lang_Object(component, ":bind");
                if (value != null) {
                    if (table == null) {
                        Thinlet.set(component, ":bind", table = (new java.util.Hashtable()));
                    }
                    table.put(key, value);
                }
                else if (table != null) {
                    table.remove(key);
                }
            }
            /**
             * Returns the value of the property with the specified key.
             *
             * @param {*} component
             * searches the hashtable of this component
             * @param {*} key
             * the client property key
             * @return {*} the value to which the key is mapped or null if the key is not
             * mapped to any value
             */
            getProperty(component, key) {
                const table = Thinlet.get$java_lang_Object$java_lang_Object(component, ":bind");
                return (table != null) ? table.get(key) : null;
            }
            parse$java_lang_String(path) {
                const inputstream = this.constructor.getResourceAsStream(path);
                if (inputstream == null) {
                    throw new java.lang.RuntimeException("Could not read " + path);
                }
                return this.parseImpl(new java.io.InputStreamReader(inputstream), this);
            }
            /**
             * Creates a component (and its subcomponents, and properties) from the
             * given xml resource
             *
             * @param {string} path
             * is relative to your thinlet instance or the classpath (if the
             * path starts with an <i>/</i> character), or a full URL
             * @return {*} the root component of the parsed resource
             * @throws java.io.IOException
             */
            parse(path) {
                if (((typeof path === 'string') || path === null)) {
                    return this.parse$java_lang_String(path);
                }
                else if (((path != null && path instanceof java.io.InputStream) || path === null)) {
                    return this.parse$java_io_InputStream(path);
                }
                else
                    throw new Error('invalid overload');
            }
            parse$java_io_InputStream(inputstream) {
                if (inputstream == null) {
                    throw new java.lang.RuntimeException("Null input stream");
                }
                const reader = new java.io.InputStreamReader(inputstream);
                return this.parseImpl(reader, this);
            }
            parsefromString(xml) {
                return this.parseImpl(new java.io.StringReader(xml), this);
            }
            parseImpl(reader, handler) {
                try {
                    let parentlist = null;
                    let current = null;
                    let methods = null;
                    const encoding = "UTF-8";
                    const parser = new org.shikhar.XmlReader(reader);
                    if (parser.moveToStartElement$()) {
                        let event = org.shikhar.XmlReader.START_TAG;
                        do {
                            {
                                if (event === org.shikhar.XmlReader.START_TAG) {
                                    const tagname = parser.getName();
                                    parentlist = [current, parentlist, tagname];
                                    current = (current != null) ? this.addElement(current, tagname) : Thinlet.create(tagname);
                                    for (let i = 0; i < parser.getAttributeCount(); i++) {
                                        {
                                            const key = parser.getAttributeName(i);
                                            const text = parser.getAttributeValue$int(i);
                                            methods = this.addAttribute(current, key, text.toString(), encoding, methods);
                                        }
                                        ;
                                    }
                                }
                                else if (event === org.shikhar.XmlReader.END_TAG) {
                                    if (parentlist[0] == null) {
                                        this.finishParse(methods, current, handler);
                                        return current;
                                    }
                                    current = parentlist[0];
                                    parentlist = parentlist[1];
                                }
                                event = parser.next();
                            }
                        } while ((event !== org.shikhar.XmlReader.END_DOCUMENT));
                    }
                    this.finishParse(methods, current, handler);
                    return current;
                }
                finally {
                    if (reader != null) {
                        reader.close();
                    }
                    ;
                }
            }
            /**
             * @param {java.util.Vector} methods
             * methods and label's 'for' widgets are stored in this vector
             * because these may reference to widgets which are not parsed at
             * that time
             * @param {*} root
             * @param {*} handler
             */
            finishParse(methods, root, handler) {
                if (methods != null)
                    for (let i = 0; i < methods.size(); i += 3) {
                        {
                            const component = methods.elementAt(i);
                            const definition = methods.elementAt(i + 1);
                            const value = methods.elementAt(i + 2);
                            if ("method" === definition[0]) {
                                const method = this.getMethod(component, value, root, handler);
                                if ("init" === definition[1]) {
                                    this.invokeImpl$java_lang_Object$java_lang_Object$java_lang_Object(null, method, null);
                                }
                                else {
                                    Thinlet.set(component, definition[1], method);
                                }
                            }
                            else {
                                const reference = this.find$java_lang_Object$java_lang_String(root, value);
                                if (reference == null)
                                    throw new java.lang.IllegalArgumentException(value + " not found");
                                Thinlet.set(component, definition[1], reference);
                            }
                        }
                        ;
                    }
            }
            /**
             * Add the component to the parent's ':comp' list, and set its ':parent' or
             * set single components
             *
             * @param {number} index
             * add at the specified index
             * @throws java.lang.IllegalArgumentException
             * @param {*} parent
             * @param {*} component
             */
            addImpl(parent, component, index) {
                const parentclass = Thinlet.getComponentClass(parent);
                const classname = Thinlet.getComponentClass(component);
                if ((("combobox" === parentclass) && ("choice" === classname)) || (("tabbedpane" === parentclass) && ("tab" === classname)) || (("list" === parentclass) && ("item" === classname)) || (("table" === parentclass) && ("row" === classname)) || (("header" === parentclass) && ("column" === classname)) || (("row" === parentclass) && ("cell" === classname)) || ((("tree" === parentclass) || ("node" === parentclass)) && ("node" === classname)) || (("menubar" === parentclass) && ("menu" === classname)) || ((("menu" === parentclass) || ("popupmenu" === parentclass)) && (("menu" === classname) || ("menuitem" === classname) || ("checkboxmenuitem" === classname) || ("separator" === classname))) || ((("panel" === parentclass) || ("desktop" === parentclass) || ("splitpane" === parentclass) || ("dialog" === parentclass) || ("tab" === parentclass)) && this.instance(classname, "component") && (classname !== "popupmenu"))) {
                    this.insertItem(parent, ":comp", component, index);
                    Thinlet.set(component, ":parent", parent);
                }
                else if ((("table" === parentclass) && ("header" === classname)) || (("popupmenu" === classname) && this.instance(parentclass, "component"))) {
                    Thinlet.set(parent, classname, component);
                    Thinlet.set(component, ":parent", parent);
                }
                else {
                    console.log("can\'t add " + classname + " to " + parentclass);
                    throw new java.lang.IllegalArgumentException(classname + " add " + parentclass);
                }
            }
            instance(classname, extendclass) {
                if (classname === extendclass) {
                    return true;
                }
                for (let i = 0; i < Thinlet.dtd_$LI$().length; i += 3) {
                    {
                        if (classname === Thinlet.dtd_$LI$()[i]) {
                            return this.instance(Thinlet.dtd_$LI$()[i + 1], extendclass);
                        }
                    }
                    ;
                }
                return false;
            }
            addElement(parent, name) {
                const component = Thinlet.create(name);
                this.addImpl(parent, component, -1);
                return component;
            }
            /**
             * Called by the <code>parse</code> method
             *
             * @throws UnsupportedEncodingException
             * @throws java.lang.IllegalArgumentException
             * @param {*} component
             * @param {string} key
             * @param {string} value
             * @param {string} encoding
             * @param {java.util.Vector} lasts
             * @return {java.util.Vector}
             */
            addAttribute(component, key, value, encoding, lasts) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, null);
                key = definition[1];
                if ("string" === definition[0]) {
                    value = (encoding == null) ? new String(value) : ((str, index, len) => str.substring(index, index + len))(( /* getBytes */(value).split('').map(s => s.charCodeAt(0))).map(s => String.fromCharCode(s)).join(''), 0, value.length);
                    this.setString$java_lang_Object$java_lang_String$java_lang_String$java_lang_String(component, key, value, definition[3]);
                }
                else if ("choice" === definition[0]) {
                    const values = definition[3];
                    this.setChoice$java_lang_Object$java_lang_String$java_lang_String$java_lang_String_A$java_lang_String(component, key, value, values, values[0]);
                }
                else if ("boolean" === definition[0]) {
                    if ("true" === value) {
                        if (definition[3] === javaemul.internal.BooleanHelper.FALSE) {
                            Thinlet.set(component, key, javaemul.internal.BooleanHelper.TRUE);
                        }
                    }
                    else if ("false" === value) {
                        if (definition[3] === javaemul.internal.BooleanHelper.TRUE) {
                            Thinlet.set(component, key, javaemul.internal.BooleanHelper.FALSE);
                        }
                    }
                    else
                        throw new java.lang.IllegalArgumentException(value);
                }
                else if ("integer" === definition[0]) {
                    let integer = 0;
                    if ( /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(value, "#")) {
                        integer = javaemul.internal.IntegerHelper.parseInt(value.substring(1), 16);
                    }
                    else if ( /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(value, "0x")) {
                        integer = javaemul.internal.IntegerHelper.parseInt(value.substring(2), 16);
                    }
                    else if (value.indexOf(',') !== -1) {
                        const tokens = Thinlet.getTokens(value, [' ', '\r', '\n', '\t', ',']);
                        integer = -16777216 | ((javaemul.internal.IntegerHelper.parseInt(tokens.elementAt(0)) & 255) << 16) | ((javaemul.internal.IntegerHelper.parseInt(tokens.elementAt(1)) & 255) << 8) | (javaemul.internal.IntegerHelper.parseInt(tokens.elementAt(2)) & 255);
                    }
                    else {
                        try {
                            integer = javaemul.internal.IntegerHelper.parseInt(value);
                        }
                        catch (e) {
                            const prosent = javaemul.internal.IntegerHelper.parseInt(value.substring(0, value.length - 1));
                            const unit = javaemul.internal.CharacterHelper.toLowerCase(value.charAt(value.length - 1));
                            if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(unit) == 'w'.charCodeAt(0)) {
                                integer = ((((this.width * prosent) / 100 | 0)) | 0);
                            }
                            else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(unit) == 'h'.charCodeAt(0)) {
                                integer = ((((this.height * prosent) / 100 | 0)) | 0);
                            }
                            else
                                throw new java.lang.RuntimeException();
                        }
                    }
                    Thinlet.set(component, key, new Number(integer));
                }
                else if ("icon" === definition[0]) {
                    Thinlet.set(component, key, this.getIcon$java_lang_String(value));
                }
                else if (("method" === definition[0]) || ("component" === definition[0])) {
                    if (lasts == null) {
                        lasts = (new java.util.Vector());
                    }
                    lasts.addElement(component);
                    lasts.addElement(definition);
                    lasts.addElement(value);
                }
                else if ("property" === definition[0]) {
                    const tokens = Thinlet.getTokens(value, [';']);
                    for (let i = 0; i < tokens.size(); i++) {
                        {
                            const token = tokens.elementAt(i);
                            const equals = token.indexOf('=');
                            if (equals === -1) {
                                throw new java.lang.IllegalArgumentException(token);
                            }
                            this.putProperty(component, new String(token.substring(0, equals)), new String(token.substring(equals + 1)));
                        }
                        ;
                    }
                }
                else if ("font" === definition[0]) {
                    let name = null;
                    let bold = false;
                    let italic = false;
                    let size = 0;
                    const tokens = Thinlet.getTokens(value, [' ', '\t', '\n', '\r', '\f']);
                    for (let i = 0; i < tokens.size(); i++) {
                        {
                            const token = tokens.elementAt(i);
                            if ( /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))("bold", token)) {
                                bold = true;
                            }
                            else if ( /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))("italic", token)) {
                                italic = true;
                            }
                            else {
                                try {
                                    size = javaemul.internal.IntegerHelper.parseInt(token);
                                }
                                catch (nfe) {
                                    name = (name == null) ? new String(token) : (name + " " + token);
                                }
                            }
                        }
                        ;
                    }
                    let f = null;
                    if (size === 0) {
                        size = this.font.getHeight();
                    }
                    if (name != null) {
                        name = name + " " + size + "Px" + (bold ? "bold" : "");
                        f = new org.shikhar.Font(name, this.ctx);
                        Thinlet.set(component, key, f);
                    }
                }
                else if ("keystroke" === definition[0]) {
                    this.setKeystrokeImpl(component, key, value);
                }
                else if ("bean" === definition[0]) {
                    throw new java.lang.RuntimeException("Not implemented");
                }
                else
                    throw new java.lang.IllegalArgumentException(definition[0]);
                return lasts;
            }
            /**
             *
             * @throws java.lang.IllegalArgumentException
             * @param {*} classname
             * @param {string} key
             * @param {string} type
             * @return {java.lang.Object[]}
             */
            static getDefinition(classname, key, type) {
                const currentname = classname;
                while ((classname != null)) {
                    {
                        for (let i = 0; i < Thinlet.dtd_$LI$().length; i += 3) {
                            {
                                if (Thinlet.dtd_$LI$()[i] === classname) {
                                    const attributes = Thinlet.dtd_$LI$()[i + 2];
                                    if (attributes != null) {
                                        for (let j = 0; j < attributes.length; j++) {
                                            {
                                                if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(attributes[j][1], key)) {
                                                    if ((type != null) && (type !== attributes[j][0])) {
                                                        throw new java.lang.IllegalArgumentException(attributes[j][0].toString());
                                                    }
                                                    return attributes[j];
                                                }
                                            }
                                            ;
                                        }
                                    }
                                    classname = Thinlet.dtd_$LI$()[i + 1];
                                    break;
                                }
                            }
                            ;
                        }
                    }
                }
                ;
                throw new java.lang.IllegalArgumentException("unknown " + key + " " + type + " for " + currentname);
            }
            setString$java_lang_Object$java_lang_String$java_lang_String(component, key, value) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "string");
                if (this.setString$java_lang_Object$java_lang_String$java_lang_String$java_lang_String(component, definition[1], value, definition[3])) {
                    this.update(component, definition[2]);
                }
            }
            getString$java_lang_Object$java_lang_String(component, key) {
                return Thinlet.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "string");
            }
            setChoice$java_lang_Object$java_lang_String$java_lang_String(component, key, value) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "choice");
                const values = definition[3];
                if (this.setChoice$java_lang_Object$java_lang_String$java_lang_String$java_lang_String_A$java_lang_String(component, definition[1], value, values, values[0])) {
                    this.update(component, definition[2]);
                }
            }
            /**
             * Gets the property value of the given component by the property key
             * @param {*} component
             * @param {string} key
             * @return {string}
             */
            getChoice(component, key) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "choice");
                return this.getString$java_lang_Object$java_lang_String$java_lang_String(component, definition[1], definition[3][0]);
            }
            setBoolean$java_lang_Object$java_lang_String$boolean(component, key, value) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "boolean");
                if (this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(component, definition[1], value, (definition[3] === javaemul.internal.BooleanHelper.TRUE))) {
                    this.update(component, definition[2]);
                }
            }
            getBoolean$java_lang_Object$java_lang_String(component, key) {
                return Thinlet.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "boolean") === javaemul.internal.BooleanHelper.TRUE;
            }
            setInteger$java_lang_Object$java_lang_String$int(component, key, value) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "integer");
                if (this.setInteger$java_lang_Object$java_lang_String$int$int(component, definition[1], value, /* intValue */ (definition[3] | 0))) {
                    this.update(component, definition[2]);
                }
            }
            getInteger$java_lang_Object$java_lang_String(component, key) {
                return /* intValue */ (Thinlet.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "integer") | 0);
            }
            /**
             * Sets the given property pair (key and value) for the component
             * @param {*} component
             * @param {string} key
             * @param {org.shikhar.AWTImage} icon
             */
            setIcon(component, key, icon) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "icon");
                if (Thinlet.set(component, definition[1], icon)) {
                    this.update(component, definition[2]);
                }
            }
            getIcon$java_lang_Object$java_lang_String(component, key) {
                return Thinlet.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "icon");
            }
            setKeystroke(component, key, value) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "keystroke");
                this.setKeystrokeImpl(component, definition[1], value);
                this.update(component, definition[2]);
            }
            setFont$java_lang_Object$org_shikhar_Font(component, font) {
                this.setFont$java_lang_Object$java_lang_String$org_shikhar_Font(component, "font", font);
            }
            setFont$java_lang_Object$java_lang_String$org_shikhar_Font(component, key, font) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "font");
                if (Thinlet.set(component, definition[1], font)) {
                    this.update(component, definition[2]);
                }
            }
            /**
             * Set custom font on a component
             *
             * @param {*} component
             * component to use the custom font
             * @param {org.shikhar.Font} font
             * custom font to use, or null to reset component to use default
             * font
             * @param {string} key
             */
            setFont(component, key, font) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((font != null && font instanceof org.shikhar.Font) || font === null)) {
                    return this.setFont$java_lang_Object$java_lang_String$org_shikhar_Font(component, key, font);
                }
                else if (((component != null) || component === null) && ((key != null && key instanceof org.shikhar.Font) || key === null) && font === undefined) {
                    return this.setFont$java_lang_Object$org_shikhar_Font(component, key);
                }
                else if (((component != null && component instanceof org.shikhar.Font) || component === null) && key === undefined && font === undefined) {
                    return this.setFont$org_shikhar_Font(component);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Get custom font of a component.
             *
             * @param {*} component
             * a component
             * @param {string} key
             * the identifier of the parameter, e.g. "font"
             * @return {org.shikhar.Font} may return null if the default font is used
             */
            getFont(component, key) {
                return Thinlet.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "font");
            }
            /**
             * Set the AWT component for the given (currently <i>bean</i>) widget
             *
             * @param {*} component
             * a <i>bean</i> widget
             * @param {string} key
             * the identifier of the parameter
             * @param bean
             * an AWT component, or null
             * @param {string} value
             */
            setKeystrokeImpl(component, key, value) {
                let keystroke = null;
                if (value != null) {
                    let token = value;
                    try {
                        let keycode = 0;
                        let modifiers = 0;
                        const tokens = Thinlet.getTokens(value, [' ', '\r', '\n', '\t', '+']);
                        for (let i = 0; i < tokens.size(); i++) {
                            {
                                token = tokens.elementAt(i).toUpperCase();
                                try {
                                    modifiers = modifiers | org.shikhar.InputEvent.getField(token + "_MASK");
                                }
                                catch (exc) {
                                    keycode = org.shikhar.AWTKeyEvent.getField("VK_" + token);
                                }
                            }
                            ;
                        }
                        keystroke = new Number(((n => n < 0 ? Math.ceil(n) : Math.floor(n))(modifiers)) << 32 | keycode);
                    }
                    catch (exc) {
                        throw new java.lang.IllegalArgumentException(token);
                    }
                }
                Thinlet.set(component, key, keystroke);
            }
            /**
             *
             * Method which replaces the StringTokenizer
             *
             * @param {string} value
             * @param {char[]} breaks
             * @return
             * @return {java.util.Vector}
             */
            static getTokens(value, breaks) {
                const vector = (new java.util.Vector());
                const buffer = new java.lang.StringBuffer();
                scan: for (let i = 0; i < value.length; i++) {
                    {
                        const next = value.charAt(i);
                        for (let k = 0; k < breaks.length; k++) {
                            {
                                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(next) == (c => c.charCodeAt == null ? c : c.charCodeAt(0))(breaks[k])) {
                                    if (buffer.length() > 0) {
                                        vector.addElement(buffer.toString());
                                        buffer.setLength(0);
                                    }
                                    continue scan;
                                }
                            }
                            ;
                        }
                        buffer.append(next);
                    }
                    ;
                }
                if (buffer.length() > 0) {
                    vector.addElement(buffer.toString());
                }
                return vector;
            }
            getWidget(component, key) {
                if ("popupmenu" === key) {
                    return Thinlet.get$java_lang_Object$java_lang_Object(component, "popupmenu");
                }
                else if ("header" === key) {
                    return Thinlet.get$java_lang_Object$java_lang_Object(component, "header");
                }
                else
                    throw new java.lang.IllegalArgumentException(key);
            }
            static get$java_lang_Object$java_lang_String$java_lang_String(component, key, type) {
                const definition = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, type);
                const value = Thinlet.get$java_lang_Object$java_lang_Object(component, definition[1]);
                return (value != null) ? value : definition[3];
            }
            static get(component, key, type) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof type === 'string') || type === null)) {
                    return org.shikhar.Thinlet.get$java_lang_Object$java_lang_String$java_lang_String(component, key, type);
                }
                else if (((component != null) || component === null) && ((key != null) || key === null) && type === undefined) {
                    return org.shikhar.Thinlet.get$java_lang_Object$java_lang_Object(component, key);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Sets a new event handler method for a component
             *
             * @param {*} component
             * the target component
             * @param {string} key
             * the key name of the parameter (e.g. <i>action</i>)
             * @param {string} value
             * the method name and parameters (e.g. <i>foo(this, this.text,
             * mybutton, mybutton.enabled)</i> for <i>public void foo(Object
             * component, String text, Object mybutton, boolean enabled)</i>)
             * @param {*} root
             * the search starting component for name components in the
             * arguments
             * @param {*} handler
             * the target event handler object including the method
             * @throws java.lang.IllegalArgumentException
             */
            setMethod(component, key, value, root, handler) {
                key = Thinlet.getDefinition(Thinlet.getComponentClass(component), key, "method")[1];
                const method = this.getMethod(component, value, root, handler);
                Thinlet.set(component, key, method);
            }
            /**
             * @return {java.lang.Object[]} an object list including as follows: - handler object, - method, -
             * list of parameters including 3 values: - ("thinlet", null, null)
             * for the single thinlet component, - (target component, null,
             * null) for named widget as parameter, e.g. mybutton, - (target,
             * parameter name, default value) for a widget's given property,
             * e.g. mylabel.enabled, - ("item", null, null) for an item of the
             * target component as parameter, e.g. tree node, - ("item",
             * parameter name, default value) for the item's given property e.g.
             * list item's text, - ("constant", string object, null) for
             * constant number (int, long, double, float) or string given as
             * 'text'.
             * @param {*} component
             * @param {string} value
             * @param {*} root
             * @param {*} handler
             */
            getMethod(component, value, root, handler) {
                const tokens = Thinlet.getTokens(value, ['(', ',', ' ', '\r', '\n', '\t', ')']);
                const methodname = tokens.elementAt(0);
                const n = tokens.size() - 1;
                const data = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(2 + 3 * n);
                const parametertypes = (n > 0) ? (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(n) : null;
                for (let i = 0; i < n; i++) {
                    {
                        const arg = tokens.elementAt(i + 1);
                        if ("thinlet" === arg) {
                            data[2 + 3 * i] = "thinlet";
                            parametertypes[i] = null;
                        }
                        else if ((arg.length > 1) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(arg.charAt(0)) == '\''.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(arg.charAt(arg.length - 1)) == '\''.charCodeAt(0))) {
                            data[2 + 3 * i] = "constant";
                            data[2 + 3 * i + 1] = new String(arg.substring(1, arg.length - 1));
                        }
                        else {
                            const dot = arg.indexOf('.');
                            const compname = (dot === -1) ? arg : arg.substring(0, dot);
                            let comp = null;
                            let classname = null;
                            if ("item" === compname) {
                                comp = "item";
                                const parentclass = Thinlet.getComponentClass(component);
                                if ("list" === parentclass) {
                                    classname = "item";
                                }
                                else if ("tree" === parentclass) {
                                    classname = "node";
                                }
                                else if ("table" === parentclass) {
                                    classname = "row";
                                }
                                else if ("combobox" === parentclass) {
                                    classname = "choice";
                                }
                                else if ("tabbedpane" === parentclass) {
                                    classname = "tab";
                                }
                                else
                                    throw new java.lang.IllegalArgumentException(parentclass + " has no item");
                            }
                            else if ("this" === compname) {
                                comp = component;
                                classname = Thinlet.getComponentClass(comp);
                            }
                            else if ("null" === compname) {
                                data[2 + 3 * i] = "null";
                            }
                            else if ((comp = this.find$java_lang_Object$java_lang_String(root, compname)) != null) {
                                classname = Thinlet.getComponentClass(comp);
                            }
                            else {
                                try {
                                    if ( /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(arg, "F")) {
                                        data[2 + 3 * i + 1] = javaemul.internal.FloatHelper.valueOf(arg.substring(0, arg.length - 1));
                                    }
                                    else if ( /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(arg, "L")) {
                                        data[2 + 3 * i + 1] = new Number(javaemul.internal.LongHelper.parseLong(arg.substring(0, arg.length - 1)));
                                    }
                                    else if (dot !== -1) {
                                        data[2 + 3 * i + 1] = javaemul.internal.DoubleHelper.valueOf(arg);
                                    }
                                    else {
                                        data[2 + 3 * i + 1] = javaemul.internal.IntegerHelper.valueOf(arg);
                                    }
                                    data[2 + 3 * i] = "constant";
                                    continue;
                                }
                                catch (nfe) {
                                    throw new java.lang.IllegalArgumentException("Unknown " + arg);
                                }
                            }
                            data[2 + 3 * i] = comp;
                            if (dot === -1) {
                            }
                            else {
                                const definition = Thinlet.getDefinition(classname, arg.substring(dot + 1), null);
                                data[2 + 3 * i + 1] = definition[1];
                                data[2 + 3 * i + 2] = definition[3];
                                const fieldclass = definition[0];
                                if ((fieldclass === "string") || (fieldclass === "choice")) {
                                }
                                else if (fieldclass === "boolean") {
                                }
                                else if (fieldclass === "integer") {
                                }
                                else if (fieldclass === "icon") {
                                }
                                else
                                    throw new java.lang.IllegalArgumentException(fieldclass);
                            }
                        }
                    }
                    ;
                }
                data[0] = handler;
                try {
                    data[1] = methodname;
                    return data;
                }
                catch (exc) {
                    throw new java.lang.IllegalArgumentException(value + " " + exc.message);
                }
            }
            update(component, mode) {
                if ("parent" === mode) {
                    component = this.getParent(component);
                    mode = "validate";
                }
                let firstpaint = true;
                let x = 0;
                let y = 0;
                let width = 0;
                let height = 0;
                while ((component != null)) {
                    {
                        if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "visible", true)) {
                            break;
                        }
                        if ("paint" === mode) {
                            const bounds = this.getRectangle(component, "bounds");
                            if (bounds == null) {
                                return;
                            }
                            if (firstpaint) {
                                x = bounds.x;
                                y = bounds.y;
                                width = Math.abs(bounds.width);
                                height = bounds.height;
                                firstpaint = false;
                            }
                            else {
                                x += bounds.x;
                                y += bounds.y;
                            }
                            if (component === this.content) {
                                this.repaint$int$int$int$int(x, y, width, height);
                            }
                        }
                        let parent = this.getParent(component);
                        const classname = Thinlet.getComponentClass(parent);
                        console.log("paint :" + classname);
                        if ("combobox" === classname) {
                            parent = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":combolist");
                        }
                        else if ("menu" === classname) {
                            parent = Thinlet.get$java_lang_Object$java_lang_Object(parent, ":popup");
                        }
                        else if (("paint" === mode) && ("tabbedpane" === classname)) {
                            if (this.getItem(parent, this.getInteger$java_lang_Object$java_lang_String$int(parent, "selected", 0)) !== component) {
                                break;
                            }
                        }
                        if (("layout" === mode) || (("validate" === mode) && (("list" === classname) || ("table" === classname) || ("tree" === classname) || ("dialog" === classname) || (parent === this.content)))) {
                            const bounds = this.getRectangle(parent, "bounds");
                            if (bounds == null) {
                                return;
                            }
                            bounds.width = -1 * Math.abs(bounds.width);
                            mode = "paint";
                        }
                        component = parent;
                    }
                }
                ;
            }
            setString$java_lang_Object$java_lang_String$java_lang_String$java_lang_String(component, key, value, defaultvalue) {
                return Thinlet.set(component, key, value);
            }
            setString(component, key, value, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && ((typeof defaultvalue === 'string') || defaultvalue === null)) {
                    return this.setString$java_lang_Object$java_lang_String$java_lang_String$java_lang_String(component, key, value, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && defaultvalue === undefined) {
                    return this.setString$java_lang_Object$java_lang_String$java_lang_String(component, key, value);
                }
                else
                    throw new Error('invalid overload');
            }
            getString$java_lang_Object$java_lang_String$java_lang_String(component, key, defaultvalue) {
                const value = Thinlet.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : value;
            }
            getString(component, key, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof defaultvalue === 'string') || defaultvalue === null)) {
                    return this.getString$java_lang_Object$java_lang_String$java_lang_String(component, key, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && defaultvalue === undefined) {
                    return this.getString$java_lang_Object$java_lang_String(component, key);
                }
                else
                    throw new Error('invalid overload');
            }
            setChoice$java_lang_Object$java_lang_String$java_lang_String$java_lang_String_A$java_lang_String(component, key, value, values, defaultvalue) {
                if (value == null) {
                    return Thinlet.set(component, key, defaultvalue);
                }
                for (let i = 0; i < values.length; i++) {
                    {
                        if (value === (values[i])) {
                            return Thinlet.set(component, key, values[i]);
                        }
                    }
                    ;
                }
                throw new java.lang.IllegalArgumentException("unknown " + value + " for " + key);
            }
            /**
             *
             * @throws java.lang.IllegalArgumentException
             * @param {*} component
             * @param {string} key
             * @param {string} value
             * @param {java.lang.String[]} values
             * @param {string} defaultvalue
             * @return {boolean}
             */
            setChoice(component, key, value, values, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && ((values != null && values instanceof Array && (values.length == 0 || values[0] == null || (typeof values[0] === 'string'))) || values === null) && ((typeof defaultvalue === 'string') || defaultvalue === null)) {
                    return this.setChoice$java_lang_Object$java_lang_String$java_lang_String$java_lang_String_A$java_lang_String(component, key, value, values, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && values === undefined && defaultvalue === undefined) {
                    return this.setChoice$java_lang_Object$java_lang_String$java_lang_String(component, key, value);
                }
                else
                    throw new Error('invalid overload');
            }
            getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, key, defaultvalue) {
                const value = Thinlet.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : value;
            }
            getIcon(component, key, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((defaultvalue != null && defaultvalue instanceof org.shikhar.AWTImage) || defaultvalue === null)) {
                    return this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, key, defaultvalue);
                }
                else if (((typeof component === 'string') || component === null) && ((typeof key === 'boolean') || key === null) && defaultvalue === undefined) {
                    return this.getIcon$java_lang_String$boolean(component, key);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && defaultvalue === undefined) {
                    return this.getIcon$java_lang_Object$java_lang_String(component, key);
                }
                else if (((typeof component === 'string') || component === null) && key === undefined && defaultvalue === undefined) {
                    return this.getIcon$java_lang_String(component);
                }
                else
                    throw new Error('invalid overload');
            }
            setBoolean$java_lang_Object$java_lang_String$boolean$boolean(component, key, value, defaultvalue) {
                return Thinlet.set(component, key, (value === defaultvalue) ? null : (value ? javaemul.internal.BooleanHelper.TRUE : javaemul.internal.BooleanHelper.FALSE));
            }
            setBoolean(component, key, value, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'boolean') || value === null) && ((typeof defaultvalue === 'boolean') || defaultvalue === null)) {
                    return this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(component, key, value, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'boolean') || value === null) && defaultvalue === undefined) {
                    return this.setBoolean$java_lang_Object$java_lang_String$boolean(component, key, value);
                }
                else
                    throw new Error('invalid overload');
            }
            getBoolean$java_lang_Object$java_lang_String$boolean(component, key, defaultvalue) {
                const value = Thinlet.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : /* booleanValue */ value;
            }
            getBoolean(component, key, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof defaultvalue === 'boolean') || defaultvalue === null)) {
                    return this.getBoolean$java_lang_Object$java_lang_String$boolean(component, key, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && defaultvalue === undefined) {
                    return this.getBoolean$java_lang_Object$java_lang_String(component, key);
                }
                else
                    throw new Error('invalid overload');
            }
            setInteger$java_lang_Object$java_lang_String$int$int(component, key, value, defaultvalue) {
                return Thinlet.set(component, key, (value === defaultvalue) ? null : new Number(value));
            }
            setInteger(component, key, value, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'number') || value === null) && ((typeof defaultvalue === 'number') || defaultvalue === null)) {
                    return this.setInteger$java_lang_Object$java_lang_String$int$int(component, key, value, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'number') || value === null) && defaultvalue === undefined) {
                    return this.setInteger$java_lang_Object$java_lang_String$int(component, key, value);
                }
                else
                    throw new Error('invalid overload');
            }
            getInteger$java_lang_Object$java_lang_String$int(component, key, defaultvalue) {
                const value = Thinlet.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : /* intValue */ (value | 0);
            }
            getInteger(component, key, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof defaultvalue === 'number') || defaultvalue === null)) {
                    return this.getInteger$java_lang_Object$java_lang_String$int(component, key, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && defaultvalue === undefined) {
                    return this.getInteger$java_lang_Object$java_lang_String(component, key);
                }
                else
                    throw new Error('invalid overload');
            }
            setRectangle(component, key, x, y, width, height) {
                const rectangle = this.getRectangle(component, key);
                if (rectangle != null) {
                    rectangle.x = x;
                    rectangle.y = y;
                    rectangle.width = width;
                    rectangle.height = height;
                }
                else {
                    Thinlet.set(component, key, new org.shikhar.Rectangle(x, y, width, height));
                }
            }
            getRectangle(component, key) {
                return Thinlet.get$java_lang_Object$java_lang_Object(component, key);
            }
            getIcon$java_lang_String(path) {
                return this.getIcon$java_lang_String$boolean(path, true);
            }
            getIcon$java_lang_String$boolean(path, preload) {
                if ((path == null) || (path.length === 0)) {
                    return null;
                }
                return Thinlet.getLocalImage(path);
            }
            /**
             * This method is called by the FrameLauncher if the window was closing, or
             * AppletLauncher's destroy method. Overwrite it to e.g. save the
             * application changes.
             *
             * @return {boolean} true to exit, and false to keep the frame and continue the
             * application
             */
            destroy() {
                return true;
            }
            static dtd_$LI$() { Thinlet.__static_initialize(); return Thinlet.dtd; }
            static __static_initializer_1() {
                const integer_1 = new Number(-1);
                const integer0 = new Number(0);
                const integer1 = new Number(1);
                const orientation = ["horizontal", "vertical"];
                const leftcenterright = ["left", "center", "right"];
                const selections = ["single", "interval", "multiple"];
                Thinlet.dtd = ["component", null, [["string", "name", "", null], ["boolean", "enabled", "paint", javaemul.internal.BooleanHelper.TRUE], ["boolean", "visible", "parent", javaemul.internal.BooleanHelper.TRUE], ["boolean", "i18n", "validate", javaemul.internal.BooleanHelper.FALSE], ["boolean", "interactionState", "validate", javaemul.internal.BooleanHelper.FALSE], ["boolean", "transparent", "validate", javaemul.internal.BooleanHelper.FALSE], ["boolean", "styled", "validate", javaemul.internal.BooleanHelper.FALSE], ["string", "tooltip", "", null], ["font", "font", "validate", null], ["integer", "foreground", "paint", integer0], ["integer", "background", "paint", integer0], ["integer", "width", "validate", integer0], ["integer", "height", "validate", integer0], ["integer", "colspan", "validate", integer1], ["integer", "rowspan", "validate", integer1], ["integer", "weightx", "validate", integer0], ["integer", "weighty", "validate", integer0], ["choice", "halign", "validate", ["fill", "center", "left", "right"]], ["choice", "valign", "validate", ["fill", "center", "top", "bottom"]], ["property", "property", "", null], ["method", "init", "", null]], "label", "component", [["string", "text", "validate", null], ["icon", "icon", "validate", null], ["icon", "hicon", "validate", null], ["boolean", "i18n", "validate", javaemul.internal.BooleanHelper.FALSE], ["choice", "alignment", "validate", leftcenterright], ["integer", "mnemonic", "paint", integer_1], ["component", "for", "", null]], "button", "label", [["choice", "alignment", "validate", ["center", "left", "right"]], ["method", "action", "", null], ["choice", "type", "", ["normal", "default", "cancel", "link"]]], "checkbox", "label", [["boolean", "selected", "paint", javaemul.internal.BooleanHelper.FALSE], ["string", "group", "paint", null], ["method", "action", "", null]], "togglebutton", "checkbox", null, "combobox", "textfield", [["icon", "icon", "validate", null], ["integer", "selected", "layout", integer_1]], "choice", null, [["string", "name", "", null], ["boolean", "enabled", "paint", javaemul.internal.BooleanHelper.TRUE], ["boolean", "i18n", "validate", javaemul.internal.BooleanHelper.FALSE], ["string", "text", "", null], ["icon", "icon", "", null], ["choice", "alignment", "", leftcenterright], ["string", "tooltip", "", null], ["font", "font", "validate", null], ["integer", "foreground", "paint", integer0], ["integer", "background", "paint", integer0], ["property", "property", "", null], ["boolean", "styled", "validate", javaemul.internal.BooleanHelper.FALSE]], "textfield", "component", [["string", "text", "layout", ""], ["integer", "columns", "validate", integer0], ["boolean", "editable", "paint", javaemul.internal.BooleanHelper.TRUE], ["boolean", "i18n", "validate", javaemul.internal.BooleanHelper.FALSE], ["integer", "start", "layout", integer0], ["integer", "end", "layout", integer0], ["method", "action", "", null], ["method", "insert", "", null], ["method", "remove", "", null], ["method", "caret", "", null], ["method", "perform", "", null]], "passwordfield", "textfield", null, "textarea", "textfield", [["integer", "rows", "validate", integer0], ["boolean", "border", "validate", javaemul.internal.BooleanHelper.TRUE], ["boolean", "wrap", "layout", javaemul.internal.BooleanHelper.FALSE]], "tabbedpane", "component", [["choice", "placement", "validate", ["top", "left", "bottom", "right", "stacked"]], ["integer", "selected", "paint", integer0], ["method", "action", "", null]], "tab", "choice", [["integer", "mnemonic", "paint", integer_1]], "panel", "component", [["integer", "columns", "validate", integer0], ["integer", "top", "validate", integer0], ["integer", "left", "validate", integer0], ["integer", "bottom", "validate", integer0], ["integer", "right", "validate", integer0], ["integer", "gap", "validate", integer0], ["string", "text", "validate", null], ["icon", "icon", "validate", null], ["boolean", "i18n", "validate", javaemul.internal.BooleanHelper.FALSE], ["boolean", "border", "validate", javaemul.internal.BooleanHelper.FALSE], ["boolean", "scrollable", "validate", javaemul.internal.BooleanHelper.FALSE]], "desktop", "component", null, "dialog", "panel", [["string", "text", "", null], ["icon", "icon", "", null], ["method", "close", "", null], ["boolean", "modal", "", javaemul.internal.BooleanHelper.FALSE]], "spinbox", "textfield", [["integer", "minimum", "paint", integer0], ["integer", "maximum", "paint", new Number(100)], ["integer", "step", "paint", integer1], ["integer", "value", "paint", integer0]], "progressbar", "component", [["choice", "orientation", "validate", orientation], ["integer", "minimum", "paint", integer0], ["integer", "maximum", "paint", new Number(100)], ["integer", "value", "paint", integer0]], "slider", "progressbar", [["integer", "unit", "", new Number(5)], ["integer", "block", "", new Number(25)], ["method", "action", "", null]], "splitpane", "component", [["choice", "orientation", "validate", orientation], ["integer", "divider", "layout", integer_1]], "list", "component", [["choice", "selection", "paint", selections], ["method", "action", "", null], ["method", "perform", "", null], ["boolean", "line", "validate", javaemul.internal.BooleanHelper.TRUE]], "item", "choice", [["boolean", "selected", "", javaemul.internal.BooleanHelper.FALSE]], "table", "list", [], "header", null, null, "column", "choice", [["integer", "width", "", new Number(80)], ["choice", "sort", "", ["none", "ascent", "descent"]]], "row", null, [["boolean", "selected", "", javaemul.internal.BooleanHelper.FALSE]], "cell", "choice", null, "tree", "list", [["method", "expand", "", null], ["method", "collapse", "", null]], "node", "choice", [["boolean", "selected", "", javaemul.internal.BooleanHelper.FALSE], ["boolean", "expanded", "", javaemul.internal.BooleanHelper.TRUE]], "separator", "component", null, "menubar", "component", [["choice", "placement", "validate", ["top", "bottom"]]], "menu", "choice", [["integer", "mnemonic", "paint", integer_1]], "menuitem", "choice", [["keystroke", "accelerator", "", null], ["method", "action", "", null], ["integer", "mnemonic", "paint", integer_1]], "checkboxmenuitem", "menuitem", [["boolean", "selected", "paint", javaemul.internal.BooleanHelper.FALSE], ["string", "group", "paint", null]], "popupmenu", "component", null, "bean", "component", [["bean", "bean", "", null]]];
            }
            getInverseShadow() {
                return this.inverseShadow;
            }
            setInverseShadow(inverseShadow) {
                this.inverseShadow = inverseShadow;
            }
            installListeners() {
                this.canvas.addEventListener("mousedown", (event) => {
                    this.onInputDeviceDown(event, false);
                    return null;
                }, true);
                this.canvas.addEventListener("mousemove", (event) => {
                    this.onInputDeviceMove(event, false);
                    return null;
                }, true);
                this.canvas.addEventListener("mouseup", (event) => {
                    this.onInputDeviceUp(event, false);
                    return null;
                }, true);
                this.canvas.addEventListener("touchstart", (event) => {
                    this.onInputDeviceDown(event, true);
                    return null;
                }, true);
                this.canvas.addEventListener("touchmove", (event) => {
                    this.onInputDeviceMove(event, true);
                    return null;
                }, true);
                this.canvas.addEventListener("touchend", (event) => {
                    this.onInputDeviceUp(event, true);
                    return null;
                }, true);
                window.addEventListener("keydown", (event) => {
                    this.onInputDeviceKeyDown(event);
                    return null;
                }, true);
                window.addEventListener("keyup", (event) => {
                    this.onInputDeviceKeyUp(event);
                    return null;
                }, true);
            }
            onInputDeviceKeyDown(event) {
                event.preventDefault();
                this.keyPressed((event.keyCode | 0), (event.key.charAt(0)).charCodeAt(0));
            }
            onInputDeviceKeyUp(event) {
                event.preventDefault();
                this.keyReleased((event.keyCode | 0), event.key);
            }
            onInputDeviceDown(event, touchDevice) {
                if (touchDevice) {
                    for (let i = 0; i < event.changedTouches.length; i++) {
                        {
                            const t = event.changedTouches.item(i);
                            this.pointerPressed(t.pageX, t.pageY);
                        }
                        ;
                    }
                }
                else {
                    const x = (event.pageX | 0);
                    const y = (event.pageY | 0);
                    this.pointerPressed(x, y);
                }
            }
            onInputDeviceUp(event, touchDevice) {
                if (touchDevice) {
                    for (let i = 0; i < event.changedTouches.length; i++) {
                        {
                            const t = event.changedTouches.item(i);
                            this.pointerReleased(t.pageX, t.pageY);
                        }
                        ;
                    }
                }
                else {
                    const x = (event.pageX | 0);
                    const y = (event.pageY | 0);
                    this.pointerReleased(x, y);
                }
            }
            onInputDeviceMove(event, touchDevice) {
                if (touchDevice) {
                    for (let i = 0; i < event.changedTouches.length; i++) {
                        {
                            const t = event.changedTouches.item(i);
                            this.pointerDragged(t.pageX, t.pageY, 0);
                        }
                        ;
                    }
                }
                else {
                    const x = (event.pageX | 0);
                    const y = (event.pageY | 0);
                    this.pointerDragged(x, y, event.buttons);
                }
            }
            /**
             *
             * Key press key pre-processing.
             *
             * TODO abc type field in the upper right corner, mobile style.
             * @param {number} keyCode
             * @param {number} keyChar
             */
            keyPressed(keyCode, keyChar) {
                if ((this.popupowner != null) || (this.focusowner != null)) {
                    this.hideTip();
                }
                if (keyCode !== 0) {
                    const event = new org.shikhar.AWTKeyEvent(org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$(), 0);
                    event.setKey(keyCode);
                    event.setKeyChar(keyChar);
                    this.processEvent(event);
                }
                this.paint$();
            }
            keyReleased(keyCode, keyChar) {
                if ((this.popupowner != null) || (this.focusowner != null)) {
                    this.hideTip();
                    const keychar = 0;
                    const key = 0;
                    if (key !== 0) {
                        const event = new org.shikhar.AWTKeyEvent(org.shikhar.AWTKeyEvent.KEY_RELEASED_$LI$(), 0);
                        event.setKey(key);
                        event.setKeyChar(keychar);
                        this.processEvent(event);
                    }
                    this.paint$();
                }
            }
            pointerPressed(x, y) {
                let event = new org.shikhar.AWTMouseEvent(org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), x, y, 0);
                this.processEvent(event);
                event = new org.shikhar.AWTMouseEvent(org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$(), x, y, 0);
                this.processEvent(event);
                event = new org.shikhar.AWTMouseEvent(org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$(), x, y, 0);
                this.processEvent(event);
                this.paint$();
            }
            pointerDragged(x, y, btn) {
                const event = new org.shikhar.AWTMouseEvent(btn === 0 ? org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$() : org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$(), x, y, 0);
                this.processEvent(event);
                this.paint$();
            }
            pointerReleased(x, y) {
                let event = new org.shikhar.AWTMouseEvent(org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$(), x, y, 0);
                this.processEvent(event);
                event = new org.shikhar.AWTMouseEvent(org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$(), x, y, 0);
                this.processEvent(event);
                this.paint$();
            }
            invokeImpl$java_lang_Object$java_lang_String$java_lang_Object_A(component, method, data) {
            }
            invokeImpl(component, method, data) {
                if (((component != null) || component === null) && ((typeof method === 'string') || method === null) && ((data != null && data instanceof Array && (data.length == 0 || data[0] == null || (data[0] != null))) || data === null)) {
                    return this.invokeImpl$java_lang_Object$java_lang_String$java_lang_Object_A(component, method, data);
                }
                else if (((component != null) || component === null) && ((method != null) || method === null) && ((data != null) || data === null)) {
                    return this.invokeImpl$java_lang_Object$java_lang_Object$java_lang_Object(component, method, data);
                }
                else
                    throw new Error('invalid overload');
            }
        }
        Thinlet.__static_initialized = false;
        Thinlet.BLUE = 255;
        Thinlet.GREEN = 65280;
        Thinlet.RED = 16711680;
        Thinlet.ALPHA = -16777216;
        Thinlet.CYAN = -16711681;
        Thinlet.WHEEL_MASK = 0;
        Thinlet.MOUSE_WHEEL = 0;
        Thinlet.attentionDelta = 2;
        Thinlet.attentionThickness = 3;
        Thinlet.evm = 0;
        shikhar.Thinlet = Thinlet;
        Thinlet["__class"] = "org.shikhar.Thinlet";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
org.shikhar.Thinlet.__static_initialize();
//# sourceMappingURL=Thinlet.js.map