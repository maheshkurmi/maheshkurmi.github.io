let language = 2;
let labelW;
let rangeW;
let labelH;
let rangeH;
let checkA;
let chalkA;
let labelA;
let rangeA;
let imgCircuit;
let dielectricX = 400;
let scaleValue = 1;

function preload() {
    let url = getURL();
    let regexp = "http";
    let m = match(url, regexp);
    let imagePrefix = (m == "http") ? "//javalab.org/lee/image/" : "";
    imgCircuit = loadImage(imagePrefix + "dielectric_in_capacitor_circuit.png")
}

function setup() {
    frameRate(20);
    pixelDensity(2 * displayDensity());
    let o = select("#myContainer");
    let a = 0.5;
    let w = int((o.width > (window.innerHeight - 120) / a) ? (window.innerHeight - 120) / a : o.width);
    let h = int(w * a);
    myCanvas = createCanvas(w, h);
    myCanvas.parent("myContainer");
    myCanvas.id("myP5Canvas");
    rangeW = select("#rangeW");
    labelW = select("#labelW");
    rangeH = select("#rangeH");
    labelH = select("#labelH");
    checkA = select("#checkA");
    chalkA = select("#chalkA");
    if (language == 0) chalkA.html("전기장");
    if (language == 1) chalkA.html("電場");
    if (language == 2) chalkA.html("Electric field");
    rangeA = select("#rangeA");
    labelA = select("#labelA");
    if (language == 0) labelA.html("줌");
    if (language == 1) labelA.html("ズーム");
    if (language == 2) labelA.html("Zoom")
}

function windowResized() {
    let o = select("#myContainer");
    let a = 0.5;
    let w = int((o.width > (window.innerHeight - 120) / a) ? (window.innerHeight - 120) / a : o.width);
    let h = int(w * a);
    resizeCanvas(w, h)
}

function draw() {
    if (touches.length > 1) return;
    background(244);
    strokeWeight(2);
    textSize(30);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    rectMode(CENTER);
    scaleValue = rangeA.value() / 10;
    push();
    scale(width / 1000);
    translate(440, 250);
    scale(scaleValue);
    if (language == 0) labelW.html("금속판의 넓이: " + rangeW.value());
    if (language == 1) labelW.html("金属板の広さ: " + rangeW.value());
    if (language == 2) labelW.html("Area of metal plate: " + rangeW.value());
    if (language == 0) labelH.html("금속판 사이의 거리: " + rangeH.value());
    if (language == 1) labelH.html("金属板との間の距離: " + rangeH.value());
    if (language == 2) labelH.html("Distance between metal plates: " + rangeH.value());
    let capacitorX1 = -rangeW.value() * 20;
    let capacitorX2 = rangeW.value() * 20;
    let capacitorY1 = -rangeH.value() * 6;
    let capacitorY2 = rangeH.value() * 6;
    let dielectricX1 = dielectricX - (capacitorX2 - capacitorX1) / 2;
    let dielectricX2 = dielectricX + (capacitorX2 - capacitorX1) / 2;
    let dielectricY1 = -rangeH.value() * 3;
    let dielectricY2 = rangeH.value() * 3;
    noFill();
    stroke(0);
    rect(-185, 0, 370, 460);
    image(imgCircuit, 30, 0, 1000, 500);
    noStroke();
    fill(244);
    rect(0, 0, 10, capacitorY2 - capacitorY1);
    let sx = [];
    let sy = [];
    let vx = [];
    let vy = [];
    let plus = [];
    let activ = [];
    let sourceMax = 0;
    let step = 0;
    for (let x = capacitorX1; x <= capacitorX2 + step; x += step) {
        step = (capacitorY2 - capacitorY1) / 2.4;
        if (dielectricX1 < x + 2) step /= 2;
        if (x <= capacitorX2) {
            sx[sourceMax] = x;
            sy[sourceMax] = capacitorY1 - 5;
            vx[sourceMax] = 0;
            vy[sourceMax] = 1;
            plus[sourceMax] = true;
            activ[sourceMax] = true;
            sourceMax++;
            sx[sourceMax] = x;
            sy[sourceMax] = capacitorY2 + 5;
            vx[sourceMax] = 0;
            vy[sourceMax] = -1;
            plus[sourceMax] = false;
            activ[sourceMax] = true;
            sourceMax++
        }
        if (dielectricX1 <= x) if (x <= dielectricX2) {
            sx[sourceMax] = (capacitorX2 < x) ? min(x, dielectricX1) : x;
            sy[sourceMax] = dielectricY1 + 2;
            vx[sourceMax] = 0;
            vy[sourceMax] = -1;
            plus[sourceMax] = false;
            activ[sourceMax] = false;
            sourceMax++;
            sx[sourceMax] = (capacitorX2 < x) ? min(x, dielectricX1) : x;
            sy[sourceMax] = dielectricY2 - 2;
            vx[sourceMax] = 0;
            vy[sourceMax] = 1;
            plus[sourceMax] = true;
            activ[sourceMax] = false;
            sourceMax++
        }
    }
    noFill();
    strokeWeight(1.5);
    stroke(128, 255, 128);
    if (checkA.checked()) drawMagneticField(sx, sy, vx, vy, plus, activ, sourceMax, 1);
    noStroke();
    fill(0);
    rect(0, capacitorY1 - 8, 2 + capacitorX2 - capacitorX1, 16);
    rect(0, capacitorY2 + 8, 2 + capacitorX2 - capacitorX1, 16);
    fill(200, 160, 120);
    rect(dielectricX, 0, capacitorX2 - capacitorX1, dielectricY2 - dielectricY1, 2);
    for (let i = 0; i < sourceMax; i++) {
        if (plus[i]) drawNuclei(sx[i], sy[i]); else drawElectron(sx[i], sy[i])
    }
    pop();
    drawButtonDrag()
}

