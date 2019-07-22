 /* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("projects").style.display = "none";

}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("projects").style.display = "block";
}

function moreinfoclk() {
	this.blur();
	closeNav();
}