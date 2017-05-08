$(document).ready(function() {

    $("#search").on("click", function(event) {
        event.preventDefault();
    });

    $("#search").on('click', function(event) {

        event.preventDefault();
        $.ajax({
            url: "http://10.1.40.77:8080/api/" + $("#choices").val(),
            method: "GET",
            success: function(data) {
                $(".restaurant").html('');
                // var searchMsg = "Best Authentic Spots in H-Town:<br><br><br>";
                // $(".restaurant").append(searchMsg);
                for (var i = 0; i < 5; i++) {
                    var restaurant = data[i];
                    var name = restaurant.name;
                    var url = restaurant.url;
                    var image = restaurant.image_url;
                    var reviews = restaurant.review_count;
                    var rating = restaurant.rating;
                    var ratingLink = 'assets/regular/regular_' + rating*10 + '.png';
                    var price = restaurant.price;
                    var icon = "<img src='" + image + "' class='icon' alt ='image of" + name + "'>";
                    // Add yelp logo and rating system
                    var html = "<div class='col-sm-4' style='padding:10px;'></div>" +
                    "<div class='col-sm-2' style='padding:10px;'>" + icon +
                    "</div><div class='col-sm-6' style='text-align: left; padding: 10px;'>" +
                    " <a href='" + url + "' target='blank'><span class ='names'>"+name + "  " + price + "</span>" +
                    "<img src ='assets/Yelp_burst_positive_RGB.png' class='trademark img-fluid'/></a><br>" +
                    "<img src='" + ratingLink + "' class='img-fluid'>" + "   " + reviews + " reviews<br>" +
                    "</div><div class='clearfix visible-sm visible-md visible-lg'></div>";
                    $(".restaurant").append(html);
                }

            }
        });
    });
});
