/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    /**
     * This class is used within the webapp/index.html file.
     * @class
     */
    class QuickStart {
        static main(args) {
            const l = (new java.util.ArrayList());
            l.add("Hello");
            l.add("world");
            const a = (new Array());
            a.push("Hello", "world");
            $("#target").text(l.toString());
            alert(a.toString());
            const nodeList = document.getElementsByTagName("div");
            for (let index = 0; index < nodeList.length; index++) {
                let element = nodeList[index];
                {
                    element.innerText = "Hello again in vanilla JS";
                }
            }
            const area = new java.awt.geom.Area(new java.awt.geom.Rectangle2D.Double(0, 0, 200, 100));
            console.info(area.getBounds2D());
            console.info(new java.awt.geom.Rectangle2D.Double(0, 0, 200, 100).getPathIterator(null));
            area.add(new java.awt.geom.Area(new java.awt.geom.Rectangle2D.Double(0, 0, 200, 100)));
            area.add(new java.awt.geom.Area(new java.awt.geom.Rectangle2D.Double(50, -50, 300, 100)));
            const rectangle = area.getBounds2D();
            console.info(rectangle.getX());
            console.info(rectangle.getY());
            console.info(rectangle.getWidth());
            console.info(rectangle.getHeight());
            for (let index = 0; index < nodeList.length; index++) {
                let element = nodeList[index];
                {
                    element.innerText = "Hello again in vanilla JS+rectangle.getWidth()" + rectangle.getWidth();
                }
            }
        }
    }
    quickstart.QuickStart = QuickStart;
    QuickStart["__class"] = "quickstart.QuickStart";
})(quickstart || (quickstart = {}));
quickstart.QuickStart.main(null);
