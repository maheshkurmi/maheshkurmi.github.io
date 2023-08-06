/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Input handling
         *
         * @author Mahesh Kurmi
         * @param {org.shikhar.Gui} gui
         * @param {HTMLCanvasElement} canvas
         * @class
         */
        class Input {
            constructor(gui, canvas) {
                if (this.gui === undefined) {
                    this.gui = null;
                }
                if (this.canvas === undefined) {
                    this.canvas = null;
                }
                this.TMP_VEC = new org.shikhar.Vector2();
                this.TMP_PrevPressPoint = new org.shikhar.Vector2();
                this.MAX_CLICK_DISTANCE = 20;
                this.gui = gui;
                this.canvas = canvas;
                this.installListeners(canvas);
            }
            /*private*/ pageToCanvas(x, y) {
                return this.TMP_VEC.set$double$double(x - this.canvas.offsetLeft, y - this.canvas.offsetTop);
            }
            /*private*/ getModifiers(e) {
                let modifier = 0;
                if (e != null && e instanceof KeyboardEvent) {
                    const event = e;
                    if (event.altKey)
                        modifier |= org.shikhar.InputEvent.ALT_MASK;
                    if (event.ctrlKey || event.metaKey)
                        modifier |= org.shikhar.InputEvent.CTRL_MASK;
                    if (event.shiftKey)
                        modifier |= org.shikhar.InputEvent.SHIFT_MASK;
                }
                else if (e != null && e instanceof MouseEvent) {
                    const event = e;
                    if (event.altKey)
                        modifier |= org.shikhar.InputEvent.ALT_MASK;
                    if (event.ctrlKey || event.metaKey)
                        modifier |= org.shikhar.InputEvent.CTRL_MASK;
                    if (event.shiftKey)
                        modifier |= org.shikhar.InputEvent.SHIFT_MASK;
                }
                return modifier;
            }
            /*private*/ getButton(e) {
                let btn = e.button;
                if (btn === 0)
                    btn = e.which;
                else
                    btn++;
                switch ((btn)) {
                    case 1:
                        return org.shikhar.AWTMouseEvent.BUTTON1;
                    case 2:
                        return org.shikhar.AWTMouseEvent.BUTTON2;
                    case 3:
                        return org.shikhar.AWTMouseEvent.BUTTON3;
                    default:
                        return 0;
                }
            }
            installListeners(canvas) {
                canvas.addEventListener("mousedown", (event) => {
                    const v = this.pageToCanvas(event.pageX, event.pageY);
                    this.pointerPressed((v.x | 0), (v.y | 0), this.getButton(event), (event.detail | 0), this.getModifiers(event));
                    return null;
                }, true);
                canvas.addEventListener("mousemove", (event) => {
                    const v = this.pageToCanvas(event.pageX, event.pageY);
                    this.pointerDragged((v.x | 0), (v.y | 0), this.getButton(event), (event.detail | 0), this.getModifiers(event));
                    return null;
                }, true);
                canvas.addEventListener("mouseup", (event) => {
                    const v = this.pageToCanvas(event.pageX, event.pageY);
                    this.pointerReleased((v.x | 0), (v.y | 0), this.getButton(event), (event.detail | 0), this.getModifiers(event));
                    return null;
                }, true);
                canvas.addEventListener("contextmenu", (event) => {
                    const v = this.pageToCanvas(event.pageX, event.pageY);
                    this.pointerReleased((v.x | 0), (v.y | 0), org.shikhar.AWTMouseEvent.BUTTON2, 1, this.getModifiers(event));
                    event.stopPropagation();
                    event.preventDefault();
                    return null;
                }, true);
                canvas.addEventListener("mouseover", (event) => {
                    const v = this.pageToCanvas(event.pageX, event.pageY);
                    this.gui.handleMouse((v.x | 0), (v.y | 0), org.shikhar.AWTMouseEvent.MOUSE_ENTERED_$LI$(), this.getButton(event), (event.detail | 0), this.getModifiers(event));
                    this.gui.handleInput();
                    return null;
                }, true);
                canvas.addEventListener("mouseout", (event) => {
                    const v = this.pageToCanvas(event.pageX, event.pageY);
                    this.gui.handleMouse((v.x | 0), (v.y | 0), org.shikhar.AWTMouseEvent.MOUSE_EXITED_$LI$(), this.getButton(event), (event.detail | 0), this.getModifiers(event));
                    return null;
                }, true);
                canvas.addEventListener("touchstart", (event) => {
                    if (event.touches.length === 1) {
                        const touch = event.touches.item(0);
                        const v = this.pageToCanvas(touch.pageX, touch.pageY);
                        this.pointerPressed((v.x | 0), (v.y | 0), org.shikhar.AWTMouseEvent.BUTTON1, (event.detail | 0), this.getModifiers(event));
                    }
                    event.stopPropagation();
                    event.preventDefault();
                    return null;
                }, true);
                canvas.addEventListener("mousewheel", (event) => {
                    this.mouseScrolled((this.TMP_VEC.x | 0), (this.TMP_VEC.y | 0), (event.wheelDelta | 0));
                    event.preventDefault();
                    event.stopPropagation();
                    return null;
                }, true);
                canvas.addEventListener("touchmove", (event) => {
                    if (event.changedTouches.length === 1) {
                        const touch = event.changedTouches.item(0);
                        const v = this.pageToCanvas(touch.pageX, touch.pageY);
                        this.pointerDragged((v.x | 0), (v.y | 0), org.shikhar.AWTMouseEvent.BUTTON1, (event.detail | 0), this.getModifiers(event));
                    }
                    event.stopPropagation();
                    event.preventDefault();
                    return null;
                }, true);
                canvas.addEventListener("touchend", (event) => {
                    if (event.changedTouches.length === 1) {
                        const touch = event.changedTouches.item(0);
                        const v = this.pageToCanvas(touch.pageX, touch.pageY);
                        this.pointerReleased((v.x | 0), (v.y | 0), org.shikhar.AWTMouseEvent.BUTTON1, (event.detail | 0), this.getModifiers(event));
                    }
                    event.stopPropagation();
                    event.preventDefault();
                    return null;
                }, true);
                window.addEventListener("keydown", (event) => {
                    const keychar = event.key.length !== 1 ? String.fromCharCode(0) : event.key.charAt(0);
                    this.keyPressed((event.keyCode | 0), keychar, this.getModifiers(event));
                    event.preventDefault();
                    return null;
                }, true);
                window.addEventListener("keyup", (event) => {
                    const keychar = event.key.length !== 1 ? String.fromCharCode(0) : event.key.charAt(0);
                    this.keyReleased((event.keyCode | 0), keychar, this.getModifiers(event));
                    event.preventDefault();
                    return null;
                }, true);
            }
            /**
             *
             * Key press key pre-processing.
             *
             * TODO abc type field in the upper right corner, mobile style.
             * @param modifier
             * @param {number} keyCode
             * @param {string} keyChar
             * @param {number} modifiers
             */
            keyPressed(keyCode, keyChar, modifiers) {
                this.gui.handleKey(org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$(), keyCode, (keyChar).charCodeAt(0), modifiers, false);
                this.gui.handleInput();
            }
            keyReleased(keyCode, keyChar, modifiers) {
                this.gui.handleKey(org.shikhar.AWTKeyEvent.KEY_RELEASED_$LI$(), keyCode, (keyChar).charCodeAt(0), modifiers, false);
                this.gui.handleInput();
            }
            pointerPressed(x, y, button, clickcount, modifiers) {
                this.TMP_PrevPressPoint.set$double$double(x, y);
                this.gui.handleMouse(x, y, org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$(), button, 0, modifiers);
                this.gui.handleInput();
            }
            pointerDragged(x, y, btn, clickcount, modifiers) {
                this.gui.handleMouse(x, y, btn > 0 ? org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$() : org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$(), btn, 0, modifiers);
                this.gui.handleInput();
            }
            pointerReleased(x, y, button, clickcount, modifiers) {
                if (clickcount === 0 || this.TMP_PrevPressPoint.distance$double$double(x, y) > this.MAX_CLICK_DISTANCE) {
                    this.gui.handleMouse(x, y, org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$(), button, 0, modifiers);
                }
                else {
                    this.gui.handleMouse(x, y, org.shikhar.AWTMouseEvent.MOUSE_CLICKED_$LI$(), button, clickcount, modifiers);
                }
                this.gui.handleInput();
            }
            mouseScrolled(x, y, scroll) {
                this.gui.handleMouseWheel(x, y, scroll);
                this.gui.handleInput();
            }
        }
        shikhar.Input = Input;
        Input["__class"] = "org.shikhar.Input";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Input.js.map