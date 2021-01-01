// 마우스, 터치
var touchB = false;
var touchX;
var touchY;

function mousePressed() { touchStarted(); }
function mouseDragged() { touchMoved(); }
function mouseReleased() { touchEnded(); }
function touchStarted() { }
function touchMoved() { }
function touchEnded() { }

// 삼각함수 미리 로드
var dsin = [ 0, 0.017452406, 0.034899497, 0.052335956, 0.069756474, 0.087155743, 0.104528463, 0.121869343, 0.139173101, 0.156434465, 0.173648178, 0.190808995, 0.207911691, 0.224951054, 0.241921896, 0.258819045, 0.275637356, 0.292371705, 0.309016994, 0.325568154, 0.342020143, 0.35836795, 0.374606593, 0.390731128, 0.406736643, 0.422618262, 0.438371147, 0.4539905, 0.469471563, 0.48480962, 0.5, 0.515038075, 0.529919264, 0.544639035, 0.559192903, 0.573576436, 0.587785252, 0.601815023, 0.615661475, 0.629320391, 0.64278761, 0.656059029, 0.669130606, 0.68199836, 0.69465837, 0.707106781, 0.7193398, 0.731353702, 0.743144825, 0.75470958, 0.766044443, 0.777145961, 0.788010754, 0.79863551, 0.809016994, 0.819152044, 0.829037573, 0.838670568, 0.848048096, 0.857167301, 0.866025404, 0.874619707, 0.882947593, 0.891006524, 0.898794046, 0.906307787, 0.913545458, 0.920504853, 0.927183855, 0.933580426, 0.939692621, 0.945518576, 0.951056516, 0.956304756, 0.961261696, 0.965925826, 0.970295726, 0.974370065, 0.978147601, 0.981627183, 0.984807753, 0.987688341, 0.990268069, 0.992546152, 0.994521895, 0.996194698, 0.99756405, 0.998629535, 0.999390827, 0.999847695, 1, 0.999847695, 0.999390827, 0.998629535, 0.99756405, 0.996194698, 0.994521895, 0.992546152, 0.990268069, 0.987688341, 0.984807753, 0.981627183, 0.978147601, 0.974370065, 0.970295726, 0.965925826, 0.961261696, 0.956304756, 0.951056516, 0.945518576, 0.939692621, 0.933580426, 0.927183855, 0.920504853, 0.913545458, 0.906307787, 0.898794046, 0.891006524, 0.882947593, 0.874619707, 0.866025404, 0.857167301, 0.848048096, 0.838670568, 0.829037573, 0.819152044, 0.809016994, 0.79863551, 0.788010754, 0.777145961, 0.766044443, 0.75470958, 0.743144825, 0.731353702, 0.7193398, 0.707106781, 0.69465837, 0.68199836, 0.669130606, 0.656059029, 0.64278761, 0.629320391, 0.615661475, 0.601815023, 0.587785252, 0.573576436, 0.559192903, 0.544639035, 0.529919264, 0.515038075, 0.5, 0.48480962, 0.469471563, 0.4539905, 0.438371147, 0.422618262, 0.406736643, 0.390731128, 0.374606593, 0.35836795, 0.342020143, 0.325568154, 0.309016994, 0.292371705, 0.275637356, 0.258819045, 0.241921896, 0.224951054, 0.207911691, 0.190808995, 0.173648178, 0.156434465, 0.139173101, 0.121869343, 0.104528463, 0.087155743, 0.069756474, 0.052335956, 0.034899497, 0.017452406, 0, -0.017452406, -0.034899497, -0.052335956, -0.069756474, -0.087155743, -0.104528463, -0.121869343, -0.139173101, -0.156434465, -0.173648178, -0.190808995, -0.207911691, -0.224951054, -0.241921896, -0.258819045, -0.275637356, -0.292371705, -0.309016994, -0.325568154, -0.342020143, -0.35836795, -0.374606593, -0.390731128, -0.406736643, -0.422618262, -0.438371147, -0.4539905, -0.469471563, -0.48480962, -0.5, -0.515038075, -0.529919264, -0.544639035, -0.559192903, -0.573576436, -0.587785252, -0.601815023, -0.615661475, -0.629320391, -0.64278761, -0.656059029, -0.669130606, -0.68199836, -0.69465837, -0.707106781, -0.7193398, -0.731353702, -0.743144825, -0.75470958, -0.766044443, -0.777145961, -0.788010754, -0.79863551, -0.809016994, -0.819152044, -0.829037573, -0.838670568, -0.848048096, -0.857167301, -0.866025404, -0.874619707, -0.882947593, -0.891006524, -0.898794046, -0.906307787, -0.913545458, -0.920504853, -0.927183855, -0.933580426, -0.939692621, -0.945518576, -0.951056516, -0.956304756, -0.961261696, -0.965925826, -0.970295726, -0.974370065, -0.978147601, -0.981627183, -0.984807753, -0.987688341, -0.990268069, -0.992546152, -0.994521895, -0.996194698, -0.99756405, -0.998629535, -0.999390827, -0.999847695, -1, -0.999847695, -0.999390827, -0.998629535, -0.99756405, -0.996194698, -0.994521895, -0.992546152, -0.990268069, -0.987688341, -0.984807753, -0.981627183, -0.978147601, -0.974370065, -0.970295726, -0.965925826, -0.961261696, -0.956304756, -0.951056516, -0.945518576, -0.939692621, -0.933580426, -0.927183855, -0.920504853, -0.913545458, -0.906307787, -0.898794046, -0.891006524, -0.882947593, -0.874619707, -0.866025404, -0.857167301, -0.848048096, -0.838670568, -0.829037573, -0.819152044, -0.809016994, -0.79863551, -0.788010754, -0.777145961, -0.766044443, -0.75470958, -0.743144825, -0.731353702, -0.7193398, -0.707106781, -0.69465837, -0.68199836, -0.669130606, -0.656059029, -0.64278761, -0.629320391, -0.615661475, -0.601815023, -0.587785252, -0.573576436, -0.559192903, -0.544639035, -0.529919264, -0.515038075, -0.5, -0.48480962, -0.469471563, -0.4539905, -0.438371147, -0.422618262, -0.406736643, -0.390731128, -0.374606593, -0.35836795, -0.342020143, -0.325568154, -0.309016994, -0.292371705, -0.275637356, -0.258819045, -0.241921896, -0.224951054, -0.207911691, -0.190808995, -0.173648178, -0.156434465, -0.139173101, -0.121869343, -0.104528463, -0.087155743, -0.069756474, -0.052335956, -0.034899497, -0.017452406, 0 ];
var dcos = [ 1, 0.999847695, 0.999390827, 0.998629535, 0.99756405, 0.996194698, 0.994521895, 0.992546152, 0.990268069, 0.987688341, 0.984807753, 0.981627183, 0.978147601, 0.974370065, 0.970295726, 0.965925826, 0.961261696, 0.956304756, 0.951056516, 0.945518576, 0.939692621, 0.933580426, 0.927183855, 0.920504853, 0.913545458, 0.906307787, 0.898794046, 0.891006524, 0.882947593, 0.874619707, 0.866025404, 0.857167301, 0.848048096, 0.838670568, 0.829037573, 0.819152044, 0.809016994, 0.79863551, 0.788010754, 0.777145961, 0.766044443, 0.75470958, 0.743144825, 0.731353702, 0.7193398, 0.707106781, 0.69465837, 0.68199836, 0.669130606, 0.656059029, 0.64278761, 0.629320391, 0.615661475, 0.601815023, 0.587785252, 0.573576436, 0.559192903, 0.544639035, 0.529919264, 0.515038075, 0.5, 0.48480962, 0.469471563, 0.4539905, 0.438371147, 0.422618262, 0.406736643, 0.390731128, 0.374606593, 0.35836795, 0.342020143, 0.325568154, 0.309016994, 0.292371705, 0.275637356, 0.258819045, 0.241921896, 0.224951054, 0.207911691, 0.190808995, 0.173648178, 0.156434465, 0.139173101, 0.121869343, 0.104528463, 0.087155743, 0.069756474, 0.052335956, 0.034899497, 0.017452406, 0, -0.017452406, -0.034899497, -0.052335956, -0.069756474, -0.087155743, -0.104528463, -0.121869343, -0.139173101, -0.156434465, -0.173648178, -0.190808995, -0.207911691, -0.224951054, -0.241921896, -0.258819045, -0.275637356, -0.292371705, -0.309016994, -0.325568154, -0.342020143, -0.35836795, -0.374606593, -0.390731128, -0.406736643, -0.422618262, -0.438371147, -0.4539905, -0.469471563, -0.48480962, -0.5, -0.515038075, -0.529919264, -0.544639035, -0.559192903, -0.573576436, -0.587785252, -0.601815023, -0.615661475, -0.629320391, -0.64278761, -0.656059029, -0.669130606, -0.68199836, -0.69465837, -0.707106781, -0.7193398, -0.731353702, -0.743144825, -0.75470958, -0.766044443, -0.777145961, -0.788010754, -0.79863551, -0.809016994, -0.819152044, -0.829037573, -0.838670568, -0.848048096, -0.857167301, -0.866025404, -0.874619707, -0.882947593, -0.891006524, -0.898794046, -0.906307787, -0.913545458, -0.920504853, -0.927183855, -0.933580426, -0.939692621, -0.945518576, -0.951056516, -0.956304756, -0.961261696, -0.965925826, -0.970295726, -0.974370065, -0.978147601, -0.981627183, -0.984807753, -0.987688341, -0.990268069, -0.992546152, -0.994521895, -0.996194698, -0.99756405, -0.998629535, -0.999390827, -0.999847695, -1, -0.999847695, -0.999390827, -0.998629535, -0.99756405, -0.996194698, -0.994521895, -0.992546152, -0.990268069, -0.987688341, -0.984807753, -0.981627183, -0.978147601, -0.974370065, -0.970295726, -0.965925826, -0.961261696, -0.956304756, -0.951056516, -0.945518576, -0.939692621, -0.933580426, -0.927183855, -0.920504853, -0.913545458, -0.906307787, -0.898794046, -0.891006524, -0.882947593, -0.874619707, -0.866025404, -0.857167301, -0.848048096, -0.838670568, -0.829037573, -0.819152044, -0.809016994, -0.79863551, -0.788010754, -0.777145961, -0.766044443, -0.75470958, -0.743144825, -0.731353702, -0.7193398, -0.707106781, -0.69465837, -0.68199836, -0.669130606, -0.656059029, -0.64278761, -0.629320391, -0.615661475, -0.601815023, -0.587785252, -0.573576436, -0.559192903, -0.544639035, -0.529919264, -0.515038075, -0.5, -0.48480962, -0.469471563, -0.4539905, -0.438371147, -0.422618262, -0.406736643, -0.390731128, -0.374606593, -0.35836795, -0.342020143, -0.325568154, -0.309016994, -0.292371705, -0.275637356, -0.258819045, -0.241921896, -0.224951054, -0.207911691, -0.190808995, -0.173648178, -0.156434465, -0.139173101, -0.121869343, -0.104528463, -0.087155743, -0.069756474, -0.052335956, -0.034899497, -0.017452406, 0, 0.017452406, 0.034899497, 0.052335956, 0.069756474, 0.087155743, 0.104528463, 0.121869343, 0.139173101, 0.156434465, 0.173648178, 0.190808995, 0.207911691, 0.224951054, 0.241921896, 0.258819045, 0.275637356, 0.292371705, 0.309016994, 0.325568154, 0.342020143, 0.35836795, 0.374606593, 0.390731128, 0.406736643, 0.422618262, 0.438371147, 0.4539905, 0.469471563, 0.48480962, 0.5, 0.515038075, 0.529919264, 0.544639035, 0.559192903, 0.573576436, 0.587785252, 0.601815023, 0.615661475, 0.629320391, 0.64278761, 0.656059029, 0.669130606, 0.68199836, 0.69465837, 0.707106781, 0.7193398, 0.731353702, 0.743144825, 0.75470958, 0.766044443, 0.777145961, 0.788010754, 0.79863551, 0.809016994, 0.819152044, 0.829037573, 0.838670568, 0.848048096, 0.857167301, 0.866025404, 0.874619707, 0.882947593, 0.891006524, 0.898794046, 0.906307787, 0.913545458, 0.920504853, 0.927183855, 0.933580426, 0.939692621, 0.945518576, 0.951056516, 0.956304756, 0.961261696, 0.965925826, 0.970295726, 0.974370065, 0.978147601, 0.981627183, 0.984807753, 0.987688341, 0.990268069, 0.992546152, 0.994521895, 0.996194698, 0.99756405, 0.998629535, 0.999390827, 0.999847695, 1 ];

