// forcedosc.js (C) 2020 by Paul Falstad

"use strict";

var stoppedCheck;
var animating = false;
var position = 1
var velocity = 0

var molCount;
    
const gridEltWidth = 10; // was 60
const gridEltHeight = 10;
var gridWidth;
var gridHeight;
var mols, grid, bigmol;
var stoppedCheck;
var heaterCheck;
var dividerCheck;
var energyCheck;
var heaterTempBar;
var hideMolsCheck;
var showBrownPathCheck;
var dividerY1, dividerY2;
var gravityBar;
var speedBar;
var molCountBar;
var colorBar;
var setupList = [];
var setup;
var gravity;
var colorMult;
var upperBound;
var topWallPos;
var topWallVel;
var areaHeight;
var heatstate = 0;
var heaterTemp;
var heaterMove;
var wallMomentum = 0;
var wallMomentums = [];
var wallMomentumTime = 0;
var heaterColor;
var averageRadius = 0;
var colors = ["rgb(46,120,255)", "rgb(79,140,254)", "rgb(113,142,253)", "rgb(147,145,252)", "rgb(181,105,178)", "rgb(215,64,103)",
  "rgb(249,23,28)", "rgb(250,101,44)", "rgb(251,139,33)", "rgb(252,178,22)", "rgb(253,216,11)", "rgb(255,255,0)", "rgb(255,255,63)",
  "rgb(255,255,127)", "rgb(255,255,191)", "rgb(255,255,255)"];
var heaterTop;
var heaterLeft;
var heaterRight;
var t, lastSecT, totalKE, temp = [0, 0, 0], totalV;
var brownPath = [];

var refresh = function () {}
var time = 0
var currentTime = 0

var gasView = {
  width: 0,
  top: 0,
  height: 500,
  scale: 100,
  zeroY: 250
}

var histogramView = {
  top: 500,
  height: 300,
  zeroY: 790,
  scale: 30
}

var gasTopView = {}, gasBottomView = {};

function round(x) {
  return Math.round(x*100)/100;
}

function updateInfo() {
  var info = document.getElementById("values");
  const vadj = 1e-4;
  var v = (gasView.width-2-averageRadius*2)*(gasView.height-upperBound-2-averageRadius*2)*vadj;
  info.innerHTML = "V = " + round(v) + "<br>";
  info.innerHTML += "N = " + molCount + "<br>";
  var a = 2*(gasView.width+(gasView.height-upperBound)-4);
  var sum = wallMomentums.reduce(function (a, b) { return a+b; }, 0);
  var p = 1e4 * sum/(a*wallMomentums.length);
  info.innerHTML += "P = " + round(p) + "<br>";
  var i;
  if (setup.typeCount == 1) {
    info.innerHTML += "kT = " + round(temp[0]) + "<br>";
  } else {
    for (i = 0; i != setup.typeCount; i++)
      info.innerHTML += "kT<sub>" + (i+1) + "</sub> = " + round(temp[i]) + "<br>";
    info.innerHTML += "kT<sub>total</sub> = " + round(temp[setup.typeCount]) + "<br>";
  }
  var temp0 = temp[setup.typeCount];
  info.innerHTML += "PV/NkT = " + round(p*v/(molCount*temp0)) + "<br>";
  info.innerHTML += "P(V-Nb)/NkT = " + round(p*(v-totalV*vadj)/(molCount*temp0)) + "<br>";
  info.innerHTML += "Nb = " + round(totalV*vadj) + "<br>";
  //info.innerHTML += "reservoir kT = " + round(heaterTemp) + "<br>";
}

function resizeCanvas(cv) {
    var width = cv.clientWidth;
    var height = cv.clientHeight;
    if (cv.width != width ||
        cv.height != height) {
       cv.width = width;
       cv.height = height;
       gasView.width = histogramView.width = gasTopView.width = gasBottomView.width = width;
       histogramView.height = Math.floor(height/5);
       gasView.height = height-histogramView.height;
       histogramView.top = gasView.height;
       gasTopView.height = gasView.height/2-10;
       gasBottomView.height = gasView.height/2-10;
       gasTopView.top = gasView.top;
       gasBottomView.top = gasView.top+gasView.height/2+10;
       reinit(false);
    }
}

