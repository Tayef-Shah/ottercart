var dist_centre = [
    "8050, Heritage, Road, Brampton, ON", 
    "7995, Winston, Churchill, Boulevard, Brampton, ON",
    "6363, Millcreek, Drive, Mississauga, ON"];

var shipping_address;

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [dist_centre[0], dist_centre[1], dist_centre[2]],
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
            // var duration = element.duration.value;
            // var from = origins[j];
            // var to = destinations[0];

            if(distances[j] < min){
                min = distances[j];
            }

            console.log(distance + " kms");
        }

        return min;
    }
}