var notClicked = true;



function doFullScreen()
{
    var canvas = document.getElementById("divFull");
    if (canvas.requestFullScreen) canvas.requestFullScreen();
    else if (canvas.webkitRequestFullScreen) canvas.webkitRequestFullScreen();
    else if (canvas.mozRequestFullScreen) canvas.mozRequestFullScreen();
}

function drawButtonDrag()
{
    drawButtonDetail("Drag");
}

function drawButtonClick()
{
    drawButtonDetail("Click");
}

function drawButtonDetail(str)
{
    if (mouseIsPressed) if (contain(mouseX, mouseY, 0, 0, width, height)) notClicked = false;
    if (millis() > 10000) notClicked = false;
    let dia = 120;

    if(notClicked)
    {
        push();
        translate(width/2, height/2);

        noStroke();
        fill(128, 128);
        ellipse(0, 0, dia, dia);

        /* let t = millis()*TWO_PI/2000;
        fill(244);
        arc(0, 0, 140, 140, t, t + 0.5);
        arc(0, 0, 140, 140, t + PI, t + PI + 0.5); */

        noFill();
        stroke(255);
        strokeWeight(dia*0.04);
        drawFingers(0, 0, dia*0.85);

        pop();
    }
}

function drawFingers(x, y, d)
{
    push();
    translate(x, y);

    line(-d*0.2, d*0.3, -d*0.35, d*0.1);
    arc(-d*0.3, d*0.05, d*0.1414, d*0.1414, QUARTER_PI*3, QUARTER_PI*7);
    line(-d*0.25, d*0.0, -d*0.15, d*0.1);
    line(-d*0.15, d*0.1, -d*0.15, -d*0.25);
    arc(-d*0.075, -d*0.25, d*0.15, d*0.15, PI, TWO_PI);
    line(-d*0.0, -d*0.25, -d*0.0, d*0.0);
    arc(d*0.06, -d*0.1, d*0.12, d*0.12, HALF_PI*3, TWO_PI);
    line(d*0.12, -d*0.1, d*0.12, d*0.025);
    arc(d*0.18, -d*0.05, d*0.12, d*0.12, HALF_PI*3, TWO_PI);
    line(d*0.24, -d*0.05, d*0.24, d*0.05);
    arc(d*0.29, -d*0.0, d*0.1, d*0.1, HALF_PI*3, TWO_PI);
    line(d*0.34, -d*0.0, d*0.34, d*0.075);
    line(d*0.34, d*0.075, d*0.31, d*0.3);

    pop();
}

