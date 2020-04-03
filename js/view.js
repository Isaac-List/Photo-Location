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
                console.log(photo.user);
                // Image
                let image = document.createElement("img");
                image.setAttribute("src", photo.urls.regular);
                container.appendChild(image);
                
                // Location and user Caption
                let captionBox = document.createElement("div");
                captionBox.classList = "caption";

                let user = document.createElement("p");
                let cap = document.createElement("p");
                user.innerHTML = `Photographer: ${photo.user.name}`;
                cap.innerHTML = photo.user.location;

                captionBox.appendChild(user);
                captionBox.appendChild(cap);
                container.appendChild(captionBox);
                
                // Map
                let mapDiv = document.createElement("div");
                mapDiv.setAttribute("id", photo.id);
                mapDiv.setAttribute("class", "mapBox");
                container.appendChild(mapDiv);
                MapBuilder.drawMap(photo.id, photo.user.location);
                
                // Attach container to display area
                target.appendChild(container);
            }
        }
    }
}
