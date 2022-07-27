/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Creates a {@link Vector2} from the first point to the second point.
         * @param {number} x1 the x coordinate of the first point
         * @param {number} y1 the y coordinate of the first point
         * @param {number} x2 the x coordinate of the second point
         * @param {number} y2 the y coordinate of the second point
         * @class
         * @author William Bittle
         */
        class Vector2 {
            constructor(x1, y1, x2, y2) {
                if (((typeof x1 === 'number') || x1 === null) && ((typeof y1 === 'number') || y1 === null) && ((typeof x2 === 'number') || x2 === null) && ((typeof y2 === 'number') || y2 === null)) {
                    let __args = arguments;
                    if (this.x === undefined) {
                        this.x = 0;
                    }
                    if (this.y === undefined) {
                        this.y = 0;
                    }
                    this.x = x2 - x1;
                    this.y = y2 - y1;
                }
                else if (((x1 != null && x1 instanceof org.shikhar.Vector2) || x1 === null) && ((y1 != null && y1 instanceof org.shikhar.Vector2) || y1 === null) && x2 === undefined && y2 === undefined) {
                    let __args = arguments;
                    let p1 = __args[0];
                    let p2 = __args[1];
                    if (this.x === undefined) {
                        this.x = 0;
                    }
                    if (this.y === undefined) {
                        this.y = 0;
                    }
                    this.x = p2.x - p1.x;
                    this.y = p2.y - p1.y;
                }
                else if (((typeof x1 === 'number') || x1 === null) && ((typeof y1 === 'number') || y1 === null) && x2 === undefined && y2 === undefined) {
                    let __args = arguments;
                    let x = __args[0];
                    let y = __args[1];
                    if (this.x === undefined) {
                        this.x = 0;
                    }
                    if (this.y === undefined) {
                        this.y = 0;
                    }
                    this.x = x;
                    this.y = y;
                }
                else if (((x1 != null && x1 instanceof org.shikhar.Vector2) || x1 === null) && y1 === undefined && x2 === undefined && y2 === undefined) {
                    let __args = arguments;
                    let vector = __args[0];
                    if (this.x === undefined) {
                        this.x = 0;
                    }
                    if (this.y === undefined) {
                        this.y = 0;
                    }
                    this.x = vector.x;
                    this.y = vector.y;
                }
                else if (((typeof x1 === 'number') || x1 === null) && y1 === undefined && x2 === undefined && y2 === undefined) {
                    let __args = arguments;
                    let direction = __args[0];
                    if (this.x === undefined) {
                        this.x = 0;
                    }
                    if (this.y === undefined) {
                        this.y = 0;
                    }
                    this.x = Math.cos(direction);
                    this.y = Math.sin(direction);
                }
                else if (x1 === undefined && y1 === undefined && x2 === undefined && y2 === undefined) {
                    let __args = arguments;
                    if (this.x === undefined) {
                        this.x = 0;
                    }
                    if (this.y === undefined) {
                        this.y = 0;
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            static X_AXIS_$LI$() { if (Vector2.X_AXIS == null) {
                Vector2.X_AXIS = new Vector2(1.0, 0.0);
            } return Vector2.X_AXIS; }
            static Y_AXIS_$LI$() { if (Vector2.Y_AXIS == null) {
                Vector2.Y_AXIS = new Vector2(0.0, 1.0);
            } return Vector2.Y_AXIS; }
            static INV_X_AXIS_$LI$() { if (Vector2.INV_X_AXIS == null) {
                Vector2.INV_X_AXIS = new Vector2(-1.0, 0.0);
            } return Vector2.INV_X_AXIS; }
            static INV_Y_AXIS_$LI$() { if (Vector2.INV_Y_AXIS == null) {
                Vector2.INV_Y_AXIS = new Vector2(0.0, -1.0);
            } return Vector2.INV_Y_AXIS; }
            /**
             * Returns true if Vectors are very Close to each other
             * @param Vetor2 v
             * @return
             * @param {org.shikhar.Vector2} v
             * @return {boolean}
             */
            approxEqual(v) {
                return Math.abs(this.x - v.x) < org.shikhar.Epsilon.E_$LI$() && Math.abs(this.y - v.y) < org.shikhar.Epsilon.E_$LI$();
            }
            /**
             * Returns true if Vector is very Close to specified coordinates
             * @param {number} x
             * @param {number} y
             * @return
             * @return {boolean}
             */
            approxEquals(x, y) {
                return Math.abs(this.x - x) < org.shikhar.Epsilon.E_$LI$() && Math.abs(this.y - y) < org.shikhar.Epsilon.E_$LI$();
            }
            /**
             * Returns a new {@link Vector2} given the magnitude and direction.
             * @param {number} magnitude the magnitude of the {@link Vector2}
             * @param {number} direction the direction of the {@link Vector2} in radians
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            static create(magnitude, direction) {
                const x = magnitude * Math.cos(direction);
                const y = magnitude * Math.sin(direction);
                return new Vector2(x, y);
            }
            /**
             * Returns a copy of this {@link Vector2}.
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            copy() {
                return new Vector2(this.x, this.y);
            }
            distance$double$double(x, y) {
                const dx = this.x - x;
                const dy = this.y - y;
                return Math.sqrt(dx * dx + dy * dy);
            }
            /**
             * Returns the distance from this point to the given point.
             * @param {number} x the x coordinate of the point
             * @param {number} y the y coordinate of the point
             * @return {number} double
             */
            distance(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.distance$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.distance$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            distance$org_shikhar_Vector2(point) {
                const dx = this.x - point.x;
                const dy = this.y - point.y;
                return Math.sqrt(dx * dx + dy * dy);
            }
            distanceSquared$double$double(x, y) {
                const dx = this.x - x;
                const dy = this.y - y;
                return dx * dx + dy * dy;
            }
            /**
             * Returns the distance from this point to the given point squared.
             * @param {number} x the x coordinate of the point
             * @param {number} y the y coordinate of the point
             * @return {number} double
             */
            distanceSquared(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.distanceSquared$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.distanceSquared$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            distanceSquared$org_shikhar_Vector2(point) {
                const dx = this.x - point.x;
                const dy = this.y - point.y;
                return dx * dx + dy * dy;
            }
            /**
             * The triple product of {@link Vector2}s is defined as:
             * <pre>
             * a x (b x c)
             * </pre>
             * However, this method performs the following triple product:
             * <pre>
             * (a x b) x c
             * </pre>
             * this can be simplified to:
             * <pre>
             * -a * (b &middot; c) + b * (a &middot; c)
             * </pre>
             * or:
             * <pre>
             * b * (a &middot; c) - a * (b &middot; c)
             * </pre>
             * @param {org.shikhar.Vector2} a the a {@link Vector2} in the above equation
             * @param {org.shikhar.Vector2} b the b {@link Vector2} in the above equation
             * @param {org.shikhar.Vector2} c the c {@link Vector2} in the above equation
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            static tripleProduct(a, b, c) {
                const r = new Vector2();
                const ac = a.x * c.x + a.y * c.y;
                const bc = b.x * c.x + b.y * c.y;
                r.x = b.x * ac - a.x * bc;
                r.y = b.y * ac - a.y * bc;
                return r;
            }
            /**
             *
             * @return {number}
             */
            hashCode() {
                const prime = 31;
                let result = 1;
                let temp;
                temp = javaemul.internal.DoubleHelper.doubleToLongBits(this.x);
                result = prime * result + ((temp ^ (temp >>> 32)) | 0);
                temp = javaemul.internal.DoubleHelper.doubleToLongBits(this.y);
                result = prime * result + ((temp ^ (temp >>> 32)) | 0);
                return result;
            }
            equals$java_lang_Object(obj) {
                if (obj == null)
                    return false;
                if (obj === this)
                    return true;
                if (obj != null && obj instanceof org.shikhar.Vector2) {
                    const vector = obj;
                    return this.x === vector.x && this.y === vector.y;
                }
                return false;
            }
            equals$org_shikhar_Vector2(vector) {
                if (vector == null)
                    return false;
                if (this === vector) {
                    return true;
                }
                else {
                    return this.x === vector.x && this.y === vector.y;
                }
            }
            equals$double$double(x, y) {
                return this.x === x && this.y === y;
            }
            /**
             * Returns true if the x and y components of this {@link Vector2}
             * are the same as the given x and y components.
             * @param {number} x the x coordinate of the {@link Vector2} to compare to
             * @param {number} y the y coordinate of the {@link Vector2} to compare to
             * @return {boolean} boolean
             */
            equals(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.equals$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.equals$org_shikhar_Vector2(x);
                }
                else if (((x != null) || x === null) && y === undefined) {
                    return this.equals$java_lang_Object(x);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             *
             * @return {string}
             */
            toString() {
                const sb = new java.lang.StringBuilder();
                sb.append("(").append(this.x).append(", ").append(this.y).append(")");
                return sb.toString();
            }
            set$org_shikhar_Vector2(vector) {
                this.x = vector.x;
                this.y = vector.y;
                return this;
            }
            set$double$double(x, y) {
                this.x = x;
                this.y = y;
                return this;
            }
            /**
             * Sets this {@link Vector2} to the given {@link Vector2}.
             * @param {number} x the x component of the {@link Vector2} to set this {@link Vector2} to
             * @param {number} y the y component of the {@link Vector2} to set this {@link Vector2} to
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             */
            set(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.set$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.set$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Returns the x component of this {@link Vector2}.
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            getXComponent() {
                return new Vector2(this.x, 0.0);
            }
            /**
             * Returns the y component of this {@link Vector2}.
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            getYComponent() {
                return new Vector2(0.0, this.y);
            }
            /**
             * Returns the magnitude of this {@link Vector2}.
             * @return {number} double
             */
            getMagnitude() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            }
            /**
             * Returns the magnitude of this {@link Vector2} squared.
             * @return {number} double
             */
            getMagnitudeSquared() {
                return this.x * this.x + this.y * this.y;
            }
            /**
             * Sets the magnitude of the {@link Vector2}.
             * @param {number} magnitude the magnitude
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             */
            setMagnitude(magnitude) {
                if (Math.abs(magnitude) <= org.shikhar.Epsilon.E_$LI$()) {
                    this.x = 0.0;
                    this.y = 0.0;
                    return this;
                }
                if (this.isZero()) {
                    return this;
                }
                let mag = Math.sqrt(this.x * this.x + this.y * this.y);
                mag = magnitude / mag;
                this.x *= mag;
                this.y *= mag;
                return this;
            }
            /**
             * Returns the angle of this {@link Vector2} with +ve x axis
             * as an angle in radians.
             * @return {number} double angle in radians [0, 2*&pi;]
             */
            getAngleWithPositiveXAxis() {
                let theta = Math.atan2(this.y, this.x);
                if (theta < 0)
                    theta += Math.PI * 2;
                return theta;
            }
            /**
             * Returns the direction of this {@link Vector2}
             * as an angle in radians.
             * @return {number} double angle in radians [-&pi;, &pi;]
             */
            getDirection() {
                return Math.atan2(this.y, this.x);
            }
            /**
             * Sets the direction of this {@link Vector2}.
             * @param {number} angle angle in radians
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             */
            setDirection(angle) {
                const magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
                this.x = magnitude * Math.cos(angle);
                this.y = magnitude * Math.sin(angle);
                return this;
            }
            add$org_shikhar_Vector2(vector) {
                this.x += vector.x;
                this.y += vector.y;
                return this;
            }
            add$double$double(x, y) {
                this.x += x;
                this.y += y;
                return this;
            }
            /**
             * Adds the given {@link Vector2} to this {@link Vector2}.
             * @param {number} x the x component of the {@link Vector2}
             * @param {number} y the y component of the {@link Vector2}
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             */
            add(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.add$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.add$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            sum$org_shikhar_Vector2(vector) {
                return new Vector2(this.x + vector.x, this.y + vector.y);
            }
            sum$double$double(x, y) {
                return new Vector2(this.x + x, this.y + y);
            }
            /**
             * Adds this {@link Vector2} and the given {@link Vector2} returning
             * a new {@link Vector2} containing the result.
             * @param {number} x the x component of the {@link Vector2}
             * @param {number} y the y component of the {@link Vector2}
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            sum(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.sum$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.sum$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            subtract$org_shikhar_Vector2(vector) {
                this.x -= vector.x;
                this.y -= vector.y;
                return this;
            }
            subtract$double$double(x, y) {
                this.x -= x;
                this.y -= y;
                return this;
            }
            /**
             * Subtracts the given {@link Vector2} from this {@link Vector2}.
             * @param {number} x the x component of the {@link Vector2}
             * @param {number} y the y component of the {@link Vector2}
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             */
            subtract(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.subtract$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.subtract$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            difference$org_shikhar_Vector2(vector) {
                return new Vector2(this.x - vector.x, this.y - vector.y);
            }
            difference$double$double(x, y) {
                return new Vector2(this.x - x, this.y - y);
            }
            /**
             * Subtracts the given {@link Vector2} from this {@link Vector2} returning
             * a new {@link Vector2} containing the result.
             * @param {number} x the x component of the {@link Vector2}
             * @param {number} y the y component of the {@link Vector2}
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            difference(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.difference$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.difference$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            to$org_shikhar_Vector2(vector) {
                return new Vector2(vector.x - this.x, vector.y - this.y);
            }
            to$double$double(x, y) {
                return new Vector2(x - this.x, y - this.y);
            }
            /**
             * Creates a {@link Vector2} from this {@link Vector2} to the given {@link Vector2}.
             * @param {number} x the x component of the {@link Vector2}
             * @param {number} y the y component of the {@link Vector2}
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            to(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.to$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.to$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Multiplies this {@link Vector2} by the given scalar.
             * @param {number} scalar the scalar
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             */
            multiply(scalar) {
                this.x *= scalar;
                this.y *= scalar;
                return this;
            }
            /**
             * Divides this {@link Vector2} by the given scalar.
             * @param {number} scalar the scalar
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             * @since 3.4.0
             */
            divide(scalar) {
                this.x /= scalar;
                this.y /= scalar;
                return this;
            }
            /**
             * Multiplies this {@link Vector2} by the given scalar returning
             * a new {@link Vector2} containing the result.
             * @param {number} scalar the scalar
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            product(scalar) {
                return new Vector2(this.x * scalar, this.y * scalar);
            }
            /**
             * Divides this {@link Vector2} by the given scalar returning
             * a new {@link Vector2} containing the result.
             * @param {number} scalar the scalar
             * @return {org.shikhar.Vector2} {@link Vector2}
             * @since 3.4.0
             */
            quotient(scalar) {
                return new Vector2(this.x / scalar, this.y / scalar);
            }
            /**
             * Adds scale times specified vector to this vector
             * @param {number} scale
             * @param {org.shikhar.Vector2} vec Vector to add after scaling
             * @return {org.shikhar.Vector2} this Vector
             */
            addScaled(scale, vec) {
                this.x += scale * vec.x;
                this.y += scale * vec.y;
                return this;
            }
            dot$org_shikhar_Vector2(vector) {
                return this.x * vector.x + this.y * vector.y;
            }
            dot$double$double(x, y) {
                return this.x * x + this.y * y;
            }
            /**
             * Returns the dot product of the given {@link Vector2}
             * and this {@link Vector2}.
             * @param {number} x the x component of the {@link Vector2}
             * @param {number} y the y component of the {@link Vector2}
             * @return {number} double
             */
            dot(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.dot$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.dot$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            cross$org_shikhar_Vector2(vector) {
                return this.x * vector.y - this.y * vector.x;
            }
            cross$double$double(x, y) {
                return this.x * y - this.y * x;
            }
            /**
             * Returns the cross product of the this {@link Vector2} and the given {@link Vector2}.
             * @param {number} x the x component of the {@link Vector2}
             * @param {number} y the y component of the {@link Vector2}
             * @return {number} double
             */
            cross(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.cross$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.cross$org_shikhar_Vector2(x);
                }
                else if (((typeof x === 'number') || x === null) && y === undefined) {
                    return this.cross$double(x);
                }
                else
                    throw new Error('invalid overload');
            }
            cross$double(z) {
                return new Vector2(-this.y * z, this.x * z);
            }
            isOrthogonal$org_shikhar_Vector2(vector) {
                return Math.abs(this.x * vector.x + this.y * vector.y) <= org.shikhar.Epsilon.E_$LI$() ? true : false;
            }
            isOrthogonal$double$double(x, y) {
                return Math.abs(this.x * x + this.y * y) <= org.shikhar.Epsilon.E_$LI$() ? true : false;
            }
            /**
             * Returns true if the given {@link Vector2} is orthogonal (perpendicular)
             * to this {@link Vector2}.
             * <p>
             * If the dot product of this vector and the given vector is
             * zero then we know that they are perpendicular
             * @param {number} x the x component of the {@link Vector2}
             * @param {number} y the y component of the {@link Vector2}
             * @return {boolean} boolean
             */
            isOrthogonal(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.isOrthogonal$double$double(x, y);
                }
                else if (((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.isOrthogonal$org_shikhar_Vector2(x);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Returns true if this {@link Vector2} is the zero {@link Vector2}.
             * @return {boolean} boolean
             */
            isZero() {
                return Math.abs(this.x) <= org.shikhar.Epsilon.E_$LI$() && Math.abs(this.y) <= org.shikhar.Epsilon.E_$LI$();
            }
            /**
             *
             * Negates this {@link Vector2}.
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             */
            negate() {
                this.x *= -1.0;
                this.y *= -1.0;
                return this;
            }
            /**
             * Returns a {@link Vector2} which is the negative of this {@link Vector2}.
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            getNegative() {
                return new Vector2(-this.x, -this.y);
            }
            /**
             *
             * Sets the {@link Vector2} to the zero {@link Vector2}
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             */
            zero() {
                this.x = 0.0;
                this.y = 0.0;
                return this;
            }
            /**
             * returns new vector by Rotating this veector about the origin
             * @param {number} theta the rotation angle in radians
             * @return {org.shikhar.Vector2} {@link Vector2} new vector
             */
            getRotated(theta) {
                const cos = Math.cos(theta);
                const sin = Math.sin(theta);
                const x = this.x;
                const y = this.y;
                return new Vector2(x * cos - y * sin, x * sin + y * cos);
            }
            rotate$double(theta) {
                const cos = Math.cos(theta);
                const sin = Math.sin(theta);
                const x = this.x;
                const y = this.y;
                this.x = x * cos - y * sin;
                this.y = x * sin + y * cos;
                return this;
            }
            rotate$double$double$double(theta, x, y) {
                this.x -= x;
                this.y -= y;
                this.rotate$double(theta);
                this.x += x;
                this.y += y;
                return this;
            }
            rotate$double$double(cos, sin) {
                const x = this.x;
                const y = this.y;
                this.x = x * cos - y * sin;
                this.y = x * sin + y * cos;
                return this;
            }
            rotate$org_shikhar_Rotation(rotation) {
                return this.rotate$double$double(rotation.cost, rotation.sint);
            }
            inverseRotate$double(theta) {
                return this.rotate$double$double(Math.cos(theta), -Math.sin(theta));
            }
            inverseRotate$org_shikhar_Rotation(rotation) {
                return this.rotate$double$double(rotation.cost, -rotation.sint);
            }
            rotate$double$double$double$double(cos, sin, x, y) {
                const tx = (this.x - x);
                const ty = (this.y - y);
                this.x = tx * cos - ty * sin + x;
                this.y = tx * sin + ty * cos + y;
                return this;
            }
            /**
             * Internal helper method that rotates about the given coordinates by an angle &theta;.
             * @param {number} cos cos(&theta;)
             * @param {number} sin sin(&theta;)
             * @param {number} x the x coordinate to rotate about
             * @param {number} y the y coordinate to rotate about
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             * @since 3.4.0
             */
            rotate(cos, sin, x, y) {
                if (((typeof cos === 'number') || cos === null) && ((typeof sin === 'number') || sin === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.rotate$double$double$double$double(cos, sin, x, y);
                }
                else if (((cos != null && cos instanceof org.shikhar.Rotation) || cos === null) && ((typeof sin === 'number') || sin === null) && ((typeof x === 'number') || x === null) && y === undefined) {
                    return this.rotate$org_shikhar_Rotation$double$double(cos, sin, x);
                }
                else if (((typeof cos === 'number') || cos === null) && ((typeof sin === 'number') || sin === null) && ((typeof x === 'number') || x === null) && y === undefined) {
                    return this.rotate$double$double$double(cos, sin, x);
                }
                else if (((cos != null && cos instanceof org.shikhar.Rotation) || cos === null) && ((sin != null && sin instanceof org.shikhar.Vector2) || sin === null) && x === undefined && y === undefined) {
                    return this.rotate$org_shikhar_Rotation$org_shikhar_Vector2(cos, sin);
                }
                else if (((typeof cos === 'number') || cos === null) && ((sin != null && sin instanceof org.shikhar.Vector2) || sin === null) && x === undefined && y === undefined) {
                    return this.rotate$double$org_shikhar_Vector2(cos, sin);
                }
                else if (((typeof cos === 'number') || cos === null) && ((typeof sin === 'number') || sin === null) && x === undefined && y === undefined) {
                    return this.rotate$double$double(cos, sin);
                }
                else if (((cos != null && cos instanceof org.shikhar.Rotation) || cos === null) && sin === undefined && x === undefined && y === undefined) {
                    return this.rotate$org_shikhar_Rotation(cos);
                }
                else if (((typeof cos === 'number') || cos === null) && sin === undefined && x === undefined && y === undefined) {
                    return this.rotate$double(cos);
                }
                else
                    throw new Error('invalid overload');
            }
            rotate$org_shikhar_Rotation$double$double(rotation, x, y) {
                return this.rotate$double$double$double$double(rotation.cost, rotation.sint, x, y);
            }
            inverseRotate$double$double$double(theta, x, y) {
                return this.rotate$double$double$double$double(Math.cos(theta), -Math.sin(theta), x, y);
            }
            inverseRotate$org_shikhar_Rotation$double$double(rotation, x, y) {
                return this.rotate$double$double$double$double(rotation.cost, -rotation.sint, x, y);
            }
            /**
             * Rotates about the given coordinates by the inverse angle -&thetasym;.
             * @param {org.shikhar.Rotation} rotation the {@link Rotation}
             * @param {number} x the x coordinate to rotate about
             * @param {number} y the y coordinate to rotate about
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             * @since 3.4.0
             */
            inverseRotate(rotation, x, y) {
                if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.inverseRotate$org_shikhar_Rotation$double$double(rotation, x, y);
                }
                else if (((typeof rotation === 'number') || rotation === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.inverseRotate$double$double$double(rotation, x, y);
                }
                else if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null) && ((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.inverseRotate$org_shikhar_Rotation$org_shikhar_Vector2(rotation, x);
                }
                else if (((typeof rotation === 'number') || rotation === null) && ((x != null && x instanceof org.shikhar.Vector2) || x === null) && y === undefined) {
                    return this.inverseRotate$double$org_shikhar_Vector2(rotation, x);
                }
                else if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null) && x === undefined && y === undefined) {
                    return this.inverseRotate$org_shikhar_Rotation(rotation);
                }
                else if (((typeof rotation === 'number') || rotation === null) && x === undefined && y === undefined) {
                    return this.inverseRotate$double(rotation);
                }
                else
                    throw new Error('invalid overload');
            }
            rotate$double$org_shikhar_Vector2(theta, point) {
                return this.rotate$double$double$double(theta, point.x, point.y);
            }
            rotate$org_shikhar_Rotation$org_shikhar_Vector2(rotation, point) {
                return this.rotate$org_shikhar_Rotation$double$double(rotation, point.x, point.y);
            }
            inverseRotate$double$org_shikhar_Vector2(theta, point) {
                return this.inverseRotate$double$double$double(theta, point.x, point.y);
            }
            inverseRotate$org_shikhar_Rotation$org_shikhar_Vector2(rotation, point) {
                return this.inverseRotate$org_shikhar_Rotation$double$double(rotation, point.x, point.y);
            }
            /**
             * Projects this {@link Vector2} onto the given {@link Vector2}.
             * @param {org.shikhar.Vector2} vector the {@link Vector2}
             * @return {org.shikhar.Vector2} {@link Vector2} the projected {@link Vector2}
             */
            project(vector) {
                const dotProd = this.dot$org_shikhar_Vector2(vector);
                let denominator = vector.dot$org_shikhar_Vector2(vector);
                if (denominator <= org.shikhar.Epsilon.E_$LI$())
                    return new Vector2();
                denominator = dotProd / denominator;
                return new Vector2(denominator * vector.x, denominator * vector.y);
            }
            /**
             * Returns the right-handed normal of this vector.
             * @return {org.shikhar.Vector2} {@link Vector2} the right hand orthogonal {@link Vector2}
             */
            getRightHandOrthogonalVector() {
                return new Vector2(-this.y, this.x);
            }
            /**
             * Sets this vector to the right-handed normal of this vector.
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             * @see #getRightHandOrthogonalVector()
             */
            right() {
                const temp = this.x;
                this.x = -this.y;
                this.y = temp;
                return this;
            }
            /**
             * Returns the left-handed normal of this vector.
             * @return {org.shikhar.Vector2} {@link Vector2} the left hand orthogonal {@link Vector2}
             */
            getLeftHandOrthogonalVector() {
                return new Vector2(this.y, -this.x);
            }
            /**
             * Sets this vector to the left-handed normal of this vector.
             * @return {org.shikhar.Vector2} {@link Vector2} this vector
             * @see #getLeftHandOrthogonalVector()
             */
            left() {
                const temp = this.x;
                this.x = this.y;
                this.y = -temp;
                return this;
            }
            /**
             * Returns a unit {@link Vector2} of this {@link Vector2}.
             * <p>
             * This method requires the length of this {@link Vector2} is not zero.
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            getNormalized() {
                let magnitude = this.getMagnitude();
                if (magnitude <= org.shikhar.Epsilon.E_$LI$())
                    return new Vector2();
                magnitude = 1.0 / magnitude;
                return new Vector2(this.x * magnitude, this.y * magnitude);
            }
            /**
             * Converts this {@link Vector2} into a unit {@link Vector2} and returns
             * the magnitude before normalization.
             * <p>
             * This method requires the length of this {@link Vector2} is not zero.
             * @return {number} double
             */
            normalize() {
                const magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
                if (magnitude <= org.shikhar.Epsilon.E_$LI$())
                    return 0;
                const m = 1.0 / magnitude;
                this.x *= m;
                this.y *= m;
                return magnitude;
            }
            getAngleBetween$org_shikhar_Vector2(vector) {
                const a = Math.atan2(vector.y, vector.x) - Math.atan2(this.y, this.x);
                if (a > Math.PI)
                    return a - Math.PI * 2;
                if (a < -Math.PI)
                    return a + Math.PI * 2;
                return a;
            }
            /**
             * Returns the smallest angle between the given {@link Vector2}s.
             * <p>
             * Returns the angle in radians in the range -&pi; to &pi;.
             * @param {org.shikhar.Vector2} vector the {@link Vector2}
             * @return {number} angle in radians [-&pi;, &pi;]
             */
            getAngleBetween(vector) {
                if (((vector != null && vector instanceof org.shikhar.Vector2) || vector === null)) {
                    return this.getAngleBetween$org_shikhar_Vector2(vector);
                }
                else if (((typeof vector === 'number') || vector === null)) {
                    return this.getAngleBetween$double(vector);
                }
                else
                    throw new Error('invalid overload');
            }
            getAngleBetween$double(otherAngle) {
                const a = otherAngle - Math.atan2(this.y, this.x);
                if (a > Math.PI)
                    return a - Math.PI * 2;
                if (a < -Math.PI)
                    return a + Math.PI * 2;
                return a;
            }
            /**
             * returns Vector2 with minimum coordinates (bottom left of surrounding rect)
             * @param {org.shikhar.Vector2} a
             * @param {org.shikhar.Vector2} b
             * @param {org.shikhar.Vector2} out
             */
            static minToOut(a, b, out) {
                out.x = a.x < b.x ? a.x : b.x;
                out.y = a.y < b.y ? a.y : b.y;
            }
            /**
             * returns Vector2 with maximum coordinates(top right of surrounding rect)
             * @param {org.shikhar.Vector2} a
             * @param {org.shikhar.Vector2} b
             * @param {org.shikhar.Vector2} out
             */
            static maxToOut(a, b, out) {
                out.x = a.x > b.x ? a.x : b.x;
                out.y = a.y > b.y ? a.y : b.y;
            }
            /**
             * Returns mid point of 2 points
             * @param {org.shikhar.Vector2} v1
             * @param {org.shikhar.Vector2} v2
             * @return
             * @return {org.shikhar.Vector2}
             */
            static midPoint(v1, v2) {
                return new Vector2(0.5 * (v1.x + v2.x), 0.5 * (v1.y + v2.y));
            }
            /**
             * Tests if the three points are colinear.
             *
             * @return {boolean} true if three points lie on the same line.
             * @param {org.shikhar.Vector2} p1
             * @param {org.shikhar.Vector2} p2
             * @param {org.shikhar.Vector2} p3
             */
            static isCollinear(p1, p2, p3) {
                let dx1;
                let dx2;
                let dy1;
                let dy2;
                dx1 = p2.x - p1.x;
                dy1 = p2.y - p1.y;
                dx2 = p3.x - p1.x;
                dy2 = p3.y - p1.y;
                return Math.abs(dx1 * dy2 - dy1 * dx2) < org.shikhar.Epsilon.E_$LI$();
            }
            /**
             * Computes the orientation of the 3 points: returns +1 is the path
             * P0->P1->P2 turns Counter-Clockwise, -1 if the path turns Clockwise, and 0
             * if the point P2 is located on the line segment [P0 P1]. Algorithm taken
             * from Sedgewick.
             *
             * @param {org.shikhar.Vector2} p0 the initial point
             * @param {org.shikhar.Vector2} p1 the middle point
             * @param {org.shikhar.Vector2} p2 the last point
             * @return {number} +1, 0 or -1, depending on the relative position of the points
             */
            static ccw(p0, p1, p2) {
                const x0 = p0.x;
                const y0 = p0.y;
                const dx1 = p1.x - x0;
                const dy1 = p1.y - y0;
                const dx2 = p2.x - x0;
                const dy2 = p2.y - y0;
                if (dx1 * dy2 > dy1 * dx2)
                    return +1;
                if (dx1 * dy2 < dy1 * dx2)
                    return -1;
                if ((dx1 * dx2 < 0) || (dy1 * dy2 < 0))
                    return -1;
                if ((dx1 * dx1 + dy1 * dy1) < (dx2 * dx2 + dy2 * dy2))
                    return +1;
                return 0;
            }
            static centroid$org_shikhar_Vector2_A(points) {
                const n = points.length;
                let sx = 0;
                let sy = 0;
                for (let i = 0; i < n; i++) {
                    {
                        sx += points[i].x;
                        sy += points[i].y;
                    }
                    ;
                }
                return new Vector2(sx / n, sy / n);
            }
            static centroid$org_shikhar_Vector2_A$double_A(points, weights) {
                const n = points.length;
                if (n !== weights.length) {
                    throw new java.lang.RuntimeException("Arrays must have the same size");
                }
                let sx = 0;
                let sy = 0;
                let sw = 0;
                let w;
                for (let i = 0; i < n; i++) {
                    {
                        w = weights[i];
                        sx += points[i].x * w;
                        sy += points[i].y * w;
                        sw += w;
                    }
                    ;
                }
                return new Vector2(sx / sw, sy / sw);
            }
            /**
             * Computes the weighted centroid, or center of mass, of an array of points.
             *
             * @param {org.shikhar.Vector2[]} points an array of points
             * @param {double[]} weights an array of weights the same size as points
             * @return {org.shikhar.Vector2} the centroid of the points
             */
            static centroid(points, weights) {
                if (((points != null && points instanceof Array && (points.length == 0 || points[0] == null || (points[0] != null && points[0] instanceof org.shikhar.Vector2))) || points === null) && ((weights != null && weights instanceof Array && (weights.length == 0 || weights[0] == null || (typeof weights[0] === 'number'))) || weights === null)) {
                    return org.shikhar.Vector2.centroid$org_shikhar_Vector2_A$double_A(points, weights);
                }
                else if (((points != null && points instanceof Array && (points.length == 0 || points[0] == null || (points[0] != null && points[0] instanceof org.shikhar.Vector2))) || points === null) && weights === undefined) {
                    return org.shikhar.Vector2.centroid$org_shikhar_Vector2_A(points);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * returns closest point among parameters
             * @param {org.shikhar.Vector2[]} pts Points to be checked for
             * @return {org.shikhar.Vector2} closest point
             */
            closestPoint(...pts) {
                let result = pts[0];
                let dist = (this.x - result.x) * (this.x - result.x) + (this.y - result.y) * (this.y - result.y);
                for (let index = 0; index < pts.length; index++) {
                    let p = pts[index];
                    {
                        if (p === result)
                            continue;
                        const d = this.x * p.x + this.y * p.y;
                        if (d < dist) {
                            dist = d;
                            result = p;
                        }
                    }
                }
                return result;
            }
            /**
             * Returns interpolated point
             * @param {org.shikhar.Vector2} p1 first point
             * @param {org.shikhar.Vector2} p2 second point
             * @param {number} k
             * @return {org.shikhar.Vector2} new point divided p1 and p2 in ratio k:1
             */
            static interpolate(p1, p2, k) {
                if (k === javaemul.internal.DoubleHelper.POSITIVE_INFINITY)
                    return p2;
                return new Vector2((p2.x * k + p1.x) / (k + 1), (p2.y * k + p1.y) / (k + 1));
            }
        }
        shikhar.Vector2 = Vector2;
        Vector2["__class"] = "org.shikhar.Vector2";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Vector2.js.map