// 영역 안에 있는가?
function contain(x, y, x1, y1, w1, h1)
{
    if (x < x1) return false;
    if (x > (x1 + w1)) return false;
    if (y < y1) return false;
    if (y > (y1 + h1)) return false;
    return true;
}

var flowLinePhase = 0;
function flowLine(x1, y1, x2, y2, isStart)
{
    let d = dist(x1, y1, x2, y2);

    let d0 = width*0.01*(isStart? mod(millis(), 1000)/1000: -flowLinePhase);
    let d1 = width*0.006;                // 파선 시작 지점
    let d2 = width*0.01;            // 파선의 한주기 길이

    for (let t = d0 - d2; t < d; t += d2)
    {
        let s1 = t + d1;            // 파선 시작점
        let s2 = t + d2;            // 파선 종점

        if (s2 < 0) continue;       // 파선이 범위 전에 있다면,
        if (s1 < 0) s1 = 0;

        if (s1 > d) break;       // 파선이 범위 후에 있다면,
        if (s2 > d) s2 = d;

        let xx1 = map(s1, 0, d, x1, x2);
        let yy1 = map(s1, 0, d, y1, y2);
        let xx2 = map(s2, 0, d, x1, x2);
        let yy2 = map(s2, 0, d, y1, y2);

        line(xx1, yy1, xx2, yy2);
    }

    flowLinePhase = mod(d - d0, d2)/d2;
}