function setupGraph(g, y0, newHeight) {
  var zpct = (g.zeroY-g.top)/g.height;
  g.top = y0;
  g.scale *= newHeight/g.height;
  g.height = newHeight;
  g.zeroY = g.top+g.height*zpct;
}

function pointInGraph(g, x, y) {
  return (y >= g.top && y < g.top+g.height);
}

function main() {
  const canvas = document.querySelector('#glcanvas');

  var then = 0

  // Draw the scene
  function render(now) {
    now *= 0.001;  // convert to seconds
    var deltaTime = (then) ? now - then : 0;
    then = now;

    // avoid large jumps when switching tabs
    deltaTime = Math.min(deltaTime, .03)
    currentTime += deltaTime
    deltaTime *= speedBar.value/.8;

    resizeCanvas(canvas)
    drawScene(canvas, deltaTime);

    animating = !stoppedCheck.checked;
    if (!animating)
        then = 0
    else
        requestAnimationFrame(render);
    updateInfo();
  }
  requestAnimationFrame(render);
  animating = true;
  refresh = function () {
      if (!animating)
          requestAnimationFrame(render);
  }

  // refresh when changing something (needed if stopped)
  gravityBar = document.getElementById("gravityBar");
  gravity = 0;
  stoppedCheck = document.getElementById("stoppedCheck");
  heaterCheck = document.getElementById("heaterCheck");
  //dividerCheck = document.getElementById("dividerCheck");
  energyCheck = document.getElementById("energyCheck");
  hideMolsCheck = document.getElementById("hideMolsCheck");
  showBrownPathCheck = document.getElementById("showBrownPathCheck");
  heaterTempBar = document.getElementById("heaterTempBar");
  speedBar = document.getElementById("speedBar");
  molCountBar = document.getElementById("molCountBar");
  colorBar = document.getElementById("colorBar");
  gravityBar.oninput = gravityChanged;
  heaterTempBar.oninput = adjustHeaterTemp;
  molCountBar.oninput = adjustMolCount;
  colorBar.oninput = adjustColors;
  stoppedCheck.onchange = refresh;
  heaterCheck.onchange = enableItems;
  energyCheck.onchange = adjustColors;
  reinit(true);
  adjustHeaterTemp();
  enableItems();
}

window.onload = main

function setClip(ctx, g, width) {
  ctx.beginPath();
  ctx.rect(0, g.top, width, g.top+g.height);
  ctx.clip();
}

function drawScene(canvas, deltaTime) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  if (wallMomentumTime >= 30) {
    wallMomentums.push(wallMomentum/wallMomentumTime);
    wallMomentum = wallMomentumTime = 0;
    if (wallMomentums.length > 10)
      wallMomentums.shift();
  }

  var width = canvas.width
  var height = canvas.height
  simulateGas(deltaTime);
  drawGas(ctx, gasView);
  drawHistogram(ctx, histogramView);
}

function getrand(x) {
  return Math.floor(Math.random() * x);
}

const SPEED_RANDOM = 0;
const SPEED_EQUAL = 1;
const SPEED_EXTREME = 2;

function reinit(newsetup) {
  bigmol = null;
  setup = setupList[document.getElementById("exampleChooser").selectedIndex];
  gravityBar.value = 0;
  if (newsetup) {
    speedBar.value = 20;
    molCountBar.value = 500;
    colorBar.value = 230;
    setup.select();
  }
  setup.reinit();
  adjustColors();
  resetWallMomentum();
  brownPath = [];
  hideMolsCheck.disabled = (bigmol == null);
  showBrownPathCheck.disabled = (bigmol == null);
  if (bigmol == null)
    hideMolsCheck.checked = false;
}

function resetWallMomentum() {
  time = wallMomentum = wallMomentumTime = 0;
}
    
