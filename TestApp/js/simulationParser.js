import ScriptEngine from "./ScriptEngine.js"

const DEG_TO_RADIAN = Math.PI / 180;

/**
 * Parses an XML string into an object
 * 
 * @param {*} xmlString 
 * @returns 
 */
function parseXMLToObject(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    function parseNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const obj = {};

            if (node.hasAttributes()) {
                for (let i = 0; i < node.attributes.length; i++) {
                    const attr = node.attributes[i];
                    obj[attr.nodeName] = attr.nodeValue;
                }
            }

            if (node.hasChildNodes()) {
                for (let i = 0; i < node.childNodes.length; i++) {
                    const childNode = node.childNodes[i];
                    if (childNode.nodeType === Node.ELEMENT_NODE) {
                        const parsedChild = parseNode(childNode);
                        if (obj[childNode.nodeName]) {
                            if (!Array.isArray(obj[childNode.nodeName])) {
                                obj[childNode.nodeName] = [obj[childNode.nodeName]];
                            }
                            obj[childNode.nodeName].push(parsedChild);
                        } else {
                            obj[childNode.nodeName] = parsedChild;
                        }
                    } else if (childNode.nodeType === Node.CDATA_SECTION_NODE) {
                        obj["cdata"] = childNode.nodeValue;
                    } else if (childNode.nodeType === Node.TEXT_NODE) {
                        const textValue = childNode.nodeValue.trim();
                        if (textValue !== "") {
                            if (textValue === "true") {
                                obj["#value"] = true;
                            } else if (textValue === "false") {
                                obj["#value"] = false;
                            } else if (!isNaN(textValue)) {
                                obj["#value"] = Number(textValue);
                            } else {
                                obj["#value"] = textValue;
                            }
                        }
                    }
                }
            }

            // If the object has only one property, then return the value of that property
            if (Object.keys(obj).length === 1 && obj["#value"] !== undefined) {
                return obj["#value"];
            }

            return obj;
        } else if (node.nodeType === Node.TEXT_NODE) {
            return node.nodeValue.trim();
        }
        return null;
    }

    return parseNode(xmlDoc.firstChild);
}
let worldNode;
let bodies = [];
let joints = [];
let images = [];
let sounds = [];
let files = [];

/**
 * Parses simulation from xml String, loads simulaiton in app
 * @param {*} app Object that holds simulation 
 * @param {*} resources resources to look for the simulation
 * @return {App} simulation 
 */
function buildSimulation(app, resources) {
    app.clearAll();
    let simulation = parseXMLToObject(resources.simulationXml);
    images = resources.images;
    files = resources.files;
    sounds = resources.soundManager;

    console.log("Simulation", simulation, resources);
    
    buildPreferences(app,simulation);
    buildCamera(app, simulation);
    buildGeometry(app, simulation);
    buildResources(app, simulation, resources);
    buildSimulationUI(app, simulation);
    buildPhysics(app, simulation);
    buildSimulationWidgets(app, simulation);
    buildScriptManager(app, simulation);
    app.title=simulation.title;
    app.author=simulation.author;
    app.description=simulation.Description.cdata;
 
    return app;
}

function buildResources(app, simulation, resources) {
    let anims = simulation.Animations.Animation;
    let animations = [];
    let sounds = [];
    let files = [];

    let animsNode = simulation.Animations.Animation;

    if (animsNode) {
        if (!Array.isArray(animsNode)) animsNode = [animsNode];
        for (let i = 0; i < animsNode.length; i++) {
            let anim = animsNode[i];
           
            let b = new framework.resources.Brush(anim.name, resources.images[anim.texture]);
            if (Array.isArray(anim.TextureRegion)) {
                let regions = [];  
                b = new framework.resources.AnimatingBrush(anim.name, resources.images[anim.texture]);
                anim.TextureRegion.forEach((e) => regions.push(new math.AABB(1*e.u1, 1*e.v1, 1*e.u2, 1*e.v2)))
                b.setRegions(regions); 
                b.setAnimMode(2);
            }else if(anim.TextureRegion){
                let e=anim.TextureRegion;
                
                let region=new math.AABB(1*e.u1, 1*e.v1, 1*e.u2, 1*e.v2);
                b.setRegion(region); 
            }
            
            b.setParams(parseNumArray(anim.params));
            console.log(b);
            animations.push(b);
        }
    }

    let soundsNode = simulation.Sounds.Sound;
    if (soundsNode) {
        if (!Array.isArray(soundsNode)) soundsNode = [soundsNode];
        for (let i = 0; i < soundsNode.length; i++) {
            let node = soundsNode[i];
            let sound = resources.sounds[node.soundPath];
            sound.name = node.name;
            sounds.push(sound);
        }
    }
    let filesNode = simulation.Files.File;
    if (filesNode) {
        if (!Array.isArray(filesNode)) filesNode = [filesNode];
        for (let i = 0; i < filesNode.length; i++) {
            let node = filesNode[i];
            let file = resources.files[node.filePath];
            file.name = node.name;
            files.push(file);
        }
    }
    //console.log(images);
    app.resourceManager.setResources(animations, files, sounds);
    // console.log(app.resourceManager.getAllSounds());

}