function flowLine2(x1, y1, x2, y2, isStart)
{
    let d = dist(x1, y1, x2, y2);

    let d0 = 12*(isStart? mod(millis(), 1000)/1000: -flowLinePhase);
    let d1 = 7;                // 파선 시작 지점
    let d2 = 12;            // 파선의 한주기 길이

    for (let t = d0 - d2; t < d; t += d2)
    {
        let s1 = t + d1;            // 파선 시작점
        let s2 = t + d2;            // 파선 종점

        if (s2 < 0) continue;       // 파선이 범위 전에 있다면,
        if (s1 < 0) s1 = 0;

        if (s1 > d) break;       // 파선이 범위 후에 있다면,
        if (s2 > d) s2 = d;

        let xx1 = map(s1, 0, d, x1, x2);
        let yy1 = map(s1, 0, d, y1, y2);
        let xx2 = map(s2, 0, d, x1, x2);
        let yy2 = map(s2, 0, d, y1, y2);

        line(xx1, yy1, xx2, yy2);
    }

    flowLinePhase = mod(d - d0, d2)/d2;
}

function dottedLine(x1, y1, x2, y2)
{
    let d = dist(x1, y1, x2, y2);

    let d1 = width*0.004;
    let d2 = width*0.01;
    for (let t = 0; t < d; t += d2)
    {
        let s1 = t;            // 파선 시작점
        let s2 = t + d1;            // 파선 종점

        if (s1 > d) break;          // 파선이 범위 후에 있다면,
        if (s2 > d) s2 = d;

        let xx1 = map(s1, 0, d, x1, x2);
        let yy1 = map(s1, 0, d, y1, y2);
        let xx2 = map(s2, 0, d, x1, x2);
        let yy2 = map(s2, 0, d, y1, y2);

        line(xx1, yy1, xx2, yy2);
    }
}

