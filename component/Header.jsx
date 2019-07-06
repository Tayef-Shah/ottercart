import React, { Component } from 'react';
import  OtterCartHeaderLogo from '../assets/png/ottercartheaderlogo.png';
import ShoppingCart from '../assets/png/shoppingcart.png';
class Header extends Component{    
    render() {        
        return (        
    <header>
        <div className='flexbox headerContainer thin-border-black'>
            <div>
                <img src={OtterCartHeaderLogo} alt="OtterCartHeaderLogo" className= "otterCartLogo "/>
            </div>
            <div>
                <img src={ShoppingCart} alt= "shoppingcartlogo " className= "shoppingCart "/>
            </div>
        </div>
    </header>        
    )   
    }
}
     export default Header;