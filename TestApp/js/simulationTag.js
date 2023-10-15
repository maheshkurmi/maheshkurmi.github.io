import { parseSimulation } from './simulationParser.js';
import { Sound } from './soundManager.js';
import { style } from './style.js';
export default class SimulationTag extends HTMLElement {
    static id = 1;
    static _play_Icon=`<path d="M341.333 219.307v597.333l469.333-298.667-469.333-298.667z"></path>`;
    static _pause_ICon=`<path d="M597.333 810.667h170.667v-597.333h-170.667zM256 810.667h170.667v-597.333h-170.667v597.333z"></path>`;
    constructor() {
        super();
        this.ID = SimulationTag.id++;
        framework.resources.sound=Sound;
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.resources = { simulationXml: null, images: [], files: [], sounds: [] }; 
          this.buttonEventTimer = null;
        // Create a shadow DOM to encapsulate the component's content and styles
        this.attachShadow({ mode: 'open' });
        this._createUI();
    }

    /**
     * It is called when a custom element is added to the document, i.e., it's "connected" to the DOM tre
     */
    connectedCallback() {
        this.showToolbar=!this.getAttribute('hidetools');
        this.width  = this.getAttribute('width') || '100%';
        this.height  = this.getAttribute('height') || '100%';
        if (this.width  instanceof Number) this.width  = this.width  + "px";
        if (this.height  instanceof Number) this.height  = this.height  + "px";
        this.canvasContainer.style.width=this.width;
        this.canvasContainer.style.height=this.height;
        
        this.source =  this.getAttribute('src') || this.getAttribute('source') || '';
        this.playButton = this.shadowRoot.getElementById('playButton');
        this.pauseButton = this.shadowRoot.getElementById('pauseButton');
        this.toolbar = this.shadowRoot.getElementById('toolbar');
        this.showHideButton = this.shadowRoot.getElementById('showHideButton');
        this.showInfoButton = this.shadowRoot.getElementById('showInfoButton');
        if(this.source) this.init();
    }

