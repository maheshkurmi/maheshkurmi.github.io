/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            var shuntingyard;
            (function (shuntingyard) {
                /**
                 * Shunting yard implementation to convert infix to reverse polish notation
                 * @class
                 */
                class ShuntingYard {
                    /**
                     * Convert a Set of tokens from infix to reverse polish notation
                     * @param {string} expression the expression to convert
                     * @param {*} userFunctions the custom functions used
                     * @param {*} userOperators the custom operators used
                     * @param {*} variableNames the variable names used in the expression
                     * @param {boolean} implicitMultiplication set to fasle to turn off implicit multiplication
                     * @return {net.objecthunter.exp4j.tokenizer.Token[]} a {@link net.objecthunter.exp4j.tokenizer.Token} array containing the result
                     */
                    static convertToRPN(expression, userFunctions, userOperators, variableNames, implicitMultiplication) {
                        const stack = (new java.util.Stack());
                        const output = (new java.util.ArrayList());
                        const tokenizer = new net.objecthunter.exp4j.tokenizer.Tokenizer(expression, userFunctions, userOperators, variableNames, implicitMultiplication);
                        while ((tokenizer.hasNext())) {
                            {
                                const token = tokenizer.nextToken();
                                switch ((token.getType())) {
                                    case net.objecthunter.exp4j.tokenizer.Token.TOKEN_NUMBER:
                                    case net.objecthunter.exp4j.tokenizer.Token.TOKEN_VARIABLE:
                                        output.add(token);
                                        break;
                                    case net.objecthunter.exp4j.tokenizer.Token.TOKEN_FUNCTION:
                                        stack.add(token);
                                        break;
                                    case net.objecthunter.exp4j.tokenizer.Token.TOKEN_SEPARATOR:
                                        while ((!stack.empty() && stack.peek().getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN)) {
                                            {
                                                output.add(stack.pop());
                                            }
                                        }
                                        ;
                                        if (stack.empty() || stack.peek().getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN) {
                                            throw new java.lang.IllegalArgumentException("Misplaced function separator \',\' or mismatched parentheses");
                                        }
                                        break;
                                    case net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR:
                                        while ((!stack.empty() && stack.peek().getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR)) {
                                            {
                                                const o1 = token;
                                                const o2 = stack.peek();
                                                if (o1.getOperator().getNumOperands() === 1 && o2.getOperator().getNumOperands() === 2) {
                                                    break;
                                                }
                                                else if ((o1.getOperator().isLeftAssociative() && o1.getOperator().getPrecedence() <= o2.getOperator().getPrecedence()) || (o1.getOperator().getPrecedence() < o2.getOperator().getPrecedence())) {
                                                    output.add(stack.pop());
                                                }
                                                else {
                                                    break;
                                                }
                                            }
                                        }
                                        ;
                                        stack.push(token);
                                        break;
                                    case net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN:
                                        stack.push(token);
                                        break;
                                    case net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_CLOSE:
                                        while ((stack.peek().getType() !== net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN)) {
                                            {
                                                output.add(stack.pop());
                                            }
                                        }
                                        ;
                                        stack.pop();
                                        if (!stack.isEmpty() && stack.peek().getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_FUNCTION) {
                                            output.add(stack.pop());
                                        }
                                        break;
                                    default:
                                        throw new java.lang.IllegalArgumentException("Unknown Token type encountered. This should not happen");
                                }
                            }
                        }
                        ;
                        while ((!stack.empty())) {
                            {
                                const t = stack.pop();
                                if (t.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_CLOSE || t.getType() === net.objecthunter.exp4j.tokenizer.Token.TOKEN_PARENTHESES_OPEN) {
                                    throw new java.lang.IllegalArgumentException("Mismatched parentheses detected. Please check the expression");
                                }
                                else {
                                    output.add(t);
                                }
                            }
                        }
                        ;
                        return output.toArray((s => { let a = []; while (s-- > 0)
                            a.push(null); return a; })(output.size()));
                    }
                }
                shuntingyard.ShuntingYard = ShuntingYard;
                ShuntingYard["__class"] = "net.objecthunter.exp4j.shuntingyard.ShuntingYard";
            })(shuntingyard = exp4j.shuntingyard || (exp4j.shuntingyard = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=ShuntingYard.js.map