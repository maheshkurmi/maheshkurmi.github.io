/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            var tokenizer;
            (function (tokenizer) {
                /**
                 * Create a new instance
                 * @param {net.objecthunter.exp4j.operator.Operator} op the operator
                 * @class
                 * @extends net.objecthunter.exp4j.tokenizer.Token
                 */
                class OperatorToken extends net.objecthunter.exp4j.tokenizer.Token {
                    constructor(op) {
                        super(net.objecthunter.exp4j.tokenizer.Token.TOKEN_OPERATOR);
                        if (this.operator === undefined) {
                            this.operator = null;
                        }
                        if (op == null) {
                            throw new java.lang.IllegalArgumentException("Operator is unknown for token.");
                        }
                        this.operator = op;
                    }
                    /**
                     * Get the operator for that token
                     * @return {net.objecthunter.exp4j.operator.Operator} the operator
                     */
                    getOperator() {
                        return this.operator;
                    }
                }
                tokenizer.OperatorToken = OperatorToken;
                OperatorToken["__class"] = "net.objecthunter.exp4j.tokenizer.OperatorToken";
            })(tokenizer = exp4j.tokenizer || (exp4j.tokenizer = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=OperatorToken.js.map