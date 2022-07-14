import React from "react";
import 'tachyons';
import './Header.css'

const Header = () => {
    return(
        <div className =' header w-100 ba br4'>
            <h1 className="topText shadow-1 ">This application uses the NASA APOD API to access the astronomy image of the day.</h1>
            
        </div>    
    );
}

export default Header;