function expand() {
  topWallPos -= 50;
  if (topWallPos < 0)
    topWallPos = 0;
  upperBound = topWallPos;
  enableItems();
}

function randomSpeedForTemp(t, m) {
  return Math.sqrt(-2*Math.log(1-Math.random())*t/m);
}

function initMolecules(speed, mult, typeCount) {
  molCount = parseInt(molCountBar.value);
  upperBound = Math.floor(gasView.height*(1-setup.volume));
  topWallPos = upperBound;
  areaHeight = gasView.height-upperBound;
  averageRadius = 0;
  mols = [];
  gridWidth =  Math.floor(gasView.width /gridEltWidth+1);
  gridHeight = Math.floor(gasView.height/gridEltHeight+1);
  grid = [];
  var i, j;
  for (i = 0; i != gridWidth*gridHeight; i++) {
    grid[i] = { listHead: true }
    grid[i].next = grid[i].prev = grid[i];
  }
  //var temp1 = document.getElementById("temp1Bar").value / 4;
  //var temp2 = document.getElementById("temp2Bar").value / 4;
  //console.log("temp1 = " + temp1);
  for (i = 0; i != molCountBar.max; i++) {
    var m = { r: 2*mult, type: 0, mass: 2*mult*mult };
    m.next = m.prev = m;
    mols[i] = m;
    m.x = Math.random() * gasView.width;
    //m.y = Math.random() * areaHeight + upperBound;
    m.type = (i % typeCount);
    if (m.type == 2) {
      m.r *= 3;
      m.mass *= 9; // was 27
    } else if (m.type == 1) {
      m.r *= 2;
      m.mass *= 4; // was 8
    }
    m.y = Math.random() * areaHeight + upperBound;
    /*if (typeCount == 2) {
      var v = m.type == 0 ? gasTopView : gasBottomView;
      m.y = Math.random() * (v.height-4) + v.top+2;
    }*/
    m.dx = Math.random()*2-1;
    m.dy = Math.sqrt(1-m.dx*m.dx);
    if (Math.random() > .5)
	m.dy = -m.dy;
    if (speed == SPEED_EXTREME) {
	var q = ((i & 2) > 0) ? 3 : .1;
	m.dx *= q;
	m.dy *= q;
    }
    if (speed == SPEED_RANDOM) {
        var q = getrand(101)/50.; // randomSpeedForTemp(m.type == 0 ? temp1 : temp2, m.mass);
	m.dx *= q;
	m.dy *= q;
    }
    if (isNaN(m.dx) || isNaN(m.dy))
      console.log("nan1");
    setColor(m);
    averageRadius += m.r;
    if (i < molCount)
	gridAdd(m);
  }
  heaterTop = gasView.height-5;
  enableItems();
  refresh();
  averageRadius /= molCountBar.max;
}

/*
// this doesn't work, must be some bugs in the simulation code
function reverseTime() {
  var i;
  for (i = 0; i != molCount; i++) {
    var m = mols[i];
    m.dx = -m.dx;
    m.dy = -m.dy;
  }
}
*/