// Function to build the geometry
function buildGeometry(app, simulation) {
    const shapes = simulation.World.Shapes;

    if (shapes === undefined || !shapes.Shape2D) {
        return;
    }

    if (!Array.isArray(shapes.Shape2D)) shapes.Shape2D = [shapes.Shape2D];
    //console.log(shapes.Shape2D);
    shapes.Shape2D.forEach(shape => {
        const shapeClass = geom[shape.Class];

        if (shapeClass) {
            // Split the shape.params into a float array
            const params = shape.Params ? shape.Params.split(';') : [];

            // Parent Ids
            const parents = shape.Parents ? shape.Parents.split(',').map(id => {
                if (id == 'X-AXIS') {
                    return app.shapesManager.X_AXIS;
                } else if (id == 'Y-AXIS') {
                    return app.shapesManager.Y_AXIS;
                } else {
                    return shapes[id];
                }
            }) : [];

            //console.log(shape.Class,params,typeof params[0],typeof params[1])
            shapes[shape.Id] = new shapeClass(...parents, ...params);
            //console.log(shapes[shape.Id]); 
            // Add the shape to the shapes manager
            app.shapesManager.addShape(shapes[shape.Id]);
        } else {
            console.error(`Shape class ${shape.Class} not found.`);
        }
    });
}

function buildSimulationUI(app, simulation) {
    // console.log(simulation.World.GuiManager.GuiXML.cdata);
    app.guiManager.loadXml(simulation.World.GuiManager.GuiXML.cdata);
    app.guiManager.getGui().setColors(app.preferences.themeColors);
    app.guiManager.setViewPort(app.canvas.clientWidth, app.canvas.clientHeight);

}

function buildSimulationWidgets(app, simulation) {

    // Add body Controllers
    let graphers = simulation.World.GuiManager.Grapher;
    if (graphers) {

        //console.log("graphers",graphers);
        if (!Array.isArray(graphers)) graphers = [graphers];
        for (let i = 0; i < graphers.length; i++) {
            let g = graphers[i];
            let body = bodies[g.bodyId];
            // console.log(g,body);
            if (body == null) body = joints[g.bodyId];
            //let grapher=new framework.gui.Grapher(app,body);

            let grapher = app.guiManager.addGraphWidget(body);

            let bounds = parseNumArray(g.bounds);
            let factor =app.width/app.preferences.loadedWindowWidth;
            console.log(factor);
            if(factor<1){
                for(let i=0;i<4;i++)bounds[i]*=factor;
                console.log(bounds);
            }
            grapher.setBounds(bounds[0], bounds[1], bounds[2], bounds[3]);
            let attrs = parseNumArray(g.params);
            grapher.setAttributes(attrs);
            //console.log(attrs);
            //console.log(grapher.getGuiWidget())
            app.guiManager.getGui().setString$java_lang_Object$java_lang_String$java_lang_String(grapher.getGuiWidget(), "text", g.text);
            app.guiManager.getGui().setString$java_lang_Object$java_lang_String$java_lang_String(grapher.getGuiWidget(), "name", g.name);
            grapher.setMinimised(g.minimized);
            //console.log("graphs",app.guiManager.getGui().getString$java_lang_Object$java_lang_String(grapher.getGuiWidget(), "text"));
        }
    }
    let timers = simulation.World.GuiManager.Timer;
    if (timers) {

        //console.log("timers",timers);
        if (!Array.isArray(timers)) timers = [timers];
        for (let i = 0; i < timers.length; i++) {
            let g = timers[i];

            let timer = app.guiManager.addTimerWidget();
            let bounds = parseNumArray(g.bounds);
            timer.setBounds(bounds[0], bounds[1], bounds[2], bounds[3]);
            let attrs = parseNumArray(g.params);
            timer.setAttributes(attrs);
            //console.log(attrs);
            app.guiManager.getGui().setString(timer.getGuiWidget(), "text", g.name);
            app.guiManager.getGui().setString(timer.getGuiWidget(), "name", g.text);
            // if(g.minimised)timer.setMinimised(g.minimised);
            //console.log(timer);
        }
    }
    
}

// Function to build the camera
function buildCamera(app, simulation) {
    const cameraConfig = simulation.Camera;
    let tx = 1 * cameraConfig.Translation.x;
    let ty = 1 * cameraConfig.Translation.y;

    //app.METER_TO_PIXEL = app.camera.getScale();
    app.camera.zoomTo(1 * cameraConfig.Scale.substring(1));
    app.camera.setTranslation(tx, ty);
   // console.log(cameraConfig);
}

// Function to build the script manager
function buildScriptManager(app, simulation) {
    if (!simulation.World.ScriptManager) return;
    app.scriptManager.setScriptEngine(null);
    let script = simulation.World.ScriptManager.Script.cdata;
    if (!script) {
        return;
    }
    let engine = new ScriptEngine(app);
    //console.log("before",app.scriptManager);
    app.scriptManager.setScriptEngine(engine);
    engine.setScript(simulation.World.ScriptManager.Script.cdata);
    //console.log("after",app.scriptManager);

}


