/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */

'Use strict';

class MapBuilder {
    constructor() {
        this._key = "lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24";
    }
    
    async getLatLong(placeName) {
        let url = `http://open.mapquestapi.com/geocoding/v1/address?key=${this._key}&location=${placeName}`;
        return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    async drawMap(divID, placeName) {
        L.mapquest.key = this._key;
        
        // this is using the openStreetMap data, there's also a mapquest one
        let latlong = await this.getLatLong(placeName);
        let lat = latlong.results[0].locations[0].latLng.lat;
        let lon = latlong.results[0].locations[0].latLng.lng;
        
        let map = L.mapquest.map(divID, {
            center: [lat, lon],
            layers: L.mapquest.tileLayer('map'),
            zoom: 8
        });
        
        let caption = document.createElement("p");
        caption.innerHTML = placeName;
        document.querySelector(`#${divID}`).appendChild(caption);
                
        // Use geocoding feature to find place by string name
        // Don't use if > 1 map, it messes things up :(
        // L.mapquest.geocoding().geocode(placeName);

        // Add a control to the map -- Don't really need this
        // map.addControl(L.mapquest.control());
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

