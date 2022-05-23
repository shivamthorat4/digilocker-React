import React from "react";
import './Header.css'
import Headerlogo from '../Headerlogo.png';

const Header = () => {
    return(
    <div >
        <div className="HeaderParent">
            <img className='logo' src={Headerlogo} alt="logo" />
        </div>
        <h2>Digital Clock</h2>
    </div>
        
    );
}
export default Header;