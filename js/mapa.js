var map;

function initMap() {
 // Create a map object and specify the DOM element for display.   
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457389199999998, lng: -71.5315308},
    zoom:14
  });
    
    var myLatLng = {lat: -16.457389199999998, lng: -71.5315308};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
 