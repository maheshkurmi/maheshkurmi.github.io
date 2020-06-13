/*!
 * Sound laboratory port for p5.js
 * Developed by Christopher Britt
 * File created: June 14 2016
 * This file manages the zoom functionality for the system.
 */



var zoomAmount = 0.5;


var zoomIncrement = 0.95;

function performZoom(){
    document.getElementById("defaultCanvas0").style="width: "+width*zoomAmount+"px; height: "+height*zoomAmount+"px";
}

function zoomIn(){
    zoomAmount /= zoomIncrement;

    performZoom();
}

function zoomOut(){
    zoomAmount *= zoomIncrement;

    if(zoomAmount < 0.1){
        zoomAmount = 0.1;
    }

    performZoom();
}

function zoomFullScreen(){
    // Zoom to "full screen"
    zoomAmount = window.innerWidth / width > window.innerHeight / height ? (window.innerHeight-10) / height : (window.innerWidth-10) / width;
    performZoom();
}

function detectZoomKey(_key){
    if(_key == 90){
        manualZoomAmount = true;
        zoomIn();
    }
    else if(_key == 88){
        manualZoomAmount = true;
        zoomOut();
    }
    else if(_key == 70){
        manualZoomAmount = false;
        zoomFullScreen();
    }
}

/*!
 * Conductor laboratory port for p5.js
 * Developed by Christopher Britt
 * File created: June 14 2016
 *
 */

var dt = 1/30;

function updateTime(){
    dt = frameRate > 0 ? 1 / frameRate : 1 / 30;
}

/*!
 * Conductor laboratory port for p5.js
 * Developed by Christopher Britt
 * File created: June 14 2016
 *
 */


// A list for all of our particles
var particles = [];
var protons = [];

// Should arrows be drawn
var showArrows = false;

var numElectron = 100;

var spawningBall = false;

var AllowRandomElectronSpawn = true;

var LabelTextSize = 20;

var fieldToRight = true;

var velocitySampleWidth = 20;

var noProtonMode = false;

var DEBUG_ENABLED = false;

var manualZoomAmount = false;

var E = 0;

var MAX_PARTICLES = 200;
var world;

function setup(){
    document.addEventListener("keydown", keyDownEvent, true);
    document.addEventListener("mousedown", mouseClickEvent, true);
    document.addEventListener("mouseup", mouseReleaseEvent, true);
    document.addEventListener("mousemove", mouseMoveEvent, true);
    document.addEventListener("touchmove", touchMoveEvent, true);
    document.addEventListener("touchstart", touchClickEvent, true);
    document.addEventListener("touchended", touchReleaseEvent, true);

    createCanvas(640,360);

    world = createWorld(new box2d.b2Vec2(0, 0));

   // createWalls(0,20,200,20);
    background(255);
    smooth();

    //zoomFullScreen();
    //createWalls(0,0,200,15);
    createWalls(0,-3,200,8);
    createWalls(0,305,200,2);
    spawnElectron(numElectron);

    createConductor();

    //initDetector();

    //createButton();
    manualZoomAmount = true;
    zoomAmount = 0.55;
    zoomIn();
    performZoom();

    //noLoop();
}

function createWalls( x,  y,  width,  height){
    let wallshape = new box2d.b2PolygonShape();

    // Don't set the angle here; instead call setTransform on the body below. This allows future
    // calls to setTransform to adjust the rotation as expected.
    wallshape.SetAsBox(width,height);


    // Define a body
    let bd = new box2d.b2BodyDef();

    bd.type = box2d.b2BodyType.b2_staticBody;
    bd.position = scaleToWorld(x,y);

    // Define a fixture
    let fd = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd.shape = wallshape;

    // Some physics
    fd.density = 1.0;
    fd.friction = 0.0;

    fd.restitution = .99;
    //    fd.restitution = .8;

    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd);

}


var xBord = 0;
var yBord = 100;

var PSpace = 40;

var numProtonX = 17;
var numProtonY = 5;

