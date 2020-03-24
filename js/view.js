/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */

'Use strict';

class DisplayView {
    // Redraw "display" div contents    
    redrawDisplay(photosJSON, MapBuilder, message) {
        let target = document.querySelector("#display");
        target.innerHTML = "";
        
        for (const photo of photosJSON) {
            let container = document.createElement("div");
            container.classList = "container, images";
            
            // Only display image&map if a location is available
            if (photo.user.location != null) {
                // Image
                let image = document.createElement("img");
                image.setAttribute("src", photo.urls.regular);
                image.setAttribute("style", "width: 300px;");
                container.appendChild(image);
                
                // Create a map
                let mapDiv = document.createElement("div");
                mapDiv.setAttribute("id", photo.id);
                mapDiv.setAttribute("class", "mapBox");
                container.appendChild(mapDiv);
                
                // Attach container to display area
                target.appendChild(container);
            }
        }
        
        for (const photo of photosJSON) {
            if (photo.user.location != null) {
                MapBuilder.drawMap(photo.id, photo.user.location);
            }
        }
    }
}
