/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class Graphics {
            constructor(canvas) {
                if (this.canvas === undefined) {
                    this.canvas = null;
                }
                if (this.context === undefined) {
                    this.context = null;
                }
                this.__clipRect = new org.shikhar.Rectangle();
                if (this.transX === undefined) {
                    this.transX = 0;
                }
                if (this.transY === undefined) {
                    this.transY = 0;
                }
                if (this.color === undefined) {
                    this.color = null;
                }
                if (this.strokeWidth === undefined) {
                    this.strokeWidth = 0;
                }
                if (this.font === undefined) {
                    this.font = null;
                }
                if (this.PIXEL_SCALE_FACTOR === undefined) {
                    this.PIXEL_SCALE_FACTOR = 0;
                }
                this.tmpRECT = new org.shikhar.Rectangle();
                this.canvas = canvas;
                this.PIXEL_SCALE_FACTOR = 2;
                this.context = canvas.getContext("2d");
            }
            begin(width, height) {
                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.context.scale(this.PIXEL_SCALE_FACTOR, this.PIXEL_SCALE_FACTOR);
                this.context.save();
                this.transX = 0;
                this.transY = 0;
                this.context.clearRect(0, 0, width, height);
                this.__clipRect.set(0, 0, (width | 0), (height | 0));
            }
            end() {
                this.context.restore();
            }
            toColor(color) {
                return (("rgb(" + (color >> 16 & 255) + "," + (color >> 8 & 255) + "," + (color & 255) + ")"));
            }
            setColor(color) {
                if (color == null)
                    return;
                this.color = color;
                const colorString = color.toString();
                this.context.strokeStyle = colorString;
                this.context.fillStyle = colorString;
            }
            getColor() {
                return this.color;
            }
            setStroke(lineWidth) {
                this.strokeWidth = lineWidth;
                this.context.lineWidth = lineWidth;
            }
            getStroke() {
                return this.strokeWidth;
            }
            setFont(font) {
                if (font != null) {
                    this.font = font;
                    this.context.font = font.getName();
                }
            }
            getFont() {
                return this.font;
            }
            clipRect(x, y, width, height) {
                this.context.beginPath();
                this.context.rect(x - 0.5, y - 0.5, width + 1, height + 1);
                this.context.clip();
                x += this.transX;
                y += this.transY;
                this.__clipRect.intersect(x, y, width, height);
            }
            setClip(x, y, width, height) {
                this.__clipRect.set(((x + this.transX) | 0), ((y + this.transY) | 0), (width | 0), (height | 0));
                this.context.restore();
                this.context.setTransform(this.PIXEL_SCALE_FACTOR, 0, 0, this.PIXEL_SCALE_FACTOR, this.transX * this.PIXEL_SCALE_FACTOR, this.transY * this.PIXEL_SCALE_FACTOR);
                this.context.save();
                this.context.beginPath();
                this.context.rect(x, y, width, height);
                this.context.clip();
            }
            getClipBounds() {
                return new org.shikhar.Rectangle(this.__clipRect.x - (this.transX | 0), this.__clipRect.y - (this.transY | 0), this.__clipRect.width, this.__clipRect.height);
            }
            translate(tx, ty) {
                this.transX += tx;
                this.transY += ty;
                this.context.translate(tx, ty);
            }
            clearRect(x, y, width, height) {
                this.context.clearRect(x, y, width, height);
            }
            fillRect(x, y, width, height) {
                this.context.fillRect(x, y, width, height);
            }
            drawRect(x, y, width, height) {
                this.context.strokeRect(x, y, width, height);
            }
            drawDottedRect(x, y, width, height) {
                this.context.setLineDash([1]);
                this.context.strokeRect(x, y, width, height);
                this.context.setLineDash([]);
            }
            fillOval(x, y, width, height) {
                this.context.save();
                this.context.translate(x + width / 2, y + height / 2);
                this.context.scale(width, height);
                this.context.beginPath();
                this.context.arc(0, 0, 1, 0, 2 * Math.PI, false);
                this.context.restore();
                this.context.fill();
            }
            drawOval(x, y, width, height) {
                this.context.save();
                this.context.translate(x + width / 2, y + height / 2);
                this.context.scale(width, height);
                this.context.beginPath();
                this.context.arc(0, 0, 1, 0, 2 * Math.PI, false);
                this.context.restore();
                this.context.stroke();
            }
            drawString(str, x, y) {
                this.context.fillText(str, x, y);
            }
            drawChars(data, offset, length, x, y) {
                this.drawString(((str, index, len) => str.substring(index, index + len))((data).join(''), offset, length), x, y);
            }
            drawLine(x, y, x2, y2) {
                this.context.beginPath();
                this.context.moveTo(x, y);
                this.context.lineTo(x2, y2);
                this.context.stroke();
            }
            drawArc(x, y, w, h, startAngle, arcAngle) {
                this.context.arc(x, y, w, startAngle * 57.2957795131, (startAngle + arcAngle) * 57.2957795131, false);
            }
            drawImage$org_shikhar_AWTImage$double$double$double$double(img, x, y, w, h) {
                this.context.drawImage(img, x, y, w, h);
            }
            drawImage$org_shikhar_AWTImage$double$double$double$double$double$double$double$double(img, x_src, y_src, width, height, transform, x_dest, y_dest, anchor) {
                this.context.drawImage(img, x_src, y_src, width, height, x_dest, y_dest, width, height);
            }
            drawImage(img, x_src, y_src, width, height, transform, x_dest, y_dest, anchor) {
                if (((img != null && img instanceof org.shikhar.AWTImage) || img === null) && ((typeof x_src === 'number') || x_src === null) && ((typeof y_src === 'number') || y_src === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof transform === 'number') || transform === null) && ((typeof x_dest === 'number') || x_dest === null) && ((typeof y_dest === 'number') || y_dest === null) && ((typeof anchor === 'number') || anchor === null)) {
                    return this.drawImage$org_shikhar_AWTImage$double$double$double$double$double$double$double$double(img, x_src, y_src, width, height, transform, x_dest, y_dest, anchor);
                }
                else if (((img != null && img instanceof org.shikhar.AWTImage) || img === null) && ((typeof x_src === 'number') || x_src === null) && ((typeof y_src === 'number') || y_src === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && transform === undefined && x_dest === undefined && y_dest === undefined && anchor === undefined) {
                    return this.drawImage$org_shikhar_AWTImage$double$double$double$double(img, x_src, y_src, width, height);
                }
                else if (((img != null && img instanceof org.shikhar.AWTImage) || img === null) && ((typeof x_src === 'number') || x_src === null) && ((typeof y_src === 'number') || y_src === null) && ((width != null && width instanceof org.shikhar.Color) || width === null) && height === undefined && transform === undefined && x_dest === undefined && y_dest === undefined && anchor === undefined) {
                    return this.drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(img, x_src, y_src, width);
                }
                else
                    throw new Error('invalid overload');
            }
            drawRegion(gradient, x_src, y_src, width, height, x_dest, y_dest, anchor) {
                const f = this.context.fillStyle;
                this.context.fillStyle = gradient;
                this.context.fillRect(x_dest, y_dest, width, height);
                this.context.fillStyle = f;
            }
            setLineWidth(f) {
                const lw = this.context.lineWidth;
                this.context.lineWidth = f;
                return lw;
            }
            getLineWidth() {
                return this.context.lineWidth;
            }
            setClipEnabled(b) {
            }
            drawHGradient(c1, c2, x, y, w, h) {
                this.setColor(c1);
                this.context.fillRect(x, y, w, h);
            }
            drawVGradient(c1, c2, x, y, w, h) {
                this.setColor(c1);
                this.context.fillRect(x, y, w, h);
            }
            drawImage$org_shikhar_AWTImage$int$int$org_shikhar_Color(icon, x, y, tintColor) {
                this.context.drawImage(icon, x, y);
            }
        }
        Graphics.TOP = 0;
        Graphics.LEFT = 0;
        Graphics.BASELINE = 0;
        shikhar.Graphics = Graphics;
        Graphics["__class"] = "org.shikhar.Graphics";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Graphics.js.map