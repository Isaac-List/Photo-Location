/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */

'Use strict';

class MapBuilder {
    constructor() {
        this._MapQuestKey = "lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24";
        this._OpenCageKey = "7b2368f168b44a6c9aa6f23338b4f60c";
    }
    
    async getLatLong(placeName) {
        let url = `https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=${this._OpenCageKey}`;
        return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    async drawMap(divID, placeName) {
        L.mapquest.key = this._MapQuestKey;
        
        // this is using the OpenCage geocoding API
        let latlong = await this.getLatLong(placeName);
        let lat = latlong.results[0].geometry.lat;
        let lon = latlong.results[0].geometry.lng;
        
        // This is using the MapQuest map drawing API
        let map = L.mapquest.map(divID, {
            center: [lat, lon],
            layers: L.mapquest.tileLayer('map'),
            zoom: 8
        });
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

