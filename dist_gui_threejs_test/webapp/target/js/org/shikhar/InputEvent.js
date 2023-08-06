/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class InputEvent extends org.shikhar.AWTEvent {
            constructor(id, mask) {
                super(id);
                if (this.mask === undefined) {
                    this.mask = 0;
                }
                this.mask = mask;
            }
            isAltDown() {
                return (this.mask & InputEvent.ALT_MASK) !== 0;
            }
            isShiftDown() {
                return (this.mask & InputEvent.SHIFT_MASK) !== 0;
            }
            isControlDown() {
                return (this.mask & InputEvent.CTRL_MASK) !== 0;
            }
            isMetaDown() {
                return (this.mask & InputEvent.META_MASK) !== 0;
            }
            getModifiers() {
                return this.mask;
            }
            static getField(string) {
                return 0;
            }
        }
        InputEvent.ALT_MASK = 1;
        InputEvent.SHIFT_MASK = 4;
        InputEvent.CTRL_MASK = 2;
        InputEvent.META_MASK = 8;
        shikhar.InputEvent = InputEvent;
        InputEvent["__class"] = "org.shikhar.InputEvent";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=InputEvent.js.map