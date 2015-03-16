/* google maps -----------------------------------------------------*/
// google.maps.event.addDomListener(window, 'load', initialize);

function init_map() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(41.204584, -8.574092);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 16
  };
  
  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};

google.maps.event.addDomListener(window, 'load', init_map);

/* end google maps -----------------------------------------------------*/