function simulateGas(dt) {
  if (stoppedCheck.checked)
    return;
  var i;
  const iters = 5;
  dividerY1 = gasView.height/2-10;
  dividerY2 = gasView.height/2+10;
  for (i = 0; i != molCount; i++) {
    var m = mols[i];
    var bounce = false;
    var ix = Math.floor(m.x);
    var iy = Math.floor(m.y);
    var j;
    for (j = 0; j < iters; j++) {
	m.dy += gravity*dt;
	m.x += m.dx*dt;
        var oldY = m.y;
	m.y += m.dy*dt;
	if (isNaN(m.dx) || isNaN(m.dy))
	    console.log("nan2");
	var r = m.r;
	if (m.x < r || m.x >= gasView.width-r) {
	    wallMomentum += Math.abs(m.dx)*m.mass*2;
	    m.dx = -m.dx;
	    if (m.x < m.r) m.x = m.r;
	    if (m.x >= gasView.width-r)
		m.x = gasView.width-r-1;
	    setColor(m);
	    bounce = true;
	}
	if (m.y < upperBound+r || m.y >= gasView.height-r) {
	    wallMomentum += Math.abs(m.dy)*m.mass*2;
	    if (m.y < upperBound+r) m.y = upperBound+r;
	    if (m.y >= gasView.height-r)
		m.y = gasView.height-r-1;
	    if (m.y == upperBound+r && m.dy < 0 && false) {
		var wallMass = 1000;
		var totmass = m.mass + wallMass;
		var comdy = (m.mass*m.dy+wallMass*topWallVel)/totmass;
		var chg = (m.dy-comdy);
		//System.out.print("< " + m.dy + " " + topWallVel + "\n");
		m.dy -= 2*chg;
		topWallVel += 2*chg*m.mass/wallMass;
		//System.out.print("> " + m.dy + " " + topWallVel + "\n");
	    } else
		m.dy = -m.dy;
	    setColor(m);
	    bounce = true;
	}
	/*if (dividerCheck.checked && m.y >= dividerY1 && m.y <= dividerY2) {
            var top = m.y < .5*(dividerY1+dividerY2);
            m.y = (top) ? dividerY1 : dividerY2;
            m.dy = (top) ? -Math.abs(m.dy) : Math.abs(m.dy);
	    bounce = true;
	}*/
	var nix = Math.floor(m.x);
	var niy = Math.floor(m.y);
	if (!bounce && niy >= heaterTop-1 && heaterCheck.checked) {
	    var v = Math.sqrt(m.dx*m.dx+m.dy*m.dy);
	    var oldy = m.dy;
	    // calculate velocity of particle if it were at heater temp
	    var mxv = Math.sqrt(2*heaterTemp/m.mass);
	    // mix this velocity with particle's velocity randomly
	    var mix = getrand(100)/99.0;
	    var newv = v*mix + mxv*(1-mix);
	    // randomize direction
	    m.dx = getrand(101)/50.0-1;
	    m.dy = -Math.sqrt(1-m.dx*m.dx)*newv;
	    m.dx *= newv;
	    if (isNaN(m.dx) || isNaN(m.dy))
		console.log("nan3");
	    wallMomentum += (oldy-m.dy)*m.mass;
	    setColor(m);
	    bounce = true;
	    m.y = heaterTop-2;
	    niy = Math.floor(m.y);
	}
	var m2 = (bounce) ? null : checkCollision(m);
	if (m2 != null) {
	    // handle a collision
	    // first, find exact moment they collided by solving
	    // a quadratic equation:
	    // [(x1-x2)+t(dx1-dx2)]^2 + [(y1-y2)+...]^2 = mindist^2
	    // (first deal with degenerate case where molecules are on top
	    // of each other)
	    if (m.dx == m2.dx && m.dy == m2.dy) {
		if (m.dx == 0 && m.dy == 0)
		    continue;
		m.dx += .001;
	    }
	    var sdx = m.dx-m2.dx;
	    var sx  = m.x -m2.x;
	    var sdy = m.dy-m2.dy;
	    var sy  = m.y -m2.y;
	    var mindist = m.r + m2.r;
	    var a = sdx*sdx + sdy*sdy;
	    var b = 2*(sx*sdx+sy*sdy);
	    var c = sx*sx + sy*sy - mindist*mindist;
	    var t = (-b-Math.sqrt(b*b-4*a*c))/a;
	    var t2 = (-b+Math.sqrt(b*b-4*a*c))/a;
	    if (Math.abs(t) > Math.abs(t2))
		t = t2;
/*
	    if (Double.isNaN(t))
		System.out.print("nan " + m.dx + " " + m.dy + " " +
				 m2.dx + " " + m2.dy + " " + a + " " + b +
				 " " +c + " " + t + " " + t2 + "\n");
*/

	    // backtrack m to where they collided.
	    // (t is typically negative.)
	    m.x += t*m.dx;
	    m.y += t*m.dy;

	    // ok, so now they are just touching.  find vector
	    // separating their centers and normalize it.
	    sx = m.x-m2.x;
	    sy = m.y-m2.y;
	    var sxynorm = Math.sqrt(sx*sx+sy*sy);
	    var sxn = sx/sxynorm;
	    var syn = sy/sxynorm;
	    
	    // find velocity of center of mass
	    var totmass = m.mass + m2.mass;
	    var comdx = (m.mass*m.dx+m2.mass*m2.dx)/totmass;
	    var comdy = (m.mass*m.dy+m2.mass*m2.dy)/totmass;

	    // subtract COM velocity from m's momentum and
	    // project result onto the vector separating them.
	    // This is the component of m's momentum which
	    // must be turned the other way.  Double the
	    // result.  This is the momentum that is
	    // transferred.
	    var pn = (m.dx-comdx)*sxn + (m.dy-comdy)*syn;
	    var px = 2*sxn*pn;
	    var py = 2*syn*pn;

	    // subtract this vector from m's momentum
	    m.dx -= px;
	    m.dy -= py;
	    //if (Double.isNaN(m.dx))
		//System.out.println("nan0 " + sxynorm + " " + pn);

	    // adjust m2's momentum so that total momentum
	    // is conserved
	    var mult = m.mass/m2.mass;
	    m2.dx += px*mult;
	    m2.dy += py*mult;
	    //System.out.print(">x " + (m.dx-comdx) + " " + (m2.dx-comdx) + "\n");
	    //System.out.print(">y " + (m.dy-comdy) + " " + (m2.dy-comdy) + "\n");

	    // send m on its way
	    if (t < 0) {
		m.x -= t*m.dx;
		m.y -= t*m.dy;
	    }
	    if (m.x < r)
		m.x = r;
	    if (m.x >= gasView.width-r)
		m.x = gasView.width-r;
	    if (m.y < upperBound+r) m.y = upperBound+r;
	    if (m.y >= gasView.height-r)
		m.y = gasView.height-r-1;
	    if (isNaN(m.dx) || isNaN(m.dy))
		System.out.println("nan4");
	    if (isNaN(m2.dx) || isNaN(m2.dy))
		System.out.println("nan5");
	    setColor(m);
	    setColor(m2);
	}
	// this line may not be reached
    }
    gridRemove(m);
    gridAdd(m);
  }
  if (bigmol && showBrownPathCheck.checked)
    brownPath.push(bigmol.x, bigmol.y);
  else
    brownPath = [];
  time += dt*iters;
  wallMomentumTime += dt*iters;
}

