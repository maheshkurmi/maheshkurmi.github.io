/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class CanvasDrawing {
            constructor() {
                if (this.ctx === undefined) {
                    this.ctx = null;
                }
                this.angle = 0;
                this.prevTime = -1;
                console.info("creating canvas drawing example");
                CanvasDrawing.canvas = document.getElementById("canvas");
                CanvasDrawing.backgroundLayer = document.getElementById("backgroundLayer");
                const body = document.querySelector("body");
                const size = Math.min(body.clientHeight, body.clientWidth);
                CanvasDrawing.canvas.width = 2 * body.clientWidth;
                CanvasDrawing.canvas.height = 2 * body.clientHeight;
                CanvasDrawing.canvas.style.top = "0px";
                CanvasDrawing.canvas.style.left = "0px";
                CanvasDrawing.canvas.style.width = body.clientWidth + "px";
                CanvasDrawing.canvas.style.height = body.clientHeight + "px";
                CanvasDrawing.backgroundLayer.style.top = "0px";
                CanvasDrawing.backgroundLayer.style.left = "0px";
                CanvasDrawing.backgroundLayer.style.width = body.clientWidth + "px";
                CanvasDrawing.backgroundLayer.style.height = body.clientHeight + "px";
                window.addEventListener("resize", (event) => { return CanvasDrawing.onWindowResize(event); }, false);
                this.ctx = CanvasDrawing.canvas.getContext("2d");
                CanvasDrawing.gui = new org.shikhar.Gui(CanvasDrawing.canvas);
                const demoxml = "<dialog text=\"Find\" columns=\"3\" top=\"4\" left=\"4\" bottom=\"4\" right=\"4\" gap=\"4\">\r\n\t<label text=\"Find what:\" colspan=\"3\" />\r\n\t<combobox name=\"ch_what\" colspan=\"3\" valign=\"center\" />\r\n\t<label text=\"Direction:\" alignment=\"right\" />\r\n\t<checkbox name=\"rb_up\" text=\"Up\" group=\"direction\" />\r\n\t<checkbox name=\"rb_down\" text=\"Down\" group=\"direction\" selected=\"true\" />\r\n\t<checkbox name=\"cb_match\" text=\"Match case\" selected=\"true\" colspan=\"3\"/>\r\n\t<button name=\"b_cancel\" text=\"Cancel\" type=\"default\" action=\"closeDialog\" />\r\n\t<button name=\"b_find\" type=\"default\" text=\"Find next\"\r\n\t\t\taction=\"findText(ch_what, ch_what.text, cb_match.selected, rb_down.selected)\" />\r\n\t<label />\r\n</dialog>";
                const dlg = org.shikhar.Gui.create("dialog");
                console.log(dlg);
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(dlg, "columns", 2);
                CanvasDrawing.gui.setBoolean$java_lang_Object$java_lang_String$boolean(dlg, "resizable", true);
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(dlg, "gap", 6);
                CanvasDrawing.gui.setString$java_lang_Object$java_lang_String$java_lang_String(dlg, "text", "Text Header");
                let btn = org.shikhar.Gui.create("button");
                CanvasDrawing.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "text", "Click Me !");
                CanvasDrawing.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "tooltip", "Don\'t try to mesh with Me!");
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "width", 100);
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "height", 50);
                CanvasDrawing.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                btn = org.shikhar.Gui.create("button");
                CanvasDrawing.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "text", "Hello world!");
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "width", 100);
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "height", 50);
                CanvasDrawing.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                btn = org.shikhar.Gui.create("slider");
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "minimum", 10);
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "maximum", 50);
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "colspan", 2);
                CanvasDrawing.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                btn = org.shikhar.Gui.create("label");
                CanvasDrawing.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "text", "Textarea Demo!");
                CanvasDrawing.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                btn = org.shikhar.Gui.create("textarea");
                CanvasDrawing.gui.setString$java_lang_Object$java_lang_String$java_lang_String(btn, "text", "Hello world! \n Whats ip......\n Thats good !");
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "weightx", 1);
                CanvasDrawing.gui.setInteger$java_lang_Object$java_lang_String$int(btn, "weighty", 1);
                CanvasDrawing.gui.add$java_lang_Object$java_lang_Object(dlg, btn);
                CanvasDrawing.gui.add$java_lang_Object(dlg);
                const client = new XMLHttpRequest();
                client.open("GET", "Grapher.xml");
                client.onloadend = ((client) => {
                    return (e) => {
                        try {
                            const xml = client.responseText;
                            const o = CanvasDrawing.gui.parsefromString(xml, true, true, null);
                            console.log(o);
                            CanvasDrawing.gui.add$java_lang_Object(o);
                        }
                        catch (ex) {
                            console.error(ex.message, ex);
                        }
                        return null;
                    };
                })(client);
                client.send();
                this.prevTime = window.performance.now();
                this.draw();
            }
            static main(args) {
                window.onload = (e) => {
                    return new CanvasDrawing();
                };
            }
            static onWindowResize(event) {
                CanvasDrawing.gui.setViewPort((window.innerWidth | 0), (window.innerHeight | 0));
                return null;
            }
            /*private*/ draw() {
                const color = ((Math.pow(2, 8 * Math.floor(this.angle / Math.PI * 2) - 1)) | 0);
                window.requestAnimationFrame((time) => {
                    const dt = ((time - this.prevTime) | 0);
                    this.prevTime = time;
                    this.draw();
                    CanvasDrawing.gui.updateUI(dt, false);
                });
                CanvasDrawing.gui.render();
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
        CanvasDrawing.canvas = null;
        CanvasDrawing.gui = null;
        CanvasDrawing.backgroundLayer = null;
        shikhar.CanvasDrawing = CanvasDrawing;
        CanvasDrawing["__class"] = "org.shikhar.CanvasDrawing";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
org.shikhar.CanvasDrawing.main(null);
//# sourceMappingURL=CanvasDrawing.js.map