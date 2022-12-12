
(function(window) {
	var sayWord = "Hello";
	var hello = function (name) {
		console.log(sayWord + " " + name);
	}

	window.hello = hello;

})(window);