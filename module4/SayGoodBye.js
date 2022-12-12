
(function(window) {
	var sayWord = "Good Bye";
	var bye = function (name) {
  		console.log(sayWord + " " + name);
	}
	
	window.bye = bye;

})(window);