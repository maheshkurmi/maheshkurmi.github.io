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
            isShiftDown() {
                return false;
            }
            isControlDown() {
                return false;
            }
            isMetaDown() {
                return false;
            }
            getModifiers() {
                return this.mask;
            }
            static getField(string) {
                return 0;
            }
        }
        InputEvent.ALT_MASK = 0;
        shikhar.InputEvent = InputEvent;
        InputEvent["__class"] = "org.shikhar.InputEvent";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=InputEvent.js.map