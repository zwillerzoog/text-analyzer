console.log("Hello world!");



$(document).ready(function() {
	$(".button").click(function(event) {
		$("dl").toggleClass("hidden");	
		var results = $("dl");
		console.log(event);
		return;
	});
	var myForm = $("form");
	console.log(myForm);
	$(document).on("submit", "form", function(event) {
		console.log(event);
		return true;
	});
});

function textInput() {
	var input = $(".input");
	return
}


