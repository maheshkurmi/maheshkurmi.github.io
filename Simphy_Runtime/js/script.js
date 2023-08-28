// Get reference to the file input element
const fileInput = document.getElementById('fileInput');
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

// Function to unzip a file
async function unzipFile(url) {
  try {
    const response = await fetch(url);
    const zipData = await response.arrayBuffer();
    const jszip = new JSZip();
    const zip = await jszip.loadAsync(zipData);
    const source = {};

    for (const fileName in zip.files) {
      const file = zip.files[fileName];
      if (!file.dir) {
        const fileContents = await file.async('string');
        source[fileName] = fileContents;
      }
    }
    console.log(source);
    return source;
  } catch (error) {
    console.error('Error occurred while unzipping the file:', error);
    return null;
  }
}

function buildSimulation(simulation) {
  
  app.scriptManager.setScriptEngine(null);
  console.log("Simulation", simulation);
 
  // buildCamera(simulation);
  buildGeometry(simulation);
  buildSimulationUI(simulation.World.GuiManager.GuiXML.cdata);
  buildPhysics(simulation.World);
  buildScriptManager(simulation);
}

// Function to handle the file selection
function loadSimulation(event) {
  
  const file = event.target.files[0];

  if (!file) {
    return;
  }
 
  unzipFile(URL.createObjectURL(file)).then((source) => {
    const simulation = parseXMLToObject(source['simulation.xml']);
    buildSimulation(simulation);
  });
}

function loadSimulationFromPath(path){
  unzipFile(path).then((source) => {
    const simulation = parseXMLToObject(source['simulation.xml']);
    buildSimulation(simulation);
  });
}


// Function to build the geometry
function buildGeometry(simulation) {
  shapes = simulation.World.Shapes;

  if (shapes === undefined || !shapes.Shape2D) {
    return;
  }

  //console.log("Shapes");
  // console.log(shapes);

  shapesBuilder = new ShapesBuilder(app);

  shapes.Shape2D.forEach(shape => {
    shapesBuilder.addShape(shape);
  });
}

function buildSimulationUI(simulation) {
  app.guiManager.loadXml(simulation);
}

// Function to build the camera
function buildCamera(simulation) {
  const cameraConfig = simulation.Camera;
  let tx = 1 * cameraConfig.Translation.x;
  let ty = 1 * cameraConfig.Translation.y;
  app.camera.setTranslation(tx, ty);
  app.camera.zoomTo(1 * cameraConfig.Scale.substring(1));


}

// Function to build the script manager
function buildScriptManager(simulation) {

  let script = simulation.World.ScriptManager.Script.cdata;
  if (!script) { app.scriptManager.setScriptEngine(null); return; }
  app.scriptManager.setScriptEngine(null);
  let engine = new ScriptEngine(app);
  //console.log("before",app.scriptManager);
  app.scriptManager.setScriptEngine(engine);
  engine.load(simulation.World.ScriptManager.Script.cdata);
  //console.log("after",app.scriptManager);
  
}


let bodies = [];
let joints = [];

function buildPhysics(worldNode) {
  // console.log(worldNode);

  bodies = [];
  joints = [];
  worldManager = app.worldManager;
  worldManager.clearAll();
  var world = new org.phys2d.dynamics.World();
  let shape = parseShape(worldNode.ConvexBounds.Shape);
  world.setBounds(new physics.ConvexBounds(shape));
  //console.log(world.getBounds());
  //world.getSettings().setContinuousDetectionMode(ContinuousDetectionMode.NONE);
  world.setBroadphaseDetector(new org.phys2d.collision.broadphase.LazyAABBTree());
  //world.setNarrowphaseDetector(new Sat());

  //var world=worldManager.world;
  let bs = worldNode.Bodies.Body;
  if (bs) {
    for (let i = 0; i < bs.length; i++) {
      let b = parseBody(bs[i]);
      if (b != null) {
        bodies[bs[i].Id] = b;
        world.addBody(b);
      }
    }
  }

  let ps = worldNode.Bodies.PlaneBody;
  if (ps) {
    if (!Array.isArray(ps)) ps = [ps];
    for (let i = 0; i < ps.length; i++) {
      let b = parsePlaneBody(ps[i]);
      if (b != null) {
        bodies[ps[i].Id] = b;
        world.addBody(b);
        b.reValidate();
      }
    }
  }

  let js = worldNode.Joints.Joint;
  if (js) {
    for (let i = 0; i < js.length; i++) {
      let j = parseJoint(js[i]);
      if (j != null) world.addJoint(j);
      // console.log("joint",j);
    }
  }
  worldManager.setWorld(world);
  console.log(world);
}

function parseVector(v) {
  return new org.phys2d.geometry.Vector2(v.x * 1, v.y * 1);
}

function parseColor(c) {
  return new framework.Color(c.r * 255, c.g * 255, c.b * 255, c.a * 255);
}