function buildPhysics(app, simulation) {
    // console.log(worldNode);
    worldNode = simulation.World;
    bodies = [];
    joints = [];
    let worldManager = app.worldManager;
    worldManager.clearAll();
    var world = worldManager.getWorld();//new org.phys2d.dynamics.World();
    let shape = parseShape(worldNode.ConvexBounds.Shape);
    world.setBounds(new physics.ConvexBounds(shape));
    world.setGravity(parseVector(worldNode.Gravity));

    if (worldNode.BroadphaseDetector == "SAP") {
        world.setBroadphaseDetector(new org.phys2d.collision.broadphase.Sap());
    } else if (worldNode.BroadphaseDetector == "DynamicAABBTree") {
        world.setBroadphaseDetector(new org.phys2d.collision.broadphase.DynamicAABBTree());
    }
    if (worldNode.NarrowphaseDetector == "Sat") {
        world.setNarrowphaseDetector(new org.phys2d.collision.narrowphase.Sat());
    } else if (worldNode.BroadphaseDetector == "Gjk") {
        world.setNarrowphaseDetectornew(new org.phys2d.collision.narrowphase.Gjk());
    }
    // set the settings
    world.setSettings(parseWorldSettings(app, worldNode.Settings));
    
    //console.log(world.getBounds());
    //var world=worldManager.world;
    let bs = worldNode.Bodies.Body;
    if (bs) {
        for (let i = 0; i < bs.length; i++) {
            let b = parseBody(app, bs[i], new physics.SimulationBody());
            if (b != null) {
                bodies[bs[i].Id] = b;
                world.addBody(b);
                //console.log(b);
            }
        }
    }

    let ps = worldNode.Bodies.PlaneBody;
    if (ps) {
        if (!Array.isArray(ps)) ps = [ps];
        for (let i = 0; i < ps.length; i++) {
            let b = parseBody(app, ps[i], new physics.PlaneBody());
            if (b != null) {
                bodies[ps[i].Id] = b;
                b.setCenterandNormal(parseVector(ps[i].localCenter), parseVector(ps[i].PlaneBodyNormal));
                world.addBody(b);
                b.reValidate();
            }
        }
    }
    // console.log("Adding  joint",worldNode.Joints);

    let js = worldNode.Joints.Joint;
    if (js) {
        if (!Array.isArray(js)) js = [js];
        for (let i = 0; i < js.length; i++) {
            let j = parseJoint(js[i]);
            if (j != null) world.addJoint(j);
            // console.log("joint",j);
        }
    }
    worldManager.setWorld(world);
  
    //Add fields
    let fields = simulation.Fields ? simulation.Fields.Field : null;
    if (fields) {
        //console.log("field",fields);
        if (!Array.isArray(fields)) fields = [fields];
        for (let i = 0; i < fields.length; i++) {
            let f = parseField(app, fields[i]);
            if (f != null) worldManager.addField(f);

        }

    }


    // Add body Controllers
    let bodyControllers = worldNode.BodyControllers ? worldNode.BodyControllers.BodyController : null;
    if (bodyControllers) {
        //console.log("field",fields);
        if (!Array.isArray(bodyControllers)) bodyControllers = [bodyControllers];
        for (let i = 0; i < bodyControllers.length; i++) {
            let f = parseBodyController(app, bodyControllers[i]);
            console.log(f);
            if (f != null) worldManager.addBodyController(f.getBody(), f);
        }
    }

    //Add Tracers
    let tracers = worldNode.Tracers ? worldNode.Tracers.Tracer : null;
    if (tracers) {
        //console.log("tracers",tracers);
        if (!Array.isArray(tracers)) tracers = [tracers];
        for (let i = 0; i < tracers.length; i++) {
            let f = parseTracer(app, tracers[i]);
            if (f != null) worldManager.addTrajectoryTracers(f.getBody(), f);
        }
    }

    //Add Keyboad Controllers
    let keyControllers = worldNode.Fields ? worldNode.Fields.Field : null;
    if (keyControllers) {
        //console.log("field",fields);
        if (!Array.isArray(keyControllers)) keyControllers = [keyControllers];
        for (let i = 0; i < keyControllers.length; i++) {
            let f = parseKeyboardController(app, keyControllers[i]);
            if (f != null) worldManager.addKeyController(f);
        }
    }
    //Add COmbodies
    let groups = worldNode.Fields ? worldNode.Fields.Field : null;
    if (groups) {
        //console.log("field",fields);
        if (!Array.isArray(groups)) groups = [groups];
        for (let i = 0; i < groups.length; i++) {
            let f = parseCOMbody(app, groups[i]);
            if (f != null) worldManager.addGroup(f);
        }
    }

    if (worldNode.WorldBrush) {
        let brushNode = worldNode.WorldBrush;
        let b = app.resourceManager.getAnimation(brushNode.name);
        if (b != null) {
            b.setParams(parseNumArray(brushNode.params));
            app.preferences.worldBrush = b;
        }
    }
    //world.getSettings().setContinuousDetectionMode(ContinuousDetectionMode.NONE);
    world.setBroadphaseDetector(new org.phys2d.collision.broadphase.LazyAABBTree());

    app.worldManager.setCoeffMixers(app.preferences.frictionCoeffMixer, app.preferences.restitutionCoeffMixer);
    //adjust camera scale
    app.camera.zoomTo(app.camera.getScale() * app.canvas.clientWidth / app.preferences.loadedWindowWidth);

    // world.setNarrowphaseDetector(new org.phys2d.collision.narrowphase.Sat());
    //world.getSettings().setStepFrequency(1/150);

    //console.log(world);
}


