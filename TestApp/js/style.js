export const style = `
   
<style>

/* CSS for the app canvas container*/
.app-container {
  margin: 0;
  padding: 0;
  position: relative;
  border: 1px groove;
  width:100%
  height: 100%;
}

.app-canvas {
  position: relative;
  /*display: inline;*/
  touch-action: none;
  border: none;
  width: 100%;
  height: 100%;
}

/* CSS for the expand button and toolbar */
.app-toolbar {
  touch-action: none;
  /* z-index:1; */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);

  color: #666;
  border: none;
  padding: 1px;
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 5px 5px;
}

.app-toolbar.expanded {
  display: flex;
}

.toolbar-button {
  background: none;
  border: none;
  cursor: pointer;
  touch-action: none;
  color: #aaa;
  margin: 0px;
  border-radius: 5px 5px 5px 5px;
  transition: background-color 0.2s ease-in-out;
}

.showtool-button {
  /* z-index:1; */
  position: absolute;
  bottom: 0px;
  right: 30px;
  margin: 0px;
}
.showinfo-button {
  /* z-index:1; */
  // border-radius:0px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin: 0px;
}

button:hover {
  background-color: rgba(255, 128, 0, 0.7);
  color: #eee;
}

.logo {
  /* z-index:1; */
  // border-radius:0px;
  background: rgba(200, 200, 200, 0.7);
  color: #222;
  border: none;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0px;
  padding: 2px;
  display: flex;
  cursor: default;
}

/* Styles for the loading container */
.loading-container {
  width: 160px;
  height: 160px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.loading-bar {
  width: 100%;
height: 100%;
border: 12px solid #ee7e21;
border-top: 12px solid #0d5283;
border-radius: 50%;
animation: spin 2s linear infinite;
position: absolute;
 
}

.loading-text {
  font-size:18px;
  color: #0d5283;
}


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Styles for the container */
.popup-container {
  position: relative;
  width: 75%;
  margin: 0 auto;
  padding: 20px;
}

/* Styles for the overlay */
.overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* Styles for the popup */
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
  font-size:13px;
}

/* Styles for the title bar */
.title-bar {
  // background-color: #007bff;
  // color: white;
  // padding: 10px;
  display: flex;
  top: 1px;
  margin-top: 0.2em;
  margin-bottom: 0.4em;
  //padding:2px;
  // justify-content: space-between;
}

/* Styles for the close button */
.close-button {
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  top: 0px;
  display: flex;
  right: 0px;
}


</style>`;