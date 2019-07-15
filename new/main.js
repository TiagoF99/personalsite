 
/*
 function load() {
 	var iters = 2;
 	for (i = 0; i < iters; i++) {
 		setTimeout(function(){
 			document.getElementById("one").style.display = "block";
		 	document.getElementById("two").style.display = "none";
		 	document.getElementById("three").style.display = "none";
 		}, 20000);
	 	setTimeout(function(){}, 1000);
	 	document.getElementById("one").style.display = "none";
	 	document.getElementById("two").style.display = "block";
	 	document.getElementById("three").style.display = "none"
	 	setTimeout(function(){}, 1000);
	 	document.getElementById("one").style.display = "none";
	 	document.getElementById("two").style.display = "none";
	 	document.getElementById("three").style.display = "block";
 	}

 	document.getElementById("load-screen").style.display = "none";
	document.getElementById("main").style.display = "block";
	document.getElementById("projects").style.display = "block";


 }
 */


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