    // Function to create and append the HTML elements
    _createUI() {
        console.log(this.width,this.height,this.source);
        this.shadowRoot.innerHTML = style;
        this.canvasContainer = document.createElement('div');//document.getElementById('canvasContainer');
        this.canvasContainer.classList.add("app-container");
        this.canvasContainer.id = "appContainer";
        this.canvasContainer.style.width = this.width;
        this.canvasContainer.style.height = this.height;

        // console.log(this.config);
        const canvas = document.createElement('canvas');
        canvas.classList.add("app-canvas");
        canvas.id = "canvas";
        canvas.style.width = this.width;
        canvas.style.height = this.height;

        const toolbar = document.createElement('div');
        toolbar.classList.add('app-toolbar');
        toolbar.id = 'toolbar';
        toolbar.style.display = 'none'; //initially keep it hidden

        const toolbarButtons = [
            { id: 'zoomOutButton', 
              icon: '<path d="M661.333 597.333h-33.707l-11.947-11.52c41.813-48.64 66.987-111.787 66.987-180.48 0-153.173-124.16-277.333-277.333-277.333s-277.333 124.16-277.333 277.333c0 153.173 124.16 277.333 277.333 277.333 68.693 0 131.84-25.173 180.48-66.987l11.52 11.947v33.707l213.333 213.333 64-64-213.333-213.333zM405.333 597.333c-106.667 0-192-85.333-192-192s85.333-192 192-192c106.667 0 192 85.333 192 192s-85.333 192-192 192zM298.667 384h213.333v42.667h-213.333v-42.667z"></path>',
              onmouseup: true },
            { id: 'reloadButton', 
              icon: '<path d="M896 431.787h-289.28l116.907-120.32c-116.48-115.2-305.067-119.467-421.547-4.267-116.48 115.627-116.48 302.080 0 418.133 116.48 115.2 305.067 115.2 421.547 0 58.027-57.6 87.040-124.587 87.040-209.067h85.333c0 84.48-37.547 194.133-112.64 268.373-149.76 148.48-392.96 148.48-542.72 0-149.333-148.053-150.613-388.693-0.853-536.747s389.973-148.053 539.733 0l116.48-119.893v303.787zM533.333 341.333v181.333l149.333 88.747-30.72 51.627-182.613-108.373v-213.333h64z"></path>',
              onmouseup: false },
            { id: 'playButton', 
              icon: '<path d="M341.333 219.307v597.333l469.333-298.667-469.333-298.667z"></path>',
              onmouseup: false },
            { id: 'pauseButton', 
              icon: '<path d="M597.333 810.667h170.667v-597.333h-170.667zM256 810.667h170.667v-597.333h-170.667v597.333z"></path>',
              onmouseup: false },
            { id: 'stepButton', 
              icon: '<path d="M213.333 213.333v597.333h128v-597.333zM426.667 213.333v597.333l469.333-298.667z"></path>',
              onmouseup: true },
            { id: 'zoomInButton', 
              icon: '<path d="M661.333 597.333l213.333 213.333-64 64-213.333-213.333v-33.707l-11.52-11.947c-48.64 41.813-111.787 66.987-180.48 66.987-153.173 0-277.333-124.16-277.333-277.333s124.16-277.333 277.333-277.333c153.173 0 277.333 124.16 277.333 277.333 0 68.693-25.173 131.84-66.987 180.48l11.947 11.52h33.707zM405.333 597.333c106.667 0 192-85.333 192-192s-85.333-192-192-192c-106.667 0-192 85.333-192 192s85.333 192 192 192zM512 426.667h-85.333v85.333h-42.667v-85.333h-85.333v-42.667h85.333v-85.333h42.667v85.333h85.333v42.667z"></path>',
              onmouseup: true },
         ];


        toolbarButtons.forEach(buttonInfo => {
            const button = document.createElement('button');
            button.id = buttonInfo.id;
            button.className="toolbar-button";
            if (buttonInfo.onmouseup) {
                button.onmouseup = (e) => this._buttonReleased(e, buttonInfo.id);
                button.onmousedown = (e) => this._buttonPressed(e, buttonInfo.id);
                button.ontouchend = button.onmouseup;
                button.ontouchstart = button.onmousedown;
                button.onmouseleave = button.onmouseup;
            } else {
                button.onclick = (e) => this._buttonPressed(e, buttonInfo.id);
            }
            button.innerHTML = `<svg version="1.1" width="28" height="32" fill="#cccd" viewBox="0 0 1024 1024">
            ${buttonInfo.icon}
            </svg>`;
            toolbar.appendChild(button);
        });

        const showHideButton = document.createElement('button');
        showHideButton.classList.add('toolbar-button');
        showHideButton.classList.add('showtool-button');
        showHideButton.id = 'showHideButton';
        showHideButton.innerHTML = `<svg version="1.1" width="24" height="24" fill="#cccd" viewBox="0 0 1024 1024">
        <path d="M512 661.333c-82.347 0-149.333-66.987-149.333-149.333s66.987-149.333 149.333-149.333c82.347 0 149.333 66.987 149.333 149.333s-66.987 149.333-149.333 149.333zM829.013 553.387c1.707-13.653 2.987-27.307 2.987-41.387s-1.28-28.16-2.987-42.667l90.027-69.547c8.107-6.4 10.24-17.92 5.12-27.307l-85.333-147.627c-5.12-9.387-16.64-13.227-26.027-9.387l-106.24 42.667c-22.187-16.64-45.227-31.147-72.107-41.813l-15.787-113.067c-1.707-10.24-10.667-17.92-21.333-17.92h-170.667c-10.667 0-19.627 7.68-21.333 17.92l-15.787 113.067c-26.88 10.667-49.92 25.173-72.107 41.813l-106.24-42.667c-9.387-3.84-20.907 0-26.027 9.387l-85.333 147.627c-5.547 9.387-2.987 20.907 5.12 27.307l90.027 69.547c-1.707 14.507-2.987 28.587-2.987 42.667s1.28 27.733 2.987 41.387l-90.027 70.827c-8.107 6.4-10.667 17.92-5.12 27.307l85.333 147.627c5.12 9.387 16.64 12.8 26.027 9.387l106.24-43.093c22.187 17.067 45.227 31.573 72.107 42.24l15.787 113.067c1.707 10.24 10.667 17.92 21.333 17.92h170.667c10.667 0 19.627-7.68 21.333-17.92l15.787-113.067c26.88-11.093 49.92-25.173 72.107-42.24l106.24 43.093c9.387 3.413 20.907 0 26.027-9.387l85.333-147.627c5.12-9.387 2.987-20.907-5.12-27.307l-90.027-70.827z"></path>
            </svg>`;
        showHideButton.style.display = "none"; //initially keep it hidden

        showHideButton.addEventListener('click', (event) => {
            event.stopPropagation();
            this.showToolbar = !this.showToolbar;
            if (this.showToolbar) {
                toolbar.style.display = 'flex';
            } else {
                toolbar.style.display = 'none';
            }
        });

        const showInfoButton = document.createElement('button');
        showInfoButton.classList.add('toolbar-button');
        showInfoButton.classList.add('showinfo-button');
        showInfoButton.id = 'showInfoButton';
        showInfoButton.innerHTML = `<svg version="1.1" width="24" height="24" fill="#cccd" viewBox="0 0 1024 1024">
        <path d="M469.333 640h85.333v85.333h-85.333v-85.333zM469.333 298.667h85.333v256h-85.333v-256zM512 85.333c-235.947 0-426.667 192-426.667 426.667 0 235.52 191.147 426.667 426.667 426.667s426.667-191.147 426.667-426.667c0-235.52-191.147-426.667-426.667-426.667zM512 853.333c-188.587 0-341.333-152.747-341.333-341.333s152.747-341.333 341.333-341.333c188.587 0 341.333 152.747 341.333 341.333s-152.747 341.333-341.333 341.333z"></path>
        </svg>`;
        showInfoButton.style.display = "none"; //initially keep it hidden
        showInfoButton.onclick = () => this.openPopup();;


        const logo = document.createElement('p');
        logo.classList.add('logo');
        //showInfoButton.classList.add('showinfo-button');
       // showInfoButton.id = 'showInfoButton';
        logo.innerHTML = `Powered by <a style="text-decoration:none" target=”_blank”  href="https://simphy.com/">&nbsp;<span style="color:#DB4C00">Sim</span><span style="color:#020283">PHY </span></a>`;
        // toolbarContainer.appendChild(toolbar);
        this.canvasContainer.appendChild(canvas);
        this.canvasContainer.appendChild(toolbar);
        this.canvasContainer.appendChild(showHideButton);
        this.canvasContainer.appendChild(showInfoButton);
        this.canvasContainer.appendChild(logo);
 
        
        //console.log(this.shadowRoot);

        // Append canvas and button to the shadow DOM
        this.shadowRoot.appendChild(this.canvasContainer);
        this.canvasContainer=this.shadowRoot.getElementById('appContainer');
      
    }

