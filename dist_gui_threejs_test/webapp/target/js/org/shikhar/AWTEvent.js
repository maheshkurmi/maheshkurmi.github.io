/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class AWTEvent {
            constructor(id) {
                if (this.id === undefined) {
                    this.id = 0;
                }
                this.id = id;
            }
            static RESERVED_ID_MAX_$LI$() { if (AWTEvent.RESERVED_ID_MAX == null) {
                AWTEvent.RESERVED_ID_MAX = (javaemul.internal.IntegerHelper.MAX_VALUE / 2 | 0);
            } return AWTEvent.RESERVED_ID_MAX; }
            /**
             * Gets the event id.
             *
             * @return {number} an event id.
             */
            getID() {
                return this.id;
            }
        }
        shikhar.AWTEvent = AWTEvent;
        AWTEvent["__class"] = "org.shikhar.AWTEvent";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=AWTEvent.js.map