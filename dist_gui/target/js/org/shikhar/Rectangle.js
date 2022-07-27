/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class Rectangle {
            constructor(x, y, width, height) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                    let __args = arguments;
                    if (this.x === undefined) {
                        this.x = 0;
                    }
                    if (this.y === undefined) {
                        this.y = 0;
                    }
                    if (this.width === undefined) {
                        this.width = 0;
                    }
                    if (this.height === undefined) {
                        this.height = 0;
                    }
                    this.x = x;
                    this.y = y;
                    this.width = width;
                    this.height = height;
                }
                else if (x === undefined && y === undefined && width === undefined && height === undefined) {
                    let __args = arguments;
                    if (this.x === undefined) {
                        this.x = 0;
                    }
                    if (this.y === undefined) {
                        this.y = 0;
                    }
                    if (this.width === undefined) {
                        this.width = 0;
                    }
                    if (this.height === undefined) {
                        this.height = 0;
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            set(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                return this;
            }
            /**
             * Computes the intersection of this <code>Rectangle</code> with the
             * specified <code>Rectangle</code> and sets result in this rectangle If the
             * two rectangles do not intersect, the result will be an empty rectangle.
             *
             * @param {number} x
             * top left x coordinate of other rect
             * @param {number} y
             * top left y coordinate of other rect
             * @param {number} width
             * Width of other rect
             * @param {number} height
             * Height coordinate of other rect
             * @return {org.shikhar.Rectangle} this Rectangle for chaining
             */
            intersect(x, y, width, height) {
                let tx1 = this.x;
                let ty1 = this.y;
                const rx1 = x;
                const ry1 = y;
                let tx2 = tx1;
                tx2 += this.width;
                let ty2 = ty1;
                ty2 += this.height;
                let rx2 = rx1;
                rx2 += width;
                let ry2 = ry1;
                ry2 += height;
                if (tx1 < rx1)
                    tx1 = rx1;
                if (ty1 < ry1)
                    ty1 = ry1;
                if (tx2 > rx2)
                    tx2 = rx2;
                if (ty2 > ry2)
                    ty2 = ry2;
                tx2 -= tx1;
                ty2 -= ty1;
                if (tx2 < 0)
                    tx2 = 0;
                if (ty2 < 0)
                    ty2 = 0;
                return this.set(tx1, ty1, tx2, ty2);
            }
            contains$int$int(rx, ry) {
                if ((this.x <= rx) && (this.x + this.width >= rx) && (this.y <= this.y) && (this.y + this.height >= ry))
                    return true;
                return false;
            }
            contains(rx, ry) {
                if (((typeof rx === 'number') || rx === null) && ((typeof ry === 'number') || ry === null)) {
                    return this.contains$int$int(rx, ry);
                }
                else if (((rx != null && rx instanceof org.shikhar.Rectangle) || rx === null) && ry === undefined) {
                    return this.contains$org_shikhar_Rectangle(rx);
                }
                else
                    throw new Error('invalid overload');
            }
            contains$org_shikhar_Rectangle(r) {
                if ((this.x <= r.x) && ((this.x + this.width) >= (r.x + r.width)) && (this.y <= r.y) && ((this.y + this.height) >= (r.y + r.height))) {
                    return true;
                }
                return false;
            }
            toString() {
                return "[" + this.x + "," + this.y + "," + this.width + "," + this.height + "]";
            }
            copy() {
                return new Rectangle().set(this.x, this.y, this.width, this.height);
            }
        }
        shikhar.Rectangle = Rectangle;
        Rectangle["__class"] = "org.shikhar.Rectangle";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Rectangle.js.map