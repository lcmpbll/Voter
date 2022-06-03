$(document).ready(function() {
	$("form-id#voter").submit(function() {
	event.preventDefault
	
	const vote = $("#voter").val()
	
	
	if (vote === "over18") {
		$(".voter-info").toggle();
	} else if (vote === "under18") { 
		$(".ineligible").show();
	} else {(vote === "IDK") 
		$(".ineligible").show();
	}
	});
});