function dottedLine2(x1, y1, x2, y2)
{
    let d = dist(x1, y1, x2, y2);

    let d1 = 7;
    let d2 = 12;
    for (let i = 0; i < (d - d2); i += d2)
    {
        line(map(i + d1, 0, d, x1, x2), map(i + d1, 0, d, y1, y2), map(i + d2, 0, d, x1, x2), map(i + d2, 0, d, y1, y2));
    }
}

// 실수의 나머지 구하기
function mod(x, y)
{
    //  일단, 양수로 만든다.
    if (x < 0) x += y * (ceil(abs(x)/y) + 1);
    let c = floor(x / y);
    return x - y * c;
}

// t1을 기준으로 한 t2의 상대 각도 계산 (-PI ~ PI값 리턴)
// (원호까지 그려주는 함수는 'arc1'으로, 개별 정의하여 사용중)
function diffAngle(t1, t2)
{
    let tt1 = mod(t1, TWO_PI);
    let tt2 = mod(t2, TWO_PI);

    if (abs(tt1 - tt2) > PI)
    {
        if (tt1 < tt2) tt1 += TWO_PI;
        else if (tt1 > tt2) tt2 += TWO_PI;
    }

    return tt2 - tt1;
}

// 두 선분이 서로 교차하는가?
function isIntersected(x1, y1, x2, y2, x3, y3, x4, y4)
{
    let t;
    let s;
    let under = (y4-y3)*(x2-x1)-(x4-x3)*(y2-y1);
    if (under == 0) return false;

    let _t = (x4-x3)*(y1-y3) - (y4-y3)*(x1-x3);
    let _s = (x2-x1)*(y1-y3) - (y2-y1)*(x1-x3);

    t = _t/under;
    s = _s/under;
    if (t < 0.0 || t > 1.0 || s < 0.0 || s > 1.0) return false;
    if (abs(_t) <= 0.0000000001) if (abs(_s) <= 0.0000000001) return false;

    return true;
}

// 두 직선의 교점을 구한다.
function getCrossX(x1, y1, x2, y2, x3, y3, x4, y4)
{
    let t;
    let s;
    let under = (y4-y3)*(x2-x1)-(x4-x3)*(y2-y1);
    if (under == 0) return 0;

    let _t = (x4-x3)*(y1-y3) - (y4-y3)*(x1-x3);
    let _s = (x2-x1)*(y1-y3) - (y2-y1)*(x1-x3);

    t = _t/under;
    s = _s/under;
    //if(t < 0.0 || t > 1.0 || s < 0.0 || s > 1.0) return 0;
    //if(_t == 0 && _s == 0) return 0;

    return(x1 + t * (x2-x1));
}
function getCrossY(x1, y1, x2, y2, x3, y3, x4, y4)
{
    let t;
    let s;
    let under = (y4-y3)*(x2-x1)-(x4-x3)*(y2-y1);
    if (under == 0) return 0;

    let _t = (x4-x3)*(y1-y3) - (y4-y3)*(x1-x3);
    let _s = (x2-x1)*(y1-y3) - (y2-y1)*(x1-x3);

    t = _t/under;
    s = _s/under;
    //if(t < 0.0 || t > 1.0 || s < 0.0 || s > 1.0) return 0;
    //if(_t == 0 && _s == 0) return 0;

    return(y1 + t * (y2-y1));
}