function drawGas(ctx, view) {
  var i;
  var molsToDraw = molCount;
  if (hideMolsCheck.checked)
    molsToDraw = 1;
  for (i = 0; i != molsToDraw; i++) {
    var m = mols[i];
    ctx.fillStyle = m.color;
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.r, 0, 2*Math.PI);
    ctx.fill();
  }

  totalKE = [0, 0, 0];
  totalV = 0;
  var molCounts = [0, 0, 0];
  for (i = 0; i != molCount; i++) {
    var m = mols[i];
    totalKE[m.type] += m.ke;
    totalV += m.r*m.r;
    molCounts[m.type]++;
  }
  totalV *= Math.PI;
  var typeCount = setup.typeCount;
  totalKE[typeCount] = 0;
  molCounts[typeCount] = 0;
  for (i = 0; i != typeCount; i++) {
    temp[i] = totalKE[i]/molCounts[i]; // T = K.E./k in 2-d
    totalKE[typeCount] += totalKE[i];
    molCounts[typeCount] += molCounts[i];
  }
  temp[typeCount] = totalKE[typeCount]/molCounts[typeCount];

/*
	//topWallVel += volumeBar.getValue()*.01;
	if (topWallVel > .5)
	    topWallVel = .5;
	topWallPos += topWallVel*5;
	if (topWallPos < 0) {
	    topWallPos = 0;
	    if (topWallVel < 0)
		topWallVel = 0;
	}
	if (topWallPos > (gasView.height*4/5)) {
	    topWallPos = (gasView.height*4/5);
	    if (topWallVel > 0)
		topWallVel = 0;
	}
	upperBound = (int) topWallPos;
*/

  var heatstateint = heatstate|0;
  if (heaterCheck.checked) {
    ctx.fillStyle = heaterColor;
    var j;
    var heaterSize = view.width/3;
    for (j = 0; j < heaterSize; j++, heatstateint++) {
      var x = j*3;
      var y = heatstateint & 3;
      if ((heatstateint & 4) == 4)
        y = 4-y;
      ctx.fillRect(x, heaterTop+y, 2, 2);
    }
  }
  ctx.fillStyle = "#ccc";
  ctx.strokeStyle = "#ccc";
  ctx.beginPath();
  ctx.rect(0, upperBound, gasView.width-1, gasView.height-1-upperBound);
  ctx.stroke();
  ctx.fillRect(gasView.width/2 - 20, 0, 40, upperBound);
  if (bigmol && brownPath && brownPath.length >= 4) {
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(brownPath[0], brownPath[1]);
    for (i = 2; i < brownPath.length; i += 2)
      ctx.lineTo(brownPath[i], brownPath[i+1]);
    ctx.stroke();
  }
  //if (dividerCheck.checked) ctx.fillRect(0, dividerY1, gasView.width, dividerY2-dividerY1);
  if (!stoppedCheck.checked)
    heatstate += heaterMove;
}

