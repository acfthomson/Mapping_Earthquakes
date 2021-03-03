// Create the map object with center at San Francisco airport
let map = L.map('mapid').setView([30, 30], 2);

// Create the tile layer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add the 'graymap' tile layer to the map
streets.addTo(map);

// Accessing airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/acfthomson/Mapping_Earthquakes/main/majorAirports.json";

// Grab GeoJSON data
d3.json(airportData).then(function(data) {
  console.log(data);

  // Create a GeoJSON layer with retrieved data
  L.geoJson(data).addTo(map);
});