function spawnElectron(num){
    /**
     Core Electron Spawn Random

     for(var i = 0; i < num; ++i){
		var b = new Particle(random(40,600),random(minBarY, maxBarY),0.5);
		particles.push(b);
	}
     */

    var spawnCount = 0;
    for(var i = 0; spawnCount < num; ++i){
        i = i % 288;

        if(random(0,1) > ( numElectron / 288) ) continue;

        var yMult = Math.floor(i/32);

        var ty = 20 * yMult + yBord;

        if(yMult%2==0){
            if(i%4==0) continue;
        }
        else{
            if(i%4==2) continue;
        }

        var tx = 20 * (i % 32);

        if(AllowRandomElectronSpawn) {
            tx += random(-5,5);
            ty += random(-5,5);
        }
        var b = new Particle(tx, ty, 0.5);

        particles.push(b);
        ++spawnCount;
    }
}

function createConductor(){
    minBarY = 100000;
    maxBarY = -10000;

    for(var tx = 0; tx < numProtonX; ++tx){
        for(var ty = 0; ty < numProtonY; ++ty){
            if(tx%2 > 0 && ty == numProtonY - 1) continue;

            var xCoord = tx*PSpace+xBord;
            var yCoord = ty*PSpace + ( PSpace / 2 ) * ( tx%2 ) + yBord;

            if(yCoord < minBarY) minBarY = yCoord;
            if(yCoord > maxBarY) maxBarY = yCoord;

            var b = new StaticParticle(xCoord, yCoord, 1);
            protons.push(b);
        }
    }
}

function draw(){
    if(!manualZoomAmount) zoomFullScreen();
    background(255);

    updateTime();

    if(spawningBall && (particles.length < MAX_PARTICLES)){
        var b = new Particle(pointX, pointY, 0.5);
        particles.push(b);
    }

    if(protons.length == 0){
        var b = new Particle(fieldToRight ? 0 : width, random(0.4*height,0.6*height), 0.5);
        particles.push(b);
    }

    else {
        push();
        stroke(200);
        strokeWeight(1);
        line(0, yBord - barAttrOffset, width, yBord - barAttrOffset);
        line(0, maxBarY + barAttrOffset, width, maxBarY + barAttrOffset);
        pop();
    }




    // System Functionality. Do not change.

    // We must always step through time!

    // 2nd and 3rd arguments are velocity and position iterations
    world.Step(dt,1,1);

    var alpha = 255*E/4.0;

    // Draw arrow to show electric field
    push();
    strokeWeight(20);
    //stroke(0xe0, 0x80, 0x10);
    stroke(255,174,100, alpha);

    var lx = 75;
    var ly = 180;
    var la = 75;

    line(lx,ly,width - lx,ly);

    translate(lx,ly);

    if(!fieldToRight){
        translate(width-lx - la*sin(PI/4) - 20, 0);
        rotate(PI);
    }
    push();
    rotate(PI/4);
    line(0,0,la,0);
    line(0,0,0,-la);
    pop();
    pop();

    // Delete & Display all the particles
    for (var i = protons.length-1; i >= 0; i--) {
        protons[i].display();
        if (protons[i].done()==true) {
            protons.splice(i,1);
        }
    }

    updateAverage();

    for (var i = particles.length-1; i >= 0; i--) {
        if (particles[i].done()==true) {
            particles.splice(i,1);
            lastXs.splice(i,1);
            continue;
        }
        particles[i].display();
    }

    // Draw the lines around the region.
    {
        push();
        stroke(0);
        line(1, 1, width-1, 1);
        line(1, 1, 1, height-1);
        line(1,height-1,width-1,height-1);
        line(width-1,1,width-1,height-1);
        pop();
    }


    push();
    textSize(LabelTextSize);
    fill(0xff,0,0);
    text("Velocity", 15, 300);
    fill(204,0,204);
    text("Acceleration", 15, 300 + LabelTextSize);
    //    fill(0xe0, 0x80, 0x10);
    //    text("Electric Field", 15, 300 + 2*LabelTextSize);
    fill(255, 174, 100);
    text("Electric Field = " + E, 15, 300 + 2*LabelTextSize);
    fill(0);
    text("Press E to change the electric field strength!",100,25);
    text("Notice how the drift velocity increases with E",95,50);
    pop();

}



// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
//modified by Savva Madar about 15%. Basically just changing squares to circles and adding random color
//arrow system by Christopher Britt
//! This controls the size of the arrow head.
var ArrowHeadSize = 5;

