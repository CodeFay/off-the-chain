$(document).ready(function() {

	$("#search").on("click", function(event) {
		event.preventDefault();
	})

	$("#search").on('click', function(event) {
		event.preventDefault();
		$.ajax({
			url: "http://192.168.47.82:8080/api/" + $("#choices").val(),

			method: "GET",
			success: function(data) {

			}
		})
	})
});
