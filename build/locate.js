function locate(){
    console.log('working');
    if (navigator.geolocation) {
        var location
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          location = new google.maps.LatLng(pos.lat, pos.lng);
        })
        console.log("Successful location retireival")
        return location;
    }
    else {
      handleLocationError();
    }
  }

function handleLocationError(){
    console.log('Error: The Geolocation service failed.');
    console.log('Error: Your browser doesn\'t support geolocation.');
}