// 두 원의 교점 구하기
// http://club.paran.com/club/home.do?clubid=eypgworld-bbsView.do?menuno=2509143-clubno=1078741-bbs_no=0RnVZ
function getX1CrossedOval(ox1, oy1, or1, ox2, oy2, or2)
{
    let x1, y1, r1;
    let x2, y2, r2;

    if (ox1 < ox2)
    {
        x1 = ox1;
        y1 = oy1;
        r1 = or1;
        x2 = ox2;
        y2 = oy2;
        r2 = or2;
    } else
    {
        x1 = ox2;
        y1 = oy2;
        r1 = or2;
        x2 = ox1;
        y2 = oy1;
        r2 = or1;
    }

    let D = 0, X = 0, Y = 0;
    let T1 = 0, T2 = 0, T3 = 0, T4 = 0, T5 = 0, T6 = 0;

    X = x2 - x1;
    Y = y2 - y1;

    D = sqrt((X * X) + (Y * Y));
    T1 = acos((r1 * r1 - r2 * r2 + D * D) / (2 * r1 * D));
    T2 = atan(Y / X);

    T3 = x1 + r1 * cos(T2 + T1);
    T4 = y1 + r1 * sin(T2 + T1);
    T5 = x1 + r1 * cos(T2 - T1);
    T6 = y1 + r1 * sin(T2 - T1);

    return T3;
}
function getY1CrossedOval(ox1, oy1, or1, ox2, oy2, or2)
{
    let x1, y1, r1;
    let x2, y2, r2;

    if (ox1 < ox2)
    {
        x1 = ox1;
        y1 = oy1;
        r1 = or1;
        x2 = ox2;
        y2 = oy2;
        r2 = or2;
    } else
    {
        x1 = ox2;
        y1 = oy2;
        r1 = or2;
        x2 = ox1;
        y2 = oy1;
        r2 = or1;
    }

    let D = 0, X = 0, Y = 0;
    let T1 = 0, T2 = 0, T3 = 0, T4 = 0, T5 = 0, T6 = 0;

    X = x2 - x1;
    Y = y2 - y1;

    D = sqrt((X * X) + (Y * Y));
    T1 = acos((r1 * r1 - r2 * r2 + D * D) / (2 * r1 * D));
    T2 = atan(Y / X);

    T3 = x1 + r1 * cos(T2 + T1);
    T4 = y1 + r1 * sin(T2 + T1);
    T5 = x1 + r1 * cos(T2 - T1);
    T6 = y1 + r1 * sin(T2 - T1);

    return T4;
}
function getX2CrossedOval(ox1, oy1, or1, ox2, oy2, or2)
{
    let x1, y1, r1;
    let x2, y2, r2;

    if (ox1 < ox2)
    {
        x1 = ox1;
        y1 = oy1;
        r1 = or1;
        x2 = ox2;
        y2 = oy2;
        r2 = or2;
    } else
    {
        x1 = ox2;
        y1 = oy2;
        r1 = or2;
        x2 = ox1;
        y2 = oy1;
        r2 = or1;
    }

    let D = 0, X = 0, Y = 0;
    let T1 = 0, T2 = 0, T3 = 0, T4 = 0, T5 = 0, T6 = 0;

    X = x2 - x1;
    Y = y2 - y1;

    D = sqrt((X * X) + (Y * Y));
    T1 = acos((r1 * r1 - r2 * r2 + D * D) / (2 * r1 * D));
    T2 = atan(Y / X);

    T3 = x1 + r1 * cos(T2 + T1);
    T4 = y1 + r1 * sin(T2 + T1);
    T5 = x1 + r1 * cos(T2 - T1);
    T6 = y1 + r1 * sin(T2 - T1);

    return T5;
}
function getY2CrossedOval(ox1, oy1, or1, ox2, oy2, or2)
{
    let x1, y1, r1;
    let x2, y2, r2;

    if (ox1 < ox2)
    {
        x1 = ox1;
        y1 = oy1;
        r1 = or1;
        x2 = ox2;
        y2 = oy2;
        r2 = or2;
    } else
    {
        x1 = ox2;
        y1 = oy2;
        r1 = or2;
        x2 = ox1;
        y2 = oy1;
        r2 = or1;
    }

    let D = 0, X = 0, Y = 0;
    let T1 = 0, T2 = 0, T3 = 0, T4 = 0, T5 = 0, T6 = 0;

    X = x2 - x1;
    Y = y2 - y1;

    D = sqrt((X * X) + (Y * Y));
    T1 = acos((r1 * r1 - r2 * r2 + D * D) / (2 * r1 * D));
    T2 = atan(Y / X);

    T3 = x1 + r1 * cos(T2 + T1);
    T4 = y1 + r1 * sin(T2 + T1);
    T5 = x1 + r1 * cos(T2 - T1);
    T6 = y1 + r1 * sin(T2 - T1);

    return T6;
}

// 광파 그리기 (변형하여 재사용할 경우, drawPhoton2 함수명을 개별 정의하여 사용)
function drawPhoton(x, y, cx, nano, t)
{
    push();
    translate(x, y);
    rotate(t);
    {
        noFill();
        beginShape();
        let from = cx - width*0.04;
        let to = cx + width*0.04;
        for (let i = from; i < to; i += 0.5)
        {
            let py = width*0.02*pow(cos(map(i, from, to, -HALF_PI*2/3, HALF_PI*2/3)), 2) * sin(i*200000/(width*nano));
            curveVertex(i, py);
        }
        endShape(OPEN);
    }
    pop();
}

// 주어진 파장에 맞는 빛의 색을 리턴 (원본: photoelectric_effect_2.pde)
function getLightColor(nano)
{
    let c = color(getRedColor(nano), getGreenColor(nano), getBlueColor(nano));
    return c;
}

function getRedColor(nano)        // 변형되었음
{
    // 빨강
    if (400 <= nano) if (nano < 420)
    return cosineInterpolate(64, 64+20, map(nano, 400, 420, 0, 1));
    if (420 <= nano) if (nano < 510)
    return cosineInterpolate(64+20, 64-64, map(nano, 420, 510, 0, 1));
    if (510 <= nano) if (nano < 580)
    return cosineInterpolate(64-64, 64+191, map(nano, 510, 580, 0, 1));
    if (580 <= nano) if (nano < 700)
    return cosineInterpolate(64+191, 64, map(nano, 580, 700, 0, 1));
    return 64;
}

