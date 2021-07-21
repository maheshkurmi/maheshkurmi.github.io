/**
 *
 * @param dirurl url of simulation directory
 * @param canvas canvas element, must already be initialised
 * @param progresscallback callback to listen progress (igored for now)
 */
function loadSimulation(dirurl,canvas,progresscallback){
    // Assuming jQuery already loaded
    $.getScript(dirurl+"/simulation.js", function()
    {
       Simulation()(canvas,dirurl);
    });
}