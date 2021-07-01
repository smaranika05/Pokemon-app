import React from 'react';
import './style.css';
import Logo from './../../img/pokeball.jpg';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="left">
            Pokemon Encyclopedia
            </div>
            <div className="right">
          <img src={Logo} />
            </div>
        </div>
    );
}

export default Navbar;
