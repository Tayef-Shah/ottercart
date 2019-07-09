import React from "react";
import Location from "./Location";
import Information from "./Information";
import Geocoder from "react-native-geocoding";

class InfoGraphic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      long: "",
      errorMessage: "",
      shortAmazonLocation: "",
      fullAmazonLocation: "",
      shortUserLocation: "",
      fullUserLocation: ""
    };
  }
  // api key : AIzaSyCvtsmlkEyJKwnNVm4WsFPAow2I_TAqmRU

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
    this.setState({
      fullAmazonLocation: "New York, US",
      shortAmazonLocation: "Brooklyn"
    });
  }

  componentDidUpdate() {
    Geocoder.setApiKey("AIzaSyCrzSP_MKCS4GzpEb6JVicQncNBTv9TlIk");

    Geocoder.getFromLatLng(this.state.lat + "," + this.state.long).then(
      json => {
        this.setState({
          shortUserLocation: json.results[0].address_components[3].short_name
        });
        this.setState({
          fullUserLocation:
            json.results[0].address_components[5].long_name +
            ", " +
            json.results[0].address_components[5].short_name
        });
      }
    );
  }

  render() {
    return (
      <div className="infoGraphicContainer">
        <Location
          shortAmazonLocation={this.state.shortAmazonLocation}
          fullAmazonLocation={this.state.fullAmazonLocation}
          shortUserLocation={this.state.shortUserLocation}
          fullUserLocation={this.state.fullUserLocation}
        />
        <Information
          shippingSpeed="2 Day"
          carbonFootPrint="12 lbs in Co2"
          treesSaved="29"
        />
      </div>
    );
  }
}
export default InfoGraphic;