function gridAdd(m) {
  var gx = Math.floor(m.x/gridEltWidth);
  var gy = Math.floor(m.y/gridEltHeight);
  var g = grid[gx+gy*gridWidth];
  if (isNaN(gx) || isNaN(gy) || gy < 0) debugger;
  m.next = g;
  m.prev = g.prev;
  g.prev = m;
  m.prev.next = m;
}

function gridRemove(m) {
  m.next.prev = m.prev;
  m.prev.next = m.next;
}

function checkCollision(m) {
  if (bigmol != null) {
    var q = checkCollisionList(m,
	 grid[Math.floor(bigmol.x/gridEltWidth) +
	      Math.floor(bigmol.y/gridEltHeight)*gridWidth]);
    if (q != null)
	return q;
  }
  var gx = Math.floor(m.x/gridEltWidth);
  var gy = Math.floor(m.y/gridEltHeight);
  var i, j;

  // check grid squares around the molecule for collisions
  for (i = -1; i <= 1; i++)
    for (j = -1; j <= 1; j++) {
	if (gx+i < 0 || gy+j < 0 ||
	    gx+i >= gridWidth || gy+j >= gridHeight)
	    continue;
	var n = checkCollisionList(m, grid[(gx+i)+(gy+j)*gridWidth]);
	if (n != null)
	    return n;
    }
  return null;
}

function checkCollisionList(m, list) {
  var l = list.next;
  var count = 0;
  for (; !l.listHead; l = l.next) {
    if (m == l)
	continue;
    count++;
    var mindist = m.r+l.r;
    var dx = m.x-l.x;
    var dy = m.y-l.y;
    if (dx > mindist || dy > mindist ||
	dx < -mindist || dy < -mindist)
	continue;
    var dist = Math.sqrt(dx*dx+dy*dy);
    if (dist > mindist)
	continue;
    return l;
  }
  return null;
}

function setColor(m) {
  m.vel = Math.sqrt(m.dx*m.dx+m.dy*m.dy);
  m.ke = .5*m.mass*m.vel*m.vel;
  var energy = energyCheck.checked;
  var value = energy ? m.ke : m.vel;
  var col = Math.floor(value*colorMult);
  var maxcol = colors.length-1;
  if (col > maxcol)
    col = maxcol;
  m.color = colors[col];
}

var graphmax = 20;

