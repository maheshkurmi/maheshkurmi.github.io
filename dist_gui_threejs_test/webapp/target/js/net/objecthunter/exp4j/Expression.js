/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            /**
             * Creates a new expression that is a copy of the existing one.
             *
             * @param {net.objecthunter.exp4j.Expression} existing the expression to copy
             * @class
             */
            class Expression {
                constructor(tokens, userFunctionNames) {
                    if (((tokens != null && tokens instanceof Array && (tokens.length == 0 || tokens[0] == null || (tokens[0] != null && tokens[0] instanceof net.objecthunter.exp4j.tokenizer.Token))) || tokens === null) && ((userFunctionNames != null && (userFunctionNames.constructor != null && userFunctionNames.constructor["__interfaces"] != null && userFunctionNames.constructor["__interfaces"].indexOf("java.util.Set") >= 0)) || userFunctionNames === null)) {
                        let __args = arguments;
                        if (this.tokens === undefined) {
                            this.tokens = null;
                        }
                        if (this.variables === undefined) {
                            this.variables = null;
                        }
                        if (this.userFunctionNames === undefined) {
                            this.userFunctionNames = null;
                        }
                        this.tokens = tokens;
                        this.variables = Expression.createDefaultVariables();
                        this.userFunctionNames = userFunctionNames;
                    }
                    else if (((tokens != null && tokens instanceof net.objecthunter.exp4j.Expression) || tokens === null) && userFunctionNames === undefined) {
                        let __args = arguments;
                        let existing = __args[0];
                        if (this.tokens === undefined) {
                            this.tokens = null;
                        }
                        if (this.variables === undefined) {
                            this.variables = null;
                        }
                        if (this.userFunctionNames === undefined) {
                            this.userFunctionNames = null;
                        }
                        this.tokens = java.util.Arrays.copyOf(existing.tokens, existing.tokens.length);
                        this.variables = (new java.util.HashMap());
                        this.variables.putAll(existing.variables);
                        this.userFunctionNames = (new java.util.HashSet(existing.userFunctionNames));
                    }
                    else if (((tokens != null && tokens instanceof Array && (tokens.length == 0 || tokens[0] == null || (tokens[0] != null && tokens[0] instanceof net.objecthunter.exp4j.tokenizer.Token))) || tokens === null) && userFunctionNames === undefined) {
                        let __args = arguments;
                        if (this.tokens === undefined) {
                            this.tokens = null;
                        }
                        if (this.variables === undefined) {
                            this.variables = null;
                        }
                        if (this.userFunctionNames === undefined) {
                            this.userFunctionNames = null;
                        }
                        this.tokens = tokens;
                        this.variables = Expression.createDefaultVariables();
                        this.userFunctionNames = java.util.Collections.emptySet();
                    }
                    else
                        throw new Error('invalid overload');
                }
                /*private*/ static createDefaultVariables() {
                    const vars = (new java.util.HashMap(4));
                    vars.put("pi", Math.PI);
                    vars.put("\u03c0", Math.PI);
                    vars.put("\u03c6", 1.61803398874);
                    vars.put("e", Math.E);
                    return vars;
                }
                setVariable(name, value) {
                    this.checkVariableName(name);
                    this.variables.put(name, javaemul.internal.DoubleHelper.valueOf(value));
                    return this;
                }
                /*private*/ checkVariableName(name) {
                    if (this.userFunctionNames.contains(name) || net.objecthunter.exp4j.__function.Functions.getBuiltinFunction(name) != null) {
                        throw new java.lang.IllegalArgumentException("The variable name \'" + name + "\' is invalid. Since there exists a function with the same name");
                    }
                }
                setVariables(variables) {
                    for (let index = variables.entrySet().iterator(); index.hasNext();) {
                        let v = index.next();
                        {
                            this.setVariable(v.getKey(), v.getValue());
                        }
                    }
                    return this;
                }
                getVariableNames() {
                    const variables = (new java.util.HashSet());
                    for (let index = 0; index < this.tokens.length; index++) {
                        let t = this.tokens[index];
                        {
                            if (t.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_VARIABLE)
                                variables.add(t.getName());
                        }
                    }
                    return variables;
                }
                validate$boolean(checkVariablesSet) {
                    const errors = (new java.util.ArrayList(0));
                    if (checkVariablesSet) {
                        for (let index = 0; index < this.tokens.length; index++) {
                            let t = this.tokens[index];
                            {
                                if (t.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_VARIABLE) {
                                    const _var = t.getName();
                                    if (!this.variables.containsKey(_var)) {
                                        errors.add("The setVariable \'" + _var + "\' has not been set");
                                    }
                                }
                            }
                        }
                    }
                    let count = 0;
                    for (let index = 0; index < this.tokens.length; index++) {
                        let tok = this.tokens[index];
                        {
                            switch ((tok.getType())) {
                                case net.objecthunter.exp4j.tokenizer.Token.TOKEN_NUMBER:
                                case net.objecthunter.exp4j.tokenizer.Token.TOKEN_VARIABLE:
                                    count++;
                                    break;
                                case net.objecthunter.exp4j.tokenizer.Token.TOKEN_FUNCTION:
                                    const func = tok.getFunction();
                                    const argsNum = func.getNumArguments();
                                    if (argsNum > count) {
                                        errors.add("Not enough arguments for \'" + func.getName() + "\'");
                                    }
                                    if (argsNum > 1) {
                                        count -= argsNum - 1;
                                    }
                                    else if (argsNum === 0) {
                                        count++;
                                    }
                                    break;
                                case net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR:
                                    const op = tok.getOperator();
                                    if (op.getNumOperands() === 2) {
                                        count--;
                                    }
                                    break;
                            }
                            if (count < 1) {
                                errors.add("Too many operators");
                                return new net.objecthunter.exp4j.ValidationResult(false, errors);
                            }
                        }
                    }
                    if (count > 1) {
                        errors.add("Too many operands");
                    }
                    return errors.size() === 0 ? net.objecthunter.exp4j.ValidationResult.SUCCESS_$LI$() : new net.objecthunter.exp4j.ValidationResult(false, errors);
                }
                validate(checkVariablesSet) {
                    if (((typeof checkVariablesSet === 'boolean') || checkVariablesSet === null)) {
                        return this.validate$boolean(checkVariablesSet);
                    }
                    else if (checkVariablesSet === undefined) {
                        return this.validate$();
                    }
                    else
                        throw new Error('invalid overload');
                }
                validate$() {
                    return this.validate$boolean(true);
                }
                evaluate() {
                    const output = new net.objecthunter.exp4j.ArrayStack();
                    for (let i = 0; i < this.tokens.length; i++) {
                        {
                            const t = this.tokens[i];
                            if (t.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_NUMBER) {
                                output.push(t.getValue());
                            }
                            else if (t.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_VARIABLE) {
                                const name = t.getName();
                                const value = this.variables.get(name);
                                if (value == null) {
                                    throw new java.lang.IllegalArgumentException("No value has been set for the setVariable \'" + name + "\'.");
                                }
                                output.push(value);
                            }
                            else if (t.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR) {
                                const op = t;
                                if (output.size() < op.getOperator().getNumOperands()) {
                                    throw new java.lang.IllegalArgumentException("Invalid number of operands available for \'" + op.getOperator().getSymbol() + "\' operator");
                                }
                                if (op.getOperator().getNumOperands() === 2) {
                                    const rightArg = output.pop();
                                    const leftArg = output.pop();
                                    output.push(op.getOperator().apply(leftArg, rightArg));
                                }
                                else if (op.getOperator().getNumOperands() === 1) {
                                    const arg = output.pop();
                                    output.push(op.getOperator().apply(arg));
                                }
                            }
                            else if (t.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_FUNCTION) {
                                const func = t;
                                const numArguments = func.getFunction().getNumArguments();
                                if (output.size() < numArguments) {
                                    throw new java.lang.IllegalArgumentException("Invalid number of arguments available for \'" + func.getFunction().getName() + "\' function");
                                }
                                const args = (s => { let a = []; while (s-- > 0)
                                    a.push(0); return a; })(numArguments);
                                for (let j = numArguments - 1; j >= 0; j--) {
                                    {
                                        args[j] = output.pop();
                                    }
                                    ;
                                }
                                output.push((o => o.apply.apply(o, args))(func.getFunction()));
                            }
                        }
                        ;
                    }
                    if (output.size() > 1) {
                        throw new java.lang.IllegalArgumentException("Invalid number of items on the output queue. Might be caused by an invalid number of arguments for a function.");
                    }
                    return output.pop();
                }
            }
            exp4j.Expression = Expression;
            Expression["__class"] = "net.objecthunter.exp4j.Expression";
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=Expression.js.map