function parsePlaneBody(planeBodyNode) {

  let body = new physics.PlaneBody();

  body.setCenterandNormal(parseVector(planeBodyNode.localCenter), parseVector(planeBodyNode.PlaneBodyNormal));
  //console.log("planeBodyNode",planeBodyNode);

  return body;
  //this.body.setText(bodyText);
  //this.body.setBrush(this.bodyBrush);
  //bodyText="";
  // this.bodies.add(this.body);


}
function parseBody(bodyNode) {
  //console.log(bodyNode);

  let body = new physics.SimulationBody();
  //b.setName(bodyNode.Name);
  body.setFillColor(parseColor(bodyNode.FillColor));
  body.setOutlineColor(parseColor(bodyNode.OutlineColor));
  body.setLinearVelocity(parseVector(bodyNode.Velocity));
  body.setAngularVelocity(DEG_TO_RADIAN * bodyNode.AngularVelocity);
  //body.setName(bodyNode.Name);


  //b.setMassData();
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

  body.setMass(bodyNode.Mass.Mass);
  body.setInertia(bodyNode.Mass.Inertia);
  body.getTransform().setTranslation(parseVector(bodyNode.Transform.Translation));
  body.getTransform().setRotation(bodyNode.Transform.Rotation);

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
  return fixture;
}

function parseJoint(jointNode) {
  //console.log(jointNode);

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
    //rj.setLowerLimitEnabled(jointNode.LowerLimitEnabled);
    //rj.setUpperLimitEnabled(jointNode.UpperLimitEnabled);
    joint = rj;
  } else if ("WeldJoint" == jointType) {
    let wj = new org.phys2d.dynamics.joint.WeldJoint(b1, b2, jointNode.anchor);
    wj.setReferenceAngle(DEG_TO_RADIAN * jointNode.ReferenceAngle);
    wj.setFrequency(jointNode.Frequency);
    wj.setDampingRatio(jointNode.DampingRatio);
    joint = wj;
  } else if ("WheelJoint" == jointType) {
    let wj = new org.phys2d.dynamics.joint.WheelJoint(b1, b2, jointNode.anchor, jointNode.axis);
    wj.setFrequency(jointNode.frequency);
    wj.setDampingRatio(jointNode.dampingRatio);
    wj.setMaximumMotorTorque(jointNode.MaximumMotorTorque);
    wj.setMotorSpeed(DEG_TO_RADIAN * jointNode.MotorSpeed);
    wj.setMotorEnabled(jointNode.MotorEnabled);
    joint = wj;
  } else if ("SpringJoint" == jointType) {
    console.log(jointNode);
    let sj = new org.phys2d.dynamics.joint.SpringJoint(b1, b2, jointNode.anchor1, jointNode.anchor2, jointNode.SpringConstant, jointNode.DampingRatio);
    // we need to set the target distance because the joint may have been saved
    // in a state in which it was compressed or stretched
    sj.setNaturalLength(jointNode.distance);
    joint = sj;
  } else {
    //throw new SAXException(MessageFormat.format(Messages.getString("exception.persist.unknownJointType"), jointType));
  }

  if (joint != null) {
    joint.setName(jointNode.JointName);
    //joint.setColor(parseColor(jointNode.color));
    //	joint.setVisible(jointNode.jointRenderable);
    //joint.setSize((float)jointNode.jointSize);
    //	joint.setDynamicallyAdded(dynamicJoint);
    //	joint.setOpacity((int) Math.round(jointNode.opacity));
    joint.setCollisionAllowed(jointNode.CollisionAllowed);
    joints[jointNode.JointId] = (joint);
    // save the old id for setting up joints
    //	if(jointNode.jointId!= null)jointNode.idMapJoint.put(jointId, joint);
    // console.log(joint);

    return joint;
  }
  return null;

}


function parseShape(shapeNode) {
  let shapeType = shapeNode["xsi:type"];//]ShapeType;
  if (shapeNode.LocalCenter) shapeNode.localCenter = parseVector(shapeNode.LocalCenter);
  if (shapeNode.Vertex) {
    shapeNode.vertices = [];
    for (let i = 0; i < shapeNode.Vertex.length; i++) shapeNode.vertices[i] = parseVector(shapeNode.Vertex[i]);
  }

  let shape;
  if ("Ring" == shapeType) {
    console.log("Adding ring", shapeNode);
    shape = org.phys2d.geometry.Geometry.createRing(shapeNode.Radius);
    shape.translate(shapeNode.localCenter);
  } else if ("Circle" == shapeType) {
    console.log("Adding Disc", shapeNode);
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
    shape.translate(shapeNode.LocalCenter);
  } else if ("Ellipse" == shapeType) {
    shape = org.phys2d.geometry.Geometry.createEllipse(shapeNode.Width, shapeNode.Height);
    // we can perform normal rotation since the shape's center
    // is the origin
    shape.rotate(DEG_TO_RADIAN * shapeNode.LocalRotation);
    shape.translate(shapeNode.LocalCenter);
  } else if ("Parabola" == shapeType) {
    shape = org.phys2d.geometry.Geometry.createParabolaAtOrigin(shapeNode.Width, shapeNode.Height);
    // we can perform normal rotation since the shape's center
    // is the origin
    shape.rotate(DEG_TO_RADIAN * hapeNode.LocalRotation);
    shape.translate(shapeNode.LocalCenter);

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
    shape = new org.phys2d.geometry.Link(shapeNode.vertices[0], shapeNode.vertice[1]);
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
    shape.translate(shapeNode.LocalCenter);
  } else {
    //throw new SAXException(MessageFormat.format(Messages.getString("exception.persist.unknownShapeType"), shapeType));
  }
  //console.log(shape);
  return shape;
}

var app = new framework.App("canvas");
var camera = app.camera;

let params = (new URL(document.location)).searchParams;
let sim = params.get("Simulation");
if(sim){
  //console.log(sim);
  loadSimulationFromPath("simulations/"+sim);
  document.getElementById("simulation").value=sim;
}

// Attach the event listener to the file input element
fileInput.addEventListener('change', loadSimulation);
