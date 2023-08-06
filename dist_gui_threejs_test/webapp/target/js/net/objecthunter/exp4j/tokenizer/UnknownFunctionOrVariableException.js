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
                 * This exception is being thrown whenever {@link Tokenizer} finds unknown function or variable.
                 *
                 * @author Bartosz Firyn (sarxos)
                 * @param {string} expression
                 * @param {number} position
                 * @param {number} length
                 * @class
                 * @extends java.lang.IllegalArgumentException
                 */
                class UnknownFunctionOrVariableException extends java.lang.IllegalArgumentException {
                    constructor(expression, position, length) {
                        super();
                        Object.setPrototypeOf(this, UnknownFunctionOrVariableException.prototype);
                        if (this.message === undefined) {
                            this.message = null;
                        }
                        if (this.expression === undefined) {
                            this.expression = null;
                        }
                        if (this.__token === undefined) {
                            this.__token = null;
                        }
                        if (this.position === undefined) {
                            this.position = 0;
                        }
                        this.expression = expression;
                        this.__token = UnknownFunctionOrVariableException.token(expression, position, length);
                        this.position = position;
                        this.message = "Unknown function or variable \'" + this.__token + "\' at pos " + position + " in expression \'" + expression + "\'";
                    }
                    /*private*/ static token(expression, position, length) {
                        const len = expression.length;
                        let end = position + length - 1;
                        if (len < end) {
                            end = len;
                        }
                        return expression.substring(position, end);
                    }
                    /**
                     *
                     * @return {string}
                     */
                    getMessage() {
                        return this.message;
                    }
                    /**
                     * @return {string} Expression which contains unknown function or variable
                     */
                    getExpression() {
                        return this.expression;
                    }
                    /**
                     * @return {string} The name of unknown function or variable
                     */
                    getToken() {
                        return this.__token;
                    }
                    /**
                     * @return {number} The position of unknown function or variable
                     */
                    getPosition() {
                        return this.position;
                    }
                }
                /**
                 * Serial version UID.
                 */
                UnknownFunctionOrVariableException.__net_objecthunter_exp4j_tokenizer_UnknownFunctionOrVariableException_serialVersionUID = 1;
                tokenizer.UnknownFunctionOrVariableException = UnknownFunctionOrVariableException;
                UnknownFunctionOrVariableException["__class"] = "net.objecthunter.exp4j.tokenizer.UnknownFunctionOrVariableException";
                UnknownFunctionOrVariableException["__interfaces"] = ["java.io.Serializable"];
            })(tokenizer = exp4j.tokenizer || (exp4j.tokenizer = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=UnknownFunctionOrVariableException.js.map