var ArrowMultiplier = 0.10;

var ArrowScaleVel = 2;
var ArrowScaleAccel = 100;

var accelAmount = 1.5;

var attrAmount = 3.5;

var minBarY = 100000;
var maxBarY = -10000;

var barAttrOffset = 15;

var scaleFlux = false;

// Constructor
function Particle(x, y, r) {

    //var myColor = color(parseInt(100+random()*155),parseInt(100+random()*155),parseInt(100+random()*155));
    // Define a body
    var bd = new box2d.b2BodyDef();
    var myRadius = r;

    var lastX;
    var currentX = 0;

    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    // Define a fixture
    var fd = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd.shape = new box2d.b2CircleShape(myRadius);

    // Some physics
    fd.density = 1.0;
    fd.friction = 0;//.25;

    fd.restitution = .8;
    //    fd.restitution = .8;

    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd);

    // Some additional stuff
    //  this.body.SetLinearVelocity(new box2d.b2Vec2(random(-3,3), random(-3,3)));
   // this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));

    //  if(fieldToRight) this.body.SetLinearVelocity(new box2d.b2Vec2(random(2,4), random(-1,1)));
    //  else this.body.SetLinearVelocity(new box2d.b2Vec2(random(-2,-4), random(-1,1)));


    this.body.SetAngularVelocity(random(0, 0));



    // This function removes the particle from the box2d world
    this.killBody = function() {
        world.DestroyBody(this.body);
    }

    this.totalVelocity = function() {
        return sqrt(this.body.GetLinearVelocity().x * this.body.GetLinearVelocity().x + this.body.GetLinearVelocity().y * this.body.GetLinearVelocity().y);
    }

    this.velX = function() {
        return this.body.GetLinearVelocity().x;
    }

    this.getX = function() {
        return this.body.GetPosition().x * scaleFactor;
    }

    this.getLastX = function() {
        return this.lastX;
    }

    // Is the particle ready for deletion?
    this.done = function() {
        // Let's find the screen position of the particle
        var pos = scaleToPixels(this.body.GetPosition());
        // Is it off the bottom of the screen?
        //console.log("is "+pos.y+" > "+(height+this.r*3));
        //I do 3 to make sure it's off screen before killing it

        foo = new box2d.b2Vec2(0, 0);

        if (pos.x > width) {
            //      this.body.SetTransformXYRadians(0, pos.y/scaleFactor, 0);
            if (noProtonMode == false) {
                //                this.body.SetTransformXYRadians(0, random(0.4 * height, 0.6 * height) / scaleFactor, 0);
                this.body.SetTransformXYRadians( 0. / scaleFactor, pos.y / scaleFactor, 0);
            } else if (noProtonMode == true) {
                this.killBody();
                return true;
            }
            //this.body.SetTransformXYRadians(0, random(getBotSpawnRange(),getTopSpawnRange())/scaleFactor, 0);
            //        if(protons.length == 0) this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));
            return false;
        }

        if (pos.x < 0) {
            if (noProtonMode == false) {
                this.body.SetTransformXYRadians(width / scaleFactor, pos.y / scaleFactor, 0);
            } else if (noProtonMode == true) {
                this.killBody();
                return true;
            }


            //this.body.SetTransformXYRadians(width/scaleFactor, random(getBotRightSpawnRange(),getTopRightSpawnRange())/scaleFactor, 0);
            //      if(protons.length == 0) this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));
            return false;
        }


        /*

    if (pos.y > height+myRadius*3) {
      this.killBody();
      return true;
    }

    if (pos.y < 0) {
      this.killBody();
      return true;
    }

    */
        return false;
    }

    this.drawArrow = function(x, y, vx, vy, scale, vel) {
        if (showArrows) {
            strokeWeight(2);

            push();
            translate(x, y);
            //				var angle = atan(vy/vx);
            var angle = atan2(vy, vx);

            var mag = sqrt(vx * vx + vy * vy);

            var tMult = ArrowMultiplier;

            var PI = 3.14;

            push();
            rotate(angle);
            /*
            if(vy < 0){
            	if(vx > 0) rotate(angle);
            	else{
            		rotate(angle);
            		tMult = -1;
            	}
            }
            else {
            	if(vx > 0) rotate(angle);
            	else {
            		rotate(angle);
            		tMult = -1;
            	}
            	}*/
            //		if (vx < 0) tMult  = -1;

            if (vel) stroke(255, 0, 0);
            else stroke(204, 0, 204);

            var lineLength = (mag / 1.41) * scale * tMult;
            //var lineLength = 2 * tMult * (mag / 1.41) + r;
            line(0, 0, lineLength, 0);

            push();
            translate(lineLength, 0);

            push();
            rotate(7 * PI / 6);
            line(0, 0, ArrowHeadSize, 0);
            pop();
            push();
            rotate(-7 * PI / 6);
            line(0, 0, ArrowHeadSize, 0);
            pop();

            /*
            if(vx > 0) {
            	push();
            	rotate(7*PI/6);
            	line(0,0,ArrowHeadSize,0);
            	pop();
            	push();
            	rotate(-7*PI/6);
            	line(0,0,ArrowHeadSize,0);
            	pop();
            }
            else {
            	push();
            	rotate(PI/6);
            	line(0,0,ArrowHeadSize,0);
            	pop();
            	push();
            	rotate(-PI/6);
            	line(0,0,ArrowHeadSize,0);
            	pop();
            	}*/
            pop();
            pop();
            pop();
        }
    }

    // Drawing the particle
    this.display = function() {
        push();
        // Get the body's position
        var pos = scaleToPixels(this.body.GetPosition());
        var vel = this.body.GetLinearVelocity();
        var accelX = 0;
        var accelY = 0;

        this.lastX = currentX;

        this.currentX = this.getX();


        if ((pos.y < minBarY - barAttrOffset) && !(protons.length == 0)) {
            accelY += attrAmount;
            accelX = 0;
        } else if (pos.y > maxBarY + barAttrOffset && !(protons.length == 0)) {
            accelY -= attrAmount;
            accelX = 0;
        }
        // This is the line that controls the X acceleration.
        else accelX = accelAmount * E;

        if (!fieldToRight) accelX *= -1;
        /*
    if (fieldToRight) {
	accelX = accelAmount*E;
    } else {
	accelX = -accelAmount*E;
	}*/


        vel.x += accelX * dt; // times dt but dt = 1 because this code was written by a CS student
        vel.y += accelY * dt; // times dt
        this.body.SetLinearVelocity(vel);
        // Get its angle of rotation
        var a = this.body.GetAngle();

        push();
        translate(pos.x, pos.y);
        rotate(a);
        //fill(myColor);
        fill(0, 0x25, 0xff);
        stroke(0);
        strokeWeight(1);
        ellipse(0, 0, r * 20, r * 20);
        // Let's add a line so we can see the rotation
        // line(0,0,r*10,0);
        pop();

        push();
        translate(pos.x, pos.y);
        stroke(0);
        strokeWeight(1);
        var tMult = scaleFactor / 2;
        line(-r * tMult, 0, r * tMult, 0);
        pop();

        //println(accelX);
        if(showArrows)
        this.drawArrow(pos.x, pos.y, vel.x/dt, vel.y/dt, ArrowScaleVel, true);
        //this.drawArrow(pos.x, pos.y, accelX, accelY, ArrowScaleAccel, false);

        pop();
    }
}

