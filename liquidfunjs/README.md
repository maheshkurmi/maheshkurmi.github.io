
liquidfun-pure-javascript
========
I just wanted to play with liquidfun and javascript as quickly as possible. 

**To get it going: just open up the `index.html` and you'll get a simple bouncing blob that will jump with any keypress.**

None of it is minified, which makes debugging a breeze. It's just so you can get up and running as quickly as possible.  I'll leave the minifying up to the reader.

Background
========
I looked *everywhere* for a simple box2d port that had readable javascript so debugging was easy, but couldn't find anything. Finally, I found [flyover's port of box2d](https://github.com/flyover/box2d.js), which also conveniently included liquidfun. 

The only downside of that was that it used google's closure compiler, which I didn't want to mess with. I therefore manually went through each file, and removed all of the closure compiler references, replacing them with non-closure equivalent javascript.

I've also included simple drawing functions onto a canvas so you can see what is happening.


**Note:**
This *also* has support for `b2ParticleSystem.GetBodyContacts`, which for some reason some ports of liquidfun don't support.