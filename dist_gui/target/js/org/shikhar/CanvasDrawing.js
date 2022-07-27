/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class CanvasDrawing {
            constructor() {
                if (this.canvas === undefined) {
                    this.canvas = null;
                }
                if (this.ctx === undefined) {
                    this.ctx = null;
                }
                this.angle = 0;
                if (this.gui === undefined) {
                    this.gui = null;
                }
                console.info("creating canvas drawing example");
                this.canvas = document.getElementById("canvas");
                const body = document.querySelector("body");
                const size = Math.min(body.clientHeight, body.clientWidth);
                this.canvas.width = 2 * body.clientWidth;
                this.canvas.height = 2 * body.clientHeight;
                this.canvas.style.top = "0px";
                this.canvas.style.left = "0px";
                this.canvas.style.width = body.clientWidth + "px";
                this.canvas.style.height = body.clientHeight + "px";
                this.ctx = this.canvas.getContext("2d");
                this.gui = new org.shikhar.Gui(this.canvas);
                console.log("Loading gui " + this.gui);
                const demoxml = "<dialog text=\"Find\" columns=\"3\" top=\"4\" left=\"4\" bottom=\"4\" right=\"4\" gap=\"4\">\r\n\t<label text=\"Find what:\" colspan=\"3\" />\r\n\t<combobox name=\"ch_what\" colspan=\"3\" valign=\"center\" />\r\n\t<label text=\"Direction:\" alignment=\"right\" />\r\n\t<checkbox name=\"rb_up\" text=\"Up\" group=\"direction\" />\r\n\t<checkbox name=\"rb_down\" text=\"Down\" group=\"direction\" selected=\"true\" />\r\n\t<checkbox name=\"cb_match\" text=\"Match case\" selected=\"true\" colspan=\"3\"/>\r\n\t<button name=\"b_cancel\" text=\"Cancel\" type=\"default\" action=\"closeDialog\" />\r\n\t<button name=\"b_find\" type=\"default\" text=\"Find next\"\r\n\t\t\taction=\"findText(ch_what, ch_what.text, cb_match.selected, rb_down.selected)\" />\r\n\t<label />\r\n</dialog>";
                console.log("Adding Dialog");
                const dlg = org.shikhar.Gui.create("dialog");
                console.log(dlg);
                this.gui.setInteger$java_lang_Object$java_lang_String$int(dlg, "columns", 2);
                this.gui.setBoolean$java_lang_Object$java_lang_String$boolean(dlg, "resizable", true);
                this.gui.setInteger$java_lang_Object$java_lang_String$int(dlg, "gap", 6);
                this.gui.setString$java_lang_Object$java_lang_String$java_lang_String(dlg, "text", "Text Header");
                let btn = org.shikhar.Gui.create("button");
                this.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "text", "Click Me !");
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "width", 100);
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "height", 50);
                this.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                btn = org.shikhar.Gui.create("button");
                this.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "text", "Hello world!");
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "width", 100);
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "height", 50);
                this.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                btn = org.shikhar.Gui.create("slider");
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "minimum", 10);
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "maximum", 50);
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "colspan", 2);
                this.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                btn = org.shikhar.Gui.create("label");
                this.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "text", "Textarea Demo!");
                this.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                btn = org.shikhar.Gui.create("textarea");
                this.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "text", "Hello world! \n Whats ip......\n Thats good !");
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "weightx", 1);
                this.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "weighty", 1);
                this.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                this.gui.add$java_lang_Object(dlg);
                console.log(this.gui.getDesktop());
                const client = new XMLHttpRequest();
                client.open("GET", "demo.xml");
                client.onloadend = ((client) => {
                    return (e) => {
                        try {
                            const xml = client.responseText;
                            const o = this.gui.parsefromString(xml, true, true, null);
                            console.log(o);
                            this.gui.add$java_lang_Object(o);
                        }
                        catch (ex) {
                            console.error(ex.message, ex);
                        }
                        return null;
                    };
                })(client);
                client.send();
                this.draw();
            }
            static main(args) {
                window.onload = (e) => {
                    return new CanvasDrawing();
                };
            }
            /*private*/ draw() {
                const color = ((Math.pow(2, 8 * Math.floor(this.angle / Math.PI * 2) - 1)) | 0);
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.beginPath();
                this.ctx.moveTo(this.canvas.width / 2, this.canvas.height / 2);
                this.ctx.lineTo(this.canvas.width, this.canvas.height / 2);
                this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 20, 0, this.angle);
                this.ctx.fill();
                if (this.angle < Math.PI) {
                    this.angle += 0.5;
                }
                else {
                }
                window.requestAnimationFrame((time) => {
                    this.draw();
                });
                this.gui.render();
            }
            test() {
                const a = (new Array());
                for (let index = 0; index < a.length; index++) {
                    let aTestVar = a[index];
                    {
                        console.log(a);
                    }
                }
            }
            test1$java_lang_String(aTestParam1) {
                console.log(aTestParam1);
            }
            test1(aTestParam1) {
                if (((typeof aTestParam1 === 'string') || aTestParam1 === null)) {
                    return this.test1$java_lang_String(aTestParam1);
                }
                else if (((typeof aTestParam1 === 'number') || aTestParam1 === null)) {
                    return this.test1$int(aTestParam1);
                }
                else
                    throw new Error('invalid overload');
            }
            test1$int(aTestParam2) {
                console.log(aTestParam2);
            }
        }
        shikhar.CanvasDrawing = CanvasDrawing;
        CanvasDrawing["__class"] = "org.shikhar.CanvasDrawing";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
org.shikhar.CanvasDrawing.main(null);
//# sourceMappingURL=CanvasDrawing.js.map