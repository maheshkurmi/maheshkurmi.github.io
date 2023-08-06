/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var org;
(function (org) {
    var shikhar;
    (function (shikhar) {
        class Canvas extends org.shikhar.Gui.CustomComponent {
            constructor() {
                super();
                this.initialised = false;
                this.init();
            }
            init() {
                Canvas.container = document.createElement("div");
                document.body.appendChild(Canvas.container);
                Canvas.camera = new THREE.PerspectiveCamera(70, (this.width / this.height | 0), 1, 10000);
                Canvas.scene = new THREE.Scene();
                const light = new THREE.DirectionalLight(16777215, 1);
                light.position.set(1, 1, 1).normalize();
                Canvas.scene.add(light);
                const geometry = new THREE.BoxGeometry(20, 20, 20);
                for (let i = 0; i < 100; i++) {
                    {
                        const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial(Object.defineProperty({
                            color: (Math.random() * 16777215)
                        }, 'constructor', { configurable: true, value: { __interfaces: ["def.threejs.three.MaterialParameters", "def.threejs.three.MeshLambertMaterialParameters"] } })));
                        object.name = "Obj" + i;
                        object.position.x = Math.random() * 800 - 400;
                        object.position.y = Math.random() * 800 - 400;
                        object.position.z = Math.random() * 800 - 400;
                        object.rotation.x = Math.random() * 2 * Math.PI;
                        object.rotation.y = Math.random() * 2 * Math.PI;
                        object.rotation.z = Math.random() * 2 * Math.PI;
                        object.scale.x = Math.random() + 0.5;
                        object.scale.y = Math.random() + 0.5;
                        object.scale.z = Math.random() + 0.5;
                        Canvas.scene.add(object);
                    }
                    ;
                }
                Canvas.raycaster = new THREE.Raycaster();
                const params = Object.defineProperty({}, 'constructor', { configurable: true, value: { __interfaces: ["def.threejs.three.WebGLRendererParameters"] } });
                params.antialias = true;
                Canvas.renderer = new THREE.WebGLRenderer(params);
                Canvas.renderer.setClearColor(15790320);
                Canvas.renderer.setPixelRatio(window.devicePixelRatio);
                Canvas.renderer.setSize(this.width, this.height);
                Canvas.renderer.sortObjects = false;
                Canvas.stats = new Stats();
                Canvas.stats.domElement.style.position = "absolute";
                Canvas.stats.domElement.style.top = "0px";
                document.body.appendChild(Canvas.stats.domElement);
            }
            static render3D() {
                Canvas.camera.position.x = Canvas.radius * Math.sin(THREE.Math.degToRad(Canvas.theta));
                Canvas.camera.position.y = Canvas.radius * Math.sin(THREE.Math.degToRad(Canvas.theta));
                Canvas.camera.position.z = Canvas.radius * Math.cos(THREE.Math.degToRad(Canvas.theta));
                Canvas.camera.lookAt(Canvas.scene.position);
                Canvas.camera.updateMatrixWorld(true);
                Canvas.raycaster.setFromCamera({
                    x: Canvas.mouseX,
                    y: Canvas.mouseY
                }, Canvas.camera);
                const intersects = Canvas.raycaster.intersectObjects(Canvas.scene.children);
                if (intersects.length > 0) {
                    console.log("intersection: " + intersects[0]);
                    if (Canvas.INTERSECTED !== intersects[0].object) {
                        if (Canvas.INTERSECTED != null) {
                            Canvas.INTERSECTED.material.emissive.setHex((Canvas.INTERSECTED["currentHex"]));
                        }
                        Canvas.INTERSECTED = intersects[0].object;
                        Canvas.INTERSECTED["currentHex"] = Canvas.INTERSECTED.material.emissive.getHex();
                        Canvas.INTERSECTED.material.emissive.setHex(16711680);
                    }
                }
                else {
                    if (Canvas.INTERSECTED != null) {
                        Canvas.INTERSECTED.material.emissive.setHex((Canvas.INTERSECTED["currentHex"]));
                    }
                    Canvas.INTERSECTED = null;
                }
                Canvas.renderer.render(Canvas.scene, Canvas.camera);
            }
            /**
             * coordinates are in frame of its parent with top left as origin and
             * right down as positive axes
             *
             * @param {org.shikhar.Graphics} g
             */
            paint(g) {
                super.paint(g);
                Canvas.render3D();
                g.context.drawImage(Canvas.renderer.domElement, 0, 0, this.width, this.height);
                g.context.fillText("Mouse on " + (Canvas.INTERSECTED == null ? null : Canvas.INTERSECTED.name), 100, 100);
            }
            /**
             *
             * @param {number} dt
             * @param {boolean} revalidate
             * true if something which may affect widget state may have
             * changed (ex. global variables, theme)
             */
            update(dt, revalidate) {
                Canvas.theta += 0.1;
                Canvas.stats.update();
            }
            handleMouseEvent(x, y, clickcount, id, button, shiftdown, controldown, popuptrigger) {
                Canvas.mouseX = x;
                Canvas.mouseY = y;
                Canvas.mouseX = (Canvas.mouseX / this.width) * 2 - 1;
                Canvas.mouseY = -(Canvas.mouseY / this.height) * 2 + 1;
                if (id === org.shikhar.AWTMouseEvent.MOUSE_MOVED_$LI$()) {
                }
                Canvas.camera.updateProjectionMatrix();
                return false;
            }
            /**
             * returns true if handled (by defaut retiurns false)
             * @param {number} x
             * @param {number} y
             * @param {number} wheel
             * @return {boolean}
             */
            handleMouseWheel(x, y, wheel) {
                Canvas.camera.fov += ((wheel / 10 | 0));
                Canvas.camera.updateProjectionMatrix();
                return false;
            }
            /**
             * returns true if handled (by defaut retiurns false)
             * @param {number} keychar
             * @param {number} keycode
             * @param {number} id
             * @param {boolean} shiftdown
             * @param {boolean} controldown
             * @param {number} modifiers
             * @return {boolean}
             */
            handleKeyEvent(keychar, keycode, id, shiftdown, controldown, modifiers) {
                return false;
            }
            /**
             * called by gui when layout is done for the widgets
             * @param {org.shikhar.Rectangle} r
             */
            setBounds(r) {
                this.bounds = r;
                if (r.width > 0)
                    this.width = (r.width | 0);
                if (r.height > 0)
                    this.height = (r.height | 0);
                Canvas.renderer.setSize(this.width, this.height);
                Canvas.camera.aspect = this.width / this.height;
                Canvas.camera.updateProjectionMatrix();
            }
            /**
             *
             * @return {org.shikhar.Dimension}
             */
            getPreferredSize() {
                return new org.shikhar.Dimension(400, 300);
            }
            /**
             *
             * @return {string}
             */
            getBeanClassName() {
                return null;
            }
            reset() {
            }
        }
        Canvas.container = null;
        Canvas.stats = null;
        Canvas.camera = null;
        Canvas.scene = null;
        Canvas.raycaster = null;
        Canvas.renderer = null;
        Canvas.mouseX = 0;
        Canvas.mouseY = 0;
        Canvas.INTERSECTED = null;
        Canvas.radius = 100;
        Canvas.theta = 0;
        shikhar.Canvas = Canvas;
        Canvas["__class"] = "org.shikhar.Canvas";
    })(shikhar = org.shikhar || (org.shikhar = {}));
})(org || (org = {}));
//# sourceMappingURL=Canvas.js.map