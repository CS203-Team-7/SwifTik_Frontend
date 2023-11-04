import React from 'react';
import { FaQuestionCircle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/footer.css';

const Footer = () => {

    const handleHelpClick = () => {
        alert("How to register for raffle\n1. Click on an event\n2. Click on the zone\n3. Check the raflle details and click on register\n4. Wait until results have been announced");
    }

    return (
        <footer>
            <div className="social-media-icons">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
            </div>
            <div className="help-icon" onClick={handleHelpClick}>
                <FaQuestionCircle />
            </div>
        </footer>
    );
};

export default Footer;
