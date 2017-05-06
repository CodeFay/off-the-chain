$(document).ready(function() {

	$("#search").on("click", function(event) {
		event.preventDefault();
		console.log()
	})

	$("#search").on('click', function(event) {
		event.preventDefault();
		$.ajax({
			url: "http://192.168.47.82:8080/" + $("#choices").val(),
			method: "GET",
			success: function(data) {
			}
		})
	})
});
