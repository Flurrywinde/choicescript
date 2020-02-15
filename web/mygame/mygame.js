nav = new SceneNavigator(["startup"]);
stats = {};

function updateStatBar() {
	document.getElementById("quickstats").innerHTML = "Strength: "+stats["strength"]+"/100 &nbsp;&nbsp;&#8226;&nbsp;&nbsp; Leadership: "+stats["leadership"]+"/100";
	document.getElementById("quickstats").style.display = "block";
}

function hideStatBar() {
	document.getElementById("quickstats").style.display = "none";
}
