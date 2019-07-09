import React from "react";
import forestImage from './forestimage.png';

const Information = props => {
  return (
    <div className="informationContainer">
      <div className="image-Container "> 
        <img src={forestImage} alt= "forestImage " className= "forestImage "/>
      </div>
      <div className="textContainer ">
        <div className="dataContainer ">
          <div className="primaryInfo ">
            <h1>Trees Saved</h1>
            <h2>{props.treesSaved}</h2>
          </div>
          <div className="secondaryInfo ">
            <h1>Shipping Speed</h1>
            <h2>{props.shippingSpeed}</h2>
          </div>
          <div className="secondaryInfo ">
            <h1>Carbon Footprint</h1>
            <h2>{props.carbonFootPrint}</h2>
          </div>
        </div>
        <div className="shareButton ">
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
