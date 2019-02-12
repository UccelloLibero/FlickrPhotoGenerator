$(document).ready(function() {
  $('button').click(function () {
    $('button').removeClass('selected');
    $(this).addClass('selected');

    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?" // the query stirng 'jsoncallback=?' tells flickr we're making jsonp request allowing to get around security limitations

    var animal = $(this).text(); // 'this' refers to the button that visitor to the page clicks -- the variable animal will hold the value of either dog cat or moose whichever is clicked thanks to 'text()' jquery method that pulls that info from html

    var flickrOptions = {
      tags: animal, // tells flickr to search for the latest photos that match a particular tag (cat, dog, moose)
      format: "json" // tells Flickr which format we want data in -- in this case JSON -- here jQuery will parse the JSON data sent back by the server so the data is actual JavaScript
    }; // data to send to flickr server, jQuery expects this to be in a format of a JavaScript object

    function displayPhotos(data) { // 'data' represents data returned by jQuery defined above
      var photoHTML = "<ul>"; // this var holds all HTML for the photos: ul, li, a and img
      // loop through each photo returned by flickr feed and create individual li items, loop through a returned array -- data.items holds an entire array of photos -- each array item is the data describing one photo form the Flickr feed

      $.each( data.items, function(i, photo) {

        photoHTML += '<li class="grid-25 tablet-grid-50">';

        photoHTML += '<a href="' + photo.link + '" class="image">'; // a href="' + photo.link + '" --href property here is: an array item named photo from above to get the links stored in that object use dot notation and use string concatenation to add literal string to the value of the property in the object and add that to another literal string

        photoHTML += '<img src="' + photo.media.m + '"></a></li>'; // inside the link add the image tag, close the a tag and close the li tag -- src property here is: another concatenation of a literal string where 'photo.media.m' will contain a path to the thumbnail image file

      }); // this method loops through an array and applies the callback function to it -- the callback function takes two arrguments 'i'-index number of the item and 'photo'-the actual item

      photoHTML += '</ul>'; // close the ul tag
      $('#photos').html(photoHTML); // add this string to the html of the page
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  }); // end anonymous function for button event handling -- this is a callback function for the click event
}); // end ready
