/* Well, this function works, and style3.css almost works. But the button bar is supposed to be further down, and I can't figure out how to fix it. reset.css and removing style.css didn't help. It must be something else Dashingdon did, either in index.html or *.js files? */

/* Ok, narrowed it down. Not in index.html. It's ui-noanim.js, but too complicated to investigate further. Giving up on this. Next step: get his other themes. See if they also use ui-noanim.js, but if so, they may still work with the regular ui.js since the buttons are at the top like normal. */

/* If wish to resume this investigation, use web/mygame/donstyle3.html. It will play the game using style3.css and work fine other than the buttons being in the wrong place. */

/* web/mygame/index.html has been changed to also have the problem (plus has a <link> with id="dark-mode" after </body> but this was part of an experiment and can be removed now.). See if it goes away by using ui-noanim.js. */

function addCss(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}
