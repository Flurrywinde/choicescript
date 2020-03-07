/* Well, this function works, and style3.css almost works. But the button bar is supposed to be further down, and I can't figure out how to fix it. reset.css and removing style.css didn't help. It must be something else Dashingdon did, either in index.html or *.js files? */

function addCss(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}