    _buttonReleased(e, button) {
        if (this.buttonEventTimer) window.clearInterval(this.buttonEventTimer);
    }

    _buttonPressed(e, button) {
        if (this.buttonEventTimer) window.clearInterval(this.buttonEventTimer);
        this.buttonEventTimer = null;

        switch (button) {
            case "zoomOutButton":
                this.buttonEventTimer = window.setInterval(() => this.app.camera.zoomOut(), 20);
                break;
            case "zoomInButton":
                this.buttonEventTimer = window.setInterval(() => this.app.camera.zoomIn(), 20);
                break;
            case "stepButton":
                if (!this.app.isPaused()) {
                    this.setPaused(true);
                }
                this.buttonEventTimer = window.setInterval(() => this.app.step(1), 20);
                break;
            case "playButton":
                this.setPaused(false);
                break;
            case "pauseButton":
                this.setPaused(true);
                break;
            case "reloadButton":
                this.reload();
                break;
        }
    }

    setPaused(paused){
        let isPaused = this.app.isPaused();
        if(paused==isPaused)return;
        if (paused) {
            this.app.pause();
            this.playButton.style.display='inline';
            this.pauseButton.style.display='none';
        }else{
            this.app.resume();
            this.playButton.style.display='none';
            this.pauseButton.style.display='inline';
        }   
    }

     // Function to close the popup
    closePopup() {
       // this.remove();
        console.log(this,"overlay =");
        const overlay = this.shadowRoot.getElementById("overlay");
        console.log(this,"overlay =",overlay,this.shadowRoot);
        if (overlay) {
            overlay.remove();
        }
    }

