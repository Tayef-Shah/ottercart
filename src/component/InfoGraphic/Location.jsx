import React from "react";
import truckIcon from "./truckicon.png";

const Location = props => {
  return (
    <div className="locationContainer">
      <div className="shortLocationContainer">
        <div className="truckIconContainer">
          <img src={truckIcon} alt="truckicon " className="truckIcon" />
        </div>
        <div className="shortUserLocation">
          <p className="shortLocationText ">{props.shortUserLocation}</p>
        </div>
        <div className="shortAmazonLocation">
          <p className="shortLocationText">{props.shortAmazonLocation}</p>
        </div>
      </div>
      <div className="longLocationContainer">
        <div className="fullAmazonLocation">
          <p className="fullLocationText">{props.fullAmazonLocation}</p>
        </div>
        <div className="fullUserLocation">
          <p className="fullLocationText">{props.fullUserLocation}</p>
        </div>
      </div>
    </div>
  );
};



export default Location;
