/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Constructs a new Color with all components set to 0.
         * @param {number} red
         * @param {number} green
         * @param {number} blue
         * @param {number} alpha
         * @class
         */
        class Color {
            constructor(red, green, blue, alpha) {
                if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && ((typeof alpha === 'number') || alpha === null)) {
                    let __args = arguments;
                    if (this.r === undefined) {
                        this.r = 0;
                    }
                    if (this.g === undefined) {
                        this.g = 0;
                    }
                    if (this.b === undefined) {
                        this.b = 0;
                    }
                    if (this.color === undefined) {
                        this.color = null;
                    }
                    this.a = 1;
                    this.FACTOR = 1.1;
                    this.r = red;
                    this.g = green;
                    this.b = blue;
                    this.a = alpha;
                    this.color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
                }
                else if (((typeof red === 'string') || red === null) && green === undefined && blue === undefined && alpha === undefined) {
                    let __args = arguments;
                    let cssColor = __args[0];
                    if (this.r === undefined) {
                        this.r = 0;
                    }
                    if (this.g === undefined) {
                        this.g = 0;
                    }
                    if (this.b === undefined) {
                        this.b = 0;
                    }
                    if (this.color === undefined) {
                        this.color = null;
                    }
                    this.a = 1;
                    this.FACTOR = 1.1;
                    this.color = cssColor;
                }
                else if (((typeof red === 'number') || red === null) && green === undefined && blue === undefined && alpha === undefined) {
                    let __args = arguments;
                    let rgba8888 = __args[0];
                    if (this.r === undefined) {
                        this.r = 0;
                    }
                    if (this.g === undefined) {
                        this.g = 0;
                    }
                    if (this.b === undefined) {
                        this.b = 0;
                    }
                    if (this.color === undefined) {
                        this.color = null;
                    }
                    this.a = 1;
                    this.FACTOR = 1.1;
                    this.r = ((rgba8888 & -16777216) >>> 24);
                    this.g = ((rgba8888 & 16711680) >>> 16);
                    this.b = ((rgba8888 & 65280) >>> 8);
                    this.a = Math.fround(((rgba8888 & 255)) / 255.0);
                    this.color = "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
                }
                else
                    throw new Error('invalid overload');
            }
            brighter() {
                if (this.r === 255 && this.g === 255 && this.b === 255) {
                    return new Color(255, 255, 255, this.a);
                }
                let r = ((this.r * this.FACTOR) | 0);
                let g = ((this.g * this.FACTOR) | 0);
                let b = ((this.b * this.FACTOR) | 0);
                if (r > 255)
                    r = 255;
                if (g > 255)
                    g = 255;
                if (b > 255)
                    b = 255;
                return new Color(r, g, b, this.a);
            }
            darker() {
                if (this.r === 0 && this.g === 0 && this.b === 0) {
                    return new Color(0, 0, 0, this.a);
                }
                const r = ((this.r / this.FACTOR) | 0);
                const g = ((this.g / this.FACTOR) | 0);
                const b = ((this.b / this.FACTOR) | 0);
                return new Color(r, g, b, this.a);
            }
            /**
             * Returns the color encoded as hex string with the format RRGGBBAA.
             * @return {string}
             */
            toString() {
                return this.color;
            }
            static blendColors(c1, c2, f) {
                const c = new Color(((Math.fround(Math.fround(c1.r * (Math.fround(1 - f))) + Math.fround(c2.r * (f)))) | 0), ((Math.fround(Math.fround(c1.r * (Math.fround(1 - f))) + Math.fround(c2.r * (f)))) | 0), ((Math.fround(Math.fround(c1.r * (Math.fround(1 - f))) + Math.fround(c2.r * (f)))) | 0), (Math.fround(Math.fround(c1.a * (Math.fround(1 - f))) + Math.fround(c2.a * (f)))));
                return c;
            }
        }
        shikhar.Color = Color;
        Color["__class"] = "org.shikhar.Color";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Color.js.map