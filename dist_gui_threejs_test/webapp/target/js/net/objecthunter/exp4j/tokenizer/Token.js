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
                 * Abstract class for tokens used by exp4j to tokenize expressions
                 * @class
                 */
                class Token {
                    constructor(type) {
                        if (this.type === undefined) {
                            this.type = 0;
                        }
                        this.type = type;
                    }
                    getType() {
                        return this.type;
                    }
                }
                Token.TOKEN_NUMBER = 1;
                Token.TOKEN_OPERATOR = 2;
                Token.TOKEN_FUNCTION = 3;
                Token.TOKEN_PARENTHESES_OPEN = 4;
                Token.TOKEN_PARENTHESES_CLOSE = 5;
                Token.TOKEN_VARIABLE = 6;
                Token.TOKEN_SEPARATOR = 7;
                tokenizer.Token = Token;
                Token["__class"] = "net.objecthunter.exp4j.tokenizer.Token";
            })(tokenizer = exp4j.tokenizer || (exp4j.tokenizer = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=Token.js.map