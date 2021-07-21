Steps
1. Host this folder somewhere on server
2. Run simloader.html as an example
3. You will see 3 buttons, clicking on each will load simulation to canvas

You can assume 'simloader.html' as the html that contains canvas where simulation needed to be loaded.

Just add 'sdk.js' script to html(assume that it is always loaded whenever wave platform initialises on the page) and call 'loadsimulation(url, canvas)' function whenever you want to load simulation to the canvas.

Note:
 1. It is assumed that jquery is there (We need it to load scripts asynchronously)
 2. This is just an initial rough test where there is no option to unload or reload simulation
 3. We create this as a proof of concept for embedding simulations in your wave platform by adding just couple of lines of code



