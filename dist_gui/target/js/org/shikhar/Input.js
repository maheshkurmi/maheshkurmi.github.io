/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Input handling based on LWJGL's Mouse & Keyboard classes.
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
                this.gui = gui;
                this.installListeners(canvas);
            }
            installListeners(canvas) {
                canvas.addEventListener("mousedown", (event) => {
                    this.onInputDeviceDown(event, false);
                    return null;
                }, true);
                canvas.addEventListener("mousemove", (event) => {
                    this.onInputDeviceMove(event, false);
                    return null;
                }, true);
                canvas.addEventListener("mouseup", (event) => {
                    this.onInputDeviceUp(event, false);
                    return null;
                }, true);
                canvas.addEventListener("touchstart", (event) => {
                    this.onInputDeviceDown(event, true);
                    return null;
                }, true);
                canvas.addEventListener("touchmove", (event) => {
                    this.onInputDeviceMove(event, true);
                    return null;
                }, true);
                canvas.addEventListener("touchend", (event) => {
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
                this.keyReleased((event.keyCode | 0), (event.key.charAt(0)).charCodeAt(0));
            }
            onInputDeviceDown(event, touchDevice) {
                if (touchDevice) {
                    for (let i = 0; i < event.changedTouches.length; i++) {
                        {
                            const t = event.changedTouches.item(i);
                            this.pointerPressed(t.pageX, t.pageY, 1);
                        }
                        ;
                    }
                }
                else {
                    const x = (event.pageX | 0);
                    const y = (event.pageY | 0);
                    this.pointerPressed(x, y, event.buttons);
                }
            }
            onInputDeviceUp(event, touchDevice) {
                if (touchDevice) {
                    for (let i = 0; i < event.changedTouches.length; i++) {
                        {
                            const t = event.changedTouches.item(i);
                            this.pointerReleased(t.pageX, t.pageY, 1);
                        }
                        ;
                    }
                }
                else {
                    const x = (event.pageX | 0);
                    const y = (event.pageY | 0);
                    this.pointerReleased(x, y, event.buttons);
                }
            }
            onInputDeviceMove(event, touchDevice) {
                if (touchDevice) {
                    for (let i = 0; i < event.changedTouches.length; i++) {
                        {
                            const t = event.changedTouches.item(i);
                            this.pointerDragged(t.pageX, t.pageY, 1);
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
                this.gui.handleKey(org.shikhar.AWTKeyEvent.KEY_PRESSED_$LI$(), keyCode, keyChar, 0, false);
                this.gui.render();
            }
            keyReleased(keyCode, keyChar) {
                this.gui.handleKey(org.shikhar.AWTKeyEvent.KEY_RELEASED_$LI$(), keyCode, keyChar, 0, false);
                this.gui.render();
            }
            pointerPressed(x, y, button) {
                this.gui.handleMouse(x, y, org.shikhar.AWTMouseEvent.MOUSE_PRESSED_$LI$(), AWTMouseEvent.BUTTON1, 0, 0);
                this.gui.render();
            }
            pointerDragged(x, y, btn) {
                this.gui.handleMouse(x, y, org.shikhar.AWTMouseEvent.MOUSE_DRAGGED_$LI$(), AWTMouseEvent.BUTTON1, 0, 0);
                this.gui.render();
            }
            pointerReleased(x, y, button) {
                this.gui.handleMouse(x, y, org.shikhar.AWTMouseEvent.MOUSE_RELEASED_$LI$(), AWTMouseEvent.BUTTON1, 0, 0);
                this.gui.render();
            }
        }
        shikhar.Input = Input;
        Input["__class"] = "org.shikhar.Input";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Input.js.map
