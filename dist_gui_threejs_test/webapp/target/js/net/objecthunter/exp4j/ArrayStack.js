/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var net;
(function (net) {
    var objecthunter;
    (function (objecthunter) {
        var exp4j;
        (function (exp4j) {
            /**
             * Simple double stack using a double array as data storage
             *
             * @author Federico Vera (dktcoding [at] gmail)
             * @class
             */
            class ArrayStack {
                constructor(initialCapacity) {
                    if (((typeof initialCapacity === 'number') || initialCapacity === null)) {
                        let __args = arguments;
                        if (this.data === undefined) {
                            this.data = null;
                        }
                        if (this.idx === undefined) {
                            this.idx = 0;
                        }
                        if (initialCapacity <= 0) {
                            throw new java.lang.IllegalArgumentException("Stack\'s capacity must be positive");
                        }
                        this.data = (s => { let a = []; while (s-- > 0)
                            a.push(0); return a; })(initialCapacity);
                        this.idx = -1;
                    }
                    else if (initialCapacity === undefined) {
                        let __args = arguments;
                        {
                            let __args = arguments;
                            let initialCapacity = 5;
                            if (this.data === undefined) {
                                this.data = null;
                            }
                            if (this.idx === undefined) {
                                this.idx = 0;
                            }
                            if (initialCapacity <= 0) {
                                throw new java.lang.IllegalArgumentException("Stack\'s capacity must be positive");
                            }
                            this.data = (s => { let a = []; while (s-- > 0)
                                a.push(0); return a; })(initialCapacity);
                            this.idx = -1;
                        }
                        if (this.data === undefined) {
                            this.data = null;
                        }
                        if (this.idx === undefined) {
                            this.idx = 0;
                        }
                    }
                    else
                        throw new Error('invalid overload');
                }
                push(value) {
                    if (this.idx + 1 === this.data.length) {
                        const temp = (s => { let a = []; while (s-- > 0)
                            a.push(0); return a; })(((this.data.length * 1.2) | 0) + 1);
                        java.lang.System.arraycopy(this.data, 0, temp, 0, this.data.length);
                        this.data = temp;
                    }
                    this.data[++this.idx] = value;
                }
                peek() {
                    if (this.idx === -1) {
                        throw new java.util.EmptyStackException();
                    }
                    return this.data[this.idx];
                }
                pop() {
                    if (this.idx === -1) {
                        throw new java.util.EmptyStackException();
                    }
                    return this.data[this.idx--];
                }
                isEmpty() {
                    return this.idx === -1;
                }
                size() {
                    return this.idx + 1;
                }
            }
            exp4j.ArrayStack = ArrayStack;
            ArrayStack["__class"] = "net.objecthunter.exp4j.ArrayStack";
        })(exp4j = objecthunter.exp4j || (objecthunter.exp4j = {}));
    })(objecthunter = net.objecthunter || (net.objecthunter = {}));
})(net || (net = {}));
//# sourceMappingURL=ArrayStack.js.map