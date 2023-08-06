/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class ComponentEvent extends org.shikhar.InputEvent {
            constructor(id, mask) {
                super(id, mask);
            }
            static COMPONENT_MOVED_$LI$() { if (ComponentEvent.COMPONENT_MOVED == null) {
                ComponentEvent.COMPONENT_MOVED = ComponentEvent.COMPONENT_FIRST;
            } return ComponentEvent.COMPONENT_MOVED; }
            static COMPONENT_RESIZED_$LI$() { if (ComponentEvent.COMPONENT_RESIZED == null) {
                ComponentEvent.COMPONENT_RESIZED = 1 + ComponentEvent.COMPONENT_FIRST;
            } return ComponentEvent.COMPONENT_RESIZED; }
            static COMPONENT_SHOWN_$LI$() { if (ComponentEvent.COMPONENT_SHOWN == null) {
                ComponentEvent.COMPONENT_SHOWN = 2 + ComponentEvent.COMPONENT_FIRST;
            } return ComponentEvent.COMPONENT_SHOWN; }
            static COMPONENT_HIDDEN_$LI$() { if (ComponentEvent.COMPONENT_HIDDEN == null) {
                ComponentEvent.COMPONENT_HIDDEN = 3 + ComponentEvent.COMPONENT_FIRST;
            } return ComponentEvent.COMPONENT_HIDDEN; }
        }
        /**
         * The first number in the range of ids used for component events.
         */
        ComponentEvent.COMPONENT_FIRST = 100;
        /**
         * The last number in the range of ids used for component events.
         */
        ComponentEvent.COMPONENT_LAST = 103;
        shikhar.ComponentEvent = ComponentEvent;
        ComponentEvent["__class"] = "org.shikhar.ComponentEvent";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=ComponentEvent.js.map