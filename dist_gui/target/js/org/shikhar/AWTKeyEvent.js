/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class AWTKeyEvent extends org.shikhar.InputEvent {
            constructor(id, mask) {
                super(id, mask);
                this.consumed = false;
                if (this.key === undefined) {
                    this.key = 0;
                }
                if (this.keyChar === undefined) {
                    this.keyChar = 0;
                }
            }
            static KEY_TYPED_$LI$() { if (AWTKeyEvent.KEY_TYPED == null) {
                AWTKeyEvent.KEY_TYPED = AWTKeyEvent.KEY_FIRST;
            } return AWTKeyEvent.KEY_TYPED; }
            static KEY_PRESSED_$LI$() { if (AWTKeyEvent.KEY_PRESSED == null) {
                AWTKeyEvent.KEY_PRESSED = 1 + AWTKeyEvent.KEY_FIRST;
            } return AWTKeyEvent.KEY_PRESSED; }
            static KEY_RELEASED_$LI$() { if (AWTKeyEvent.KEY_RELEASED == null) {
                AWTKeyEvent.KEY_RELEASED = 2 + AWTKeyEvent.KEY_FIRST;
            } return AWTKeyEvent.KEY_RELEASED; }
            static VK_SEPARATOR_$LI$() { if (AWTKeyEvent.VK_SEPARATOR == null) {
                AWTKeyEvent.VK_SEPARATOR = AWTKeyEvent.VK_SEPARATER;
            } return AWTKeyEvent.VK_SEPARATOR; }
            static getKeyModifiersText(keycode) {
                return "" + String.fromCharCode(keycode);
            }
            static getKeyText(modifiers) {
                return "" + String.fromCharCode(modifiers);
            }
            static isWhitespace(ch) {
                const c = (ch).charCodeAt(0);
                if ((c === 32) || (c === 5760) || (c === 6158) || ((c >= 8192) && (c <= 8198)) || ((c >= 8200) && (c <= 8203)) || (c === 8287) || (c === 12288)) {
                    return true;
                }
                if (c === 8232) {
                    return true;
                }
                if (c === 8233) {
                    return true;
                }
                if (((c >= 9) && (c <= 13)) || ((c >= 28) && (c <= 31))) {
                    return true;
                }
                return false;
            }
            getKeyChar() {
                return this.keyChar;
            }
            getKeyCode() {
                return this.key;
            }
            consume() {
                this.consumed = true;
            }
            isAltDown() {
                return false;
            }
            setKey(key) {
                this.key = key;
            }
            setKeyChar(keyChar) {
                this.keyChar = keyChar;
            }
            isActionKey() {
                return false;
            }
            static isLetterOrDigit(c) {
                return !AWTKeyEvent.isWhitespace(c);
            }
            static getField(string) {
                return 0;
            }
        }
        /**
         * The first number in the range of ids used for key events.
         */
        AWTKeyEvent.KEY_FIRST = 400;
        /**
         * The last number in the range of ids used for key events.
         */
        AWTKeyEvent.KEY_LAST = 402;
        AWTKeyEvent.VK_ENTER = ('\n').charCodeAt(0);
        AWTKeyEvent.VK_BACK_SPACE = ('\b').charCodeAt(0);
        AWTKeyEvent.VK_TAB = ('\t').charCodeAt(0);
        AWTKeyEvent.VK_CANCEL = 3;
        AWTKeyEvent.VK_CLEAR = 12;
        AWTKeyEvent.VK_SHIFT = 16;
        AWTKeyEvent.VK_CONTROL = 17;
        AWTKeyEvent.VK_ALT = 18;
        AWTKeyEvent.VK_PAUSE = 19;
        AWTKeyEvent.VK_CAPS_LOCK = 20;
        AWTKeyEvent.VK_ESCAPE = 27;
        AWTKeyEvent.VK_SPACE = 32;
        AWTKeyEvent.VK_PAGE_UP = 33;
        AWTKeyEvent.VK_PAGE_DOWN = 34;
        AWTKeyEvent.VK_END = 35;
        AWTKeyEvent.VK_HOME = 36;
        /**
         * Constant for the non-numpad <b>left</b> arrow key.
         * @see #VK_KP_LEFT
         */
        AWTKeyEvent.VK_LEFT = 37;
        /**
         * Constant for the non-numpad <b>up</b> arrow key.
         * @see #VK_KP_UP
         */
        AWTKeyEvent.VK_UP = 38;
        /**
         * Constant for the non-numpad <b>right</b> arrow key.
         * @see #VK_KP_RIGHT
         */
        AWTKeyEvent.VK_RIGHT = 39;
        /**
         * Constant for the non-numpad <b>down</b> arrow key.
         * @see #VK_KP_DOWN
         */
        AWTKeyEvent.VK_DOWN = 40;
        /**
         * Constant for the comma key, ","
         */
        AWTKeyEvent.VK_COMMA = 44;
        /**
         * Constant for the minus key, "-"
         * @since 1.2
         */
        AWTKeyEvent.VK_MINUS = 45;
        /**
         * Constant for the period key, "."
         */
        AWTKeyEvent.VK_PERIOD = 46;
        /**
         * Constant for the forward slash key, "/"
         */
        AWTKeyEvent.VK_SLASH = 47;
        /**
         * VK_0 thru VK_9 are the same as ASCII '0' thru '9' (0x30 - 0x39)
         */
        AWTKeyEvent.VK_0 = 48;
        AWTKeyEvent.VK_1 = 49;
        AWTKeyEvent.VK_2 = 50;
        AWTKeyEvent.VK_3 = 51;
        AWTKeyEvent.VK_4 = 52;
        AWTKeyEvent.VK_5 = 53;
        AWTKeyEvent.VK_6 = 54;
        AWTKeyEvent.VK_7 = 55;
        AWTKeyEvent.VK_8 = 56;
        AWTKeyEvent.VK_9 = 57;
        /**
         * Constant for the semicolon key, ";"
         */
        AWTKeyEvent.VK_SEMICOLON = 59;
        /**
         * Constant for the equals key, "="
         */
        AWTKeyEvent.VK_EQUALS = 61;
        /**
         * VK_A thru VK_Z are the same as ASCII 'A' thru 'Z' (0x41 - 0x5A)
         */
        AWTKeyEvent.VK_A = 65;
        AWTKeyEvent.VK_B = 66;
        AWTKeyEvent.VK_C = 67;
        AWTKeyEvent.VK_D = 68;
        AWTKeyEvent.VK_E = 69;
        AWTKeyEvent.VK_F = 70;
        AWTKeyEvent.VK_G = 71;
        AWTKeyEvent.VK_H = 72;
        AWTKeyEvent.VK_I = 73;
        AWTKeyEvent.VK_J = 74;
        AWTKeyEvent.VK_K = 75;
        AWTKeyEvent.VK_L = 76;
        AWTKeyEvent.VK_M = 77;
        AWTKeyEvent.VK_N = 78;
        AWTKeyEvent.VK_O = 79;
        AWTKeyEvent.VK_P = 80;
        AWTKeyEvent.VK_Q = 81;
        AWTKeyEvent.VK_R = 82;
        AWTKeyEvent.VK_S = 83;
        AWTKeyEvent.VK_T = 84;
        AWTKeyEvent.VK_U = 85;
        AWTKeyEvent.VK_V = 86;
        AWTKeyEvent.VK_W = 87;
        AWTKeyEvent.VK_X = 88;
        AWTKeyEvent.VK_Y = 89;
        AWTKeyEvent.VK_Z = 90;
        /**
         * Constant for the open bracket key, "["
         */
        AWTKeyEvent.VK_OPEN_BRACKET = 91;
        /**
         * Constant for the back slash key, "\"
         */
        AWTKeyEvent.VK_BACK_SLASH = 92;
        /**
         * Constant for the close bracket key, "]"
         */
        AWTKeyEvent.VK_CLOSE_BRACKET = 93;
        AWTKeyEvent.VK_NUMPAD0 = 96;
        AWTKeyEvent.VK_NUMPAD1 = 97;
        AWTKeyEvent.VK_NUMPAD2 = 98;
        AWTKeyEvent.VK_NUMPAD3 = 99;
        AWTKeyEvent.VK_NUMPAD4 = 100;
        AWTKeyEvent.VK_NUMPAD5 = 101;
        AWTKeyEvent.VK_NUMPAD6 = 102;
        AWTKeyEvent.VK_NUMPAD7 = 103;
        AWTKeyEvent.VK_NUMPAD8 = 104;
        AWTKeyEvent.VK_NUMPAD9 = 105;
        AWTKeyEvent.VK_MULTIPLY = 106;
        AWTKeyEvent.VK_ADD = 107;
        /**
         * This constant is obsolete, and is included only for backwards
         * compatibility.
         * @see #VK_SEPARATOR
         */
        AWTKeyEvent.VK_SEPARATER = 108;
        AWTKeyEvent.VK_SUBTRACT = 109;
        AWTKeyEvent.VK_DECIMAL = 110;
        AWTKeyEvent.VK_DIVIDE = 111;
        AWTKeyEvent.VK_DELETE = 127;
        AWTKeyEvent.VK_NUM_LOCK = 144;
        AWTKeyEvent.VK_SCROLL_LOCK = 145;
        /**
         * Constant for the F1 function key.
         */
        AWTKeyEvent.VK_F1 = 112;
        /**
         * Constant for the F2 function key.
         */
        AWTKeyEvent.VK_F2 = 113;
        /**
         * Constant for the F3 function key.
         */
        AWTKeyEvent.VK_F3 = 114;
        /**
         * Constant for the F4 function key.
         */
        AWTKeyEvent.VK_F4 = 115;
        /**
         * Constant for the F5 function key.
         */
        AWTKeyEvent.VK_F5 = 116;
        /**
         * Constant for the F6 function key.
         */
        AWTKeyEvent.VK_F6 = 117;
        /**
         * Constant for the F7 function key.
         */
        AWTKeyEvent.VK_F7 = 118;
        /**
         * Constant for the F8 function key.
         */
        AWTKeyEvent.VK_F8 = 119;
        /**
         * Constant for the F9 function key.
         */
        AWTKeyEvent.VK_F9 = 120;
        /**
         * Constant for the F10 function key.
         */
        AWTKeyEvent.VK_F10 = 121;
        /**
         * Constant for the F11 function key.
         */
        AWTKeyEvent.VK_F11 = 122;
        /**
         * Constant for the F12 function key.
         */
        AWTKeyEvent.VK_F12 = 123;
        /**
         * Constant for the F13 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F13 = 61440;
        /**
         * Constant for the F14 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F14 = 61441;
        /**
         * Constant for the F15 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F15 = 61442;
        /**
         * Constant for the F16 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F16 = 61443;
        /**
         * Constant for the F17 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F17 = 61444;
        /**
         * Constant for the F18 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F18 = 61445;
        /**
         * Constant for the F19 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F19 = 61446;
        /**
         * Constant for the F20 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F20 = 61447;
        /**
         * Constant for the F21 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F21 = 61448;
        /**
         * Constant for the F22 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F22 = 61449;
        /**
         * Constant for the F23 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F23 = 61450;
        /**
         * Constant for the F24 function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_F24 = 61451;
        AWTKeyEvent.VK_PRINTSCREEN = 154;
        AWTKeyEvent.VK_INSERT = 155;
        AWTKeyEvent.VK_HELP = 156;
        AWTKeyEvent.VK_META = 157;
        AWTKeyEvent.VK_BACK_QUOTE = 192;
        AWTKeyEvent.VK_QUOTE = 222;
        /**
         * Constant for the numeric keypad <b>up</b> arrow key.
         * @see #VK_UP
         * @since 1.2
         */
        AWTKeyEvent.VK_KP_UP = 224;
        /**
         * Constant for the numeric keypad <b>down</b> arrow key.
         * @see #VK_DOWN
         * @since 1.2
         */
        AWTKeyEvent.VK_KP_DOWN = 225;
        /**
         * Constant for the numeric keypad <b>left</b> arrow key.
         * @see #VK_LEFT
         * @since 1.2
         */
        AWTKeyEvent.VK_KP_LEFT = 226;
        /**
         * Constant for the numeric keypad <b>right</b> arrow key.
         * @see #VK_RIGHT
         * @since 1.2
         */
        AWTKeyEvent.VK_KP_RIGHT = 227;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_GRAVE = 128;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_ACUTE = 129;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_CIRCUMFLEX = 130;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_TILDE = 131;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_MACRON = 132;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_BREVE = 133;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_ABOVEDOT = 134;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_DIAERESIS = 135;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_ABOVERING = 136;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_DOUBLEACUTE = 137;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_CARON = 138;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_CEDILLA = 139;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_OGONEK = 140;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_IOTA = 141;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_VOICED_SOUND = 142;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_DEAD_SEMIVOICED_SOUND = 143;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_AMPERSAND = 150;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_ASTERISK = 151;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_QUOTEDBL = 152;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_LESS = 153;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_GREATER = 160;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_BRACELEFT = 161;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_BRACERIGHT = 162;
        /**
         * Constant for the "@" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_AT = 512;
        /**
         * Constant for the ":" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_COLON = 513;
        /**
         * Constant for the "^" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_CIRCUMFLEX = 514;
        /**
         * Constant for the "$" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_DOLLAR = 515;
        /**
         * Constant for the Euro currency sign key.
         * @since 1.2
         */
        AWTKeyEvent.VK_EURO_SIGN = 516;
        /**
         * Constant for the "!" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_EXCLAMATION_MARK = 517;
        /**
         * Constant for the inverted exclamation mark key.
         * @since 1.2
         */
        AWTKeyEvent.VK_INVERTED_EXCLAMATION_MARK = 518;
        /**
         * Constant for the "(" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_LEFT_PARENTHESIS = 519;
        /**
         * Constant for the "#" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_NUMBER_SIGN = 520;
        /**
         * Constant for the "+" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_PLUS = 521;
        /**
         * Constant for the ")" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_RIGHT_PARENTHESIS = 522;
        /**
         * Constant for the "_" key.
         * @since 1.2
         */
        AWTKeyEvent.VK_UNDERSCORE = 523;
        /**
         * Constant for the Microsoft Windows "Windows" key.
         * It is used for both the left and right version of the key.
         * @see #getKeyLocation()
         * @since 1.5
         */
        AWTKeyEvent.VK_WINDOWS = 524;
        /**
         * Constant for the Microsoft Windows Context Menu key.
         * @since 1.5
         */
        AWTKeyEvent.VK_CONTEXT_MENU = 525;
        AWTKeyEvent.VK_FINAL = 24;
        /**
         * Constant for the Convert function key.
         */
        AWTKeyEvent.VK_CONVERT = 28;
        /**
         * Constant for the Don't Convert function key.
         */
        AWTKeyEvent.VK_NONCONVERT = 29;
        /**
         * Constant for the Accept or Commit function key.
         */
        AWTKeyEvent.VK_ACCEPT = 30;
        AWTKeyEvent.VK_MODECHANGE = 31;
        AWTKeyEvent.VK_KANA = 21;
        AWTKeyEvent.VK_KANJI = 25;
        /**
         * Constant for the Alphanumeric function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_ALPHANUMERIC = 240;
        /**
         * Constant for the Katakana function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_KATAKANA = 241;
        /**
         * Constant for the Hiragana function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_HIRAGANA = 242;
        /**
         * Constant for the Full-Width Characters function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_FULL_WIDTH = 243;
        /**
         * Constant for the Half-Width Characters function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_HALF_WIDTH = 244;
        /**
         * Constant for the Roman Characters function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_ROMAN_CHARACTERS = 245;
        /**
         * Constant for the All Candidates function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_ALL_CANDIDATES = 256;
        /**
         * Constant for the Previous Candidate function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_PREVIOUS_CANDIDATE = 257;
        /**
         * Constant for the Code Input function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_CODE_INPUT = 258;
        /**
         * Constant for the Japanese-Katakana function key.
         * This key switches to a Japanese input method and selects its Katakana input mode.
         * @since 1.2
         */
        AWTKeyEvent.VK_JAPANESE_KATAKANA = 259;
        /**
         * Constant for the Japanese-Hiragana function key.
         * This key switches to a Japanese input method and selects its Hiragana input mode.
         * @since 1.2
         */
        AWTKeyEvent.VK_JAPANESE_HIRAGANA = 260;
        /**
         * Constant for the Japanese-Roman function key.
         * This key switches to a Japanese input method and selects its Roman-Direct input mode.
         * @since 1.2
         */
        AWTKeyEvent.VK_JAPANESE_ROMAN = 261;
        /**
         * Constant for the locking Kana function key.
         * This key locks the keyboard into a Kana layout.
         * @since 1.3
         */
        AWTKeyEvent.VK_KANA_LOCK = 262;
        /**
         * Constant for the input method on/off key.
         * @since 1.3
         */
        AWTKeyEvent.VK_INPUT_METHOD_ON_OFF = 263;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_CUT = 65489;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_COPY = 65485;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_PASTE = 65487;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_UNDO = 65483;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_AGAIN = 65481;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_FIND = 65488;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_PROPS = 65482;
        /**
         * @since 1.2
         */
        AWTKeyEvent.VK_STOP = 65480;
        /**
         * Constant for the Compose function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_COMPOSE = 65312;
        /**
         * Constant for the AltGraph function key.
         * @since 1.2
         */
        AWTKeyEvent.VK_ALT_GRAPH = 65406;
        /**
         * Constant for the Begin key.
         * @since 1.5
         */
        AWTKeyEvent.VK_BEGIN = 65368;
        /**
         * This value is used to indicate that the keyCode is unknown.
         * KEY_TYPED events do not have a keyCode value; this value
         * is used instead.
         */
        AWTKeyEvent.VK_UNDEFINED = 0;
        /**
         * KEY_PRESSED and KEY_RELEASED events which do not map to a
         * valid Unicode character use this for the keyChar value.
         */
        AWTKeyEvent.CHAR_UNDEFINED = String.fromCharCode(65535);
        /**
         * A constant indicating that the keyLocation is indeterminate
         * or not relevant.
         * <code>KEY_TYPED</code> events do not have a keyLocation; this value
         * is used instead.
         * @since 1.4
         */
        AWTKeyEvent.KEY_LOCATION_UNKNOWN = 0;
        /**
         * A constant indicating that the key pressed or released
         * is not distinguished as the left or right version of a key,
         * and did not originate on the numeric keypad (or did not
         * originate with a virtual key corresponding to the numeric
         * keypad).
         * @since 1.4
         */
        AWTKeyEvent.KEY_LOCATION_STANDARD = 1;
        /**
         * A constant indicating that the key pressed or released is in
         * the left key location (there is more than one possible location
         * for this key).  Example: the left shift key.
         * @since 1.4
         */
        AWTKeyEvent.KEY_LOCATION_LEFT = 2;
        /**
         * A constant indicating that the key pressed or released is in
         * the right key location (there is more than one possible location
         * for this key).  Example: the right shift key.
         * @since 1.4
         */
        AWTKeyEvent.KEY_LOCATION_RIGHT = 3;
        /**
         * A constant indicating that the key event originated on the
         * numeric keypad or with a virtual key corresponding to the
         * numeric keypad.
         * @since 1.4
         */
        AWTKeyEvent.KEY_LOCATION_NUMPAD = 4;
        shikhar.AWTKeyEvent = AWTKeyEvent;
        AWTKeyEvent["__class"] = "org.shikhar.AWTKeyEvent";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=AWTKeyEvent.js.map