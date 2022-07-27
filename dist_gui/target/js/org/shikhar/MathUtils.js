/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class MathUtils {
            static ROOT_2_$LI$() { if (MathUtils.ROOT_2 == null) {
                MathUtils.ROOT_2 = Math.sqrt(2);
            } return MathUtils.ROOT_2; }
            static ROOT_3_$LI$() { if (MathUtils.ROOT_3 == null) {
                MathUtils.ROOT_3 = Math.sqrt(3);
            } return MathUtils.ROOT_3; }
            static ROOT_5_$LI$() { if (MathUtils.ROOT_5 == null) {
                MathUtils.ROOT_5 = Math.sqrt(5);
            } return MathUtils.ROOT_5; }
            static ROOT_6_$LI$() { if (MathUtils.ROOT_6 == null) {
                MathUtils.ROOT_6 = Math.sqrt(6);
            } return MathUtils.ROOT_6; }
            static ROOT_7_$LI$() { if (MathUtils.ROOT_7 == null) {
                MathUtils.ROOT_7 = Math.sqrt(7);
            } return MathUtils.ROOT_7; }
            static PI2_$LI$() { if (MathUtils.PI2 == null) {
                MathUtils.PI2 = 2 * Math.PI;
            } return MathUtils.PI2; }
            static random_$LI$() { if (MathUtils.random == null) {
                MathUtils.random = new java.util.Random();
            } return MathUtils.random; }
            static nan_$LI$() { if (MathUtils.nan == null) {
                MathUtils.nan = (0.0 / 0.0);
            } return MathUtils.nan; }
            static matcher_trail_0s_$LI$() { if (MathUtils.matcher_trail_0s == null) {
                MathUtils.matcher_trail_0s = java.util.regex.Pattern.compile("\\.0*$|(?<=\\.[0-9]{0,2147483646})0*$").matcher("");
            } return MathUtils.matcher_trail_0s; }
            /**
             * Returns value rounded off to decimal places as in preference
             * @param {number} value
             * @return
             * @param {number} n
             * @return {number}
             */
            static roundOffToSigFigures(value, n) {
                if (value === 0) {
                    return 0;
                }
                const d = Math.ceil(/* log10 */ (x => Math.log(x) * Math.LOG10E)(value < 0 ? -value : value));
                const power = n - (d | 0);
                const magnitude = Math.pow(10, power);
                const shifted = Math.round(value * magnitude);
                return shifted / magnitude;
            }
            static clamp(value, min, max) {
                if (value < min)
                    return min;
                if (value > max)
                    return max;
                return value;
            }
            /**
             * Returns the next power of two. Returns the specified value if the value is already a power of two.
             * @param {number} value
             * @return {number}
             */
            static nextPowerOfTwo(value) {
                if (value === 0)
                    return 1;
                value--;
                value |= value >> 1;
                value |= value >> 2;
                value |= value >> 4;
                value |= value >> 8;
                value |= value >> 16;
                return value + 1;
            }
            static isPowerOfTwo(value) {
                return value !== 0 && (value & value - 1) === 0;
            }
            /**
             * Linearly interpolates between fromValue to toValue on progress position.
             * @param {number} fromValue
             * @param {number} toValue
             * @param {number} progress
             * @return {number}
             */
            static lerp(fromValue, toValue, progress) {
                return Math.fround(fromValue + Math.fround((Math.fround(toValue - fromValue)) * progress));
            }
            /**
             * Normalize an angle in a 2&pi wide interval around a center value.
             * This method has three main uses:
             * <ul>
             * <li>normalize an angle between 0 and 2&pi;:<br/>
             * <code>a = MathUtils.normalizeAngle(a, Math.PI);</code></li>
             * <li>normalize an angle between -&pi; and +&pi;<br/>
             * <code>a = MathUtils.normalizeAngle(a, 0.0);</code></li>
             * <li>compute the angle between two defining angular positions:<br>
             * <code>angle = MathUtils.normalizeAngle(end, start) - start;</code></li>
             * </ul>
             * Note that due to numerical accuracy and since &pi; cannot be represented
             * exactly, the result interval is <em>closed</em>, lit cannot be half-closed
             * as would be more satisfactory in a purely mathematical view.
             * @param {number} a angle to normalize in radians
             * @param {number} center center of the desired 2&pi in radians; interval for the result
             * @return {number} a-2k&pi; with integer k and center-&pi; &lt;= a-2k&pi; &lt;= center+&pi;
             */
            static normalizeAngle(a, center) {
                return a - MathUtils.PI2_$LI$() * Math.floor((a + Math.PI - center) / MathUtils.PI2_$LI$());
            }
        }
        MathUtils.chkIrrational = true;
        MathUtils.S_ROOT_2 = "\u221a" + 2;
        MathUtils.S_ROOT_3 = "\u221a" + 3;
        MathUtils.S_ROOT_5 = "\u221a" + 5;
        MathUtils.S_ROOT_6 = "\u221a" + 6;
        MathUtils.S_ROOT_7 = "\u221a" + 7;
        MathUtils.sq2p1 = 2.414213562373095;
        MathUtils.sq2m1 = 0.41421356237309503;
        MathUtils.p4 = 16.15364129822302;
        MathUtils.p3 = 268.42548195503974;
        MathUtils.p2 = 1153.029351540485;
        MathUtils.p1 = 1780.406316433197;
        MathUtils.p0 = 896.7859740366387;
        MathUtils.q4 = 58.95697050844462;
        MathUtils.q3 = 536.2653740312153;
        MathUtils.q2 = 1666.7838148816338;
        MathUtils.q1 = 2079.33497444541;
        MathUtils.q0 = 896.7859740366387;
        MathUtils.PIO2 = 1.5707963267948966;
        MathUtils.FLOAT_ROUNDING_ERROR = 1.0E-6;
        shikhar.MathUtils = MathUtils;
        MathUtils["__class"] = "org.shikhar.MathUtils";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=MathUtils.js.map