function drawNuclei(x, y) {
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 0);
    ellipse(x, y, 8, 8);
    fill(255);
    rect(x, y, 6, 1.5);
    rect(x, y, 1.5, 6)
}

function drawElectron(x, y) {
    rectMode(CENTER);
    noStroke();
    fill(0, 0, 255);
    ellipse(x, y, 8, 8);
    fill(255);
    rect(x, y, 6, 1.5)
}

function drawMagneticField(ox, oy, vx, vy, plus, activ, sourceMax, tollerence) {
    let steps = 16 * (rangeH.value() + 2);
    let x1 = [];
    let y1 = [];
    let pass = [];
    for (let c = 0; c < sourceMax; c++) {
        x1[c] = [];
        y1[c] = [];
        pass[c] = false
    }
    for (let c = 0; c < sourceMax; c++) {
        if (!activ[c]) continue;
        if (pass[c]) continue;
        x1[c][0] = ox[c] + vx[c] / 10;
        y1[c][0] = oy[c] + vy[c] / 10;
        for (let i = 1; i < steps; i++) {
            let vecX = 0;
            let vecY = 0;
            for (let j = 0; j < sourceMax; j++) if (x1[c][i - 1] != ox[j] || y1[c][i - 1] != oy[j]) {
                let len = pow(x1[c][i - 1] - ox[j], 2) + pow(y1[c][i - 1] - oy[j], 2);
                vecX += (plus[c] ? 1 : -1) * (plus[j] ? 1 : -1) / len * ((x1[c][i - 1] - ox[j]) / sqrt(len)) * 10;
                vecY += (plus[c] ? 1 : -1) * (plus[j] ? 1 : -1) / len * ((y1[c][i - 1] - oy[j]) / sqrt(len)) * 10
            }
            let vecXY = dist(0, 0, vecX, vecY);
            if (vecXY > 0) {
                vecX = vecX * 0.5 / vecXY;
                vecY = vecY * 0.5 / vecXY
            }
            x1[c][i] = x1[c][i - 1] + vecX;
            y1[c][i] = y1[c][i - 1] + vecY;
            let getOut = false;
            for (let j = c + 1; j < sourceMax; j++) {
                if (dist(x1[c][i], y1[c][i], ox[j], oy[j]) < 1) {
                    pass[j] = true;
                    getOut = true;
                    break
                }
            }
            if (getOut) break
        }
    }
    for (let c = 0; c < sourceMax; c++) {
        beginShape();
        for (let i = 0; i < steps; i++) {
            vertex(x1[c][i], y1[c][i])
        }
        endShape()
    }
}

let dragged = false;
let offsetX;
let offsetY;

function touchStarted() {
    if (!contain(mouseX, mouseY, 0, 0, width, height)) return;
    if (touches.length > 1) return;
    dragged = true;
    offsetX = mouseX * 1000 / (width * scaleValue) - dielectricX
}

function touchMoved() {
    if (touches.length > 1) return;
    if (dragged) {
        dielectricX = mouseX * 1000 / (width * scaleValue) - offsetX;
        dielectricX = constrain(dielectricX, 0, 450);
        if (abs(mouseX - pmouseX) > abs(mouseY - pmouseY)) return false
    }
}

function touchEnded() {
    dragged = false
}
