/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * creates gui without renderer or input manager and hence used only in xml reader to read
         * gui from xml
         * @param {HTMLCanvasElement} component
         * @class
         */
        class Gui {
            constructor(component) {
                if (this.font === undefined) {
                    this.font = null;
                }
                if (this.c_bg === undefined) {
                    this.c_bg = null;
                }
                if (this.c_fg === undefined) {
                    this.c_fg = null;
                }
                if (this.c_border === undefined) {
                    this.c_border = null;
                }
                if (this.c_hover === undefined) {
                    this.c_hover = null;
                }
                if (this.c_press === undefined) {
                    this.c_press = null;
                }
                if (this.c_focus === undefined) {
                    this.c_focus = null;
                }
                if (this.c_disable === undefined) {
                    this.c_disable = null;
                }
                if (this.c_shadow === undefined) {
                    this.c_shadow = null;
                }
                if (this.c_text_fg === undefined) {
                    this.c_text_fg = null;
                }
                if (this.c_text_bg === undefined) {
                    this.c_text_bg = null;
                }
                if (this.c_select_bg === undefined) {
                    this.c_select_bg = null;
                }
                if (this.c_select_fg === undefined) {
                    this.c_select_fg = null;
                }
                if (this.c_tooltip_bg === undefined) {
                    this.c_tooltip_bg = null;
                }
                if (this.c_tooltip_fg === undefined) {
                    this.c_tooltip_fg = null;
                }
                if (this.c_menu_bg === undefined) {
                    this.c_menu_bg = null;
                }
                if (this.c_menu_fg === undefined) {
                    this.c_menu_fg = null;
                }
                this.c_bgimgae_tint = new org.shikhar.Color(255, 0, 0, 1);
                this.c_icon_tint = new org.shikhar.Color(255, 0, 0, 1);
                if (this.c_resizeborder === undefined) {
                    this.c_resizeborder = null;
                }
                if (this.c_window_border === undefined) {
                    this.c_window_border = null;
                }
                if (this.c_ctrl === undefined) {
                    this.c_ctrl = null;
                }
                if (this.col_gradient1 === undefined) {
                    this.col_gradient1 = null;
                }
                if (this.col_gradient2 === undefined) {
                    this.col_gradient2 = null;
                }
                this.c_overlay = new org.shikhar.Color(0, 0, 0, 50);
                this.block = 12;
                this.margin_1 = 1;
                if (this.clipboard === undefined) {
                    this.clipboard = null;
                }
                this.allI18n = false;
                this.findprefix = "";
                if (this.findtime === undefined) {
                    this.findtime = 0;
                }
                this.content = Gui.createImpl("desktop");
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
                this.g = null;
                this.input = null;
                this.width = 300;
                this.height = 200;
                if (this.awtComponent === undefined) {
                    this.awtComponent = null;
                }
                this.cursor_timer = 0;
                this.CURSOR_DELAY = 20;
                if (this.defaultHandler === undefined) {
                    this.defaultHandler = null;
                }
                this.beans = (new java.util.ArrayList());
                if (this.activeTimer === undefined) {
                    this.activeTimer = null;
                }
                if (this.curTime === undefined) {
                    this.curTime = 0;
                }
                if (this.deltaTime === undefined) {
                    this.deltaTime = 0;
                }
                this.flicker = false;
                this.flingeVel = new org.shikhar.Vector2();
                this.damping = 0.8;
                this.draggingComponent = false;
                if (this.defaultStyle === undefined) {
                    this.defaultStyle = null;
                }
                this.awtComponent = component;
                this.g = new org.shikhar.Graphics(component);
                this.input = new org.shikhar.Input(this, component);
                this.activeTimer = new org.shikhar.GuiTimer();
                this.setDefaultFont(new org.shikhar.Font("15px Arial", this.g.context));
                this.setColors$int_A(Gui.DEFAULT_THEME_$LI$());
                this.reset();
            }
            static __static_initialize() { if (!Gui.__static_initialized) {
                Gui.__static_initialized = true;
                Gui.__static_initializer_0();
            } }
            static themeColors_$LI$() { Gui.__static_initialize(); return Gui.themeColors; }
            static DRAG_ENTERED_$LI$() { Gui.__static_initialize(); if (Gui.DRAG_ENTERED == null) {
                Gui.DRAG_ENTERED = org.shikhar.AWTEvent.RESERVED_ID_MAX_$LI$() + 1;
            } return Gui.DRAG_ENTERED; }
            static DRAG_EXITED_$LI$() { Gui.__static_initialize(); if (Gui.DRAG_EXITED == null) {
                Gui.DRAG_EXITED = org.shikhar.AWTEvent.RESERVED_ID_MAX_$LI$() + 2;
            } return Gui.DRAG_EXITED; }
            static fboId_$LI$() { Gui.__static_initialize(); return Gui.fboId; }
            static fboMsaaId_$LI$() { Gui.__static_initialize(); return Gui.fboMsaaId; }
            static textureId_$LI$() { Gui.__static_initialize(); return Gui.textureId; }
            static rboId_$LI$() { Gui.__static_initialize(); return Gui.rboId; }
            static rboColorId_$LI$() { Gui.__static_initialize(); return Gui.rboColorId; }
            static rboStencilId_$LI$() { Gui.__static_initialize(); return Gui.rboStencilId; }
            getRenderer() {
                return this.g;
            }
            getInput() {
                return this.input;
            }
            /**
             * Sets default  gui event handler
             * if no method is explicitely defined on widget event, it calls handlers actionPerformedMethod
             * whener widget event occurs
             * @param {*} handler
             */
            setDefauthandler(handler) {
                this.defaultHandler = handler;
            }
            /**
             * removes all widgets and adds a fresh empty desktop
             */
            reset() {
                this.content = Gui.createImpl("desktop");
                this.beans.clear();
                this.width = ((this.awtComponent.width / this.g.PIXEL_SCALE_FACTOR) | 0);
                this.height = ((this.awtComponent.height / this.g.PIXEL_SCALE_FACTOR) | 0);
                this.setRectangle(this.content, "bounds", 0, 0, this.width, this.height);
                this.setViewPort(this.width, this.height);
            }
            getDefaultBGColor() {
                return this.c_bg;
            }
            getDefaultFGColor() {
                return this.c_text_fg;
            }
            getDefaultDisabledColor() {
                return this.c_disable;
            }
            getDefaultBorderColor() {
                return this.c_border;
            }
            static GRAY_THEME_$LI$() { Gui.__static_initialize(); if (Gui.GRAY_THEME == null) {
                Gui.GRAY_THEME = [-421075201, 255, -252645121, 1347440895, -1330597633, -303038550, -1179010561, -1987470593, -976888321, 976895487, 255, 255, -1145315841];
            } return Gui.GRAY_THEME; }
            static SANDSTONE_THEME_$LI$() { Gui.__static_initialize(); if (Gui.SANDSTONE_THEME == null) {
                Gui.SANDSTONE_THEME = [-286339841, 908853503, -1, -1717999873, -1330604289, -303182849, -859006465, -865730305, -3381505, 908853503, -1, 0, 0];
            } return Gui.SANDSTONE_THEME; }
            static SKY_THEME_$LI$() { Gui.__static_initialize(); if (Gui.SKY_THEME == null) {
                Gui.SKY_THEME = [-252641281, 41215, -1, -2139029505, -1330597633, -303174145, -1330577409, -16776961, -35593985, 41215, 0, 0, 0];
            } return Gui.SKY_THEME; }
            static BLUE_THEME_$LI$() { Gui.__static_initialize(); if (Gui.BLUE_THEME == null) {
                Gui.BLUE_THEME = [1668667135, -1, 2140134911, -689965569, -1666521601, 1717987071, 3381759, -13421569, 1717987071, -1, -1, 0, 0];
            } return Gui.BLUE_THEME; }
            static GREEN_THEME_$LI$() { Gui.__static_initialize(); if (Gui.GREEN_THEME == null) {
                Gui.GREEN_THEME = [-1023448577, 5062911, -268463873, 729023231, -1717986817, -855666518, 1288779707, -2034692519, -36162083, 5062911, 0, 0, 0];
            } return Gui.GREEN_THEME; }
            static BLACK_THEME_$LI$() { Gui.__static_initialize(); if (Gui.BLACK_THEME == null) {
                Gui.BLACK_THEME = [437725615, -1198337, 1718053300, -913948673, -1666538497, 1717987021, 758330286, -928513, -6746369, -1145324545, -1, -1, 1349538047];
            } return Gui.BLACK_THEME; }
            static DARK_THEME_$LI$() { Gui.__static_initialize(); if (Gui.DARK_THEME == null) {
                Gui.DARK_THEME = [1044333004, -1145129217, 1077952700, -1061109629, -1666538548, 1717987021, 791619788, -928564, -6746534, -1145324596, -1, -1, 1349538047];
            } return Gui.DARK_THEME; }
            static DEFAULT_THEME_$LI$() { Gui.__static_initialize(); if (Gui.DEFAULT_THEME == null) {
                Gui.DEFAULT_THEME = /* clone */ ((o) => { if (o.clone != undefined) {
                    return o.clone();
                }
                else {
                    let clone = Object.create(o);
                    for (let p in o) {
                        if (o.hasOwnProperty(p))
                            clone[p] = o[p];
                    }
                    return clone;
                } })(Gui.DARK_THEME_$LI$());
            } return Gui.DEFAULT_THEME; }
            getColors() {
                return [this.c_bg, this.c_text_fg, this.c_text_bg, this.c_border, this.c_disable, this.c_hover, this.c_press, this.c_focus, this.c_select_bg, this.c_icon_tint];
            }
            setColors$int$int$int$int$int$int$int$int$int$int(background, text, textbackground, border, disable, hover, press, focus, select, iconTintColor) {
                this.c_bg = new org.shikhar.Color(background);
                this.c_text_fg = new org.shikhar.Color(text);
                this.c_fg = this.c_text_fg;
                this.c_text_bg = new org.shikhar.Color(textbackground);
                this.c_border = new org.shikhar.Color(border);
                this.c_disable = new org.shikhar.Color(disable);
                this.c_hover = new org.shikhar.Color(hover);
                this.c_press = new org.shikhar.Color(press);
                this.c_focus = new org.shikhar.Color(focus);
                this.c_ctrl = org.shikhar.Color.blendColors(this.c_bg, this.c_press, 0.5);
                this.c_select_bg = new org.shikhar.Color(select);
                this.c_select_fg = this.c_select_bg.brighter();
                this.c_tooltip_bg = this.c_hover;
                this.c_tooltip_fg = this.c_text_fg;
                this.c_menu_bg = org.shikhar.Color.blendColors(this.c_bg, this.c_text_bg, 0.5);
                this.c_menu_fg = this.c_text_fg;
                this.c_resizeborder = this.c_border.brighter();
                this.c_window_border = this.c_border.darker();
                const r1 = this.c_bg.r;
                const r2 = this.c_press.r;
                const g1 = this.c_bg.g;
                const g2 = this.c_press.g;
                const b1 = this.c_bg.b;
                const b2 = this.c_press.b;
                const a1 = Math.fround((Math.fround(this.c_bg.a + 1)) / 2);
                const a2 = Math.fround((Math.fround(this.c_press.a + 1)) / 2);
                this.col_gradient1 = new org.shikhar.Color(this.c_bg.r, this.c_bg.g, this.c_bg.b, Math.fround((Math.fround(this.c_bg.a + 1)) / 2));
                this.col_gradient2 = new org.shikhar.Color(this.c_press.r, this.c_press.g, this.c_press.b, Math.fround((Math.fround(this.c_press.a + 1)) / 2));
                this.c_icon_tint = new org.shikhar.Color(iconTintColor);
                this.c_shadow = this.c_press.darker();
                Gui.themeColors = this.getColors();
                Gui.repaintNeeded = true;
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
             * the background of text components, and lists (<i>white</i> by
             * default)
             * @param {number} border
             * for outer in inner borders of enabled components
             * (<i>#909090</i> by default)
             * @param {number} disable
             * for text, border, arrow color in disabled components
             * (<i>#b0b0b0</i> by default)
             * @param {number} hover
             * indicates that the mouse is inside a button area
             * (<i>#ededed</i> by default)
             * @param {number} press
             * for pressed buttons, gradient image is calculated using the
             * background and this press color (<i>#b9b9b9</i> by default)
             * @param {number} focus
             * for text caret and rectagle color marking the focus owner
             * (<i>#89899a</i> by default)
             * @param {number} select
             * used as the background of selected text, and list items, and
             * in slider (<i>#c5c5dd</i> by default)
             * @param resizeBorder
             * used as color for the border decorator for resizable dialogs.
             * (<i>DEFAULT_RESIZE_BORDER_COLOR</i> by default)
             * @param {number} iconTintColor
             * used as color for tinting images.
             * (<i>white</i> by default)
             */
            setColors(background, text, textbackground, border, disable, hover, press, focus, select, iconTintColor) {
                if (((typeof background === 'number') || background === null) && ((typeof text === 'number') || text === null) && ((typeof textbackground === 'number') || textbackground === null) && ((typeof border === 'number') || border === null) && ((typeof disable === 'number') || disable === null) && ((typeof hover === 'number') || hover === null) && ((typeof press === 'number') || press === null) && ((typeof focus === 'number') || focus === null) && ((typeof select === 'number') || select === null) && ((typeof iconTintColor === 'number') || iconTintColor === null)) {
                    return this.setColors$int$int$int$int$int$int$int$int$int$int(background, text, textbackground, border, disable, hover, press, focus, select, iconTintColor);
                }
                else if (((typeof background === 'number') || background === null) && ((typeof text === 'number') || text === null) && ((typeof textbackground === 'number') || textbackground === null) && ((typeof border === 'number') || border === null) && ((typeof disable === 'number') || disable === null) && ((typeof hover === 'number') || hover === null) && ((typeof press === 'number') || press === null) && ((typeof focus === 'number') || focus === null) && ((typeof select === 'number') || select === null) && iconTintColor === undefined) {
                    return this.setColors$int$int$int$int$int$int$int$int$int(background, text, textbackground, border, disable, hover, press, focus, select);
                }
                else if (((background != null && background instanceof Array && (background.length == 0 || background[0] == null || (typeof background[0] === 'number'))) || background === null) && text === undefined && textbackground === undefined && border === undefined && disable === undefined && hover === undefined && press === undefined && focus === undefined && select === undefined && iconTintColor === undefined) {
                    return this.setColors$int_A(background);
                }
                else
                    throw new Error('invalid overload');
            }
            setColors$int_A(c) {
                this.setColors$int$int$int$int$int$int$int$int$int$int(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9]);
            }
            setColors$int$int$int$int$int$int$int$int$int(background, text, textbackground, border, disable, hover, press, focus, select) {
                this.setColors$int$int$int$int$int$int$int$int$int$int(background, text, textbackground, border, disable, hover, press, focus, select, text);
            }
            resetCanvasWidget(comp) {
                if (Gui.getComponentClass(comp) === "bean" && (this.getComponent(comp, "bean") != null && this.getComponent(comp, "bean") instanceof org.shikhar.Canvas)) {
                    (this.getComponent(comp, "bean")).reset();
                    return;
                }
                for (comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        this.resetCanvasWidget(comp);
                    }
                    ;
                }
            }
            /**
             * Disposes resources created by component, so must be called in opengl thread
             * @param {*} comp
             */
            disposeComponent(comp) {
                if (Gui.getComponentClass(comp) === "bean" && (this.getComponent(comp, "bean") != null && this.getComponent(comp, "bean") instanceof org.shikhar.Canvas)) {
                    (this.getComponent(comp, "bean")).dispose(this.g);
                    return;
                }
                for (comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        this.disposeComponent(comp);
                    }
                    ;
                }
                Gui.repaintNeeded = true;
            }
            /**
             * Searches component and children and adds to list of beans if found any
             * @param {*} comp
             * @private
             */
            addBeanToList(comp) {
                if (Gui.getComponentClass(comp) === "bean") {
                    const bean = this.getComponent(comp, "bean");
                    if (bean != null && !this.beans.contains(bean)) {
                        this.beans.add(bean);
                    }
                    return;
                }
                for (comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        this.addBeanToList(comp);
                    }
                    ;
                }
            }
            /**
             * Searches component and children and removes from list of beans if found any
             * @param {*} comp
             * @private
             */
            removeBeanFromList(comp) {
                if (Gui.getComponentClass(comp) === "bean") {
                    const bean = this.getComponent(comp, "bean");
                    if (bean != null && this.beans.contains(bean)) {
                        this.beans.remove(bean);
                    }
                    return;
                }
                for (comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        this.removeBeanFromList(comp);
                    }
                    ;
                }
            }
            getViewPortWidth() {
                return this.width;
            }
            getViewPortHeight() {
                return this.height;
            }
            setViewPort(width, height) {
                this.width = width;
                this.height = height;
                if (width > Gui.TEXTURE_WIDTH || height > Gui.TEXTURE_HEIGHT) {
                    height = Math.max(width, Gui.TEXTURE_WIDTH);
                    width = Math.max(height, Gui.TEXTURE_HEIGHT);
                    Gui.TEXTURE_WIDTH = Math.max(Gui.TEXTURE_WIDTH, org.shikhar.MathUtils.nextPowerOfTwo(width));
                    Gui.TEXTURE_HEIGHT = Math.max(Gui.TEXTURE_HEIGHT, org.shikhar.MathUtils.nextPowerOfTwo(height));
                    Gui.invalidate = true;
                    Gui.contextCreated = false;
                }
                this.setRectangle(this.content, "bounds", 0, 0, width, height);
                this.validate(this.content);
                this.closeup();
                if (!this.focusinside) {
                }
                Gui.evm = 0;
                Gui.repaintNeeded = true;
            }
            getPreferredSize$() {
                return this.getPreferredSize$java_lang_Object(this.content);
            }
            renderComp(component) {
                if (this.g == null || component == null)
                    return;
                const c = component.component;
                const p = this.getParentDialog(c);
                if (p != null && this.getBoolean$java_lang_Object$java_lang_String(p, "visible") && Gui.get$java_lang_Object$java_lang_Object(p, ":minimized") == null) {
                    const bounds = this.getAbsoluteRectangle(c, "bounds");
                    if (bounds != null) {
                        const prevClip = this.g.getClipBounds();
                        this.g.translate(bounds.x, bounds.y);
                        const clip = component.clipRect;
                        this.g.setClip(clip.x, clip.y, clip.width, clip.height);
                        component.paint(this.g);
                        this.g.translate(-bounds.x, -bounds.y);
                        this.g.setClip(prevClip.x, prevClip.y, prevClip.width, prevClip.height);
                    }
                    if ((this.tooltipowner != null)) {
                        const r = this.getRectangle(this.tooltipowner, ":tooltipbounds");
                        this.paintRect(r.x, r.y, r.width, r.height, this.c_border, this.c_tooltip_bg, true, true, true, true, true);
                        const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(this.tooltipowner, "tooltip", null);
                        this.g.setColor(this.c_tooltip_fg);
                        this.g.drawString(text, r.x + 2, r.y + this.font.getAscent() + 2);
                    }
                    if (this.popupowner != null) {
                        let popup = Gui.get$java_lang_Object$java_lang_Object(this.popupowner, ":popup");
                        if (popup != null) {
                            this.paint$int$int$int$int$java_lang_Object$boolean(0, 0, this.width, this.height, popup, true);
                        }
                        popup = Gui.get$java_lang_Object$java_lang_Object(this.popupowner, ":combolist");
                        if (popup != null) {
                            this.paint$int$int$int$int$java_lang_Object$boolean(0, 0, this.width, this.height, popup, true);
                        }
                    }
                }
            }
            /**
             * renders gui
             * @param gl
             * @return {boolean}
             */
            render() {
                if (Gui.repaintNeeded || true) {
                    Gui.repaintNeeded = false;
                    this.g.setFont(this.font);
                    this.g.begin(this.width, this.height);
                    this.paint$();
                    this.g.end();
                }
                return true;
            }
            /**
             * Polls input by calling {@link Input#pollInput(org.shikhar.simphy.agui.Input) }
             * if an input source was specified, otherwise it does nothing.
             *
             * <p>If you don't want to use polled input you can easily use a push model
             * for handling input. Just call the following methods:</p><ul>
             * <li>{@link #handleKey(int, int,char, int) } for every keyboard event
             * <li>{@link #handleMouse(int, int, int, int,int) } for every mouse event (buttons or move)
             * <li>{@link #handleMouseWheel(int,int,int) } for any mouse wheel event
             * </ul> These methods (including this one) needs to be called after {@link #updateTime() }
             * @return {boolean}
             */
            handleInput() {
                const handled = false;
                if (handled)
                    this.repaint$java_lang_Object(this.g);
                if (this.popupowner != null || this.insidepart === "modal" || (this.mousepressed != null && !(Gui.getComponentClass(this.mousepressed) === ("desktop")))) {
                    if (this.insidepart === "modal") {
                        this.flicker = false;
                        this.setTimer(90, 7);
                        this.mousepressed = null;
                    }
                    return true;
                }
                if (this.focusowner != null && this.focusowner !== this.content) {
                    return true;
                }
                if ("dialog" === Gui.getComponentClass(this.focusowner) && this.getBoolean$java_lang_Object$java_lang_String(this.focusowner, "modal")) {
                    return true;
                }
                if (handled)
                    this.repaint$java_lang_Object(this.g);
                return handled;
            }
            /**
             * Returns the current UI time in milliseconds.
             * This time is updated via {@link #updateTime() }
             *
             * @return {number} the current UI time in milliseconds.
             */
            getCurrentTime() {
                return this.curTime;
            }
            /**
             * Returns the delta time to the previous frame in milliseconds.
             * This time is updated via {@link #updateTime() }
             *
             * @return {number} the delta time
             */
            getCurrentDeltaTime() {
                return this.deltaTime;
            }
            update$int$boolean(dt_ms, revalidate) {
                this.deltaTime = dt_ms;
                this.updateTimers(dt_ms);
                this.updateWidgets(this.content, revalidate);
                if (this.flingeVel.getMagnitudeSquared() > 1 && this.mouseinside != null) {
                    const handled = false;
                    const port = this.getRectangle(this.mouseinside, ":port");
                    if (port != null) {
                        const view = this.getRectangle(this.mouseinside, ":view");
                        let dx = 0;
                        let dy = 0;
                        dx = (this.flingeVel.x | 0);
                        dy = (this.flingeVel.y | 0);
                        if (dx !== 0) {
                            dx = (dx < 0) ? Math.max(-view.x, dx) : Math.min(dx, view.width - port.width - view.x);
                        }
                        if (dy !== 0) {
                            dy = (dy < 0) ? Math.max(-view.y, dy) : Math.min(dy, view.height - port.height - view.y);
                        }
                        view.x += dx;
                        view.y += dy;
                    }
                    this.flingeVel.multiply(this.damping);
                    Gui.repaintNeeded = true;
                }
                else {
                }
            }
            /**
             * Polls inputs, updates layout and renders the GUI by calls the following method:<ol>
             * <li> {@link #setSize() }
             * <li> {@link #updateTime() }
             * <li> {@link #handleInput() }
             * <li> {@link #handleKeyRepeat() }
             * <li> {@link #handleTooltips() }
             * <li> {@link #updateTimers() }
             * <li> {@link #invokeRunables() }
             * <li> {@link #validateLayout() }
             * <li> {@link #draw() }
             * <li> {@link #setCursor() }
             * </ol>
             *
             * This is the easiest method to use this GUI.
             *
             * <p>When not using this method care must be taken to invoke the methods
             * in the right order. See the javadoc of the individual methods for details.</p>
             * @param
             * @param widget needs to revalidate itself  as something (global variables etc) has changed in this step which may affect widget state
             * @param {number} dt_ms
             * @param {boolean} revalidate
             */
            update(dt_ms, revalidate) {
                if (((typeof dt_ms === 'number') || dt_ms === null) && ((typeof revalidate === 'boolean') || revalidate === null)) {
                    return this.update$int$boolean(dt_ms, revalidate);
                }
                else if (((dt_ms != null) || dt_ms === null) && ((revalidate != null) || revalidate === null)) {
                    return this.update$java_lang_Object$java_lang_Object(dt_ms, revalidate);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * update widgets for this time step
             *
             * @param {*} component
             * @param {boolean} revalidate widget needs to revalidate itself  as something (global variables etc) have changed in this step which may affect widget state
             */
            updateWidgets(component, revalidate) {
                const n = this.getCount(component);
                for (let i = 0; i < n; i++) {
                    {
                        const o = this.getItem(component, i);
                        if (o == null)
                            continue;
                        if (Gui.getComponentClass(o) === ("bean")) {
                            (this.getComponent(o, "bean")).update(this.deltaTime, revalidate);
                        }
                        else if (Gui.getComponentClass(o) === ("slider")) {
                            const timer = this.getProperty(o, "timer");
                            if (timer != null)
                                timer.update(this.deltaTime);
                        }
                        else {
                            this.updateWidgets(o, revalidate);
                        }
                    }
                    ;
                }
            }
            /**
             * Updates all active timers with the delta time computed by {@code updateTime}.
             *
             * <p>This method must be called exactly once after a call to {@code updateTime}.</p>
             *
             * @see #updateTime()
             * @param {number} dt_ms
             */
            updateTimers(dt_ms) {
                this.activeTimer.update(dt_ms);
            }
            onTimerTick(timer) {
                if (timer === this.activeTimer) {
                    if (this.activeTimer.getDelay() === 300 || this.activeTimer.getDelay() === 60) {
                        if (this.processScroll$java_lang_Object$java_lang_Object(this.mousepressed, this.pressedpart)) {
                            this.activeTimer.setDelay(60);
                            this.activeTimer.setContinuous(true);
                            this.activeTimer.reStart();
                        }
                        else {
                            this.activeTimer.stop();
                        }
                    }
                    else if (this.activeTimer.getDelay() === 375 || this.activeTimer.getDelay() === 75) {
                        if (this.processSpin(this.mousepressed, this.pressedpart)) {
                            this.activeTimer.setDelay(75);
                            this.activeTimer.setContinuous(true);
                            this.activeTimer.reStart();
                        }
                        else {
                            this.activeTimer.stop();
                        }
                    }
                    else if (this.activeTimer.getDelay() === 750) {
                        this.activeTimer.stop();
                        this.showTip();
                    }
                    else if (this.activeTimer.delay === 90) {
                        this.flicker = !this.flicker;
                        if (this.activeTimer.num_ticks >= 6) {
                            this.activeTimer.stop();
                            this.flicker = false;
                        }
                    }
                }
                else {
                    if ((timer.invokerCompoenent != null || Gui.getComponentClass(timer.invokerCompoenent) === "slider")) {
                        const minimum = this.getDouble$java_lang_Object$java_lang_String(timer.invokerCompoenent, "minimum");
                        const maximum = this.getDouble$java_lang_Object$java_lang_String(timer.invokerCompoenent, "maximum");
                        const oldValue = this.getDouble$java_lang_Object$java_lang_String(timer.invokerCompoenent, "value");
                        const unit = this.getDouble$java_lang_Object$java_lang_String(timer.invokerCompoenent, "unit");
                        let value = oldValue;
                        const animMode = this.getString$java_lang_Object$java_lang_String$java_lang_String(timer.invokerCompoenent, "animmode", "none");
                        if (animMode === "increasing") {
                            value += unit;
                            if (value > maximum)
                                value = minimum;
                        }
                        else if (animMode === "decreasing") {
                            value -= unit;
                            if (value < minimum)
                                value = maximum;
                        }
                        else if (animMode === "increasing-once") {
                            value += unit;
                            if (value > maximum) {
                                value = maximum;
                                return;
                            }
                        }
                        else if (animMode === "decreasing-once") {
                            value -= unit;
                            if (value < minimum) {
                                value = minimum;
                                return;
                            }
                        }
                        else if (animMode === "oscillating") {
                            const incr = this.getProperty(timer.invokerCompoenent, "reverse") == null;
                            value += (incr ? unit : -unit);
                            if (value >= maximum && incr) {
                                value = maximum;
                                this.putProperty(timer.invokerCompoenent, "reverse", "true");
                            }
                            else if (value <= minimum && !incr) {
                                value = minimum;
                                this.putProperty(timer.invokerCompoenent, "reverse", null);
                            }
                        }
                        else {
                        }
                        value = minimum + Math.round(((value - minimum) / unit)) * unit;
                        value = org.shikhar.MathUtils.clamp(value, minimum, maximum);
                        if (value !== oldValue) {
                            this.setDouble$java_lang_Object$java_lang_String$double(timer.invokerCompoenent, "value", value);
                            this.invoke(timer.invokerCompoenent, null, "action");
                        }
                    }
                }
            }
            /**
             * Starts/Stops  timer
             * @param {number} delay interval in millisec between two ticks , timer stops id delay is zero
             * @param {number} tickcount number of times timer ticks -1=infinite, 0=stops timer, 1= runs only once
             * @private
             */
            setTimer(delay, tickcount) {
                this.flicker = false;
                if (delay === 0 || tickcount === 0) {
                    this.activeTimer.setDelay(0);
                    this.activeTimer.stop();
                    return;
                }
                this.activeTimer.setDelay(delay);
                if (tickcount < 0) {
                    this.activeTimer.setContinuous(true);
                }
                else if (tickcount === 1) {
                    this.activeTimer.setContinuous(false);
                }
                else {
                    this.activeTimer.setMaxTickCount(tickcount);
                }
                this.activeTimer.start();
            }
            getColor(component, key, defaultcolor) {
                const value = Gui.get$java_lang_Object$java_lang_Object(component, key);
                return (value != null) ? value : defaultcolor;
            }
            /**
             * Sets the only one font used everywhere, and revalidates the whole UI.
             * Scrollbar width/height, spinbox, and combobox button width, and slider
             * size is the same as the font height
             *
             * @param {org.shikhar.Font} font
             * the default font is <i>SansSerif</i>, <i>plain</i>, and
             * <i>12pt</i>
             */
            setDefaultFont(font) {
                if (font == null)
                    return;
                font.setContext(this.g.context);
                this.font = font;
                this.g.setFont(font);
                this.block = font.getHeight();
                console.log("Gui Block=" + this.block);
                this.margin_1 = 1;
                this.reValidateGui();
            }
            getFont$() {
                return this.font;
            }
            /**
             * @param {*} component
             * @private
             */
            doLayout(component) {
                const classname = Gui.getComponentClass(component);
                if ("combobox" === classname) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true)) {
                        const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                        this.layoutField(component, this.block, false, (icon != null) ? icon.getScaledWidth() : 0);
                    }
                    else {
                        const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", -1);
                        if (selected !== -1) {
                            const choice = this.getItem(component, selected);
                            if (Gui.getComponentClass(choice) === "choice") {
                                Gui.set(component, "text", Gui.get$java_lang_Object$java_lang_Object(choice, "text"));
                                Gui.set(component, "icon", Gui.get$java_lang_Object$java_lang_Object(choice, "icon"));
                            }
                        }
                    }
                }
                else if (("textfield" === classname) || ("passwordfield" === classname)) {
                    this.layoutField(component, 0, ("passwordfield" === classname), 0);
                }
                else if ("textarea" === classname) {
                    let text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                    if (text == null)
                        text = "";
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
                    this.defaultStyle = new Gui.DrawStyle(this, 0, 0, null, null, 'n');
                    this.defaultStyle.font = this.getFont$java_lang_Object(component);
                    const styles = this.getProperty(component, "drawstyle");
                    if (wrap) {
                        const bounds = this.getRectangle(component, "bounds");
                        chars = this.getChars(component, text, true, bounds.width - 4 * this.margin_1, bounds.height);
                        if (chars == null) {
                            chars = this.getChars(component, text, true, bounds.width - this.block - 4 * this.margin_1, 0);
                        }
                    }
                    else {
                        chars = this.getChars(component, text, false, 0, 0);
                    }
                    const currentfont = this.getFont$java_lang_Object(component);
                    currentfont.update();
                    let width = 0;
                    let height = 0;
                    let caretx = 0;
                    let carety = 0;
                    for (let i = 0, j = 0; j <= chars.length; j++) {
                        {
                            if ((j === chars.length) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[j]) == '\n'.charCodeAt(0))) {
                                width = Math.max(width, styles == null ? currentfont.charsWidth(chars, i, j - i) : this.getCharsWidth(chars, i, j - i, styles));
                                if ((end >= i) && (end <= j)) {
                                    caretx = (styles == null ? currentfont.charsWidth(chars, i, end - i) : this.getCharsWidth(chars, i, j - i, styles));
                                    carety = height;
                                }
                                height += (styles == null ? currentfont.getHeight() : this.getCharsHeight(chars, i, j - i, styles));
                                i = j + 1;
                            }
                        }
                        ;
                    }
                    this.layoutScroll(component, width + 2 * this.margin_1, height - currentfont.getLeading() + 2 * this.margin_1, 0, 0, 0, 0, this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", true), 0);
                    this.scrollToVisible(component, caretx, carety, 2 * this.margin_1, currentfont.getAscent() + currentfont.getDescent() + 2 * this.margin_1);
                }
                else if ("tabbedpane" === classname) {
                    const bounds = this.getRectangle(component, "bounds");
                    const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                    const horizontal = ((placement === "top") || (placement === "bottom"));
                    const stacked = (placement === "stacked");
                    const hideTabs = (placement === "none");
                    let tabd = 0;
                    let first = null;
                    let tabsize = 0;
                    for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            if ((tabd === 0) && ((first = this.getRectangle(tab, "bounds")) != null)) {
                                tabd = horizontal ? first.x : first.y;
                            }
                            const d = this.getSize(tab, stacked ? 8 * this.margin_1 : horizontal ? 12 * this.margin_1 : 9 * this.margin_1, stacked ? 3 * this.margin_1 : horizontal ? 5 * this.margin_1 : 8 * this.margin_1, false);
                            this.setRectangle(tab, "bounds", horizontal ? tabd : 0, horizontal ? 0 : tabd, stacked ? bounds.width : d.width, d.height);
                            if (stacked) {
                                tabd += d.height;
                            }
                            else {
                                tabd += (horizontal ? d.width : d.height) - 3 * this.margin_1;
                                tabsize = Math.max(tabsize, horizontal ? d.height : d.width);
                            }
                        }
                        ;
                    }
                    if (hideTabs)
                        tabsize = 0;
                    const cx = (placement === "left") ? (tabsize + 1 * this.margin_1) : 2 * this.margin_1;
                    const cy = (placement === "top") ? (tabsize + 1 * this.margin_1) : 2 * this.margin_1;
                    const cwidth = bounds.width - ((horizontal || stacked) ? 4 * this.margin_1 : (tabsize + 3 * this.margin_1));
                    const cheight = bounds.height - (stacked ? (tabd + 3 * this.margin_1) : (horizontal ? (tabsize + 3 * this.margin_1) : 4 * this.margin_1));
                    for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
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
                            const comp = Gui.get$java_lang_Object$java_lang_Object(tab, ":comp");
                            if ((comp != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                this.setRectangle(comp, "bounds", cx - r.x, stacked ? (r.height + 1 * this.margin_1) : (cy - r.y), cwidth, cheight);
                                this.doLayout(comp);
                            }
                        }
                        ;
                    }
                    this.checkOffset(component);
                }
                else if (("panel" === classname) || (classname === "dialog")) {
                    if (true) {
                    }
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
                    const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "bgimage", null);
                    if (icon != null && ("panel" === classname)) {
                        contentwidth = Math.max(icon.getScaledWidth(), contentwidth);
                        contentheight = Math.max(icon.getScaledHeight(), contentheight);
                    }
                    const titleheight = this.getSize(component, 0, 0, false).height;
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, ":titleheight", titleheight, 0);
                    let scrollable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "scrollable", false);
                    const border = ("panel" === classname) && this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", false);
                    const iborder = (border ? this.margin_1 : 0);
                    if (scrollable) {
                        if ("panel" === classname) {
                            const head = (titleheight / 2 | 0);
                            const headgap = (titleheight > 0) ? (titleheight - head - iborder) : 0;
                            scrollable = this.layoutScroll(component, contentwidth, contentheight, head, 0, 0, 0, border, headgap);
                        }
                        else {
                            scrollable = this.layoutScroll(component, contentwidth, contentheight, 3 * this.margin_1 + titleheight, 3 * this.margin_1, 3 * this.margin_1, 3 * this.margin_1, true, 0);
                        }
                    }
                    if (!scrollable) {
                        Gui.set(component, ":view", null);
                        Gui.set(component, ":port", null);
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
                                areax = 4 * this.margin_1;
                                areay = 4 * this.margin_1 + titleheight;
                                areawidth -= 8 * this.margin_1;
                                areaheight -= areay + 4 * this.margin_1;
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
                        let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                        for (let i = 0; comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
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
                    if (bounds != null && bounds.width < 0) {
                    }
                    for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            const iclass = Gui.getComponentClass(comp);
                            const boundsWidth = Math.abs(bounds.width);
                            if (iclass === "dialog") {
                                const d = this.getPreferredSize$java_lang_Object(comp);
                                if (Gui.get$java_lang_Object$java_lang_Object(comp, "bounds") == null) {
                                    if (this.getProperty(comp, "pintoworld") != null) {
                                        this.setRectangle(comp, "bounds", Math.max(0, ((boundsWidth - d.width) / 2 | 0)), Math.max(0, ((bounds.height - d.height) / 2 | 0)), Math.min(d.width, boundsWidth), Math.min(d.height, bounds.height));
                                        Gui.repaintNeeded = true;
                                    }
                                    else {
                                        this.setRectangle(comp, "bounds", bounds.x, bounds.y, Math.min(d.width, boundsWidth), Math.min(d.height, bounds.height));
                                    }
                                }
                            }
                            else if (iclass === "menubar") {
                                const d = this.getPreferredSize$java_lang_Object(comp);
                                const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(comp, "placement", "top");
                                if (placement === "top") {
                                    this.setRectangle(comp, "bounds", 0, 0, bounds.width, d.height);
                                }
                                else {
                                    this.setRectangle(comp, "bounds", 0, bounds.height - d.height, bounds.width, d.height);
                                }
                            }
                            else if ((iclass !== ":combolist") && (iclass !== ":popup")) {
                                const d = this.getPreferredSize$java_lang_Object(comp);
                                if (Gui.get$java_lang_Object$java_lang_Object(comp, "bounds") == null) {
                                    this.setRectangle(comp, "bounds", Math.max(0, ((boundsWidth - d.width) / 2 | 0)), Math.max(0, ((bounds.height - d.height) / 2 | 0)), Math.min(d.width, boundsWidth), Math.min(d.height, bounds.height));
                                }
                                else {
                                    const R = this.getRectangle(comp, "bounds");
                                    this.setRectangle(comp, "bounds", R.x, R.y, Math.min(d.width, boundsWidth), Math.min(d.height, bounds.height));
                                }
                            }
                            this.validate(comp);
                            this.doLayout(comp);
                        }
                        ;
                    }
                }
                else if ("spinbox" === classname) {
                    const minimum = this.getDouble$java_lang_Object$java_lang_String(component, "minimum");
                    const maximum = this.getDouble$java_lang_Object$java_lang_String(component, "maximum");
                    let value = this.getDouble$java_lang_Object$java_lang_String(component, "value");
                    const step = this.getDouble$java_lang_Object$java_lang_String(component, "step");
                    if (value < minimum || value > maximum) {
                        value = org.shikhar.MathUtils.clamp(value, minimum, maximum);
                        value = Math.floor((value - minimum) / step) * step + minimum;
                        this.setDouble$java_lang_Object$java_lang_String$double(component, "value", value);
                    }
                    this.layoutField(component, this.block, false, 0);
                }
                else if ("splitpane" === classname) {
                    const bounds = this.getRectangle(component, "bounds");
                    const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    let divider = this.getInteger$java_lang_Object$java_lang_String$int(component, "divider", -1);
                    const maxdiv = Math.max(0, (horizontal ? Math.abs(bounds.width) : Math.abs(bounds.height)) - 5 * this.margin_1);
                    const comp1 = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
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
                    }
                    if (visible1) {
                        this.setRectangle(comp1, "bounds", 0, 0, horizontal ? divider : bounds.width, horizontal ? bounds.height : divider);
                        this.doLayout(comp1);
                    }
                    const comp2 = (comp1 != null) ? Gui.get$java_lang_Object$java_lang_Object(comp1, ":next") : null;
                    if ((comp2 != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp2, "visible", true)) {
                        this.setRectangle(comp2, "bounds", horizontal ? (divider + 5 * this.margin_1) : 0, horizontal ? 0 : (divider + 5 * this.margin_1), horizontal ? (bounds.width - 5 * this.margin_1 - divider) : bounds.width, horizontal ? bounds.height : (bounds.height - 5 * this.margin_1 - divider));
                        this.doLayout(comp2);
                    }
                }
                else if (("list" === classname) || ("table" === classname) || ("tree" === classname)) {
                    const line = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "line", true) ? 1 * this.margin_1 : 0;
                    let width = 0;
                    let columnheight = 0;
                    if ("table" === classname) {
                        const header = Gui.get$java_lang_Object$java_lang_Object(component, "header");
                        let columnwidths = null;
                        if (header != null) {
                            columnwidths = (s => { let a = []; while (s-- > 0)
                                a.push(0); return a; })(this.getCount(header));
                            let column = Gui.get$java_lang_Object$java_lang_Object(header, ":comp");
                            for (let i = 0; i < columnwidths.length; i++) {
                                {
                                    if (i !== 0) {
                                        column = Gui.get$java_lang_Object$java_lang_Object(column, ":next");
                                    }
                                    columnwidths[i] = this.getInteger$java_lang_Object$java_lang_String$int(column, "width", Gui.DEFAULT_COLUMN_WIDTH);
                                    width += columnwidths[i];
                                    const d = this.getSize(column, 2 * this.margin_1, 2 * this.margin_1, false);
                                    columnheight = Math.max(columnheight, d.height);
                                }
                                ;
                            }
                        }
                        Gui.set(component, ":widths", columnwidths);
                        if (header != null && this.getBoolean$java_lang_Object$java_lang_String(header, "resizable")) {
                            const smartWidths = (s => { let a = []; while (s-- > 0)
                                a.push(0); return a; })(columnwidths.length);
                            for (let i = 0; i < smartWidths.length; i++) {
                                smartWidths[i] = Gui.MINIMUM_COLUMN_WIDTH;
                            }
                            Gui.set(component, Gui.PROPERTY_SMARTWIDTHS, smartWidths);
                        }
                    }
                    let y = 0;
                    let level = 0;
                    for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null;) {
                        {
                            let x = 0;
                            let iwidth = 0;
                            let iheight = 0;
                            if ("table" === classname) {
                                iwidth = width;
                                for (let cell = Gui.get$java_lang_Object$java_lang_Object(item, ":comp"); cell != null; cell = Gui.get$java_lang_Object$java_lang_Object(cell, ":next")) {
                                    {
                                        const d = this.getSize(cell, 2 * this.margin_1, 2 * this.margin_1, false);
                                        iheight = Math.max(iheight, d.height);
                                    }
                                    ;
                                }
                            }
                            else {
                                if ("tree" === classname) {
                                    x = (level + 1) * this.block;
                                }
                                const d = this.getSize(item, 6 * this.margin_1, 2 * this.margin_1, false);
                                iwidth = d.width;
                                iheight = d.height;
                                width = Math.max(width, x + d.width);
                            }
                            this.setRectangle(item, "bounds", x, y, iwidth, iheight);
                            y += iheight + line;
                            if ("tree" === classname) {
                                let next = Gui.get$java_lang_Object$java_lang_Object(item, ":comp");
                                if ((next != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true)) {
                                    level++;
                                }
                                else {
                                    while ((((next = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) == null) && (level > 0))) {
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
                                item = Gui.get$java_lang_Object$java_lang_Object(item, ":next");
                            }
                        }
                        ;
                    }
                    this.layoutScroll(component, width, y - line, columnheight, 0, 0, 0, true, 0);
                }
                else if ("menubar" === classname) {
                    const bounds = this.getRectangle(component, "bounds");
                    let x = 0;
                    for (let menu = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Gui.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            const d = this.getSize(menu, 8 * this.margin_1, 4 * this.margin_1, false);
                            this.setRectangle(menu, "bounds", x, 0, d.width, bounds.height);
                            x += d.width;
                        }
                        ;
                    }
                }
                else if ("bean" === classname) {
                    const r = this.getRectangle(component, "bounds");
                    Gui.get$java_lang_Object$java_lang_Object(component, "bean").setBounds(r);
                }
            }
            /**
             * Scroll tabs to make the selected one visible
             *
             * @param {*} component
             * a tabbedpane
             * @private
             */
            checkOffset(component) {
                const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                let i = 0;
                if (placement === "stacked") {
                    let dy = 0;
                    for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            r.y = dy;
                            dy += r.height;
                            if (i === selected) {
                                dy += this.getRectangle(Gui.get$java_lang_Object$java_lang_Object(tab, ":comp"), "bounds").height + 2;
                            }
                            i++;
                        }
                        ;
                    }
                    if (this.mouseinside === component) {
                        this.checkLocation();
                    }
                    return;
                }
                const horizontal = ((placement === "top") || (placement === "bottom"));
                const bounds = this.getRectangle(component, "bounds");
                const panesize = horizontal ? bounds.width : bounds.height;
                let first = 0;
                let last = 0;
                let d = 0;
                for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
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
                    for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            if (horizontal) {
                                r.x += d;
                            }
                            else {
                                r.y += d;
                            }
                            const comp = Gui.get$java_lang_Object$java_lang_Object(tab, ":comp");
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
                    if (this.mouseinside === component) {
                        this.checkLocation();
                    }
                }
            }
            /**
             * returns array of characters with line breaks as per width and height of component if wrapsi set true
             * @param {*} component
             * @param {string} text
             * @param {boolean} wrap
             * @param {number} width ignores break if set to zero
             * @param {number} height
             * @return
             * @return {char[]}
             * @private
             */
            getChars(component, text, wrap, width, height) {
                let chars = Gui.get$java_lang_Object$java_lang_Object(component, ":text");
                if ((chars == null) || (chars.length !== text.length)) {
                    chars = /* toCharArray */ (text).split('');
                    Gui.set(component, ":text", chars);
                }
                else /* getChars */
                    ((a, s, e, d, l) => { d.splice.apply(d, [l, e - s].concat(a.substring(s, e).split(''))); })(text, 0, chars.length, chars, 0);
                if (wrap) {
                    const styles = this.getProperty(component, "drawstyle");
                    const currentfont = this.getFont$java_lang_Object(component);
                    const lines = ((height - 4 + currentfont.getLeading()) / currentfont.getHeight() | 0);
                    let prevletter = false;
                    const n = chars.length;
                    let linecount = 0;
                    for (let i = 0, j = -1, k = 0; k <= n; k++) {
                        {
                            if (((k === n) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[k]) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[k]) == ' '.charCodeAt(0))) && (j > i) && ((styles == null ? currentfont.charsWidth(chars, i, k - i) : this.getCharsWidth(chars, i, k - i, styles)) > width)) {
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
             * @private
             */
            getAccelerator(component) {
                const accelerator = Gui.get$java_lang_Object$java_lang_Object(component, "accelerator");
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
             * @private
             */
            popupCombo(combobox) {
                this.closeup();
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
                const combolist = Gui.createImpl(":combolist");
                Gui.set(combolist, "combobox", combobox);
                Gui.set(combobox, ":combolist", combolist);
                this.popupowner = combobox;
                this.insertItem(this.content, ":comp", combolist, 0);
                Gui.set(combolist, ":parent", this.content);
                let pw = 0;
                let ph = 0;
                for (let item = Gui.get$java_lang_Object$java_lang_Object(combobox, ":comp"); item != null; item = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) {
                    {
                        const d = (Gui.getComponentClass(item) === "separator") ? new org.shikhar.Dimension(3 * this.margin_1, 3 * this.margin_1) : this.getSize(item, 8 * this.margin_1, 4 * this.margin_1, false);
                        this.setRectangle(item, "bounds", 0, ph, d.width, d.height);
                        pw = Math.max(pw, d.width);
                        ph += d.height;
                    }
                    ;
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
                let popup = Gui.get$java_lang_Object$java_lang_Object(component, ":popup");
                const selected = Gui.get$java_lang_Object$java_lang_Object(component, "selected");
                if (popup != null) {
                    if (Gui.get$java_lang_Object$java_lang_Object(popup, "menu") === selected) {
                        return null;
                    }
                    Gui.set(popup, "selected", null);
                    Gui.set(popup, "menu", null);
                    this.repaint$java_lang_Object(popup);
                    this.removeItemImpl(this.content, popup);
                    Gui.set(popup, ":parent", null);
                    Gui.set(component, ":popup", null);
                    if (this.mouseinside === popup) {
                        this.checkLocation();
                    }
                    this.popupMenu(popup);
                }
                if ((selected == null) || (Gui.getComponentClass(selected) !== "menu")) {
                    return null;
                }
                popup = Gui.createImpl(":popup");
                Gui.set(popup, "menu", selected);
                Gui.set(component, ":popup", popup);
                this.insertItem(this.content, ":comp", popup, 0);
                Gui.set(popup, ":parent", this.content);
                let menux = 0;
                let menuy = 0;
                let menuwidth = 0;
                let menuheight = 0;
                for (let comp = component; comp !== this.content; comp = this.getParent(comp)) {
                    {
                        if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true))
                            continue;
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
                const menubar = ("menubar" === Gui.getComponentClass(component));
                if (menubar) {
                    this.popupowner = component;
                }
                this.popup(selected, popup, menubar ? (("bottom" !== Gui.get$java_lang_Object$java_lang_Object(component, "placement")) ? 'D' : 'U') : 'R', menubar ? (menux + menubounds.x) : menux, menuy + menubounds.y, menubar ? menubounds.width : menuwidth, menubar ? menuheight : menubounds.height, menubar ? this.margin_1 : 3 * this.margin_1);
                return popup;
            }
            /**
             * @param {*} popupmenu
             * @param {number} x
             * @param {number} y
             */
            popupPopup(popupmenu, x, y) {
                this.closeup();
                this.invoke(popupmenu, null, "menushown");
                const popup = Gui.createImpl(":popup");
                Gui.set(popup, "menu", popupmenu);
                Gui.set(popupmenu, ":popup", popup);
                this.popupowner = popupmenu;
                this.insertItem(this.content, ":comp", popup, 0);
                Gui.set(popup, ":parent", this.content);
                this.popup(popupmenu, popup, 'D', x, y, 0, 0, 0);
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
             * @private
             */
            popup(menu, popup, direction, x, y, width, height, offset) {
                let pw = 0;
                let ph = 0;
                for (let item = Gui.get$java_lang_Object$java_lang_Object(menu, ":comp"); item != null; item = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) {
                    {
                        const visible = this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "visible", true);
                        if (!visible) {
                            continue;
                        }
                        const itemclass = Gui.getComponentClass(item);
                        const d = (itemclass === "separator") ? new org.shikhar.Dimension(this.margin_1, this.margin_1) : this.getSize(item, 8 * this.margin_1, 4 * this.margin_1, false);
                        if (itemclass === "checkboxmenuitem") {
                            d.width = d.width + this.block + 3 * this.margin_1;
                            d.height = Math.max(this.block, d.height);
                        }
                        else if (itemclass === "menu") {
                            d.width += this.block;
                        }
                        else if (itemclass === "panel") {
                            const d1 = this.getPreferredSize$java_lang_Object(item);
                            this.setRectangle(item, "bounds", 1, 1 + ph, d.width, d.height);
                            this.doLayout(item);
                            d.width = d1.width;
                            d.height = d1.height;
                        }
                        const accelerator = this.getAccelerator(item);
                        if (accelerator != null) {
                            d.width += 4 * this.margin_1 + this.font.stringWidth(accelerator);
                        }
                        this.setRectangle(item, "bounds", 1, 1 + ph, d.width, d.height);
                        pw = Math.max(pw, d.width);
                        ph += d.height;
                    }
                    ;
                }
                pw += 2 * this.margin_1;
                ph += 2 * this.margin_1;
                const desktop = this.getRectangle(this.content, "bounds");
                if (desktop.width < 0)
                    desktop.width = -desktop.width;
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
             * @private
             */
            closeCombo(combobox, combolist, item) {
                if ((item != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "enabled", true)) {
                    const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(item, "text", "");
                    Gui.set(combobox, "text", text);
                    this.putProperty(combobox, "i18n.text", null);
                    this.setInteger$java_lang_Object$java_lang_String$int$int(combobox, "start", text.length, 0);
                    this.setInteger$java_lang_Object$java_lang_String$int$int(combobox, "end", 0, 0);
                    Gui.set(combobox, "icon", Gui.get$java_lang_Object$java_lang_Object(item, "icon"));
                    Gui.set(combobox, "background", Gui.get$java_lang_Object$java_lang_Object(item, "background"));
                    this.validate(combobox);
                    this.setInteger$java_lang_Object$java_lang_String$int$int(combobox, "selected", this.getIndex(combobox, item), -1);
                    this.invoke(combobox, item, "action");
                }
                Gui.set(combolist, "combobox", null);
                Gui.set(combobox, ":combolist", null);
                this.removeItemImpl(this.content, combolist);
                this.repaint$java_lang_Object(combolist);
                Gui.set(combolist, ":parent", null);
                this.popupowner = null;
                if (this.mouseinside === combolist) {
                    this.checkLocation();
                }
            }
            /**
             *
             */
            closeup() {
                if (this.popupowner != null) {
                    const classname = Gui.getComponentClass(this.popupowner);
                    if ("menubar" === classname) {
                        Gui.set(this.popupowner, "selected", null);
                        this.popupMenu(this.popupowner);
                        this.repaint$java_lang_Object(this.popupowner);
                    }
                    else if ("combobox" === classname) {
                        this.closeCombo(this.popupowner, Gui.get$java_lang_Object$java_lang_Object(this.popupowner, ":combolist"), null);
                    }
                    else {
                        this.popupMenu(this.popupowner);
                    }
                    this.popupowner = null;
                    Gui.repaintNeeded = true;
                }
            }
            /**
             * @private
             */
            showTip() {
                let text = null;
                this.tooltipowner = null;
                const classname = Gui.getComponentClass(this.mouseinside);
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
                if (text != null) {
                    const width = this.font.stringWidth(text) + 4;
                    const height = this.font.getAscent() + this.font.getDescent() + 4;
                    if (this.tooltipowner == null) {
                        this.tooltipowner = this.mouseinside;
                    }
                    const bounds = this.getRectangle(this.content, "bounds");
                    const tx = Math.max(0, Math.min(this.mousex + 10, bounds.width - width));
                    const ty = Math.max(0, Math.min(this.mousey + 10, bounds.height - height));
                    this.setRectangle(this.tooltipowner, ":tooltipbounds", tx, ty, width, height);
                }
            }
            /**
             * @private
             */
            hideTip() {
                if (this.tooltipowner != null) {
                    const bounds = this.getRectangle(this.tooltipowner, ":tooltipbounds");
                    Gui.set(this.tooltipowner, ":tooltipbounds", null);
                    this.tooltipowner = null;
                }
            }
            /**
             * @param {*} component
             * @param {number} dw
             * @param {boolean} hidden
             * @param {number} left
             * @private
             */
            layoutField(component, dw, hidden, left) {
                const width = this.getRectangle(component, "bounds").width - left - dw;
                let text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                if (text == null)
                    text = "";
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
                const currentfont = this.getFont$java_lang_Object(component);
                currentfont.update();
                const caret = hidden ? (currentfont.charWidth('*') * end) : currentfont.stringWidth(text.substring(0, end));
                if (off > caret) {
                    off = caret;
                }
                else if (off < caret - width + 4 * this.margin_1) {
                    off = caret - width + 4 * this.margin_1;
                }
                off = Math.max(0, Math.min(off, (hidden ? (currentfont.charWidth('*') * text.length) : currentfont.stringWidth(text)) - width + 4 * this.margin_1));
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
             * list: 0, 0, 0, 0, true, 0 | table: header, ... | dialog: header,
             * 3, 3, 3, true, 0 title-border panel: header / 2, 0, 0, 0, true,
             * head
             * @param {boolean} border
             * @private
             */
            layoutScroll(component, contentwidth, contentheight, top, left, bottom, right, border, topgap) {
                const bounds = this.getRectangle(component, "bounds");
                const iborder = border ? this.margin_1 : 0;
                const iscroll = this.block + this.margin_1 - iborder;
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
                    this.setRectangle(component, ":horizontal", left, bounds.height - bottom - this.block - this.margin_1, bounds.width - left - right - (vneed ? this.block : 0), this.block + this.margin_1);
                }
                else {
                    Gui.set(component, ":horizontal", null);
                }
                if (vneed) {
                    this.setRectangle(component, ":vertical", bounds.width - right - this.block - this.margin_1, top, this.block + this.margin_1, bounds.height - top - bottom - (hneed ? this.block : 0));
                }
                else {
                    Gui.set(component, ":vertical", null);
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
            /**
             * @param {*} component
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
             * @private
             */
            scrollToVisible(component, x, y, width, height) {
                const view = this.getRectangle(component, ":view");
                const port = this.getRectangle(component, ":port");
                const vx = Math.max(x + width - port.width, Math.min(view.x, x));
                const vy = Math.max(y + height - port.height, Math.min(view.y, y));
                if ((view.x !== vx) || (view.y !== vy)) {
                    this.repaint$java_lang_Object(component);
                    view.x = vx;
                    view.y = vy;
                }
            }
            getPreferredSize$java_lang_Object(component) {
                const width = this.getInteger$java_lang_Object$java_lang_String$int(component, "width", 0);
                const height = this.getInteger$java_lang_Object$java_lang_String$int(component, "height", 0);
                if ((width > 0) && (height > 0)) {
                    return new org.shikhar.Dimension(width, height);
                }
                const classname = Gui.getComponentClass(component);
                if ("label" === classname) {
                    return this.getSize(component, 0, 0, true);
                }
                if (("button" === classname) || ("togglebutton" === classname)) {
                    const link = ("button" === classname) && (Gui.get$java_lang_Object$java_lang_Object(component, "type") === "link");
                    return this.getSize(component, link ? 0 : 12 * this.margin_1, link ? 0 : 6 * this.margin_1, true);
                }
                if ("checkbox" === classname) {
                    const d = this.getSize(component, 0, 0, false);
                    const block = this.getFont$java_lang_Object(component).getHeight();
                    d.width = d.width + block + 3 * this.margin_1;
                    d.height = Math.max(block, d.height);
                    return d;
                }
                if ("combobox" === classname) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true)) {
                        const size = this.getFieldSize(component);
                        const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                        if (icon != null) {
                            size.width += icon.getScaledWidth();
                            size.height = Math.max(size.height, icon.getScaledHeight() + this.margin_1 * 2);
                        }
                        size.width += this.block;
                        return size;
                    }
                    else {
                        const margin = 4 * this.margin_1;
                        const size = this.getSize(component, margin, margin, false);
                        for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) {
                            {
                                const d = this.getSize(item, margin, margin, false);
                                size.width = Math.max(d.width, size.width);
                                size.height = Math.max(d.height, size.height);
                            }
                            ;
                        }
                        size.width += this.block;
                        if (size.height === margin) {
                            const customfont = this.getFont$java_lang_Object(component);
                            customfont.update();
                            size.height = customfont.getAscent() + customfont.getDescent() + margin;
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
                    const currentfont = this.getFont$java_lang_Object(component);
                    const margin = 2 * this.margin_1;
                    return new org.shikhar.Dimension(((columns > 0) ? (columns * currentfont.charWidth('e') + margin) : 5 * this.block) + margin + this.block, ((rows > 0) ? (rows * currentfont.getHeight() - currentfont.getLeading() + margin) : 3 * this.block) + margin + this.block);
                }
                if ("tabbedpane" === classname) {
                    const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                    const horizontal = ((placement !== "left") && (placement !== "right"));
                    let tabsize = 0;
                    let contentwidth = 0;
                    let contentheight = 0;
                    const margin = 3 * this.margin_1;
                    for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const d = this.getSize(tab, 0, 0, false);
                            if (placement === "stacked") {
                                tabsize += d.height + margin;
                            }
                            else {
                                tabsize = Math.max(tabsize, horizontal ? d.height + margin + this.margin_1 * 2 : d.width + margin * 3);
                            }
                            const comp = Gui.get$java_lang_Object$java_lang_Object(tab, ":comp");
                            if ((comp != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                const dc = this.getPreferredSize$java_lang_Object(comp);
                                contentwidth = Math.max(contentwidth, dc.width);
                                contentheight = Math.max(contentheight, dc.height);
                            }
                        }
                        ;
                    }
                    if ((placement === "none"))
                        tabsize = 0;
                    return new org.shikhar.Dimension(contentwidth + (horizontal ? margin + this.margin_1 : (tabsize + margin)), contentheight + (horizontal ? (tabsize + margin) : margin + this.margin_1));
                }
                if (("panel" === classname) || (classname === "dialog")) {
                    const size = this.getSize(component, 0, 0, false);
                    let iw = size.width;
                    let ih = size.height;
                    const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "bgimage", null);
                    if (icon != null && ("panel" === classname)) {
                        iw = icon.getScaledWidth();
                        ih = icon.getScaledHeight() + ih;
                    }
                    if (classname === "dialog") {
                        size.width = 8 * this.margin_1;
                        size.height += 8 * this.margin_1;
                    }
                    else if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", false)) {
                        size.width = 2 * this.margin_1;
                        size.height += (size.height > 0) ? this.margin_1 : 2 * this.margin_1;
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
                    size.width = Math.max(size.width, iw);
                    size.height = Math.max(size.height, ih);
                    return size;
                }
                else if ("desktop" === classname) {
                    const size = new org.shikhar.Dimension();
                    for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            const iclass = Gui.getComponentClass(comp);
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
                    const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    return new org.shikhar.Dimension(horizontal ? 6 * this.block : (this.block / 2 | 0), horizontal ? (this.block / 2 | 0) : 6 * this.block);
                }
                if ("slider" === classname) {
                    const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    const size = this.getSize(component, 0, 0, false);
                    return new org.shikhar.Dimension(horizontal ? Math.max(size.width, 8 * this.block) : ((0.8 * this.block) | 0), horizontal ? ((0.8 * this.block + size.height) | 0) : 6 * this.block);
                }
                if ("splitpane" === classname) {
                    const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    const comp1 = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                    const size = ((comp1 == null) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(comp1, "visible", true)) ? new org.shikhar.Dimension() : this.getPreferredSize$java_lang_Object(comp1);
                    const comp2 = Gui.get$java_lang_Object$java_lang_Object(comp1, ":next");
                    if ((comp2 != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp2, "visible", true)) {
                        const d = this.getPreferredSize$java_lang_Object(comp2);
                        size.width = horizontal ? (size.width + d.width) : Math.max(size.width, d.width);
                        size.height = horizontal ? Math.max(size.height, d.height) : (size.height + d.height);
                    }
                    if (horizontal) {
                        size.width += (5 * this.margin_1);
                    }
                    else {
                        size.height += (5 * this.margin_1);
                    }
                    return size;
                }
                if (("list" === classname) || ("table" === classname) || ("tree" === classname)) {
                    return new org.shikhar.Dimension(6 * this.block + 2 * this.margin_1, 6 * this.block + 2 * this.margin_1);
                }
                if ("separator" === classname) {
                    return new org.shikhar.Dimension(this.margin_1, this.margin_1);
                }
                if ("menubar" === classname) {
                    const size = new org.shikhar.Dimension(0, 0);
                    for (let menu = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Gui.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            const d = this.getSize(menu, 8 * this.margin_1, 4 * this.margin_1, false);
                            size.width += d.width;
                            size.height = Math.max(size.height, d.height);
                        }
                        ;
                    }
                    return size;
                }
                if ("bean" === classname) {
                    return Gui.get$java_lang_Object$java_lang_Object(component, "bean").getPreferredSize();
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
             * @private
             */
            getGrid(component) {
                let count = 0;
                for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
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
                for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
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
            /**
             * @param {int[]} values
             * @param {number} from
             * @param {number} length
             * @param {number} gap
             * @param {boolean} last
             * @return {number}
             * @private
             */
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
            /**
             * @param {*} component
             * @return {org.shikhar.Dimension}
             * @private
             */
            getFieldSize(component) {
                const columns = this.getInteger$java_lang_Object$java_lang_String$int(component, "columns", 0);
                const currentfont = this.getFont$java_lang_Object(component);
                return new org.shikhar.Dimension(((columns > 0) ? (columns * currentfont.charWidth('e')) : 76 * this.margin_1) + 4 * this.margin_1, currentfont.getAscent() + currentfont.getDescent() + 4 * this.margin_1);
            }
            /**
             * @param {*} component
             * a widget including the text and icon parameters
             * @param {number} dx
             * increase width by this value
             * @param {number} dy
             * increase height by this value
             * @param {boolean} includeImage
             * size takes background image in account
             * @return {org.shikhar.Dimension} size of the text and the image (plus a gap) including the given
             * offsets
             * @private
             */
            getSize(component, dx, dy, includeImage) {
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", null);
                let tw = 0;
                let th = 0;
                if (text != null && !(text.length === 0)) {
                    const customfont = this.getFont$java_lang_Object(component);
                    customfont.update();
                    tw = customfont.stringWidth(text);
                    th = customfont.getAscent() + customfont.getDescent();
                }
                let icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                let iw = 0;
                let ih = 0;
                if (icon != null) {
                    iw = icon.getScaledWidth();
                    ih = icon.getScaledHeight();
                    if (text != null) {
                        iw += 3 * this.margin_1;
                    }
                }
                if (!includeImage)
                    return new org.shikhar.Dimension(tw + iw + dx, Math.max(th, ih) + dy);
                icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "bgimage", null);
                if (icon != null) {
                    return new org.shikhar.Dimension(((Math.max(tw + iw + dx, icon.width)) | 0), (Math.max(Math.max(th, ih) + dy, icon.height) | 0));
                }
                return new org.shikhar.Dimension(tw + iw + dx, Math.max(th, ih) + dy);
            }
            paint$() {
                this.g.context.save();
                this.g.setFont(this.font);
                this.paint$int$int$int$int$java_lang_Object$boolean(0, 0, this.width, this.height, this.content, true);
                this.g.context.restore();
            }
            paint$int$int$int$int$java_lang_Object$boolean(clipx, clipy, clipwidth, clipheight, component, enabled) {
                if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "visible", true)) {
                    return;
                }
                const classname = Gui.getComponentClass(component);
                const bounds = this.getRectangle(component, "bounds");
                if (bounds == null) {
                    return;
                }
                if (bounds.width < 0) {
                    bounds.width = Math.abs(bounds.width);
                    this.doLayout(component);
                }
                if ((clipx + clipwidth < bounds.x) || (clipx > bounds.x + bounds.width) || (clipy + clipheight < bounds.y) || (clipy > bounds.y + bounds.height)) {
                    console.log("bounds for " + classname + "out of clip " + bounds);
                    return;
                }
                const prevClip = this.g.getClipBounds();
                clipx -= bounds.x;
                clipy -= bounds.y;
                this.g.translate(bounds.x, bounds.y);
                this.g.clipRect(0, 0, bounds.width, bounds.height);
                if (Gui.useFBO && "bean" === classname) {
                    const c = this.getComponent(component, "bean");
                    if (c != null) {
                        const r = this.g.getClipBounds();
                        c.clipRect.set(r.x, r.y, r.width, r.height);
                        this.g.clearRect(0, 0, bounds.width - 1, bounds.height - 1);
                        this.g.translate(-bounds.x, -bounds.y);
                        clipx += bounds.x;
                        clipy += bounds.y;
                        this.g.setClip(prevClip.x, prevClip.y, prevClip.width, prevClip.height);
                        return;
                    }
                }
                let pressed = (this.mousepressed === component);
                const inside = (this.mouseinside === component) && ((this.mousepressed == null) || pressed);
                let hover = (this.mouseinside === component) && (this.mousepressed == null);
                const focus = this.focusinside && (this.focusowner === component);
                enabled = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "enabled", true);
                if ("label" === classname) {
                    this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, 0, 0, bounds.width, bounds.height, clipx, clipy, clipwidth, clipheight, false, false, false, false, 0, 0, 0, 0, false, enabled ? 'e' : 'd', "left", true, false, true);
                }
                else if (("button" === classname) || ("togglebutton" === classname)) {
                    const toggled = ("togglebutton" === classname) && this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", false);
                    const link = ("button" === classname) && (Gui.get$java_lang_Object$java_lang_Object(component, "type") === "link");
                    const parent = this.getParent(component) !== this.content;
                    if (link) {
                        this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, 0, 0, bounds.width, bounds.height, clipx, clipy, clipwidth, clipheight, false, false, false, false, 0, 0, 0, 0, focus, enabled ? (pressed ? 'e' : 'l') : 'd', "center", true, enabled && (inside !== pressed), false);
                    }
                    else {
                        let mode = enabled ? ((inside !== pressed) ? 'h' : ((pressed || toggled) ? 'p' : 'g')) : 'd';
                        if (parent === false && (c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'g'.charCodeAt(0))
                            mode = 'b';
                        this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, 0, 0, bounds.width, bounds.height, clipx, clipy, clipwidth, clipheight, true, true, true, true, 2 * this.margin_1, 5 * this.margin_1, 2 * this.margin_1, 5 * this.margin_1, focus, mode, "center", true, false, true);
                    }
                }
                else if ("checkbox" === classname) {
                    const block = this.getFont$java_lang_Object(component).getHeight();
                    this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, 0, 0, bounds.width, bounds.height, clipx, clipy, clipwidth, clipheight, false, false, false, false, 2 * this.margin_1, block + 3 * this.margin_1, 0, 0, false, enabled ? 'e' : 'd', "left", true, false, false);
                    let lw = this.g.setLineWidth(Math.fround(block / this.block));
                    const selected = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", false);
                    const group = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "group", null);
                    const border = enabled ? this.c_border : this.c_disable;
                    let background = (inside !== pressed) ? this.c_hover : Gui.get$java_lang_Object$java_lang_Object(component, "background");
                    if (background == null)
                        background = this.c_bg;
                    let foreground = Gui.get$java_lang_Object$java_lang_Object(component, "foreground");
                    if (foreground == null)
                        foreground = this.c_text_fg;
                    const dy = ((bounds.height - block + 2) / 2 | 0);
                    if (group == null) {
                        this.paintRect(this.margin_1, dy + this.margin_1, block - 2 * this.margin_1, block - 2 * this.margin_1, border, background, true, true, true, true, true);
                    }
                    else {
                        this.g.setColor((background !== this.c_ctrl) ? background : this.c_bg);
                        this.g.fillOval(1, dy + 1, block - 2, block - 2);
                        this.g.setColor(border);
                        this.g.drawOval(1, dy + 1, block - 2, block - 2);
                    }
                    this.g.setLineWidth(lw);
                    if (focus) {
                        this.drawFocus(0, 0, bounds.width, bounds.height);
                    }
                    if ((!selected && inside && pressed) || (selected && (!inside || !pressed))) {
                        this.g.setColor(enabled ? foreground : this.c_disable);
                        if (group == null) {
                            lw = this.g.setLineWidth(2.0);
                            this.g.drawLine(2 * this.margin_1, dy + block - (block / 4 | 0) - 4 * this.margin_1, 2 * this.margin_1 + (block / 4 | 0), dy + block - 3 * this.margin_1);
                            this.g.drawLine(2 * this.margin_1 + (block / 4 | 0), dy + block - 3 * this.margin_1, block - 4 * this.margin_1, dy + 3 * this.margin_1);
                            this.g.setLineWidth(lw);
                        }
                        else {
                            this.g.fillOval(3 * this.margin_1, dy + 3 * this.margin_1, block - 6 * this.margin_1, block - 6 * this.margin_1);
                            this.g.drawOval(3 * this.margin_1, dy + 3 * this.margin_1, block - 6 * this.margin_1, block - 6 * this.margin_1);
                        }
                    }
                }
                else if ("combobox" === classname) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true)) {
                        const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                        const left = (icon != null) ? icon.getScaledWidth() : 0;
                        this.paintField(clipx, clipy, clipwidth, clipheight, component, bounds.width - this.block, bounds.height, focus, enabled, false, left);
                        if (icon != null) {
                            const tintColor = enabled ? this.c_icon_tint : this.c_disable;
                            this.g.drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(icon, 2 * this.margin_1, ((bounds.height - icon.getScaledHeight()) / 2 | 0), tintColor);
                        }
                        this.paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(bounds.width - this.block, 0, this.block, bounds.height, 'S', enabled, inside, pressed, "down", true, false, true, true, true);
                    }
                    else {
                        this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, 0, 0, bounds.width, bounds.height, clipx, clipy, clipwidth, clipheight, true, true, true, true, 1, 3 * this.margin_1, 1, 1 + this.block, focus, enabled ? ((inside !== pressed) ? 'h' : (pressed ? 'p' : 'g')) : 'd', "left", false, false, true);
                        this.g.setColor(enabled ? this.c_text_fg : this.c_disable);
                        this.paintArrow$int$int$int$int$char(bounds.width - this.block, 0, this.block, bounds.height, 'S');
                    }
                }
                else if (":combolist" === classname) {
                    this.paintScroll(component, classname, pressed, inside, focus, false, enabled, clipx, clipy, clipwidth, clipheight);
                }
                else if (("textfield" === classname) || ("passwordfield" === classname)) {
                    this.paintField(clipx, clipy, clipwidth, clipheight, component, bounds.width, bounds.height, focus, enabled, ("passwordfield" === classname), 0);
                }
                else if ("textarea" === classname) {
                    this.paintScroll(component, classname, pressed, inside, focus, true, enabled, clipx, clipy, clipwidth, clipheight);
                }
                else if ("tabbedpane" === classname) {
                    let i = 0;
                    let selectedtab = null;
                    const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                    const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                    const horizontal = ((placement === "top") || (placement === "bottom"));
                    const stacked = (placement === "stacked");
                    const bx = stacked ? 0 : horizontal ? 2 * this.margin_1 : 1 * this.margin_1;
                    const by = stacked ? 0 : horizontal ? 1 * this.margin_1 : 2 * this.margin_1;
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
                    this.g.clipRect(clipx, clipy, clipwidth, clipheight);
                    const hideTabs = (placement === "none");
                    for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            if (selected !== i && !hideTabs) {
                                hover = inside && (this.mousepressed == null) && (this.insidepart === tab);
                                const tabenabled = enabled && this.getBoolean$java_lang_Object$java_lang_String$boolean(tab, "enabled", true);
                                this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(tab, r.x + bx, r.y + by, r.width - bw, r.height - bh, clipx, clipy, clipwidth, clipheight, (placement !== "bottom"), (placement !== "right"), !stacked && (placement !== "top"), (placement !== "left"), 1, 3, 1, 3, false, tabenabled ? (hover ? 'h' : 'g') : 'd', "left", true, false, true);
                            }
                            else {
                                selectedtab = tab;
                                if (hideTabs) {
                                    this.paintRect(0, 0, bounds.width, bounds.height, this.c_border, this.c_bg, false, false, false, false, false);
                                }
                                else {
                                    this.paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(tab, (placement === "left") ? r.width - 1 * this.margin_1 : 0, stacked ? (r.y + r.height - 1) : (placement === "top") ? r.height - 1 : 0, (horizontal || stacked) ? bounds.width : (bounds.width - r.width + 1), stacked ? (bounds.height - r.y - r.height + 1) : horizontal ? (bounds.height - r.height + 1) : bounds.height, true, true, true, true, enabled ? 'e' : 'd', true);
                                }
                                const comp = Gui.get$java_lang_Object$java_lang_Object(selectedtab, ":comp");
                                if ((comp != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                    clipx -= r.x;
                                    clipy -= r.y;
                                    this.g.translate(r.x, r.y);
                                    this.paint$int$int$int$int$java_lang_Object$boolean(clipx, clipy, clipwidth, clipheight, comp, enabled);
                                    clipx += r.x;
                                    clipy += r.y;
                                    this.g.translate(-r.x, -r.y);
                                }
                            }
                            i++;
                        }
                        ;
                    }
                    if (selectedtab != null) {
                        const r = this.getRectangle(selectedtab, "bounds");
                        const ph = stacked ? 3 * this.margin_1 : (horizontal ? 5 * this.margin_1 : 4 * this.margin_1);
                        const pv = stacked ? 1 * this.margin_1 : (horizontal ? 2 * this.margin_1 : 3 * this.margin_1);
                        this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(selectedtab, r.x, r.y, r.width, r.height, clipx, clipy, clipwidth, clipheight, (placement !== "bottom"), (placement !== "right"), !stacked && (placement !== "top"), (placement !== "left"), pv, ph, pv, ph, focus, enabled ? 'b' : 'i', "left", true, false, true);
                    }
                }
                else if (("panel" === classname) || ("dialog" === classname)) {
                    const titleheight = this.getInteger$java_lang_Object$java_lang_String$int(component, ":titleheight", 0);
                    this.g.clipRect(0, 0, bounds.width, bounds.height);
                    const bgicon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "bgimage", null);
                    const border = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", false);
                    let offset = border ? this.margin_1 : 0;
                    if ("dialog" === classname) {
                        const isModel = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "modal", false);
                        const isActive = this.containedIn(component, this.focusowner);
                        if (isModel) {
                            this.g.setClipEnabled(false);
                            this.g.setColor(this.c_overlay);
                            this.g.fillRect(-bounds.x, -bounds.y, this.width, this.height);
                            this.g.setClipEnabled(true);
                        }
                        if (titleheight > 0) {
                            offset = 3 * this.margin_1;
                            this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, 0, 0, bounds.width, offset + titleheight, clipx, clipy, clipwidth, clipheight, border, border, false, border, 2 * this.margin_1, 2 * this.margin_1, 2 * this.margin_1, 2 * this.margin_1, false, isModel && this.flicker ? 'p' : 'g', "left", false, false, true);
                            let controlx = bounds.width - titleheight - 1;
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "closable", true)) {
                                hover = (this.mouseinside === component) && (this.insidepart === ":closebutton");
                                pressed = (this.mousepressed === component) && (this.insidepart === ":closebutton");
                                this.paint$java_lang_Object$int$int$int$int$char$char(component, controlx, offset, titleheight - offset, titleheight - offset, 'c', pressed ? 'p' : (hover ? 'h' : 'g'));
                                controlx -= titleheight;
                            }
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "maximizable", false)) {
                                hover = (this.mouseinside === component) && (this.insidepart === ":maximizebutton");
                                pressed = (this.mousepressed === component) && (this.insidepart === ":maximizebutton");
                                this.paint$java_lang_Object$int$int$int$int$char$char(component, controlx, offset, titleheight - offset, titleheight - offset, 'm', pressed ? 'p' : (hover ? 'h' : 'g'));
                                controlx -= titleheight;
                            }
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "iconifiable", false)) {
                                hover = (this.mouseinside === component) && (this.insidepart === ":iconifybutton");
                                pressed = (this.mousepressed === component) && (this.insidepart === ":iconifybutton");
                                this.paint$java_lang_Object$int$int$int$int$char$char(component, controlx, offset, titleheight - offset, titleheight - offset, 'i', pressed ? 'p' : (hover ? 'h' : 'g'));
                            }
                            this.paintRect(0, offset + titleheight, bounds.width, bounds.height - offset - titleheight, this.c_border, this.c_press, false, border, border, border, true);
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "resizable", false) && Gui.get$java_lang_Object$java_lang_Object(component, ":minimized") == null) {
                                this.g.setColor(this.c_resizeborder);
                                this.g.fillRect(bounds.width - offset, bounds.height - 3 * offset, 2 * this.margin_1, 9 * this.margin_1);
                                this.g.fillRect(bounds.width - 3 * offset, bounds.height - offset, 9 * this.margin_1, 3 * this.margin_1);
                            }
                            this.g.setColor(this.c_window_border);
                            this.g.drawRect(0, 0, bounds.width, bounds.height);
                            if (isActive) {
                                this.g.setColor(this.c_select_bg);
                                if (!isModel || !this.flicker) {
                                    this.g.drawRect(0, 0, bounds.width, bounds.height);
                                }
                            }
                            if (Gui.get$java_lang_Object$java_lang_Object(component, ":minimized") == null) {
                                this.g.clipRect(offset, offset, bounds.width - 2 * offset, bounds.height - 2 * offset);
                                if (bgicon != null && Gui.get$java_lang_Object$java_lang_Object(component, ":port") == null) {
                                    this.g.setColor(this.c_bgimgae_tint);
                                    this.g.drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(bgicon, offset, offset + titleheight, this.c_bgimgae_tint);
                                }
                                this.paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(component, offset, offset + titleheight, bounds.width - 2 * offset - 1, bounds.height - 2 * offset - titleheight, true, border, border, border, 'b', bgicon == null);
                                this.g.clipRect(offset, offset, bounds.width - offset * 2, bounds.height - offset * 2);
                            }
                        }
                        else {
                            this.paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(component, 0, 0, bounds.width, bounds.height, border, border, border, border, 'b', true);
                            if (isActive) {
                                this.g.setColor(this.c_focus);
                                if (!this.flicker) {
                                    this.g.drawRect(0, 0, bounds.width, bounds.height);
                                }
                            }
                            this.g.clipRect(offset, offset, bounds.width - 2 * offset, bounds.height - 2 * offset);
                            if (bgicon != null) {
                                this.g.setColor(this.c_bgimgae_tint);
                                this.g.drawImage$org_shikhar_AWTImage$double$double$double$double(bgicon, offset, offset, bounds.width - 2 * offset, bounds.height - 2 * offset);
                            }
                        }
                    }
                    else {
                        this.paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(component, 0, 0, bounds.width, bounds.height, border, border, border, border, enabled ? 'e' : 'd', true);
                        this.g.clipRect(offset, offset, bounds.width - 2 * offset, bounds.height - 2 * offset);
                        if (bgicon != null && Gui.get$java_lang_Object$java_lang_Object(component, ":port") == null) {
                            this.g.setColor(this.c_bgimgae_tint);
                            this.g.drawImage$org_shikhar_AWTImage$double$double$double$double(bgicon, offset, offset, bounds.width - 2 * offset, bounds.height - 2 * offset);
                        }
                        this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, 0, 0, bounds.width, titleheight, clipx, clipy, clipwidth, clipheight, false, false, false, false, 0, 0, 0, 0, false, enabled ? 'x' : 'd', "left", false, false, bgicon == null);
                    }
                    this.g.clipRect(offset, titleheight + offset, bounds.width - 2 * offset, bounds.height - 2 * offset - titleheight);
                    if (Gui.get$java_lang_Object$java_lang_Object(component, ":port") != null) {
                        this.paintScroll(component, classname, pressed, inside, focus, false, enabled, clipx, clipy, clipwidth, clipheight);
                    }
                    else {
                        if (Gui.get$java_lang_Object$java_lang_Object(component, ":minimized") == null) {
                            for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                                {
                                    this.paint$int$int$int$int$java_lang_Object$boolean(offset, offset, bounds.width - 2 * offset, bounds.height - 2 * offset, comp, enabled);
                                }
                                ;
                            }
                        }
                    }
                }
                else if ("desktop" === classname) {
                    if (component !== this.content)
                        this.paintRect(0, 0, bounds.width, bounds.height, this.c_border, this.c_bg, true, true, true, true, true);
                    this.paintReverse(clipx, clipy, clipwidth, clipheight, Gui.get$java_lang_Object$java_lang_Object(component, ":comp"), enabled);
                    if ((this.tooltipowner != null) && (component === this.content)) {
                        const r = this.getRectangle(this.tooltipowner, ":tooltipbounds");
                        this.paintRect(r.x, r.y, r.width, r.height, this.c_border, this.c_tooltip_bg, true, true, true, true, true);
                        const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(this.tooltipowner, "tooltip", null);
                        this.g.setColor(this.c_tooltip_fg);
                        this.g.drawString(text, r.x + 2, r.y + this.font.getAscent() + 2);
                    }
                }
                else if ("spinbox" === classname) {
                    this.paintField(clipx, clipy, clipwidth, clipheight, component, bounds.width - this.block, bounds.height, focus, enabled, false, 0);
                    this.paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(bounds.width - this.block, 0, this.block, (bounds.height / 2 | 0), 'N', enabled, inside, pressed, "up", true, false, false, true, true);
                    this.paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(bounds.width - this.block, (bounds.height / 2 | 0), this.block, bounds.height - ((bounds.height / 2 | 0)), 'S', enabled, inside, pressed, "down", true, false, true, true, true);
                }
                else if ("progressbar" === classname) {
                    const minimum = this.getDouble$java_lang_Object$java_lang_String$double(component, "minimum", 0);
                    const maximum = this.getDouble$java_lang_Object$java_lang_String$double(component, "maximum", 100);
                    const value = this.getDouble$java_lang_Object$java_lang_String$double(component, "value", (maximum + minimum) / 2);
                    const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    const length = (((value - minimum) * ((horizontal ? bounds.width : bounds.height) - 1) / (maximum - minimum)) | 0);
                    this.paintRect(0, 0, horizontal ? length : bounds.width, horizontal ? bounds.height : length, enabled ? this.c_border : this.c_disable, this.c_select_bg, true, true, horizontal, !horizontal, true);
                    this.paintRect(horizontal ? length : 0, horizontal ? 0 : length, horizontal ? (bounds.width - length) : bounds.width, horizontal ? bounds.height : (bounds.height - length), enabled ? this.c_border : this.c_disable, this.c_bg, true, true, true, true, true);
                }
                else if ("slider" === classname) {
                    const minimum = this.getDouble$java_lang_Object$java_lang_String(component, "minimum");
                    const maximum = this.getDouble$java_lang_Object$java_lang_String(component, "maximum");
                    let value = this.getDouble$java_lang_Object$java_lang_String(component, "value");
                    if (value < minimum || value > maximum) {
                        value = org.shikhar.MathUtils.clamp(value, minimum, maximum);
                        this.setDouble$java_lang_Object$java_lang_String$double(component, "value", value);
                    }
                    const parent = this.getParent(component) !== this.content;
                    const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    let length = (((value - minimum) * ((horizontal ? bounds.width : bounds.height) - this.block) / (maximum - minimum)) | 0);
                    if (!horizontal)
                        length = bounds.height - length - this.block;
                    let barSizeBy2 = ((this.block * 0.2) | 0);
                    const width = bounds.width;
                    let height = bounds.height;
                    let text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", null);
                    let background = enabled ? Gui.get$java_lang_Object$java_lang_Object(component, "background") : this.c_bg;
                    if (background == null)
                        background = this.c_bg;
                    let foreground = Gui.get$java_lang_Object$java_lang_Object(component, "foreground");
                    if (foreground == null)
                        foreground = this.c_fg;
                    if (text != null) {
                        if (horizontal)
                            height -= this.getSize(component, 0, 0, false).height;
                    }
                    if (parent === false) {
                        this.g.setClipEnabled(false);
                        let r = Math.fround(this.block * 0.12);
                        this.g.setColor(foreground);
                        let hby2 = height + (this.block / 2 | 0);
                        if (horizontal) {
                            this.g.setColor(background);
                            this.g.fillRect(r, hby2 - r, bounds.width - 2 * r, 2 * r);
                            this.g.drawRect(r, hby2 - r, bounds.width - 2 * r, 2 * r);
                            r = ((focus ? this.block * 0.45 : this.block * 0.4) | 0);
                            barSizeBy2 = (r | 0);
                            this.g.setColor(foreground);
                            this.g.fillRect(length + barSizeBy2 - r, hby2 - r, 2 * r, 2 * r);
                            this.g.drawRect(length + barSizeBy2 - r, hby2 - r, 2 * r, 2 * r);
                            r = ((Math.fround(this.block * 0.3)) | 0);
                            this.g.setColor(foreground);
                            this.g.fillRect(length + barSizeBy2 - r, hby2 - r, 2 * r, 2 * r);
                            this.g.drawRect(length + barSizeBy2 - r, hby2 - r, 2 * r, 2 * r);
                        }
                        else {
                            hby2 = (this.block / 2 | 0);
                            this.g.setColor(background);
                            this.g.fillRect(hby2 - r, 0, 2 * r, bounds.height - 2 * r);
                            this.g.drawRect(hby2 - r, 0, 2 * r, bounds.height - 2 * r);
                            r = ((focus ? this.block * 0.45 : this.block * 0.4) | 0);
                            this.g.setColor(foreground);
                            barSizeBy2 = (r | 0);
                            this.g.fillRect(hby2 - r, length + barSizeBy2 - r, 2 * r, 2 * r);
                            this.g.drawRect(hby2 - r, length + barSizeBy2 - r, 2 * r, 2 * r);
                            r = ((Math.fround(this.block * 0.3)) | 0);
                            this.g.setColor(foreground);
                            this.g.fillRect(hby2 - r, length + barSizeBy2 - r, 2 * r, 2 * r);
                            this.g.drawRect(hby2 - r, length + barSizeBy2 - r, 2 * r, 2 * r);
                        }
                        if (text != null) {
                            const currentFont = this.g.getFont();
                            const customfont = Gui.get$java_lang_Object$java_lang_Object(component, "font");
                            if (customfont != null) {
                                this.g.setFont(customfont);
                            }
                            text = /* replaceAll */ text.replace(new RegExp("value", 'g'), value + "");
                            text = /* replaceAll */ text.replace(new RegExp("name", 'g'), this.getString$java_lang_Object$java_lang_String(component, "name") + "");
                            this.g.setColor(foreground);
                            if (horizontal)
                                this.g.drawString(text, parent ? 0 : length, ((hby2 - this.block * 0.7) | 0));
                            else
                                this.g.drawString(text, this.block + 4 * this.margin_1, ((Math.fround(length + Math.fround(this.block * 0.8))) | 0));
                            if (customfont != null)
                                this.g.setFont(currentFont);
                        }
                        this.g.setClipEnabled(true);
                    }
                    else {
                        this.paintRect(horizontal ? 0 : barSizeBy2, horizontal ? bounds.height - height + barSizeBy2 : 0, horizontal ? length : (width - barSizeBy2 * 2), horizontal ? (height - barSizeBy2 * 2) : length, enabled ? this.c_border : this.c_disable, background, true, true, horizontal, !horizontal, true);
                        this.paintRect(horizontal ? (this.block + length) : barSizeBy2, horizontal ? bounds.height - height + barSizeBy2 : (this.block + length), width - (horizontal ? (this.block + length) : barSizeBy2 * 2), height - (horizontal ? barSizeBy2 * 2 : (this.block + length)), enabled ? this.c_border : this.c_disable, this.c_hover, horizontal, !horizontal, true, true, true);
                        this.paintRect(horizontal ? length : 0, horizontal ? bounds.height - height : length, horizontal ? this.block : width, horizontal ? height : this.block, enabled ? this.c_border : this.c_disable, (inside !== pressed && enabled) ? this.c_hover : this.c_bg, true, true, true, true, true);
                        if (focus) {
                            this.drawFocus(0, 0, bounds.width, bounds.height);
                        }
                        if (text != null) {
                            const currentFont = this.g.getFont();
                            const customfont = Gui.get$java_lang_Object$java_lang_Object(component, "font");
                            if (customfont != null) {
                                this.g.setFont(customfont);
                            }
                            text = /* replaceAll */ text.replace(new RegExp("value", 'g'), value + "");
                            text = /* replaceAll */ text.replace(new RegExp("name", 'g'), this.getString$java_lang_Object$java_lang_String(component, "name") + "");
                            this.g.setColor(foreground);
                            if (horizontal)
                                this.g.drawString(text, parent ? 0 : length, this.g.getFont().getHeight() - 3 * this.margin_1);
                            else
                                this.g.drawString(text, this.block, length + this.block - barSizeBy2 * 2);
                            this.g.setFont(currentFont);
                        }
                    }
                }
                else if ("splitpane" === classname) {
                    const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                    const divider = this.getInteger$java_lang_Object$java_lang_String$int(component, "divider", -1);
                    this.paintRect(horizontal ? divider : 0, horizontal ? 1 * this.margin_1 : divider, horizontal ? 5 * this.margin_1 : bounds.width, horizontal ? bounds.height - 2 * this.margin_1 : 5 * this.margin_1, this.c_border, this.c_bg, false, false, false, false, true);
                    if (focus) {
                        if (horizontal) {
                            this.drawFocus(divider, 0, 4 * this.margin_1, bounds.height);
                        }
                        else {
                            this.drawFocus(0, divider, bounds.width - this.margin_1, 4 * this.margin_1);
                        }
                    }
                    this.g.setColor(enabled ? this.c_border : this.c_disable);
                    const xy = horizontal ? bounds.height : bounds.width;
                    const xy1 = Math.max(0, (xy / 2 | 0) - 12 * this.margin_1);
                    const xy2 = Math.min((xy / 2 | 0) + 12 * this.margin_1, xy - 1);
                    for (let i = divider + 1 * this.margin_1; i < divider + 4 * this.margin_1; i += 2 * this.margin_1) {
                        {
                            if (horizontal) {
                                this.g.drawLine(i, xy1, i, xy2);
                            }
                            else {
                                this.g.drawLine(xy1, i, xy2, i);
                            }
                        }
                        ;
                    }
                    const comp1 = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                    if (comp1 != null) {
                        if (divider > 0)
                            this.paint$int$int$int$int$java_lang_Object$boolean(clipx, clipy, clipwidth, clipheight, comp1, enabled);
                        const comp2 = Gui.get$java_lang_Object$java_lang_Object(comp1, ":next");
                        if (comp2 != null) {
                            this.paint$int$int$int$int$java_lang_Object$boolean(clipx, clipy, clipwidth, clipheight, comp2, enabled);
                        }
                    }
                }
                else if (("list" === classname) || ("table" === classname) || ("tree" === classname)) {
                    this.paintScroll(component, classname, pressed, inside, focus, focus && (Gui.get$java_lang_Object$java_lang_Object(component, ":comp") == null), enabled, clipx, clipy, clipwidth, clipheight);
                }
                else if ("separator" === classname) {
                    this.g.setColor(enabled ? this.c_border : this.c_disable);
                    this.g.fillRect(0, 0, bounds.width + Gui.evm, bounds.height + Gui.evm);
                }
                else if ("menubar" === classname) {
                    const selected = Gui.get$java_lang_Object$java_lang_Object(component, "selected");
                    const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top") === "top";
                    let lastx = 0;
                    for (let menu = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Gui.get$java_lang_Object$java_lang_Object(menu, ":next")) {
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
                            this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(menu, mb.x, 0, mb.width, bounds.height, clipx, clipy, clipwidth, clipheight, placement ? armed : true, armed, placement ? true : armed, armed, 1, 3, 1, 3, false, enabled ? (menuenabled ? (armed ? 's' : (hoover ? 'h' : 'g')) : 'r') : 'd', "left", true, false, true);
                            lastx = mb.x + mb.width;
                        }
                        ;
                    }
                    this.paintRect(lastx, 0, bounds.width - lastx, bounds.height, enabled ? this.c_border : this.c_disable, enabled ? this.c_ctrl : this.c_bg, !placement, false, placement, false, true);
                }
                else if (":popup" === classname) {
                    this.c_shadow.a = 0.3;
                    this.g.setColor(this.c_shadow);
                    this.g.fillRect(2, 2, bounds.width, bounds.height);
                    this.paintRect(0, 0, bounds.width , bounds.height, this.c_border, this.c_menu_bg, true, true, true, true, true);
                    let leftShadowDrawn = true;
                    const selected = Gui.get$java_lang_Object$java_lang_Object(component, "selected");
                    for (let menu = Gui.get$java_lang_Object$java_lang_Object(Gui.get$java_lang_Object$java_lang_Object(component, "menu"), ":comp"); menu != null; menu = Gui.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(menu, "visible", true)) {
                                continue;
                            }
                            const r = this.getRectangle(menu, "bounds");
                            if (clipy + clipheight <= r.y) {
                                break;
                            }
                            if (clipy >= r.y + r.height) {
                                continue;
                            }
                            const itemclass = Gui.getComponentClass(menu);
                            if (itemclass === "separator") {
                                this.g.setColor(this.c_border);
                                this.g.fillRect(r.x - 1, r.y, bounds.width + Gui.evm, r.height + Gui.evm + this.margin_1);
                            }
                            else {
                                const armed = (selected === menu);
                                const menuenabled = this.getBoolean$java_lang_Object$java_lang_String$boolean(menu, "enabled", true);
                                this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(menu, r.x, r.y, bounds.width - 1, r.height + 1, clipx, clipy, clipwidth, clipheight, false, false, false, false, 2 * this.margin_1, (itemclass === "checkboxmenuitem") ? (this.block + 7 * this.margin_1) : 4 * this.margin_1, 2 * this.margin_1, 2 * this.margin_1, false, menuenabled ? (armed ? 's' : 't') : 'd', "left", true, false, true);
                                if (itemclass === "panel") {
                                    this.paint$int$int$int$int$java_lang_Object$boolean(clipx, clipy, clipwidth, clipheight, menu, enabled);
                                }
                                else if (itemclass === "checkboxmenuitem") {
                                    leftShadowDrawn = false;
                                    const checked = this.getBoolean$java_lang_Object$java_lang_String$boolean(menu, "selected", false);
                                    const group = this.getString$java_lang_Object$java_lang_String$java_lang_String(menu, "group", null);
                                    this.g.translate(r.x + 3 * this.margin_1, r.y + 2 * this.margin_1);
                                    this.g.setColor(menuenabled ? this.c_border : this.c_disable);
                                    if (group == null) {
                                        this.g.drawRect(this.margin_1, this.margin_1, this.block - 3 * this.margin_1, this.block - 3 * this.margin_1);
                                    }
                                    else {
                                        this.g.drawRect(this.margin_1, this.margin_1, this.block - 3 * this.margin_1, this.block - 3 * this.margin_1);
                                    }
                                    if (checked) {
                                        this.g.setColor(menuenabled ? this.c_menu_fg : this.c_disable);
                                        if (group == null) {
                                            const lw = this.g.setLineWidth(1.5);
                                            this.g.drawLine(2 * this.margin_1, (3 * this.block / 4 | 0) - 4 * this.margin_1, 2 * this.margin_1 + (this.block / 4 | 0), this.block - 4 * this.margin_1);
                                            this.g.drawLine(2 * this.margin_1 + (this.block / 4 | 0), this.block - 4 * this.margin_1, this.block - 5 * this.margin_1, (this.block / 4 | 0));
                                            this.g.setLineWidth(lw);
                                        }
                                        else {
                                            this.g.fillRect(5 * this.margin_1, 5 * this.margin_1, this.block - 10 * this.margin_1 + Gui.evm, this.block - 10 * this.margin_1 + Gui.evm);
                                            this.g.drawRect(4 * this.margin_1, 4 * this.margin_1, this.block - 9 * this.margin_1, this.block - 9 * this.margin_1);
                                        }
                                    }
                                    this.g.translate(-r.x - 3 * this.margin_1, -r.y - 2 * this.margin_1);
                                }
                                if (itemclass === "menu") {
                                    this.paintArrow$int$int$int$int$char(r.x + bounds.width - this.block, r.y, this.block, r.height, 'E');
                                }
                                else {
                                    const accelerator = this.getAccelerator(menu);
                                    if (accelerator != null) {
                                        this.g.drawString(accelerator, bounds.width - 4 * this.margin_1 - (this.font).stringWidth(accelerator), r.y + 12 * this.margin_1);
                                    }
                                }
                            }
                        }
                        ;
                    }
                    if (leftShadowDrawn) {
                        this.c_shadow.a = 0.1;
                        this.g.setColor(this.c_shadow);
                        this.g.fillRect(2, 1, 9 * this.margin_1 + this.block, bounds.height - 1);
                        this.c_shadow.a = 0.8;
                    }
                }
                else if ("bean" === classname) {
                    Gui.get$java_lang_Object$java_lang_Object(component, "bean").paint(this.g);
                }
                else {
                }
                this.g.translate(-bounds.x, -bounds.y);
                clipx += bounds.x;
                clipy += bounds.y;
                this.g.setClip(prevClip.x, prevClip.y, prevClip.width, prevClip.height);
            }
            paintReverse(clipx, clipy, clipwidth, clipheight, component, enabled) {
                if (component != null) {
                    const bounds = this.getRectangle(component, "bounds");
                    if (bounds != null && ((clipx < bounds.x) || (clipx + clipwidth > bounds.x + bounds.width) || (clipy < bounds.y) || (clipy + clipheight > bounds.y + bounds.height))) {
                        this.paintReverse(clipx, clipy, clipwidth, clipheight, Gui.get$java_lang_Object$java_lang_Object(component, ":next"), enabled);
                    }
                    this.paint$int$int$int$int$java_lang_Object$boolean(clipx, clipy, clipwidth, clipheight, component, enabled);
                }
            }
            paintField(clipx, clipy, clipwidth, clipheight, component, width, height, focus, enabled, hidden, left) {
                const editable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true);
                this.paintRect(0, 0, width, height, enabled ? this.c_border : this.c_disable, editable ? this.getColor(component, "background", this.c_text_bg) : this.c_bg, true, true, true, true, true);
                let text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                if (text == null) {
                    text = "";
                }
                const offset = this.getInteger$java_lang_Object$java_lang_String$int(component, ":offset", 0);
                let currentfont = Gui.get$java_lang_Object$java_lang_Object(component, "font");
                if (currentfont != null) {
                    this.g.setFont(currentfont);
                }
                currentfont = this.g.getFont();
                let caret = 0;
                let start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                let end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                if (start > text.length)
                    start = text.length;
                if (end > text.length)
                    end = text.length;
                if (focus) {
                    caret = hidden ? (currentfont.charWidth('*') * end) : currentfont.stringWidth(text.substring(0, end));
                    if (start !== end) {
                        const is = hidden ? (currentfont.charWidth('*') * start) : currentfont.stringWidth(text.substring(0, start));
                        this.g.setColor(this.c_select_bg);
                        this.g.fillRect(2 * this.margin_1 + left - offset + Math.min(is, caret), this.margin_1, Math.abs(caret - is) + Gui.evm, height - 2 * this.margin_1 + Gui.evm);
                    }
                }
                if (focus) {
                    this.cursor_timer++;
                    Gui.repaintNeeded = true;
                    if (this.cursor_timer >= 3 * this.CURSOR_DELAY)
                        this.cursor_timer = 0;
                    if (this.cursor_timer < 1.8 * this.CURSOR_DELAY) {
                        this.g.setColor(this.c_focus);
                        this.g.fillRect(this.margin_1 + left - offset + caret, this.margin_1, this.margin_1 + Gui.evm, height - 2 * this.margin_1 + Gui.evm);
                    }
                }
                let fx = 2 * this.margin_1 + left - offset;
                const fy = ((height + currentfont.getAscent() - currentfont.getDescent()) / 2 | 0);
                this.g.setColor(enabled ? this.getColor(component, "foreground", this.c_text_fg) : this.c_disable);
                if (hidden) {
                    const fh = currentfont.charWidth('*');
                    for (let i = text.length; i > 0; i--) {
                        {
                            this.g.drawString("*", fx, fy);
                            fx += fh;
                        }
                        ;
                    }
                }
                else {
                    if (focus && start !== end) {
                        if (start > end) {
                            const temp = end;
                            end = start;
                            start = temp;
                        }
                        start = Math.min(start, end);
                        end = Math.max(start, end);
                        for (let i = 0; i < text.length; i++) {
                            {
                                if (i === start)
                                    this.g.setColor(this.c_select_fg);
                                if (i === end)
                                    this.g.setColor(enabled ? this.getColor(component, "foreground", this.c_text_fg) : this.c_disable);
                                const fh = currentfont.charWidth(text.charAt(i));
                                this.g.drawString(text.charAt(i) + "", fx, fy);
                                fx += fh;
                            }
                            ;
                        }
                    }
                    else {
                        this.g.drawString(text, fx, fy);
                    }
                }
                if (currentfont != null) {
                    this.g.setFont(this.font);
                }
                if (focus) {
                    this.drawFocus(1, 1, width - 2, height - 2);
                }
            }
            /**
             * @param {*} component scrollable widget
             * @param {string} classname
             * @param {boolean} pressed
             * @param {boolean} inside
             * @param {boolean} focus
             * @param {boolean} enabled
             * @param g grahics context
             * @param {number} clipx current cliping x location relative to the component
             * @param {number} clipy y location of the cliping area relative to the component
             * @param {number} clipwidth width of the cliping area
             * @param {number} clipheight height of the cliping area
             * @param header column height
             * @param topborder bordered on the top if true
             * @param border define left, bottom, and right border if true
             * @param {boolean} drawfocus
             * @private
             */
            paintScroll(component, classname, pressed, inside, focus, drawfocus, enabled, clipx, clipy, clipwidth, clipheight) {
                const port = this.getRectangle(component, ":port");
                const horizontal = this.getRectangle(component, ":horizontal");
                const vertical = this.getRectangle(component, ":vertical");
                const view = this.getRectangle(component, ":view");
                const prevClip = this.g.getClipBounds();
                if (horizontal != null && horizontal.width > 10 && port.height > 0) {
                    const x = horizontal.x;
                    const y = horizontal.y + 1;
                    const width = horizontal.width;
                    const height = horizontal.height - 1;
                    const block = Math.min((horizontal.width / 2 | 0), this.block);
                    this.paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(x, y, block, height, 'W', enabled, inside, pressed, "left", true, true, true, false, true);
                    this.paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(x + width - block, y, block, height, 'E', enabled, inside, pressed, "right", true, false, true, true, true);
                    const track = width - (2 * block);
                    if (track < 10) {
                        this.paintRect(x + block, y, track, height, enabled ? this.c_border : this.c_disable, this.c_bg, true, true, true, true, true);
                    }
                    else {
                        const knob = Math.max((track * port.width / view.width | 0), 10);
                        const decrease = (view.x * (track - knob) / (view.width - port.width) | 0);
                        this.paintRect(x + block, y, decrease, height, enabled ? this.c_border : this.c_disable, this.c_bg, false, true, true, false, true);
                        this.paintRect(x + block + decrease, y, knob, height, enabled ? this.c_border : this.c_disable, enabled ? this.c_ctrl : this.c_bg, true, true, true, true, true);
                        const n = Math.min(5, ((knob - 4) / 3 | 0));
                        this.g.setColor(enabled ? this.c_border : this.c_disable);
                        const cx = (x + block + decrease) + ((knob + 2 - n * 3) / 2 | 0);
                        for (let i = 0; i < n; i++) {
                            {
                                this.g.drawLine(cx + i * 3, y + 3, cx + i * 3, y + height - 5);
                            }
                            ;
                        }
                        const increase = track - decrease - knob;
                        this.paintRect(x + block + decrease + knob, y, increase, height, enabled ? this.c_border : this.c_disable, this.c_bg, false, false, true, true, true);
                    }
                }
                if (vertical != null && port.width > 0 && vertical.height > 10) {
                    const x = vertical.x + 1;
                    const y = vertical.y;
                    const width = vertical.width - 1;
                    const height = vertical.height;
                    const block = Math.min((vertical.height / 2 | 0), this.block);
                    this.paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(x, y, width, block, 'N', enabled, inside, pressed, "up", true, true, false, true, false);
                    this.paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(x, y + height - block, width, block, 'S', enabled, inside, pressed, "down", false, true, true, true, false);
                    const track = height - (2 * block);
                    if (track < 10) {
                        this.paintRect(x, y + block, width, track, enabled ? this.c_border : this.c_disable, this.c_bg, true, true, true, true, false);
                    }
                    else if (view.height > 0) {
                        const knob = Math.max((track * port.height / view.height | 0), 10);
                        const decrease = (view.y * (track - knob) / (view.height - port.height) | 0);
                        this.paintRect(x, y + block, width, decrease, enabled ? this.c_border : this.c_disable, this.c_bg, true, false, false, true, false);
                        this.paintRect(x, y + block + decrease, width, knob, enabled ? this.c_border : this.c_disable, enabled ? this.c_ctrl : this.c_bg, true, true, true, true, false);
                        const n = Math.min(5, ((knob - 4) / 3 | 0));
                        this.g.setColor(enabled ? this.c_border : this.c_disable);
                        const cy = (y + block + decrease) + ((knob + 2 - n * 3) / 2 | 0);
                        for (let i = 0; i < n; i++) {
                            {
                                this.g.drawLine(x + 3, cy + i * 3, x + width - 5, cy + i * 3);
                            }
                            ;
                        }
                        const increase = track - decrease - knob;
                        this.paintRect(x, y + block + decrease + knob, width, increase, enabled ? this.c_border : this.c_disable, this.c_bg, true, false, true, true, false);
                    }
                }
                const hneed = (horizontal != null);
                const vneed = (vertical != null);
                const border = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "border", true);
                if (("panel" !== classname) && ("dialog" !== classname)) {
                    this.paintRect(port.x - 1, port.y - 1, port.width + (vneed ? 1 : 2), port.height + (hneed ? 1 : 2), enabled ? this.c_border : this.c_disable, this.getColor(component, "background", this.c_text_bg), border, border, border && !hneed, border && !vneed, true);
                    if (border) {
                    }
                    if ("table" === classname) {
                        const header = Gui.get$java_lang_Object$java_lang_Object(component, "header");
                        if (header != null) {
                            const columnwidths = Gui.get$java_lang_Object$java_lang_Object(component, ":widths");
                            let column = Gui.get$java_lang_Object$java_lang_Object(header, ":comp");
                            let x = 0;
                            this.g.clipRect(0, 0, port.width + 2, port.y);
                            for (let i = 0; i < columnwidths.length; i++) {
                                {
                                    if (i !== 0) {
                                        column = Gui.get$java_lang_Object$java_lang_Object(column, ":next");
                                    }
                                    const lastcolumn = (i === columnwidths.length - 1);
                                    const width = lastcolumn ? (view.width - x + 2) : columnwidths[i];
                                    this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(column, x - view.x, 0, width, port.y - 1, clipx, clipy, clipwidth, clipheight, true, true, false, lastcolumn, 1, 1, 0, 0, false, enabled ? 'g' : 'd', "left", false, false, true);
                                    const sort = Gui.get$java_lang_Object$java_lang_Object(column, "sort");
                                    if (sort != null) {
                                        this.paintArrow$int$int$int$int$char(x - view.x + width - this.block, 0, this.block, port.y, (sort === "ascent") ? 'S' : 'N');
                                    }
                                    x += width;
                                }
                                ;
                            }
                            this.g.setClip(prevClip.x, prevClip.y, prevClip.width, prevClip.height);
                        }
                    }
                }
                const x1 = Math.max(clipx, port.x);
                const x2 = Math.min(clipx + clipwidth, port.x + port.width);
                const y1 = Math.max(clipy, port.y);
                const y2 = Math.min(clipy + clipheight, port.y + port.height);
                if ((x2 > x1) && (y2 > y1)) {
                    this.g.clipRect(x1, y1, x2 - x1, y2 - y1);
                    this.g.translate(port.x - view.x, port.y - view.y);
                    this.paint$java_lang_Object$java_lang_String$boolean$boolean$int$int$int$int$int$int(component, classname, focus, enabled, view.x - port.x + x1, view.y - port.y + y1, x2 - x1, y2 - y1, port.width, view.width);
                    this.g.translate(view.x - port.x, view.y - port.y);
                }
                this.g.setClip(prevClip.x, prevClip.y, prevClip.width, prevClip.height);
                if (focus && drawfocus) {
                    this.drawFocus(port.x, port.y, port.width, port.height);
                }
            }
            paint$java_lang_Object$java_lang_String$boolean$boolean$int$int$int$int$int$int(component, classname, focus, enabled, clipx, clipy, clipwidth, clipheight, portwidth, viewwidth) {
                if ("textarea" === classname) {
                    const bgicon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "bgimage", null);
                    if (bgicon != null) {
                        this.g.setColor(this.c_bgimgae_tint);
                        this.g.drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(bgicon, 0, 0, null);
                    }
                    const editable = this.getBoolean$java_lang_Object$java_lang_String(component, "editable");
                    const chars = Gui.get$java_lang_Object$java_lang_Object(component, ":text");
                    const start = focus ? this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0) : 0;
                    const end = focus ? this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0) : 0;
                    const is = Math.min(start, end);
                    const ie = Math.max(start, end);
                    let customfont = Gui.get$java_lang_Object$java_lang_Object(component, "font");
                    if (customfont != null) {
                        this.g.setFont(customfont);
                    }
                    customfont = this.g.getFont();
                    const fontascent = customfont.getAscent();
                    const fontheight = customfont.getHeight();
                    let ascent = 1;
                    const styles = this.getProperty(component, "drawstyle");
                    const textcolor = enabled ? this.getColor(component, "foreground", this.c_text_fg) : this.c_disable;
                    for (let i = 0, j = 0; j <= chars.length; j++) {
                        {
                            if ((j === chars.length) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[j]) == '\n'.charCodeAt(0))) {
                                if (clipy + clipheight <= ascent) {
                                    break;
                                }
                                if (true || clipy < ascent + fontheight) {
                                    let h = fontheight;
                                    if (styles != null) {
                                        h = this.getCharsHeight(chars, i, j - i, styles);
                                        if (clipy > ascent + h) {
                                            ascent += h;
                                            i = j + 1;
                                            continue;
                                        }
                                        ascent += h - fontheight;
                                    }
                                    this.g.setColor(textcolor);
                                    this.g.drawChars(chars, i, j - i, this.margin_1, ascent + fontascent);
                                    if (focus && (is !== ie) && (ie >= i) && (is <= j)) {
                                        const xs = (is < i) ? -1 : ((is > j) ? (viewwidth - this.margin_1) : this.getCharsWidth(chars, i, is - i, styles)) + (this.margin_1 * 3 / 2 | 0);
                                        const xe = ((j !== -1) && (ie > j)) ? (viewwidth - this.margin_1) : this.getCharsWidth(chars, i, ie - i, styles);
                                        this.g.setColor(this.c_select_bg);
                                        this.g.fillRect(xs, ascent - (h - fontheight), xe - xs + Gui.evm, h + Gui.evm);
                                        this.g.setColor(this.c_select_fg);
                                        this.g.drawChars(chars, (is < i ? i : is), (ie > j ? j : ie) - (is < i ? i : is), xs, ascent + fontascent);
                                    }
                                    if (editable && focus && (end >= i) && (end <= j)) {
                                        this.cursor_timer++;
                                        Gui.repaintNeeded = true;
                                        if (this.cursor_timer >= 3 * this.CURSOR_DELAY)
                                            this.cursor_timer = 0;
                                        if (this.cursor_timer < 1.8 * this.CURSOR_DELAY) {
                                            const caret = (styles == null ? customfont.charsWidth(chars, i, end - i) : this.getCharsWidth(chars, i, end - i, styles));
                                            this.g.setColor(textcolor);
                                            h = (styles == null ? fontheight : this.getCharsHeight(chars, end > 0 ? end - 1 : 0, 1, styles));
                                            this.g.fillRect(caret + this.margin_1, ascent - (h - fontheight), this.margin_1 + Gui.evm, h + Gui.evm);
                                        }
                                    }
                                }
                                ascent += fontheight;
                                i = j + 1;
                            }
                        }
                        ;
                    }
                    if (customfont != null) {
                        this.g.setFont(this.font);
                    }
                }
                else if (":combolist" === classname) {
                    const lead = Gui.get$java_lang_Object$java_lang_Object(component, ":lead");
                    const bounds = this.getRectangle(component, "bounds");
                    for (let choice = Gui.get$java_lang_Object$java_lang_Object(Gui.get$java_lang_Object$java_lang_Object(component, "combobox"), ":comp"); choice != null; choice = Gui.get$java_lang_Object$java_lang_Object(choice, ":next")) {
                        {
                            const r = this.getRectangle(choice, "bounds");
                            if (r == null)
                                continue;
                            if (clipy + clipheight <= r.y) {
                                break;
                            }
                            if (clipy >= r.y + r.height) {
                                continue;
                            }
                            const itemclass = Gui.getComponentClass(choice);
                            const itemenabled = this.getBoolean$java_lang_Object$java_lang_String$boolean(choice, "enabled", true);
                            if (itemclass === "checkboxmenuitem") {
                                const armed = (lead === choice);
                                this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(choice, r.x, r.y, bounds.width - 2, r.height, clipx, clipy, clipwidth, clipheight, false, false, false, false, 2 * this.margin_1, (this.block + 7 * this.margin_1), 2 * this.margin_1, 4 * this.margin_1, false, itemenabled ? (armed ? 's' : 't') : 'd', "left", true, false, true);
                                const checked = this.getBoolean$java_lang_Object$java_lang_String$boolean(choice, "selected", false);
                                this.g.translate(r.x + 3 * this.margin_1, r.y + 2 * this.margin_1);
                                this.g.setColor(itemenabled ? this.c_border : this.c_disable);
                                this.g.drawRect(this.margin_1, this.margin_1, this.block - 3 * this.margin_1, this.block - 3 * this.margin_1);
                                if (checked) {
                                    this.g.setColor(itemenabled ? this.c_text_fg : this.c_disable);
                                    const lw = this.g.setLineWidth(1.5);
                                    this.g.drawLine(2 * this.margin_1, (3 * this.block / 4 | 0) - 4 * this.margin_1, 2 * this.margin_1 + (this.block / 4 | 0), this.block - 4);
                                    this.g.drawLine(2 * this.margin_1 + (this.block / 4 | 0), this.block - 4 * this.margin_1, this.block - 5 * this.margin_1, (this.block / 4 | 0));
                                    this.g.setLineWidth(lw);
                                }
                                this.g.translate(-r.x - 3 * this.margin_1, -r.y - 2 * this.margin_1);
                            }
                            else if ("separator" === itemclass) {
                                this.g.setColor(enabled ? this.c_border : this.c_disable);
                                this.g.fillRect(r.x, r.y + 1, bounds.width - 2 + Gui.evm, 1 + Gui.evm);
                            }
                            else {
                                this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(choice, r.x, r.y, portwidth, r.height, clipx, clipy, clipwidth, clipheight, false, false, false, false, 2, 4, 2, 4, false, itemenabled ? ((lead === choice) ? 's' : 't') : 'd', "left", false, false, true);
                            }
                        }
                        ;
                    }
                }
                else if (("panel" === classname) || ("dialog" === classname)) {
                    const bgicon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "bgimage", null);
                    if (bgicon != null) {
                        this.g.setColor(this.c_bgimgae_tint);
                        this.g.drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(bgicon, 0, 0, null);
                    }
                    if (clipwidth > 1 && clipheight > 1) {
                        for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                            {
                                this.paint$int$int$int$int$java_lang_Object$boolean(clipx, clipy, clipwidth, clipheight, comp, enabled);
                            }
                            ;
                        }
                    }
                }
                else {
                    let lead = Gui.get$java_lang_Object$java_lang_Object(component, ":lead");
                    const columnwidths = ("table" === classname) ? Gui.get$java_lang_Object$java_lang_Object(component, ":widths") : null;
                    const line = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "line", true);
                    const iline = line ? 1 : 0;
                    const angle = ("tree" === classname) && this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "angle", false);
                    for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"), next = null; item != null; item = next) {
                        {
                            if (focus && (lead == null)) {
                                Gui.set(component, ":lead", lead = item);
                            }
                            const r = this.getRectangle(item, "bounds");
                            if (r == null)
                                continue;
                            if (clipy + clipheight <= r.y) {
                                break;
                            }
                            let subnode = false;
                            let expanded = false;
                            if ("tree" !== classname) {
                                next = Gui.get$java_lang_Object$java_lang_Object(item, ":next");
                            }
                            else {
                                subnode = (next = Gui.get$java_lang_Object$java_lang_Object(item, ":comp")) != null;
                                expanded = subnode && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true);
                                if (!expanded) {
                                    for (let node = item; (node !== component) && ((next = Gui.get$java_lang_Object$java_lang_Object(node, ":next")) == null); node = this.getParent(node)) {
                                        ;
                                    }
                                }
                            }
                            if (clipy >= r.y + r.height + iline) {
                                if (angle) {
                                    const nodebelow = Gui.get$java_lang_Object$java_lang_Object(item, ":next");
                                    if (nodebelow != null) {
                                        this.g.setColor(this.c_bg);
                                        const x = r.x - (this.block / 2 | 0);
                                        this.g.drawLine(x, r.y, x, this.getRectangle(nodebelow, "bounds").y);
                                    }
                                }
                                continue;
                            }
                            let background = Gui.get$java_lang_Object$java_lang_Object(component, "background");
                            if (background == null)
                                background = this.c_text_bg;
                            const selected = this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false);
                            this.paintRect(("tree" !== classname) ? 0 : r.x, r.y, ("tree" !== classname) ? viewwidth : r.width, r.height, null, selected ? this.c_select_bg : background, false, false, false, false, true);
                            if (focus && (lead === item)) {
                                this.drawFocus(("tree" !== classname) ? 0 : r.x, r.y, (("tree" !== classname) ? viewwidth : r.width), r.height-1);
                            }
                            if (line) {
                                this.g.setColor(background.darker());
                                this.g.drawLine(0, r.y + r.height, viewwidth, r.y + r.height);
                                this.g.setColor(this.c_text_bg);
                            }
                            if ("table" !== classname) {
                                const itemenabled = enabled && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "enabled", true);
                                this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(item, r.x, r.y, viewwidth, r.height, clipx, clipy, clipwidth, clipheight, false, false, false, false, 1, 3, 1, 3, false, itemenabled ? 'e' : 'd', "left", false, false, false);
                                if ("tree" === classname) {
                                    const x = r.x - (this.block / 2 | 0);
                                    const y = r.y + ((r.height - 1) / 2 | 0);
                                    if (angle) {
                                        this.g.setColor(this.c_bg);
                                        this.g.drawLine(x, r.y, x, y);
                                        this.g.drawLine(x, y, r.x - this.margin_1, y);
                                        const nodebelow = Gui.get$java_lang_Object$java_lang_Object(item, ":next");
                                        if (nodebelow != null) {
                                            this.g.drawLine(x, y, x, this.getRectangle(nodebelow, "bounds").y);
                                        }
                                    }
                                    if (subnode) {
                                        let dx = ((this.block * 0.3) | 0);
                                        this.paintRect(x - dx, y - dx, 2 * dx, 2 * dx, itemenabled ? this.c_border : this.c_disable, itemenabled ? this.c_ctrl : this.c_bg, true, true, true, true, true);
                                        this.g.setColor(itemenabled ? this.c_text_fg : this.c_disable);
                                        dx = (this.block / 5 | 0);
                                        this.g.drawLine(x - dx, y, x + dx, y);
                                        if (!expanded) {
                                            this.g.drawLine(x, y - dx, x, y + dx);
                                        }
                                    }
                                }
                            }
                            else {
                                let i = 0;
                                let x = 0;
                                for (let cell = Gui.get$java_lang_Object$java_lang_Object(item, ":comp"); cell != null; cell = Gui.get$java_lang_Object$java_lang_Object(cell, ":next")) {
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
                                            this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(cell, r.x + x, r.y, iwidth, r.height - 1, clipx, clipy, clipwidth, clipheight, false, false, false, false, 1, 1, 1, 1, false, cellenabled ? 'e' : 'd', "left", false, false, false);
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
            paintRect(x, y, width, height, border, bg, top, left, bottom, right, horizontal) {
                if ((width <= 0) || (height <= 0))
                    return;
                if (bg != null) {
                    if (bg === this.c_ctrl) {
                        this.fill(x, y, width, height, horizontal, null);
                    }
                    else {
                        this.g.setColor(bg);
                        this.g.fillRect(x, y, width + Gui.evm, height + Gui.evm);
                    }
                }
                this.g.setColor(border);
                if (top && bottom && left && right) {
                    this.g.drawRect(x, y, width, height);
                }
                else {
                    if (top) {
                        this.g.drawLine(x + width, y, x, y);
                        if (height <= 0)
                            return;
                    }
                    if (left) {
                        this.g.drawLine(x, y, x, y + height);
                        if (width <= 0)
                            return;
                    }
                    if (bottom) {
                        this.g.drawLine(x, y + height, x + width - 1, y + height);
                        if (height <= 0)
                            return;
                    }
                    if (right) {
                        this.g.drawLine(x + width, y + height, x + width, y);
                        if (width <= 0)
                            return;
                    }
                }
            }
            /**
             * Fill the given rectangle with gradient
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
             * @param {boolean} horizontal
             * @param {org.shikhar.Color} color
             * @private
             */
            fill(x, y, width, height, horizontal, color) {
                let c1 = this.col_gradient1;
                let c2 = this.col_gradient2;
                if (color != null) {
                    c1 = color;
                    c2 = color.darker();
                }
                if (horizontal) {
                    if (height > this.block) {
                        this.g.setColor(this.c_bg);
                        this.g.fillRect(x, y, width + Gui.evm, height - this.block + Gui.evm);
                    }
                    this.g.drawHGradient(c1, c2, x, y, width + Gui.evm, height + Gui.evm);
                }
                else {
                    if (width > this.block) {
                        this.g.setColor(this.c_bg);
                        this.g.fillRect(x, y, width - this.block + Gui.evm, height + Gui.evm);
                    }
                    this.g.drawVGradient(c1, c2, x, y, width + Gui.evm, height + Gui.evm);
                }
            }
            paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(x, y, width, height, dir, enabled, inside, pressed, part, top, left, bottom, right, horizontal) {
                inside = inside && (this.insidepart === part);
                pressed = pressed && (this.pressedpart === part);
                this.paintRect(x, y, width, height, enabled ? this.c_border : this.c_disable, enabled ? ((inside !== pressed) ? this.c_hover : (pressed ? this.c_press : this.c_ctrl)) : this.c_bg, top, left, bottom, right, horizontal);
                this.g.setColor(enabled ? this.c_text_fg : this.c_disable);
                this.paintArrow$int$int$int$int$char(x + (left ? 1 : 0), y + (top ? 1 : 0), width - (left ? 1 : 0) - (right ? 1 : 0), height - (top ? 1 : 0) - (bottom ? 1 : 0), dir);
            }
            paintArrow(x, y, width, height, dir, enabled, inside, pressed, part, top, left, bottom, right, horizontal) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof dir === 'string') || dir === null) && ((typeof enabled === 'boolean') || enabled === null) && ((typeof inside === 'boolean') || inside === null) && ((typeof pressed === 'boolean') || pressed === null) && ((typeof part === 'string') || part === null) && ((typeof top === 'boolean') || top === null) && ((typeof left === 'boolean') || left === null) && ((typeof bottom === 'boolean') || bottom === null) && ((typeof right === 'boolean') || right === null) && ((typeof horizontal === 'boolean') || horizontal === null)) {
                    return this.paintArrow$int$int$int$int$char$boolean$boolean$boolean$java_lang_String$boolean$boolean$boolean$boolean$boolean(x, y, width, height, dir, enabled, inside, pressed, part, top, left, bottom, right, horizontal);
                }
                else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof dir === 'string') || dir === null) && enabled === undefined && inside === undefined && pressed === undefined && part === undefined && top === undefined && left === undefined && bottom === undefined && right === undefined && horizontal === undefined) {
                    return this.paintArrow$int$int$int$int$char(x, y, width, height, dir);
                }
                else
                    throw new Error('invalid overload');
            }
            paintArrow$int$int$int$int$char(x, y, width, height, dir) {
                const cx = x + (width / 2 | 0) - 2 * this.margin_1;
                const cy = y + (height / 2 | 0) - this.margin_1;
                const s = 4 * this.margin_1;
                for (let i = 0; i < s; i++) {
                    {
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(dir) == 'N'.charCodeAt(0)) {
                            this.g.drawLine(cx + this.margin_1 - i, cy + i, cx + this.margin_1 + i, cy + i);
                        }
                        else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(dir) == 'W'.charCodeAt(0)) {
                            this.g.drawLine(cx + i, cy + this.margin_1 - i, cx + i, cy + this.margin_1 + i);
                        }
                        else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(dir) == 'S'.charCodeAt(0)) {
                            this.g.drawLine(cx + this.margin_1 - i, cy + s - i, cx + this.margin_1 + i, cy + s - i);
                        }
                        else {
                            this.g.drawLine(cx + s - i, cy + this.margin_1 - i, cx + s - i, cy + this.margin_1 + i);
                        }
                    }
                    ;
                }
            }
            paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(component, x, y, width, height, top, left, bottom, right, mode, fill) {
                if ((width <= 0) || (height <= 0)) {
                    return;
                }
                if (fill) {
                    let background = Gui.get$java_lang_Object$java_lang_Object(component, "background");
                    switch ((mode).charCodeAt(0)) {
                        case 101 /* 'e' */:
                        case 108 /* 'l' */:
                        case 100 /* 'd' */:
                        case 103 /* 'g' */:
                        case 114 /* 'r' */:
                            break;
                        case 98 /* 'b' */:
                        case 105 /* 'i' */:
                        case 120 /* 'x' */:
                            if (background == null) {
                                background = this.c_bg;
                            }
                            break;
                        case 104 /* 'h' */:
                            background = (background != null) ? background.brighter() : this.c_hover;
                            break;
                        case 112 /* 'p' */:
                            background = (background != null) ? background.darker() : this.c_press;
                            break;
                        case 116 /* 't' */:
                            if (background == null) {
                                background = this.c_text_bg;
                            }
                            break;
                        case 115 /* 's' */:
                            background = this.c_select_bg;
                            break;
                        default:
                            throw new java.lang.IllegalArgumentException();
                    }
                    if ((((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'g'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'r'.charCodeAt(0)))) {
                        this.fill(x, y, width, height, true, background);
                    }
                    else if (background != null) {
                        this.g.setColor(background);
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'x'.charCodeAt(0)) {
                            this.g.fillRect(x, y, width + Gui.evm, height + Gui.evm);
                        }
                    }
                }
                const toggled = ("togglebutton" === Gui.getComponentClass(component)) && this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", false);
                if (toggled) {
                    this.g.setColor(this.c_shadow);
                    this.g.drawRect(x, y, width, height);
                }
                else if (top && left && right && bottom) {
                    this.g.setColor((((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'd'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'i'.charCodeAt(0))) ? this.c_border : this.c_disable);
                    this.g.drawRect(x, y, width, height);
                }
                else if (top || left || bottom || right) {
                    this.g.setColor((((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'd'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'i'.charCodeAt(0))) ? this.c_border : this.c_disable);
                    if (top) {
                        this.g.drawLine(x + width, y, x, y);
                        if (height <= 0) {
                            return;
                        }
                    }
                    if (left) {
                        this.g.drawLine(x, y, x, y + height);
                        if (width <= 0) {
                            return;
                        }
                    }
                    if (bottom) {
                        this.g.drawLine(x, y + height, x + width, y + height);
                        if (height <= 0) {
                            return;
                        }
                    }
                    if (right) {
                        this.g.drawLine(x + width, y + height, x + width, y);
                        if (width <= 0) {
                            return;
                        }
                    }
                }
            }
            paint$java_lang_Object$int$int$int$int$char$char(component, x, y, width, height, type, mode) {
                this.paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(component, x, y, width, height, true, true, true, true, mode, true);
                this.g.setColor(this.c_icon_tint);
                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'p'.charCodeAt(0)) {
                }
                switch ((type).charCodeAt(0)) {
                    case 99 /* 'c' */:
                        const margin3 = 3 * this.margin_1;
                        const margin4 = 3 * this.margin_1;
                        this.g.drawLine(x + margin3, y + margin3 + 1, x + width - margin4 - 1, y + height - margin4);
                        this.g.drawLine(x + margin3, y + margin3, x + width - margin4, y + height - margin4);
                        this.g.drawLine(x + margin3 + 1, y + margin3, x + width - margin4, y + height - margin4 - 1);
                        this.g.drawLine(x + width - margin4 - 1, y + margin3, x + margin3, y + height - margin4 - 1);
                        this.g.drawLine(x + width - margin4, y + margin3, x + margin3, y + height - margin4);
                        this.g.drawLine(x + width - margin4, y + margin3 + 1, x + margin3 + 1, y + height - margin4);
                        break;
                    case 109 /* 'm' */:
                        this.g.drawRect(x + 3 * this.margin_1, y + 3 * this.margin_1, width - 7 * this.margin_1, height - 7 * this.margin_1);
                        this.g.drawLine(x + 4 * this.margin_1, y + 4 * this.margin_1, x + width - 5 * this.margin_1, y + 4 * this.margin_1);
                        break;
                    case 105 /* 'i' */:
                        this.g.fillRect(x + 3 * this.margin_1, y + height - 5 * this.margin_1, width - 6 * this.margin_1, 2 * this.margin_1);
                        break;
                }
            }
            paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, x, y, width, height, clipx, clipy, clipwidth, clipheight, top, left, bottom, right, toppadding, leftpadding, bottompadding, rightpadding, focus, mode, alignment, mnemonic, underline, fill) {
                if ((width <= 1) || (height <= 1)) {
                    return;
                }
                const prevClip = this.g.getClipBounds();
                this.paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(component, x, y, width, height, top, left, bottom, right, mode, fill);
                let icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "bgimage", null);
                if (icon != null && Gui.getComponentClass(component) !== "panel" && Gui.getComponentClass(component) !== "dialog") {
                    const pressed = (c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'd'.charCodeAt(0) && (this.mousepressed === component) && Gui.getComponentClass(component) === "button";
                    if (pressed) {
                        this.g.setColor(org.shikhar.Color.blendColors(this.c_bgimgae_tint, this.c_press, 0.6));
                    }
                    else if (underline) {
                        this.g.setColor(org.shikhar.Color.blendColors(this.c_bgimgae_tint, this.c_press, 0.75));
                    }
                    else {
                        this.g.setColor(this.c_bgimgae_tint);
                    }
                    if (pressed) {
                        this.g.drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(icon, x + 1, y + 1, null);
                    }
                    else {
                        this.g.drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(icon, x, y, null);
                    }
                    this.paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(component, x, y, width, height, top, left, bottom, right, mode, false);
                }
                if ((width <= 0) || (height <= 0)) {
                    return;
                }
                if (focus && icon == null) {
                    this.drawFocus(x + 1, y + 1, width - 2, height - 2);
                }
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", null);
                icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                if ((text == null) && (icon == null)) {
                    return;
                }
                x += leftpadding;
                y += toppadding;
                width -= leftpadding + rightpadding;
                height -= toppadding + bottompadding;
                alignment = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "alignment", alignment);
                let customfont = (text != null) ? Gui.get$java_lang_Object$java_lang_Object(component, "font") : null;
                if (customfont != null) {
                    this.g.setFont(customfont);
                }
                customfont = this.g.getFont();
                let tw = 0;
                let th = 0;
                let ta = 0;
                if (text != null) {
                    tw = customfont.stringWidth(text);
                    ta = customfont.getAscent();
                    th = customfont.getDescent() + ta;
                }
                let iw = 0;
                let ih = 0;
                if (icon != null) {
                    iw = icon.getScaledWidth();
                    ih = icon.getScaledHeight();
                    if (text != null) {
                        iw += 3 * this.margin_1;
                    }
                }
                const pressed = (c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'd'.charCodeAt(0) && (this.mousepressed === component) && Gui.getComponentClass(component) === "button" || Gui.getComponentClass(component) === "togglebutton";
                if (pressed) {
                    x++;
                    y++;
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
                    this.g.clipRect(x, y, width, height);
                }
                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'x'.charCodeAt(0)) {
                    this.g.drawLine(cx, y + (height / 2 | 0), cx + iw + tw, y + (height / 2 | 0));
                }
                if (icon != null) {
                    let fg = Gui.get$java_lang_Object$java_lang_Object(component, "foreground");
                    if (fg == null)
                        fg = this.c_icon_tint;
                    if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'd'.charCodeAt(0))
                        fg = this.c_disable;
                    if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 's'.charCodeAt(0))
                        fg = this.c_select_fg;
                    this.g.drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(icon, cx, y + ((height - ih) / 2 | 0), fg);
                    cx += iw;
                }
                if (text != null) {
                    let foreground = Gui.get$java_lang_Object$java_lang_Object(component, "foreground");
                    if (foreground == null) {
                        foreground = ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'l'.charCodeAt(0)) ? this.c_fg : ((((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'd'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) != 'r'.charCodeAt(0))) ? this.c_text_fg : this.c_disable);
                    }
                    if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 's'.charCodeAt(0))
                        foreground = this.c_select_fg;
                    this.g.setColor(foreground);
                    const ty = y + ((height - th) / 2 | 0) + ta - this.margin_1;
                    this.g.drawString(text, cx, ty);
                    if (mnemonic) {
                        const imnemonic = this.getInteger$java_lang_Object$java_lang_String$int(component, "mnemonic", -1);
                        if ((imnemonic !== -1) && (imnemonic < text.length)) {
                            const mx = cx + customfont.stringWidth(text.substring(0, imnemonic));
                            this.g.drawLine(mx, ty + this.margin_1, mx + customfont.charWidth(text.charAt(imnemonic)), ty + this.margin_1);
                        }
                    }
                    if (underline) {
                        this.g.drawLine(cx, ty + this.margin_1, cx + tw, ty + this.margin_1);
                    }
                }
                if (clipped) {
                    this.g.setClip(prevClip.x, prevClip.y, prevClip.width, prevClip.height);
                }
                if (customfont != null) {
                    this.g.setFont(this.font);
                }
            }
            /**
             * Paint component icon and text (using default or custom font) and fills background
             * @param {boolean} mnemonic find mnemonic index and underline text
             * @param {*} component
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
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
             * @param {boolean} fill
             * @private
             */
            paint(component, x, y, width, height, clipx, clipy, clipwidth, clipheight, top, left, bottom, right, toppadding, leftpadding, bottompadding, rightpadding, focus, mode, alignment, mnemonic, underline, fill) {
                if (((component != null) || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof clipx === 'number') || clipx === null) && ((typeof clipy === 'number') || clipy === null) && ((typeof clipwidth === 'number') || clipwidth === null) && ((typeof clipheight === 'number') || clipheight === null) && ((typeof top === 'boolean') || top === null) && ((typeof left === 'boolean') || left === null) && ((typeof bottom === 'boolean') || bottom === null) && ((typeof right === 'boolean') || right === null) && ((typeof toppadding === 'number') || toppadding === null) && ((typeof leftpadding === 'number') || leftpadding === null) && ((typeof bottompadding === 'number') || bottompadding === null) && ((typeof rightpadding === 'number') || rightpadding === null) && ((typeof focus === 'boolean') || focus === null) && ((typeof mode === 'string') || mode === null) && ((typeof alignment === 'string') || alignment === null) && ((typeof mnemonic === 'boolean') || mnemonic === null) && ((typeof underline === 'boolean') || underline === null) && ((typeof fill === 'boolean') || fill === null)) {
                    return this.paint$java_lang_Object$int$int$int$int$int$int$int$int$boolean$boolean$boolean$boolean$int$int$int$int$boolean$char$java_lang_String$boolean$boolean$boolean(component, x, y, width, height, clipx, clipy, clipwidth, clipheight, top, left, bottom, right, toppadding, leftpadding, bottompadding, rightpadding, focus, mode, alignment, mnemonic, underline, fill);
                }
                else if (((component != null) || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof clipx === 'boolean') || clipx === null) && ((typeof clipy === 'boolean') || clipy === null) && ((typeof clipwidth === 'boolean') || clipwidth === null) && ((typeof clipheight === 'boolean') || clipheight === null) && ((typeof top === 'string') || top === null) && ((typeof left === 'boolean') || left === null) && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined && fill === undefined) {
                    return this.paint$java_lang_Object$int$int$int$int$boolean$boolean$boolean$boolean$char$boolean(component, x, y, width, height, clipx, clipy, clipwidth, clipheight, top, left);
                }
                else if (((component != null) || component === null) && ((typeof x === 'string') || x === null) && ((typeof y === 'boolean') || y === null) && ((typeof width === 'boolean') || width === null) && ((typeof height === 'number') || height === null) && ((typeof clipx === 'number') || clipx === null) && ((typeof clipy === 'number') || clipy === null) && ((typeof clipwidth === 'number') || clipwidth === null) && ((typeof clipheight === 'number') || clipheight === null) && ((typeof top === 'number') || top === null) && left === undefined && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined && fill === undefined) {
                    return this.paint$java_lang_Object$java_lang_String$boolean$boolean$int$int$int$int$int$int(component, x, y, width, height, clipx, clipy, clipwidth, clipheight, top);
                }
                else if (((component != null) || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof clipx === 'string') || clipx === null) && ((typeof clipy === 'string') || clipy === null) && clipwidth === undefined && clipheight === undefined && top === undefined && left === undefined && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined && fill === undefined) {
                    return this.paint$java_lang_Object$int$int$int$int$char$char(component, x, y, width, height, clipx, clipy);
                }
                else if (((typeof component === 'number') || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((height != null) || height === null) && ((typeof clipx === 'boolean') || clipx === null) && clipy === undefined && clipwidth === undefined && clipheight === undefined && top === undefined && left === undefined && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined && fill === undefined) {
                    return this.paint$int$int$int$int$java_lang_Object$boolean(component, x, y, width, height, clipx);
                }
                else if (component === undefined && x === undefined && y === undefined && width === undefined && height === undefined && clipx === undefined && clipy === undefined && clipwidth === undefined && clipheight === undefined && top === undefined && left === undefined && bottom === undefined && right === undefined && toppadding === undefined && leftpadding === undefined && bottompadding === undefined && rightpadding === undefined && focus === undefined && mode === undefined && alignment === undefined && mnemonic === undefined && underline === undefined && fill === undefined) {
                    return this.paint$();
                }
                else
                    throw new Error('invalid overload');
            }
            drawFocus(x, y, width, height) {
                this.g.setColor(this.c_focus);
                this.g.drawDottedRect(x, y, width, height);
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
             *
             * @param {number} x x coordinate of mouse in window frame
             * @param {number} y y coordinate of mouse in window frame
             * @param {number} id AWT event id  @see {java.awt.event.MouseEvent}
             * @param {number} button 0==none, 1=left, 2=middle, 3=right
             * @param {number} clickcount number of clicks
             * @param {number} modifiers shift modifiers
             * @return {boolean}
             */
            handleMouse(x, y, id, button, clickcount, modifiers) {
                let consumed = false;
                const isPopUpActive = this.popupowner != null;
                if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$() || (id === org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$())) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$())) {
                    const controldown = false;
                    const shiftdown = false;
                    const popuptrigger = ((button === org.shikhar.AWTMouseEvent.BUTTON3) && (id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()));
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) {
                        if (this.mousepressed == null) {
                            this.findComponent(this.content, x, y);
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                            consumed = true;
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$()) {
                        const previnside = this.mouseinside;
                        const prevpart = this.insidepart;
                        this.findComponent(this.content, x, y);
                        if ((previnside === this.mouseinside) && (prevpart === this.insidepart)) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$(), this.mouseinside, this.insidepart);
                        }
                        else {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$(), previnside, prevpart);
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                        }
                        consumed = (this.mouseinside != null);
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                        if (this.mousepressed == null) {
                            const mouseexit = this.mouseinside;
                            const exitpart = this.insidepart;
                            this.mouseinside = this.insidepart = null;
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$(), mouseexit, exitpart);
                            consumed = true;
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        this.findComponent(this.content, x, y);
                        if (this.mousepressed !== this.mouseinside && this.mouseinside != null && this.mouseinside !== this.content) {
                            const dialog = this.getParentDialog(this.mouseinside);
                            if (dialog != null) {
                                const parent = this.getParent(dialog);
                                if (Gui.get$java_lang_Object$java_lang_Object(parent, ":comp") !== dialog) {
                                    this.removeItemImpl(parent, dialog);
                                    this.insertItem(parent, ":comp", dialog, 0);
                                    Gui.set(dialog, ":parent", parent);
                                    this.repaint$java_lang_Object(dialog);
                                }
                            }
                        }
                        this.hideTip();
                        this.mousepressed = this.mouseinside;
                        this.pressedpart = this.insidepart;
                        if (this.mousepressed != null && this.mousepressed !== this.content) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$(), this.mousepressed, this.pressedpart);
                            if (this.focusowner !== this)
                                this.setFocus(this.mousepressed);
                        }
                        else {
                            if (this.insidepart !== "modal")
                                this.setFocus(null);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                        this.hideTip();
                        const previnside = this.mouseinside;
                        const prevpart = this.insidepart;
                        this.findComponent(this.content, x, y);
                        const same = (previnside === this.mouseinside) && (prevpart === this.insidepart);
                        const isin = (this.mousepressed === this.mouseinside) && (this.pressedpart === this.insidepart);
                        const wasin = (this.mousepressed === previnside) && (this.pressedpart === prevpart);
                        if (this.mousepressed != null) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$(), this.mousepressed, this.pressedpart);
                        }
                        else if (wasin && !isin) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$(), this.mousepressed, this.pressedpart);
                        }
                        else if (!same && (this.popupowner != null) && !wasin) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, Gui.DRAG_EXITED_$LI$(), previnside, prevpart);
                        }
                        if (isin && !wasin) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mousepressed, this.pressedpart);
                        }
                        else if (!same && (this.popupowner != null) && !isin) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, Gui.DRAG_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                        }
                        if (isin === wasin === true) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$(), this.mousepressed, this.pressedpart);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$()) {
                        if (this.popupowner != null) {
                            const classname = Gui.getComponentClass(this.mouseinside);
                            if ((this.popupowner !== this.mouseinside) && (classname !== ":popup") && (classname !== ":combolist")) {
                                this.closeup();
                                return true;
                            }
                        }
                        this.hideTip();
                        let mouserelease = this.mousepressed;
                        let releasepart = this.pressedpart;
                        this.mousepressed = this.pressedpart = null;
                        this.findComponent(this.content, x, y);
                        if (clickcount === 1) {
                            if (mouserelease == null || mouserelease === this.getDesktop()) {
                                mouserelease = this.mouseinside;
                                releasepart = this.insidepart;
                            }
                            id = org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$();
                        }
                        if (clickcount > 1 && this.mouseinside != null) {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$(), mouserelease, releasepart);
                        }
                        else {
                            this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, id, mouserelease, releasepart);
                            if ((this.mouseinside != null) && ((mouserelease !== this.mouseinside) || (releasepart !== this.insidepart))) {
                                this.handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mouseinside, this.insidepart);
                                consumed = true;
                            }
                        }
                    }
                }
                consumed = (this.insidepart === "modal" || this.mousepressed != null);
                if (this.mouseinside === this.content)
                    consumed = false;
                if (consumed || isPopUpActive)
                    Gui.repaintNeeded = true;
                return consumed || isPopUpActive;
            }
            /**
             *
             * @param {number} x mouse-x in canvas frame
             * @param {number} y mouse-y in canvas frame
             * @param {number} rotation
             * @return
             * @return {boolean}
             */
            handleMouseWheel(x, y, rotation) {
                if (this.mouseinside == null)
                    return false;
                let handled = false;
                const port = this.getRectangle(this.mouseinside, ":port");
                if (port != null) {
                    const bounds = this.getRectangle(this.mouseinside, "bounds");
                    if (port.x + port.width < bounds.width) {
                        handled = this.processScroll$java_lang_Object$java_lang_Object(this.mouseinside, (rotation > 0) ? "down" : "up");
                    }
                    else if (port.y + port.height < bounds.height) {
                        handled = this.processScroll$java_lang_Object$java_lang_Object(this.mouseinside, (rotation > 0) ? "right" : "left");
                    }
                    return handled;
                }
                else if (Gui.getComponentClass(this.mouseinside) === "bean") {
                    const bean = Gui.get$java_lang_Object$java_lang_Object(this.mouseinside, "bean");
                    const v = new org.shikhar.Vector2(x, y);
                    this.getScreenToLocal(this.mouseinside, v);
                    return bean.handleMouseWheel((v.x | 0), (v.y | 0), rotation);
                }
                else {
                    if (Gui.getComponentClass(this.mouseinside) === "slider") {
                        const minimum = this.getDouble$java_lang_Object$java_lang_String(this.mouseinside, "minimum");
                        const maximum = this.getDouble$java_lang_Object$java_lang_String(this.mouseinside, "maximum");
                        const value = this.getDouble$java_lang_Object$java_lang_String(this.mouseinside, "value");
                        const step = this.getDouble$java_lang_Object$java_lang_String(this.mouseinside, "unit");
                        let newvalue = value + (rotation > 0 ? step : -step);
                        newvalue = Math.max(minimum, Math.min(newvalue, maximum));
                        if (value !== newvalue) {
                            this.setDouble$java_lang_Object$java_lang_String$double(this.mouseinside, "value", newvalue);
                            this.invoke(this.mouseinside, null, "action");
                        }
                    }
                    else if (Gui.getComponentClass(this.mouseinside) === "spinbox") {
                        const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(this.mouseinside, "text", "");
                        return this.processSpin(this.mouseinside, rotation > 0 ? "up" : "down");
                    }
                }
                return false;
            }
            handleKey(id, keycode, keychar, modifiers, actionkey) {
                if ((this.popupowner == null) && (this.focusowner == null))
                    return false;
                let consumed = false;
                const controldown = false;
                const shiftdown = false;
                const altdown = false;
                this.hideTip();
                const control = (keychar <= 31) || ((keychar >= 127) && (keychar <= 159)) || (keychar >= 65535) || controldown;
                let tempKeyCode = control ? keycode : 0;
                if ("bean" === Gui.getComponentClass(this.focusowner))
                    tempKeyCode = keycode;
                if (id !== org.shikhar.AWTKeyEvent.KEY_RELEASED_$LI$() && ((lhs, rhs) => lhs && rhs)((control === (id === org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$())), this.processKeyPress((this.popupowner != null) ? this.popupowner : this.focusowner, shiftdown, controldown, modifiers, control ? 0 : keychar, tempKeyCode))) {
                    consumed = true;
                }
                else if ((tempKeyCode === org.shikhar.AWTKeyEvent.VK_TAB) || ((tempKeyCode === org.shikhar.AWTKeyEvent.VK_F6) && (altdown || controldown))) {
                    const outgo = true;
                    if (!shiftdown ? this.setNextFocusable(this.focusowner, outgo) : this.setPreviousFocusable(this.focusowner, outgo)) {
                        consumed = true;
                    }
                    this.repaint$java_lang_Object(this.focusowner);
                    this.closeup();
                }
                else if (tempKeyCode === org.shikhar.AWTKeyEvent.VK_F8) {
                    for (let splitpane = this.focusowner; splitpane != null; splitpane = this.getParent(splitpane)) {
                        {
                            if (Gui.getComponentClass(splitpane) === "splitpane") {
                                this.setFocus(splitpane);
                                this.repaint$java_lang_Object(splitpane);
                                consumed = true;
                                break;
                            }
                        }
                        ;
                    }
                }
                else if ((id === org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$()) && ((keychar !== 0) || actionkey) && this.checkMnemonic(this.focusowner, true, null, keycode, modifiers)) {
                    consumed = true;
                }
                else if (id === org.shikhar.AWTKeyEvent.KEY_RELEASED_$LI$() && this.focusowner != null && "bean" === Gui.getComponentClass(this.focusowner)) {
                    const bean = Gui.get$java_lang_Object$java_lang_Object(this.focusowner, "bean");
                    bean.handleKeyEvent(keychar, keycode, org.shikhar.AWTKeyEvent.KEY_RELEASED_$LI$(), shiftdown, controldown, modifiers);
                }
                return consumed;
            }
            /**
             * Check the previous mouse location again because of a possible layout
             * change
             * @private
             */
            checkLocation() {
                this.findComponent(this.content, this.mousex, this.mousey);
                this.handleMouseEvent(this.mousex, this.mousex, 0, 1, false, false, false, org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.mouseinside, this.insidepart);
            }
            /**
             * @param {*} component
             * @param {boolean} shiftdown
             * @param {boolean} controldown
             * @param {number} modifiers
             * @param {number} keychar
             * @param {number} keycode
             * @return {boolean}
             * @private
             */
            processKeyPress(component, shiftdown, controldown, modifiers, keychar, keycode) {
                const classname = Gui.getComponentClass(component);
                if ("combobox" === classname) {
                    const combolist = Gui.get$java_lang_Object$java_lang_Object(component, ":combolist");
                    if (combolist == null) {
                        const editable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true);
                        if (editable && this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, false, false)) {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "selected", -1, -1);
                            return true;
                        }
                        if ((keychar === org.shikhar.AWTKeyEvent.VK_SPACE) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN)) {
                            this.popupCombo(component);
                        }
                    }
                    else {
                        if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_HOME) || (keycode === org.shikhar.AWTKeyEvent.VK_END)) {
                            const next = this.getListItem(component, combolist, keycode, Gui.get$java_lang_Object$java_lang_Object(combolist, ":lead"), false);
                            if (next != null) {
                                this.setInside(combolist, next, true);
                            }
                            return (true);
                        }
                        else if ((keycode === org.shikhar.AWTKeyEvent.VK_ENTER) || (keychar === org.shikhar.AWTKeyEvent.VK_SPACE)) {
                            this.closeCombo(component, combolist, Gui.get$java_lang_Object$java_lang_Object(combolist, ":lead"));
                            return (true);
                        }
                        else if (keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE) {
                            this.closeCombo(component, combolist, null);
                            return (true);
                        }
                        else if (!this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, false, false)) {
                            const item = this.findText(String.fromCharCode(keychar), component, combolist, false);
                            if (item != null) {
                                this.setInside(combolist, item, true);
                            }
                            else
                                return false;
                        }
                    }
                }
                let parentDialog = null;
                let t = component;
                do {
                    {
                        parentDialog = t;
                    }
                } while (("dialog" !== Gui.getComponentClass(t) && (t = this.getParent(t)) != null));
                if (parentDialog != null && "dialog" === Gui.getComponentClass(parentDialog)) {
                    if (keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE)
                        if (this.invoke(parentDialog, null, "close"))
                            return (true);
                }
                if ("bean" === classname) {
                    const bean = Gui.get$java_lang_Object$java_lang_Object(component, "bean");
                    bean.handleKeyEvent(keychar, keycode, org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$(), shiftdown, controldown, modifiers);
                }
                else if ("button" === classname) {
                    if (keychar === org.shikhar.AWTKeyEvent.VK_SPACE || ((keycode === org.shikhar.AWTKeyEvent.VK_ENTER) && (Gui.get$java_lang_Object$java_lang_Object(component, "type") === "default")) || ((keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE) && (Gui.get$java_lang_Object$java_lang_Object(component, "type") === "cancel"))) {
                        this.invoke(component, null, "action");
                        this.repaint$java_lang_Object(component);
                        return true;
                    }
                }
                else if (("checkbox" === classname) || ("togglebutton" === classname)) {
                    if (keychar === org.shikhar.AWTKeyEvent.VK_SPACE) {
                        this.changeCheck(component, true);
                        this.repaint$java_lang_Object(component);
                        return true;
                    }
                }
                else if (("textfield" === classname) || ("passwordfield" === classname)) {
                    return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, ("passwordfield" === classname), false);
                }
                else if ("textarea" === classname) {
                    const chars = Gui.get$java_lang_Object$java_lang_Object(component, ":text");
                    const start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                    const end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                    let istart = start;
                    let iend = end;
                    const insert = null;
                    if (controldown && (keycode === org.shikhar.AWTKeyEvent.VK_S || keycode === org.shikhar.AWTKeyEvent.VK_Q || keycode === org.shikhar.AWTKeyEvent.VK_W || keycode === org.shikhar.AWTKeyEvent.VK_L || keycode === org.shikhar.AWTKeyEvent.VK_B || keycode === org.shikhar.AWTKeyEvent.VK_I || keycode === org.shikhar.AWTKeyEvent.VK_N || keycode === org.shikhar.AWTKeyEvent.VK_U || keycode === org.shikhar.AWTKeyEvent.VK_E || keycode === org.shikhar.AWTKeyEvent.VK_R)) {
                        let ch = (keycode === org.shikhar.AWTKeyEvent.VK_B ? 'b' : (keycode === org.shikhar.AWTKeyEvent.VK_I ? 'i' : '0'));
                        if (keycode === org.shikhar.AWTKeyEvent.VK_L)
                            ch = 'l';
                        if (keycode === org.shikhar.AWTKeyEvent.VK_W)
                            ch = 'w';
                        if (keycode === org.shikhar.AWTKeyEvent.VK_Q)
                            ch = 'q';
                        if (keycode === org.shikhar.AWTKeyEvent.VK_S)
                            ch = 's';
                        if (keycode === org.shikhar.AWTKeyEvent.VK_E)
                            ch = 'e';
                        if (keycode === org.shikhar.AWTKeyEvent.VK_R)
                            ch = 'r';
                        if (keycode === org.shikhar.AWTKeyEvent.VK_U)
                            ch = 'u';
                        this.updateDrawSytle$java_lang_Object$org_shikhar_Color$org_shikhar_Color$char(component, null, null, ch);
                    }
                    else if ((keycode === org.shikhar.AWTKeyEvent.VK_HOME) && !controldown) {
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
                        const currentfont = this.getFont$java_lang_Object(component);
                        const styles = this.getProperty(component, "drawstyle");
                        let fh = currentfont.getHeight();
                        let y = 0;
                        let linestart = 0;
                        for (let i = 0; i < end; i++) {
                            {
                                if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\t'.charCodeAt(0))) {
                                    if (styles != null) {
                                        fh = this.getCharsHeight(chars, linestart, i - linestart, styles);
                                    }
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
                            for (let i = linestart; i < chars.length; i++) {
                                {
                                    if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\t'.charCodeAt(0))) {
                                        if (styles != null)
                                            fh = this.getCharsHeight(chars, linestart, i - linestart, styles);
                                        y += fh;
                                        break;
                                    }
                                }
                                ;
                            }
                        }
                        else {
                            const dy = this.getRectangle(component, ":port").height;
                            y += (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) ? -dy : dy;
                        }
                        const x = (styles == null) ? currentfont.charsWidth(chars, linestart, iend - linestart) : this.getCharsWidth(chars, linestart, iend - linestart, styles);
                        iend = this.getCaretLocation(component, x, y, true, false);
                        if (!shiftdown) {
                            istart = iend;
                        }
                    }
                    else
                        return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, true, false, false);
                    return this.changeField(component, this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", ""), insert, istart, iend, start, end);
                }
                else if ("tabbedpane" === classname) {
                    if ((keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) || (keycode === org.shikhar.AWTKeyEvent.VK_UP)) {
                        const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                        if (placement === "none")
                            return false;
                        const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                        const increase = (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN);
                        let newvalue = selected;
                        const n = increase ? Gui.getItemCountImpl(component, ":comp") : 0;
                        const d = (increase ? 1 : -1);
                        for (let i = selected + d; increase ? (i < n) : (i >= 0); i += d) {
                            {
                                if (this.getBoolean$java_lang_Object$java_lang_String$boolean(this.getItem(component, i), "enabled", true)) {
                                    newvalue = i;
                                    break;
                                }
                            }
                            ;
                        }
                        if (newvalue !== selected) {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "selected", newvalue, 0);
                            this.checkOffset(component);
                            this.repaint$java_lang_Object(component);
                            this.invoke(component, this.getItem(component, newvalue), "action");
                        }
                    }
                }
                else if ("spinbox" === classname) {
                    if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN)) {
                        this.processSpin(component, (keycode === org.shikhar.AWTKeyEvent.VK_UP) ? "up" : "down");
                        return true;
                    }
                    else if (keycode === org.shikhar.AWTKeyEvent.VK_ENTER) {
                        const value = this.getDouble$java_lang_Object$java_lang_String(component, "value");
                        let text = this.getString$java_lang_Object$java_lang_String(component, "text");
                        let v = value;
                        if (text == null)
                            text = "";
                        try {
                            v = javaemul.internal.DoubleHelper.parseDouble(text);
                            const minimum = this.getDouble$java_lang_Object$java_lang_String(component, "minimum");
                            const maximum = this.getDouble$java_lang_Object$java_lang_String(component, "maximum");
                            const step = this.getDouble$java_lang_Object$java_lang_String(component, "step");
                            v = org.shikhar.MathUtils.clamp(v, minimum, maximum);
                            v = Math.floor((v - minimum) / step) * step + minimum;
                            text = v + "";
                        }
                        catch (e) {
                        }
                        text = v + "";
                        this.setString$java_lang_Object$java_lang_String$java_lang_String(component, "text", text);
                        this.setInteger$java_lang_Object$java_lang_String$int(component, "start", text.length);
                        this.setInteger$java_lang_Object$java_lang_String$int(component, "end", text.length);
                        this.setInteger$java_lang_Object$java_lang_String$int(component, "caret", text.length);
                        if (v !== value) {
                            this.setDouble$java_lang_Object$java_lang_String$double(component, "value", v);
                            return this.invoke(component, null, "action");
                        }
                        return true;
                    }
                    else {
                        return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, false, false, true);
                    }
                }
                else if ("slider" === classname) {
                    const value = this.getDouble$java_lang_Object$java_lang_String(component, "value");
                    let d = 0;
                    if ((keycode === org.shikhar.AWTKeyEvent.VK_HOME) || (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) || (keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP)) {
                        d = this.getDouble$java_lang_Object$java_lang_String(component, "minimum") - value;
                        if ((keycode === org.shikhar.AWTKeyEvent.VK_LEFT) || (keycode === org.shikhar.AWTKeyEvent.VK_UP)) {
                            d = Math.max(d, -this.getDouble$java_lang_Object$java_lang_String(component, "unit"));
                        }
                        else if (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) {
                            d = Math.max(d, -this.getDouble$java_lang_Object$java_lang_String(component, "block"));
                        }
                    }
                    else if ((keycode === org.shikhar.AWTKeyEvent.VK_END) || (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN)) {
                        d = this.getDouble$java_lang_Object$java_lang_String(component, "maximum") - value;
                        if ((keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN)) {
                            d = Math.min(d, this.getDouble$java_lang_Object$java_lang_String(component, "unit"));
                        }
                        else if (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN) {
                            d = Math.min(d, this.getDouble$java_lang_Object$java_lang_String(component, "block"));
                        }
                    }
                    if (d !== 0) {
                        this.setDouble$java_lang_Object$java_lang_String$double(component, "value", value + d);
                        this.repaint$java_lang_Object(component);
                        this.invoke(component, null, "action");
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
                        const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                        const bounds = this.getRectangle(component, "bounds");
                        const max = (horizontal ? bounds.width : bounds.height) - 5 * this.margin_1;
                        d = max - divider;
                        if (keycode !== org.shikhar.AWTKeyEvent.VK_END) {
                            d = Math.min(d, 10 * this.margin_1);
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
                    if (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) {
                        const lead = Gui.get$java_lang_Object$java_lang_Object(component, ":lead");
                        if ((Gui.get$java_lang_Object$java_lang_Object(lead, ":comp") != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(lead, "expanded", true)) {
                            this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(lead, "expanded", false, true);
                            this.selectItem(component, lead, true);
                            this.validate(component);
                            this.invoke(component, lead, "collapse");
                            return true;
                        }
                        else {
                            const parent = this.getParent(lead);
                            if (parent !== component) {
                                this.selectItem(component, parent, true);
                                this.setLead(component, lead, parent);
                                return true;
                            }
                        }
                    }
                    else if (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) {
                        const lead = Gui.get$java_lang_Object$java_lang_Object(component, ":lead");
                        const node = Gui.get$java_lang_Object$java_lang_Object(lead, ":comp");
                        if (node != null) {
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(lead, "expanded", true)) {
                                this.selectItem(component, node, true);
                                this.setLead(component, lead, node);
                            }
                            else {
                                this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(lead, "expanded", true, true);
                                this.selectItem(component, lead, true);
                                this.validate(component);
                                this.invoke(component, lead, "expand");
                            }
                            return true;
                        }
                    }
                    return this.processList(component, shiftdown, controldown, keychar, keycode, true);
                }
                else if (("menubar" === classname) || ("popupmenu" === classname)) {
                    let previous = null;
                    let last = null;
                    for (let i = Gui.get$java_lang_Object$java_lang_Object(component, ":popup"); i != null; i = Gui.get$java_lang_Object$java_lang_Object(i, ":popup")) {
                        {
                            previous = last;
                            last = i;
                        }
                        ;
                    }
                    let selected = Gui.get$java_lang_Object$java_lang_Object(last, "selected");
                    const hotpopup = ((selected != null) || (previous == null)) ? last : previous;
                    if ((selected == null) && (previous != null)) {
                        selected = Gui.get$java_lang_Object$java_lang_Object(previous, "selected");
                    }
                    if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN)) {
                        const next = this.getMenu(hotpopup, selected, keycode === org.shikhar.AWTKeyEvent.VK_DOWN, true);
                        if (next != null) {
                            Gui.set(hotpopup, "selected", null);
                            this.popupMenu(hotpopup);
                            Gui.set(hotpopup, "selected", next);
                            this.repaint$java_lang_Object(hotpopup);
                        }
                    }
                    else if (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) {
                        if (previous != null) {
                            selected = Gui.get$java_lang_Object$java_lang_Object(previous, "selected");
                            Gui.set(previous, "selected", null);
                            this.popupMenu(previous);
                            Gui.set(previous, "selected", selected);
                            this.repaint$java_lang_Object(previous);
                        }
                        else if ("menubar" === classname) {
                            const next = this.getMenu(component, Gui.get$java_lang_Object$java_lang_Object(component, "selected"), false, false);
                            if (next != null) {
                                Gui.set(component, "selected", next);
                                const popup = this.popupMenu(component);
                                Gui.set(popup, "selected", this.getMenu(popup, null, true, true));
                                this.repaint$java_lang_Object(component);
                            }
                        }
                    }
                    else if (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) {
                        if ((previous != null) && (selected == null)) {
                            Gui.set(last, "selected", Gui.get$java_lang_Object$java_lang_Object(Gui.get$java_lang_Object$java_lang_Object(last, "menu"), ":comp"));
                            this.repaint$java_lang_Object(last);
                        }
                        else if ((selected != null) && (Gui.getComponentClass(selected) === "menu")) {
                            const popup = this.popupMenu(last);
                            Gui.set(popup, "selected", this.getMenu(popup, null, true, true));
                        }
                        else if ("menubar" === classname) {
                            const next = this.getMenu(component, Gui.get$java_lang_Object$java_lang_Object(component, "selected"), true, false);
                            if (next != null) {
                                Gui.set(component, "selected", next);
                                const popup = this.popupMenu(component);
                                Gui.set(popup, "selected", this.getMenu(popup, null, true, true));
                                this.repaint$java_lang_Object(component);
                            }
                        }
                    }
                    else if ((keycode === org.shikhar.AWTKeyEvent.VK_ENTER) || (keychar === org.shikhar.AWTKeyEvent.VK_SPACE) || (keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE)) {
                        if ((keycode !== org.shikhar.AWTKeyEvent.VK_ESCAPE) && this.getBoolean$java_lang_Object$java_lang_String$boolean(selected, "enabled", true)) {
                            if ((selected != null) && (Gui.getComponentClass(selected) === "checkboxmenuitem")) {
                                this.changeCheck(selected, false);
                            }
                            if ((selected != null) && (Gui.getComponentClass(selected) === "panel")) {
                            }
                            else
                                this.invoke(selected, null, "action");
                        }
                        this.closeup();
                    }
                    else
                        return false;
                    return true;
                }
                return false;
            }
            /**
             * @param {*} component
             * @param {boolean} box
             * @return {boolean}
             * @private
             */
            changeCheck(component, box) {
                const group = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "group", null);
                if (group != null) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", false)) {
                        return false;
                    }
                    for (let comp = Gui.get$java_lang_Object$java_lang_Object(this.getParent(component), ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            if (comp === component) {
                                this.setBoolean$java_lang_Object$java_lang_String$boolean(component, "selected", true);
                            }
                            else if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(group, Gui.get$java_lang_Object$java_lang_Object(comp, "group")) && this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "selected", false)) {
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
             * @private
             */
            getMenu(component, part, forward, popup) {
                let previous = null;
                for (let i = 0; i < 2; i++) {
                    {
                        for (let item = (i === 0) ? Gui.get$java_lang_Object$java_lang_Object(part, ":next") : Gui.get$java_lang_Object$java_lang_Object(popup ? Gui.get$java_lang_Object$java_lang_Object(component, "menu") : component, ":comp"); (i === 0) ? (item != null) : (item !== part); item = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) {
                            {
                                if ((Gui.getComponentClass(item) !== "separator") && this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "enabled", true)) {
                                    if (forward) {
                                        return item;
                                    }
                                    previous = item;
                                }
                            }
                            ;
                        }
                    }
                    ;
                }
                return previous;
            }
            processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, multiline, hidden, filter) {
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                const start = this.getInteger$java_lang_Object$java_lang_String$int(component, "start", 0);
                const end = this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0);
                const editable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true);
                let istart = start;
                let iend = end;
                let insert = null;
                if (editable && (keychar !== 0) && (modifiers !== org.shikhar.InputEvent.ALT_MASK)) {
                    insert = /* valueOf */ String(String.fromCharCode(keychar)).toString();
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
                                while (((iend > 0) && ((i !== 0) === javaemul.internal.CharacterHelper.isLetterOrDigit(text.charAt(iend - 1))))) {
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
                                while (((iend < text.length) && ((i === 0) === javaemul.internal.CharacterHelper.isLetterOrDigit(text.charAt(iend))))) {
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
                        this.clipboard = text.substring(Math.min(start, end), Math.max(start, end));
                        if (keycode === org.shikhar.AWTKeyEvent.VK_X) {
                            insert = "";
                        }
                        else {
                            return true;
                        }
                    }
                }
                else if (editable && controldown && (keycode === org.shikhar.AWTKeyEvent.VK_V)) {
                    if (insert != null) {
                        insert = Gui.filter(insert, multiline);
                    }
                }
                if (filter && (insert != null)) {
                    try {
                        javaemul.internal.DoubleHelper.parseDouble(text + insert);
                    }
                    catch (e) {
                        return false;
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
             * @return {boolean}
             * @private
             */
            processField(component, shiftdown, controldown, modifiers, keychar, keycode, multiline, hidden, filter) {
                if (((component != null) || component === null) && ((typeof shiftdown === 'boolean') || shiftdown === null) && ((typeof controldown === 'boolean') || controldown === null) && ((typeof modifiers === 'number') || modifiers === null) && ((typeof keychar === 'number') || keychar === null) && ((typeof keycode === 'number') || keycode === null) && ((typeof multiline === 'boolean') || multiline === null) && ((typeof hidden === 'boolean') || hidden === null) && ((typeof filter === 'boolean') || filter === null)) {
                    return this.processField$java_lang_Object$boolean$boolean$int$int$int$boolean$boolean$boolean(component, shiftdown, controldown, modifiers, keychar, keycode, multiline, hidden, filter);
                }
                else if (((typeof component === 'number') || component === null) && ((typeof shiftdown === 'number') || shiftdown === null) && ((typeof controldown === 'number') || controldown === null) && ((typeof modifiers === 'number') || modifiers === null) && ((keychar != null) || keychar === null) && ((typeof keycode === 'boolean') || keycode === null) && ((typeof multiline === 'boolean') || multiline === null) && ((typeof hidden === 'number') || hidden === null) && filter === undefined) {
                    return this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int(component, shiftdown, controldown, modifiers, keychar, keycode, multiline, hidden);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * @param {string} text
             * @param {boolean} multiline
             * @return
             * @return {string}
             * @private
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
             * @private
             */
            changeField(component, text, insert, movestart, moveend, start, end) {
                movestart = Math.max(0, Math.min(movestart, text.length));
                moveend = Math.max(0, Math.min(moveend, text.length));
                if ((insert == null) && (start === movestart) && (end === moveend)) {
                    return false;
                }
                if (insert != null) {
                    const min = Math.min(movestart, moveend);
                    text = text.substring(0, min) + insert + text.substring(Math.max(movestart, moveend));
                    Gui.set(component, "text", text);
                    this.updateDrawStyle(component, min, -Math.abs(movestart - moveend) + insert.length);
                    movestart = moveend = min + insert.length;
                }
                if (start !== movestart) {
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", movestart, 0);
                }
                if (end !== moveend) {
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", moveend, 0);
                }
                this.validate(component);
                if (Gui.getComponentClass(component) === "spinbox")
                    return false;
                this.invoke(component, null, (insert != null) ? ((insert.length > 0) ? "insert" : "remove") : "caret");
                return true;
            }
            /**
             * @param {*} component
             * @param {boolean} shiftdown
             * @param {boolean} controldown
             * @param {number} keychar
             * @param {number} keycode
             * @param {boolean} recursive
             * @return {boolean}
             * @private
             */
            processList(component, shiftdown, controldown, keychar, keycode, recursive) {
                if ((keycode === org.shikhar.AWTKeyEvent.VK_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_UP) || (keycode === org.shikhar.AWTKeyEvent.VK_PAGE_DOWN) || (keycode === org.shikhar.AWTKeyEvent.VK_HOME) || (keycode === org.shikhar.AWTKeyEvent.VK_END)) {
                    const lead = Gui.get$java_lang_Object$java_lang_Object(component, ":lead");
                    const row = this.getListItem(component, component, keycode, lead, recursive);
                    if (row != null) {
                        const selection = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "selection", "single");
                        if (shiftdown && (selection !== "single") && (lead != null)) {
                            this.extend(component, lead, row, recursive);
                        }
                        else if (!controldown) {
                            this.selectItem(component, row, recursive);
                        }
                        this.setLead(component, lead, row);
                        return true;
                    }
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_LEFT) {
                    return this.processScroll$java_lang_Object$java_lang_Object(component, "left");
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_RIGHT) {
                    return this.processScroll$java_lang_Object$java_lang_Object(component, "right");
                }
                else if (keychar === org.shikhar.AWTKeyEvent.VK_SPACE) {
                    this.select(component, Gui.get$java_lang_Object$java_lang_Object(component, ":lead"), recursive, shiftdown, controldown);
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
             * @private
             */
            findText(keychar, component, leadowner, recursive) {
                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(keychar) != 0) {
                    const current = java.lang.System.currentTimeMillis();
                    let i = (current > this.findtime + 1000) ? 1 : 0;
                    this.findtime = current;
                    const lead = Gui.get$java_lang_Object$java_lang_Object(leadowner, ":lead");
                    for (; i < 2; i++) {
                        {
                            this.findprefix = (i === 0) ? (this.findprefix + keychar) : /* valueOf */ String(keychar).toString();
                            for (let j = 0; j < 2; j++) {
                                {
                                    for (let item = (j === 0) ? ((i === 0) ? lead : this.getNextItem(component, lead, recursive)) : Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); (j === 0) ? (item != null) : (item !== lead); item = this.getNextItem(component, item, recursive)) {
                                        {
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
            /**
             * @warning Will hang (infinite loop) if list contains only separators or all disabled items
             * @param {*} component
             * @param {*} scrollpane
             * @param {number} keycode
             * @param {*} lead
             * @param {boolean} recursive
             * @return {*}
             * @private
             */
            getListItem(component, scrollpane, keycode, lead, recursive) {
                let row = null;
                if (keycode === org.shikhar.AWTKeyEvent.VK_UP) {
                    for (let prev = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); prev !== lead; prev = this.getNextItem(component, prev, recursive)) {
                        {
                            row = prev;
                        }
                        ;
                    }
                    if (row != null && (Gui.getComponentClass(row) === "separator" || !this.getBoolean$java_lang_Object$java_lang_String(row, "enabled")))
                        row = this.getListItem(component, scrollpane, keycode, row, recursive);
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_DOWN) {
                    row = (lead == null) ? Gui.get$java_lang_Object$java_lang_Object(component, ":comp") : this.getNextItem(component, lead, recursive);
                    if (row != null && (Gui.getComponentClass(row) === "separator" || !this.getBoolean$java_lang_Object$java_lang_String(row, "enabled")))
                        row = this.getListItem(component, scrollpane, keycode, row, recursive);
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
                    for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = this.getNextItem(component, item, recursive)) {
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
                    row = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                }
                else if (keycode === org.shikhar.AWTKeyEvent.VK_END) {
                    for (let last = lead; last != null; last = this.getNextItem(component, last, recursive)) {
                        {
                            row = last;
                        }
                        ;
                    }
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
             * @private
             */
            selectAll(component, selected, recursive) {
                let changed = false;
                for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = this.getNextItem(component, item, recursive)) {
                    {
                        if (this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(item, "selected", selected, false)) {
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, item);
                            changed = true;
                        }
                    }
                    ;
                }
                Gui.set(component, ":anchor", null);
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
             * @private
             */
            selectItem(component, row, recursive) {
                let changed = false;
                for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = this.getNextItem(component, item, recursive)) {
                    {
                        if (this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(item, "selected", (item === row), false)) {
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, item);
                            changed = true;
                        }
                    }
                    ;
                }
                Gui.set(component, ":anchor", null);
                if (changed) {
                    this.invoke(component, row, "action");
                }
            }
            /**
             * @param {*} component
             * @param {*} lead
             * @param {*} row
             * @param {boolean} recursive
             * @private
             */
            extend(component, lead, row, recursive) {
                let anchor = Gui.get$java_lang_Object$java_lang_Object(component, ":anchor");
                if (anchor == null) {
                    Gui.set(component, ":anchor", anchor = lead);
                }
                let select = 'n';
                let changed = false;
                for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = this.getNextItem(component, item, recursive)) {
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
             * @private
             */
            setLead(component, oldlead, lead) {
                if (oldlead !== lead) {
                    if (oldlead != null) {
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, oldlead);
                    }
                    Gui.set(component, ":lead", lead);
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
             * @private
             */
            setInside(component, part, scroll) {
                const previous = Gui.get$java_lang_Object$java_lang_Object(component, ":lead");
                if (previous != null) {
                    this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, ":combolist", previous);
                }
                Gui.set(component, ":lead", part);
                if (part != null) {
                    this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, ":combolist", part);
                    if (scroll) {
                        const r = this.getRectangle(part, "bounds");
                        this.scrollToVisible(component, r.x, r.y, 0, r.height);
                    }
                }
            }
            zoomDesktop(x, y) {
            }
            handleWorldCamera() {
                Gui.getItems(this.content);
                for (let comp = Gui.get$java_lang_Object$java_lang_Object(this.content, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        if (this.getProperty(comp, "pintoworld") == null)
                            continue;
                        const bounds = this.getRectangle(comp, "bounds");
                    }
                    ;
                }
            }
            /**
             * return true if widget is being dragged on desktop
             * @param {number} x
             * @param {number} y
             * @param {number} btn
             * @param {number} id
             * @param {*} component
             * @param {*} part
             * @return
             * @return {boolean}
             * @private
             */
            handleDrag(x, y, btn, id, component, part) {
                if (id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())
                    return false;
                const parent = this.getParent(component);
                if (component == null || btn !== 1 || part != null || Gui.getComponentClass(component) === "menubar" || Gui.getComponentClass(parent) !== "desktop" || this.getProperty(component, "lockobject") != null) {
                    this.draggingComponent = false;
                    return false;
                }
                const bounds = this.getRectangle(component, "bounds");
                if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                    this.draggingComponent = false;
                    if (Gui.getComponentClass(component) === "slider") {
                        const minimum = this.getDouble$java_lang_Object$java_lang_String(component, "minimum");
                        const maximum = this.getDouble$java_lang_Object$java_lang_String(component, "maximum");
                        let value = this.getDouble$java_lang_Object$java_lang_String(component, "value");
                        const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                        if (!horizontal)
                            value = maximum + minimum - value;
                        const length = (value - minimum) * ((horizontal ? bounds.width : bounds.height) - this.block) / (maximum - minimum);
                        this.setReference(component, 0, 0);
                        const onKnob = horizontal ? ((x - this.referencex) > length && (x - this.referencex) < length + this.block) : ((y - this.referencey) > length && (y - this.referencey) < length + this.block);
                        if (onKnob)
                            return false;
                    }
                    else if (Gui.getComponentClass(component) === "checkbox") {
                    }
                    this.draggingComponent = true;
                    this.referencex = x - bounds.x;
                    this.referencey = y - bounds.y;
                    return true;
                }
                else if (this.draggingComponent) {
                    const parents = this.getRectangle(this.getParent(component), "bounds");
                    let mx = x - this.referencex;
                    let my = y - this.referencey;
                    const pinnedtoworld = this.getProperty(component, "pintoworld") != null;
                    if (!pinnedtoworld) {
                        mx = Math.max(0, Math.min(mx, parents.width - bounds.width));
                        my = Math.max(0, Math.min(my, parents.height - bounds.height));
                    }
                    if ((bounds.x !== mx) || (bounds.y !== my)) {
                        this.repaint$java_lang_Object$int$int$int$int(component, Math.min(bounds.x, mx), Math.min(bounds.y, my), bounds.width + Math.abs(mx - bounds.x), bounds.height + Math.abs(my - bounds.y));
                        bounds.x = mx;
                        bounds.y = my;
                        if (pinnedtoworld)
                            this.putProperty(component, "pintoworld", true);
                    }
                    return true;
                }
                this.draggingComponent = false;
                return false;
            }
            /**
             * @param {number} x
             * mouse x position relative to thinlet component
             * @param {number} y
             * mouse y position relative to the main desktop
             * @param {number} button
             * @param {number} clickcount
             * @param {boolean} shiftdown
             * @param {boolean} controldown
             * @param {boolean} popuptrigger
             * @param {number} id
             * @param {*} component
             * @param {*} part
             * @private
             */
            handleMouseEvent(x, y, button, clickcount, shiftdown, controldown, popuptrigger, id, component, part) {
                if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) {
                    this.setTimer(750, 1);
                }
                else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                    this.hideTip();
                }
                if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "enabled", true)) {
                    return;
                }
                if (this.handleDrag(x, y, button, id, component, part))
                    return;
                if (clickcount > 2)
                    clickcount = (clickcount % 2) + 1;
                const classname = Gui.getComponentClass(component);
                if (("list" === classname) || ("table" === classname) || ("tree" === classname)) {
                    const header = Gui.get$java_lang_Object$java_lang_Object(component, "header");
                    let resizeComponent = null;
                    let noScroll = false;
                    if (header != null && (resizeComponent = Gui.get$java_lang_Object$java_lang_Object(header, ":resizecomponent")) != null) {
                        noScroll = true;
                        if (clickcount === 2) {
                            this.setSmartWidth(resizeComponent);
                            this.doLayout(component);
                            this.repaint$java_lang_Object(component);
                        }
                        else {
                            if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                                this.referencex = x;
                                Gui.set(header, ":resizing", "true");
                            }
                            else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                                const offset = x - this.referencex;
                                const newSize = this.getInteger$java_lang_Object$java_lang_String(resizeComponent, "width") + (offset >= 0 ? offset : offset);
                                if (newSize > Gui.MINIMUM_COLUMN_WIDTH) {
                                    this.setInteger$java_lang_Object$java_lang_String$int(resizeComponent, "width", newSize);
                                    this.referencex = x;
                                    this.doLayout(component);
                                    this.repaint$java_lang_Object(component);
                                }
                            }
                            else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())
                                Gui.set(header, ":resizing", null);
                            else if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$())
                                this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(org.shikhar.Cursor.E_RESIZE_CURSOR));
                        }
                    }
                    if (header != null && Gui.get$java_lang_Object$java_lang_Object(header, ":resizecomponent") == null) {
                        Gui.set(header, ":resizing", null);
                        this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(org.shikhar.Cursor.DEFAULT_CURSOR));
                    }
                    if (header != null && Gui.get$java_lang_Object$java_lang_Object(header, "action") != null) {
                        if (this.insidepart != null && (this.insidepart != null && this.insidepart instanceof Array && (this.insidepart.length == 0 || this.insidepart[0] == null || (this.insidepart[0] != null))) && "column" === Gui.getComponentClass(this.insidepart)) {
                            noScroll = true;
                            if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                                if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$() && this.mouseinside === component) {
                                    let column = Gui.get$java_lang_Object$java_lang_Object(Gui.get$java_lang_Object$java_lang_Object(component, "header"), ":comp");
                                    let sort = null;
                                    while ((column != null)) {
                                        {
                                            if (column === this.insidepart) {
                                                sort = Gui.get$java_lang_Object$java_lang_Object(column, "sort");
                                                if (null == sort || "none" === sort || "descent" === sort)
                                                    sort = "ascent";
                                                else if ("ascent" === sort)
                                                    sort = "descent";
                                            }
                                            else
                                                sort = null;
                                            Gui.set(column, "sort", sort);
                                            this.setBoolean$java_lang_Object$java_lang_String$boolean(column, "selected", sort != null && sort !== "none");
                                            column = Gui.get$java_lang_Object$java_lang_Object(column, ":next");
                                        }
                                    }
                                    ;
                                    this.invoke(header, null, "action");
                                }
                                this.repaint$java_lang_Object(component);
                            }
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$())
                            this.repaint$java_lang_Object(component);
                    }
                    if (!noScroll && !this.processScroll$int$int$int$java_lang_Object$java_lang_Object$boolean(x, y, id, component, part, false)) {
                        if (((id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || ((id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) && !shiftdown && !controldown))) {
                            const port = this.getRectangle(component, ":port");
                            const my = y + port.y - this.referencey;
                            for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null;) {
                                {
                                    const r = this.getRectangle(item, "bounds");
                                    if (my < r.y + r.height) {
                                        if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                                            this.scrollToVisible(component, r.x, r.y, 0, r.height);
                                        }
                                        else if ("tree" === classname) {
                                            const mx = x + port.x - this.referencex;
                                            if (mx < r.x) {
                                                if ((mx >= r.x - this.block) && (Gui.get$java_lang_Object$java_lang_Object(item, ":comp") != null)) {
                                                    const expanded = this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true);
                                                    this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(item, "expanded", !expanded, true);
                                                    this.selectItem(component, item, true);
                                                    this.setLead(component, Gui.get$java_lang_Object$java_lang_Object(component, ":lead"), item);
                                                    this.setFocus(component);
                                                    this.validate(component);
                                                    this.invoke(component, item, expanded ? "collapse" : "expand");
                                                }
                                                break;
                                            }
                                        }
                                        if ((id !== org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false)) {
                                            if (id !== org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                                                if (this.setFocus(component)) {
                                                    this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, item);
                                                }
                                            }
                                            this.select(component, item, ("tree" === classname), shiftdown, controldown);
                                            if (clickcount === 2) {
                                                this.invoke(component, item, "perform");
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
                else if ("bean" === classname) {
                    const bean = Gui.get$java_lang_Object$java_lang_Object(component, "bean");
                    let b = false;
                    if (clickcount > 0) {
                        b = bean.handleMouseEvent(/* intValue */ (Gui.get$java_lang_Object$java_lang_Object(component, ":mousex") | 0), /* intValue */ (Gui.get$java_lang_Object$java_lang_Object(component, ":mousey") | 0), clickcount, org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$(), button, shiftdown, controldown, popuptrigger);
                        b = bean.handleMouseEvent(/* intValue */ (Gui.get$java_lang_Object$java_lang_Object(component, ":mousex") | 0), /* intValue */ (Gui.get$java_lang_Object$java_lang_Object(component, ":mousey") | 0), 0, org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$(), button, shiftdown, controldown, popuptrigger);
                    }
                    else {
                        b = bean.handleMouseEvent(/* intValue */ (Gui.get$java_lang_Object$java_lang_Object(component, ":mousex") | 0), /* intValue */ (Gui.get$java_lang_Object$java_lang_Object(component, ":mousey") | 0), clickcount, id, button, shiftdown, controldown, popuptrigger);
                    }
                    if (b) {
                        return;
                    }
                }
                else if (clickcount < 2 && ("button" === classname) || ("checkbox" === classname) || ("togglebutton" === classname)) {
                    if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())) {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            this.setFocus(component);
                        }
                        if (("button" === classname) && ((this.mousepressed == null) || (this.mousepressed === component)) && ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$())) && (Gui.get$java_lang_Object$java_lang_Object(component, "type") === "link")) {
                            this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) ? org.shikhar.Cursor.HAND_CURSOR : org.shikhar.Cursor.DEFAULT_CURSOR));
                        }
                        else if ((id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$() && button === org.shikhar.AWTMouseEvent.BUTTON1) && (this.mouseinside === component)) {
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
                        const left = ((id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) && ((icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null)) != null)) ? icon.getScaledWidth() : 0;
                        this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int(x, y, clickcount, id, component, false, false, left);
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
                            const combolist = Gui.get$java_lang_Object$java_lang_Object(component, ":combolist");
                            if (combolist == null) {
                                this.setFocus(component);
                                this.repaint$java_lang_Object(component);
                                this.popupCombo(component);
                            }
                            else {
                                this.closeCombo(component, combolist, null);
                            }
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                            if (this.mouseinside !== component) {
                                const combolist = Gui.get$java_lang_Object$java_lang_Object(component, ":combolist");
                                this.closeCombo(component, combolist, ((this.mouseinside === combolist) && (this.insidepart != null && this.insidepart instanceof Array && (this.insidepart.length == 0 || this.insidepart[0] == null || this.insidepart[0] != null))) ? this.insidepart : null);
                            }
                            else {
                                this.repaint$java_lang_Object(component);
                            }
                        }
                    }
                }
                else if (":combolist" === classname) {
                    if (!this.processScroll$int$int$int$java_lang_Object$java_lang_Object$boolean(x, y, id, component, part, false)) {
                        if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === Gui.DRAG_ENTERED_$LI$())) {
                            if (part != null) {
                                this.setInside(component, part, false);
                            }
                        }
                        else if (clickcount > 0 || id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$()) {
                            if ((part != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                                const combobox = Gui.get$java_lang_Object$java_lang_Object(component, "combobox");
                                if (Gui.getComponentClass(part) === "checkboxmenuitem") {
                                    this.changeCheck(part, false);
                                    this.setInteger$java_lang_Object$java_lang_String$int$int(combobox, "selected", this.getIndex(combobox, part), -1);
                                    this.invoke(combobox, part, "action");
                                }
                                else {
                                    this.closeCombo(combobox, component, part);
                                    this.setFocus(combobox);
                                }
                            }
                        }
                    }
                }
                else if (("textfield" === classname) || ("passwordfield" === classname)) {
                    this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int(x, y, clickcount, id, component, false, ("passwordfield" === classname), 0);
                }
                else if ("textarea" === classname) {
                    if (clickcount > 0) {
                    }
                }
                else if ("panel" === classname) {
                }
                else if ("desktop" === classname) {
                    if (part === "modal") {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) {
                            this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(org.shikhar.Cursor.WAIT_CURSOR));
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                            this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(org.shikhar.Cursor.DEFAULT_CURSOR));
                        }
                    }
                }
                else if ("spinbox" === classname) {
                    if (part == null) {
                        this.processField$int$int$int$int$java_lang_Object$boolean$boolean$int(x, y, clickcount, id, component, false, false, 0);
                    }
                    else {
                        if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())) {
                            if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                                this.setFocus(component);
                                if (this.processSpin(component, part)) {
                                    this.setTimer(375, 1);
                                }
                            }
                            else {
                                if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                                    this.setTimer(0, 0);
                                }
                            }
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                        }
                    }
                }
                else if ("tabbedpane" === classname) {
                    const placement = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "placement", "top");
                    if (placement === "none")
                        return;
                    if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$())) {
                        if ((part != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true) && (this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0) !== this.getIndex(component, part))) {
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, "tabbedpane", part);
                        }
                    }
                    else if ((part != null) && (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                        const selected = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", 0);
                        const current = this.getIndex(component, part);
                        if (selected === current) {
                            this.setFocus(component);
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, "tabbedpane", part);
                        }
                        else {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "selected", current, 0);
                            this.setNextFocusable(component, false);
                            this.checkOffset(component);
                            this.repaint$java_lang_Object(component);
                            this.invoke(component, part, "action");
                        }
                    }
                }
                else if ("slider" === classname) {
                    if (button === org.shikhar.AWTMouseEvent.BUTTON1 && ((id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()))) {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            this.setReference(component, (this.block / 2 | 0), (this.block / 2 | 0));
                            this.setFocus(component);
                        }
                        const minimum = this.getDouble$java_lang_Object$java_lang_String(component, "minimum");
                        const maximum = this.getDouble$java_lang_Object$java_lang_String(component, "maximum");
                        const value = this.getDouble$java_lang_Object$java_lang_String(component, "value");
                        const step = this.getDouble$java_lang_Object$java_lang_String(component, "unit");
                        const bounds = this.getRectangle(component, "bounds");
                        const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                        let newvalue = minimum + (horizontal ? (x - this.referencex) : (y - this.referencey)) * (maximum - minimum) / ((horizontal ? bounds.width : bounds.height) - this.block);
                        newvalue = minimum + Math.floor((newvalue - minimum) / step) * step;
                        if (!horizontal)
                            newvalue = maximum + minimum - newvalue;
                        newvalue = Math.max(minimum, Math.min(newvalue, maximum));
                        if (Math.abs(value - newvalue) > step / 2) {
                            this.setDouble$java_lang_Object$java_lang_String$double$double(component, "value", newvalue, -1);
                            this.invoke(component, null, "action");
                        }
                    }
                }
                else if ("splitpane" === classname) {
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        this.setReference(component, 2, 2);
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                        const divider = this.getInteger$java_lang_Object$java_lang_String$int(component, "divider", -1);
                        const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                        let moveto = horizontal ? (x - this.referencex) : (y - this.referencey);
                        const bounds = this.getRectangle(component, "bounds");
                        moveto = Math.max(0, Math.min(moveto, Math.abs(horizontal ? bounds.width : bounds.height) - 5));
                        if (divider !== moveto) {
                            this.setInteger$java_lang_Object$java_lang_String$int$int(component, "divider", moveto, -1);
                            this.validate(component);
                        }
                    }
                    else if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) && (this.mousepressed == null)) {
                        const horizontal = ("vertical" !== Gui.get$java_lang_Object$java_lang_Object(component, "orientation"));
                        this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(horizontal ? org.shikhar.Cursor.E_RESIZE_CURSOR : org.shikhar.Cursor.S_RESIZE_CURSOR));
                    }
                    else if (((id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) && (this.mousepressed == null)) || ((id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) && (this.mouseinside !== component))) {
                        this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(org.shikhar.Cursor.DEFAULT_CURSOR));
                    }
                }
                else if ("menubar" === classname) {
                    const selected = Gui.get$java_lang_Object$java_lang_Object(component, "selected");
                    if (((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$())) && (part != null) && (selected == null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                    }
                    else if ((part != null) && ((selected == null) ? (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) : ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === Gui.DRAG_ENTERED_$LI$()))) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                        Gui.set(component, "selected", part);
                        this.popupMenu(component);
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                    }
                    else if ((id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) && (selected != null)) {
                        this.closeup();
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$()) {
                        if ((part !== this.insidepart) && ((this.insidepart == null) || ((this.insidepart != null && this.insidepart instanceof Array && (this.insidepart.length == 0 || this.insidepart[0] == null || this.insidepart[0] != null)) && (Gui.getComponentClass(this.insidepart) !== "menu")))) {
                            if ((this.insidepart != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(this.insidepart, "enabled", true)) {
                                if (Gui.getComponentClass(this.insidepart) === "checkboxmenuitem") {
                                    this.changeCheck(this.insidepart, false);
                                }
                                else if (Gui.getComponentClass(this.insidepart) === "menuitem") {
                                    this.invoke(this.insidepart, null, "action");
                                    this.closeup();
                                }
                                else {
                                }
                            }
                        }
                    }
                }
                else if (":popup" === classname) {
                    if (part != null) {
                        if (((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === Gui.DRAG_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$())) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                            Gui.set(component, "selected", part);
                            this.popupMenu(component);
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$()) {
                            if ((this.insidepart == null) || (Gui.getComponentClass(this.insidepart) !== "menu")) {
                                if ((this.insidepart != null) && this.getBoolean$java_lang_Object$java_lang_String$boolean(this.insidepart, "enabled", true)) {
                                    if (Gui.getComponentClass(this.insidepart) === "checkboxmenuitem") {
                                        this.changeCheck(this.insidepart, false);
                                    }
                                    else if (Gui.getComponentClass(this.insidepart) === "menuitem") {
                                        this.invoke(this.insidepart, null, "action");
                                        this.closeup();
                                        if (this.popupowner == null)
                                            this.remove(component);
                                    }
                                    else {
                                    }
                                }
                            }
                        }
                        else if (((id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === Gui.DRAG_EXITED_$LI$())) && this.getBoolean$java_lang_Object$java_lang_String$boolean(part, "enabled", true)) {
                            if (Gui.getComponentClass(part) !== "menu") {
                                Gui.set(component, "selected", null);
                            }
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, classname, part);
                        }
                    }
                }
                else if ("dialog" === classname) {
                    if (part === "header") {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$()) {
                            const bounds = this.getRectangle(component, "bounds");
                            this.referencex = x - bounds.x;
                            this.referencey = y - bounds.y;
                            const parent = this.getParent(component);
                            if (Gui.get$java_lang_Object$java_lang_Object(parent, ":comp") !== component) {
                                this.removeItemImpl(parent, component);
                                this.insertItem(parent, ":comp", component, 0);
                                Gui.set(component, ":parent", parent);
                                this.repaint$java_lang_Object(component);
                                this.setNextFocusable(component, false);
                            }
                            else if (this.focusowner == null) {
                                this.setNextFocusable(component, false);
                            }
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$() && this.getProperty(component, "lockobject") == null) {
                            const bounds = this.getRectangle(component, "bounds");
                            const parents = this.getRectangle(this.getParent(component), "bounds");
                            const pinnedtoworld = this.getProperty(component, "pintoworld") != null;
                            let mx = x - this.referencex;
                            let my = y - this.referencey;
                            if (!pinnedtoworld) {
                                mx = Math.max(0, Math.min(mx, parents.width - bounds.width));
                                my = Math.max(0, Math.min(my, parents.height - bounds.height));
                            }
                            if ((bounds.x !== mx) || (bounds.y !== my)) {
                                this.repaint$java_lang_Object$int$int$int$int(component, Math.min(bounds.x, mx), Math.min(bounds.y, my), bounds.width + Math.abs(mx - bounds.x), bounds.height + Math.abs(my - bounds.y));
                                bounds.x = mx;
                                bounds.y = my;
                                if (pinnedtoworld)
                                    this.putProperty(component, "pintoworld", true);
                            }
                        }
                    }
                    else if (part === ":closebutton" || part === ":maximizebutton" || part === ":iconifybutton") {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$() || id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                            if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$() && this.mouseinside === component) {
                                if (part === ":closebutton") {
                                    this.closeDialog(component);
                                }
                                else if (part === ":maximizebutton") {
                                    this.maximizeDialog(component);
                                }
                                else if (part === ":iconifybutton") {
                                    this.minimizeDialog(component);
                                }
                            }
                            this.repaint$java_lang_Object(component);
                        }
                    }
                    else if (!this.processScroll$int$int$int$java_lang_Object$java_lang_Object$boolean(x, y, id, component, part, false) && (part != null)) {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            this.referencex = x;
                            this.referencey = y;
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                            this.repaint$java_lang_Object(component);
                            const minHeight = this.getInteger$java_lang_Object$java_lang_String$int(component, ":titleheight", 0) + 4 * this.margin_1;
                            const minWidth = minHeight * 3 - 8 * this.margin_1;
                            const bounds = this.getRectangle(component, "bounds");
                            const parents = this.getRectangle(this.getParent(component), "bounds");
                            if (part === ":se" || part === ":s" || part === ":e") {
                                if (part !== ":s") {
                                    bounds.width += x - this.referencex;
                                    if (bounds.width > parents.width - bounds.x)
                                        bounds.width = parents.width - bounds.x;
                                    if (bounds.width < minWidth)
                                        bounds.width = minWidth;
                                }
                                if (part !== ":e") {
                                    bounds.height += y - this.referencey;
                                    if (bounds.height > parents.height - bounds.y)
                                        bounds.height = parents.height - bounds.y;
                                    if (bounds.height < minHeight)
                                        bounds.height = minHeight;
                                }
                            }
                            else if (part === ":nw" || part === ":n" || part === ":w") {
                                const xo = bounds.x + bounds.width;
                                const yo = bounds.y + bounds.height;
                                if (part !== ":n") {
                                    bounds.x += x - this.referencex;
                                    bounds.width -= x - this.referencex;
                                    if (bounds.x < 0) {
                                        bounds.x = 0;
                                        bounds.width = xo;
                                    }
                                    if (bounds.width < minWidth) {
                                        bounds.width = minWidth;
                                        bounds.x = xo - bounds.width;
                                    }
                                }
                                if (part !== ":w") {
                                    bounds.y += y - this.referencey;
                                    bounds.height -= y - this.referencey;
                                    if (bounds.y < 0) {
                                        bounds.y = 0;
                                        bounds.height = yo;
                                    }
                                    if (bounds.height < minHeight) {
                                        bounds.height = minHeight;
                                        bounds.y = yo - bounds.height;
                                    }
                                }
                            }
                            else if (part === ":ne") {
                                const yo = bounds.y + bounds.height;
                                bounds.width += x - this.referencex;
                                bounds.y += y - this.referencey;
                                bounds.height -= y - this.referencey;
                                if (bounds.y < 0) {
                                    bounds.y = 0;
                                    bounds.height = yo;
                                }
                                if (bounds.width > parents.width - bounds.x)
                                    bounds.width = parents.width - bounds.x;
                                if (bounds.width < minWidth) {
                                    bounds.width = minWidth;
                                }
                                if (bounds.height < minHeight) {
                                    bounds.height = minHeight;
                                    bounds.y = yo - bounds.height;
                                }
                            }
                            else if (part === ":sw") {
                                const xo = bounds.x + bounds.width;
                                bounds.x += x - this.referencex;
                                bounds.width -= x - this.referencex;
                                bounds.height += y - this.referencey;
                                if (bounds.x < 0) {
                                    bounds.x = 0;
                                    bounds.width = xo;
                                }
                                if (bounds.width < minWidth) {
                                    bounds.width = minWidth;
                                    bounds.x = xo - bounds.width;
                                }
                                if (bounds.height > parents.height - bounds.y)
                                    bounds.height = parents.height - bounds.y;
                                if (bounds.height < minHeight)
                                    bounds.height = minHeight;
                            }
                            this.referencex = x;
                            this.referencey = y;
                            this.doLayout(component);
                            this.repaint$java_lang_Object(component);
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) {
                            this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor((part === ":n") ? org.shikhar.Cursor.N_RESIZE_CURSOR : (part === ":ne") ? org.shikhar.Cursor.NE_RESIZE_CURSOR : (part === ":e") ? org.shikhar.Cursor.E_RESIZE_CURSOR : (part === ":se") ? org.shikhar.Cursor.SE_RESIZE_CURSOR : (part === ":s") ? org.shikhar.Cursor.S_RESIZE_CURSOR : (part === ":sw") ? org.shikhar.Cursor.SW_RESIZE_CURSOR : (part === ":w") ? org.shikhar.Cursor.W_RESIZE_CURSOR : org.shikhar.Cursor.NW_RESIZE_CURSOR));
                        }
                        else if (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) {
                            this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(org.shikhar.Cursor.DEFAULT_CURSOR));
                        }
                    }
                }
                if (popuptrigger) {
                    if (Gui.getComponentClass(component) === "bean") {
                        const c = this.getComponent(component, "bean");
                        if (c.handlePopUp(x, y))
                            return;
                    }
                    const popupmenu = Gui.get$java_lang_Object$java_lang_Object(component, "popupmenu");
                    if (popupmenu != null) {
                        this.putProperty(popupmenu, "invoker", component);
                        this.popupPopup(popupmenu, x, y);
                    }
                }
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
             * @private
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
            /**
             * @param {*} component
             * @param {*} row
             * @param {boolean} recursive
             * @param {boolean} shiftdown
             * @param {boolean} controldown
             * @private
             */
            select(component, row, recursive, shiftdown, controldown) {
                const selection = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "selection", "single");
                let lead = null;
                if (shiftdown && (selection !== "single") && ((lead = Gui.get$java_lang_Object$java_lang_Object(component, ":lead")) != null)) {
                    this.extend(component, lead, row, recursive);
                }
                else {
                    if (controldown && (selection === "multiple")) {
                        this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(row, "selected", !this.getBoolean$java_lang_Object$java_lang_String$boolean(row, "selected", false), false);
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, row);
                        this.invoke(component, row, "action");
                        Gui.set(component, ":anchor", null);
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
                        Gui.set(component, ":anchor", null);
                    }
                    else {
                        this.selectItem(component, row, recursive);
                    }
                }
                this.setLead(component, (lead != null) ? lead : Gui.get$java_lang_Object$java_lang_Object(component, ":lead"), row);
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
             * @private
             */
            getNextItem(component, item, recursive) {
                if (!recursive) {
                    return Gui.get$java_lang_Object$java_lang_Object(item, ":next");
                }
                let next = Gui.get$java_lang_Object$java_lang_Object(item, ":comp");
                if ((next == null) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true)) {
                    while (((item !== component) && ((next = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) == null))) {
                        {
                            item = this.getParent(item);
                        }
                    }
                    ;
                }
                return next;
            }
            processField$int$int$int$int$java_lang_Object$boolean$boolean$int(x, y, clickcount, id, component, multiline, hidden, left) {
                if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$() || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$() && clickcount > 0)) {
                    this.setReference(component, 2 * this.margin_1 + left, 2 * this.margin_1);
                    let mx = x - this.referencex;
                    let my = 0;
                    if (!multiline) {
                        mx += this.getInteger$java_lang_Object$java_lang_String$int(component, ":offset", 0);
                    }
                    else {
                        const port = this.getRectangle(component, ":port");
                        mx += port.x - this.margin_1;
                        my = y - this.referencey + port.y - this.margin_1;
                    }
                    let caretstart = this.getCaretLocation(component, mx, my, multiline, hidden);
                    let caretend = caretstart;
                    if (clickcount > 1) {
                        const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                        while (((caretstart > 0) && ((clickcount === 2) ? javaemul.internal.CharacterHelper.isLetterOrDigit(text.charAt(caretstart - 1)) : ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(caretstart - 1)) != '\n'.charCodeAt(0))))) {
                            {
                                caretstart--;
                            }
                        }
                        ;
                        while (((caretend < text.length) && ((clickcount === 2) ? javaemul.internal.CharacterHelper.isLetterOrDigit(text.charAt(caretend)) : ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(caretend)) != '\n'.charCodeAt(0))))) {
                            {
                                caretend++;
                            }
                        }
                        ;
                    }
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", caretstart, 0);
                    this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", caretend, 0);
                    if (id !== org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$())
                        return;
                    this.setFocus(component);
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
                        mx += port.x - this.margin_1;
                        my = y - this.referencey + port.y - this.margin_1;
                    }
                    const dragcaret = this.getCaretLocation(component, mx, my, multiline, hidden);
                    if (dragcaret !== this.getInteger$java_lang_Object$java_lang_String$int(component, "end", 0)) {
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", dragcaret, 0);
                        this.validate(component);
                    }
                }
                else if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) && (this.mousepressed == null)) {
                    this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(org.shikhar.Cursor.TEXT_CURSOR));
                }
                else if (((id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) && (this.mousepressed == null)) || ((id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) && ((this.mouseinside !== component) || (this.insidepart != null)))) {
                    this.awtComponent.style.cursor = (org.shikhar.Cursor.getPredefinedCursor(org.shikhar.Cursor.DEFAULT_CURSOR));
                }
            }
            /**
             * @param {*} component
             * @param {number} x
             * @param {number} y
             * @param {boolean} multiline
             * @param {boolean} hidden
             * @return {number}
             * @private
             */
            getCaretLocation(component, x, y, multiline, hidden) {
                const currentfont = this.getFont$java_lang_Object(component);
                const chars = multiline ? Gui.get$java_lang_Object$java_lang_Object(component, ":text") : /* toCharArray */ (this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "")).split('');
                let linestart = 0;
                const styles = this.getProperty(component, "drawstyle");
                if (multiline) {
                    let height = 0;
                    for (let i = 0; (y >= height) && (i < chars.length); i++) {
                        {
                            if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(chars[i]) == '\t'.charCodeAt(0))) {
                                y -= height;
                                height = (styles == null ? currentfont.getHeight() : this.getCharsHeight(chars, linestart, i - linestart, styles));
                                if (y < height)
                                    break;
                                linestart = i + 1;
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
                        const charwidth = (styles != null) ? this.getDrawStyle(i, styles).font.charWidth(chars[i]) : currentfont.charWidth(hidden ? '*' : chars[i]);
                        if (x <= ((charwidth / 2 | 0))) {
                            return i;
                        }
                        x -= charwidth;
                    }
                    ;
                }
                return chars.length;
            }
            processScroll$int$int$int$java_lang_Object$java_lang_Object$boolean(x, y, id, component, part, touchEvent) {
                if ((part === "up") || (part === "down") || (part === "left") || (part === "right")) {
                    if ((id === org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) || (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$())) {
                        if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                            if (this.processScroll$java_lang_Object$java_lang_Object(component, part)) {
                                this.setTimer(300, 1);
                                return true;
                            }
                        }
                        else {
                            if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                                this.setTimer(0, 0);
                            }
                            this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, part);
                        }
                    }
                }
                else if ((part === "uptrack") || (part === "downtrack") || (part === "lefttrack") || (part === "righttrack")) {
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        if (this.processScroll$java_lang_Object$java_lang_Object(component, part)) {
                            this.setTimer(300, 1);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$()) {
                        this.setTimer(0, 0);
                    }
                }
                else if (touchEvent || part === "vknob" || part === "hknob") {
                    if (id === org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$()) {
                        const port = this.getRectangle(component, ":port");
                        const view = this.getRectangle(component, ":view");
                        if (view == null || port == null)
                            return false;
                        if (part === "hknob") {
                            this.referencex = x - (view.x * (port.width - 2 * this.block) / view.width | 0);
                        }
                        else if (part === "vknob") {
                            this.referencey = y - (view.y * (port.height - 2 * this.block) / view.height | 0);
                        }
                        else {
                            this.referencex = x - (view.x * (port.width - 2 * this.block) / view.width | 0);
                            this.referencey = y - (view.y * (port.height - 2 * this.block) / view.height | 0);
                        }
                    }
                    else if (id === org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$()) {
                        const port = this.getRectangle(component, ":port");
                        const view = this.getRectangle(component, ":view");
                        if (view == null || port == null)
                            return false;
                        if (part === "hknob") {
                            let viewx = ((x - this.referencex) * view.width / (port.width - 2 * this.block) | 0);
                            viewx = Math.max(0, Math.min(viewx, view.width - port.width));
                            if (view.x !== viewx) {
                                view.x = viewx;
                                this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, "horizontal");
                            }
                        }
                        else if (part === "vknob") {
                            let viewy = ((y - this.referencey) * view.height / (port.height - 2 * this.block) | 0);
                            viewy = Math.max(0, Math.min(viewy, view.height - port.height));
                            if (view.y !== viewy) {
                                view.y = viewy;
                                this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, "vertical");
                            }
                        }
                        else {
                            let viewx = (-(x - this.referencex) * view.width / (port.width - 2 * this.block) | 0);
                            let viewy = (-(y - this.referencey) * view.height / (port.height - 2 * this.block) | 0);
                            viewx = Math.max(0, Math.min(viewx, view.width - port.width));
                            viewy = Math.max(0, Math.min(viewy, view.height - port.height));
                            if (view.x !== viewx || view.y !== viewy) {
                                view.x = viewx;
                                view.y = viewy;
                                this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, null, "horizontal");
                            }
                            else {
                                return false;
                            }
                        }
                    }
                    else {
                        return false;
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
            /**
             * @param {number} x
             * @param {number} y
             * @param {number} id
             * @param {*} component
             * @param {*} part
             * @param {boolean} touchEvent
             * @return {boolean}
             * @private
             */
            processScroll(x, y, id, component, part, touchEvent) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof id === 'number') || id === null) && ((component != null) || component === null) && ((part != null) || part === null) && ((typeof touchEvent === 'boolean') || touchEvent === null)) {
                    return this.processScroll$int$int$int$java_lang_Object$java_lang_Object$boolean(x, y, id, component, part, touchEvent);
                }
                else if (((x != null) || x === null) && ((y != null) || y === null) && id === undefined && component === undefined && part === undefined && touchEvent === undefined) {
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
                    dx = -10 * this.margin_1;
                }
                else if (part === "lefttrack") {
                    dx = -port.width;
                }
                else if (part === "right") {
                    dx = 10 * this.margin_1;
                }
                else if (part === "righttrack") {
                    dx = port.width;
                }
                else if (part === "up") {
                    dy = -10 * this.margin_1;
                }
                else if (part === "uptrack") {
                    dy = -port.height;
                }
                else if (part === "down") {
                    dy = 10 * this.margin_1;
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
                return (((part === "left") || (part === "lefttrack")) && (view.x > 0)) || (((part === "right") || (part === "righttrack")) && (view.x < view.width - port.width)) || (((part === "up") || (part === "uptrack")) && (view.y > 0)) || (((part === "down") || (part === "downtrack")) && (view.y < view.height - port.height));
            }
            /**
             * @param {*} component
             * @param {*} part
             * @return {boolean}
             * @private
             */
            processSpin(component, part) {
                const text = this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "text", "");
                try {
                    let itext = javaemul.internal.DoubleHelper.parseDouble(text);
                    const step = this.getDouble$java_lang_Object$java_lang_String$double(component, "step", 1);
                    if ((part === "up") ? (itext + step <= this.getDouble$java_lang_Object$java_lang_String$double(component, "maximum", javaemul.internal.IntegerHelper.MAX_VALUE)) : (itext - step >= this.getDouble$java_lang_Object$java_lang_String$double(component, "minimum", javaemul.internal.IntegerHelper.MIN_VALUE))) {
                        itext = (part === "up") ? (itext + step) : (itext - step);
                        let value = itext;
                        const minimum = this.getDouble$java_lang_Object$java_lang_String(component, "minimum");
                        const maximum = this.getDouble$java_lang_Object$java_lang_String(component, "maximum");
                        const oldValue = this.getDouble$java_lang_Object$java_lang_String(component, "value");
                        value = Math.round((value - minimum) / step) * step + minimum;
                        if (value < minimum || value > maximum) {
                            value = org.shikhar.MathUtils.clamp(value, minimum, maximum);
                            value = Math.floor((value - minimum) / step) * step + minimum;
                        }
                        value = org.shikhar.MathUtils.roundOffToSigFigures(value, 3);
                        this.setDouble$java_lang_Object$java_lang_String$double(component, "value", value);
                        this.setDouble$java_lang_Object$java_lang_String$double(this.mouseinside, "value", value);
                        this.setString$java_lang_Object$java_lang_String$java_lang_String(this.mouseinside, "text", "" + value);
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", ("" + value).length, 0);
                        this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", 0, 0);
                        this.repaint$java_lang_Object$java_lang_Object$java_lang_Object(component, "spinbox", "text");
                        if (value !== oldValue)
                            this.invoke(component, null, "action");
                        return true;
                    }
                }
                catch (nfe) {
                }
                const oldValue = this.getDouble$java_lang_Object$java_lang_String(component, "value") + "";
                this.setString$java_lang_Object$java_lang_String$java_lang_String(this.mouseinside, "text", oldValue);
                this.setInteger$java_lang_Object$java_lang_String$int$int(component, "start", oldValue.length, 0);
                this.setInteger$java_lang_Object$java_lang_String$int$int(component, "end", 0, 0);
                return false;
            }
            /**
             * @param {*} component
             * @param {*} part
             * @param {string} event
             * @return {boolean}
             * @private
             */
            invoke(component, part, event) {
                const method = Gui.get$java_lang_Object$java_lang_Object(component, event);
                let b = false;
                if (method != null) {
                    this.invokeImpl(method, part);
                    b = true;
                }
                if (this.defaultHandler != null) {
                    if (event === ("action")) {
                        this.defaultHandler.onAction(component, event);
                        b = true;
                    }
                    else if (event === ("perform")) {
                        this.defaultHandler.onPerform(component, event, part);
                        b = true;
                    }
                }
                Gui.repaintNeeded = true;
                return b;
            }
            /**
             * @param {*} method
             * @param {*} part
             * @private
             */
            invokeImpl(method, part) {
                if (method == null)
                    return;
                const data = method;
                if (data[1] == null)
                    return;
                const script = false;
                const args = (data.length > 2) ? (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(((data.length - 2) / 3 | 0)) : null;
                if (args != null)
                    for (let i = 0; i < args.length; i++) {
                        {
                            let target = data[2 + 3 * i];
                            if ("gui" === target) {
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
                                    args[i] = (target != null) ? Gui.get$java_lang_Object$java_lang_Object(target, parametername) : null;
                                    if (args[i] == null) {
                                        args[i] = data[2 + 3 * i + 2];
                                    }
                                }
                            }
                        }
                        ;
                    }
                try {
                    if (data[1] == null)
                        return;
                }
                catch (throwable) {
                    this.handleException(throwable);
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
            }
            /**
             * Called by handleMouse()
             * Sets 'mousenside' 'insidepart' objects as current widget and part of widget respectively which are under under mouse
             * Sets it null if no widget is under mouse
             * @param {*} component
             * @param {number} x
             * @param {number} y
             * @return {boolean}
             * @private
             */
            findComponent(component, x, y) {
                if (component === this.content) {
                    this.mouseinside = this.insidepart = null;
                    this.mousex = x;
                    this.mousey = y;
                }
                if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "visible", true)) {
                    return false;
                }
                const bounds = this.getRectangle(component, "bounds");
                if ((bounds == null) || !(bounds.contains$int$int(x, y))) {
                    return false;
                }
                this.mouseinside = component;
                x -= bounds.x;
                y -= bounds.y;
                const classname = Gui.getComponentClass(component);
                if ("combobox" === classname) {
                    if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "editable", true) && (x <= bounds.width - this.block)) {
                        const icon = this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, "icon", null);
                        this.insidepart = ((icon != null) && (x <= 2 + icon.getScaledWidth())) ? "icon" : null;
                    }
                    else {
                        this.insidepart = "down";
                    }
                }
                else if ("bean" === classname) {
                    Gui.set(component, ":mousex", new Number(x));
                    Gui.set(component, ":mousey", new Number(y));
                }
                else if (":combolist" === classname) {
                    if (!this.findScroll$java_lang_Object$int$int(component, x, y)) {
                        y += this.getRectangle(component, ":view").y;
                        for (let choice = Gui.get$java_lang_Object$java_lang_Object(Gui.get$java_lang_Object$java_lang_Object(component, "combobox"), ":comp"); choice != null; choice = Gui.get$java_lang_Object$java_lang_Object(choice, ":next")) {
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
                    for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
                        {
                            const r = this.getRectangle(tab, "bounds");
                            if (i === selected) {
                                const tabcontent = Gui.get$java_lang_Object$java_lang_Object(tab, ":comp");
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
                        const titleheight = this.getInteger$java_lang_Object$java_lang_String$int(component, ":titleheight", 0);
                        const resizable = this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "resizable", false) && Gui.get$java_lang_Object$java_lang_Object(component, ":minimized") == null;
                        const margin = 4;
                        if (resizable && (x < margin)) {
                            this.insidepart = (y < this.block) ? ":nw" : (y >= bounds.height - this.block) ? ":sw" : ":w";
                        }
                        else if (resizable && (y < margin)) {
                            this.insidepart = (x < this.block) ? ":nw" : (x >= bounds.width - this.block) ? ":ne" : ":n";
                        }
                        else if (resizable && (x >= bounds.width - margin)) {
                            this.insidepart = (y < this.block) ? ":ne" : (y >= bounds.height - this.block) ? ":se" : ":e";
                        }
                        else if (resizable && (y >= bounds.height - margin)) {
                            this.insidepart = (x < this.block) ? ":sw" : (x >= bounds.width - this.block) ? ":se" : ":s";
                        }
                        else {
                            if (y < 4 + titleheight) {
                                this.insidepart = "header";
                            }
                        }
                        let buttonX = bounds.width - titleheight - 1;
                        const buttonY = 3;
                        if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "closable", true)) {
                            if (x > buttonX && x < buttonX + titleheight - 2 && y > buttonY && y < buttonY + titleheight - 2)
                                this.insidepart = ":closebutton";
                            buttonX -= titleheight;
                        }
                        if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "maximizable", false)) {
                            buttonX -= titleheight;
                            if (x > buttonX && x < buttonX + titleheight - 2 && y > buttonY && y < buttonY + titleheight - 2)
                                this.insidepart = ":maximizebutton";
                        }
                        if (this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "iconifiable", true)) {
                            if (x > buttonX && x < buttonX + titleheight - 2 && y > buttonY && y < buttonY + titleheight - 2) {
                                this.insidepart = ":iconifybutton";
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
                        for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
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
                    const comp1 = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                    if (comp1 != null) {
                        if (!this.findComponent(comp1, x, y)) {
                            const comp2 = Gui.get$java_lang_Object$java_lang_Object(comp1, ":next");
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
                    const header = Gui.get$java_lang_Object$java_lang_Object(component, "header");
                    if (header != null && Gui.get$java_lang_Object$java_lang_Object(header, ":resizing") == null) {
                        const isResizable = this.getBoolean$java_lang_Object$java_lang_String(header, "resizable");
                        const hasAction = null != Gui.get$java_lang_Object$java_lang_Object(header, "action");
                        if (isResizable || hasAction) {
                            const view = this.getRectangle(component, ":view");
                            const port = this.getRectangle(component, ":port");
                            if (0 < x && x < port.width && 0 < y && y < port.y - 1) {
                                const columnwidths = Gui.get$java_lang_Object$java_lang_Object(component, ":widths");
                                let column = Gui.get$java_lang_Object$java_lang_Object(header, ":comp");
                                let left = -view.x;
                                for (let i = 0; i < columnwidths.length; i++) {
                                    {
                                        if (i !== 0) {
                                            column = Gui.get$java_lang_Object$java_lang_Object(column, ":next");
                                        }
                                        const width = (i === columnwidths.length - 1) ? (view.width - left + 2) : columnwidths[i];
                                        if (isResizable && ((x > left + width - 4 && x < left + width) || (i < columnwidths.length - 1 && x >= left + width && x < left + width + 4))) {
                                            Gui.set(header, ":resizecomponent", column);
                                            break;
                                        }
                                        else {
                                            Gui.set(header, ":resizecomponent", null);
                                            if (hasAction && this.getCount(component) > 0 && left < x && x < left + width) {
                                                this.insidepart = column;
                                                break;
                                            }
                                        }
                                        left += width;
                                    }
                                    ;
                                }
                            }
                            else if (isResizable) {
                                Gui.set(header, ":resizecomponent", null);
                                Gui.set(header, ":resizing", null);
                            }
                        }
                    }
                    if (this.insidepart == null && Gui.get$java_lang_Object$java_lang_Object(header, ":resizecomponent") == null)
                        this.findScroll$java_lang_Object$int$int(component, x, y);
                }
                else if ("tree" === classname) {
                    this.findScroll$java_lang_Object$int$int(component, x, y);
                }
                else if ("menubar" === classname) {
                    for (let menu = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Gui.get$java_lang_Object$java_lang_Object(menu, ":next")) {
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
                else if (":popup" === classname) {
                    for (let menu = Gui.get$java_lang_Object$java_lang_Object(Gui.get$java_lang_Object$java_lang_Object(component, "menu"), ":comp"); menu != null; menu = Gui.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(menu, "visible", true))
                                continue;
                            const r = this.getRectangle(menu, "bounds");
                            if ((y >= r.y) && (y < r.y + r.height)) {
                                this.insidepart = menu;
                                break;
                            }
                        }
                        ;
                    }
                    if (Gui.getComponentClass(this.insidepart) === "panel") {
                        const pnl = this.insidepart;
                        this.insidepart = null;
                        this.findComponent(pnl, x, y);
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
                    if (track < 10 * this.margin_1) {
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
             * @private
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
                this.repaint$java_lang_Object(this.g);
            }
            reValidateGui() {
                try {
                    this.doLayout(this.content);
                }
                catch (e) {
                    console.error(e.message, e);
                }
            }
            /**
             * Layout and paint the given component later
             *
             * @param {*} component
             * @private
             */
            validate(component) {
                this.repaint$java_lang_Object(component);
                const bounds = this.getRectangle(component, "bounds");
                if (bounds != null) {
                    bounds.width = -1 * Math.abs(bounds.width);
                }
            }
            repaint$java_lang_Object(component) {
                Gui.repaintNeeded = true;
            }
            repaint$java_lang_Object$int$int$int$int(component, x, y, width, height) {
                Gui.repaintNeeded = true;
            }
            /**
             * Repaint the given component's area later
             *
             * @param {*} component
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
             * @private
             */
            repaint(component, x, y, width, height) {
                if (((component != null) || component === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                    return this.repaint$java_lang_Object$int$int$int$int(component, x, y, width, height);
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
            /**
             * Requests that both the <i>Thinlet</i> component, and the given widget get
             * the input focus
             *
             * @param {*} component
             * a focusable widget inside visible and enabled parents, and
             * tabbedpane's selected tab
             * @return {boolean} true, if the given component was focusable
             */
            requestFocus(component) {
                if (this.isFocusable(component, true)) {
                    this.focusinside = true;
                    this.setFocus(component);
                    this.focusowner = component;
                    this.mousepressed = component;
                    this.mouseinside = component;
                    this.repaint$java_lang_Object(component);
                    return true;
                }
                return false;
            }
            getFocusedWidget() {
                return this.focusowner;
            }
            /**
             * Request focus for the given component
             *
             * @param {*} component
             * a focusable component
             * @return {boolean} true if the focusowner was changed, otherwise false
             */
            setFocus(component) {
                if (component == null && this.focusowner != null) {
                    this.invoke(this.focusowner, null, "focuslost");
                    this.focusowner = null;
                    return true;
                }
                if (!this.focusinside) {
                    if (this.awtComponent != null) {
                        this.focusinside = true;
                    }
                }
                if (this.focusowner !== component && this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "enabled", true)) {
                    const focused = this.focusowner;
                    if (this.focusowner != null) {
                        this.focusowner = null;
                        this.repaint$java_lang_Object(focused);
                        this.invoke(focused, null, "focuslost");
                    }
                    if (this.focusowner == null) {
                        this.focusowner = component;
                        this.invoke(component, null, "focusgained");
                    }
                    return true;
                }
                return false;
            }
            /**
             * @return {boolean} next focusable component is found (not the first of the
             * desktop/dialog)
             * @param {*} current
             * @param {boolean} outgo
             * @private
             */
            setNextFocusable(current, outgo) {
                let consumed = true;
                outgo = true;
                for (let next = null, component = current; true; component = next) {
                    {
                        next = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                        if (next == null) {
                            next = Gui.get$java_lang_Object$java_lang_Object(component, ":next");
                        }
                        while ((next == null)) {
                            {
                                component = this.getParent(component);
                                if (component == null) {
                                    return false;
                                }
                                if ((component === this.content) || ((Gui.getComponentClass(component) === "dialog") && (!outgo || this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "modal", false)))) {
                                    consumed = false;
                                    next = component;
                                }
                                else {
                                    next = Gui.get$java_lang_Object$java_lang_Object(component, ":next");
                                }
                            }
                        }
                        ;
                        if (next === current) {
                            return false;
                        }
                        if (this.isFocusable(next, false)) {
                            this.setFocus(next);
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
             * @private
             */
            setPreviousFocusable(component, outgo) {
                for (let i = 0; i < 2; i++) {
                    {
                        const previous = this.getPreviousFocusable(component, null, true, false, (i === 0), outgo);
                        if (previous != null) {
                            this.setFocus(previous);
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
             * @private
             */
            getPreviousFocusable(component, block, start, upward, backward, outgo) {
                let previous = null;
                if ((component != null) && (component !== block)) {
                    const go = ((Gui.getComponentClass(component) !== "dialog") || (outgo && !this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "modal", false)));
                    if (!start && !upward && go) {
                        previous = this.getPreviousFocusable(Gui.get$java_lang_Object$java_lang_Object(component, ":next"), block, false, false, backward, outgo);
                    }
                    if ((previous == null) && ((upward && backward) || (!start && !upward))) {
                        previous = this.getPreviousFocusable(Gui.get$java_lang_Object$java_lang_Object(component, ":comp"), block, false, false, backward, outgo);
                        if ((previous == null) && this.isFocusable(component, false)) {
                            previous = component;
                        }
                    }
                    if ((previous == null) && (start || upward) && go) {
                        previous = this.getPreviousFocusable(this.getParent(component), component, false, true, backward, outgo);
                    }
                    if ((previous == null) && (start || upward) && !backward && go) {
                        previous = this.getPreviousFocusable(Gui.get$java_lang_Object$java_lang_Object(component, ":next"), block, false, false, backward, outgo);
                    }
                }
                return previous;
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
             * @private
             */
            isFocusable(component, forced) {
                const classname = Gui.getComponentClass(component);
                if ((classname === "panel") || (classname === "button") || (classname === "checkbox") || ("togglebutton" === classname) || (classname === "combobox") || (classname === "textfield") || (classname === "passwordfield") || (classname === "textarea") || (classname === "spinbox") || (classname === "slider") || (classname === "list") || (classname === "table") || (classname === "tree") || (classname === "tabbedpane") || (classname === "bean") || (forced && (classname === "splitpane") || (forced && (classname === "dialog")))) {
                    for (let comp = component; comp != null;) {
                        {
                            if (!this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "enabled", true) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(comp, "visible", true)) {
                                return false;
                            }
                            const parent = this.getParent(comp);
                            if ((Gui.getComponentClass(comp) === "tab") && (this.getItem(parent, this.getInteger$java_lang_Object$java_lang_String$int(parent, "selected", 0)) !== comp)) {
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
                for (let i = 0; i < Gui.dtd_$LI$().length; i += 3) {
                    {
                        if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(Gui.dtd_$LI$()[i], classname)) {
                            return Gui.createImpl(Gui.dtd_$LI$()[i]);
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
                return Gui.get$java_lang_Object$java_lang_Object(component, ":class");
            }
            /**
             * Get the topmost component
             *
             * @return {*} the root object (it is a <i>desktop</i>), never <i>null</i>
             */
            getDesktop() {
                return this.content;
            }
            /**
             * @param {string} classname
             * @return {*}
             * @private
             */
            static createImpl(classname) {
                return [":class", classname, null];
            }
            /**
             * @param {*} component
             * @param {*} key
             * @param {*} value
             * @return {boolean}
             */
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
                if (value != null && previous != null) {
                    previous[2] = [key, value, null];
                    return true;
                }
                return false;
            }
            static get$java_lang_Object$java_lang_Object(component, key) {
                if (!(component != null && component instanceof Array && (component.length == 0 || component[0] == null || component[0] != null)))
                    return null;
                for (let entry = component; entry != null; entry = entry[2]) {
                    {
                        if (entry[0] === key) {
                            if (key === "next" && entry[1] === component) {
                                return null;
                            }
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
                return Gui.getItemCountImpl(component, ":comp");
            }
            /**
             * Gets the parent of this component
             *
             * @param {*} component
             * a widget
             * @return {*} the parent container of this component or item
             */
            getParent(component) {
                return Gui.get$java_lang_Object$java_lang_Object(component, ":parent");
            }
            /**
             * Gets the index of the first selected item in the given component
             *
             * @param {*} component
             * a widget (combobox, tabbedpane, list, table, header, or tree)
             * @return {number} the first selected index or -1
             */
            getSelectedIndex(component) {
                const classname = Gui.getComponentClass(component);
                if ((classname === "combobox") || (classname === "tabbedpane")) {
                    return this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", (classname === "combobox") ? -1 : 0);
                }
                if ((classname === "list") || (classname === "table") || (classname === "header") || (classname === "tree")) {
                    let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                    for (let i = 0; item != null; i++) {
                        {
                            if (this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "selected", false)) {
                                return i;
                            }
                            item = Gui.get$java_lang_Object$java_lang_Object(item, ":next");
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
             * a widget (combobox, tabbedpane, list, table, header or tree)
             * @return {*} the first selected item or null
             */
            getSelectedItem(component) {
                const classname = Gui.getComponentClass(component);
                if ((classname === "combobox") || (classname === "tabbedpane")) {
                    const index = this.getInteger$java_lang_Object$java_lang_String$int(component, "selected", (classname === "combobox") ? -1 : 0);
                    return (index !== -1) ? Gui.getItemImpl(component, ":comp", index) : null;
                }
                if ((classname === "list") || (classname === "table") || (classname === "header") || (classname === "tree")) {
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
                const classname = Gui.getComponentClass(component);
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
             * @private
             */
            findNextItem(component, classname, item) {
                if (item == null) {
                    return Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                }
                else if ("tree" === classname) {
                    let next = Gui.get$java_lang_Object$java_lang_Object(item, ":comp");
                    if ((next == null) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(item, "expanded", true)) {
                        while (((item !== component) && ((next = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) == null))) {
                            {
                                item = this.getParent(item);
                            }
                        }
                        ;
                    }
                    return next;
                }
                else {
                    return Gui.get$java_lang_Object$java_lang_Object(item, ":next");
                }
            }
            /**
             * Removes all the components from this container's specified list
             *
             * @param {*} component
             * the specified container
             */
            removeAll(component) {
                for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) {
                    {
                        this.remove(item);
                    }
                    ;
                }
                if (Gui.get$java_lang_Object$java_lang_Object(component, ":comp") != null) {
                    Gui.set(component, ":comp", null);
                    this.update$java_lang_Object$java_lang_Object(component, "validate");
                }
            }
            /**
             *
             * @param {*} component
             * @param {string} key
             * @return {number}
             * @private
             */
            static getItemCountImpl(component, key) {
                let i = 0;
                for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, key); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        i++;
                        if (i > 100) {
                            return 3;
                        }
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
                return Gui.getItemImpl(component, ":comp", index);
            }
            /**
             * Gets all the components in this container
             *
             * @param {*} component
             * a specified container
             * @return {java.lang.Object[]} an array of all the components in this container
             */
            static getItems(component) {
                const items = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(Gui.getItemCountImpl(component, ":comp"));
                let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp");
                for (let i = 0; i < items.length; i++) {
                    {
                        items[i] = comp;
                        comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next");
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
             * @private
             */
            static getItemImpl(component, key, index) {
                let i = 0;
                for (let item = Gui.get$java_lang_Object$java_lang_Object(component, key); item != null; item = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) {
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
            /**
             * @param {*} component
             * @param {*} value
             * @return {number}
             */
            getIndex(component, value) {
                let index = 0;
                for (let item = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); item != null; item = Gui.get$java_lang_Object$java_lang_Object(item, ":next")) {
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
            add$java_lang_Object$int(component, index) {
                this.add$java_lang_Object$java_lang_Object$int(this.content, component, index);
            }
            add$java_lang_Object$java_lang_Object(parent, component) {
                this.add$java_lang_Object$java_lang_Object$int(parent, component, -1);
            }
            add$java_lang_Object$java_lang_Object$int(parent, component, index) {
                if (this.getParent(component) === parent) {
                }
                this.addImpl(parent, component, index);
                this.addBeanToList(component);
                this.update$java_lang_Object$java_lang_Object(component, "validate");
                if ("dialog" === Gui.getComponentClass(component) && this.getBoolean$java_lang_Object$java_lang_String(component, "modal")) {
                    this.setModal(component, true);
                }
                if (parent === this.content) {
                    this.setNextFocusable(component, false);
                }
            }
            /**
             * Adds the specified component to the container at the given position
             *
             * @param {*} parent
             * a container
             * @param {*} component
             * a component to be
             * inserted
             * @param {number} index
             * the position at which to insert the component, or -1 to insert
             * the component at the end
             */
            add(parent, component, index) {
                if (((parent != null) || parent === null) && ((component != null) || component === null) && ((typeof index === 'number') || index === null)) {
                    return this.add$java_lang_Object$java_lang_Object$int(parent, component, index);
                }
                else if (((parent != null) || parent === null) && ((typeof component === 'number') || component === null) && index === undefined) {
                    return this.add$java_lang_Object$int(parent, component);
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
            setModal(dialog, modal) {
                if ("dialog" !== Gui.getComponentClass(dialog))
                    return;
                this.setBoolean$java_lang_Object$java_lang_String$boolean(dialog, "modal", modal);
                if (modal === true) {
                    this.checkLocation();
                    this.mousepressed = dialog;
                    this.insidepart = "modal";
                    this.setFocus(dialog);
                    this.findComponent(this.content, this.mousex, this.mousey);
                    if (dialog != null) {
                        const parent = this.getParent(dialog);
                        if (Gui.get$java_lang_Object$java_lang_Object(parent, ":comp") !== dialog) {
                            this.removeItemImpl(parent, dialog);
                            this.insertItem(parent, ":comp", dialog, 0);
                            Gui.set(dialog, ":parent", parent);
                            this.repaint$java_lang_Object(dialog);
                        }
                    }
                }
            }
            /**
             * Referenced by DOM
             * @param {*} parent
             * @param {*} key
             * @param {*} component
             * @param {number} index
             * @private
             */
            insertItem(parent, key, component, index) {
                let item = parent;
                let next = Gui.get$java_lang_Object$java_lang_Object(parent, key);
                for (let i = 0;; i++) {
                    {
                        if ((i === index) || (next == null)) {
                            Gui.set(item, key, component);
                            Gui.set(component, ":next", next);
                            break;
                        }
                        next = Gui.get$java_lang_Object$java_lang_Object(item = next, key = ":next");
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
                this.update$java_lang_Object$java_lang_Object(component, "validate");
                const parent = this.getParent(component);
                const classname = Gui.getComponentClass(component);
                if (("popupmenu" === classname) || ("header" === classname)) {
                    Gui.set(parent, classname, null);
                }
                else {
                    this.removeBeanFromList(component);
                    this.removeItemImpl(parent, component);
                    for (let comp = this.focusowner; comp != null; comp = this.getParent(comp)) {
                        {
                            if (comp === component) {
                                this.setNextFocusable(parent, false);
                                break;
                            }
                        }
                        ;
                    }
                }
            }
            /**
             * Delete the give component from its parent list
             *
             * @param {*} parent
             * @param {*} component
             * @private
             */
            removeItemImpl(parent, component) {
                let previous = null;
                for (let comp = Gui.get$java_lang_Object$java_lang_Object(parent, ":comp"); comp != null;) {
                    {
                        const next = Gui.get$java_lang_Object$java_lang_Object(comp, ":next");
                        if (next === component) {
                            previous = comp;
                            break;
                        }
                        comp = next;
                    }
                    ;
                }
                Gui.set((previous != null) ? previous : parent, (previous != null) ? ":next" : ":comp", Gui.get$java_lang_Object$java_lang_Object(component, ":next"));
                Gui.set(component, ":next", null);
                Gui.set(component, ":parent", null);
            }
            /**
             * Returns canvas widget
             * @param {String} name
             * @return {org.shikhar.Canvas} {Canvas} widget if exists with the name specified else returns null
             * @param {string} name
             */
            findCanvas(name) {
                const widget = this.find$java_lang_String(name);
                if (Gui.getComponentClass(widget) === "bean" && (this.getComponent(widget, "bean") != null && this.getComponent(widget, "bean") instanceof org.shikhar.Canvas)) {
                    return this.getComponent(widget, "bean");
                }
                return null;
            }
            find$java_lang_String(name) {
                return this.find$java_lang_Object$java_lang_String(this.content, name);
            }
            find$java_lang_Object$java_lang_String(component, name) {
                if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(name, Gui.get$java_lang_Object$java_lang_Object(component, "name"))) {
                    return component;
                }
                let found = null;
                for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        if ((found = this.find$java_lang_Object$java_lang_String(comp, name)) != null) {
                            return found;
                        }
                    }
                    ;
                }
                const header = Gui.get$java_lang_Object$java_lang_Object(component, "header");
                if ((header != null) && ((found = this.find$java_lang_Object$java_lang_String(header, name)) != null)) {
                    return found;
                }
                const popupmenu = Gui.get$java_lang_Object$java_lang_Object(component, "popupmenu");
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
             * Returns true if widget is contained in parent or in one of child of the parent
             *
             * @param {*} parent
             * the widget is searched inside this component
             * @param {*} child
             * the child widget to be searched
             * @return {boolean} the first suitable component, or null
             */
            containedIn(parent, child) {
                if (child === parent) {
                    return true;
                }
                let found = false;
                for (let comp = Gui.get$java_lang_Object$java_lang_Object(parent, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                    {
                        if ((found = this.containedIn(comp, child)) !== false) {
                            return true;
                        }
                    }
                    ;
                }
                const header = Gui.get$java_lang_Object$java_lang_Object(parent, "header");
                if ((header != null) && ((found = this.containedIn(header, child)) !== false)) {
                    return found;
                }
                const popupmenu = Gui.get$java_lang_Object$java_lang_Object(parent, "popupmenu");
                if ((popupmenu != null) && ((found = this.containedIn(popupmenu, child)) !== false)) {
                    return found;
                }
                return false;
            }
            /**
             * Returns the parent dialig of child if any
             *
             * @param parent
             * the widget is searched inside this component
             * @return {*} the first parent which is dialog,  returns null if it is not contained in dialog
             * @param {*} child
             */
            getParentDialog(child) {
                if (child == null || Gui.getComponentClass(child) === "desktop")
                    return null;
                if (Gui.getComponentClass(child) === "dialog") {
                    return child;
                }
                return this.getParentDialog(this.getParent(child));
            }
            getScreenToLocal(comp, v) {
                if (comp == null || Gui.getComponentClass(comp) === "desktop")
                    return v;
                const parent = this.getParent(comp);
                const bounds = this.getRectangle(comp, "bounds");
                if (bounds == null)
                    return v;
                v.subtract$double$double(bounds.x, bounds.y);
                if (parent != null) {
                    return this.getScreenToLocal(parent, v);
                }
                return v;
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
             * @param {number} keycode
             * @param {number} modifiers
             * @return {boolean} true if the char was consumed
             * @private
             */
            checkMnemonic(component, parent, checked, keycode, modifiers) {
                if ((component == null) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "visible", true) || !this.getBoolean$java_lang_Object$java_lang_String$boolean(component, "enabled", true)) {
                    return false;
                }
                const classname = Gui.getComponentClass(component);
                if ("label" === classname) {
                    if (this.hasMnemonic(component, keycode, modifiers)) {
                        const labelfor = Gui.get$java_lang_Object$java_lang_Object(component, "for");
                        if (labelfor != null) {
                            this.requestFocus(labelfor);
                            return true;
                        }
                    }
                }
                else if ("button" === classname) {
                    if (((modifiers === 0) && (((keycode === org.shikhar.AWTKeyEvent.VK_ENTER) && (Gui.get$java_lang_Object$java_lang_Object(component, "type") === "default")) || ((keycode === org.shikhar.AWTKeyEvent.VK_ESCAPE) && (Gui.get$java_lang_Object$java_lang_Object(component, "type") === "cancel")))) || this.hasMnemonic(component, keycode, modifiers)) {
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
                    for (let menu = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); menu != null; menu = Gui.get$java_lang_Object$java_lang_Object(menu, ":next")) {
                        {
                            if (this.hasMnemonic(menu, keycode, modifiers) || ((modifiers === 0) && (keycode === org.shikhar.AWTKeyEvent.VK_F10))) {
                                this.closeup();
                                Gui.set(component, "selected", menu);
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
                    for (let tab = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); tab != null; tab = Gui.get$java_lang_Object$java_lang_Object(tab, ":next")) {
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
                    const comp = Gui.get$java_lang_Object$java_lang_Object(this.getItem(component, selected), ":comp");
                    if ((comp != null) && (comp !== checked) && this.checkMnemonic(comp, false, null, keycode, modifiers)) {
                        return true;
                    }
                }
                if (("panel" === classname) || ("desktop" === classname) || ("dialog" === classname) || ("splitpane" === classname) || ("menubar" === classname) || ("menu" === classname)) {
                    for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
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
             * @private
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
             * @private
             */
            hasAccelerator(component, keycode, modifiers) {
                const accelerator = Gui.get$java_lang_Object$java_lang_Object(component, "accelerator");
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
                let table = Gui.get$java_lang_Object$java_lang_Object(component, ":bind");
                if (value != null) {
                    if (table == null) {
                        Gui.set(component, ":bind", table = (new java.util.Hashtable()));
                    }
                    if (key === "pintoworld" && value != null && !(value != null && value instanceof org.shikhar.Vector2)) {
                        const bounds = this.getRectangle(component, "bounds");
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
                const table = Gui.get$java_lang_Object$java_lang_Object(component, ":bind");
                return (table != null) ? table.get(key) : null;
            }
            parse$java_lang_String(path) {
                return this.parse$java_lang_String$java_lang_Object(path, this);
            }
            parse$java_lang_String$java_lang_Object(path, handler) {
                let inputstream = null;
                try {
                    inputstream = this.constructor.getResourceAsStream(path);
                    if (inputstream == null) {
                        try {
                            inputstream = new java.net.URL(path).openStream();
                        }
                        catch (mfe) {
                        }
                    }
                }
                catch (e) {
                }
                return this.parse$java_io_InputStream$java_lang_Object(inputstream, handler);
            }
            parsefromString(xml, validate, dom, handler) {
                return this.parse$java_io_Reader$boolean$boolean$java_lang_Object(new java.io.StringReader(xml), validate, dom, handler);
            }
            parse$java_io_InputStream(inputstream) {
                return this.parse$java_io_InputStream$java_lang_Object(inputstream, this);
            }
            parse$java_io_InputStream$java_lang_Object(inputstream, handler) {
                const reader = new java.io.BufferedReader(new java.io.InputStreamReader(inputstream));
                return this.parse$java_io_Reader$boolean$boolean$java_lang_Object(reader, true, false, handler);
            }
            /**
             * You can use the internal xml parser as a simple SAX-like parser, during
             * the process it calls the <i>startElement</i>, <i>characters</i>, and
             * <i>endElement</i> methods
             *
             * @param {java.io.InputStream} inputstream
             * e.g. <i>new URL("http://myserver/myservlet").openStream()</i>
             * @throws java.io.IOException
             */
            parseXML(inputstream) {
                const reader = new java.io.BufferedReader(new java.io.InputStreamReader(inputstream));
                this.parse$java_io_Reader$boolean$boolean$java_lang_Object(reader, false, false, null);
            }
            /**
             * The SAX-like parser calls this method, you have to overwrite it
             *
             * @param {string} name
             * of the tag
             * @param {java.util.Hashtable} attributelist
             * a list of attributes including keys and value pairs
             */
            startElement(name, attributelist) {
            }
            /**
             * The SAX-like parser calls this method, you have to overwrite it
             *
             * @param {string} text
             * the content of a tag
             */
            characters(text) {
            }
            /**
             * The SAX-like parser calls this method, you have to overwrite it
             */
            endElement() {
            }
            /**
             * You can use the internal xml parser as a simple DOM-like parser, use the
             * <i>getDOMAttribute</i>, <i>getDOMText</i>, <i>getDOMCount</i>,
             * <i>getDOMNode</i>, <i>getClass</i>, and <i>getParent</i> methods to
             * analyse the document
             *
             * @param {java.io.InputStream} inputstream
             * e.g. <i>new URL("http://myserver/myservlet").openStream()</i>
             * @return {*} the root tag
             * @throws java.io.IOException
             */
            parseDOM(inputstream) {
                const reader = new java.io.BufferedReader(new java.io.InputStreamReader(inputstream));
                return this.parse$java_io_Reader$boolean$boolean$java_lang_Object(reader, false, true, null);
            }
            /**
             * Gets the attribute value by the specified key for a DOM tag
             *
             * @param {*} node
             * a specified tag
             * @param {string} key
             * a string to identify the value pair
             * @return {string} the value, or null
             */
            static getDOMAttribute(node, key) {
                return Gui.get$java_lang_Object$java_lang_Object(node, key);
            }
            /**
             * Gets the content string of a tag
             *
             * @param {*} node
             * a specified tag
             * @return {string} the value, or null
             */
            static getDOMText(node) {
                return Gui.get$java_lang_Object$java_lang_Object(node, ":text");
            }
            /**
             * Gets the number of tags in a tag by a specified tagname
             *
             * @param {*} node
             * a specified tag
             * @param {string} key
             * the searched tagname
             * @return {number} the number of tags
             */
            static getDOMCount(node, key) {
                return Gui.getItemCountImpl(node, key);
            }
            /**
             * Gets the subtag of the specified tag by tagname and index
             *
             * @param {*} node
             * a specified tag
             * @param {string} key
             * the searched tagname
             * @param {number} index
             * the index of the requested subtag
             * @return {*} the found tag, or null
             */
            static getDOMNode(node, key, index) {
                return Gui.getItemImpl(node, key, index);
            }
            parse$java_io_Reader$boolean$boolean$java_lang_Object(reader, validate, dom, handler) {
                try {
                    let parentlist = null;
                    let current = null;
                    let attributelist = null;
                    dom = false;
                    const methods = (validate && !dom) ? (new java.util.Vector()) : null;
                    const text = new java.lang.StringBuffer();
                    for (let c = reader.read(); c !== -1;) {
                        {
                            if (c == '<'.charCodeAt(0)) {
                                if ((c = reader.read()) == '/'.charCodeAt(0)) {
                                    if (text.length() > 0) {
                                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(text.length() - 1)) == ' '.charCodeAt(0)) {
                                            text.setLength(text.length() - 1);
                                        }
                                        if (!validate) {
                                            if (dom) {
                                                Gui.set(current, ":text", text.toString());
                                            }
                                            else {
                                                this.characters(text.toString());
                                            }
                                        }
                                        text.setLength(0);
                                    }
                                    const tagname = parentlist[2];
                                    for (let i = 0; i < tagname.length; i++) {
                                        {
                                            if ((c = reader.read()) != (c => c.charCodeAt == null ? c : c.charCodeAt(0))(tagname.charAt(i))) {
                                                throw new java.lang.IllegalArgumentException(tagname);
                                            }
                                        }
                                        ;
                                    }
                                    while ((" \t\n\r".indexOf(String.fromCharCode(c = reader.read())) !== -1)) { }
                                    ;
                                    if (c != '>'.charCodeAt(0))
                                        throw new java.lang.IllegalArgumentException();
                                    c = reader.read();
                                    if (!validate && !dom) {
                                        this.endElement();
                                    }
                                    if (parentlist[0] == null) {
                                        reader.close();
                                        this.finishParse(methods, current, handler);
                                        return current;
                                    }
                                    current = parentlist[0];
                                    parentlist = parentlist[1];
                                }
                                else if (c == '!'.charCodeAt(0)) {
                                    while (((c = reader.read()) != '>'.charCodeAt(0))) { }
                                    ;
                                }
                                else if (c == '?'.charCodeAt(0)) {
                                    let question = false;
                                    while ((((c = reader.read()) != '>'.charCodeAt(0)) || !question)) {
                                        {
                                            question = (c == '?'.charCodeAt(0));
                                        }
                                    }
                                    ;
                                }
                                else {
                                    text.setLength(0);
                                    let iscomment = false;
                                    while ((">/ \t\n\r".indexOf(String.fromCharCode(c)) === -1)) {
                                        {
                                            text.append(String.fromCharCode(c));
                                            if ((text.length() === 3) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(0)) == '!'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(1)) == '-'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(2)) == '-'.charCodeAt(0))) {
                                                let m = 0;
                                                while ((true)) {
                                                    {
                                                        c = reader.read();
                                                        if (c == '-'.charCodeAt(0)) {
                                                            m++;
                                                        }
                                                        else if ((c == '>'.charCodeAt(0)) && (m >= 2)) {
                                                            break;
                                                        }
                                                        else {
                                                            m = 0;
                                                        }
                                                    }
                                                }
                                                ;
                                                iscomment = true;
                                            }
                                            c = reader.read();
                                        }
                                    }
                                    ;
                                    if (iscomment) {
                                        continue;
                                    }
                                    const tagname = text.toString();
                                    parentlist = [current, parentlist, tagname];
                                    if (validate) {
                                        current = (current != null) ? this.addElement(current, tagname) : Gui.create(tagname);
                                    }
                                    else {
                                        if (dom) {
                                            const parent = current;
                                            current = Gui.createImpl(tagname);
                                            if (parent != null) {
                                                this.insertItem(parent, tagname, current, -1);
                                            }
                                        }
                                        else {
                                            current = tagname;
                                        }
                                    }
                                    text.setLength(0);
                                    while ((true)) {
                                        {
                                            let whitespace = false;
                                            while ((" \t\n\r".indexOf(String.fromCharCode(c)) !== -1)) {
                                                {
                                                    c = reader.read();
                                                    whitespace = true;
                                                }
                                            }
                                            ;
                                            if (c == '>'.charCodeAt(0)) {
                                                if (!validate && !dom) {
                                                    this.startElement(current, attributelist);
                                                    attributelist = null;
                                                }
                                                c = reader.read();
                                                break;
                                            }
                                            else if (c == '/'.charCodeAt(0)) {
                                                if ((c = reader.read()) != '>'.charCodeAt(0)) {
                                                    throw new java.lang.IllegalArgumentException();
                                                }
                                                if (!validate && !dom) {
                                                    this.startElement(current, attributelist);
                                                    attributelist = null;
                                                    this.endElement();
                                                }
                                                if (parentlist[0] == null) {
                                                    reader.close();
                                                    this.finishParse(methods, current, handler);
                                                    return current;
                                                }
                                                current = parentlist[0];
                                                parentlist = parentlist[1];
                                                c = reader.read();
                                                break;
                                            }
                                            else if (whitespace) {
                                                while (("= \t\n\r".indexOf(String.fromCharCode(c)) === -1)) {
                                                    {
                                                        text.append(String.fromCharCode(c));
                                                        c = reader.read();
                                                    }
                                                }
                                                ;
                                                const key = text.toString();
                                                text.setLength(0);
                                                while ((" \t\n\r".indexOf(String.fromCharCode(c)) !== -1)) {
                                                    c = reader.read();
                                                }
                                                ;
                                                if (c != '='.charCodeAt(0))
                                                    throw new java.lang.IllegalArgumentException();
                                                while ((" \t\n\r".indexOf(String.fromCharCode(c = reader.read())) !== -1)) { }
                                                ;
                                                const quote = String.fromCharCode(c);
                                                if ((c != '\"'.charCodeAt(0)) && (c != '\''.charCodeAt(0)))
                                                    throw new java.lang.IllegalArgumentException();
                                                while (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(quote) != (c = reader.read()))) {
                                                    {
                                                        if (c == '&'.charCodeAt(0)) {
                                                            const eb = new java.lang.StringBuffer();
                                                            while ((';'.charCodeAt(0) != (c = reader.read()))) {
                                                                {
                                                                    eb.append(String.fromCharCode(c));
                                                                }
                                                            }
                                                            ;
                                                            const entity = eb.toString();
                                                            if ("lt" === entity) {
                                                                text.append('<');
                                                            }
                                                            else if ("gt" === entity) {
                                                                text.append('>');
                                                            }
                                                            else if ("amp" === entity) {
                                                                text.append('&');
                                                            }
                                                            else if ("quot" === entity) {
                                                                text.append('\"');
                                                            }
                                                            else if ("apos" === entity) {
                                                                text.append('\'');
                                                            }
                                                            else if ( /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(entity, "#")) {
                                                                const hexa = ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(entity.charAt(1)) == 'x'.charCodeAt(0));
                                                                text.append(String.fromCharCode(javaemul.internal.IntegerHelper.parseInt(entity.substring(hexa ? 2 : 1), hexa ? 16 : 10)));
                                                            }
                                                            else
                                                                throw new java.lang.IllegalArgumentException("unknown entity " + entity);
                                                        }
                                                        else
                                                            text.append(String.fromCharCode(c));
                                                    }
                                                }
                                                ;
                                                if (validate) {
                                                    this.addAttribute(current, key, text.toString(), methods);
                                                }
                                                else {
                                                    if (dom) {
                                                        Gui.set(current, key, text.toString());
                                                    }
                                                    else {
                                                        if (attributelist == null) {
                                                            attributelist = (new java.util.Hashtable());
                                                        }
                                                        attributelist.put(key, text.toString());
                                                    }
                                                }
                                                text.setLength(0);
                                                c = reader.read();
                                            }
                                            else
                                                throw new java.lang.IllegalArgumentException();
                                        }
                                    }
                                    ;
                                }
                            }
                            else {
                                if (" \t\n\r".indexOf(String.fromCharCode(c)) !== -1) {
                                    if ((text.length() > 0) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(text.charAt(text.length() - 1)) != ' '.charCodeAt(0))) {
                                        text.append(' ');
                                    }
                                }
                                else {
                                    text.append(String.fromCharCode(c));
                                }
                                c = reader.read();
                            }
                        }
                        ;
                    }
                    throw new java.lang.IllegalArgumentException();
                }
                finally {
                    if (reader != null) {
                        reader.close();
                    }
                    ;
                }
            }
            /**
             *
             * @param inputstream
             * @param {boolean} validate
             * parse GUI from xml if true
             * @param {boolean} dom
             * parse an xml resoource
             * @param {*} handler
             * @return
             * @throws java.io.IOException
             * @throws java.lang.IllegalArgumentException
             * @param {java.io.Reader} reader
             * @return {*}
             * @private
             */
            parse(reader, validate, dom, handler) {
                if (((reader != null && reader instanceof java.io.Reader) || reader === null) && ((typeof validate === 'boolean') || validate === null) && ((typeof dom === 'boolean') || dom === null) && ((handler != null) || handler === null)) {
                    return this.parse$java_io_Reader$boolean$boolean$java_lang_Object(reader, validate, dom, handler);
                }
                else if (((typeof reader === 'string') || reader === null) && ((validate != null) || validate === null) && dom === undefined && handler === undefined) {
                    return this.parse$java_lang_String$java_lang_Object(reader, validate);
                }
                else if (((reader != null && reader instanceof java.io.InputStream) || reader === null) && ((validate != null) || validate === null) && dom === undefined && handler === undefined) {
                    return this.parse$java_io_InputStream$java_lang_Object(reader, validate);
                }
                else if (((typeof reader === 'string') || reader === null) && validate === undefined && dom === undefined && handler === undefined) {
                    return this.parse$java_lang_String(reader);
                }
                else if (((reader != null && reader instanceof java.io.InputStream) || reader === null) && validate === undefined && dom === undefined && handler === undefined) {
                    return this.parse$java_io_InputStream(reader);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * @param {java.util.Vector} methods
             * @param {*} root
             * @param {*} handler
             * @private
             */
            finishParse(methods, root, handler) {
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
             * @private
             */
            addImpl(parent, component, index) {
                const parentclass = Gui.getComponentClass(parent);
                const classname = Gui.getComponentClass(component);
                if ((("combobox" === parentclass) && (("choice" === classname) || "checkboxmenuitem" === classname || "separator" === classname)) || (("tabbedpane" === parentclass) && ("tab" === classname)) || (("list" === parentclass) && ("item" === classname)) || (("desktop" === parentclass) && ("popupmenu" === classname)) || (("table" === parentclass) && ("row" === classname)) || (("header" === parentclass) && ("column" === classname)) || (("row" === parentclass) && ("cell" === classname)) || ((("tree" === parentclass) || ("node" === parentclass)) && ("node" === classname)) || (("menubar" === parentclass) && ("menu" === classname)) || ((("menu" === parentclass) || ("popupmenu" === parentclass)) && (("menu" === classname) || ("menuitem" === classname) || ("panel" === classname) || ("checkboxmenuitem" === classname) || ("separator" === classname))) || ((("panel" === parentclass) || ("desktop" === parentclass) || ("splitpane" === parentclass) || ("dialog" === parentclass) || ("tab" === parentclass)) && this.instance(classname, "component") && (classname !== "popupmenu"))) {
                    this.insertItem(parent, ":comp", component, index);
                    Gui.set(component, ":parent", parent);
                }
                else if ((("table" === parentclass) && ("header" === classname)) || (("popupmenu" === classname) && this.instance(parentclass, "component"))) {
                    Gui.set(parent, classname, component);
                    Gui.set(component, ":parent", parent);
                }
                else
                    throw new java.lang.IllegalArgumentException(classname + " add " + parentclass);
            }
            /**
             * @param {*} classname
             * @param {*} extendclass
             * @return {boolean}
             * @private
             */
            instance(classname, extendclass) {
                if (classname === extendclass) {
                    return true;
                }
                for (let i = 0; i < Gui.dtd_$LI$().length; i += 3) {
                    {
                        if (classname === Gui.dtd_$LI$()[i]) {
                            return this.instance(Gui.dtd_$LI$()[i + 1], extendclass);
                        }
                    }
                    ;
                }
                return false;
            }
            /**
             * @param {*} parent
             * @param {string} name
             * @return {*}
             * @private
             */
            addElement(parent, name) {
                const component = Gui.create(name);
                this.addImpl(parent, component, -1);
                return component;
            }
            /**
             *
             * @throws java.lang.IllegalArgumentException
             * @param {*} component
             * @param {string} key
             * @param {string} value
             * @param {java.util.Vector} lasts
             * @private
             */
            addAttribute(component, key, value, lasts) {
                const definition = Gui.getDefinition(Gui.getComponentClass(component), key, null);
                if (definition == null) {
                }
                key = definition[1];
                if ("string" === definition[0]) {
                    if (key === "rectbounds" && value != null) {
                        const arr = value.split(",");
                        if (arr.length === 4) {
                            const attr = (s => { let a = []; while (s-- > 0)
                                a.push(0); return a; })(arr.length);
                            let i = 0;
                            for (let index = 0; index < arr.length; index++) {
                                let str = arr[index];
                                {
                                    attr[i] = javaemul.internal.IntegerHelper.parseInt(str);
                                    i++;
                                }
                            }
                            this.setRectangle(component, "bounds", attr[0], attr[1], attr[2], attr[3]);
                        }
                    }
                    else
                        this.setString$java_lang_Object$java_lang_String$java_lang_String$java_lang_String(component, key, value, definition[3]);
                }
                else if ("choice" === definition[0]) {
                    const values = definition[3];
                    this.setChoice$java_lang_Object$java_lang_String$java_lang_String$java_lang_String_A$java_lang_String(component, key, value, values, values[0]);
                }
                else if ("boolean" === definition[0]) {
                    if ("true" === value) {
                        if (definition[3] === javaemul.internal.BooleanHelper.FALSE) {
                            Gui.set(component, key, javaemul.internal.BooleanHelper.TRUE);
                        }
                    }
                    else if ("false" === value) {
                        if (definition[3] === javaemul.internal.BooleanHelper.TRUE) {
                            Gui.set(component, key, javaemul.internal.BooleanHelper.FALSE);
                        }
                    }
                    else
                        throw new java.lang.IllegalArgumentException(value);
                }
                else if ("integer" === definition[0]) {
                    const factor = 1;
                    if (key === "gap" || key === "left" || key === "right" || key === "top" || key === "bottom" || key === "divider" || key === "width" || key === "height")
                        Gui.set(component, key, ((factor * javaemul.internal.IntegerHelper.valueOf(value)) | 0));
                    else
                        Gui.set(component, key, javaemul.internal.IntegerHelper.valueOf(value));
                }
                else if ("double" === definition[0]) {
                    Gui.set(component, key, javaemul.internal.DoubleHelper.valueOf(value));
                }
                else if ("icon" === definition[0]) {
                    Gui.set(component, key, this.getIcon$java_lang_String(value));
                }
                else if (("method" === definition[0]) || ("component" === definition[0])) {
                    lasts.addElement(component);
                    lasts.addElement(definition);
                    lasts.addElement(value);
                }
                else if ("property" === definition[0]) {
                }
                else if ("font" === definition[0]) {
                    const name = null;
                    Gui.set(component, key, new org.shikhar.Font(value, this.g.context));
                }
                else if ("color" === definition[0]) {
                    const color = new org.shikhar.Color(value);
                    Gui.set(component, key, color);
                }
                else if ("keystroke" === definition[0]) {
                    this.setKeystrokeImpl(component, key, value);
                }
                else if ("bean" === definition[0]) {
                    if ((value === ("org.shikhar.simphy.gui.CanvasBean")) || (value === ("org.shikhar.simphy.scripting.canvas.Canvas2D")) || (value === ("org.shikhar.simphy.scripting.canvas.Canvas")))
                        value = "org.shikhar.simphy.gfx.canvas.Canvas";
                }
                else
                    throw new java.lang.IllegalArgumentException(definition[0]);
            }
            /**
             *
             * @throws java.lang.IllegalArgumentException
             * @param {*} classname
             * @param {string} key
             * @param {string} type
             * @return {java.lang.Object[]}
             * @private
             */
            static getDefinition(classname, key, type) {
                const currentname = classname;
                if ( /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)((classname + ""), ":")) {
                    console.info("Seems Invalid class for gui " + classname);
                    return null;
                }
                while ((classname != null)) {
                    {
                        for (let i = 0; i < Gui.dtd_$LI$().length; i += 3) {
                            {
                                if (Gui.dtd_$LI$()[i] === classname) {
                                    const attributes = Gui.dtd_$LI$()[i + 2];
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
                                    classname = Gui.dtd_$LI$()[i + 1];
                                    break;
                                }
                            }
                            ;
                        }
                    }
                }
                ;
                return null;
            }
            setString$java_lang_Object$java_lang_String$java_lang_String(component, key, value) {
                try {
                    const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "string");
                    if (definition == null)
                        return;
                    if (this.setString$java_lang_Object$java_lang_String$java_lang_String$java_lang_String(component, definition[1], value, definition[3])) {
                        this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                    }
                }
                catch (e) {
                }
            }
            getString$java_lang_Object$java_lang_String(component, key) {
                return Gui.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "string");
            }
            setChoice$java_lang_Object$java_lang_String$java_lang_String(component, key, value) {
                const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "choice");
                if (definition == null)
                    return;
                const values = definition[3];
                if (this.setChoice$java_lang_Object$java_lang_String$java_lang_String$java_lang_String_A$java_lang_String(component, definition[1], value, values, values[0])) {
                    this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                }
                if (key === "animmode" && Gui.getComponentClass(component) === "slider")
                    this.updateAnimTimer(component, value);
            }
            /**
             * Creates timer for the slider
             * @param {*} component
             * @param {string} animMode
             * @private
             */
            updateAnimTimer(component, animMode) {
                if (animMode === "none" || animMode == null) {
                    this.putProperty(component, "timer", null);
                }
                else {
                    const animInterVal = ((this.getDouble$java_lang_Object$java_lang_String$double(component, "animinterval", 0.1) * 1000) | 0);
                    const timer = new org.shikhar.GuiTimer(animInterVal, -1);
                    timer.invokerCompoenent = component;
                    timer.setCallback(this);
                    this.putProperty(component, "timer", timer);
                    timer.start();
                }
            }
            /**
             * Gets the property value of the given component by the property key
             * @param {*} component
             * @param {string} key
             * @return {string}
             */
            getChoice(component, key) {
                const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "choice");
                if (definition == null)
                    return null;
                return this.getString$java_lang_Object$java_lang_String$java_lang_String(component, definition[1], definition[3][0]);
            }
            setBoolean$java_lang_Object$java_lang_String$boolean(component, key, value) {
                try {
                    const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "boolean");
                    if (definition == null)
                        return;
                    if (this.setBoolean$java_lang_Object$java_lang_String$boolean$boolean(component, definition[1], value, (definition[3] === javaemul.internal.BooleanHelper.TRUE))) {
                        this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                    }
                }
                catch (e) {
                }
            }
            getBoolean$java_lang_Object$java_lang_String(component, key) {
                return Gui.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "boolean") === javaemul.internal.BooleanHelper.TRUE;
            }
            setInteger$java_lang_Object$java_lang_String$int(component, key, value) {
                try {
                    const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "integer");
                    if (definition == null)
                        return;
                    if (this.setInteger$java_lang_Object$java_lang_String$int$int(component, definition[1], value, /* intValue */ (definition[3] | 0))) {
                        this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                    }
                }
                catch (e) {
                }
            }
            getInteger$java_lang_Object$java_lang_String(component, key) {
                return /* intValue */ (Gui.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "integer") | 0);
            }
            setDouble$java_lang_Object$java_lang_String$double(component, key, value) {
                try {
                    const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "double");
                    if (definition == null)
                        return;
                    if (this.setDouble$java_lang_Object$java_lang_String$double$double(component, definition[1], value, /* doubleValue */ definition[3])) {
                        this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                    }
                    if (key === "animinterval" && Gui.getComponentClass(component) === "slider") {
                        this.updateAnimTimer(component, this.getString$java_lang_Object$java_lang_String$java_lang_String(component, "animmode", "none"));
                    }
                }
                catch (e) {
                    console.error(e.message, e);
                }
            }
            getDouble$java_lang_Object$java_lang_String(component, key) {
                return /* doubleValue */ Gui.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "double");
            }
            setIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, key, icon) {
                try {
                    const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "icon");
                    if (definition == null)
                        return;
                    if (Gui.set(component, definition[1], icon)) {
                        this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                    }
                }
                catch (e) {
                }
            }
            /**
             * Sets the given property pair (key and value) for the component
             * @param {*} component
             * @param {string} key
             * @param {org.shikhar.AWTImage} icon
             */
            setIcon(component, key, icon) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((icon != null && icon instanceof org.shikhar.AWTImage) || icon === null)) {
                    return this.setIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, key, icon);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof icon === 'string') || icon === null)) {
                    return this.setIcon$java_lang_Object$java_lang_String$java_lang_String(component, key, icon);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && icon === undefined) {
                    return this.setIcon$java_lang_Object$java_lang_String(component, key);
                }
                else
                    throw new Error('invalid overload');
            }
            setIcon$java_lang_Object$java_lang_String$java_lang_String(component, key, icon) {
                if (icon == null || /* isEmpty */ (icon.length === 0))
                    return;
                this.setIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, key, new org.shikhar.AWTImage(icon));
            }
            setIcon$java_lang_Object$java_lang_String(component, icon) {
                try {
                    const definition = Gui.getDefinition(Gui.getComponentClass(component), "icon", "icon");
                    if (definition == null)
                        return;
                    if (Gui.set(component, definition[1], (icon == null || /* isEmpty */ (icon.length === 0)) ? null : new org.shikhar.AWTImage(icon))) {
                        this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                    }
                }
                catch (e) {
                }
            }
            getIcon$java_lang_Object$java_lang_String(component, key) {
                return Gui.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "icon");
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {string} value
             */
            setKeystroke(component, key, value) {
                try {
                    const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "keystroke");
                    if (definition == null)
                        return;
                    this.setKeystrokeImpl(component, definition[1], value);
                    this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                }
                catch (e) {
                }
            }
            /**
             * Get the AWT component of the given (currently <i>bean</i>) widget
             *
             * @param {*} component
             * a <i>bean</i> widget
             * @param {string} key
             * the identifier of the parameter
             * @return {org.shikhar.Gui.CustomComponent} an AWT component, or null
             */
            getComponent(component, key) {
                return Gui.get$java_lang_Object$java_lang_String$java_lang_String(component, key, "bean");
            }
            setFont$java_lang_Object$java_lang_String(component, fontName) {
                this.setFont$java_lang_Object$java_lang_String$org_shikhar_Font(component, "font", new org.shikhar.Font(fontName, this.g.context));
            }
            setFont$java_lang_Object$java_lang_String$org_shikhar_Font(component, key, font) {
                const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "font");
                const classname = Gui.getComponentClass(component);
                if (("list" === classname) || ("table" === classname) || ("tree" === classname) || ("combobox" === classname) || ("menubar" === classname) || ("menu" === classname) || ("node" === classname) || ("header" === classname) || ("row" === classname)) {
                    for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            if (this.getFont$java_lang_Object(comp) == null)
                                this.setFont$java_lang_Object$java_lang_String$org_shikhar_Font(comp, key, font);
                        }
                        ;
                    }
                    if ("table" === classname) {
                        const header = Gui.get$java_lang_Object$java_lang_Object(component, "header");
                    }
                    return;
                }
                if (definition == null)
                    return;
                if (definition.length < 3)
                    return;
                if (Gui.set(component, definition[1], font)) {
                    this.update$java_lang_Object$java_lang_Object(component, definition[2]);
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
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && font === undefined) {
                    return this.setFont$java_lang_Object$java_lang_String(component, key);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Set custom color on a component. Notes: For "foreground" key, this sets
             * the text color. For "background" key, on gradient-filled components (such
             * as tabs, buttons etc) this will result in a component filled with solid
             * background color, and not a new gradient. Also, Color.brighter() will be
             * used for highlight, and Color.darker() will be used for pressed or not
             * selected.
             *
             * @param {*} component
             * component to use for custom color
             * @param {string} key
             * currently "background" and "foreground" are supported
             * @param {org.shikhar.Color} color
             * custom color to use, or null to reset component to use default
             * color
             */
            setColor(component, key, color) {
                const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "color");
                const classname = Gui.getComponentClass(component);
                if (("list" === classname) || ("row" === classname) || ("table" === classname) || ("tree" === classname) || ("combobox" === classname) || ("menubar" === classname) || ("menu" === classname) || ("node" === classname) || ("header" === classname) || ("row" === classname)) {
                    for (let comp = Gui.get$java_lang_Object$java_lang_Object(component, ":comp"); comp != null; comp = Gui.get$java_lang_Object$java_lang_Object(comp, ":next")) {
                        {
                            if (Gui.getColor(comp, key) == null)
                                this.setColor(comp, key, color);
                        }
                        ;
                    }
                    if ("table" === classname) {
                    }
                }
                if (definition == null)
                    return;
                if (Gui.set(component, definition[1], color)) {
                    this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                }
            }
            /**
             * Set the AWT component for the given (currently <i>bean</i>) widget
             *
             * @param {*} component
             * a <i>bean</i> widget
             * @param {string} key
             * the identifier of the parameter
             * @param {org.shikhar.Gui.CustomComponent} bean
             * an AWT component, or null
             */
            setComponent(component, key, bean) {
                const definition = Gui.getDefinition(Gui.getComponentClass(component), key, "bean");
                if (definition == null)
                    return;
                if (Gui.set(component, definition[1], bean)) {
                    this.update$java_lang_Object$java_lang_Object(component, definition[2]);
                    bean.setGui(this);
                    bean.setComponent(component);
                }
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {string} value
             * @private
             */
            setKeystrokeImpl(component, key, value) {
                let keystroke = null;
                if (value != null) {
                    const token = value;
                    try {
                        const keycode = 0;
                        const modifiers = 0;
                        keystroke = new Number(((n => n < 0 ? Math.ceil(n) : Math.floor(n))(modifiers)) << 32 | keycode);
                    }
                    catch (exc) {
                        throw new java.lang.IllegalArgumentException(token);
                    }
                }
                Gui.set(component, key, keystroke);
            }
            /**
             * @param {*} component
             * @param {string} key
             * @return {*}
             */
            getWidget(component, key) {
                if ("popupmenu" === key) {
                    return Gui.get$java_lang_Object$java_lang_Object(component, "popupmenu");
                }
                else if ("header" === key) {
                    return Gui.get$java_lang_Object$java_lang_Object(component, "header");
                }
                else
                    throw new java.lang.IllegalArgumentException(key);
            }
            static get$java_lang_Object$java_lang_String$java_lang_String(component, key, type) {
                const definition = Gui.getDefinition(Gui.getComponentClass(component), key, type);
                if (definition == null)
                    return null;
                const value = Gui.get$java_lang_Object$java_lang_Object(component, definition[1]);
                return (value != null) ? value : definition[3];
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {string} type
             * @return {*}
             * @private
             */
            static get(component, key, type) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof type === 'string') || type === null)) {
                    return org.shikhar.Gui.get$java_lang_Object$java_lang_String$java_lang_String(component, key, type);
                }
                else if (((component != null) || component === null) && ((key != null) || key === null) && type === undefined) {
                    return org.shikhar.Gui.get$java_lang_Object$java_lang_Object(component, key);
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
                key = Gui.getDefinition(Gui.getComponentClass(component), key, "method")[1];
                if (value == null || /* isEmpty */ (value.length === 0)) {
                    Gui.set(component, key, null);
                }
                else {
                    const method = this.getMethod(component, value, root, handler);
                    Gui.set(component, key, method);
                }
            }
            /**
             * returns method name
             * @param {*} component
             * @param {string} action
             * @return
             * @return {string}
             */
            getMethodText(component, action) {
                const method = Gui.get$java_lang_Object$java_lang_Object(component, action);
                if (method == null)
                    return null;
                if (typeof method[0] === 'string') {
                    return method[0];
                }
                else {
                    method[1].toString();
                }
                return null;
            }
            /**
             * @return {java.lang.Object[]} an object list including as follows:
             * - handler object,
             * - method,
             * - list of parameters including 3 values:
             * - ("thinlet", null, null) for the single thinlet component,
             * - (target component, null, null) for named widget as parameter, e.g. mybutton,
             * - (target, parameter name, default value) for a widget's given property, e.g. mylabel.enabled,
             * - ("item", null, null) for an item of the target component as parameter, e.g. tree node,
             * - ("item", parameter name, default value) for the item's given property e.g. list item's text,
             * - ("constant", string object, null) for constant number (no space is permitted)
             * (int, long, double, float) or string given as 'text'.
             * @param {*} component
             * @param {string} value
             * @param {*} root
             * @param {*} handler
             * @private
             */
            getMethod(component, value, root, handler) {
                return null;
            }
            update$java_lang_Object$java_lang_Object(component, mode) {
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
                                Gui.repaintNeeded = true;
                            }
                        }
                        let parent = this.getParent(component);
                        const classname = Gui.getComponentClass(parent);
                        if ("combobox" === classname) {
                            parent = Gui.get$java_lang_Object$java_lang_Object(parent, ":combolist");
                        }
                        else if ("menu" === classname) {
                            parent = Gui.get$java_lang_Object$java_lang_Object(parent, ":popup");
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
                if (Gui.getComponentClass(component) === "bean" && key === "text") {
                    if (this.getComponent(component, "bean") != null)
                        (this.getComponent(component, "bean")).setText(value);
                }
                return Gui.set(component, key, value);
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {string} value
             * @param {string} defaultvalue
             * @return {boolean}
             * @private
             */
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
                const value = Gui.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : this.getI18NString(component, key, value);
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {string} defaultvalue
             * @return {string}
             */
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
            /**
             * Sets the default behaviour of internationalization code. If set to
             * "true", try to translate all components' "text" and "tooltip" values,
             * unless explicitly prohibited by setting <code>i18n="false"</code> on a
             * specific component. If set to "false", do not translate unless explicitly
             * requested by setting <code>i18n="true"</code> on a specific component. <br />
             * Default value is "false", to provide backwards compatibility.
             *
             * @param {boolean} val
             * if "true", translate by default; if "false", do not translate
             * by default.
             */
            setAllI18n(val) {
                this.allI18n = val;
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {string} text
             * @return {string}
             * @private
             */
            getI18NString(component, key, text) {
                if ( /* isEmpty */(text.length === 0))
                    text = "";
                return text;
            }
            setChoice$java_lang_Object$java_lang_String$java_lang_String$java_lang_String_A$java_lang_String(component, key, value, values, defaultvalue) {
                if (value == null) {
                    return Gui.set(component, key, defaultvalue);
                }
                for (let i = 0; i < values.length; i++) {
                    {
                        if (value === (values[i])) {
                            return Gui.set(component, key, values[i]);
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
             * @private
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
                const value = Gui.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : value;
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {org.shikhar.AWTImage} defaultvalue
             * @return {org.shikhar.AWTImage}
             * @private
             */
            getIcon(component, key, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((defaultvalue != null && defaultvalue instanceof org.shikhar.AWTImage) || defaultvalue === null)) {
                    return this.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(component, key, defaultvalue);
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
                return Gui.set(component, key, (value === defaultvalue) ? null : (value ? javaemul.internal.BooleanHelper.TRUE : javaemul.internal.BooleanHelper.FALSE));
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {boolean} value
             * @param {boolean} defaultvalue
             * @return {boolean}
             * @private
             */
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
                const value = Gui.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : /* booleanValue */ value;
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {boolean} defaultvalue
             * @return {boolean}
             * @private
             */
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
                return Gui.set(component, key, (value === defaultvalue) ? null : new Number(value));
            }
            /**
             * Sets integral value of property
             * sets null if default value is passed , Ex in list if no element is selected, selected index is set to -1
             * @param {*} component
             * @param {string} key
             * @param {number} value
             * @param {number} defaultvalue
             * @return {boolean}
             * @private
             */
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
                const value = Gui.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : /* intValue */ (value | 0);
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {number} defaultvalue
             * @return {number}
             * @private
             */
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
            setDouble$java_lang_Object$java_lang_String$double$double(component, key, value, defaultvalue) {
                return Gui.set(component, key, new Number(value));
            }
            /**
             * Sets integral value of property
             * sets null if default value is passed , Ex in list if no element is selected, selected index is set to -1
             * @param {*} component
             * @param {string} key
             * @param {number} value
             * @param {number} defaultvalue
             * @return {boolean}
             * @private
             */
            setDouble(component, key, value, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'number') || value === null) && ((typeof defaultvalue === 'number') || defaultvalue === null)) {
                    return this.setDouble$java_lang_Object$java_lang_String$double$double(component, key, value, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof value === 'number') || value === null) && defaultvalue === undefined) {
                    return this.setDouble$java_lang_Object$java_lang_String$double(component, key, value);
                }
                else
                    throw new Error('invalid overload');
            }
            getDouble$java_lang_Object$java_lang_String$double(component, key, defaultvalue) {
                const value = Gui.get$java_lang_Object$java_lang_Object(component, key);
                return (value == null) ? defaultvalue : /* doubleValue */ value;
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {number} defaultvalue
             * @return {number}
             * @private
             */
            getDouble(component, key, defaultvalue) {
                if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && ((typeof defaultvalue === 'number') || defaultvalue === null)) {
                    return this.getDouble$java_lang_Object$java_lang_String$double(component, key, defaultvalue);
                }
                else if (((component != null) || component === null) && ((typeof key === 'string') || key === null) && defaultvalue === undefined) {
                    return this.getDouble$java_lang_Object$java_lang_String(component, key);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * @param {*} component
             * @param {string} key
             * @param {number} x
             * @param {number} y
             * @param {number} width
             * @param {number} height
             */
            setRectangle(component, key, x, y, width, height) {
                const rectangle = this.getRectangle(component, key);
                if (rectangle != null) {
                    rectangle.x = x;
                    rectangle.y = y;
                    rectangle.width = width;
                    rectangle.height = height;
                }
                else {
                    Gui.set(component, key, new org.shikhar.Rectangle(x, y, width, height));
                }
            }
            /**
             * @param {*} component
             * @param {string} key
             * @return {org.shikhar.Rectangle}
             */
            getRectangle(component, key) {
                return Gui.get$java_lang_Object$java_lang_Object(component, key);
            }
            static tmpRect_$LI$() { Gui.__static_initialize(); if (Gui.tmpRect == null) {
                Gui.tmpRect = new org.shikhar.Rectangle(0, 0, 1, 1);
            } return Gui.tmpRect; }
            getAbsoluteRectangle(component, key) {
                const r = this.getRectangle(component, "bounds");
                if (r == null)
                    return null;
                Gui.tmpRect_$LI$().set(r.x, r.y, r.width, r.height);
                while (((component = this.getParent(component)) != null)) {
                    {
                        const bounds = this.getRectangle(component, "bounds");
                        Gui.tmpRect_$LI$().x += bounds.x;
                        Gui.tmpRect_$LI$().y += bounds.y;
                        const view = this.getRectangle(component, ":view");
                        if (view != null) {
                            const port = this.getRectangle(component, ":port");
                            Gui.tmpRect_$LI$().x += -view.x + port.x;
                            Gui.tmpRect_$LI$().y += -view.y + port.y;
                        }
                    }
                }
                ;
                return Gui.tmpRect_$LI$();
            }
            getIcon$java_lang_String(path) {
                return new org.shikhar.AWTImage(path);
            }
            /**
             * This method is called by the FrameLauncher if the window was closing, or
             * AppletLauncher's destroy method. Overwrite it to e.g. save the
             * application changes.
             *
             * @return {void} true to exit, and false to keep the frame and continue the
             * application
             */
            destroy() {
                return;
            }
            static dtd_$LI$() { Gui.__static_initialize(); return Gui.dtd; }
            static __static_initializer_0() {
                const integer_1 = javaemul.internal.IntegerHelper.valueOf(-1);
                const integer0 = javaemul.internal.IntegerHelper.valueOf(0);
                const integer1 = javaemul.internal.IntegerHelper.valueOf(1);
                const double01 = javaemul.internal.DoubleHelper.valueOf(0.1);
                const double1 = javaemul.internal.DoubleHelper.valueOf(1);
                const double0 = javaemul.internal.DoubleHelper.valueOf(0);
                const double10 = javaemul.internal.DoubleHelper.valueOf(10);
                const double5 = javaemul.internal.DoubleHelper.valueOf(5);
                const orientation = ["horizontal", "vertical"];
                const leftcenterright = ["left", "center", "right"];
                const selections = ["single", "interval", "multiple"];
                const animmode = ["none", "increasing", "decreasing", "increasing-once", "decreasing-once", "oscillating"];
                Gui.dtd = ["component", null, [["string", "name", null, null], ["boolean", "enabled", "paint", javaemul.internal.BooleanHelper.TRUE], ["boolean", "visible", "parent", javaemul.internal.BooleanHelper.TRUE], ["boolean", "i18n", "validate", javaemul.internal.BooleanHelper.FALSE], ["icon", "bgimage", "validate", null], ["string", "text", "validate", null], ["string", "tooltip", null, null], ["font", "font", "validate", null], ["color", "foreground", "paint", null], ["color", "background", "paint", null], ["integer", "width", "validate", integer0], ["integer", "height", "validate", integer0], ["integer", "colspan", "validate", integer1], ["integer", "rowspan", "validate", integer1], ["integer", "weightx", "validate", integer0], ["integer", "weighty", "validate", integer0], ["string", "rectbounds", "validate", null], ["choice", "halign", "validate", ["fill", "center", "left", "right"]], ["choice", "valign", "validate", ["fill", "center", "top", "bottom"]], ["property", "property", null, null], ["method", "init"], ["method", "focuslost"], ["method", "focusgained"]], "label", "component", [["icon", "icon", "validate", null], ["choice", "alignment", "validate", leftcenterright], ["integer", "mnemonic", "paint", integer_1], ["component", "for", null, null]], "button", "label", [["choice", "alignment", "validate", ["center", "left", "right"]], ["method", "action"], ["choice", "type", "paint", ["normal", "default", "cancel", "link"]]], "checkbox", "label", [["boolean", "selected", "paint", javaemul.internal.BooleanHelper.FALSE], ["string", "group", "paint", null], ["method", "action"]], "togglebutton", "checkbox", null, "combobox", "textfield", [["icon", "icon", "validate", null], ["integer", "selected", "layout", integer_1]], "choice", null, [["string", "name", null, null], ["boolean", "enabled", "paint", javaemul.internal.BooleanHelper.TRUE], ["boolean", "visible", "parent", javaemul.internal.BooleanHelper.TRUE], ["boolean", "i18n", "validate", javaemul.internal.BooleanHelper.FALSE], ["string", "text", "parent", null], ["icon", "icon", "parent", null], ["choice", "alignment", "parent", leftcenterright], ["string", "tooltip", null, null], ["font", "font", "validate", null], ["color", "foreground", "paint", null], ["color", "background", "paint", null], ["property", "property", null, null]], "textfield", "component", [["integer", "columns", "validate", integer0], ["boolean", "editable", "paint", javaemul.internal.BooleanHelper.TRUE], ["integer", "start", "layout", integer0], ["integer", "end", "layout", integer0], ["method", "action"], ["method", "insert"], ["method", "remove"], ["method", "caret"], ["method", "perform"]], "passwordfield", "textfield", null, "textarea", "textfield", [["integer", "rows", "validate", integer0], ["boolean", "border", "validate", javaemul.internal.BooleanHelper.TRUE], ["boolean", "wrap", "layout", javaemul.internal.BooleanHelper.FALSE]], "tabbedpane", "component", [["choice", "placement", "validate", ["top", "left", "bottom", "right", "stacked", "none"]], ["integer", "selected", "paint", integer0], ["method", "action"]], "tab", "choice", [["integer", "mnemonic", "paint", integer_1]], "panel", "component", [["integer", "columns", "validate", integer0], ["integer", "top", "validate", integer0], ["integer", "left", "validate", integer0], ["integer", "bottom", "validate", integer0], ["integer", "right", "validate", integer0], ["integer", "gap", "validate", integer0], ["string", "text", "validate", null], ["icon", "icon", "validate", null], ["boolean", "border", "validate", javaemul.internal.BooleanHelper.FALSE], ["boolean", "scrollable", "validate", javaemul.internal.BooleanHelper.FALSE]], "desktop", "component", null, "dialog", "panel", [["boolean", "modal", null, javaemul.internal.BooleanHelper.FALSE], ["boolean", "resizable", null, javaemul.internal.BooleanHelper.FALSE], ["method", "close"], ["boolean", "closable", "paint", javaemul.internal.BooleanHelper.TRUE], ["boolean", "maximizable", "paint", javaemul.internal.BooleanHelper.FALSE], ["boolean", "iconifiable", "paint", javaemul.internal.BooleanHelper.FALSE]], "spinbox", "textfield", [["double", "minimum", null, double0], ["double", "maximum", null, double10], ["double", "step", null, double1], ["double", "value", null, double5]], "progressbar", "component", [["choice", "orientation", "validate", orientation], ["double", "minimum", "paint", double0], ["double", "maximum", "paint", double10], ["double", "value", "paint", double5]], "slider", "progressbar", [["double", "unit", null, double01], ["double", "block", null, double1], ["choice", "animmode", null, animmode], ["double", "animinterval", null, double01], ["method", "action"]], "splitpane", "component", [["choice", "orientation", "validate", orientation], ["integer", "divider", "layout", integer_1]], "list", "component", [["choice", "selection", "paint", selections], ["method", "action"], ["method", "perform"], ["boolean", "line", "validate", javaemul.internal.BooleanHelper.TRUE]], "item", "choice", [["boolean", "selected", null, javaemul.internal.BooleanHelper.FALSE]], "table", "list", [], "header", null, [["method", "action"], ["boolean", "resizable", null, javaemul.internal.BooleanHelper.FALSE]], "column", "choice", [["integer", "width", null, new Number(Gui.DEFAULT_COLUMN_WIDTH)], ["choice", "sort", null, ["none", "ascent", "descent"]], ["choice", "datatype", null, ["text", "numeric"]], ["boolean", "selected", null, javaemul.internal.BooleanHelper.FALSE]], "row", null, [["boolean", "selected", null, javaemul.internal.BooleanHelper.FALSE], ["boolean", "enabled", null, javaemul.internal.BooleanHelper.TRUE]], "cell", "choice", null, "tree", "list", [["boolean", "angle", null, javaemul.internal.BooleanHelper.FALSE], ["method", "expand"], ["method", "collapse"]], "node", "choice", [["boolean", "selected", null, javaemul.internal.BooleanHelper.FALSE], ["boolean", "expanded", null, javaemul.internal.BooleanHelper.TRUE]], "separator", "component", null, "menubar", "component", [["choice", "placement", "validate", ["top", "bottom"]]], "menu", "choice", [["integer", "mnemonic", "paint", integer_1]], "menuitem", "choice", [["keystroke", "accelerator", null, null], ["method", "action"], ["boolean", "visible", "parent", javaemul.internal.BooleanHelper.TRUE], ["integer", "mnemonic", "paint", integer_1]], "checkboxmenuitem", "menuitem", [["boolean", "selected", "paint", javaemul.internal.BooleanHelper.FALSE], ["string", "group", "paint", null]], "popupmenu", "component", [["method", "menushown"]], "bean", "component", [["bean", "bean", null, null], ["boolean", "border", "validate", javaemul.internal.BooleanHelper.FALSE]]];
            }
            /**
             * @param {*} column the column for which we like to set its width to its current smartwidth
             * @private
             */
            setSmartWidth(column) {
                const header = this.getParent(column);
                let item = Gui.get$java_lang_Object$java_lang_Object(header, ":comp");
                let index = 0;
                while ((item != null)) {
                    {
                        if (item === column)
                            break;
                        index++;
                        item = Gui.get$java_lang_Object$java_lang_Object(item, ":next");
                    }
                }
                ;
                this.setInteger$java_lang_Object$java_lang_String$int(column, "width", (Gui.get$java_lang_Object$java_lang_Object(this.getParent(header), Gui.PROPERTY_SMARTWIDTHS)[index]));
            }
            /**
             * returns currently set value of widget
             *
             * @param {*} widget
             * @return {*}
             * boolean for checkbox and togglebutton
             * Integer for slider and spinbox
             * String for label, textarea and textfield int :
             * first selection index for tab,table, list, combo
             * else returns null(for dialog, panel, splitpane etc)
             */
            getValue(widget) {
                const classname = Gui.getComponentClass(widget);
                if (classname === "slider" || classname === "spinbox") {
                    return this.getDouble$java_lang_Object$java_lang_String(widget, "value");
                }
                if (classname === "checkbox" || classname === "togglebutton") {
                    return this.getBoolean$java_lang_Object$java_lang_String(widget, "selected");
                }
                if (classname === "textfield" || classname === "textarea" || classname === "label") {
                    return this.getString$java_lang_Object$java_lang_String(widget, "text");
                }
                if (classname === "combobox" || classname === "tabbedpane" || classname === "list" || classname === "table") {
                    return this.getSelectedIndex(widget);
                }
                return this.getString$java_lang_Object$java_lang_String(widget, "text");
            }
            /**
             * sets current value of widget
             *
             * @param {*} widget
             * @param {*} value
             * boolean for checkbox and togglebutton
             * Integer for slider and spinbox
             * String for label, textarea and textfield int :
             * first selection index for tab,table, list, combo
             * else returns null(for dialog, panel, splitpane etc)
             */
            setValue(widget, value) {
                const classname = Gui.getComponentClass(widget);
                if (classname === "slider" || classname === "spinbox") {
                    if (classname === "spinbox")
                        this.setString$java_lang_Object$java_lang_String$java_lang_String(widget, "text", value + "");
                    this.setDouble$java_lang_Object$java_lang_String$double(widget, "value", /* doubleValue */ value);
                }
                if (classname === "checkbox" || classname === "togglebutton") {
                    this.setBoolean$java_lang_Object$java_lang_String$boolean(widget, "selected", value);
                }
                if (classname === "textfield" || classname === "textarea" || classname === "label") {
                    this.setString$java_lang_Object$java_lang_String$java_lang_String(widget, "text", value + "");
                }
                if (classname === "combobox" || classname === "tabbedpane" || classname === "list" || classname === "table") {
                    this.setSelectedItem(widget, this.getItem(widget, /* intValue */ (value | 0)));
                }
            }
            /**
             * Returns the index of the specified item in the item list of the
             * specified component.
             * Note that trees are <i>not</i> searched recursively.
             * This method should really be in Thinlet.java.
             *
             * @param thinlet  the Thinlet
             * @param {*} component  the component; this should be a component that
             * has sub-items such as tree, table, node etc.
             * @param {*} item  the item to search for.
             * @return {number} the index of the item, or -1 if the item cannot be found.
             */
            getIndexOfItem(component, item) {
                const items = Gui.getItems(component);
                for (let i = 0; i < items.length; ++i) {
                    if (item === items[i])
                        return i;
                    ;
                }
                return -1;
            }
            /**
             * Sets the selected item of the specified component, deselects all others.
             * This method should really be in Thinlet.java.
             * @param {*} component
             * @param {*} item
             */
            setSelectedItem(component, item) {
                const items = Gui.getItems(component);
                if (items != null) {
                    for (let i = 0; i < items.length; ++i) {
                        this.setBoolean$java_lang_Object$java_lang_String$boolean(items[i], "selected", items[i] === item);
                    }
                }
            }
            /**
             * Returns a short string representation of the specified component,
             * for example "button:btnOk". Useful for debugging output.
             *
             * @param {*} component  the component. If it is null, the string "null" is
             * returned.
             * @return {string} a string representation of the component.
             */
            static toString(component) {
                if (component == null)
                    return "null";
                const buf = new java.lang.StringBuffer("[");
                const classname = Gui.getComponentClass(component);
                if (classname == null)
                    buf.append("not a component: ").append(component.toString());
                else {
                    buf.append(classname);
                    const name = Gui.get$java_lang_Object$java_lang_Object(component, "name");
                    if (name != null)
                        buf.append(':').append(name);
                }
                buf.append(']');
                return buf.toString();
            }
            /**
             * Gets the property value of the given component by the property key.
             * @param {*} component
             * @param {string} key
             * @return {org.shikhar.Color}
             */
            static getColor(component, key) {
                return Gui.get$java_lang_Object$java_lang_Object(component, key);
            }
            /**
             * Gets color used to render object.
             * @param {*} component
             * @param {string} key
             * @return {org.shikhar.Color}
             */
            getColorUsed(component, key) {
                const c = Gui.get$java_lang_Object$java_lang_Object(component, key);
                if (c == null) {
                    if (key === ("foreground"))
                        return this.c_fg;
                    if (key === ("foreground"))
                        return this.c_bg;
                }
                return c;
            }
            getFont$java_lang_Object(component) {
                const font = Gui.get$java_lang_Object$java_lang_Object(component, "font");
                return font == null ? this.font : font;
            }
            /**
             * Gets the font of the given component, or the font of the thinlet, if
             * the font of the component has not been set explicitely.
             * This method should really be in Thinlet.java.
             * @param {*} component
             * @return {org.shikhar.Font}
             */
            getFont(component) {
                if (((component != null) || component === null)) {
                    return this.getFont$java_lang_Object(component);
                }
                else if (component === undefined) {
                    return this.getFont$();
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Gets the font of the given component, or the font of the thinlet, if
             * the font of the component has not been set explicitely.
             *
             * @param {*} component
             * @return {string}
             */
            getFontName(component) {
                const font = this.getFont$java_lang_Object(component);
                if (font == null)
                    return null;
                return font.getName();
            }
            closeDialog(dialog) {
                const b = this.invoke(dialog, null, "close");
                if (!b && this.defaultHandler != null)
                    this.defaultHandler.onDialogClose(dialog);
            }
            minimizeDialog(dialog) {
                const bounds = this.getRectangle(dialog, "bounds");
                const titleheight = this.getInteger$java_lang_Object$java_lang_String$int(dialog, ":titleheight", this.block) + 4;
                let minimized = false;
                if (Gui.get$java_lang_Object$java_lang_Object(dialog, ":minimized") != null) {
                    let height = this.getInteger$java_lang_Object$java_lang_String$int(dialog, "height", 0);
                    if (height === 0) {
                        const d = this.getPreferredSize$java_lang_Object(dialog);
                        height = d.height;
                    }
                    this.setRectangle(dialog, "bounds", bounds.x, bounds.y, bounds.width, height);
                    minimized = true;
                    Gui.set(dialog, ":minimized", null);
                }
                else {
                    this.setInteger$java_lang_Object$java_lang_String$int(dialog, "height", bounds.height);
                    this.setRectangle(dialog, "bounds", bounds.x, bounds.y, bounds.width, titleheight);
                    Gui.set(dialog, ":minimized", "true");
                }
                this.doLayout(dialog);
            }
            maximizeDialog(dialog) {
            }
            createDemo() {
            }
            readStyle(s) {
                if (s == null || /* isEmpty */ (s.trim().length === 0))
                    return null;
                const params = s.split(",");
                if (s.length < 5)
                    return null;
                let start;
                let end;
                let foreColor;
                let backColor;
                let style;
                let underline = false;
                let yOffset = 0;
                try {
                    start = javaemul.internal.IntegerHelper.parseInt(params[0]);
                    end = javaemul.internal.IntegerHelper.parseInt(params[1]);
                    foreColor = new org.shikhar.Color(params[2]);
                    backColor = new org.shikhar.Color(params[3]);
                    style = params[4].charAt(0);
                    if (params.length > 5)
                        underline = javaemul.internal.BooleanHelper.parseBoolean(params[5]);
                    if (params.length > 6)
                        yOffset = javaemul.internal.IntegerHelper.parseInt(params[6].trim());
                    return new Gui.DrawStyle(this, start, end, foreColor, backColor, style, underline, yOffset);
                }
                catch (e) {
                    return null;
                }
            }
            stylesToString(styles) {
                if (styles == null || styles.length === 0)
                    return "";
                let s = "";
                for (let index = 0; index < styles.length; index++) {
                    let style = styles[index];
                    {
                        s += style.toString() + " : ";
                    }
                }
                return s.substring(0, s.length - 2);
            }
            stringToStyles(s) {
                this.defaultStyle = new Gui.DrawStyle(this, 0, 0, null, null, 'n');
                if (s == null || /* isEmpty */ (s.trim().length === 0))
                    return null;
                const strStyles = s.split(" : ");
                if (strStyles.length === 0)
                    return null;
                const styles = (new java.util.ArrayList());
                for (let index = 0; index < strStyles.length; index++) {
                    let str = strStyles[index];
                    {
                        const style = this.readStyle(str);
                        if (style != null)
                            styles.add(style);
                    }
                }
                return styles.toArray([]);
            }
            updateDrawStyle(textarea, min, length) {
                const styles = this.getProperty(textarea, "drawstyle");
                if (styles == null)
                    return;
                for (let index = 0; index < styles.length; index++) {
                    let style = styles[index];
                    {
                        if (style.end <= min) {
                            continue;
                        }
                        else if (style.begin >= min) {
                            style.begin += length;
                            style.end += length;
                        }
                        else {
                            style.end += length;
                        }
                    }
                }
            }
            /**
             * returns style at specified character position
             * @param {number} charPos
             * @return
             * @param {org.shikhar.Gui.DrawStyle[]} styles
             * @return {org.shikhar.Gui.DrawStyle}
             * @private
             */
            getDrawStyle(charPos, styles) {
                if (styles == null)
                    return this.defaultStyle;
                for (let index = 0; index < styles.length; index++) {
                    let style = styles[index];
                    {
                        if (style.begin <= charPos && style.end > charPos) {
                            return style;
                        }
                    }
                }
                return this.defaultStyle;
            }
            getCharsWidth(chars, s, length, styles) {
                if (styles == null)
                    return this.defaultStyle.font.charsWidth(chars, s, length);
                let w = 0;
                for (let i = s; i < s + length; i++) {
                    {
                        if (i >= chars.length)
                            break;
                        w += this.getDrawStyle(i, styles).font.charWidth(chars[i]);
                    }
                    ;
                }
                return w;
            }
            getCharsHeight(chars, s, length, styles) {
                if (styles == null)
                    return this.defaultStyle.font.getHeight();
                let h = 0;
                if (length === 0)
                    length = 1;
                for (let i = s; i < s + length; i++) {
                    {
                        if (i >= chars.length)
                            break;
                        h = Math.max(h, this.getDrawStyle(i, styles).font.charHeight(chars[i]));
                    }
                    ;
                }
                return h;
            }
            updateDrawSytle$java_lang_Object$org_shikhar_Color$org_shikhar_Color$char(textarea, fg, bg, mode) {
                this.updateDrawSytle$java_lang_Object$org_shikhar_Color$org_shikhar_Color$char$int$int(textarea, fg, bg, mode, -1, -1);
            }
            updateDrawSytle$java_lang_Object$org_shikhar_Color$org_shikhar_Color$char$int$int(textarea, fg, bg, mode, start, end) {
                let i = this.getInteger$java_lang_Object$java_lang_String$int(textarea, "start", 0);
                const e = this.getInteger$java_lang_Object$java_lang_String$int(textarea, "end", 0);
                if (start === -1)
                    start = Math.min(i, e);
                if (end === -1)
                    end = Math.max(i, e);
                const length = this.getString$java_lang_Object$java_lang_String(textarea, "text").length;
                if (end === start) {
                    this.setColor(textarea, fg != null ? "foreground" : "background", fg != null ? fg : bg);
                    return;
                }
                let styles = this.getProperty(textarea, "drawstyle");
                const newStyle = new Gui.DrawStyle(this, start, end, fg, bg, mode);
                if (styles == null || styles.length === 0) {
                    styles = [newStyle];
                }
                else {
                    let newAdded = false;
                    const drawStyles = (new java.util.ArrayList());
                    for (let index = 0; index < styles.length; index++) {
                        let style = styles[index];
                        {
                            if (style.end <= style.begin)
                                continue;
                            if (style.begin === start && style.end === end) {
                                if (newStyle.backColor != null)
                                    style.backColor = newStyle.backColor;
                                if (newStyle.foreColor != null)
                                    style.foreColor = newStyle.foreColor;
                                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(newStyle.style) == 0) {
                                    if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'u'.charCodeAt(0))
                                        style.underline = newStyle.underline;
                                    if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'e'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'r'.charCodeAt(0))
                                        style.yOffset = newStyle.yOffset;
                                    if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'n'.charCodeAt(0))
                                        style.reset();
                                }
                                else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(newStyle.style) == 'n'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(mode) == 'n'.charCodeAt(0)) {
                                    style.reset();
                                }
                                style.setStyle(newStyle.style);
                                return;
                            }
                            if (style.end < start) {
                                drawStyles.add(style);
                                continue;
                            }
                            if (style.begin <= start && style.end >= start && style.end <= end) {
                                const se = style.end;
                                style.end = start;
                                if (style.end > style.begin)
                                    drawStyles.add(style);
                                if (!newAdded)
                                    drawStyles.add(newStyle);
                                newAdded = true;
                            }
                            else if (style.begin <= start && style.end > end) {
                                const se = style.end;
                                style.end = start;
                                if (style.end > style.begin)
                                    drawStyles.add(style);
                                if (!newAdded) {
                                    if (newStyle.backColor == null)
                                        newStyle.backColor = style.backColor;
                                    if (newStyle.foreColor == null)
                                        newStyle.foreColor = style.foreColor;
                                    if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(newStyle.style) == 0)
                                        newStyle.setStyle(style.style);
                                    drawStyles.add(newStyle);
                                }
                                newAdded = true;
                                drawStyles.add(new Gui.DrawStyle(this, end, se, style.foreColor, style.backColor, style.style));
                            }
                            else if (style.begin >= start && style.begin <= end && style.end <= end) {
                                if (!newAdded)
                                    drawStyles.add(newStyle);
                                newAdded = true;
                                continue;
                            }
                            else if (style.begin >= start && style.begin <= end && style.end > end) {
                                if (!newAdded)
                                    drawStyles.add(newStyle);
                                newAdded = true;
                                style.begin = end;
                                drawStyles.add(style);
                            }
                            else if (style.begin > end && style.begin < length) {
                                if (!newAdded)
                                    drawStyles.add(newStyle);
                                newAdded = true;
                                drawStyles.add(style);
                            }
                        }
                    }
                    if (!newAdded)
                        drawStyles.add(newStyle);
                    for (i = drawStyles.size() - 1; i >= 0; i--) {
                        {
                            const s = drawStyles.get(i);
                            if (s.begin < 0)
                                s.begin = 0;
                            if (s.end >= length - 1)
                                s.end = length;
                            if ((((c => c.charCodeAt == null ? c : c.charCodeAt(0))(s.style) == 0 || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(s.style) == 'n'.charCodeAt(0)) && (!s.underline) && (s.yOffset === 0) && s.foreColor == null && s.backColor == null) || s.begin > s.end) {
                                drawStyles.remove(i);
                            }
                        }
                        ;
                    }
                    styles = drawStyles.toArray([]);
                }
                this.putProperty(textarea, "drawstyle", styles);
            }
            updateDrawSytle(textarea, fg, bg, mode, start, end) {
                if (((textarea != null) || textarea === null) && ((fg != null && fg instanceof org.shikhar.Color) || fg === null) && ((bg != null && bg instanceof org.shikhar.Color) || bg === null) && ((typeof mode === 'string') || mode === null) && ((typeof start === 'number') || start === null) && ((typeof end === 'number') || end === null)) {
                    return this.updateDrawSytle$java_lang_Object$org_shikhar_Color$org_shikhar_Color$char$int$int(textarea, fg, bg, mode, start, end);
                }
                else if (((textarea != null) || textarea === null) && ((fg != null && fg instanceof org.shikhar.Color) || fg === null) && ((bg != null && bg instanceof org.shikhar.Color) || bg === null) && ((typeof mode === 'string') || mode === null) && start === undefined && end === undefined) {
                    return this.updateDrawSytle$java_lang_Object$org_shikhar_Color$org_shikhar_Color$char(textarea, fg, bg, mode);
                }
                else
                    throw new Error('invalid overload');
            }
        }
        Gui.__static_initialized = false;
        /**
         * Some default values
         */
        Gui.DEFAULT_COLUMN_WIDTH = 80;
        Gui.MINIMUM_COLUMN_WIDTH = 30;
        Gui.PROPERTY_SMARTWIDTHS = ":smartwidths";
        Gui.WHEEL_MASK = 0;
        Gui.MOUSE_WHEEL = 0;
        Gui.evm = 0;
        Gui.TEXTURE_WIDTH = 2048;
        Gui.TEXTURE_HEIGHT = 2048;
        Gui.useFBO = false;
        Gui.invalidate = true;
        Gui.contextCreated = false;
        Gui.repaintNeeded = true;
        shikhar.Gui = Gui;
        Gui["__class"] = "org.shikhar.Gui";
        (function (Gui) {
            /**
             * Default constructor
             * @class
             */
            class CustomComponent {
                constructor() {
                    if (this.component === undefined) {
                        this.component = null;
                    }
                    if (this.gui === undefined) {
                        this.gui = null;
                    }
                    if (this.bounds === undefined) {
                        this.bounds = null;
                    }
                    if (this.clipRect === undefined) {
                        this.clipRect = null;
                    }
                    if (this.width === undefined) {
                        this.width = 0;
                    }
                    if (this.height === undefined) {
                        this.height = 0;
                    }
                    const d = this.getPreferredSize();
                    this.bounds = new org.shikhar.Rectangle(0, 0, d.width, d.height);
                    this.clipRect = new org.shikhar.Rectangle(0, 0, d.width, d.height);
                }
                setText(string) {
                }
                /**
                 * Called by Gui when creating a new instance of this. For further
                 * processing we need to know which component we are inside GUi.
                 *
                 * @param {*} component
                 */
                setComponent(component) {
                    this.component = component;
                    this.setText(this.gui.getString$java_lang_Object$java_lang_String(component, "text"));
                }
                /**
                 * Returns gui Component associcted with canvas if any
                 * @return {*}
                 */
                getComponent() {
                    return this.component;
                }
                /**
                 * Called by Gui, we need a reference back to it.
                 *
                 * @param {org.shikhar.Gui} gui
                 */
                setGui(gui) {
                    this.gui = gui;
                    if (!gui.beans.contains(this)) {
                        gui.beans.add(this);
                    }
                }
                /**
                 * Set the cursor image to a predefined cursor.
                 * <P>
                 *
                 * @param {string} cursor
                 * One of the constants defined by the {@link Cursor} class.
                 * If this parameter is <TT>null</TT> the parent cursor will
                 * be inherited
                 */
                setCursor(cursor) {
                    this.gui.awtComponent.style.cursor = (cursor);
                }
                /**
                 * Gets the cursor set on this component.
                 * <P>
                 *
                 * @return {string} The cursor for this component.
                 */
                getCursor() {
                    return this.gui.awtComponent.style.cursor;
                }
                /**
                 * Painting is done by gui, so when this calls repaint it will
                 * simply be redirected the way it should back to gui.
                 * @param {org.shikhar.Graphics} g
                 */
                paintBackground(g) {
                    if (this.gui == null)
                        return;
                    const fill = this.gui.getColor(this.component, "background", null);
                    const icon = this.gui.getIcon$java_lang_Object$java_lang_String$org_shikhar_AWTImage(this.component, "bgimage", null);
                    if (fill != null) {
                        g.setColor(fill);
                        g.fillRect(-1, -1, this.width + 1, this.height + 2);
                    }
                    if (icon != null) {
                        g.drawImage$org_shikhar_AWTImage$double$double$double$double(icon, 0, 0, this.width, this.height);
                    }
                    if (this.gui.getBoolean$java_lang_Object$java_lang_String$boolean(this.component, "border", false)) {
                        g.setColor(this.component === this.gui.mousepressed ? this.gui.c_border : this.gui.getColor(this.component, "foreground", null));
                        g.drawRect(0, 0, this.width, this.height);
                    }
                }
                /**
                 * coordinates are in frame of its parent with top left as origin and
                 * right down as positive axes
                 *
                 * @param {org.shikhar.Graphics} g
                 */
                paint(g) {
                    this.paintBackground(g);
                }
                /**
                 *
                 * @param {number} dt
                 * @param {boolean} revalidate
                 * true if something which may affect widget state may have
                 * changed (ex. global variables, theme)
                 */
                update(dt, revalidate) {
                }
                /**
                 * Called when the component no longer exists in gui tree, Notifies component to dispose resources created if any
                 * @param {org.shikhar.Graphics} g
                 */
                dispose(g) {
                }
                /**
                 * returns true if handled (by defaut retiurns false)
                 * Handles Mouse motion Event,
                 * @param {number} id
                 * @param {number} x
                 * @param {number} y
                 * @param {number} button {Mouse button}
                 * @param clickCount {Number} Number of clicks
                 * @param ctrlKey {boolean} if ctrl key is pressed
                 * @param altkey {boolean} if alt key is pressed
                 * @param shiftkey {boolean} if shift key is pressed
                 * @param {number} clickcount
                 * @param {boolean} shiftdown
                 * @param {boolean} controldown
                 * @param {boolean} popuptrigger
                 * @return {boolean}
                 */
                handleMouseEvent(x, y, clickcount, id, button, shiftdown, controldown, popuptrigger) {
                    return false;
                }
                /**
                 * returns true if handled (by defaut retiurns false)
                 * @param {number} x
                 * @param {number} y
                 * @param {number} wheel
                 * @return {boolean}
                 */
                handleMouseWheel(x, y, wheel) {
                    return false;
                }
                /**
                 * returns true if handled (by defaut retiurns false)
                 * @param {number} keychar
                 * @param {number} keycode
                 * @param {number} id
                 * @param {boolean} shiftdown
                 * @param {boolean} controldown
                 * @param {number} modifiers
                 * @return {boolean}
                 */
                handleKeyEvent(keychar, keycode, id, shiftdown, controldown, modifiers) {
                    return false;
                }
                /**
                 *
                 * @return {boolean} if true then event is assumed as consumed and popup should not be handled by gui
                 * @param {number} x
                 * @param {number} y
                 */
                handlePopUp(x, y) {
                    return false;
                }
                /**
                 * called by gui when layout is done for the widgets
                 * @param {org.shikhar.Rectangle} r
                 */
                setBounds(r) {
                    this.bounds = r;
                    if (r.width > 0)
                        this.width = (r.width | 0);
                    if (r.height > 0)
                        this.height = (r.height | 0);
                }
                /**
                 * returns size of widget
                 * @return
                 * @return {org.shikhar.Dimension}
                 */
                getSize() {
                    return new org.shikhar.Dimension(this.width, this.height);
                }
                /**
                 * returns widget Width in pixels
                 * @return {number}
                 */
                getWidth() {
                    return this.width;
                }
                /**
                 * returns widget Height in pixels
                 * @return {number}
                 */
                getHeight() {
                    return this.height;
                }
            }
            Gui.CustomComponent = CustomComponent;
            CustomComponent["__class"] = "org.shikhar.Gui.CustomComponent";
            class DrawStyle {
                constructor(__parent, begin, end, foreColor, backColor, style, underline, offset) {
                    if (((typeof begin === 'number') || begin === null) && ((typeof end === 'number') || end === null) && ((foreColor != null && foreColor instanceof org.shikhar.Color) || foreColor === null) && ((backColor != null && backColor instanceof org.shikhar.Color) || backColor === null) && ((typeof style === 'string') || style === null) && ((typeof underline === 'boolean') || underline === null) && ((typeof offset === 'number') || offset === null)) {
                        let __args = Array.prototype.slice.call(arguments, [1]);
                        if (this.font === undefined) {
                            this.font = null;
                        }
                        this.foreColor = __parent.c_text_fg;
                        this.backColor = __parent.c_text_bg;
                        this.style = String.fromCharCode(0);
                        this.begin = 0;
                        this.end = 0;
                        this.yOffset = 0;
                        this.underline = false;
                        this.begin = begin;
                        this.end = end;
                        this.foreColor = foreColor;
                        this.backColor = backColor;
                        this.underline = underline;
                        this.yOffset = offset;
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'n'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'u'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'e'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'r'.charCodeAt(0)) {
                            if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'u'.charCodeAt(0)) {
                                this.underline = true;
                            }
                            else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'e'.charCodeAt(0)) {
                                this.yOffset = 3;
                            }
                            else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'r'.charCodeAt(0)) {
                                this.yOffset = -3;
                            }
                            style = String.fromCharCode(0);
                        }
                        this.setStyle(style);
                    }
                    else if (((typeof begin === 'number') || begin === null) && ((typeof end === 'number') || end === null) && ((foreColor != null && foreColor instanceof org.shikhar.Color) || foreColor === null) && ((backColor != null && backColor instanceof org.shikhar.Color) || backColor === null) && ((typeof style === 'string') || style === null) && underline === undefined && offset === undefined) {
                        let __args = Array.prototype.slice.call(arguments, [1]);
                        {
                            let __args = Array.prototype.slice.call(arguments, [1]);
                            let underline = false;
                            let offset = 0;
                            if (this.font === undefined) {
                                this.font = null;
                            }
                            this.foreColor = __parent.c_text_fg;
                            this.backColor = __parent.c_text_bg;
                            this.style = String.fromCharCode(0);
                            this.begin = 0;
                            this.end = 0;
                            this.yOffset = 0;
                            this.underline = false;
                            this.begin = begin;
                            this.end = end;
                            this.foreColor = foreColor;
                            this.backColor = backColor;
                            this.underline = underline;
                            this.yOffset = offset;
                            if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'n'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'u'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'e'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'r'.charCodeAt(0)) {
                                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'u'.charCodeAt(0)) {
                                    this.underline = true;
                                }
                                else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'e'.charCodeAt(0)) {
                                    this.yOffset = 3;
                                }
                                else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(style) == 'r'.charCodeAt(0)) {
                                    this.yOffset = -3;
                                }
                                style = String.fromCharCode(0);
                            }
                            this.setStyle(style);
                        }
                        if (this.font === undefined) {
                            this.font = null;
                        }
                        this.foreColor = __parent.c_text_fg;
                        this.backColor = __parent.c_text_bg;
                        this.style = String.fromCharCode(0);
                        this.begin = 0;
                        this.end = 0;
                        this.yOffset = 0;
                        this.underline = false;
                    }
                    else
                        throw new Error('invalid overload');
                }
                toString() {
                    let s = this.style;
                    if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(this.style) == 0) {
                        if (this.font == null) {
                            s = 'n';
                        }
                        else if (this.font.getName() === ("default-large")) {
                            s = 'l';
                        }
                        else if (this.font.getName() === ("default-small")) {
                            s = 's';
                        }
                        else if (this.font.getName() === ("default-bold")) {
                            s = 'b';
                        }
                        else if (this.font.getName() === ("default-italic")) {
                            s = 'i';
                        }
                        else if (this.font.getName() === ("default-normal")) {
                            s = 'n';
                        }
                    }
                    return this.begin + "," + this.end + "," + (this.foreColor == null ? "" : this.foreColor.toString()) + "," + (this.backColor == null ? "" : this.backColor.toString()) + "," + s + "," + this.underline + "," + this.yOffset;
                }
                setStyle(style) {
                }
                reset() {
                    this.style = String.fromCharCode(0);
                    this.yOffset = 0;
                    this.font = new org.shikhar.Font("default-normal", this.__parent.g.context);
                    this.foreColor = null;
                    this.backColor = null;
                    this.underline = false;
                }
            }
            Gui.DrawStyle = DrawStyle;
            DrawStyle["__class"] = "org.shikhar.Gui.DrawStyle";
        })(Gui = shikhar.Gui || (shikhar.Gui = {}));
        /**
         * Constructs a new timer which runs 'numTicks' times (provided not stopped in between)
         *
         * @param {number} delay delay in millisec
         * @param {number} maxTicks number of times timer runs, pass -1 to run it continuously
         * @class
         * @author Mahesh Kurmi
         */
        class GuiTimer {
            constructor(delay, maxTicks) {
                if (((typeof delay === 'number') || delay === null) && ((typeof maxTicks === 'number') || maxTicks === null)) {
                    let __args = arguments;
                    if (this.callback === undefined) {
                        this.callback = null;
                    }
                    this.state = GuiTimer.State.STOPPED;
                    this.delay = 100;
                    this.num_ticks = 0;
                    this.max_ticks = 1;
                    this.elapsedTime = 0;
                    this.invokerCompoenent = null;
                    this.delay = delay;
                    this.max_ticks = maxTicks;
                }
                else if (((typeof delay === 'number') || delay === null) && maxTicks === undefined) {
                    let __args = arguments;
                    if (this.callback === undefined) {
                        this.callback = null;
                    }
                    this.state = GuiTimer.State.STOPPED;
                    this.delay = 100;
                    this.num_ticks = 0;
                    this.max_ticks = 1;
                    this.elapsedTime = 0;
                    this.invokerCompoenent = null;
                    this.delay = delay;
                }
                else if (delay === undefined && maxTicks === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let delay = 100;
                        if (this.callback === undefined) {
                            this.callback = null;
                        }
                        this.state = GuiTimer.State.STOPPED;
                        this.delay = 100;
                        this.num_ticks = 0;
                        this.max_ticks = 1;
                        this.elapsedTime = 0;
                        this.invokerCompoenent = null;
                        this.delay = delay;
                    }
                    if (this.callback === undefined) {
                        this.callback = null;
                    }
                    this.state = GuiTimer.State.STOPPED;
                    this.delay = 100;
                    this.num_ticks = 0;
                    this.max_ticks = 1;
                    this.elapsedTime = 0;
                    this.invokerCompoenent = null;
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Sets the delay in ms till next expiration.
             *
             * @param {number} delay in ms, setting delay<1 disables timer
             * @throws
             */
            setDelay(delay) {
                this.delay = delay;
                this.num_ticks = 0;
                this.elapsedTime = 0;
            }
            /**
             * Returns delay in millisec
             * @return
             * @return {number}
             */
            getDelay() {
                return this.delay;
            }
            /**
             * Returns true if the timer is a continuous firing timer.
             * @return {boolean} true if the timer is a continuous firing timer.
             */
            isContinuous() {
                return this.max_ticks < 0;
            }
            /**
             * Sets the timer continous mode. A timer in continuous mode must be stopped manually.
             * @param {boolean} continuous true if the timer should auto restart after firing.
             */
            setContinuous(continuous) {
                if (this.max_ticks < 0 && !continuous) {
                    this.max_ticks = 1;
                }
                else if (continuous) {
                    this.max_ticks = -1;
                }
                this.num_ticks = 0;
                this.elapsedTime = 0;
            }
            /**
             * Sets the timer in counter mode. A timer in counter mode stops after it ticks specified number of times.
             * @param {number} count number of times timer runs, pass -1 to run it continuously
             */
            setMaxTickCount(count) {
                this.max_ticks = count;
                this.num_ticks = 0;
                this.elapsedTime = 0;
            }
            /**
             * Returns max number of times timer will tick
             * @return
             * @return {number}
             */
            getMaxTickCount() {
                return this.max_ticks;
            }
            /**
             * Sets the callback that should be executed once the timer expires.
             * @param {org.shikhar.Gui} callback the callback.
             */
            setCallback(callback) {
                this.callback = callback;
            }
            /**
             * Returns true if the timer is already running.
             * @return {boolean} true if the timer is already running.
             */
            isRunning() {
                return this.state === GuiTimer.State.RUNNING && (this.max_ticks < 0 || this.num_ticks < this.max_ticks);
            }
            /**
             * returns true if timer is either running or paused
             * @return
             * @return {boolean}
             */
            isActive() {
                return this.state !== GuiTimer.State.STOPPED && (this.max_ticks < 0 || this.num_ticks < this.max_ticks);
            }
            /**
             * pauses timer if running, else does nothing
             * @return
             */
            pause() {
                if (this.state === GuiTimer.State.RUNNING)
                    this.state = GuiTimer.State.PAUSED;
            }
            /**
             * resumes timer  if paused , else does nothing
             * @return
             */
            resume() {
                if (this.state === GuiTimer.State.PAUSED)
                    this.state = GuiTimer.State.RUNNING;
            }
            /**
             * Starts the timer from beginning irrespective of currently running,paused or stopped.
             */
            reStart() {
                this.state = GuiTimer.State.RUNNING;
                this.num_ticks = 0;
                this.elapsedTime = 0;
            }
            /**
             * Starts the timer from beginning irrespective of currently paused or stopped.
             * If it is already running then this method does nothing.
             */
            start() {
                if (this.state === GuiTimer.State.RUNNING)
                    return;
                this.state = GuiTimer.State.RUNNING;
                this.num_ticks = 0;
                this.elapsedTime = 0;
            }
            /**
             * Stops the timer. If the timer is not running then this method does nothing.
             */
            stop() {
                this.state = GuiTimer.State.STOPPED;
                this.num_ticks = 0;
                this.elapsedTime = 0;
            }
            /**
             * Called when time elapsed is more then or equal to delay specified
             * @param {number} delta
             * @return {boolean} true if timer is still running, false if timer has ticked allowed number of times
             */
            update(delta) {
                if (this.state === GuiTimer.State.RUNNING && this.delay > 0) {
                    this.elapsedTime += delta;
                    if (this.elapsedTime >= this.delay) {
                        this.elapsedTime = this.elapsedTime % this.delay;
                        this.num_ticks++;
                        this.doCallback();
                        if ((this.num_ticks >= this.max_ticks) && this.max_ticks > 0) {
                            this.stop();
                            return false;
                        }
                        org.shikhar.Gui.repaintNeeded = true;
                    }
                    return true;
                }
                return false;
            }
            doCallback() {
                if (this.callback != null) {
                    try {
                        this.callback.onTimerTick(this);
                    }
                    catch (ex) {
                        java.util.logging.Logger.getLogger(/* getName */ (c => typeof c === 'string' ? c : c["__class"] ? c["__class"] : c["name"])(java.util.Timer)).log(java.util.logging.Level.SEVERE, "Exception in callback", ex);
                    }
                }
            }
        }
        shikhar.GuiTimer = GuiTimer;
        GuiTimer["__class"] = "org.shikhar.GuiTimer";
        (function (GuiTimer) {
            let State;
            (function (State) {
                State[State["RUNNING"] = 0] = "RUNNING";
                State[State["PAUSED"] = 1] = "PAUSED";
                State[State["STOPPED"] = 2] = "STOPPED";
            })(State = GuiTimer.State || (GuiTimer.State = {}));
            class Canvas extends org.shikhar.Gui.CustomComponent {
                constructor(__parent) {
                    super();
                    this.__parent = __parent;
                }
                /**
                 *
                 * @return {org.shikhar.Dimension}
                 */
                getPreferredSize() {
                    return new org.shikhar.Dimension(200, 100);
                }
                /**
                 *
                 * @return {string}
                 */
                getBeanClassName() {
                    return null;
                }
                reset() {
                }
            }
            GuiTimer.Canvas = Canvas;
            Canvas["__class"] = "org.shikhar.GuiTimer.Canvas";
        })(GuiTimer = shikhar.GuiTimer || (shikhar.GuiTimer = {}));
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
org.shikhar.Gui.__static_initialize();
//# sourceMappingURL=Gui.js.map