function buildPreferences(app, simulation) {
    let preferencesNode=simulation.World.Preferences;
    let preferences = app.preferences;

    preferences.loadedWindowWidth=preferencesNode.windowWidth;
    preferences.loadedWindowHeight=preferencesNode.windowHeight;
    console.log(preferences.loadedWindowWidth);
    preferences.backgroundColor = parseColor(preferencesNode.BackColor);
    preferences.gridColor = parseColor(preferencesNode.gridcolor);
    preferences.foregroundColor = parseColor(preferencesNode.ForeColor);
    preferences.forceScale = preferencesNode.ImpulseScale * 1;
    preferences.velocityScale = preferencesNode.VelocityScale * 1;
    // console.log(preferences.velocityScale,preferencesNode.VelocityScale);
    preferences.drawGrid = preferencesNode.drawgrid;
    preferences.drawAxis = preferencesNode.showAxis;
    preferences.drawRuler = preferencesNode.drawruler;
    preferences.trigAxis = preferencesNode.trigAxis;
    preferences.drawGravity = preferencesNode.gravityRendered;
    preferences.minDisplayForce = preferencesNode.MinDisplayForce;
    preferences.minDisplayVelocity = preferencesNode.MinDisplayVelocity;
    preferences.precision = preferencesNode.Precision;
    preferences.DEFAULT_PRECISION = preferencesNode.Precision;
  
    if (preferencesNode.ThemeColors) {
        preferences.themeColors= parseNumArray(preferencesNode.ThemeColors);
    }
    if (preferencesNode.ForceDisplaySettings) {
        let arr = preferencesNode.ForceDisplaySettings.split(",");
        for (let i = 0; i < arr.length; i++)arr[i] = arr[i] == "true" ? true : false;
        preferences.forceNameDisplayed = arr[0];
        preferences.forceValueDisplayed = arr[1];
        preferences.forceAngleDisplayed = arr[2];
        preferences.forceComponentsDisplayed = arr[3];
        preferences.ForceVectorInfoDisplayed = arr[4];
        preferences.forceMergeReactions = arr[5];
    }

    if (preferencesNode.VelocityDisplaySettings) {
        let arr = preferencesNode.VelocityDisplaySettings.split(",");
        for (let i = 0; i < arr.length; i++)arr[i] = arr[i] == "true" ? true : false;
        preferences.velocityAngleDisplayed = arr[0];
        preferences.velocityValueDisplayed = arr[1];
        preferences.velocityVectorInfoDisplayed = arr[2];
        preferences.velocityComponentsDisplayed = arr[3];
        //console.log(preferencesNode.VelocityDisplaySettings,arr);
    }
    if (preferencesNode.FBDForceStates) {
        let enabled = preferences.getEnabledForces();
        let arr = preferencesNode.FBDForceStates.split(",");
        let i = 0;
        for (let i = 0; i < arr.length; i++) {
            enabled[i] = (arr[i] == "true" ? true : false);
            i++;
        }
        //console.log(preferencesNode.FBDForceStates,enabled);
    }
    if (preferencesNode.FBDForceColors) {
        let colors = preferences.getForceColors();
        let arr = preferencesNode.FBDForceColors.split(";");
        let i = 0;
        for (let col of arr) {
            let c = col.split(",");
            colors[i] = new framework.Color(c[0] * 255, c[1] * 255, c[2] * 255, c[3] * 255);
            i++;
        }
        //console.log(preferencesNode.FBDForceColors,colors);
    }

    let s = preferencesNode.coeffMixer;
    let arr = s.split(",");
    // console.log(arr);
    preferences.frictionCoeffMixer=parseInt(arr[0]);
    preferences.restitutionCoeffMixer=parseInt(arr[1]);
}

function parseWorldSettings(app, settingsNode) {
    let settings = new org.phys2d.dynamics.Settings();
    settings.setStepFrequency(1.0 / settingsNode.StepFrequency);
    settings.setMaximumTranslation(settingsNode.MaximumTranslation);
    settings.setMaximumRotation(settingsNode.MaximumRotation);
    let collisionMode = settingsNode.ContinuousCollisionDetectionMode;
    //console.log(settingsNode);
    if (collisionMode == "ALL") {
        settings.setContinuousDetectionMode(org.phys2d.dynamics.ContinuousDetectionMode.ALL);
    } else if (collisionMode == "BULLETS_ONLY") {
        settings.setContinuousDetectionMode(org.phys2d.dynamics.ContinuousDetectionMode.BULLETS_ONLY);
    } else if (collisionMode == "NONE") {
        settings.setContinuousDetectionMode(org.phys2d.dynamics.ContinuousDetectionMode.NONE);
    }
    //   console.log(collisionMode, settings.getContinuousDetectionMode());
    settings.setAutoSleepingEnabled(settingsNode.AutoSleep);
    settings.setSleepTime(settingsNode.SleepTime);
    settings.setSleepLinearVelocity(settingsNode.SleepLinearVelocity);
    settings.setSleepAngularVelocity(settingsNode.SleepAngularVelocity);
    settings.setRestitutionVelocity(settingsNode.RestitutionVelocity);
    settings.setVelocityConstraintSolverIterations(settingsNode.VelocitySolverIterations);
    settings.setPositionConstraintSolverIterations(settingsNode.PositionSolverIterations);
    settings.setBaumgarte(settingsNode.Baumgarte);
    settings.setMaximumLinearCorrection(settingsNode.MaximumLinearCorrection);
    settings.setMaximumAngularCorrection(settingsNode.MaximumAngularCorrection);
    settings.setLinearTolerance(settingsNode.LinearTolerance);
    settings.setAngularTolerance(settingsNode.AngularTolerance);
    settings.setWarmStartDistance(settingsNode.WarmStartDistance);
    // console.log(settings);
    return settings;
}

function parseVector(v) {
    return new math.Vector2(v.x * 1, v.y * 1);
}

function parseColor(c) {
    return new framework.Color(c.r * 255, c.g * 255, c.b * 255, c.a * 255);
}

