
function initMap() {
    var options = {
      zoom: 15,
      center: { lat: 40.650002, lng: -73.949997 }, // brooklyn coordinates @ 11229
    };
    const map = new google.maps.Map(document.getElementById('map'), options);
    const geocoder = new google.maps.Geocoder();
    document.getElementById('submit').addEventListener('click', () => {
      geocodeAddress(geocoder, map);
    });
  }
  function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById('address').value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
          icon: 'icons/paw_icon_smaller.png',
          animation: google.maps.Animation.BOUNCE,
          draggable: true,
          // 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        });
        // var marker = new google.maps.Marker;
        var infoWindow = new google.maps.InfoWindow({
          content: '<h1>iSeePets</h1>',
        });
        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }