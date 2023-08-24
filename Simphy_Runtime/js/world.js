class World {
    constructor(app) {
      this.app = app;
    }

    getCanvas(ctx){
       let canvas=this.app.canvas;
       
        this.canvas.requestAnimationFrame = function (callback) {
            window.requestAnimationFrame(callback);
       }
        return this.app.canvas;
    }

    addDisc(radius){
        let shape = org.phys2d.geometry.Geometry.createCircle(shapeNode.Radius);
        let fixture = new org.phys2d.dynamics.BodyFixture(shape);
        let body = new physics.SimulationBody();
        body.setMass(radius);
        this.app.worldManager.world.addbody(body);
    }

    
  }