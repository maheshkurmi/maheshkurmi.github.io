/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Creates image with
         * @param {string} src
         * @param {number} width
         * @param {number} height
         * @class
         * @extends HTMLImageElement
         * @author Mahesh kurmi
         */
        class AWTImage extends Image {
            constructor(src, width, height) {
                if (((typeof src === 'string') || src === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        super();
                        if (this.src === undefined) {
                            this.src = null;
                        }
                        if (this.width === undefined) {
                            this.width = 0;
                        }
                        if (this.height === undefined) {
                            this.height = 0;
                        }
                        this.src = src;
                    }
                    if (this.src === undefined) {
                        this.src = null;
                    }
                    if (this.width === undefined) {
                        this.width = 0;
                    }
                    if (this.height === undefined) {
                        this.height = 0;
                    }
                }
                else if (((typeof src === 'string') || src === null) && width === undefined && height === undefined) {
                    let __args = arguments;
                    super();
                    if (this.src === undefined) {
                        this.src = null;
                    }
                    if (this.width === undefined) {
                        this.width = 0;
                    }
                    if (this.height === undefined) {
                        this.height = 0;
                    }
                    this.src = src;
                }
                else
                    throw new Error('invalid overload');
            }
            static createImage(src) {
                const img = new AWTImage(src);
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
        shikhar.AWTImage = AWTImage;
        AWTImage["__class"] = "org.shikhar.AWTImage";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=AWTImage.js.map