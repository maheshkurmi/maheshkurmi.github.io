/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            /**
             * Create a new instance
             * @param {boolean} valid Whether the validation of the expression was successful
             * @param {*} errors The list of errors returned if the validation was unsuccessful
             * @class
             */
            class ValidationResult {
                constructor(valid, errors) {
                    if (this.valid === undefined) {
                        this.valid = false;
                    }
                    if (this.errors === undefined) {
                        this.errors = null;
                    }
                    this.valid = valid;
                    this.errors = errors;
                }
                /**
                 * Check if an expression has been validated successfully
                 * @return {boolean} true if the validation was successful, false otherwise
                 */
                isValid() {
                    return this.valid;
                }
                /**
                 * Get the list of errors describing the issues while validating the expression
                 * @return {*} The List of errors
                 */
                getErrors() {
                    return this.errors;
                }
                static SUCCESS_$LI$() { if (ValidationResult.SUCCESS == null) {
                    ValidationResult.SUCCESS = new ValidationResult(true, null);
                } return ValidationResult.SUCCESS; }
            }
            exp4j.ValidationResult = ValidationResult;
            ValidationResult["__class"] = "net.objecthunter.exp4j.ValidationResult";
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=ValidationResult.js.map