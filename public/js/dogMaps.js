
//mbr -- inital google maps starter code --->
function initMap() {
  var options = {
    zoom: 15,
    center: { lat: 40.81636365365144, lng: -73.94513511743207 }, // Manhattan coordinates 10001: 40.81636365365144, -73.94513511743207
  };
  const map = new google.maps.Map(document.getElementById("map"), options);
  const geocoder = new google.maps.Geocoder();
  document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });
}
function geocodeAddress(geocoder, resultsMap) {
  const address = document.getElementById("owners_address").value;
  geocoder.geocode({ owners_address: address }, (results, status) => {
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
        icon: "public/css/..",
        animation: google.maps.Animation.BOUNCE,
        draggable: true,
        // 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      });
      // var marker = new google.maps.Marker;
      var infoWindow = new google.maps.InfoWindow({
        content: "<h1>Dogslist</h1>",
      });
      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    } else {
      alert("Geocode was not successful: " + status);
    }
  });
}
