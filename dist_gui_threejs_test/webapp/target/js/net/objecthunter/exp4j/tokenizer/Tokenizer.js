/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            var tokenizer;
            (function (tokenizer) {
                class Tokenizer {
                    constructor(expression, userFunctions, userOperators, variableNames, implicitMultiplication) {
                        if (((typeof expression === 'string') || expression === null) && ((userFunctions != null && (userFunctions.constructor != null && userFunctions.constructor["__interfaces"] != null && userFunctions.constructor["__interfaces"].indexOf("java.util.Map") >= 0)) || userFunctions === null) && ((userOperators != null && (userOperators.constructor != null && userOperators.constructor["__interfaces"] != null && userOperators.constructor["__interfaces"].indexOf("java.util.Map") >= 0)) || userOperators === null) && ((variableNames != null && (variableNames.constructor != null && variableNames.constructor["__interfaces"] != null && variableNames.constructor["__interfaces"].indexOf("java.util.Set") >= 0)) || variableNames === null) && ((typeof implicitMultiplication === 'boolean') || implicitMultiplication === null)) {
                            let __args = arguments;
                            if (this.expression === undefined) {
                                this.expression = null;
                            }
                            if (this.expressionLength === undefined) {
                                this.expressionLength = 0;
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
                            if (this.implicitMultiplication === undefined) {
                                this.implicitMultiplication = false;
                            }
                            if (this.lastToken === undefined) {
                                this.lastToken = null;
                            }
                            this.pos = 0;
                            this.expression = /* toCharArray */ (expression.trim()).split('');
                            this.expressionLength = this.expression.length;
                            this.userFunctions = userFunctions;
                            this.userOperators = userOperators;
                            this.variableNames = variableNames;
                            this.implicitMultiplication = implicitMultiplication;
                        }
                        else if (((typeof expression === 'string') || expression === null) && ((userFunctions != null && (userFunctions.constructor != null && userFunctions.constructor["__interfaces"] != null && userFunctions.constructor["__interfaces"].indexOf("java.util.Map") >= 0)) || userFunctions === null) && ((userOperators != null && (userOperators.constructor != null && userOperators.constructor["__interfaces"] != null && userOperators.constructor["__interfaces"].indexOf("java.util.Map") >= 0)) || userOperators === null) && ((variableNames != null && (variableNames.constructor != null && variableNames.constructor["__interfaces"] != null && variableNames.constructor["__interfaces"].indexOf("java.util.Set") >= 0)) || variableNames === null) && implicitMultiplication === undefined) {
                            let __args = arguments;
                            if (this.expression === undefined) {
                                this.expression = null;
                            }
                            if (this.expressionLength === undefined) {
                                this.expressionLength = 0;
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
                            if (this.implicitMultiplication === undefined) {
                                this.implicitMultiplication = false;
                            }
                            if (this.lastToken === undefined) {
                                this.lastToken = null;
                            }
                            this.pos = 0;
                            this.expression = /* toCharArray */ (expression.trim()).split('');
                            this.expressionLength = this.expression.length;
                            this.userFunctions = userFunctions;
                            this.userOperators = userOperators;
                            this.variableNames = variableNames;
                            this.implicitMultiplication = true;
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    hasNext() {
                        return this.expression.length > this.pos;
                    }
                    nextToken() {
                        let ch = this.expression[this.pos];
                        while ((javaemul.internal.CharacterHelper.isWhitespace(ch))) {
                            {
                                ch = this.expression[++this.pos];
                            }
                        }
                        ;
                        if (javaemul.internal.CharacterHelper.isDigit(ch) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '.'.charCodeAt(0)) {
                            if (this.lastToken != null) {
                                if (this.lastToken.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_NUMBER) {
                                    throw new java.lang.IllegalArgumentException("Unable to parse char \'" + ch + "\' (Code:" + (ch).charCodeAt(0) + ") at [" + this.pos + "]");
                                }
                                else if (this.implicitMultiplication && (this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_FUNCTION && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_SEPARATOR)) {
                                    this.lastToken = new net.objecthunter.exp4j.tokenizer.OperatorToken(net.objecthunter.exp4j.operator.Operators.getBuiltinOperator('*', 2));
                                    return this.lastToken;
                                }
                            }
                            return this.parseNumberToken(ch);
                        }
                        else if (this.isArgumentSeparator(ch)) {
                            return this.parseArgumentSeparatorToken(ch);
                        }
                        else if (this.isOpenParentheses(ch)) {
                            if (this.lastToken != null && this.implicitMultiplication && (this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_FUNCTION && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_SEPARATOR)) {
                                this.lastToken = new net.objecthunter.exp4j.tokenizer.OperatorToken(net.objecthunter.exp4j.operator.Operators.getBuiltinOperator('*', 2));
                                return this.lastToken;
                            }
                            return this.parseParentheses(true);
                        }
                        else if (this.isCloseParentheses(ch)) {
                            return this.parseParentheses(false);
                        }
                        else if (net.objecthunter.exp4j.operator.Operator.isAllowedOperatorChar(ch)) {
                            return this.parseOperatorToken(ch);
                        }
                        else if (Tokenizer.isAlphabetic((ch).charCodeAt(0)) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '_'.charCodeAt(0)) {
                            if (this.lastToken != null && this.implicitMultiplication && (this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_FUNCTION && this.lastToken.getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_SEPARATOR)) {
                                this.lastToken = new net.objecthunter.exp4j.tokenizer.OperatorToken(net.objecthunter.exp4j.operator.Operators.getBuiltinOperator('*', 2));
                                return this.lastToken;
                            }
                            return this.parseFunctionOrVariable();
                        }
                        throw new java.lang.IllegalArgumentException("Unable to parse char \'" + ch + "\' (Code:" + (ch).charCodeAt(0) + ") at [" + this.pos + "]");
                    }
                    /*private*/ parseArgumentSeparatorToken(ch) {
                        this.pos++;
                        this.lastToken = new net.objecthunter.exp4j.tokenizer.ArgumentSeparatorToken();
                        return this.lastToken;
                    }
                    /*private*/ isArgumentSeparator(ch) {
                        return (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == ','.charCodeAt(0);
                    }
                    /*private*/ parseParentheses(open) {
                        if (open) {
                            this.lastToken = new net.objecthunter.exp4j.tokenizer.OpenParenthesesToken();
                        }
                        else {
                            this.lastToken = new net.objecthunter.exp4j.tokenizer.CloseParenthesesToken();
                        }
                        this.pos++;
                        return this.lastToken;
                    }
                    /*private*/ isOpenParentheses(ch) {
                        return (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '('.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '{'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '['.charCodeAt(0);
                    }
                    /*private*/ isCloseParentheses(ch) {
                        return (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == ')'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '}'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == ']'.charCodeAt(0);
                    }
                    /*private*/ parseFunctionOrVariable() {
                        const offset = this.pos;
                        let testPos;
                        let lastValidLen = 1;
                        let lastValidToken = null;
                        let len = 1;
                        if (this.isEndOfExpression(offset)) {
                            this.pos++;
                        }
                        testPos = offset + len - 1;
                        while ((!this.isEndOfExpression(testPos) && Tokenizer.isVariableOrFunctionCharacter((this.expression[testPos]).charCodeAt(0)))) {
                            {
                                const name = ((str, index, len) => str.substring(index, index + len))((this.expression).join(''), offset, len);
                                if (this.variableNames != null && this.variableNames.contains(name)) {
                                    lastValidLen = len;
                                    lastValidToken = new net.objecthunter.exp4j.tokenizer.VariableToken(name);
                                }
                                else {
                                    const f = this.getFunction(name);
                                    if (f != null) {
                                        lastValidLen = len;
                                        lastValidToken = new net.objecthunter.exp4j.tokenizer.FunctionToken(f);
                                    }
                                }
                                len++;
                                testPos = offset + len - 1;
                            }
                        }
                        ;
                        if (lastValidToken == null) {
                            throw new net.objecthunter.exp4j.tokenizer.UnknownFunctionOrVariableException(new String(this.expression), this.pos, len);
                        }
                        this.pos += lastValidLen;
                        this.lastToken = lastValidToken;
                        return this.lastToken;
                    }
                    /*private*/ getFunction(name) {
                        let f = null;
                        if (this.userFunctions != null) {
                            f = this.userFunctions.get(name);
                        }
                        if (f == null) {
                            f = net.objecthunter.exp4j.__function.Functions.getBuiltinFunction(name);
                        }
                        return f;
                    }
                    /*private*/ parseOperatorToken(firstChar) {
                        const offset = this.pos;
                        let len = 1;
                        const symbol = new java.lang.StringBuilder();
                        let lastValid = null;
                        symbol.append(firstChar);
                        while ((!this.isEndOfExpression(offset + len) && net.objecthunter.exp4j.operator.Operator.isAllowedOperatorChar(this.expression[offset + len]))) {
                            {
                                symbol.append(this.expression[offset + len++]);
                            }
                        }
                        ;
                        while ((symbol.length() > 0)) {
                            {
                                const op = this.getOperator(symbol.toString());
                                if (op == null) {
                                    symbol.setLength(symbol.length() - 1);
                                }
                                else {
                                    lastValid = op;
                                    break;
                                }
                            }
                        }
                        ;
                        this.pos += symbol.length();
                        this.lastToken = new net.objecthunter.exp4j.tokenizer.OperatorToken(lastValid);
                        return this.lastToken;
                    }
                    /*private*/ getOperator(symbol) {
                        let op = null;
                        if (this.userOperators != null) {
                            op = this.userOperators.get(symbol);
                        }
                        if (op == null && symbol.length === 1) {
                            let argc = 2;
                            if (this.lastToken == null) {
                                argc = 1;
                            }
                            else {
                                const lastTokenType = this.lastToken.getType();
                                if (lastTokenType === net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN || lastTokenType === net.objecthunter.exp4j.tokenizer.Token.TOKEN_SEPARATOR) {
                                    argc = 1;
                                }
                                else if (lastTokenType === net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR) {
                                    const lastOp = this.lastToken.getOperator();
                                    if (lastOp.getNumOperands() === 2 || (lastOp.getNumOperands() === 1 && !lastOp.isLeftAssociative())) {
                                        argc = 1;
                                    }
                                }
                            }
                            op = net.objecthunter.exp4j.operator.Operators.getBuiltinOperator(symbol.charAt(0), argc);
                        }
                        return op;
                    }
                    /*private*/ parseNumberToken(firstChar) {
                        const offset = this.pos;
                        let len = 1;
                        this.pos++;
                        if (this.isEndOfExpression(offset + len)) {
                            this.lastToken = new net.objecthunter.exp4j.tokenizer.NumberToken(javaemul.internal.DoubleHelper.parseDouble(/* valueOf */ String(firstChar).toString()));
                            return this.lastToken;
                        }
                        while ((!this.isEndOfExpression(offset + len) && Tokenizer.isNumeric(this.expression[offset + len], (c => c.charCodeAt == null ? c : c.charCodeAt(0))(this.expression[offset + len - 1]) == 'e'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(this.expression[offset + len - 1]) == 'E'.charCodeAt(0)))) {
                            {
                                len++;
                                this.pos++;
                            }
                        }
                        ;
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(this.expression[offset + len - 1]) == 'e'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(this.expression[offset + len - 1]) == 'E'.charCodeAt(0)) {
                            len--;
                            this.pos--;
                        }
                        this.lastToken = new net.objecthunter.exp4j.tokenizer.NumberToken(this.expression, offset, len);
                        return this.lastToken;
                    }
                    /*private*/ static isNumeric(ch, lastCharE) {
                        return javaemul.internal.CharacterHelper.isDigit(ch) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '.'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == 'e'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == 'E'.charCodeAt(0) || (lastCharE && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '-'.charCodeAt(0) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == '+'.charCodeAt(0)));
                    }
                    static isAlphabetic(codePoint) {
                        return true;
                    }
                    static isVariableOrFunctionCharacter(codePoint) {
                        return true;
                    }
                    /*private*/ isEndOfExpression(offset) {
                        return this.expressionLength <= offset;
                    }
                }
                tokenizer.Tokenizer = Tokenizer;
                Tokenizer["__class"] = "net.objecthunter.exp4j.tokenizer.Tokenizer";
            })(tokenizer = exp4j.tokenizer || (exp4j.tokenizer = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=Tokenizer.js.map