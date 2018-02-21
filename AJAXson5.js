<<<<<<< HEAD
function fetchAndDisplayGif(callback) {
	$.ajax({
		url: gif_output,
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The GIF DB!");
			console.log(response);

			var movies = response.results;
			model.browseItems = movies;

			callback();
		}
	});
}

$(document).ready(function() {
    // register our function as the "callback" to be triggered by the form's submission event
    $("#form-gif-request").submit(fetchAndDisplayGif); // in other words, when the form is submitted, fetchAndDisplayGif() will be executed
});

function fetchAndDisplayGif(event) {
    
    // This prevents the form submission from doing what it normally does: send a request (which would cause our page to refresh).
    // Because we will be making our own AJAX request, we dont need to send a normal request and we definitely don't want the page to refresh.
    event.preventDefault();
    var verify_gif = "";
    var search_gif = "";

    verify_gif = $("#verify_robot").val();
    console.log(verify_gif);

    if (verify_gif == "5"){
        $("#wrong").text("");
        search_gif = $("#gif_name").val();

        var params = { 
            api_key: "dc6zaTOxFJmzC", 
            tag : "jackson 5 "+ search_gif
        };
        
        // make an ajax request for a random GIF
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/random",
            data: params,
            success: function(response) {
                
                console.log("we received a response!");
                console.log(response);
                
                var image_url = response.data.image_url;
                console.log(image_url);
                
                $("#gif").attr("src", image_url);
                setGifLoadedStatus(true);
                $("#gif").show(); //Why do we need this?
    
            },
            error: function() {
                // if something went wrong, the code in here will execute instead of the success function
                // give the user an error message
                $("#feedback").text("Sorry, could not load GIF. Try again!");
                setGifLoadedStatus(false);
            }
        });
        $("#feedback").text("Loading...");
    }else{
        $("#feedback").text("");
        $("#wrong").text("No GIFs for you!");
        setGifLoadedStatus(false);
    }

    // TODO
    // give the user a "Loading..." message while they wait
    
}

function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
=======
function fetchAndDisplayGif(callback) {
	$.ajax({
		url: gif_output,
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The GIF DB!");
			console.log(response);

			var movies = response.results;
			model.browseItems = movies;

			callback();
		}
	});
}

$(document).ready(function() {
    // register our function as the "callback" to be triggered by the form's submission event
    $("#form-gif-request").submit(fetchAndDisplayGif); // in other words, when the form is submitted, fetchAndDisplayGif() will be executed
});

function fetchAndDisplayGif(event) {
    
    // This prevents the form submission from doing what it normally does: send a request (which would cause our page to refresh).
    // Because we will be making our own AJAX request, we dont need to send a normal request and we definitely don't want the page to refresh.
    event.preventDefault();
    var verify_gif = "";
    var search_gif = "";

    verify_gif = $("#verify_robot").val();
    console.log(verify_gif);

    if (verify_gif == "5"){
        $("#wrong").text("");
        search_gif = $("#gif_name").val();

        var params = { 
            api_key: "dc6zaTOxFJmzC", 
            tag : "jackson 5 "+ search_gif
        };
        
        // make an ajax request for a random GIF
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/random",
            data: params,
            success: function(response) {
                
                console.log("we received a response!");
                console.log(response);
                
                var image_url = response.data.image_url;
                console.log(image_url);
                
                $("#gif").attr("src", image_url);
                setGifLoadedStatus(true);
                $("#gif").show(); //Why do we need this?
    
            },
            error: function() {
                // if something went wrong, the code in here will execute instead of the success function
                // give the user an error message
                $("#feedback").text("Sorry, could not load GIF. Try again!");
                setGifLoadedStatus(false);
            }
        });
        $("#feedback").text("Loading...");
    }else{
        $("#feedback").text("");
        $("#wrong").text("No GIFs for you!");
        setGifLoadedStatus(false);
    }

    // TODO
    // give the user a "Loading..." message while they wait
    
}

function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
>>>>>>> 6dac433338f4f5f2f03260a84c1975113b072633
}