import React from 'react';
import '../src/css/ottercart.css';
import Header from '../src/component/Header.jsx';
import InfoGraphic from '../src/component/InfoGraphic.jsx';
import CarbonFootPrintData from '../src/component/CarbonFootPrintData.jsx';
import Settings from '../src/component/Settings.jsx';



function App() {
  return (
    
    <div className="extensionContainer">
      <Header></Header>
      <InfoGraphic></InfoGraphic>
      <CarbonFootPrintData></CarbonFootPrintData>
      <Settings></Settings>
    </div>
  );
}

export default App;
