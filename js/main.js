$(document).ready(function() {

	$("#search").on("click", function(event) {
		event.preventDefault();
	});

	$("#search").on('click', function(event) {
		event.preventDefault();
		$.ajax({
			url: "http://192.168.47.82:8080/api/" + $("#choices").val(),
			method: "GET",
			success: function(data) {
				console.log(data);
				for(var i = 0; i < 5; i++) {
					var restaurant = data[i];
					var name = restaurant.name;
					var url = restaurant.url;
					var image = restaurant.image_url;
					var rating = restaurant.rating;
					var price = restaurant.price;
					var icon = "<img src='" + image + "' class='icon' alt ='image of" + name + "'>";
					var searchMsg = "Best Authentic Spots in H-Town:<br><br><br>";
					var html = "<div class='col-sm-6'>" + icon + "</div><div class='col-sm-6'>" + name + " <a href='" + url + "' target='blank'> (view Yelp)</a><br>" + "<span id=''>Rating: " + rating + "</span> " + "<span id=''>Price: " + price + "</span>" + "</div>";

					$(".restaurant").html(searchMsg + html);
				}
			}
		});
	});
});