function drawHistogram(ctx, view) {
  var i;
  var slots = Math.floor(view.width/2);
  var graph = [];
  var gi;
  var mg = 0;
  var gicount = setup.typeCount;
  var energy = energyCheck.checked;

  for (gi = 0; gi != gicount; gi++) {
    var ymin = view.height*gi/gicount;
    var ymax = view.height*(gi+1)/gicount-1;
    var yheight = ymax-ymin;
    var maxke = energy ? 70 : 15;
    for (i = 0; i != slots; i++)
      graph[i] = 0;
    var mass = 1;
    var mcount = 0;
    for (i = 0; i != molCount; i++) {
      var m = mols[i];
      if (m.type != gi)
        continue;
      mcount++;
      mass = m.mass;
      var value = (energy ? m.ke : m.vel);
      var r = Math.floor(value*slots/maxke);
      if (r >= slots)
        continue;
      graph[r]++;
    }
    maxke += .5;
    var maxcol = colors.length-1;

    for (i = 0; i != slots; i++) {
      if (graph[i] == 0)
        continue;
      if (graph[i] > mg)
        mg = graph[i];
      var y = ymax-(graph[i] * yheight / graphmax);
      if (y < ymin)
        y = ymin;
      var value = i*maxke/slots;
      // if (!energy) value *= mass*value;
      var col = Math.floor(value*colorMult);
      if (col > maxcol) col = maxcol;
      ctx.fillStyle = colors[col];
      ctx.fillRect(i*2, y+view.top, 2, ymax-y+1);
    }
    ctx.strokeStyle = "#888";
    if (!energyCheck.checked) {
      for (i = 0; i != slots; i++) {
        var v = i*maxke/slots;
	var dv = maxke/slots;
        var distdv = .5*mcount*(maxwellDist(v, mass, gi)+maxwellDist(v+dv, mass, gi))*dv;
        var v0 = Math.floor(distdv);
        var y = (ymax-(v0 * yheight / graphmax));
        if (y < ymin)
          y = ymin;
        var x = i*2;
        if (i == 0)
          ctx.moveTo(x, y+view.top);
        else
          ctx.lineTo(x, y+view.top);
      }
      ctx.stroke();
    }
  }
  if (mg > graphmax)
    graphmax = mg;
  if (mg < graphmax/2 && graphmax > 1)
    graphmax /= 2;
}

// 2-D Maxwell distribution of molecular speeds
function maxwellDist(v, mass, type) {
  var temp0 = temp[type];
  if (energyCheck.checked)
    return Math.exp(-v/temp0)/temp0;
  return (mass/temp0)*v*Math.exp(-mass*v*v/(2*temp0));
}
	
function gravityChanged() {
  gravity = gravityBar.value * (.001/20);
}

function adjustHeaterTemp() {
  heaterTemp = (heaterTempBar.value * .015)*30 + .01;
  heaterMove = (heaterTempBar.value * .015) + .3;
  heaterMove /= 2;
  var avgMass = 2; // need to calculate this
  var value = Math.sqrt(2*heaterTemp/avgMass);
  var col = Math.floor(value*colorMult);
  var maxcol = colors.length-1;
  if (col > maxcol) col = maxcol;
  heaterColor = colors[col];
  console.log("htemp = " + heaterTemp);
}

function adjustColors() {
  var i;
  var c = colorBar.value / 150.;
  colorMult = Math.exp((c-1)*4)*.7;
  for (i = 0; i != molCount; i++)
    setColor(mols[i]);
  refresh();
}

function getById(id) {
  return document.getElementById(id);
}

function enableItems() {
  heaterTempBar.disabled = !heaterCheck.checked;
  getById("expand").disabled = !(topWallPos > 0);
}
    
function adjustMolCount() {
  var oldcount = molCount;
  molCount = parseInt(molCountBar.value);
  if (molCount == oldcount)
    return;
  if (oldcount > molCount) {
    var i;
    for (i = molCount; i != oldcount; i++)
      gridRemove(mols[i]);
  } else {
    var i;
    for (i = oldcount; i != molCount; i++)
      gridAdd(mols[i]);
  }
  resetWallMomentum();
}

class Setup {
  constructor() {
    this.typeCount = 1;
    this.volume = 1;
  }

  select() { }
}

class Setup1Random extends Setup {
  constructor() {
    super();
    this.name = "1 Gas, Random Speeds";
  }

