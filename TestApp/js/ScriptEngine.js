export default class ScriptEngine {
    constructor(app) {
      this.app = app;
      if (!CanvasRenderingContext2D.prototype.clear) {
        /*
        let canvas=HTMLCanvasElement.prototype;
        canvas.requestAnimationFrame = function (callback) {
          window.requestAnimationFrame(callback);
        }
        canvas.getWidth=function(){return this.width};
        canvas.getHeight=function(){return this.height};
        */
        // console.println = console.log;
        framework.App.beep = function beep(freq = 660, duration = 90, vol = 50) {
            try{
          var context = new (window.AudioContext || window.webkitAudioContext);
          if(!freq)freq=660;
          if(!duration)duration=90;
          if(!vol)vol=50;
         
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          gain.gain.setValueAtTime(0, context.currentTime);
          gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.002);
          oscillator.connect(gain);
          oscillator.frequency.value = freq;
          oscillator.type = "square";
          gain.connect(context.destination);
          oscillator.start(context.currentTime);
          oscillator.stop(context.currentTime + duration * .001);
          oscillator.onended = () => context.close();
            }catch(e){
                
            }
        }
  
        if(!Path2D.prototype.BeginPath)Path2D.prototype.BeginPath=()=>{};
        let ctx = CanvasRenderingContext2D.prototype;
        ctx.clear = function () {
          this.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        ctx.setFillStyle = function (r, g, b, a) {
          this.fillStyle = "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
        }
        ctx.setStrokeStyle = function (r, g, b, a) {
          this.strokeStyle = "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
        }
        ctx.fillOval = function (x, y, w, h) {
          this.beginPath();
          this.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
          this.fill();
  
        }
        ctx.strokeOval = function (x, y, w, h) {
          this.beginPath();
          this.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
          this.stroke();
  
        }
  
        ctx.setFont = function (f) {
          //this.font="bold 48px serif"
          //console.log(f);
          // ctx.font = f;
        }
      }
    }
  
    setScript(script) {
  
      let functions = this.extractFunctions(script);
      //console.log(functions);
  
      let postfix = '_:0';
      for (const func of functions) {
      
        postfix += `,${func}:${func}`;
      }
      postfix = 'return {' + postfix + '};';
  
      let prefix = '';
      for (const key in window) {
        // prefix += `let ${key} = null;`;
      }
  
      this.script = prefix + script + postfix;

      //console.log(this.script );
   
    }

    loadScript(){
      const img=function getImage(src){
        const b = this.app.resourceManager.getAnimation(src);
        //console.log("loading ",src,b);
           if (b != null)
                    return b.img;
          
          return new Image(src);
      }
      img.prototype.app=this.app;
      this.manager = new Function(
        'World', 'App', 'Console', 'Widgets', 'Vector2', 'Color','Image','Resources'
        , this.script)(this.app.scriptManager.worldWrapper, this.app.scriptManager.appWrapper, console, this.app.scriptManager.wigdetsWrapper, math.Vector2, framework.Color,img,this.app.resourceManager);
 
    }
  
    extractFunctions(code) {
      const ast = acorn.parse(code, { ecmaVersion: 2020 });
  
      const functionNames = [];
  
      function traverse(node) {
        if (node.type === 'FunctionDeclaration') {
         // console.log("function declaration", node.id);
          functionNames.push(node.id.name);
        } else if (node.type === 'FunctionExpression' && node.id) {
          //console.log("function expression", node.id);
          functionNames.push(node.id.name);

        }
  
        for (const key in node) {
          if (node[key] && typeof node[key] === 'object') {
            traverse(node[key]);
          }
        }
      }
  
      traverse(ast);
  
      return functionNames;
    }
  
    functionExists(name) {
      if (this.manager) return this.manager[name] !== undefined;
      return false;
    }
   
    run(name, args) {
      // console.log(name,args);
      if (this.functionExists(name)) {
        if (Array.isArray(args)) return this.manager[name](...args);
        else this.manager[name](args);
      } else {
        return null;
      }
    }
  }
  