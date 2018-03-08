function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    var newURL = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    return newURL;
}

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('body').append('<img src=' + srcURL + '>'); 
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    // use the giphyURLWithSearchTerm function to customize the url below
    var giphyURL = giphyURLWithSearchTerm(searchTerm);
    console.log(giphyURL);
    $.ajax({
      url: giphyURL,
      method: "GET",
      success: function(response) {
           console.log("we made it");
          if (response.data.length > 10) {
           var maximum = 10;
           } else {
               var maximum = response.data.length;
           }
           for (var i = 0; i < maximum; i++) {
           var url = response.data[i].images.original.url;
           appendImageToBody(url); 
           }
          
      },
    }); 
}

//Add a click handler below to call the function when the button is clicked
$("button").click(function() {
    var userInput = $("input").val();
    callGiphyAPIWithSearchTerm(userInput);
});
