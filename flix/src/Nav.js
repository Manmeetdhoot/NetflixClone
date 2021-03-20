import React, { useEffect, useState } from 'react';
import  "./Nav.css"; 

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 50) {
            handleShow(true);
        }else {
            handleShow(false);
        }
    }

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, [])


    return(
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">

            <img  className="nav_logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="" />

            <img className='nav_avatar'
            src="https://ih1.redbubble.net/image.618410910.2644/flat,750x,075,f-pad,750x1000,f8f8f8.u12.jpg" alt="" />
            </div>
        </div>
    );
}

export default Nav;
