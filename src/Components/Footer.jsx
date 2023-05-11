import React from "react";

const Footer = () => {

    return(
        <footer>
                <p>@2023 Digital Booking</p>
            <div className="footer-container">
                <img className= "footer-icon" src={window.location.origin + "/images/facebook.png"} alt="logo-facebook"/>
                <img className= "footer-icon" src={window.location.origin + "/images/linkedin.png"} alt="logo-linkedin"/>
                <img className= "footer-icon" src={window.location.origin + "/images/twitter.png"} alt="logo-twitter"/>
                <img className= "footer-icon" src={window.location.origin + "/images/instagram.png"} alt="logo-instagram"/>
            </div>
            
        </footer>
    )
}

export default Footer;