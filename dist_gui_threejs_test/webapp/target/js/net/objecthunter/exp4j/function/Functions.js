/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            var __function;
            (function (__function) {
                /**
                 * Class representing the builtin functions available for use in expressions
                 * @class
                 */
                class Functions {
                    static __static_initialize() { if (!Functions.__static_initialized) {
                        Functions.__static_initialized = true;
                        Functions.__static_initializer_0();
                    } }
                    static builtinFunctions_$LI$() { Functions.__static_initialize(); if (Functions.builtinFunctions == null) {
                        Functions.builtinFunctions = (s => { let a = []; while (s-- > 0)
                            a.push(null); return a; })(23);
                    } return Functions.builtinFunctions; }
                    static __static_initializer_0() {
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_SIN] = new Functions.Functions$0("sin");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_COS] = new Functions.Functions$1("cos");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_TAN] = new Functions.Functions$2("tan");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_COT] = new Functions.Functions$3("cot");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_LOG] = new Functions.Functions$4("log");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_LOG2] = new Functions.Functions$5("log2");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_LOG10] = new Functions.Functions$6("log10");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_LOG1P] = new Functions.Functions$7("log1p");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_ABS] = new Functions.Functions$8("abs");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_ACOS] = new Functions.Functions$9("acos");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_ASIN] = new Functions.Functions$10("asin");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_ATAN] = new Functions.Functions$11("atan");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_CBRT] = new Functions.Functions$12("cbrt");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_FLOOR] = new Functions.Functions$13("floor");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_SINH] = new Functions.Functions$14("sinh");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_SQRT] = new Functions.Functions$15("sqrt");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_COSH] = new Functions.Functions$16("cosh");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_CEIL] = new Functions.Functions$17("ceil");
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_POW] = new Functions.Functions$18("pow", 2);
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_EXP] = new Functions.Functions$19("exp", 1);
                        Functions.builtinFunctions_$LI$()[Functions.INDEX_SGN] = new Functions.Functions$20("signum", 1);
                    }
                    /**
                     * Get the builtin function for a given name
                     * @param {string} name te name of the function
                     * @return {net.objecthunter.exp4j.__function._Function} a Function instance
                     */
                    static getBuiltinFunction(name) {
                        if (name === ("sin")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_SIN];
                        }
                        else if (name === ("cos")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_COS];
                        }
                        else if (name === ("tan")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_TAN];
                        }
                        else if (name === ("cot")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_COT];
                        }
                        else if (name === ("asin")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_ASIN];
                        }
                        else if (name === ("acos")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_ACOS];
                        }
                        else if (name === ("atan")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_ATAN];
                        }
                        else if (name === ("sinh")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_SINH];
                        }
                        else if (name === ("cosh")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_COSH];
                        }
                        else if (name === ("tanh")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_TANH];
                        }
                        else if (name === ("abs")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_ABS];
                        }
                        else if (name === ("log")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_LOG];
                        }
                        else if (name === ("log10")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_LOG10];
                        }
                        else if (name === ("log2")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_LOG2];
                        }
                        else if (name === ("log1p")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_LOG1P];
                        }
                        else if (name === ("ceil")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_CEIL];
                        }
                        else if (name === ("floor")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_FLOOR];
                        }
                        else if (name === ("sqrt")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_SQRT];
                        }
                        else if (name === ("cbrt")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_CBRT];
                        }
                        else if (name === ("pow")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_POW];
                        }
                        else if (name === ("exp")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_EXP];
                        }
                        else if (name === ("expm1")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_EXPM1];
                        }
                        else if (name === ("signum")) {
                            return Functions.builtinFunctions_$LI$()[Functions.INDEX_SGN];
                        }
                        else {
                            return null;
                        }
                    }
                }
                Functions.__static_initialized = false;
                Functions.INDEX_SIN = 0;
                Functions.INDEX_COS = 1;
                Functions.INDEX_TAN = 2;
                Functions.INDEX_COT = 3;
                Functions.INDEX_LOG = 4;
                Functions.INDEX_LOG1P = 5;
                Functions.INDEX_ABS = 6;
                Functions.INDEX_ACOS = 7;
                Functions.INDEX_ASIN = 8;
                Functions.INDEX_ATAN = 9;
                Functions.INDEX_CBRT = 10;
                Functions.INDEX_CEIL = 11;
                Functions.INDEX_FLOOR = 12;
                Functions.INDEX_SINH = 13;
                Functions.INDEX_SQRT = 14;
                Functions.INDEX_TANH = 15;
                Functions.INDEX_COSH = 16;
                Functions.INDEX_POW = 17;
                Functions.INDEX_EXP = 18;
                Functions.INDEX_EXPM1 = 19;
                Functions.INDEX_LOG10 = 20;
                Functions.INDEX_LOG2 = 21;
                Functions.INDEX_SGN = 22;
                __function.Functions = Functions;
                Functions["__class"] = "net.objecthunter.exp4j.function.Functions";
                (function (Functions) {
                    class Functions$0 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.sin(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$0 = Functions$0;
                    class Functions$1 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.cos(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$1 = Functions$1;
                    class Functions$2 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.tan(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$2 = Functions$2;
                    class Functions$3 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            const tan = Math.tan(args[0]);
                            if (tan === 0.0) {
                                throw new java.lang.ArithmeticException("Division by zero in cotangent!");
                            }
                            return 1.0 / Math.tan(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$3 = Functions$3;
                    class Functions$4 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.log(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$4 = Functions$4;
                    class Functions$5 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.log(args[0]) / Math.log(2.0);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$5 = Functions$5;
                    class Functions$6 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return /* log10 */ (x => Math.log(x) * Math.LOG10E)(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$6 = Functions$6;
                    class Functions$7 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return /* log1p */ (x => Math.log(x + 1))(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$7 = Functions$7;
                    class Functions$8 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.abs(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$8 = Functions$8;
                    class Functions$9 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.acos(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$9 = Functions$9;
                    class Functions$10 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.asin(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$10 = Functions$10;
                    class Functions$11 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.atan(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$11 = Functions$11;
                    class Functions$12 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return /* cbrt */ Math.pow(args[0], 1 / 3);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$12 = Functions$12;
                    class Functions$13 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.floor(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$13 = Functions$13;
                    class Functions$14 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return /* sinh */ (x => (Math.exp(x) - Math.exp(-x)) / 2)(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$14 = Functions$14;
                    class Functions$15 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.sqrt(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$15 = Functions$15;
                    class Functions$16 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return /* cosh */ (x => (Math.exp(x) + Math.exp(-x)) / 2)(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$16 = Functions$16;
                    class Functions$17 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.ceil(args[0]);
                        }
                        constructor(__arg0) {
                            super(__arg0);
                        }
                    }
                    Functions.Functions$17 = Functions$17;
                    class Functions$18 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.pow(args[0], args[1]);
                        }
                        constructor(__arg0, __arg1) {
                            super(__arg0, __arg1);
                        }
                    }
                    Functions.Functions$18 = Functions$18;
                    class Functions$19 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.exp(args[0]);
                        }
                        constructor(__arg0, __arg1) {
                            super(__arg0, __arg1);
                        }
                    }
                    Functions.Functions$19 = Functions$19;
                    class Functions$20 extends net.objecthunter.exp4j.__function._Function {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            if (args[0] > 0) {
                                return 1;
                            }
                            else if (args[0] < 0) {
                                return -1;
                            }
                            else {
                                return 0;
                            }
                        }
                        constructor(__arg0, __arg1) {
                            super(__arg0, __arg1);
                        }
                    }
                    Functions.Functions$20 = Functions$20;
                })(Functions = __function.Functions || (__function.Functions = {}));
            })(__function = exp4j.__function || (exp4j.__function = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
net.objecthunter.exp4j.__function.Functions.__static_initialize();
//# sourceMappingURL=Functions.js.map