function parseField(app, fieldNode) {
    //console.log("field",fieldNode);
    const fieldType = fieldNode["xsi:type"];
    let xExpr = unHtmlEntities(fieldNode.xExprForce.cdata);
    let yExpr = fieldNode.yExprForce ? unHtmlEntities(fieldNode.yExprForce.cdata) : null;
    const name = fieldNode.Name;
    const enabled = fieldNode.FieldEnabled;
    const color = fieldNode.FieldColor;
    let field;
    const shape = parseShape(fieldNode.ConvexBounds.Shape);
    const bounds = new physics.ConvexBounds(shape);
    switch (fieldType) {
        case 'ElectricField':
            field = new physics.controllers.ElectricField(app, new math.Vector2(), bounds);
            break;
        case 'MagneticField':
            field = new physics.controllers.MagneticField(app, 0, bounds);
            break;
        case 'GravitationalField':
            field = new physics.controllers.ElectricField(app, new math.Vector2(), bounds);
            break;
        case 'BuoyancyField':
            field = new physics.controllers.BuoyancyField(app, 0, bounds);
            break;
    }
    if (xExpr) field.setExpressions(xExpr, yExpr);
    //  console.log(field);   
    /*
    if(field instanceof BuoyancyField){
        if(fieldParam!=null){
            ((BuoyancyField) field).setParams(fieldParam[0], fieldParam[1], fieldParam[2], new Vector2(fieldParam[3],0));
             //if(org.shikhar.simphy.Simphy.DEBUG )System.out.println("field param"+ fieldParam);
        }
    }
    */

    field.setName(name);
    field.setColor(parseColor(color));
    field.setEnableExpression(unHtmlEntities(enabled + ""));
    return field;
}

function parseNumArray(str) {
    let arr = str.split(",");
    for (let i = 0; i < arr.length; i++)arr[i] = arr[i] * 1;
    return arr;
}

function parseTracer(app, tracerNode) {

    let body = bodies[tracerNode.TracerBodyID];
    if (body == null) return null;
    let tracer = new physics.Tracer(app, body, parseVector(tracerNode.TracerPoint));
    tracer.setColor(parseColor(tracerNode.TracerColor));
    tracer.setPtSize(tracerNode.TracerWidth / 2);
    tracer.setPtsCount(tracerNode.TracerCount);
    tracer.setMode(tracerNode.TracerMode);
    tracer.setInterval(tracerNode.TracerInterval);
    tracer.setShowVelocity(tracerNode.TracerShowVel);
    tracer.setShowAcceleration(tracerNode.TracerShowAcc);

    return tracer;
}

function parseKeyboardController(controllerNode) {

}
function parseBodyController(app, controllerNode) {
    let clazz = controllerNode.type;
    let body = bodies[controllerNode.bodyid];
    let controller = null;
    if (clazz == "ForceController") {
        controller = new physics.controllers.ForceController(app, body, new math.Vector2(), new math.Vector2());
        if (controllerNode.ForceMode) controller.setMode(controllerNode.ForceMode * 1)
    } else if (clazz == "TorqueController") {
        controller = new physics.controllers.TorqueController(app, body, null);
    } else if (clazz == "TogglePropertiesController") {
        controller = new physics.controllers.TogglePropertiesController(app, body);
    } else if (clazz == "ValuePropertiesController") {
        controller = new physics.controllers.ValuePropertiesController(app, body);
    } else if (clazz == "PathController") {
        controller = new physics.controllers.PathController(body, "", "");
        if (controllerNode.ForceMode) controller.setIdeal(app, controllerNode.ForceMode * 1 != 0);
    } else {
        controller = null;
    }
    if (controller != null) {
        try {
            controller.setName(controllerNode.name);
            let xExpr = null;
            let yExpr = null;
            if (controllerNode.xExpr) xExpr = unHtmlEntities(controllerNode.xExpr.cdata);
            if (controllerNode.yExpr) yExpr = unHtmlEntities(controllerNode.yExpr.cdata)
            controller.setExpressions(xExpr, yExpr);
            controller.setEnableExpression(unHtmlEntities(controllerNode.enabled));
        } catch (e) {
            console.log("unable to parse controller", e);
        }
    }

    return controller;
}
function parseComBody(bosy) {

}
function parseMass(massNode) {
    let mass = new org.phys2d.geometry.Mass(parseVector(massNode.LocalCenter), massNode.Mass, massNode.Inertia);
    let type = org.phys2d.geometry.MassType.NORMAL;
    switch (massNode.Type) {
        case 'INFINITE':
            type = org.phys2d.geometry.MassType.INFINITE;
            break;
        case 'FIXED_LINEAR_VELOCITY':
            type = org.phys2d.geometry.MassType.FIXED_LINEAR_VELOCITY;
            break;
        case 'X_MOTION_ONLY':
            type = org.phys2d.geometry.MassType.X_MOTION_ONLY;
            break;
        case 'Y_MOTION_ONLY':
            type = org.phys2d.geometry.MassType.Y_MOTION_ONLY;
            break;
        case 'FIXED_ANGULAR_VELOCITY':
            type = org.phys2d.geometry.MassType.FIXED_ANGULAR_VELOCITY;
            break;
    }
    mass.setType(type);
    return mass;
}

