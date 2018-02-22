function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    var firstPart = "api.giphy.com/v1/stickers/search?q=" + searchTerm;
    var secondPart = "&api_key=dc6zaTOxFJmzC";
    var newURL = firstPart + secondPart;
    // the searchTerm provided in the parameters
    console.log(newURL);
    
}

giphyURLWithSearchTerm("food");

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    $("body").append(<>);
    // URL provided in the parameters
    
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
           // Log the whole response to the console
        //console.log(response);
           // Log the first image of the data to the console
           //console.log(response.data[0].url);
           // Log the "type" property of the first image object to the console
           //console.log(response.data[0].type);
           // Log the "title" property of the first image object to the console
           console.log(response.data[0].title);
      },
    }); 
}
callGiphyAPIWithSearchTerm("dog");