    // Function to create and open the popup
    openPopup() {
        //console.log(this);
        // Create overlay element
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.id = "overlay";

        // Create popup element
        const popup = document.createElement("div");
        popup.className = "popup";

        // Create title bar
        const titleBar = document.createElement("h3");
        titleBar.className = "title-bar";
        const titleText = this.app.title;//document.createTextNode("Popup Title");
        titleBar.textContent=titleText;

        // Create close button
        const closeButton = document.createElement("button");
        // closeButton.innerHTML = `<svg version="1.1" width="24" height="24" fill="#cccd" viewBox="0 0 1024 1024">
        //                 <path d="M810.667 273.493l-60.16-60.16-238.507 238.507-238.507-238.507-60.16 60.16 238.507 238.507-238.507 238.507 60.16 60.16 238.507-238.507 238.507 238.507 60.16-60.16-238.507-238.507 238.507-238.507z"></path>
        //                 </svg>`;
        closeButton.textContent="X";
        closeButton.className = "close-button";

        // Create content for the popup
        const content = document.createElement("div");
        content.innerHTML = this.app.description+"<br><b>Author: </b>"+this.app.author;

        popup.appendChild(closeButton);
        // Append elements to the popup
        popup.appendChild(titleBar);
        popup.appendChild(content);
        // Append popup to overlay
        overlay.appendChild(popup);

        //remove overlay on clicking close or outsie the popup window
        closeButton.addEventListener("click", ()=>this.closePopup());
        overlay.addEventListener("click", ()=>this.closePopup());

        // Append overlay to the body
        this.canvasContainer.appendChild(overlay);
        overlay.style.display="block";
    }

    init() {
        this.app = new framework.App(this.shadowRoot.getElementById("canvas"));
        this.app.worldManager.getWorld().setBroadphaseDetector(new org.phys2d.collision.broadphase.LazyAABBTree());

       this.reload();
        //this.loadingInterval = window.setInterval(()=>this._increaseProgress(), 200);
        //console.log(this.app);
        /*
       
        */
    }

    reload() {
        console.log("reload",this.source);
        // Simulate loading progress (0% to 100%)
              //this._increaseProgress(0);
        /*
        this.unzipFile(this.source).then((simulationInfo) => {
            //const simulation = parseXMLToObject(source['simulation.xml']);
            console.log("loading simulation ", simulationInfo);
            // this.app.resourceManager.setResources(simulation.images,simulation.files,simulation.soundManager);
            parseSimulation(this.app, simulationInfo);
            this._increaseProgress(100);
        });
        */
       if(this.resources.simulationXml) {
           // console.log("reload ", this.resources);
             parseSimulation(this.app, this.resources);
              //  this._increaseProgress(100);
                this._startSimulation();
       }else {
        const loadingBarContainer = document.createElement("div");
        loadingBarContainer.className = 'loading-container';
        loadingBarContainer.id = 'loadingContainer';
        loadingBarContainer.innerHTML = `
                    <div class="loading-bar" id="progressBar"></div>
                    <div class="loading-text" id="loadingText">Loading 0%</div>`;
        this.canvasContainer.appendChild(loadingBarContainer);
        this.toolbar.style.display = 'none';
        this.showHideButton.style.display = 'none';
        this.app.pause();
        this.app.clearAll();
        this.setPaused(true);
        //this.playPauseButton.innerHTML = this.app.isPaused() ? '⏵' : '⏸';

        this._unzipFile(this.source);
       }
    }


