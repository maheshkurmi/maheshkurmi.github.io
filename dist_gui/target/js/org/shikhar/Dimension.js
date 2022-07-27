/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class Dimension {
            constructor(width, height) {
                if (((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                    let __args = arguments;
                    if (this.width === undefined) {
                        this.width = 0;
                    }
                    if (this.height === undefined) {
                        this.height = 0;
                    }
                    this.width = width;
                    this.height = height;
                }
                else if (((width != null && width instanceof org.shikhar.Dimension) || width === null) && height === undefined) {
                    let __args = arguments;
                    let d = __args[0];
                    if (this.width === undefined) {
                        this.width = 0;
                    }
                    if (this.height === undefined) {
                        this.height = 0;
                    }
                    this.width = d.width;
                    this.height = d.height;
                }
                else if (width === undefined && height === undefined) {
                    let __args = arguments;
                    if (this.width === undefined) {
                        this.width = 0;
                    }
                    if (this.height === undefined) {
                        this.height = 0;
                    }
                    this.width = 0;
                    this.height = 0;
                }
                else
                    throw new Error('invalid overload');
            }
        }
        shikhar.Dimension = Dimension;
        Dimension["__class"] = "org.shikhar.Dimension";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Dimension.js.map