function getGreenColor(nano)        // 변형되었음
{
    // 녹색
    if (400 <= nano) if (nano < 440)
    return cosineInterpolate(64, 64-20, map(nano, 400, 440, 0, 1));
    if (440 <= nano) if (nano < 550)
    return cosineInterpolate(64-20, 64+128, map(nano, 440, 550, 0, 1));
    if (550 <= nano) if (nano < 640)
    return cosineInterpolate(64+128, 64-10, map(nano, 550, 640, 0, 1));
    if (640 <= nano) if (nano < 700)
    return cosineInterpolate(64-10, 64, map(nano, 640, 700, 0, 1));
    return 64;
}

function getBlueColor(nano)        // 변형되었음
{
    // 파랑
    if (400 <= nano) if (nano < 450)
    return cosineInterpolate(64, 64+148, map(nano, 400, 450, 0, 1));
    if (450 <= nano) if (nano < 550)
    return cosineInterpolate(64+148, 64-12, map(nano, 450, 550, 0, 1));
    if (550 <= nano) if (nano < 650)
    return cosineInterpolate(64-12, 64, map(nano, 550, 650, 0, 1));
    if (650 <= nano) if (nano < 700)
    return cosineInterpolate(64, 64, map(nano, 650, 700, 0, 1));
    return 64;
}

// 코사인 보간 (변형하여 재사용할 경우, cosineInterpolate2 함수명을 개별 정의하여 사용)
function cosineInterpolate(a, b, x)
{
    let ft = x * PI;
    let f = (1 - cos(ft)) * 0.5;
    return  a*(1-f) + b*f;
}

function drawArrow(x, y, cx, cy)
{
    line(x, y, x + cx, y + cy);

    // 화살표 모양
    let leng = sqrt(cx*cx + cy*cy);
    let bolt = min(leng*0.5, width*0.01);
    let x1 =  0.968912422 * cx*bolt/leng - 0.247403959 * cy*bolt/leng;
    let y1 =  0.247403959 * cx*bolt/leng + 0.968912422 * cy*bolt/leng;
    let x2 =  0.968912422 * cx*bolt/leng + 0.247403959 * cy*bolt/leng;
    let y2 = -0.247403959 * cx*bolt/leng + 0.968912422 * cy*bolt/leng;
    noFill();
    beginShape();
    vertex(x + cx - x1, y + cy - y1);
    vertex(x + cx, y + cy);
    vertex(x + cx - x2, y + cy - y2);
    endShape(OPEN);
}

function drawBothArrow(r1, x1, y1, x2, y2, r2)
{
    let d = dist(x1, y1, x2, y2);
    let t1 = atan2(y2 - y1, x2 - x1);
    let xx1 = x1 + r1*cos(t1);
    let yy1 = y1 + r1*sin(t1);
    let xx2 = (x1 + x2) - r2*cos(t1);
    let yy2 = (y1 + y2) - r2*sin(t1);
    let xx = (d - r1 - r2)*cos(t1);
    let yy = (d - r1 - r2)*sin(t1);
    drawArrow(xx1, yy1, xx, yy);
    drawArrow(xx2, yy2, -xx, -yy);
}

function drawArrow_head(x, y, cx, cy, head)
{
    line(x, y, x + cx, y + cy);

    // 화살표 모양
    let leng = sqrt(cx*cx + cy*cy);
    let bolt = min(leng/2.0, head);
    let x1 =  0.968912422 * cx*bolt/leng - 0.247403959 * cy*bolt/leng;
    let y1 =  0.247403959 * cx*bolt/leng + 0.968912422 * cy*bolt/leng;
    let x2 =  0.968912422 * cx*bolt/leng + 0.247403959 * cy*bolt/leng;
    let y2 = -0.247403959 * cx*bolt/leng + 0.968912422 * cy*bolt/leng;
    beginShape();
    vertex(x + cx - x1, y + cy - y1);
    vertex(x + cx, y + cy);
    vertex(x + cx - x2, y + cy - y2);
    endShape();
}

function drawArrow2D(x, y, cx, cy)
{
    let lArrow = mag(cx, cy);	// 전체 길이
    let wArrow = width*0.005;	// 반쪽 넓이
    let head = min(lArrow, 3*wArrow);

    // 운동에너지 화살표 그리기
    let oxArrow = [ 0, lArrow - head, lArrow - head, lArrow, lArrow - head, lArrow - head, 0 ];
    let oyArrow = [ wArrow, wArrow, 2*wArrow, 0, -2*wArrow, -wArrow, -wArrow ];

    push();
    translate(x, y);
    rotate(atan2(cy, cx));
    beginShape();
    for (let i = 0; i < oxArrow.length; i++)
    {
        vertex(max(oxArrow[i], 0), oyArrow[i]);
    }
    endShape(CLOSE);
    pop();
}

