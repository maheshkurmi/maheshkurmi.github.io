/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            var __function;
            (function (__function) {
                /**
                 * Create a new Function with a given name and number of arguments
                 *
                 * @param {string} name the name of the Function
                 * @param {number} numArguments the number of arguments the function takes
                 * @class
                 */
                class _Function {
                    constructor(name, numArguments) {
                        if (((typeof name === 'string') || name === null) && ((typeof numArguments === 'number') || numArguments === null)) {
                            let __args = arguments;
                            if (this.name === undefined) {
                                this.name = null;
                            }
                            if (this.numArguments === undefined) {
                                this.numArguments = 0;
                            }
                            if (numArguments < 0) {
                                throw new java.lang.IllegalArgumentException("The number of function arguments can not be less than 0 for \'" + name + "\'");
                            }
                            if (!_Function.isValidFunctionName(name)) {
                                throw new java.lang.IllegalArgumentException("The function name \'" + name + "\' is invalid");
                            }
                            this.name = name;
                            this.numArguments = numArguments;
                        }
                        else if (((typeof name === 'string') || name === null) && numArguments === undefined) {
                            let __args = arguments;
                            {
                                let __args = arguments;
                                let numArguments = 1;
                                if (this.name === undefined) {
                                    this.name = null;
                                }
                                if (this.numArguments === undefined) {
                                    this.numArguments = 0;
                                }
                                if (numArguments < 0) {
                                    throw new java.lang.IllegalArgumentException("The number of function arguments can not be less than 0 for \'" + name + "\'");
                                }
                                if (!_Function.isValidFunctionName(name)) {
                                    throw new java.lang.IllegalArgumentException("The function name \'" + name + "\' is invalid");
                                }
                                this.name = name;
                                this.numArguments = numArguments;
                            }
                            if (this.name === undefined) {
                                this.name = null;
                            }
                            if (this.numArguments === undefined) {
                                this.numArguments = 0;
                            }
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    /**
                     * Get the name of the Function
                     *
                     * @return {string} the name
                     */
                    getName() {
                        return this.name;
                    }
                    /**
                     * Get the number of arguments for this function
                     *
                     * @return {number} the number of arguments
                     */
                    getNumArguments() {
                        return this.numArguments;
                    }
                    /**
                     * Get the set of characters which are allowed for use in Function names.
                     *
                     * @return {char[]} the set of characters allowed
                     * @deprecated since 0.4.5 All unicode letters are allowed to be used in function names since 0.4.3. This API
                     * Function can be safely ignored. Checks for function name validity can be done using Character.isLetter() et al.
                     */
                    static getAllowedFunctionCharacters() {
                        const chars = (s => { let a = []; while (s-- > 0)
                            a.push(null); return a; })(53);
                        let count = 0;
                        for (let i = 65; i < 91; i++) {
                            {
                                chars[count++] = String.fromCharCode(i);
                            }
                            ;
                        }
                        for (let i = 97; i < 123; i++) {
                            {
                                chars[count++] = String.fromCharCode(i);
                            }
                            ;
                        }
                        chars[count] = '_';
                        return chars;
                    }
                    static isValidFunctionName(name) {
                        if (name == null) {
                            return false;
                        }
                        const size = name.length;
                        if (size === 0) {
                            return false;
                        }
                        for (let i = 0; i < size; i++) {
                            {
                                const c = name.charAt(i);
                                if (javaemul.internal.CharacterHelper.isLetter(c) || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '_'.charCodeAt(0)) {
                                    continue;
                                }
                                else if (javaemul.internal.CharacterHelper.isDigit(c) && i > 0) {
                                    continue;
                                }
                                return false;
                            }
                            ;
                        }
                        return true;
                    }
                }
                __function._Function = _Function;
                _Function["__class"] = "net.objecthunter.exp4j.function._Function";
            })(__function = exp4j.__function || (exp4j.__function = {}));
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=_Function.js.map