$(document).ready(function() {
  $("#formOne").submit(function(event) {
		event.preventDefault();
		const vote = parseInt($("#voter").val());
		
		if (vote < 2) {
			$(".voter-info").show();
		} else {
			$(".ineligible").show();
		}
	});
});
	
		

		
	
	