function parseBody(app, bodyNode, body) {

    if (bodyNode.DynamicallAddedBody) return;
    body.setName(bodyNode.Name);
    body.setFillColor(parseColor(bodyNode.FillColor));
    body.setOutlineColor(parseColor(bodyNode.OutlineColor));
    body.setLinearVelocity(parseVector(bodyNode.Velocity));
    body.setAngularVelocity(DEG_TO_RADIAN * bodyNode.AngularVelocity);
    if (bodyNode.Immortal) body.setImmortal(bodyNode.Immortal);
    if (bodyNode.Killer) body.setKiller(bodyNode.Killer);
    if (bodyNode.Text) body.setText(bodyNode.Text);
    if (bodyNode.Charge) body.setCharge(bodyNode.Charge);
    if (bodyNode.FbdDrawn) body.setFbdDrawn(bodyNode.FbdDrawn);
    if (bodyNode.Renderable == false) body.setVisible(false);
    if (bodyNode.BorderDrawn == false) body.renderBorder = false;
    if (bodyNode.renderFilled = false) body.renderFill = false;

    if (bodyNode.Brush) {
        let brushNode = bodyNode.Brush;
        let b = app.resourceManager.getAnimation(brushNode.name);
        if (b != null) {
            b.setParams(parseNumArray(brushNode.params));
            body.setBrush(b);
            // console.log(b,body)
        }
    }

    // if(bodyNode.Charge)body.setCharge(bodyNode.Charge);

    let fixtures = bodyNode.Fixtures.Fixture;
    //console.log(fixtures);
    if (!fixtures) return body;
    if (!Array.isArray(fixtures)) {
        fixtures = new Array(fixtures);
    }
    let n = fixtures.length;
    if (n == 0) return b;
    for (let i = 0; i < n; i++) {
        let f = fixtures[i];
        //console.log("fixture",f);
        let fixture = parseFixture(f);
        body.addFixture(fixture);
        if (body.getFixtureCount() > 1) {
            //find prev added fixtures
            let f1 = body.getFixture(body.getFixtureCount() - 2);
            //perform chaining of link
            if (f1.getShape() instanceof org.phys2d.geometry.Link && fixture.getShape() instanceof org.phys2d.geometry.Link) {
                f1.getShape().setNext(fixture.getShape());
            }
        }
    }

    //body.setMass(bodyNode.Mass.Mass);
    //body.setInertia(bodyNode.Mass.Inertia);
    body.setMassData(parseMass(bodyNode.Mass));
    /*
    let transform = new math.Transform();
    transform.setRotation(DEG_TO_RADIAN*bodyNode.Transform.Rotation);
    transform.setTranslation(parseVector(bodyNode.Transform.Translation));
    body.setTransform(transform);
    */

    body.getTransform().setTranslation(parseVector(bodyNode.Transform.Translation));
    body.getTransform().setRotation(DEG_TO_RADIAN * bodyNode.Transform.Rotation);
    /*
   
    body.setPosition(parseVector(bodyNode.Transform.Translation));
    body.setRotation(DEG_TO_RADIAN*bodyNode.Transform.Rotation);
    */
    //  console.log(bodyNode.Name,bodyNode.Transform.Translation,body.getPosition());
    // body.getTransform().setRotation(bodyNode.Transform.Rotation);

    //console.log("body ",body);

    return body;

}

function parseFixture(fixtureNode) {
    let f = fixtureNode;
    let shape = parseShape(f.Shape);
    let fixture = new org.phys2d.dynamics.BodyFixture(shape);
    fixture.setDensity(f.Density);
    fixture.setFriction(f.Friction);
    fixture.setSensor(f.Sensor);
    fixture.setRestitution(f.Restitution);
    fixture.setSticky(f.Sticky);
    //fixture.setRestitution(f.Restitution);
    fixture.setShape(shape);
    if (fixtureNode.Filter) {

        if (fixtureNode.Filter["xsi:type"] == "CategoryFilter") {
            let categoryFilter = new org.phys2d.collision.CategoryFilter();
            let category = 0;
            let mask = 0;
            // console.log(fixtureNode.Filter);
            if (fixtureNode.Filter.PartOfGroups) {
                // console.log(fixtureNode.Filter.PartOfGroups);
                let o = fixtureNode.Filter.PartOfGroups;
                for (let i in o) {
                    category |= parseInt(o[i].Value);
                    // console.log("category", i, o[i].Value);
                }
                categoryFilter.setCategory(category);
                // console.log(category);
            }
            if (fixtureNode.Filter.CollideWithGroups) {
                let o = fixtureNode.Filter.CollideWithGroups;
                for (let i in o) {
                    mask |= parseInt(o[i].Value);
                    // console.log("mask", i, o[i].Value);
                }
                categoryFilter.setMask(mask);
                // console.log(mask);
            }
            //console.log(mask, category)
            fixture.setFilter(categoryFilter);

        }
    }

    //console.log(fixture);
    return fixture;
}

