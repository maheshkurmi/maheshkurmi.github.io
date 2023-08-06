/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            var tokenizer;
            (function (tokenizer) {
                class FunctionToken extends net.objecthunter.exp4j.tokenizer.Token {
                    constructor(_function) {
                        super(net.objecthunter.exp4j.tokenizer.Token.TOKEN_FUNCTION);
                        if (this._function === undefined) {
                            this._function = null;
                        }
                        this._function = _function;
                    }
                    getFunction() {
                        return this._function;
                    }
                }
                tokenizer.FunctionToken = FunctionToken;
                FunctionToken["__class"] = "net.objecthunter.exp4j.tokenizer.FunctionToken";
            })(tokenizer = exp4j.tokenizer || (exp4j.tokenizer = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=FunctionToken.js.map