function initialize() {
  var randomLocation = generateRandomLatLng();
  var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'));
  var webService = new google.maps.StreetViewService();

  // var point = {
  //     position: randomLocation,
  //     pov: {
  //       heading: generateRandomHeading(),
  //       pitch: 0
  //     }
  // }
  var point = new google.maps.LatLng(randomLocation.lat,randomLocation.lng);

  var radius = 5000;

  console.log(randomLocation)

  reverseGeocode();
  // webService.getPanoramaByLocation(point, radius, function(data) {
  //   if(data) {
  //     if (data.location) {
  //         console.log(data.location)

  //       if (data.location.latLng) {
  //         panorama.setPano(data.location.pano);
  //         panorama.setPov({
  //           heading: generateRandomHeading(),
  //           pitch: 0
  //         });
  //         panorama.setVisible(true);
  //       }
  //     }
  //   }
  // })
}

function generateRandomLatLng() {
  var lng = Math.random() * 360 - 180;
  var lat = Math.random() * 134 - 67;
  return {
    lat: parseFloat(lat.toFixed(6)),
    lng: parseFloat(lng.toFixed(6))
  }
}

function generateRandomHeading() {
  return Math.random() * 360;
}

function reverseGeocode(lat,lng) {
  var polygon;
  $.getJSON("../countries.geo.json", function(json) {
      $.each(json.features, function(country) {
        polygon = Shapely.polygon(country.geometry.coordinates[0])
      })
  });
  
} 

$(document).ready(function() {
  initialize();
})