  reinit() {
    initMolecules(SPEED_RANDOM, 2, 1);
  }
}
setupList.push(new Setup1Random());

class Setup1Equal extends Setup {
  constructor() {
    super();
    this.name = "1 Gas, Equal Speeds";
  }

  select() {
    speedBar.value = 3;
  }

  reinit() {
    initMolecules(SPEED_EQUAL, 2, 1);
  }
}
setupList.push(new Setup1Equal());

class Setup1Extreme extends Setup {
  constructor() {
    super();
    this.name = "1 Gas, Extreme Speeds";
  }

  select() {
    speedBar.value = 3;
  }

  reinit() {
    initMolecules(SPEED_EXTREME, 2, 1);
  }
}
setupList.push(new Setup1Extreme());

class Setup1Single extends Setup {
  constructor() {
    super();
    this.name = "1 Gas, One Moving Molecule";
  }

  select() { speedBar.value = 10; }

  reinit() {
    initMolecules(SPEED_EQUAL, 2, 1);
    var i, j;
    for (i = 1; i != mols.length; i++)
	mols[i].dx = mols[i].dy = 0;
    mols[0].dx *= Math.sqrt(molCount);
    mols[0].dy *= Math.sqrt(molCount);
  }
}
setupList.push(new Setup1Single());

class Setup1Small extends Setup {
  constructor() {
    super();
    this.name = "1 Gas, Small";
  }

  select() {
    colorBar.value = 215;
    speedBar.value = 36;
  }

  reinit() {
    initMolecules(SPEED_RANDOM, 1, 1);
  }
}
setupList.push(new Setup1Small());

class Setup2Random extends Setup {
  constructor() {
    super();
    this.name = "2 Gases, Random Speeds";
    this.typeCount = 2;
  }

  select() {
    colorBar.value = 215;
    speedBar.value = 36;
  }

  reinit() {
    initMolecules(SPEED_RANDOM, 1, 2);
  }
}
setupList.push(new Setup2Random());

class Setup2Equal extends Setup {
  constructor() {
    super();
    this.name = "2 Gases, Equal Speeds";
    this.typeCount = 2;
  }

  select() {
    speedBar.value = 3;
  }

  reinit() {
    initMolecules(SPEED_EQUAL, 1, 2);
  }
}
setupList.push(new Setup2Equal());

class Setup3Random extends Setup {
  constructor() {
    super();
    this.name = "3 Gases, Random Speeds";
    this.typeCount = 3;
  }

  select() {
    speedBar.value = 3;
  }

  reinit() {
    initMolecules(SPEED_RANDOM, 1, 3);
  }
}
setupList.push(new Setup3Random());

class Setup3Equal extends Setup {
  constructor() {
    super();
    this.name = "3 Gases, Equal Speeds";
    this.typeCount = 3;
  }

  select() {
    speedBar.value = 3;
  }

  reinit() {
    initMolecules(SPEED_EQUAL, 1, 3);
  }
}
setupList.push(new Setup3Equal());

class SetupBrownian extends Setup {
  constructor() {
    super();
    this.name = "Brownian Motion";
    this.typeCount = 1;
  }

  select() {
    speedBar.value = 70;
    colorBar.value = 210;
  }

  reinit() {
    initMolecules(SPEED_RANDOM, 2, 1);
    bigmol = mols[0];
    bigmol.r = 30;
    bigmol.mass = bigmol.r*bigmol.r/2;
    bigmol.x = gasView.width/2;
    bigmol.y = gasView.height/2;
    bigmol.dx = bigmol.dy = 0;
  }
}
setupList.push(new SetupBrownian());

class SetupExpansion extends Setup {
  constructor() {
    super();
    this.name = "Free Expansion";
    this.volume = .5;
  }

  select() {
    molCountBar.value = 250;
    speedBar.value = 45;
    colorBar.value = 210;
  }

  reinit() {
    initMolecules(SPEED_RANDOM, 1, 1);
  }
}
setupList.push(new SetupExpansion());