function parseJoint(jointNode) {
    //console.log(jointNode);
    if (jointNode.DynamicallAddedJoint) return;
    let joint = null;
    let b1 = bodies[jointNode.BodyId1];
    let b2 = bodies[jointNode.BodyId2];

    // console.log(jointNode);
    if (b1 == null || b2 == null) {
        return null;
    }

    let jointType = jointNode["xsi:type"];
    // console.log("adding "+jointType);
    if (jointNode.Anchor) jointNode.anchor = parseVector(jointNode.Anchor);
    if (jointNode.Axis) jointNode.axis = parseVector(jointNode.Axis);
    if (jointNode.Anchor1) jointNode.anchor1 = parseVector(jointNode.Anchor1);
    if (jointNode.Anchor2) jointNode.anchor2 = parseVector(jointNode.Anchor2);
    if (jointNode.PulleyAnchor1) jointNode.pulleyAnchor1 = parseVector(jointNode.PulleyAnchor1);
    if (jointNode.PulleyAnchor2) jointNode.pulleyAnchor2 = parseVector(jointNode.PulleyAnchor2);

    // create the joint given the type
    if ("AngleJoint" == jointType) {
        let aj = new org.phys2d.dynamics.joint.AngleJoint(b1, b2);
        aj.setLimits(DEG_TO_RADIAN * jointNode.LowerLimit, DEG_TO_RADIAN * jointNode.UpperLimit);
        aj.setLimitEnabled(jointNode.LimitsEnabled);
        aj.setRatio(jointNode.Ratio);
        aj.setReferenceAngle(DEG_TO_RADIAN * jointNode.ReferenceAngle);
        joint = aj;
    } else if ("DistanceJoint" == jointType) {
        let dj = new org.phys2d.dynamics.joint.DistanceJoint(b1, b2, jointNode.anchor1, jointNode.anchor2);
        dj.setFrequency(jointNode.Frequency);
        dj.setDampingRatio(jointNode.DampingRatio);
        // we need to set the target distance because the joint may have been saved
        // in a state in which it was compressed or stretched
        dj.setDistance(jointNode.Distance);

        joint = dj;
    } else if ("FrictionJoint" == jointType) {
        let fj = new org.phys2d.dynamics.joint.FrictionJoint(b1, b2, jointNode.anchor);
        fj.setMaximumForce(jointNode.MaximumForce);
        fj.setMaximumTorque(jointNode.MaximumTorque);
        joint = fj;
    } else if ("PinJoint" == jointType) {
        //SimphyBody b1 = jointNode.idMapBody.get(jointNode.bodyId1);
        let mj = new org.phys2d.dynamics.joint.PinJoint(b1, jointNode.anchor, jointNode.frequency, jointNode.dampingRatio, jointNode.MaximumForce);
        mj.setTarget(parseVector(jointNode.Target));
        joint = mj;
    } else if ("PrismaticJoint" == jointType) {
        let pj = new org.phys2d.dynamics.joint.PrismaticJoint(b1, b2, jointNode.anchor1, jointNode.anchor2, jointNode.axis);
        pj.setLimits(jointNode.LowerLimit, jointNode.UpperLimit);
        pj.setLimitEnabled(jointNode.LimitsEnabled);
        pj.setMaximumMotorForce(jointNode.MaximumMotorForce);
        pj.setMotorSpeed(jointNode.MotorSpeed);
        pj.setMotorEnabled(jointNode.MotorEnabled);
        pj.setReferenceAngle(DEG_TO_RADIAN * jointNode.ReferenceAngle);
        joint = pj;
    } else if ("PulleyJoint".equalsjointType) {
        let pj = new org.phys2d.dynamics.joint.PulleyJoint(b1, b2, jointNode.pulleyAnchor1, jointNode.pulleyAnchor2, jointNode.anchor1, jointNode.anchor2);
        pj.setRatio(jointNode.Ratio);
        joint = pj;
    } else if ("RevoluteJoint" == jointType) {
        let rj = new org.phys2d.dynamics.joint.RevoluteJoint(b1, b2, jointNode.anchor);
        rj.setLimits(DEG_TO_RADIAN * jointNode.LowerLimit, DEG_TO_RADIAN * jointNode.UpperLimit);
        rj.setLimitEnabled(jointNode.LimitsEnabled);
        rj.setMaximumMotorTorque(jointNode.MaximumMotorTorque);
        rj.setMotorEnabled(jointNode.MotorEnabled);
        rj.setMotorSpeed(DEG_TO_RADIAN * jointNode.MotorSpeed);
        rj.setReferenceAngle(DEG_TO_RADIAN * jointNode.ReferenceAngle);
        joint = rj;
    } else if ("RopeJoint" == jointType) {
        let rj = new org.phys2d.dynamics.joint.RopeJoint(b1, b2, jointNode.anchor1, jointNode.anchor2);
        rj.setLimits(jointNode.LowerLimit, jointNode.UpperLimit);
        rj.setLowerLimitEnabled(jointNode.LowerLimitEnabled);
        rj.setUpperLimitEnabled(jointNode.UpperLimitEnabled);
        joint = rj;
    } else if ("SpindleJoint" == jointType) {
        let rj = new org.phys2d.dynamics.joint.SpindleJoint(b1, b2, jointNode.anchor1, jointNode.anchor2);
        //rj.setLimits(jointNode.LowerLimit, jointNode.UpperLimit);
        // rj.setLowerLimitEnabled(jointNode.LowerLimitEnabled);
        // rj.setUpperLimitEnabled(jointNode.UpperLimitEnabled);
        //console.log(rj);
        joint = rj;
    } else if ("WeldJoint" == jointType) {
        let wj = new org.phys2d.dynamics.joint.WeldJoint(b1, b2, jointNode.anchor);
        wj.setReferenceAngle(DEG_TO_RADIAN * jointNode.ReferenceAngle);
        wj.setFrequency(jointNode.Frequency);
        wj.setDampingRatio(jointNode.DampingRatio);
        joint = wj;
    } else if ("WheelJoint" == jointType) {
        //console.log(jointNode);
        let wj = new org.phys2d.dynamics.joint.WheelJoint(b1, b2, jointNode.anchor, jointNode.axis);
        wj.setFrequency(jointNode.Frequency);
        wj.setDampingRatio(jointNode.DampingRatio);
        wj.setMaximumMotorTorque(jointNode.MaximumMotorTorque);
        wj.setMotorSpeed(DEG_TO_RADIAN * jointNode.MotorSpeed);
        wj.setMotorEnabled(jointNode.MotorEnabled);
        // console.log(wj);
        joint = wj;
    } else if ("SpringJoint" == jointType) {
        // console.log(jointNode);
        let sj = new org.phys2d.dynamics.joint.SpringJoint(b1, b2, jointNode.anchor1, jointNode.anchor2, jointNode.SpringConstant, jointNode.DampingRatio);
        //console.log(jointNode.anchor1, jointNode.anchor2);
        // we need to set the target distance because the joint may have been saved
        // in a state in which it was compressed or stretched
        sj.setNaturalLength(jointNode.distance);
        joint = sj;
    } else {
        //throw new SAXException(MessageFormat.format(Messages.getString("exception.persist.unknownJointType"), jointType));
    }

    if (joint != null) {
        joint.setName(jointNode.JointName);
        joint.setColor(parseColor(jointNode.JointColor));
        joint.setVisible(jointNode.JointRenderable);
        if (jointNode.JointSize) joint.setSize(jointNode.JointSize);
        // joint.setOpacity(jointNode.Opacity);
        //	joint.setDynamicallyAdded(dynamicJoint);
        //	joint.setOpacity((int) Math.round(jointNode.opacity));
        joint.setCollisionAllowed(jointNode.CollisionAllowed);
        joints[jointNode.JointId] = (joint);
        // save the old id for setting up joints
        //	if(jointNode.jointId!= null)jointNode.idMapJoint.put(jointId, joint);
        // console.log("Adding joint",joint);

        return joint;
    }
    return null;

}


