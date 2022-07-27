/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class FocusEvent extends org.shikhar.InputEvent {
            constructor(id, mask) {
                super(id, mask);
            }
            static FOCUS_GAINED_$LI$() { if (FocusEvent.FOCUS_GAINED == null) {
                FocusEvent.FOCUS_GAINED = FocusEvent.FOCUS_FIRST;
            } return FocusEvent.FOCUS_GAINED; }
            static FOCUS_LOST_$LI$() { if (FocusEvent.FOCUS_LOST == null) {
                FocusEvent.FOCUS_LOST = 1 + FocusEvent.FOCUS_FIRST;
            } return FocusEvent.FOCUS_LOST; }
        }
        /**
         * The first number in the range of ids used for focus events.
         */
        FocusEvent.FOCUS_FIRST = 1004;
        /**
         * The last number in the range of ids used for focus events.
         */
        FocusEvent.FOCUS_LAST = 1005;
        shikhar.FocusEvent = FocusEvent;
        FocusEvent["__class"] = "org.shikhar.FocusEvent";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=FocusEvent.js.map