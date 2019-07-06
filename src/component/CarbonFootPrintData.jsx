import React, {Component} from 'react';
import {ReactComponent as CarbonFootPrintVisualLightGreen} from '../assets/svg/carbonfootprintvisuallightgreen.svg';
class CarbonFootPrintData extends Component {
    state = {
        shoppingCart: {
            numberOfItem: 0,
            item1: 'Oreo Game of Thrones',
            item2: 'Game of Thrones Season 7',
            item3: 'Game of Thrones Season 8',
            item4: 'Game of Thrones Season 9'
        }
    }
    render() {
        return (
            <div class="carbonFootPrintContainer ">
        <div class="title">
            <h1>Estimated Total-Carbon Footprint</h1>
        </div>
        <div class="carbonDataContainer">
            <div className="carbonInformationContainer">
                <div class="shoppingCartContainer">
                    <ul>
                        <li>{this.state.shoppingCart.item1}</li>
                        <li>{this.state.shoppingCart.item2}</li>
                        <li>{this.state.shoppingCart.item3}</li>
                        <li>{this.state.shoppingCart.item4}</li>
                    </ul>
                </div>
                <div class="visualDataContainer">
                    <ul className="item1Visual">
                        <li>
                            <ul className="inLineList">
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="item2Visual">
                        <li>
                            <ul className="inLineList">
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="item3Visual">
                        <li>
                            <ul className="inLineList">
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="item4Visual">
                        <li>
                            <ul className="inLineList">
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                                <li >
                                    <CarbonFootPrintVisualLightGreen className="CarbonFootPrintVisualLightGreen"></CarbonFootPrintVisualLightGreen>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className= "pageNav">
                <ul className="inLineList">
                    <li>
                        <span className="dot active"></span>
                    </li>
                    <li>
                        <span className="dot"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
    }
}
export default CarbonFootPrintData