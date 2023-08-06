/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            var operator;
            (function (operator) {
                class Operators {
                    static __static_initialize() { if (!Operators.__static_initialized) {
                        Operators.__static_initialized = true;
                        Operators.__static_initializer_0();
                    } }
                    static builtinOperators_$LI$() { Operators.__static_initialize(); if (Operators.builtinOperators == null) {
                        Operators.builtinOperators = [null, null, null, null, null, null, null, null];
                    } return Operators.builtinOperators; }
                    static __static_initializer_0() {
                        Operators.builtinOperators_$LI$()[Operators.INDEX_ADDITION] = new Operators.Operators$0("+", 2, true, net.objecthunter.exp4j.operator.Operator.PRECEDENCE_ADDITION);
                        Operators.builtinOperators_$LI$()[Operators.INDEX_SUBTRACTION] = new Operators.Operators$1("-", 2, true, net.objecthunter.exp4j.operator.Operator.PRECEDENCE_ADDITION);
                        Operators.builtinOperators_$LI$()[Operators.INDEX_UNARYMINUS] = new Operators.Operators$2("-", 1, false, net.objecthunter.exp4j.operator.Operator.PRECEDENCE_UNARY_MINUS);
                        Operators.builtinOperators_$LI$()[Operators.INDEX_UNARYPLUS] = new Operators.Operators$3("+", 1, false, net.objecthunter.exp4j.operator.Operator.PRECEDENCE_UNARY_PLUS_$LI$());
                        Operators.builtinOperators_$LI$()[Operators.INDEX_MUTLIPLICATION] = new Operators.Operators$4("*", 2, true, net.objecthunter.exp4j.operator.Operator.PRECEDENCE_MULTIPLICATION);
                        Operators.builtinOperators_$LI$()[Operators.INDEX_DIVISION] = new Operators.Operators$5("/", 2, true, net.objecthunter.exp4j.operator.Operator.PRECEDENCE_DIVISION_$LI$());
                        Operators.builtinOperators_$LI$()[Operators.INDEX_POWER] = new Operators.Operators$6("^", 2, false, net.objecthunter.exp4j.operator.Operator.PRECEDENCE_POWER);
                        Operators.builtinOperators_$LI$()[Operators.INDEX_MODULO] = new Operators.Operators$7("%", 2, true, net.objecthunter.exp4j.operator.Operator.PRECEDENCE_MODULO_$LI$());
                    }
                    static getBuiltinOperator(symbol, numArguments) {
                        switch ((symbol).charCodeAt(0)) {
                            case 43 /* '+' */:
                                if (numArguments !== 1) {
                                    return Operators.builtinOperators_$LI$()[Operators.INDEX_ADDITION];
                                }
                                else {
                                    return Operators.builtinOperators_$LI$()[Operators.INDEX_UNARYPLUS];
                                }
                            case 45 /* '-' */:
                                if (numArguments !== 1) {
                                    return Operators.builtinOperators_$LI$()[Operators.INDEX_SUBTRACTION];
                                }
                                else {
                                    return Operators.builtinOperators_$LI$()[Operators.INDEX_UNARYMINUS];
                                }
                            case 42 /* '*' */:
                                return Operators.builtinOperators_$LI$()[Operators.INDEX_MUTLIPLICATION];
                            case 47 /* '/' */:
                                return Operators.builtinOperators_$LI$()[Operators.INDEX_DIVISION];
                            case 94 /* '^' */:
                                return Operators.builtinOperators_$LI$()[Operators.INDEX_POWER];
                            case 37 /* '%' */:
                                return Operators.builtinOperators_$LI$()[Operators.INDEX_MODULO];
                            default:
                                return null;
                        }
                    }
                }
                Operators.__static_initialized = false;
                Operators.INDEX_ADDITION = 0;
                Operators.INDEX_SUBTRACTION = 1;
                Operators.INDEX_MUTLIPLICATION = 2;
                Operators.INDEX_DIVISION = 3;
                Operators.INDEX_POWER = 4;
                Operators.INDEX_MODULO = 5;
                Operators.INDEX_UNARYMINUS = 6;
                Operators.INDEX_UNARYPLUS = 7;
                operator.Operators = Operators;
                Operators["__class"] = "net.objecthunter.exp4j.operator.Operators";
                (function (Operators) {
                    class Operators$0 extends net.objecthunter.exp4j.operator.Operator {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return args[0] + args[1];
                        }
                        constructor(__arg0, __arg1, __arg2, __arg3) {
                            super(__arg0, __arg1, __arg2, __arg3);
                        }
                    }
                    Operators.Operators$0 = Operators$0;
                    class Operators$1 extends net.objecthunter.exp4j.operator.Operator {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return args[0] - args[1];
                        }
                        constructor(__arg0, __arg1, __arg2, __arg3) {
                            super(__arg0, __arg1, __arg2, __arg3);
                        }
                    }
                    Operators.Operators$1 = Operators$1;
                    class Operators$2 extends net.objecthunter.exp4j.operator.Operator {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return -args[0];
                        }
                        constructor(__arg0, __arg1, __arg2, __arg3) {
                            super(__arg0, __arg1, __arg2, __arg3);
                        }
                    }
                    Operators.Operators$2 = Operators$2;
                    class Operators$3 extends net.objecthunter.exp4j.operator.Operator {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return args[0];
                        }
                        constructor(__arg0, __arg1, __arg2, __arg3) {
                            super(__arg0, __arg1, __arg2, __arg3);
                        }
                    }
                    Operators.Operators$3 = Operators$3;
                    class Operators$4 extends net.objecthunter.exp4j.operator.Operator {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return args[0] * args[1];
                        }
                        constructor(__arg0, __arg1, __arg2, __arg3) {
                            super(__arg0, __arg1, __arg2, __arg3);
                        }
                    }
                    Operators.Operators$4 = Operators$4;
                    class Operators$5 extends net.objecthunter.exp4j.operator.Operator {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            if (args[1] === 0.0) {
                                throw new java.lang.ArithmeticException("Division by zero!");
                            }
                            return args[0] / args[1];
                        }
                        constructor(__arg0, __arg1, __arg2, __arg3) {
                            super(__arg0, __arg1, __arg2, __arg3);
                        }
                    }
                    Operators.Operators$5 = Operators$5;
                    class Operators$6 extends net.objecthunter.exp4j.operator.Operator {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            return Math.pow(args[0], args[1]);
                        }
                        constructor(__arg0, __arg1, __arg2, __arg3) {
                            super(__arg0, __arg1, __arg2, __arg3);
                        }
                    }
                    Operators.Operators$6 = Operators$6;
                    class Operators$7 extends net.objecthunter.exp4j.operator.Operator {
                        /**
                         *
                         * @param {double[]} args
                         * @return {number}
                         */
                        apply(...args) {
                            if (args[1] === 0.0) {
                                throw new java.lang.ArithmeticException("Division by zero!");
                            }
                            return args[0] % args[1];
                        }
                        constructor(__arg0, __arg1, __arg2, __arg3) {
                            super(__arg0, __arg1, __arg2, __arg3);
                        }
                    }
                    Operators.Operators$7 = Operators$7;
                })(Operators = operator.Operators || (operator.Operators = {}));
            })(operator = exp4j.operator || (exp4j.operator = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
net.objecthunter.exp4j.operator.Operators.__static_initialize();
//# sourceMappingURL=Operators.js.map