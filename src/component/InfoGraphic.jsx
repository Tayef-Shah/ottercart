import React, {Component} from 'react';
import forestImage from '../assets/png/forestimage.png';
import truckIcon from '../assets/png/truckicon.png';
class InfoGraphic extends Component {
    state = {
        truckIcon: <img src={truckIcon} alt= "truckicon " className= "truckIcon"/>,
        forestImage: <img src={forestImage} alt= "forestImage " className= "forestImage "/>,

        Location: {
            shortAmazonLocation: 'NYC',
            fullAmazonLocation: 'New York City, USA',
            shortUserLocation: 'YYZ',
            fullUserLocation: 'Toronto, Canada'
        },

        shippingSpeed: '2 Day',
        carbonFootPrint: '12 lbs in Co2',
        treesSaved: '29',
    }
    render() {
        return (
            <div className= "infoGraphicContainer">
        <div className= "locationContainer">
            <div className= "shortLocationContainer">
                <div className= "truckIconContainer">{this.state.truckIcon}</div>
                <div className= "shortUserLocation">
                    <p className= "shortLocationText ">{this.state.Location.shortUserLocation}</p>
                </div>
                <div className= "shortAmazonLocation">
                    <p className= "shortLocationText">{this.state.Location.shortAmazonLocation}</p>
                </div>
            </div>
            <div className= "longLocationContainer">
                <div className= "fullAmazonLocation">
                    <p className= "fullLocationText">{this.state.Location.fullAmazonLocation}</p>
                </div>
                <div className= "fullUserLocation">
                    <p className= "fullLocationText">{this.state.Location.fullUserLocation}</p>
                </div>
            </div>
        </div>
        <div className= "informationContainer">
            <div className= "image-Container ">{this.state.forestImage}</div>
            <div className= "textContainer ">
                <div className= "dataContainer ">
                    <div className= "primaryInfo ">
                        <h1>Trees Saved</h1>
                        <h2>{this.state.treesSaved}</h2>
                    </div>
                    <div className= "secondaryInfo ">
                        <h1>Shipping Speed</h1>
                        <h2>{this.state.shippingSpeed}</h2>
                    </div>
                    <div className= "secondaryInfo ">
                        <h1>Carbon Footprint</h1>
                        <h2>{this.state.carbonFootPrint}</h2>
                    </div>
                </div>
                <div className= "shareButton ">
                    <button>Share</button>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
export default InfoGraphic;