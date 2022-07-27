/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class AWTMouseEvent extends org.shikhar.InputEvent {
            constructor(id, x, y, mask) {
                super(id, mask);
                if (this.x === undefined) {
                    this.x = 0;
                }
                if (this.y === undefined) {
                    this.y = 0;
                }
                this.x = x;
                this.y = y;
            }
            static MOUSE_CLICKED_$LI$() { if (AWTMouseEvent.MOUSE_CLICKED == null) {
                AWTMouseEvent.MOUSE_CLICKED = AWTMouseEvent.MOUSE_FIRST;
            } return AWTMouseEvent.MOUSE_CLICKED; }
            static MOUSE_PRESSED_$LI$() { if (AWTMouseEvent.MOUSE_PRESSED == null) {
                AWTMouseEvent.MOUSE_PRESSED = 1 + AWTMouseEvent.MOUSE_FIRST;
            } return AWTMouseEvent.MOUSE_PRESSED; }
            static MOUSE_RELEASED_$LI$() { if (AWTMouseEvent.MOUSE_RELEASED == null) {
                AWTMouseEvent.MOUSE_RELEASED = 2 + AWTMouseEvent.MOUSE_FIRST;
            } return AWTMouseEvent.MOUSE_RELEASED; }
            static MOUSE_MOVED_$LI$() { if (AWTMouseEvent.MOUSE_MOVED == null) {
                AWTMouseEvent.MOUSE_MOVED = 3 + AWTMouseEvent.MOUSE_FIRST;
            } return AWTMouseEvent.MOUSE_MOVED; }
            static MOUSE_ENTERED_$LI$() { if (AWTMouseEvent.MOUSE_ENTERED == null) {
                AWTMouseEvent.MOUSE_ENTERED = 4 + AWTMouseEvent.MOUSE_FIRST;
            } return AWTMouseEvent.MOUSE_ENTERED; }
            static MOUSE_EXITED_$LI$() { if (AWTMouseEvent.MOUSE_EXITED == null) {
                AWTMouseEvent.MOUSE_EXITED = 5 + AWTMouseEvent.MOUSE_FIRST;
            } return AWTMouseEvent.MOUSE_EXITED; }
            static MOUSE_DRAGGED_$LI$() { if (AWTMouseEvent.MOUSE_DRAGGED == null) {
                AWTMouseEvent.MOUSE_DRAGGED = 6 + AWTMouseEvent.MOUSE_FIRST;
            } return AWTMouseEvent.MOUSE_DRAGGED; }
            static MOUSE_WHEEL_$LI$() { if (AWTMouseEvent.MOUSE_WHEEL == null) {
                AWTMouseEvent.MOUSE_WHEEL = 7 + AWTMouseEvent.MOUSE_FIRST;
            } return AWTMouseEvent.MOUSE_WHEEL; }
            getX() {
                return this.x;
            }
            getY() {
                return this.y;
            }
            getClickCount() {
                return 1;
            }
        }
        /**
         * The first number in the range of ids used for mouse events.
         */
        AWTMouseEvent.MOUSE_FIRST = 500;
        /**
         * The last number in the range of ids used for mouse events.
         */
        AWTMouseEvent.MOUSE_LAST = 507;
        /**
         * Indicates no mouse buttons; used by {@link #getButton}.
         * @since 1.4
         */
        AWTMouseEvent.NOBUTTON = 0;
        /**
         * Indicates mouse button #1; used by {@link #getButton}.
         * @since 1.4
         */
        AWTMouseEvent.BUTTON1 = 1;
        /**
         * Indicates mouse button #2; used by {@link #getButton}.
         * @since 1.4
         */
        AWTMouseEvent.BUTTON2 = 2;
        /**
         * Indicates mouse button #3; used by {@link #getButton}.
         * @since 1.4
         */
        AWTMouseEvent.BUTTON3 = 3;
        shikhar.AWTMouseEvent = AWTMouseEvent;
        AWTMouseEvent["__class"] = "org.shikhar.AWTMouseEvent";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=AWTMouseEvent.js.map