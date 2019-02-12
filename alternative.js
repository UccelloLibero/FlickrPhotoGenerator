// a different way of writing the same code in 'flickr.js'
// instead of creating two variables and passing them to the '$.getJSON()' function you can skip creating the variables and pass all the information directly into the '$.getJSON()' function like so:

$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", // the url
          {
            tags: animal,
            format: "json"
          }, // the data
          function(data) { // the callback function

          });
