/////////////////////////////////////////////////////
// Temporary helper classes for the script manager //
/////////////////////////////////////////////////////

class WorldWrapper {
  constructor() {


  }

  getCanvas() {
    return app.getCanvas();
    /*
    let f=app.renderer.DPI_FACTOR;
    this.canvas=new OffscreenCanvas(app.canvas.width/f, app.canvas.height/f);
   
    app.offscreencanvas = this.canvas;
    return this.canvas;
    */
  }
  addDisc(radius) {
    let shape = org.phys2d.geometry.Geometry.createCircle(shapeNode.Radius);
    let fixture = new org.phys2d.dynamics.BodyFixture(shape);
    let body = new physics.SimulationBody();
    body.setMass(radius);
    this.app.worldManager.world.addbody(body);
  }
};

class ScriptEngine {
  constructor() {
    if (!CanvasRenderingContext2D.prototype.clear) {
      /*
      let canvas=HTMLCanvasElement.prototype;
      canvas.requestAnimationFrame = function (callback) {
        window.requestAnimationFrame(callback);
      }
      canvas.getWidth=function(){return this.width};
      canvas.getHeight=function(){return this.height};
      */
      console.println = console.log;

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
        this.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
        this.fill();

      }
      ctx.strokeOval = function (x, y, w, h) {
        this.beginPath();
        this.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
        this.stroke();

      }

      ctx.setFont = function (f) {
        //this.font="bold 48px serif"
       //console.log(f);
       // ctx.font = f;
      }
    }
  }

  load(script) {

    let functions = this.extractFunctions(script);
    console.log(functions);

    let postfix = '_:0';
    for (const func of functions) {
      postfix += `,${func}:${func}`;
    }
    postfix = 'return {' + postfix + '};';

    let prefix = '';
    for (const key in window) {
      prefix += `let ${key} = null;`;
    }

    this.script = prefix + script + postfix;
    this.manager = new Function(
      'World', 'App', 'Console', 'Widgets', 'Vector2', 'Color'
      ,this.script)(app.scriptManager.worldWrapper, app.scriptManager.appWrapper, console, app.scriptManager.wigdetsWrapper, org.phys2d.geometry.Vector2, framework.Color);
      console.log(this.manager);
    }

  extractFunctions(code) {
    const ast = acorn.parse(code, { ecmaVersion: 2020 });

    const functionNames = [];

    function traverse(node) {
      if (node.type === 'FunctionDeclaration') {
        functionNames.push(node.id.name);
      } else if (node.type === 'FunctionExpression' && node.id) {
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
    if(this.manager)return this.manager[name] !== undefined;
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
