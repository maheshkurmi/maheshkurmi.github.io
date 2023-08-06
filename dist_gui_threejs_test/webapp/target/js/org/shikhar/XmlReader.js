/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * A minimalistic XML pull parser, similar to kXML, but
         * not supporting namespaces or legacy events. If you need
         * support for namespaces, or access to XML comments or
         * processing instructions, please use kXML(2) instead.
         * @param {java.io.Reader} reader
         * @class
         */
        class XmlReader {
            constructor(reader) {
                if (this.relaxed === undefined) {
                    this.relaxed = false;
                }
                if (this.entityMap === undefined) {
                    this.entityMap = null;
                }
                if (this.depth === undefined) {
                    this.depth = 0;
                }
                this.elementStack = [null, null, null, null];
                if (this.reader === undefined) {
                    this.reader = null;
                }
                this.srcBuf = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(1024);
                if (this.srcPos === undefined) {
                    this.srcPos = 0;
                }
                if (this.srcCount === undefined) {
                    this.srcCount = 0;
                }
                if (this.eof === undefined) {
                    this.eof = false;
                }
                if (this.line === undefined) {
                    this.line = 0;
                }
                if (this.column === undefined) {
                    this.column = 0;
                }
                if (this.peek0 === undefined) {
                    this.peek0 = 0;
                }
                if (this.peek1 === undefined) {
                    this.peek1 = 0;
                }
                this.txtBuf = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(128);
                if (this.txtPos === undefined) {
                    this.txtPos = 0;
                }
                if (this.type === undefined) {
                    this.type = 0;
                }
                if (this.text === undefined) {
                    this.text = null;
                }
                if (this.__isWhitespace === undefined) {
                    this.__isWhitespace = false;
                }
                if (this.name === undefined) {
                    this.name = null;
                }
                if (this.degenerated === undefined) {
                    this.degenerated = false;
                }
                if (this.attributeCount === undefined) {
                    this.attributeCount = 0;
                }
                this.attributes = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(16);
                this.TYPES = ["Start Document", "End Document", "Start Tag", "End Tag", "Text"];
                this.reader = reader;
                this.peek0 = reader.read();
                this.peek1 = reader.read();
                this.eof = this.peek0 === -1;
                this.entityMap = (new java.util.Hashtable());
                this.entityMap.put("amp", "&");
                this.entityMap.put("apos", "\'");
                this.entityMap.put("gt", ">");
                this.entityMap.put("lt", "<");
                this.entityMap.put("quot", "\"");
                this.line = 1;
                this.column = 1;
            }
            /*private*/ read$() {
                const r = this.peek0;
                this.peek0 = this.peek1;
                if (this.peek0 === -1) {
                    this.eof = true;
                    return r;
                }
                else if (r == '\n'.charCodeAt(0) || r == '\r'.charCodeAt(0)) {
                    this.line++;
                    this.column = 0;
                    if (r == '\r'.charCodeAt(0) && this.peek0 == '\n'.charCodeAt(0))
                        this.peek0 = 0;
                }
                this.column++;
                if (this.srcPos >= this.srcCount) {
                    this.srcCount = this.reader.read(this.srcBuf, 0, this.srcBuf.length);
                    if (this.srcCount <= 0) {
                        this.peek1 = -1;
                        return r;
                    }
                    this.srcPos = 0;
                }
                this.peek1 = (this.srcBuf[this.srcPos++]).charCodeAt(0);
                return r;
            }
            /*private*/ exception(desc) {
                throw new java.io.IOException(desc + " pos: " + this.getPositionDescription());
            }
            /*private*/ push(c) {
                if (c === 0)
                    return;
                if (this.txtPos === this.txtBuf.length) {
                    const bigger = (s => { let a = []; while (s-- > 0)
                        a.push(null); return a; })((this.txtPos * 4 / 3 | 0) + 4);
                    java.lang.System.arraycopy(this.txtBuf, 0, bigger, 0, this.txtPos);
                    this.txtBuf = bigger;
                }
                this.txtBuf[this.txtPos++] = String.fromCharCode(c);
            }
            read$char(c) {
                if (this.read$() != (c => c.charCodeAt == null ? c : c.charCodeAt(0))(c)) {
                    if (this.relaxed) {
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) <= 32) {
                            this.skip();
                            this.read$();
                        }
                    }
                    else {
                        this.exception("expected: \'" + c + "\'");
                    }
                }
            }
            read(c) {
                if (((typeof c === 'string') || c === null)) {
                    return this.read$char(c);
                }
                else if (c === undefined) {
                    return this.read$();
                }
                else
                    throw new Error('invalid overload');
            }
            /*private*/ skip() {
                while ((!this.eof && this.peek0 <= ' '.charCodeAt(0))) {
                    this.read$();
                }
                ;
            }
            /*private*/ pop(pos) {
                const result = ((str, index, len) => str.substring(index, index + len))((this.txtBuf).join(''), pos, this.txtPos - pos);
                this.txtPos = pos;
                return result;
            }
            /*private*/ readName() {
                const pos = this.txtPos;
                let c = this.peek0;
                if ((c < 'a'.charCodeAt(0) || c > 'z'.charCodeAt(0)) && (c < 'A'.charCodeAt(0) || c > 'Z'.charCodeAt(0)) && c != '_'.charCodeAt(0) && c != ':'.charCodeAt(0) && !this.relaxed)
                    this.exception("name expected");
                do {
                    {
                        this.push(this.read$());
                        c = this.peek0;
                    }
                } while (((c >= 'a'.charCodeAt(0) && c <= 'z'.charCodeAt(0)) || (c >= 'A'.charCodeAt(0) && c <= 'Z'.charCodeAt(0)) || (c >= '0'.charCodeAt(0) && c <= '9'.charCodeAt(0)) || c == '_'.charCodeAt(0) || c == '-'.charCodeAt(0) || c == ':'.charCodeAt(0) || c == '.'.charCodeAt(0)));
                return this.pop(pos);
            }
            /*private*/ parseLegacy(push) {
                let req = "";
                let term;
                this.read$();
                let c = this.read$();
                if (c == '?'.charCodeAt(0)) {
                    term = ('?').charCodeAt(0);
                }
                else if (c == '!'.charCodeAt(0)) {
                    if (this.peek0 == '-'.charCodeAt(0)) {
                        req = "--";
                        term = ('-').charCodeAt(0);
                    }
                    else {
                        req = "DOCTYPE";
                        term = -1;
                    }
                }
                else {
                    if (c != '['.charCodeAt(0))
                        this.exception("cantreachme: " + c);
                    req = "CDATA[";
                    term = (']').charCodeAt(0);
                }
                for (let i = 0; i < req.length; i++) {
                    this.read$char(req.charAt(i));
                }
                if (term === -1)
                    this.parseDoctype();
                else {
                    while ((true)) {
                        {
                            if (this.eof)
                                this.exception(XmlReader.UNEXPECTED_EOF);
                            c = this.read$();
                            if (push)
                                this.push(c);
                            if ((term == '?'.charCodeAt(0) || c === term) && this.peek0 === term && this.peek1 == '>'.charCodeAt(0))
                                break;
                        }
                    }
                    ;
                    this.read$();
                    this.read$();
                    if (push && term != '?'.charCodeAt(0))
                        this.pop(this.txtPos - 1);
                }
            }
            /**
             * precondition: &lt! consumed
             * @private
             */
            /*private*/ parseDoctype() {
                let nesting = 1;
                while ((true)) {
                    {
                        const i = this.read$();
                        switch ((i)) {
                            case -1:
                                this.exception(XmlReader.UNEXPECTED_EOF);
                            case 60 /* '<' */:
                                nesting++;
                                break;
                            case 62 /* '>' */:
                                if ((--nesting) === 0)
                                    return;
                                break;
                        }
                    }
                }
                ;
            }
            /*private*/ parseEndTag() {
                this.read$();
                this.read$();
                this.name = this.readName();
                if (this.depth === 0 && !this.relaxed)
                    this.exception("element stack empty");
                if (this.name === (this.elementStack[this.depth - 1]))
                    this.depth--;
                else if (!this.relaxed)
                    this.exception("expected: " + this.elementStack[this.depth]);
                this.skip();
                this.read$char('>');
            }
            /*private*/ peekType() {
                switch ((this.peek0)) {
                    case -1:
                        return XmlReader.END_DOCUMENT;
                    case 38 /* '&' */:
                        return XmlReader.ENTITY_REF;
                    case 60 /* '<' */:
                        switch ((this.peek1)) {
                            case 47 /* '/' */:
                                return XmlReader.END_TAG;
                            case 91 /* '[' */:
                                return XmlReader.CDSECT;
                            case 63 /* '?' */:
                            case 33 /* '!' */:
                                return XmlReader.LEGACY;
                            default:
                                return XmlReader.START_TAG;
                        }
                    default:
                        return XmlReader.TEXT;
                }
            }
            /*private*/ static ensureCapacity(arr, required) {
                if (arr.length >= required)
                    return arr;
                const bigger = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(required + 16);
                java.lang.System.arraycopy(arr, 0, bigger, 0, arr.length);
                return bigger;
            }
            /**
             * Sets name and attributes
             * @private
             */
            /*private*/ parseStartTag() {
                this.read$();
                this.name = this.readName();
                this.elementStack = XmlReader.ensureCapacity(this.elementStack, this.depth + 1);
                this.elementStack[this.depth++] = this.name;
                while ((true)) {
                    {
                        this.skip();
                        const c = this.peek0;
                        if (c == '/'.charCodeAt(0)) {
                            this.degenerated = true;
                            this.read$();
                            this.skip();
                            this.read$char('>');
                            break;
                        }
                        if (c == '>'.charCodeAt(0)) {
                            this.read$();
                            break;
                        }
                        if (c === -1)
                            this.exception(XmlReader.UNEXPECTED_EOF);
                        const attrName = this.readName();
                        if (attrName.length === 0)
                            this.exception("attr name expected");
                        this.skip();
                        this.read$char('=');
                        this.skip();
                        let delimiter = this.read$();
                        if (delimiter != '\''.charCodeAt(0) && delimiter != '\"'.charCodeAt(0)) {
                            if (!this.relaxed)
                                this.exception("<" + this.name + ">: invalid delimiter: " + String.fromCharCode(delimiter));
                            delimiter = (' ').charCodeAt(0);
                        }
                        let i = (this.attributeCount++) << 1;
                        this.attributes = XmlReader.ensureCapacity(this.attributes, i + 4);
                        this.attributes[i++] = attrName;
                        const p = this.txtPos;
                        this.pushText(delimiter);
                        this.attributes[i] = this.pop(p);
                        if (delimiter != ' '.charCodeAt(0))
                            this.read$();
                    }
                }
                ;
            }
            /**
             * result: isWhitespace; if the setName parameter is set,
             * the name of the entity is stored in "name"
             * @return {boolean}
             */
            pushEntity() {
                this.read$();
                const pos = this.txtPos;
                while ((!this.eof && this.peek0 != ';'.charCodeAt(0))) {
                    this.push(this.read$());
                }
                ;
                const code = this.pop(pos);
                this.read$();
                if (code.length > 0 && (c => c.charCodeAt == null ? c : c.charCodeAt(0))(code.charAt(0)) == '#'.charCodeAt(0)) {
                    const c = ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(code.charAt(1)) == 'x'.charCodeAt(0) ? javaemul.internal.IntegerHelper.parseInt(code.substring(2), 16) : javaemul.internal.IntegerHelper.parseInt(code.substring(1)));
                    this.push(c);
                    return c <= ' '.charCodeAt(0);
                }
                let result = this.entityMap.get(code);
                let whitespace = true;
                if (result == null)
                    result = "&" + code + ";";
                for (let i = 0; i < result.length; i++) {
                    {
                        const c = result.charAt(i);
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) > ' '.charCodeAt(0))
                            whitespace = false;
                        this.push((c).charCodeAt(0));
                    }
                    ;
                }
                return whitespace;
            }
            /**
             * types:
             * '<': parse to any token (for nextToken ())
             * '"': parse to quote
             * ' ': parse to whitespace or '>'
             * @param {number} delimiter
             * @return {boolean}
             * @private
             */
            /*private*/ pushText(delimiter) {
                let whitespace = true;
                let next = this.peek0;
                while ((!this.eof && next !== delimiter)) {
                    {
                        if (delimiter == ' '.charCodeAt(0))
                            if (next <= ' '.charCodeAt(0) || next == '>'.charCodeAt(0))
                                break;
                        if (next == '&'.charCodeAt(0)) {
                            if (!this.pushEntity())
                                whitespace = false;
                        }
                        else {
                            if (next > ' '.charCodeAt(0))
                                whitespace = false;
                            this.push(this.read$());
                        }
                        next = this.peek0;
                    }
                }
                ;
                return whitespace;
            }
            defineCharacterEntity(entity, value) {
                this.entityMap.put(entity, value);
            }
            getDepth() {
                return this.depth;
            }
            getPositionDescription() {
                const buf = new java.lang.StringBuffer(this.type < this.TYPES.length ? this.TYPES[this.type] : "Other");
                buf.append(" @" + this.line + ":" + this.column + ": ");
                if (this.type === XmlReader.START_TAG || this.type === XmlReader.END_TAG) {
                    buf.append('<');
                    if (this.type === XmlReader.END_TAG)
                        buf.append('/');
                    buf.append(this.name);
                    buf.append('>');
                }
                else if (this.__isWhitespace)
                    buf.append("[whitespace]");
                else
                    buf.append(this.getText());
                return buf.toString();
            }
            getLineNumber() {
                return this.line;
            }
            getColumnNumber() {
                return this.column;
            }
            isWhitespace() {
                return this.__isWhitespace;
            }
            getText() {
                if (this.text == null)
                    this.text = this.pop(0);
                return this.text;
            }
            getName() {
                return this.name;
            }
            isEmptyElementTag() {
                return this.degenerated;
            }
            getAttributeCount() {
                return this.attributeCount;
            }
            getAttributeName(index) {
                if (index >= this.attributeCount)
                    throw new java.lang.IndexOutOfBoundsException();
                return this.attributes[index << 1];
            }
            getAttributeValue$int(index) {
                if (index >= this.attributeCount)
                    throw new java.lang.IndexOutOfBoundsException();
                return this.attributes[(index << 1) + 1];
            }
            getAttributeValue$java_lang_String(name) {
                for (let i = (this.attributeCount << 1) - 2; i >= 0; i -= 2) {
                    {
                        if (this.attributes[i] === name) {
                            return this.attributes[i + 1];
                        }
                    }
                    ;
                }
                return null;
            }
            getAttributeValue(name) {
                if (((typeof name === 'string') || name === null)) {
                    return this.getAttributeValue$java_lang_String(name);
                }
                else if (((typeof name === 'number') || name === null)) {
                    return this.getAttributeValue$int(name);
                }
                else
                    throw new Error('invalid overload');
            }
            getType() {
                return this.type;
            }
            next() {
                if (this.degenerated) {
                    this.type = XmlReader.END_TAG;
                    this.degenerated = false;
                    this.depth--;
                    return this.type;
                }
                this.txtPos = 0;
                this.__isWhitespace = true;
                do {
                    {
                        this.attributeCount = 0;
                        this.name = null;
                        this.text = null;
                        this.type = this.peekType();
                        switch ((this.type)) {
                            case 6 /* ENTITY_REF */:
                                this.__isWhitespace = this.pushEntity() && this.__isWhitespace;
                                this.type = XmlReader.TEXT;
                                break;
                            case 2 /* START_TAG */:
                                this.parseStartTag();
                                break;
                            case 3 /* END_TAG */:
                                this.parseEndTag();
                                break;
                            case 1 /* END_DOCUMENT */:
                                break;
                            case 4 /* TEXT */:
                                this.__isWhitespace = this.pushText(('<').charCodeAt(0)) && this.__isWhitespace;
                                break;
                            case 5 /* CDSECT */:
                                this.parseLegacy(true);
                                this.__isWhitespace = false;
                                this.type = XmlReader.TEXT;
                                break;
                            default:
                                this.parseLegacy(false);
                        }
                    }
                } while ((this.type > XmlReader.TEXT || this.type === XmlReader.TEXT && this.peekType() >= XmlReader.TEXT));
                this.__isWhitespace = this.type === XmlReader.TEXT && this.__isWhitespace;
                return this.type;
            }
            /**
             * test if the current event is of the given type and if the
             * name do match. null will match any namespace
             * and any name. If the current event is TEXT with isWhitespace()=
             * true, and the required type is not TEXT, next () is called prior
             * to the test. If the test is not passed, an exception is
             * thrown. The exception text indicates the parser position,
             * the expected event and the current event (not meeting the
             * requirement.
             *
             * <p>essentially it does this
             * <pre>
             * if (getType() == TEXT && type != TEXT && isWhitespace ())
             * next ();
             *
             * if (type != getType
             * || (name != null && !name.equals (getName ())
             * throw new XmlPullParserException ( "....");
             * </pre>
             * @param {number} type
             * @param {string} name
             */
            require(type, name) {
                if (this.type === XmlReader.TEXT && type !== XmlReader.TEXT && this.isWhitespace())
                    this.next();
                if (type !== this.type || (name != null && !(name === this.getName())))
                    this.exception("expected: " + this.TYPES[type] + "/" + name);
            }
            /**
             * If the current event is text, the value of getText is
             * returned and next() is called. Otherwise, an empty
             * String ("") is returned. Useful for reading element
             * content without needing to performing an additional
             * check if the element is empty.
             *
             * <p>essentially it does this
             * <pre>
             * if (getType != TEXT) return ""
             * String result = getText ();
             * next ();
             * return result;
             * </pre>
             * @return {string}
             */
            readText() {
                if (this.type !== XmlReader.TEXT)
                    return "";
                const result = this.getText();
                this.next();
                return result;
            }
            moveToEndElement$() {
                if (this.type === XmlReader.END_TAG)
                    return true;
                while ((this.type !== XmlReader.END_DOCUMENT)) {
                    {
                        if (this.type === XmlReader.END_TAG)
                            return true;
                        else
                            this.next();
                    }
                }
                ;
                return false;
            }
            moveToEndElement$java_lang_String(localName) {
                if (localName == null)
                    return false;
                while ((this.moveToEndElement$())) {
                    {
                        if (localName === this.name)
                            return true;
                        if (this.type === XmlReader.END_DOCUMENT)
                            return false;
                        this.next();
                    }
                }
                ;
                return false;
            }
            moveToEndElement(localName) {
                if (((typeof localName === 'string') || localName === null)) {
                    return this.moveToEndElement$java_lang_String(localName);
                }
                else if (localName === undefined) {
                    return this.moveToEndElement$();
                }
                else
                    throw new Error('invalid overload');
            }
            moveToStartElement$() {
                if (this.type === XmlReader.START_TAG)
                    return true;
                while ((this.type !== XmlReader.END_DOCUMENT)) {
                    {
                        if (this.type === XmlReader.START_TAG)
                            return true;
                        else
                            this.next();
                    }
                }
                ;
                return false;
            }
            moveToStartElement$java_lang_String(localName) {
                if (localName == null)
                    return false;
                while ((this.moveToStartElement$())) {
                    {
                        if (localName === this.name)
                            return true;
                        if (this.type === XmlReader.END_DOCUMENT)
                            return false;
                        this.next();
                    }
                }
                ;
                return false;
            }
            moveToStartElement(localName) {
                if (((typeof localName === 'string') || localName === null)) {
                    return this.moveToStartElement$java_lang_String(localName);
                }
                else if (localName === undefined) {
                    return this.moveToStartElement$();
                }
                else
                    throw new Error('invalid overload');
            }
            skipSubTree() {
                this.require(XmlReader.START_TAG, null);
                let level = 1;
                while ((level > 0)) {
                    {
                        const eventType = this.next();
                        if (eventType === XmlReader.END_TAG) {
                            --level;
                        }
                        else if (eventType === XmlReader.START_TAG) {
                            ++level;
                        }
                    }
                }
                ;
            }
        }
        /**
         * Return value of getType before first call to next()
         */
        XmlReader.START_DOCUMENT = 0;
        /**
         * Signal logical end of xml document
         */
        XmlReader.END_DOCUMENT = 1;
        /**
         * Start tag was just read
         */
        XmlReader.START_TAG = 2;
        /**
         * End tag was just read
         */
        XmlReader.END_TAG = 3;
        /**
         * Text was just read
         */
        XmlReader.TEXT = 4;
        XmlReader.CDSECT = 5;
        XmlReader.ENTITY_REF = 6;
        XmlReader.UNEXPECTED_EOF = "Unexpected EOF";
        XmlReader.LEGACY = 999;
        shikhar.XmlReader = XmlReader;
        XmlReader["__class"] = "org.shikhar.XmlReader";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=XmlReader.js.map