    // Function to unzip a file
    async _unzipFile(url) {
        try {
            const response = await fetch(url);
            const zipData = await response.arrayBuffer();
            const jszip = new JSZip();
            const zip = await jszip.loadAsync(zipData);
           
            const resourcePromises = [];
            this.loadedResources=0;
            this.totalResources =  Object.keys(zip.files).length;
           // console.log(zip.files,this.totalResources)
            for (const filePath in zip.files) {
                const file = zip.files[filePath];
                const ext = filePath.split('.').pop().toLowerCase();

                if (filePath == "simulation.xml") {
                    resourcePromises.push(
                        new Promise(async (resolve) => {
                          const xml = await file.async('string');
                          this.loadedResources++;
                          this.resources.simulationXml = xml;
                          resolve();
                          this._notifyResourceLoaded(filePath);
                     })
                    );
                }else if (filePath == "screenshot.png") {
                    //ignore loaing screenshot for now
                    this.loadedResources++;
                } else if (ext === 'png' || ext === 'jpg' || ext === 'jpeg'|| ext === 'gif') {
                    const data = await file.async('blob');
                    const img = new Image();
                    //img.onload = () => that.onResourceLoaded();
                    let urlCreator = window.URL || window.webkitURL;
                    let imageUrl = urlCreator.createObjectURL(data);
                    img.src =imageUrl;// URL.createObjectURL(data);
                  //  document.body.appendChild(img);
                   // urlCreator.revokeObjectURL(imageUrl);
                   // console.log("loading ",filePath,data,img.src )
                    resourcePromises.push(
                        new Promise((resolve) => {
                            img.onload = () => {
                                this.loadedResources++;
                                this.resources.images[filePath] = img;
                              //  console.log("loaded ",filePath,this.resources.images[filePath] )
                                resolve();
                                this._notifyResourceLoaded(filePath);
                              
                            };
                        })
                    );
                    //simulationInfo.images.push(new framework.resources.Brush(fileName,img));
                } else if (ext === 'mp3' || ext === 'wav' || ext === 'ogg') {
                    const data = await file.async('arraybuffer');
                    resourcePromises.push(
                        new Promise((resolve) => {
                          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                          audioContext.decodeAudioData(data, (audioBuffer) => {
                            this.loadedResources++;
                            this.resources.sounds[filePath] = new Sound(filePath,this.audioContext, audioBuffer);
                            resolve(); // Resolve the promise
                            this._notifyResourceLoaded(filePath);
                          });
                        })
                      );
                    //simulationInfo.soundManager.loadSound(fileName,data);
                } else if (ext === 'text' || ext === 'txt' || ext === 'json' || ext === 'js' || ext == "xml") {
                    resourcePromises.push(
                        new Promise(async (resolve) => {
                          const fileContents = await file.async('string');
                          this.loadedResources++;
                          this.resources.files[filePath] = new framework.resources.File(filePath,fileContents);
                          resolve();
                          this._notifyResourceLoaded(filePath);
                     })
                    );
                }else{
                    console.log("unknown file ",filePath);
                    this.loadedResources++;
                }
            }
            await Promise.all(resourcePromises);
           
        } catch (error) {
            console.error('Error occurred while unzipping the file:', error);
            return null;
        }
    }

    _notifyResourceLoaded(filePath) {
       // console.log("loaded ",filePath,this.resources.images[filePath] )
       // console.log(this.loadedResources ,(this.totalResources),filePath);
        this._increaseProgress(99 * this.loadedResources / (this.totalResources));
        if (this.loadedResources === this.totalResources) {
            //this.resourceLoadedCallback(this.resources);
          //  console.log("loading complete",this.resources.images);
            // this.app.resourceManager.setResources(simulation.images,simulation.files,simulation.soundManager);
            parseSimulation(this.app, this.resources);
            this._increaseProgress(100);
        }
    }

    _increaseProgress(progress) {
       
       // console.log("Progress "+progress+"%", this.loadedResources ,this.totalResources)
        if (progress < 100) {
            //const progressBar = this.shadowRoot.getElementById("progressBar");
            const loadingText = this.shadowRoot.getElementById("loadingText");
            //progressBar.style.width = progress + '%';
            //progressBar.innerHTML = 'Loading...' +  progress.toFixed(0) + '%';
           // progressBar.style.transform = `rotate(${(progress / 100) * 360}deg)`;
            loadingText.textContent = `Loading ${progress}%`;

        } else {
            clearInterval(this.loadingInterval);
            // Hide the loading bar or perform any other actions when loading is complete
            this.shadowRoot.getElementById("loadingContainer").remove();
            if (this.showToolbar) {
                this.toolbar.style.display = 'flex';
                this.showHideButton.style.display = 'block';
                this.showInfoButton.style.display = 'block';
            }
            this._startSimulation();
        }
    }

    _startSimulation(event) {
        if(event) event.target.remove();
        this.app.start();
        this.setPaused(true);
    }



}
// Define the custom element
customElements.define('simphy-simulation', SimulationTag);
//export { SimulationTag as App }
