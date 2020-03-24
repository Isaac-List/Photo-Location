/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */

'Use strict';

class MapBuilder {
    constructor() {
        this._key = "lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24";
    }

    drawMap(divID, placeName) {
        L.mapquest.key = this._key;
        
        let map = L.mapquest.map(divID, {
            center: [0, 0],
            layers: L.mapquest.tileLayer('map'),
            zoom: 8
        });
                
        // Use geocoding feature to find place by string name
        L.mapquest.geocoding().geocode(placeName);

        // Add a zoom control
        map.addControl(L.mapquest.control());
    }
}

class PhotoCollector {
    constructor() {
        this._key = "obd0ILsne8UsmAu-ndkRrUUNSOHVymz0wfQDrMb_-VY";
    }
    
    async getImages(query) {
        let url = `https://api.unsplash.com/search/photos?client_id=${this._key}&query=${query}`;
        return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
    }
}

