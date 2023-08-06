/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            var operator;
            (function (operator) {
                /**
                 * Create a new operator for use in expressions
                 * @param {string} symbol the symbol of the operator
                 * @param {number} numberOfOperands the number of operands the operator takes (1 or 2)
                 * @param {boolean} leftAssociative set to true if the operator is left associative, false if it is right associative
                 * @param {number} precedence the precedence value of the operator
                 * @class
                 */
                class Operator {
                    constructor(symbol, numberOfOperands, leftAssociative, precedence) {
                        if (this.numOperands === undefined) {
                            this.numOperands = 0;
                        }
                        if (this.leftAssociative === undefined) {
                            this.leftAssociative = false;
                        }
                        if (this.symbol === undefined) {
                            this.symbol = null;
                        }
                        if (this.precedence === undefined) {
                            this.precedence = 0;
                        }
                        this.numOperands = numberOfOperands;
                        this.leftAssociative = leftAssociative;
                        this.symbol = symbol;
                        this.precedence = precedence;
                    }
                    static PRECEDENCE_SUBTRACTION_$LI$() { if (Operator.PRECEDENCE_SUBTRACTION == null) {
                        Operator.PRECEDENCE_SUBTRACTION = Operator.PRECEDENCE_ADDITION;
                    } return Operator.PRECEDENCE_SUBTRACTION; }
                    static PRECEDENCE_DIVISION_$LI$() { if (Operator.PRECEDENCE_DIVISION == null) {
                        Operator.PRECEDENCE_DIVISION = Operator.PRECEDENCE_MULTIPLICATION;
                    } return Operator.PRECEDENCE_DIVISION; }
                    static PRECEDENCE_MODULO_$LI$() { if (Operator.PRECEDENCE_MODULO == null) {
                        Operator.PRECEDENCE_MODULO = Operator.PRECEDENCE_DIVISION_$LI$();
                    } return Operator.PRECEDENCE_MODULO; }
                    static PRECEDENCE_UNARY_PLUS_$LI$() { if (Operator.PRECEDENCE_UNARY_PLUS == null) {
                        Operator.PRECEDENCE_UNARY_PLUS = Operator.PRECEDENCE_UNARY_MINUS;
                    } return Operator.PRECEDENCE_UNARY_PLUS; }
                    static ALLOWED_OPERATOR_CHARS_$LI$() { if (Operator.ALLOWED_OPERATOR_CHARS == null) {
                        Operator.ALLOWED_OPERATOR_CHARS = ['+', '-', '*', '/', '%', '^', '!', '#', '\u00a7', '$', '&', ';', ':', '~', '<', '>', '|', '='];
                    } return Operator.ALLOWED_OPERATOR_CHARS; }
                    /**
                     * Check if a character is an allowed operator char
                     * @param {string} ch the char to check
                     * @return {boolean} true if the char is allowed an an operator symbol, false otherwise
                     */
                    static isAllowedOperatorChar(ch) {
                        for (let index = 0; index < Operator.ALLOWED_OPERATOR_CHARS_$LI$().length; index++) {
                            let allowed = Operator.ALLOWED_OPERATOR_CHARS_$LI$()[index];
                            {
                                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) == (c => c.charCodeAt == null ? c : c.charCodeAt(0))(allowed)) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    }
                    /**
                     * Check if the operator is left associative
                     * @return {boolean} true os the operator is left associative, false otherwise
                     */
                    isLeftAssociative() {
                        return this.leftAssociative;
                    }
                    /**
                     * Check the precedence value for the operator
                     * @return {number} the precedence value
                     */
                    getPrecedence() {
                        return this.precedence;
                    }
                    /**
                     * Get the operator symbol
                     * @return {string} the symbol
                     */
                    getSymbol() {
                        return this.symbol;
                    }
                    /**
                     * Get the number of operands
                     * @return {number} the number of operands
                     */
                    getNumOperands() {
                        return this.numOperands;
                    }
                }
                /**
                 * The precedence value for the addition operation
                 */
                Operator.PRECEDENCE_ADDITION = 500;
                /**
                 * The precedence value for the multiplication operation
                 */
                Operator.PRECEDENCE_MULTIPLICATION = 1000;
                /**
                 * The precedence value for the power operation
                 */
                Operator.PRECEDENCE_POWER = 10000;
                /**
                 * The precedence value for the unary minus operation
                 */
                Operator.PRECEDENCE_UNARY_MINUS = 5000;
                operator.Operator = Operator;
                Operator["__class"] = "net.objecthunter.exp4j.operator.Operator";
            })(operator = exp4j.operator || (exp4j.operator = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=Operator.js.map