/*!
 * Sound laboratory port for p5.js
 * Developed by Christopher Britt
 * File created: June 14 2016
 *
 */

var pointX;
var pointY;

function is_touch_device() {
    return 'ontouchstart' in window        // works on most browsers
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

function keyDownEvent(e){
    println("Key down detected. Code = "+e.keyCode);
    detectZoomKey(e.keyCode);

    // Space is pressed, clear screen.
    if(e.keyCode == 72) {
        showArrows = false;
    } else if(e.keyCode == 85) {
        showArrows = true;
    } else if(e.keyCode == 82){
        clearAverage(true);
        fieldToRight = !fieldToRight;
        counter = 1;
    }
    else if(e.keyCode == 32){
        clearAverage(true);
        if(protons.length > 0){
            clearProton();
            clearElectron();
            noProtonMode = true;
        }
        else {
            createConductor();
            noProtonMode = false;
        }
        counter = 1;
    }
    else if(e.keyCode == 67){
        clearAverage(false);
        if(particles.length > 0){
            clearElectron();
        }
        else spawnElectron(numElectron);
    } else if(e.keyCode == 69){
        clearAverage(true);
        E++;
        if (E > 4) E = 0;
        counter = 1;
    }
    else if(e.keyCode == 80){
        step(1);
    }
    else if(e.keyCode == 219) stop();
    else if(e.keyCode == 221) start();


}

function clickPointer(){

    if(detectMouseClick(pointX, pointY)) ;
    else spawningBall = true;
}

function releasePointer(){
    spawningBall = false;

    movingDetector = false;
}

function movePointer(x,y){
    detectMouseMove();
}

function mouseMoveEvent(e){
    pointX = e.clientX/zoomAmount;
    pointY = e.clientY/zoomAmount;

    pointX = (pointX - canvas.offsetLeft);
    pointY = (pointY - canvas.offsetTop);

    movePointer(pointX, pointY);
}

function mouseClickEvent(e){
    clickPointer();
}

function mouseReleaseEvent(e){
    releasePointer();
}

function touchMoveEvent(e){
    var tit = e.touches.item(0);

    pointX = tit.clientX/zoomAmount;
    pointX = tit.clientY/zoomAmount;


    pointX = (pointX - canvas.offsetLeft);
    pointY = (pointY - canvas.offsetTop);

    movePointer(pointX, pointY);
}

function touchClickEvent(e){
    clickPointer();
}

function touchReleaseEvent(e){
    releasePointer();
}

function createButton(){
    var btn = document.createElement("BUTTON");        // Create a <button> element
    btn.onclick = requestFullScreen;
    btn.id = "fullScreenButton";
    var t = document.createTextNode("Go full screen");       // Create a text node
    btn.appendChild(t);                                // Append the text to <button>
    document.body.appendChild(btn);                    // Append <button> to <body>

}
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
function requestFullScreen() {

    var el = document.body;

    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen
        || el.mozRequestFullScreen || el.msRequestFullScreen;

    if (requestMethod) {

        // Native full screen.
        requestMethod.call(el);

    } else if (typeof window.ActiveXObject !== "undefined") {

        // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");

        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    document.getElementById("fullScreenButton").remove();
    goFullScreenAfterButton = true;
}

/*!
 * Sound laboratory port for p5.js
 * Developed by Christopher Britt
 * File created: June 14 2016
 *
 */


function stop() {
    noLoop();
}

function start() {
    loop();
}

function clearProton() {
    clearAverage(true);
    for(var i = 0; i < protons.length; ++i){
        protons[i].killBody();
    }

    protons = [];
}

function clearElectron() {
    clearAverage(false);
    for(var i = 0; i < particles.length; ++i){
        particles[i].killBody();
    }

    particles = [];
}

function clearAll() {
    clearProton();
    clearElectron();
    clearAverage(true)
    world = createWorld(new box2d.b2Vec2(0, 0));
    console.log("Screen Cleared. ");
}

function step(num){
    for(var i = 0; i < num; ++i){
        draw();
    }
}


// -----------------------------------------------------------------------------
// Scale Methods
// -----------------------------------------------------------------------------

var scaleFactor;

var scaleToWorld = function(a,b) {
    if (a instanceof box2d.b2Vec2) {
        var newv = new box2d.b2Vec2();
        newv.x = (a.x)/scaleFactor;
        newv.y = (a.y)/scaleFactor;
        return newv;
    } else if ("undefined"!=typeof b) {
        var newv = new box2d.b2Vec2();
        newv.x = (a)/scaleFactor;
        newv.y = (b)/scaleFactor;
        return newv;
    } else {
        return a/scaleFactor;
    }
}

var scaleToPixels = function(a,b) {
    if (a instanceof box2d.b2Vec2) {
        var newv = new box2d.b2Vec2();
        newv.x = a.x*scaleFactor;
        newv.y = a.y*scaleFactor;
        return newv;
    } else if ("undefined"!=typeof b) {
        var newv = new box2d.b2Vec2();
        newv.x = a*scaleFactor;
        newv.y = b*scaleFactor;
        return newv;
    } else {
        return a*scaleFactor;
    }
}

// -----------------------------------------------------------------------------
// Create Methods
// -----------------------------------------------------------------------------

var createWorld = function() {

    var worldAABB = new box2d.b2AABB();
    worldAABB.lowerBound.SetXY(-this.bounds, -this.bounds);
    worldAABB.upperBound.SetXY(this.bounds, this.bounds);
    //	var gravity = new box2d.b2Vec2(0,20);
    var gravity = new box2d.b2Vec2(0,0);
    var doSleep = true;

    scaleFactor = 10;

    return new box2d.b2World(gravity, doSleep);
}

// -----------------------------------------------------------------------------
// Draw Methods
// -----------------------------------------------------------------------------

var debugDraw = function(canvas, scale, world) {

    var context = canvas.getContext('2d');
    context.fillStyle = '#DDD';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw joints
    for(var j=world.m_jointList; j; j=j.m_next) {
        context.lineWidth = 0.25;
        context.strokeStyle = '#00F';
        drawJoint(context, scale, world, j);
    }

    // Draw body shapes
    for(var b=world.m_bodyList; b; b=b.m_next) {
        for(var f = b.GetFixtureList(); f!=null; f=f.GetNext()) {
            context.lineWidth = 0.5;
            context.strokeStyle = '#F00';
            drawShape(context, scale, world, b, f);
        }
    }
}

var drawJoint = function(context, scale, world, joint) {
    context.save();
    context.scale(scale,scale);
    context.lineWidth /= scale;

    var b1 = joint.m_bodyA;
    var b2 = joint.m_bodyB;
    var x1 = b1.GetPosition();
    var x2 = b2.GetPosition();
    var p1 = joint.GetAnchorA();
    var p2 = joint.GetAnchorB();

    context.beginPath();
    switch (joint.m_type) {
        case box2d.b2Joint.e_distanceJoint:
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            break;
        default: {
            if (b1 == world.m_groundBody) {
                context.moveTo(p1.x, p1.y);
                context.lineTo(x2.x, x2.y);
            }
            else if (b2 == world.m_groundBody) {
                context.moveTo(p1.x, p1.y);
                context.lineTo(x1.x, x1.y);
            }
            else {
                context.moveTo(x1.x, x1.y);
                context.lineTo(p1.x, p1.y);
                context.lineTo(x2.x, x2.y);
                context.lineTo(p2.x, p2.y);
            }
        } break;
    }
    context.closePath();
    context.stroke();
    context.restore();
}

var drawShape = function(context, scale, world, body, fixture) {

    context.save();
    context.scale(scale,scale);

    var bPos = body.GetPosition();
    context.translate(bPos.x, bPos.y);
    context.rotate(body.GetAngleRadians());

    context.beginPath();
    context.lineWidth /= scale;

    var shape = fixture.m_shape;
    switch(shape.m_type) {
        case box2d.b2ShapeType.e_circleShape: {
            var r = shape.m_radius;
            var segments = 16.0;
            var theta = 0.0;
            var dtheta = 2.0 * Math.PI / segments;

            context.moveTo(r, 0);
            for (var i = 0; i < segments; i++) {
                context.lineTo(r + r * Math.cos(theta), r * Math.sin(theta));
                theta += dtheta;
            }
            context.lineTo(r, 0);
        } break;

        case box2d.b2ShapeType.e_polygonShape:
        case box2d.b2ShapeType.e_chainShape: {

            var vertices = shape.m_vertices;
            var vertexCount = shape.m_count;
            if (!vertexCount) return;

            context.moveTo(vertices[0].x, vertices[0].y);
            for (var i = 0; i < vertexCount; i++)
                context.lineTo(vertices[i].x, vertices[i].y);
        } break;
    }

    context.closePath();
    context.stroke();
    context.restore();
}

// Created by Christopher Britt to contain functionality of averaging particle velocity.
var DETECTOR_DISPLAY_MODE = {
    CIRCLE: {
        value: 0,
        name: "Circle",
        code: "C"
    },
    LINE: {
        value: 1,
        name: "Line",
        code: "L"
    }
};

var avg = [];
var count = [];

var lastXs = [];

var counter = 0;

var detectorCount = 1;

var detectorPerColumn = 1;

var detectorX = [];
var detectorY = [];

var velocityMemoryLength = 100;

var movingDetector = false;

var whichDetector = 0;

var detectorEnabled = false;

var detectorColor = new Array();

var showDetectorRegion = true;

var chosenDisplayMode = DETECTOR_DISPLAY_MODE.LINE;

var firsttime = true;

function updateAverage() {
    if (detectorEnabled) {
        try {
            for (var d = 0; d < detectorCount; ++d) {
                for (var i = 0; i < particles.length; ++i) {
                    var pX = particles[i].getX();
                    var plX = lastXs[i];
                    //		    var counter = 0;
                    //console.log("X = "+pX);

                    /*
                    if (pX > detectorX[d] - velocitySampleWidth) {
                        if (pX < detectorX[d] + velocitySampleWidth) {
                            */
                    //println(plX+", "+pX+" _ "+detectorX[d]);
                    //println(counter);
                    if (
                        (plX > detectorX[d] && pX < detectorX[d]) ||
                        (plX < detectorX[d] && pX > detectorX[d])
                    )
                    {
                        if(abs(plX) - abs(pX) < 100){
                            counter++;
                            //                	    	println(plX+", "+pX+" _ "+detectorX[d]);

                            var pV = particles[i].velX();
                            // 0 += (value - 0) / (++0 == 1)
                            // 0 += value / 1
                            avg[d] += (pV - avg[d]) / (++count[d]);

                            //                            println(pV);

                            //			if ((keyCode == 69) || (keyCode == 32) || (firsttime == true)) {
                            /*
                            if (counter == 1) {
                                count[d] = 1;
                                avg[d] = pV;
                                firsttime = false;
                                counter = 1;
                                println("I have reset the counter");
                                //			println(counter);
                            }
                            */
                            //if(count[d]>velocityMemoryLength-1) count[d] = velocityMemoryLength - 1;

                            //			println(counter);
                        }
                    }
                }
                if (DEBUG_ENABLED || showDetectorRegion) {
                    push();
                    //                    stroke(detectorColor[d][0],detectorColor[d][1],detectorColor[d][2]);
                    stroke(0, 191, 191);
                    if (d % 2) stroke(255, 174, 100);
                    var xm = detectorX[d] - velocitySampleWidth;
                    var xM = detectorX[d] + velocitySampleWidth;
                    //                    line(xm,0,xm,height);
                    //                    line(xM,0,xM,height);
                    line(xm, 0, xm, height);
                    line(xM, 0, xM, height);
                    pop();
                }

                var printAverage = avg[d];

                printAverage = Math.floor(1000 * printAverage) / 1000;

                push();

                fill(0, 191, 191);
                //         	if (d%2) fill(255,174,100);
                //                fill(detectorColor[d][0],detectorColor[d][1],detectorColor[d][2]);
                //                fill(155);

                if (chosenDisplayMode == DETECTOR_DISPLAY_MODE.CIRCLE)
                    ellipse(detectorX[d], detectorY[d], velocitySampleWidth * 2, 20);

                //                text("Average velocity is: "+printAverage,10 + ((width/2) * Math.floor(d/detectorPerColumn) ),height-20 - 25*(d%detectorPerColumn));
                text("  measured",xm - 0.05*width,height-35 - 25*(d%detectorPerColumn));
                text("drift velocity = " + floor(100 * printAverage) / 100, xm - 0.05 * width, height - 20 - 25 * (d % detectorPerColumn));

                pop();

                //console.log("New average is: "+avg);
            }
        } catch (e) {
            console.log(e instanceof TypeError);
            console.log(e.message);
            console.log(e.name);
            console.log(e.fileName);
            console.log(e.lineNumber);
            console.log(e.columnNumber);
            console.log(e.stack);
        }
    }

    lastXs = [];
    for(var i = 0; i < particles.length; ++i){
        lastXs[i] = particles[i].getX();
    }
}

function initDetector() {
    if (!detectorEnabled) {
        detectorX = [];
        detectorY = [];
        avg = new Array();
        count = new Array();
        for (var i = 0; i < detectorCount; ++i) {

            if (i % 2) detectorX.push(0.15 * width);
            detectorX.push(0.72 * width);
            //            detectorX.push(random(50, width-50));
            detectorY.push(height / 2);
            avg[i] = 0;
            count[i] = 0;
            counter = 0;
        }

        randDetectColor();

        detectorEnabled = true;
    }
}

function detectMouseClick(_x, _y) {
    //    if(!movingDetector){
    for (var i = 0; i < detectorCount; ++i) {
        var difX = _x - detectorX[i];
        var difY = _y - detectorY[i];
        var dist = Math.sqrt(difX * difX + difY * difY);
        console.log("dist = " + dist);
        if (dist < velocitySampleWidth && (chosenDisplayMode == DETECTOR_DISPLAY_MODE.CIRCLE)) {
            //console.log("Button Pressed. ");
            movingDetector = true;
            whichDetector = i;
            return true;
        } else if (chosenDisplayMode == DETECTOR_DISPLAY_MODE.LINE && Math.abs(difX) < velocitySampleWidth) {
            movingDetector = true;
            whichDetector = i;
            return true;
        }
    }
    //    }
    return false;
}

function detectMouseMove() {
    try {
        if (movingDetector) {
            clearAverage(protons.length == 0);
            detectorX[whichDetector] = pointX;
            detectorY[whichDetector] = pointY;
        }
    } catch (e) {
        console.log(e instanceof TypeError);
        console.log(e.message);
        console.log(e.name);
        console.log(e.fileName);
        console.log(e.lineNumber);
        console.log(e.columnNumber);
        console.log(e.stack);
    }
}

function randDetectColor() {
    detectorColor = new Array();
    for (var i = 0; i < detectorCount; ++i) {
        detectorColor[i] = new Array();
        for (var c = 0; c < 3; ++c) {
            detectorColor[i][c] = Math.floor(random(100, 255));
            console.log("color [" + i + "][" + c + "] = " + detectorColor[i][c]);
        }
    }
}

function clearAverage(cAll){
    if(cAll) for(var i = 0; i < avg.length; ++i) avg[i] = 0;
    for(var i = 0; i < count.length; ++i) count[i] = 0;
}

/*!
 * Sound laboratory port for p5.js
 * Developed by Christopher Britt
 * File created: June 14 2016
 *
 */


// Constructor
function StaticParticle(x, y, r) {

    //var myColor = color(parseInt(100+random()*155),parseInt(100+random()*155),parseInt(100+random()*155));
    // Define a body
    var bd = new box2d.b2BodyDef();
    var myRadius = r;

    bd.type = box2d.b2BodyType.b2_staticBody;
    bd.position = scaleToWorld(x,y);

    // Define a fixture
    var fd = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd.shape = new box2d.b2CircleShape(myRadius);

    // Some physics
    fd.density = 1.0;
    fd.friction = 0.0;
    fd.restitution = 0.1;

    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd);

    // Some additional stuff
    //  this.body.SetLinearVelocity(new box2d.b2Vec2(random(0,5), random(-5,5)));
    this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));
    this.body.SetAngularVelocity(0);

    // This function removes the particle from the box2d world
    this.killBody = function() {
        world.DestroyBody(this.body);
    }

    this.totalVelocity = function() {
        return sqrt(this.body.GetLinearVelocity().x*this.body.GetLinearVelocity().x + this.body.GetLinearVelocity().y*this.body.GetLinearVelocity().y);
    }

    this.velX = function(){
        return this.body.GetLinearVelocity().x;
    }

    this.getX = function() {
        return this.body.GetPosition().x*scaleFactor;
    }

    // Is the particle ready for deletion?
    this.done = function() {
        return false;
    }

    // Drawing the particle
    this.display = function() {
        push();
        // Get the body's position
        var pos = scaleToPixels(this.body.GetPosition());
        var vel = this.body.GetLinearVelocity();
        // Get its angle of rotation
        var a = this.body.GetAngle();

        push();
        translate(pos.x,pos.y);
        rotate(a);
        //fill(myColor);
        fill(0xff,0x25,0x00);
        stroke(0);
        strokeWeight(1);
        ellipse(0,0,r*20,r*20);
        pop();

        push();
        translate(pos.x, pos.y);
        stroke(0);
        strokeWeight(1);
        var tMult = scaleFactor/2;
        line(0,-r*tMult,0,r*tMult);
        line(-r*tMult,0,r*tMult,0);
        pop();
    }
}



