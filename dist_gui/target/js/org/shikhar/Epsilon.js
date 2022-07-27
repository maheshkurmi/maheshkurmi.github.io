/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Class containing an approximation of machine epsilon.
         * @author William Bittle
         * @version 2.0.0
         * @since 2.0.0
         * @class
         */
        class Epsilon {
            constructor() {
            }
            static E_$LI$() { if (Epsilon.E == null) {
                Epsilon.E = Epsilon.compute();
            } return Epsilon.E; }
            /**
             * Computes an approximation of machine epsilon.
             * @return {number} double
             */
            static compute() {
                let e = 0.5;
                while ((1.0 + e > 1.0)) {
                    {
                        e *= 0.5;
                    }
                }
                ;
                return e;
            }
        }
        shikhar.Epsilon = Epsilon;
        Epsilon["__class"] = "org.shikhar.Epsilon";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Epsilon.js.map