function drawArrow2D_thick(x, y, cx, cy, thick)
{
    // 화살표의 길이
    let lArrow = round(sqrt(cx * cx + cy * cy));

    // 운동에너지 화살표 그리기
    let oxArrow = [ 0, lArrow - 2*thick, lArrow - 2*thick, lArrow, lArrow - 2*thick, lArrow - 2*thick, 0 ];
    let oyArrow = [ thick, thick, 2*thick, 0, -2*thick, -thick, -thick ];

    push();
    translate(x, y);
    rotate(atan2(cy, cx));
    beginShape();
    for (let i = 0; i < oxArrow.length; i++)
    {
        vertex(max(oxArrow[i], 0), oyArrow[i]);
    }
    endShape(CLOSE);
    pop();
}

// 임의의 점의 각도 구하기 (360진법)
function getAngle(x, y)
{
    let r = sqrt(x*x + y*y);
    let dx = x/r;
    let dy = y/r;

    let e0 = 1;
    let e1 = 1;
    let a = 0;

    for (let i = 0; i < 360; i++)
    {
        e1 = abs(dcos[i] - dx) + abs(dsin[i] - dy);
        if (e1 < e0)
        {
            e0 = e1;
            a = i;
        }
    }

    return a;
}

// 회전 변환 (디그리)
function get_x(x, y, z, rx, ry, rz)
{
    rx = mod(rx, 360);
    ry = mod(ry, 360);
    rz = mod(rz, 360);
    let d;
    d = dcos[ry]*dcos[rz]*x + dcos[ry]*dsin[rz]*y + dsin[ry]*z;
    return d;
}
function get_y(x, y, z, rx, ry, rz)
{
    rx = mod(rx, 360);
    ry = mod(ry, 360);
    rz = mod(rz, 360);
    let d;
    d = - dcos[rx]*dsin[rz]*x - dsin[rx]*dsin[ry]*dcos[rz]*x + dcos[rx]*dcos[rz]*y - dsin[rx]*dsin[ry]*dsin[rz]*y + dsin[rx]*dcos[ry]*z;
    return d;
}
function get_z(x, y, z, rx, ry, rz)
{
    rx = mod(rx, 360);
    ry = mod(ry, 360);
    rz = mod(rz, 360);
    let d;
    d = dsin[rx]*dsin[rz]*x - dcos[rx]*dsin[ry]*dcos[rz]*x - dsin[rx]*dcos[rz]*y - dcos[rx]*dsin[ry]*dsin[rz]*y + dcos[rx]*dcos[ry]*z;
    return d;
}

// 회전 변환 (라디안 실수)
function get_x_radian(x, y, z, rx, ry, rz)
{
    let d;
    d = cos(ry)*cos(rz)*x + cos(ry)*sin(rz)*y + sin(ry)*z;
    return d;
}
function get_y_radian(x, y, z, rx, ry, rz)
{
    let d;
    d = - cos(rx)*sin(rz)*x - sin(rx)*sin(ry)*cos(rz)*x + cos(rx)*cos(rz)*y - sin(rx)*sin(ry)*sin(rz)*y + sin(rx)*cos(ry)*z;
    return d;
}
function get_z_radian(x, y, z, rx, ry, rz)
{
    let d;
    d = sin(rx)*sin(rz)*x - cos(rx)*sin(ry)*cos(rz)*x - sin(rx)*cos(rz)*y - cos(rx)*sin(ry)*sin(rz)*y + cos(rx)*cos(ry)*z;
    return d;
}


// 극좌표계를 직교좌표계로
// x - 방위각 (디그리)
// y - 고도 (디그리)
// z - 거리 (픽셀)
//--------------------------------------------------------------------------
function pol_abs_x(x, y, z)
{
    return z * dcos[mod(y, 360)] * dcos[mod(x, 360)];
}
function pol_abs_y(x, y, z)
{
    return z * dcos[mod(y, 360)] * dsin[mod(x, 360)];
}
function pol_abs_z(x, y, z)
{
    return z * dsin[mod(y, 360)];
}

function pol_abs_x_degree(x, y, z)
{
    return z * cos(radians(y)) * cos(radians(x));
}
function pol_abs_y_degree(x, y, z)
{
    return z * cos(radians(y)) * sin(radians(x));
}
function pol_abs_z_degree(x, y, z)
{
    return z * sin(radians(y));
}
