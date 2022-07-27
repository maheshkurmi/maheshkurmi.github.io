/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Copy constructor.
         * @param {org.shikhar.Rotation} rotation the {@link Rotation} to copy from
         * @class
         * @author Manolis Tsamis
         */
        class Rotation {
            constructor(cost, sint) {
                if (((typeof cost === 'number') || cost === null) && ((typeof sint === 'number') || sint === null)) {
                    let __args = arguments;
                    if (this.cost === undefined) {
                        this.cost = 0;
                    }
                    if (this.sint === undefined) {
                        this.sint = 0;
                    }
                    this.cost = cost;
                    this.sint = sint;
                }
                else if (((cost != null && cost instanceof org.shikhar.Rotation) || cost === null) && sint === undefined) {
                    let __args = arguments;
                    let rotation = __args[0];
                    if (this.cost === undefined) {
                        this.cost = 0;
                    }
                    if (this.sint === undefined) {
                        this.sint = 0;
                    }
                    this.cost = rotation.cost;
                    this.sint = rotation.sint;
                }
                else if (((typeof cost === 'number') || cost === null) && sint === undefined) {
                    let __args = arguments;
                    let angle = __args[0];
                    if (this.cost === undefined) {
                        this.cost = 0;
                    }
                    if (this.sint === undefined) {
                        this.sint = 0;
                    }
                    this.cost = Math.cos(angle);
                    this.sint = Math.sin(angle);
                }
                else if (cost === undefined && sint === undefined) {
                    let __args = arguments;
                    if (this.cost === undefined) {
                        this.cost = 0;
                    }
                    if (this.sint === undefined) {
                        this.sint = 0;
                    }
                    this.cost = 1.0;
                    this.sint = 0.0;
                }
                else
                    throw new Error('invalid overload');
            }
            static SQRT_2_INV_$LI$() { if (Rotation.SQRT_2_INV == null) {
                Rotation.SQRT_2_INV = 1.0 / Math.sqrt(2);
            } return Rotation.SQRT_2_INV; }
            static of$double(angle) {
                return new Rotation(angle);
            }
            /**
             * Alternative way to create a new {@link Rotation} from a given angle, in degrees.
             * @param {number} angle in degrees
             * @return {org.shikhar.Rotation} A {@link Rotation} for that angle
             */
            static ofDegrees(angle) {
                return new Rotation(/* toRadians */ (x => x * Math.PI / 180)(angle));
            }
            static of$org_shikhar_Vector2(direction) {
                const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
                if (magnitude <= org.shikhar.Epsilon.E_$LI$()) {
                    return new Rotation();
                }
                return new Rotation(direction.x / magnitude, direction.y / magnitude);
            }
            static of$double$double(cost, sint) {
                const magnitude = cost * cost + sint * sint;
                if (Math.abs(magnitude - 1) > org.shikhar.Epsilon.E_$LI$()) {
                    throw new java.lang.IllegalArgumentException(org.shikhar.Messages.getString("geometry.rotation.invalidPoint"));
                }
                return new Rotation(cost, sint);
            }
            /**
             * Static method to create a {@link Rotation} from a pair of values that lie on the unit circle;
             * That is a pair of values (x, y) such that x = cos(&theta;), y = sin(&theta;) for some value &theta;
             * This method is provided for the case where the cos and sin values are already computed and
             * the overhead can be avoided.
             * This method will check whether those values are indeed on the unit circle and otherwise throw an {@link IllegalArgumentException}.
             * @param {number} cost The x value = cos(&theta;)
             * @param {number} sint The y value = sin(&theta;)
             * @throws IllegalArgumentException if (cost, sint) is not on the unit circle
             * @return {org.shikhar.Rotation} A {@link Rotation} defined by (cost, sint)
             */
            static of(cost, sint) {
                if (((typeof cost === 'number') || cost === null) && ((typeof sint === 'number') || sint === null)) {
                    return org.shikhar.Rotation.of$double$double(cost, sint);
                }
                else if (((cost != null && cost instanceof org.shikhar.Vector2) || cost === null) && sint === undefined) {
                    return org.shikhar.Rotation.of$org_shikhar_Vector2(cost);
                }
                else if (((typeof cost === 'number') || cost === null) && sint === undefined) {
                    return org.shikhar.Rotation.of$double(cost);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Creates a new {@link Rotation} of 0 degrees.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            static rotation0() {
                return new Rotation();
            }
            /**
             * Creates a new {@link Rotation} of 90 degrees.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            static rotation90() {
                return new Rotation(0.0, 1.0);
            }
            /**
             * Creates a new {@link Rotation} of 180 degrees.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            static rotation180() {
                return new Rotation(-1.0, 0.0);
            }
            /**
             * Creates a new {@link Rotation} of 270 degrees.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            static rotation270() {
                return new Rotation(0.0, -1.0);
            }
            /**
             * Creates a new {@link Rotation} of 45 degrees.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            static rotation45() {
                return new Rotation(Rotation.SQRT_2_INV_$LI$(), Rotation.SQRT_2_INV_$LI$());
            }
            /**
             * Creates a new {@link Rotation} of 135 degrees.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            static rotation135() {
                return new Rotation(-Rotation.SQRT_2_INV_$LI$(), Rotation.SQRT_2_INV_$LI$());
            }
            /**
             * Creates a new {@link Rotation} of 225 degrees.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            static rotation225() {
                return new Rotation(-Rotation.SQRT_2_INV_$LI$(), -Rotation.SQRT_2_INV_$LI$());
            }
            /**
             * Creates a new {@link Rotation} of 315 degrees.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            static rotation315() {
                return new Rotation(Rotation.SQRT_2_INV_$LI$(), -Rotation.SQRT_2_INV_$LI$());
            }
            /**
             * @return {org.shikhar.Rotation} a copy of this {@link Rotation}
             */
            copy() {
                return new Rotation(this.cost, this.sint);
            }
            /**
             *
             * @return {number}
             */
            hashCode() {
                const prime = 31;
                let result = 3;
                let temp;
                temp = javaemul.internal.DoubleHelper.doubleToLongBits(this.cost);
                result = prime * result + ((temp ^ (temp >>> 32)) | 0);
                temp = javaemul.internal.DoubleHelper.doubleToLongBits(this.sint);
                result = prime * result + ((temp ^ (temp >>> 32)) | 0);
                return result;
            }
            equals$java_lang_Object(obj) {
                if (obj == null)
                    return false;
                if (obj === this)
                    return true;
                if (obj != null && obj instanceof org.shikhar.Rotation) {
                    const rotation = obj;
                    return this.cost === rotation.cost && this.sint === rotation.sint;
                }
                return false;
            }
            equals$org_shikhar_Rotation(rotation) {
                if (rotation == null)
                    return false;
                return this.cost === rotation.cost && this.sint === rotation.sint;
            }
            equals$org_shikhar_Rotation$double(rotation, error) {
                if (rotation == null)
                    return false;
                return Math.abs(this.cost - rotation.cost) < error && Math.abs(this.sint - rotation.sint) < error;
            }
            /**
             * Returns true if the cos and sin components of this {@link Rotation}
             * are the same as the given {@link Rotation} given the specified error.
             * @param {org.shikhar.Rotation} rotation the {@link Rotation} to compare to
             * @param {number} error the error
             * @return {boolean} boolean
             */
            equals(rotation, error) {
                if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null) && ((typeof error === 'number') || error === null)) {
                    return this.equals$org_shikhar_Rotation$double(rotation, error);
                }
                else if (((typeof rotation === 'number') || rotation === null) && ((typeof error === 'number') || error === null)) {
                    return this.equals$double$double(rotation, error);
                }
                else if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null) && error === undefined) {
                    return this.equals$org_shikhar_Rotation(rotation);
                }
                else if (((typeof rotation === 'number') || rotation === null) && error === undefined) {
                    return this.equals$double(rotation);
                }
                else if (((rotation != null) || rotation === null) && error === undefined) {
                    return this.equals$java_lang_Object(rotation);
                }
                else
                    throw new Error('invalid overload');
            }
            equals$double(angle) {
                return this.cost === Math.cos(angle) && this.sint === Math.sin(angle);
            }
            equals$double$double(angle, error) {
                return Math.abs(this.cost - Math.cos(angle)) < error && Math.abs(this.sint - Math.sin(angle)) < error;
            }
            /**
             *
             * @return {string}
             */
            toString() {
                const sb = new java.lang.StringBuilder();
                sb.append("Rotation(").append(this.cost).append(", ").append(this.sint).append(")");
                return sb.toString();
            }
            set$org_shikhar_Rotation(rotation) {
                this.cost = rotation.cost;
                this.sint = rotation.sint;
                return this;
            }
            /**
             * Sets this {@link Rotation} to the given {@link Rotation}.
             * @param {org.shikhar.Rotation} rotation the {@link Rotation} to set this {@link Rotation} to
             * @return {org.shikhar.Rotation} {@link Rotation} this rotation
             */
            set(rotation) {
                if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null)) {
                    return this.set$org_shikhar_Rotation(rotation);
                }
                else if (((typeof rotation === 'number') || rotation === null)) {
                    return this.set$double(rotation);
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Sets this {@link Rotation} to be the identity.
             * @return {org.shikhar.Rotation} {@link Rotation} this rotation
             */
            setIdentity() {
                this.cost = 1.0;
                this.sint = 0.0;
                return this;
            }
            set$double(angle) {
                this.cost = Math.cos(angle);
                this.sint = Math.sin(angle);
                return this;
            }
            /**
             * Returns the value of cos(&theta;) for this {@link Rotation}.
             * @return {number} double
             */
            getCost() {
                return this.cost;
            }
            /**
             * Returns the value of sin(&theta;) for this {@link Rotation}.
             * @return {number} double
             */
            getSint() {
                return this.sint;
            }
            /**
             * Returns the angle in radians for this {@link Rotation}.
             * @return {number} double
             */
            toRadians() {
                const acos = Math.acos(this.cost);
                const angle = (this.sint >= 0) ? acos : -acos;
                return angle;
            }
            /**
             * Returns the angle in degrees for this {@link Rotation}.
             * @return {number} double
             */
            toDegrees() {
                return /* toDegrees */ (x => x * 180 / Math.PI)(this.toRadians());
            }
            toVector$() {
                return new org.shikhar.Vector2(this.cost, this.sint);
            }
            toVector$double(magnitude) {
                return new org.shikhar.Vector2(this.cost * magnitude, this.sint * magnitude);
            }
            /**
             * Returns this {@link Rotation} as a direction vector with the given magnitude.
             * @param {number} magnitude the magnitude
             * @return {org.shikhar.Vector2} {@link Vector2}
             */
            toVector(magnitude) {
                if (((typeof magnitude === 'number') || magnitude === null)) {
                    return this.toVector$double(magnitude);
                }
                else if (magnitude === undefined) {
                    return this.toVector$();
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Internal helper method to perform rotations consisting of a 45 degree.
             * @param {number} cost the cos of the angle
             * @param {number} sint the sin of the angle
             * @return {org.shikhar.Rotation} This {@link Rotation} after being set to (cost, sint) and rotated 45 degrees
             */
            rotate45Helper(cost, sint) {
                this.cost = Rotation.SQRT_2_INV_$LI$() * (cost - sint);
                this.sint = Rotation.SQRT_2_INV_$LI$() * (cost + sint);
                return this;
            }
            /**
             * Internal helper method to perform rotations consisting of a 45 degree.
             * Returns a new {@link Rotation} object.
             * @param {number} cost the cos of the angle
             * @param {number} sint the sin of the angle
             * @return {org.shikhar.Rotation} A new {@link Rotation} with initial values (cost, sint) and then rotated 45 degrees
             */
            getRotated45Helper(cost, sint) {
                return new Rotation(Rotation.SQRT_2_INV_$LI$() * (cost - sint), Rotation.SQRT_2_INV_$LI$() * (cost + sint));
            }
            /**
             * Rotates this rotation 45 degrees and returns this rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            rotate45() {
                return this.rotate45Helper(this.cost, this.sint);
            }
            /**
             * Rotates this rotation 45 degrees and returns a new rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotated45() {
                return this.getRotated45Helper(this.cost, this.sint);
            }
            /**
             * Rotates this rotation 90 degrees and returns this rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            rotate90() {
                const temp = this.cost;
                this.cost = -this.sint;
                this.sint = temp;
                return this;
            }
            /**
             * Rotates this rotation 90 degrees and returns a new rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotated90() {
                return new Rotation(-this.sint, this.cost);
            }
            /**
             * Rotates this rotation 135 degrees and returns this rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            rotate135() {
                return this.rotate45Helper(-this.sint, this.cost);
            }
            /**
             * Rotates this rotation 135 degrees and returns a new rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotated135() {
                return this.getRotated45Helper(-this.sint, this.cost);
            }
            /**
             * Rotates this rotation 180 degrees and returns this rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            rotate180() {
                this.cost = -this.cost;
                this.sint = -this.sint;
                return this;
            }
            /**
             * Rotates this rotation 180 degrees and returns a new rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotated180() {
                return new Rotation(-this.cost, -this.sint);
            }
            /**
             * Rotates this rotation 225 degrees and returns this rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            rotate225() {
                return this.rotate45Helper(-this.cost, -this.sint);
            }
            /**
             * Rotates this rotation 225 degrees and returns a new rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotated225() {
                return this.getRotated45Helper(-this.cost, -this.sint);
            }
            /**
             * Rotates this rotation 270 degrees and returns this rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            rotate270() {
                const temp = this.cost;
                this.cost = this.sint;
                this.sint = -temp;
                return this;
            }
            /**
             * Rotates this rotation 270 degrees and returns a new rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotated270() {
                return new Rotation(this.sint, -this.cost);
            }
            /**
             * Rotates this rotation 315 degrees and returns this rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            rotate315() {
                return this.rotate45Helper(this.sint, -this.cost);
            }
            /**
             * Rotates this rotation 315 degrees and returns a new rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotated315() {
                return this.getRotated45Helper(this.sint, -this.cost);
            }
            /**
             * Negates this rotation and returns this rotation.
             * <p>
             * Let &theta; be the rotation, then -&theta; is the inverse rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            inverse() {
                this.sint = -this.sint;
                return this;
            }
            /**
             * Negates this rotation and returns a new rotation.
             * <p>
             * Let &theta; be the rotation, then -&theta; is the inverse rotation.
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getInversed() {
                return new Rotation(this.cost, -this.sint);
            }
            rotate$double$double(c, s) {
                const cost = this.cost;
                const sint = this.sint;
                this.cost = cost * c - sint * s;
                this.sint = cost * s + sint * c;
                return this;
            }
            /**
             * Internal method that rotates this {@link Rotation} by an angle &theta; and
             * returns this rotation.
             * @param {number} c cos(&theta;)
             * @param {number} s sin(&theta;)
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            rotate(c, s) {
                if (((typeof c === 'number') || c === null) && ((typeof s === 'number') || s === null)) {
                    return this.rotate$double$double(c, s);
                }
                else if (((c != null && c instanceof org.shikhar.Rotation) || c === null) && s === undefined) {
                    return this.rotate$org_shikhar_Rotation(c);
                }
                else if (((typeof c === 'number') || c === null) && s === undefined) {
                    return this.rotate$double(c);
                }
                else
                    throw new Error('invalid overload');
            }
            getRotated$double$double(c, s) {
                return new Rotation(this.cost * c - this.sint * s, this.cost * s + this.sint * c);
            }
            /**
             * Internal method that return a new {@link Rotation} representing
             * this {@link Rotation} after being rotated by an angle &theta;.
             * @param {number} c cos(&theta;)
             * @param {number} s sin(&theta;)
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotated(c, s) {
                if (((typeof c === 'number') || c === null) && ((typeof s === 'number') || s === null)) {
                    return this.getRotated$double$double(c, s);
                }
                else if (((c != null && c instanceof org.shikhar.Rotation) || c === null) && s === undefined) {
                    return this.getRotated$org_shikhar_Rotation(c);
                }
                else if (((typeof c === 'number') || c === null) && s === undefined) {
                    return this.getRotated$double(c);
                }
                else
                    throw new Error('invalid overload');
            }
            rotate$org_shikhar_Rotation(rotation) {
                return this.rotate$double$double(rotation.cost, rotation.sint);
            }
            getRotated$org_shikhar_Rotation(rotation) {
                return this.getRotated$double$double(rotation.cost, rotation.sint);
            }
            rotate$double(angle) {
                return this.rotate$double$double(Math.cos(angle), Math.sin(angle));
            }
            getRotated$double(angle) {
                return this.getRotated$double$double(Math.cos(angle), Math.sin(angle));
            }
            isIdentity$() {
                return this.cost === 1;
            }
            isIdentity$double(error) {
                return Math.abs(this.cost - 1) < error;
            }
            /**
             * Returns true if this rotation is an identity rotation within the given error.
             * @param {number} error the error
             * @return {boolean} boolean
             */
            isIdentity(error) {
                if (((typeof error === 'number') || error === null)) {
                    return this.isIdentity$double(error);
                }
                else if (error === undefined) {
                    return this.isIdentity$();
                }
                else
                    throw new Error('invalid overload');
            }
            dot$org_shikhar_Rotation(rotation) {
                return this.cost * rotation.cost + this.sint * rotation.sint;
            }
            /**
             * Returns the dot product of the this {@link Rotation} and the given {@link Rotation}
             * which is essentially the sine of the angle between those rotations.
             * @param {org.shikhar.Rotation} rotation the {@link Rotation}
             * @return {number} double
             */
            dot(rotation) {
                if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null)) {
                    return this.dot$org_shikhar_Rotation(rotation);
                }
                else if (((rotation != null && rotation instanceof org.shikhar.Vector2) || rotation === null)) {
                    return this.dot$org_shikhar_Vector2(rotation);
                }
                else
                    throw new Error('invalid overload');
            }
            cross$org_shikhar_Rotation(rotation) {
                return this.cost * rotation.sint - this.sint * rotation.cost;
            }
            /**
             * Returns the cross product of the this {@link Rotation} and the given {@link Rotation}
             * which is essentially the sine of the angle between those rotations.
             * @param {org.shikhar.Rotation} rotation the {@link Rotation}
             * @return {number} double
             */
            cross(rotation) {
                if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null)) {
                    return this.cross$org_shikhar_Rotation(rotation);
                }
                else if (((rotation != null && rotation instanceof org.shikhar.Vector2) || rotation === null)) {
                    return this.cross$org_shikhar_Vector2(rotation);
                }
                else
                    throw new Error('invalid overload');
            }
            dot$org_shikhar_Vector2(vector) {
                return this.cost * vector.x + this.sint * vector.y;
            }
            cross$org_shikhar_Vector2(vector) {
                return this.cost * vector.y - this.sint * vector.x;
            }
            compare$org_shikhar_Rotation(other) {
                const cmp = this.cross$org_shikhar_Rotation(other);
                if (cmp > 0.0) {
                    return 1;
                }
                else if (cmp < 0.0) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            /**
             * Compares this {@link Rotation} with another one, based on the angle between them (The one with -&pi; &le; &theta; &le; &pi;)
             * Returns 1 if &theta; &gt; 0, -1 if &theta; &lt; 0 and 0 otherwise
             * @param {org.shikhar.Rotation} other the {@link Rotation} to compare to
             * @return {number} int
             */
            compare(other) {
                if (((other != null && other instanceof org.shikhar.Rotation) || other === null)) {
                    return this.compare$org_shikhar_Rotation(other);
                }
                else if (((other != null && other instanceof org.shikhar.Vector2) || other === null)) {
                    return this.compare$org_shikhar_Vector2(other);
                }
                else
                    throw new Error('invalid overload');
            }
            compare$org_shikhar_Vector2(other) {
                const cmp = this.cross$org_shikhar_Vector2(other);
                if (cmp > 0.0) {
                    return 1;
                }
                else if (cmp < 0.0) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            getRotationBetween$org_shikhar_Rotation(rotation) {
                return new Rotation(this.dot$org_shikhar_Rotation(rotation), this.cross$org_shikhar_Rotation(rotation));
            }
            /**
             * Returns the angle between this and the given {@link Rotation}
             * represented as a new {@link Rotation}.
             * @param {org.shikhar.Rotation} rotation the {@link Rotation}
             * @return {org.shikhar.Rotation} {@link Rotation}
             */
            getRotationBetween(rotation) {
                if (((rotation != null && rotation instanceof org.shikhar.Rotation) || rotation === null)) {
                    return this.getRotationBetween$org_shikhar_Rotation(rotation);
                }
                else if (((rotation != null && rotation instanceof org.shikhar.Vector2) || rotation === null)) {
                    return this.getRotationBetween$org_shikhar_Vector2(rotation);
                }
                else
                    throw new Error('invalid overload');
            }
            getRotationBetween$org_shikhar_Vector2(vector) {
                return this.getRotationBetween$org_shikhar_Rotation(Rotation.of$org_shikhar_Vector2(vector));
            }
            /**
             * Rotates vector by this rotation
             * @param {org.shikhar.Vector2} v
             * @return {org.shikhar.Vector2} this vector after transform
             */
            transform(v) {
                const v_x = v.x;
                const v_y = v.y;
                v.x = this.cost * v_x - this.sint * v_y;
                v.y = this.cost * v_x + this.cost * v_y;
                return v;
            }
        }
        shikhar.Rotation = Rotation;
        Rotation["__class"] = "org.shikhar.Rotation";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Rotation.js.map