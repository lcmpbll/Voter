$(document).ready(function() {
  $("#formOne").submit(function(event) {
		event.preventDefault();
		const vote = parseInt($("#voter").val());
		
		if (vote < 2) {
			$(".voter-info").show();
			$(".ineligible").hide();
		} else if ( vote >= 2) {
			$(".ineligible").show();
			$(".voter-info").hide();
		}
	});
});
	
		

		
	
	




