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
                 * @param {number} value the value of the number
                 * @class
                 * @extends net.objecthunter.exp4j.tokenizer.Token
                 */
                class NumberToken extends net.objecthunter.exp4j.tokenizer.Token {
                    constructor(expression, offset, len) {
                        if (((expression != null && expression instanceof Array && (expression.length == 0 || expression[0] == null || (typeof expression[0] === 'string'))) || expression === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                            let __args = arguments;
                            {
                                let __args = arguments;
                                let value = javaemul.internal.DoubleHelper.parseDouble(/* valueOf */ ((str, index, len) => str.join('').substring(index, index + len))(expression, offset, len));
                                super(net.objecthunter.exp4j.tokenizer.Token.TOKEN_NUMBER);
                                if (this.value === undefined) {
                                    this.value = 0;
                                }
                                this.value = value;
                            }
                            if (this.value === undefined) {
                                this.value = 0;
                            }
                        }
                        else if (((typeof expression === 'number') || expression === null) && offset === undefined && len === undefined) {
                            let __args = arguments;
                            let value = __args[0];
                            super(net.objecthunter.exp4j.tokenizer.Token.TOKEN_NUMBER);
                            if (this.value === undefined) {
                                this.value = 0;
                            }
                            this.value = value;
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    /**
                     * Get the value of the number
                     * @return {number} the value
                     */
                    getValue() {
                        return this.value;
                    }
                }
                tokenizer.NumberToken = NumberToken;
                NumberToken["__class"] = "net.objecthunter.exp4j.tokenizer.NumberToken";
            })(tokenizer = exp4j.tokenizer || (exp4j.tokenizer = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=NumberToken.js.map