/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */

'Use strict';

var myMapBuilder = new MapBuilder();
var myPhotoCollector = new PhotoCollector();
var myDisplayView = new DisplayView();

async function searchPhotos() {
    let query = document.querySelector("#searchBox").value;
    
    // Get the images
    let images = await myPhotoCollector.getImages(query);
    
    // Display the photos and maps
    myDisplayView.redrawDisplay(images.results, myMapBuilder);
}

