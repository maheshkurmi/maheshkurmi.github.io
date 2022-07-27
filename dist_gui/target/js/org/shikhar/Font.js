/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        /**
         * Creates new font  from resource
         * @param {string} name can be the name of loaded string
         * @param {CanvasRenderingContext2D} context
         * @class
         */
        class Font {
            constructor(name, context) {
                if (this.context === undefined) {
                    this.context = null;
                }
                if (this.name === undefined) {
                    this.name = null;
                }
                if (this.textMatrix === undefined) {
                    this.textMatrix = null;
                }
                this.name = name;
                this.setContext(context);
            }
            setContext(context) {
                this.context = context;
                this.textMatrix = context.measureText("agh");
            }
            getName() {
                return this.name;
            }
            /**
             * Gets the standard height of  text in this font.
             * It is the sum of the  ascent + descent.
             * @return    {number} the standard height of the font.
             * @see       #getAscent()
             * @see       #getDescent()
             */
            getHeight() {
                return 20;
            }
            /**
             * Returns the advance width of the specified character in this
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * character's baseline.  Note that the advance of a
             * <code>String</code> is not necessarily the sum of the advances
             * of its characters.
             *
             * <p><b>Note:</b> This method cannot handle <a
             * href="../lang/Character.html#supplementary"> supplementary
             * characters</a>. To support all Unicode characters, including
             * supplementary characters, use the {@link #charWidth(int)} method.
             *
             * @param {string} ch the character to be measured
             * @return     {number} the advance width of the specified character
             * in the <code>Font</code> described by this
             * <code>FontMetrics</code> object.
             * @see        #charsWidth(char[], int, int)
             * @see        #stringWidth(String)
             */
            charWidth(ch) {
                return (this.context.measureText(ch + "").width | 0);
            }
            /**
             * Returns the total advance width for showing the specified
             * <code>String</code> in this <code>Font</code>.  The advance
             * is the distance from the leftmost point to the rightmost point
             * on the string's baseline.
             * <p>
             * Note that the advance of a <code>String</code> is
             * not necessarily the sum of the advances of its characters.
             * @param {string} str the <code>String</code> to be measured
             * @return    {number} the advance width of the specified <code>String</code>
             * in the <code>Font</code> described by this
             * <code>FontMetrics</code>.
             * @throws NullPointerException if str is null.
             * @see       #bytesWidth(byte[], int, int)
             * @see       #charsWidth(char[], int, int)
             * @see       #getStringBounds(String, Graphics)
             */
            stringWidth(str) {
                return (this.context.measureText(str + "").width | 0);
            }
            /**
             * Returns the total advance width for showing the specified array
             * of characters in this <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * string's baseline.  The advance of a <code>String</code>
             * is not necessarily the sum of the advances of its characters.
             * This is equivalent to measuring a <code>String</code> of the
             * characters in the specified range.
             * @param {char[]} data the array of characters to be measured
             * @param {number} off the start offset of the characters in the array
             * @param {number} len the number of characters to be measured from the array
             * @return    {number} the advance width of the subarray of the specified
             * <code>char</code> array in the font described by
             * this <code>FontMetrics</code> object.
             * @throws    NullPointerException if <code>data</code> is null.
             * @throws    IndexOutOfBoundsException if the <code>off</code>
             * and <code>len</code> arguments index characters outside
             * the bounds of the <code>data</code> array.
             * @see       #charWidth(int)
             * @see       #charWidth(char)
             * @see       #bytesWidth(byte[], int, int)
             * @see       #stringWidth(String)
             */
            charsWidth(data, off, len) {
                return this.stringWidth(((str, index, len) => str.substring(index, index + len))((data).join(''), off, len));
            }
            /**
             * returns height of character
             * @param {string} ch
             * @return
             * @return {number}
             */
            charHeight(ch) {
                return this.getHeight();
            }
            getAscent() {
                return 15;
            }
            update() {
            }
            getLeading() {
                return 2;
            }
            getDescent() {
                return 6;
            }
        }
        shikhar.Font = Font;
        Font["__class"] = "org.shikhar.Font";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Font.js.map