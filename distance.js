var shipping_address = new google.maps.LatLng(55.930385, -3.118425);
var dist_centre1 = new google.maps.LatLng(50.087692, 14.421150);
var dist_centre2 = new google.maps.LatLng(50.087692, 14.421150);
var dist_centre3 = new google.maps.LatLng(50.087692, 14.421150);

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [dist_centre1, dist_centre2, dist_centre3],
    destinations: [shipping_address],
    travelMode: 'DRIVING',
    //drivingOptions: DrivingOptions, could provide driving details to give range on estimate
    unitSystem: google.maps.UnitSystem.METRIC,
  }, callback);

  function callback(response, status) {
    if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;
    
        var results;
        var element;
        var distances = int[3];
        var min = response.rows[0].elements.distance.value;
        for (var j = 0; j < results.length; j++) {
            results = response.rows[j].elements;
            element = results[j];
            var distance = element.distance.value;
            distances[j] = distance;
            var duration = element.duration.value;
            var from = origins[j];
            var to = destinations[0];

            if(distances[j] < min){
                min = distances[j];
            }

            console.log(distance + " kms");
        }

        return min;
    }
}
