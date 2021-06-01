var tmp_Vec=new Vector2();

function distance(x1,y1,x2,y2){
    return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}

function fillOval(x,y,w,h,stroke){
    ctx.beginPath();
    ctx.arc(x,y,w/2,0,2*PI,false);
    ctx.fill();
    if(stroke) ctx.stroke();
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawPlusCharge(x,y){
    ctx.fillStyle=plusColor;
    fillOval(x,y,12,12);
    ctx.strokeStyle="white";
    ctx.beginPath();
    ctx.moveTo(x-5,y);
    ctx.lineTo(x+5,y);
    ctx.moveTo(x,y+5);
    ctx.lineTo(x,y-5);
    ctx.stroke();
    //ctx.fillText(plusSign,   x,y)
}

function drawMinusCharge(x,y){
    ctx.fillStyle=minusColor;
    fillOval(x,y,12,12);
    ctx.strokeStyle="white";
    //ctx.fillText(minuSign,   x,y)
    ctx.beginPath();
    ctx.moveTo(x-5,y);
    ctx.lineTo(x+5,y);
    ctx.stroke();
}

// x0,y0: the line's starting point
// x1,y1: the line's ending point
// width: the distance the arrowhead perpendicularly extends away from the line
// height: the distance the arrowhead extends backward from the endpoint
// arrowStart: true/false directing to draw arrowhead at the line's starting point
// arrowEnd: true/false directing to draw arrowhead at the line's ending point
function drawLineWithArrows(x0,y0,x1,y1,aWidth,aLength,arrowStart,arrowEnd){
    var dx=x1-x0;
    var dy=y1-y0;
    var angle=Math.atan2(dy,dx);
    var length=Math.sqrt(dx*dx+dy*dy);
    //
    ctx.save();
    ctx.translate(x0,y0);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(length,0);
    if(arrowStart){
        ctx.moveTo(aLength,-aWidth);
        ctx.lineTo(0,0);
        ctx.lineTo(aLength,aWidth);
    }
    if(arrowEnd){
        ctx.moveTo(length-aLength,-aWidth);
        ctx.lineTo(length,0);
        ctx.lineTo(length-aLength,aWidth);
    }
    //
    ctx.stroke();
    ctx.restore();
}


function roundOff(num, n) {
    if(n==undefined)n=3;
    return +(Math.round(num + "e+"+n)  + "e-"+n);
}

function Vector2(x,y){
    this.x=x;
    this.y=y;

    this.set =function(x,y) {
        if (y == undefined) {
            this.x=x.x;
            this.y=x.y;
        } else {
            this.x = x;
            this.y = y;
        }
        return this;
    }
    this.length=function(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
    this.distance =function(x,y){
        return distance(x,y,this.x,this.y);
    }
    this.normalize=function(){
        let l=this.length();
        this.x/=l;
        this.y/=l;
        return l;
    }
    this.unitVector=function(){
        let l=this.length;
        return new Vector2(this.x/l,this.y/l);
    }
    this.add=function(dx,dy){
        this.x+=dx;
        this.y+=dy;
        return this;
    }
    this.multiply=function(s){
        this.x*=s;
        this.y*=s;
        return this;
    }
    this.dot=function(x,y){
        return x*this.x +y*this.y;
    }
    /**
     * Returns angle with positive x axis in -PI to PI
     */
    this.horizontalAngle=function(){
        return Math.atan2(this.y,this.x);
    }

    /**
     * Returns the smallest angle between this vector and specified vector in -PI to PI
     */
    this.angleWith=function(x,y){
        let a = Math.atan2(y, x) - Math.atan2(this.y, this.x);
        if (a > Math.PI) return a - 2*Math.PI;
        if (a < -Math.PI) return a + 2*Math.PI;
        return a;
    }

    this.lerp=function(x,y,k){
        this.x=this.x*(1-k)+x*k;
        this.y=this.y*(1-k)+y*k;

        return this;
    }
}






