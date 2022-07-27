/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Create new Empty Image of zero width and zero height
         * @see {@link #src} property of image to load image into it
         * @class
         * @extends HTMLImageElement
         * @author Mahesh kurmi
         */
        class Image extends HTMLImageElement {
            constructor() {
                super();
            }
            static createImage(src) {
                const img = new Image();
                img.src = src;
                return img;
            }
            /**
             * Returns the width in pixels of the image
             * @return {number} the width in pixels of the image
             */
            getWidth() {
                return (this.width | 0);
            }
            /**
             * Returns the height in pixels of the image
             * @return {number} the height in pixels of the image
             */
            getHeight() {
                return (this.height | 0);
            }
            getName() {
                return this.src;
            }
            getScaledWidth() {
                return (this.width | 0);
            }
            getScaledHeight() {
                return (this.height | 0);
            }
        }
        shikhar.Image = Image;
        Image["__class"] = "org.shikhar.Image";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Image.js.map