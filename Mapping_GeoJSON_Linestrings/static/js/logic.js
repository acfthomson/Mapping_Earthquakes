// Create the tile layer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: API_KEY
});

// Create the tile layer that will be the background of the map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mapbox/dark-v10'
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level, and default layer
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [streets]
});

// Accessing the Toronto airline routes GeoJSON URL
let torontoData = 'https://github.com/acfthomson/Mapping_Earthquakes/blob/main/torontoRoutes.json';

// Grab GeoJSON data
d3.json(torontoData).then(function(data) {
    console.log(data);

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  color: 'ffffa1',
  weight: 2,
  onEachFeature: function(feature, layer) {
    layer.bindPopup('<h3> Airline: ' + feature.properties.airline + '</h3> <hr><h3> Destination:'
    + feature.properties.dst + '</h3>');
  }
})
.addTo(map);
});