
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
canvas.isdragging=false;

canvas.addEventListener('mousewheel', mouseWheelMoved);
canvas.addEventListener('mousemove', mouseMoved);
canvas.addEventListener('mousedown', mousePressed);
canvas.addEventListener('mouseup', mouseReleased);
canvas.addEventListener('click', mouseClicked);
canvas.addEventListener('dblclick', mouseDblClicked);

canvas.addEventListener('touchstart', myTouchStart, false); // touch handler for iPhones, iPads, and Androids
canvas.addEventListener('touchmove', myTouchMove, false); // touch handler for iPhones, iPads, and Androids
canvas.addEventListener('touchend', myTouchEnd, false); // touch handler for iPhones, iPads, and Androids
window.addEventListener('keydown', keyDown, false);
window.addEventListener('keypress', keyUp, false);
window.addEventListener('keyup', keyPress, false);


function myTouchMove(event) {
    let touch = event.touches[0];
    let mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
}

function myTouchStart(event) {
    event.preventDefault();
    let touch = event.touches[0]
    let mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
}

function myTouchEnd(event) {
    event.preventDefault();
    let touch = event.touches[0]
    let mouseEvent = new MouseEvent('mouseup', {
        clientX: touch.clientX,
        clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
}

function getTouchPos(event) {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
    };
}

function getMousePos(event) {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

function mousePressed(me) {
    let m = getMousePos(me);
    canvas.isdragging= true;
    onMouseEvent(1,m.x,m.y,me.button,0);
}

function mouseReleased(me) {
    let m = getMousePos(me);
    canvas.isdragging = false;
    onMouseEvent(3,m.x,m.y,me.button,0);
}

function mouseClicked(me) {
    let m = getMousePos(me);
    canvas.isdragging = false;
    onMouseEvent(4,m.x,m.y,me.button,1);
}

function mouseDblClicked(me) {
    let m = getMousePos(me);
    canvas.isdragging = false;
    onMouseEvent(4,m.x,m.y,me.button,2);
}

function mouseMoved(me) {
    me.preventDefault();
    let m = getMousePos(me);
    if (!canvas.isdragging ) {
        onMouseEvent(0,m.x,m.y,me.button,0);
    }else{
        onMouseEvent(2,m.x,m.y,me.button,0);
    }
}


function mouseWheelMoved(me) {
    me.preventDefault();
    let scroll=me.wheelDelta>0?2:-2;
    let m = getMousePos(me);
    onMouseEvent(5,m.x,m.y,me.button,scroll);
}

function keyDown(e) {
    e.preventDefault;
    onKeyEvent(0,e.keyCode,e.which);
}

function keyPress(e) {
    e.preventDefault;
    onKeyEvent(this,1,e.keyCode,e.which);
}

function keyUp(e) {
    e.preventDefault;
    onKeyEvent(this,2,e.keyCode,e.which);
}

 /* *
    mouseHandler Method to be invoked on mouse or touch action
 *  @param        id : 0=move,1=pressed,2=dragged,3=released,4=clicked,5=wheel scroll
 *  @param         x : mouse x wrt origin at canvas top left
 *   @param        y : mouse y ....
 *   @param   button : 0=left, 1=middle, 2=right
 *   @param    value : clickcount in click event else scroll amount in wheel event
 */
function onMouseEvent(id,x,y,button,value){

}


 /** keyHandler Method to be invoked on keyevent
 *     @param       id : 0=keydown,1=keyup, 2=keypressed
 *     @param  keycode : Unicode key code of the key(ex. 37 =left, 38=up, 39=right, 40=down
 *     @param  keyChar : the Unicode character code of the key that triggered the onkeypress event,
 */
function onKeyEvent(id, keyCode,kkeyChar){

}