function parseShape(shapeNode) {
    let shapeType = shapeNode["xsi:type"]; //]ShapeType;
    if (shapeNode.LocalCenter) shapeNode.localCenter = parseVector(shapeNode.LocalCenter);
    if (shapeNode.Vertex) {
        shapeNode.vertices = [];
        for (let i = 0; i < shapeNode.Vertex.length; i++) shapeNode.vertices[i] = parseVector(shapeNode.Vertex[i]);
    }

    let shape;
    if ("Ring" == shapeType) {
        //console.log("Adding ring", shapeNode);
        shape = org.phys2d.geometry.Geometry.createRing(shapeNode.Radius);
        shape.translate(shapeNode.localCenter);
    } else if ("Circle" == shapeType) {
        //console.log("Adding Disc", shapeNode);
        shape = org.phys2d.geometry.Geometry.createCircle(shapeNode.Radius);
        shape.translate(shapeNode.localCenter);
    } else if ("Rectangle" == shapeType) {
        shape = org.phys2d.geometry.Geometry.createRectangle(shapeNode.Width, shapeNode.Height);
        // we can perform normal rotation since the shape's center
        // is the origin
        shape.rotate(DEG_TO_RADIAN * shapeNode.LocalRotation);
        shape.translate(shapeNode.localCenter);
        //((Rectangle)(shape)).isRuler=ruler;
        //ruler=false;
    } else if ("Slice" == shapeType) {
        shape = org.phys2d.geometry.Geometry.createSliceAtOrigin(shapeNode.Radius, shapeNode.Theta);
        // we can perform normal rotation since the shape's center
        // is the origin
        shape.rotate(DEG_TO_RADIAN * shapeNode.LocalRotation);
        shape.translate(shapeNode.localCenter);
    } else if ("Ellipse" == shapeType) {
        shape = org.phys2d.geometry.Geometry.createEllipse(shapeNode.Width, shapeNode.Height);
        // we can perform normal rotation since the shape's center
        // is the origin
        shape.rotate(DEG_TO_RADIAN * shapeNode.LocalRotation);
        // console.log(shapeNode.localCenter);
        shape.translate(shapeNode.localCenter);
    } else if ("Parabola" == shapeType) {
        shape = org.phys2d.geometry.Geometry.createParabolaAtOrigin(shapeNode.Width, shapeNode.Height);
        // we can perform normal rotation since the shape's center
        // is the origin
        shape.rotate(DEG_TO_RADIAN * shapeNode.LocalRotation);
        shape.translate(shapeNode.localCenter);

    } else if ("Triangle" == shapeType) {
        shape = org.phys2d.geometry.Geometry.createTriangle(
            shapeNode.vertices[0],
            shapeNode.vertices[1],
            shapeNode.vertices[2]);
        // no translation required because the vertices handle that
    } else if ("Polygon" == shapeType) {
        //Vector2[] verts = new Vector2[this.vertices.size()];
        //this.vertices.toArray(verts);
        // console.log("vertex node",shapeNode.Vertex);
        // console.log("vertices array",Array.isArray(shapeNode.vertices),shapeNode.vertices);

        shape = org.phys2d.geometry.Geometry.createPolygon(shapeNode.vertices);
        // no translation required because the vertices handle that
    } else if ("Link" == shapeType) {
        //console.log(shapeNode);
        shape = new org.phys2d.geometry.Link(shapeNode.vertices[0], shapeNode.vertices[1]);
        //console.log(shape);
        // no translation required because the vertices handle that
    } else if ("Segment" == shapeType) {
        shape = org.phys2d.geometry.Geometry.createSegment(
            shapeNode.vertices[0],
            shapeNode.vertices[1]);
        // no translation required because the vertices handle that
    } else if ("Capsule" == shapeType) {
        shape = org.phys2d.geometry.Geometry.createCapsule(shapeNode.Width, shapeNode.Height);
        // we can perform normal rotation since the shape's center
        // is the origin
        shape.rotate(DEG_TO_RADIAN * shapeNode.LocalRotation);
        shape.translate(shapeNode.localCenter);
    } else {
        //throw new SAXException(MessageFormat.format(Messages.getString("exception.persist.unknownShapeType"), shapeType));
    }
    //console.log(shape);
    return shape;
}
function unHtmlEntities(str) {
    if (str == null || str == undefined) return null;
    console.log(str);
    str = str.replace(/&amp;/g, '&');
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&apos;/g, "'");
    str = str.replace(/&nbsp;/g, ' ');

    return str;
}

// Function to export as the default export
export function parseSimulation(app, resources) {
    app.clearAll();
    return buildSimulation(app, resources)
}


