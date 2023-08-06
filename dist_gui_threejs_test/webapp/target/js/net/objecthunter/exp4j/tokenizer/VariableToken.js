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
                 * @param {string} name the name of the setVariable
                 * @class
                 * @extends net.objecthunter.exp4j.tokenizer.Token
                 */
                class VariableToken extends net.objecthunter.exp4j.tokenizer.Token {
                    constructor(name) {
                        super(net.objecthunter.exp4j.tokenizer.Token.TOKEN_VARIABLE);
                        if (this.name === undefined) {
                            this.name = null;
                        }
                        this.name = name;
                    }
                    /**
                     * Get the name of the setVariable
                     * @return {string} the name
                     */
                    getName() {
                        return this.name;
                    }
                }
                tokenizer.VariableToken = VariableToken;
                VariableToken["__class"] = "net.objecthunter.exp4j.tokenizer.VariableToken";
            })(tokenizer = exp4j.tokenizer || (exp4j.tokenizer = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=VariableToken.js.map