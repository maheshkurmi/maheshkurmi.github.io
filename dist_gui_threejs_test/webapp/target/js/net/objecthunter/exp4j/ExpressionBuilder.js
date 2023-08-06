/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            /**
             * Create a new ExpressionBuilder instance and initialize it with a given expression string.
             * @param {string} expression the expression to be parsed
             * @class
             */
            class ExpressionBuilder {
                constructor(expression) {
                    if (this.expression === undefined) {
                        this.expression = null;
                    }
                    if (this.userFunctions === undefined) {
                        this.userFunctions = null;
                    }
                    if (this.userOperators === undefined) {
                        this.userOperators = null;
                    }
                    if (this.variableNames === undefined) {
                        this.variableNames = null;
                    }
                    this.__implicitMultiplication = true;
                    if (expression == null || expression.trim().length === 0) {
                        throw new java.lang.IllegalArgumentException("Expression can not be empty");
                    }
                    this.expression = expression;
                    this.userOperators = (new java.util.HashMap(4));
                    this.userFunctions = (new java.util.HashMap(4));
                    this.variableNames = (new java.util.HashSet(4));
                }
                /**
                 * Add a {@link net.objecthunter.exp4j.function._Function} implementation available for use in the expression
                 * @param function the custom {@link net.objecthunter.exp4j.function._Function} implementation that should be available for use in the expression.
                 * @return {net.objecthunter.exp4j.ExpressionBuilder} the ExpressionBuilder instance
                 * @param {net.objecthunter.exp4j.__function._Function} _function
                 */
                _function(_function) {
                    this.userFunctions.put(_function.getName(), _function);
                    return this;
                }
                functions$net_objecthunter_exp4j_function__Function_A(...functions) {
                    for (let index = 0; index < functions.length; index++) {
                        let f = functions[index];
                        {
                            this.userFunctions.put(f.getName(), f);
                        }
                    }
                    return this;
                }
                /**
                 * Add multiple {@link net.objecthunter.exp4j.function._Function} implementations available for use in the expression
                 * @param {net.objecthunter.exp4j.function._Function[]} functions the custom {@link net.objecthunter.exp4j.function._Function} implementations
                 * @return {net.objecthunter.exp4j.ExpressionBuilder} the ExpressionBuilder instance
                 */
                functions(...functions) {
                    if (((functions != null && functions instanceof Array && (functions.length == 0 || functions[0] == null || (functions[0] != null && functions[0] instanceof net.objecthunter.exp4j.__function._Function))) || functions === null)) {
                        return this.functions$net_objecthunter_exp4j_function__Function_A(...functions);
                    }
                    else if (((functions != null && (functions.constructor != null && functions.constructor["__interfaces"] != null && functions.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || functions === null)) {
                        return this.functions$java_util_List(functions);
                    }
                    else
                        throw new Error('invalid overload');
                }
                functions$java_util_List(functions) {
                    for (let index = functions.iterator(); index.hasNext();) {
                        let f = index.next();
                        {
                            this.userFunctions.put(f.getName(), f);
                        }
                    }
                    return this;
                }
                variables$java_util_Set(variableNames) {
                    this.variableNames.addAll(variableNames);
                    return this;
                }
                /**
                 * Declare variable names used in the expression
                 * @param {*} variableNames the variables used in the expression
                 * @return {net.objecthunter.exp4j.ExpressionBuilder} the ExpressionBuilder instance
                 */
                variables(variableNames) {
                    if (((variableNames != null && (variableNames.constructor != null && variableNames.constructor["__interfaces"] != null && variableNames.constructor["__interfaces"].indexOf("java.util.Set") >= 0)) || variableNames === null)) {
                        return this.variables$java_util_Set(variableNames);
                    }
                    else if (((variableNames != null && variableNames instanceof Array && (variableNames.length == 0 || variableNames[0] == null || (typeof variableNames[0] === 'string'))) || variableNames === null)) {
                        return this.variables$java_lang_String_A(...variableNames);
                    }
                    else
                        throw new Error('invalid overload');
                }
                variables$java_lang_String_A(...variableNames) {
                    java.util.Collections.addAll(this.variableNames, ...variableNames);
                    return this;
                }
                /**
                 * Declare a variable used in the expression
                 * @param {string} variableName the variable used in the expression
                 * @return {net.objecthunter.exp4j.ExpressionBuilder} the ExpressionBuilder instance
                 */
                variable(variableName) {
                    this.variableNames.add(variableName);
                    return this;
                }
                implicitMultiplication(enabled) {
                    this.__implicitMultiplication = enabled;
                    return this;
                }
                operator$net_objecthunter_exp4j_operator_Operator(operator) {
                    this.checkOperatorSymbol(operator);
                    this.userOperators.put(operator.getSymbol(), operator);
                    return this;
                }
                /**
                 * Add an {@link net.objecthunter.exp4j.operator.Operator} which should be available for use in the expression
                 * @param {net.objecthunter.exp4j.operator.Operator} operator the custom {@link net.objecthunter.exp4j.operator.Operator} to add
                 * @return {net.objecthunter.exp4j.ExpressionBuilder} the ExpressionBuilder instance
                 */
                operator(operator) {
                    if (((operator != null && operator instanceof net.objecthunter.exp4j.operator.Operator) || operator === null)) {
                        return this.operator$net_objecthunter_exp4j_operator_Operator(operator);
                    }
                    else if (((operator != null && operator instanceof Array && (operator.length == 0 || operator[0] == null || (operator[0] != null && operator[0] instanceof net.objecthunter.exp4j.operator.Operator))) || operator === null)) {
                        return this.operator$net_objecthunter_exp4j_operator_Operator_A(...operator);
                    }
                    else if (((operator != null && (operator.constructor != null && operator.constructor["__interfaces"] != null && operator.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || operator === null)) {
                        return this.operator$java_util_List(operator);
                    }
                    else
                        throw new Error('invalid overload');
                }
                /*private*/ checkOperatorSymbol(op) {
                    const name = op.getSymbol();
                    {
                        let array = /* toCharArray */ (name).split('');
                        for (let index = 0; index < array.length; index++) {
                            let ch = array[index];
                            {
                                if (!net.objecthunter.exp4j.operator.Operator.isAllowedOperatorChar(ch)) {
                                    throw new java.lang.IllegalArgumentException("The operator symbol \'" + name + "\' is invalid");
                                }
                            }
                        }
                    }
                }
                operator$net_objecthunter_exp4j_operator_Operator_A(...operators) {
                    for (let index = 0; index < operators.length; index++) {
                        let o = operators[index];
                        {
                            this.operator$net_objecthunter_exp4j_operator_Operator(o);
                        }
                    }
                    return this;
                }
                operator$java_util_List(operators) {
                    for (let index = operators.iterator(); index.hasNext();) {
                        let o = index.next();
                        {
                            this.operator$net_objecthunter_exp4j_operator_Operator(o);
                        }
                    }
                    return this;
                }
                /**
                 * Build the {@link Expression} instance using the custom operators and functions set.
                 * @return {net.objecthunter.exp4j.Expression} an {@link Expression} instance which can be used to evaluate the result of the expression
                 */
                build() {
                    if (this.expression.length === 0) {
                        throw new java.lang.IllegalArgumentException("The expression can not be empty");
                    }
                    this.variableNames.add("pi");
                    this.variableNames.add("\u03c0");
                    this.variableNames.add("e");
                    this.variableNames.add("\u03c6");
                    for (let index = this.variableNames.iterator(); index.hasNext();) {
                        let _var = index.next();
                        {
                            if (net.objecthunter.exp4j.__function.Functions.getBuiltinFunction(_var) != null || this.userFunctions.containsKey(_var)) {
                                throw new java.lang.IllegalArgumentException("A variable can not have the same name as a function [" + _var + "]");
                            }
                        }
                    }
                    return new net.objecthunter.exp4j.Expression(net.objecthunter.exp4j.shuntingyard.ShuntingYard.convertToRPN(this.expression, this.userFunctions, this.userOperators, this.variableNames, this.__implicitMultiplication), this.userFunctions.keySet());
                }
            }
            exp4j.ExpressionBuilder = ExpressionBuilder;
            ExpressionBuilder["__class"] = "net.objecthunter.exp4j.ExpressionBuilder";
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=ExpressionBuilder.js.map