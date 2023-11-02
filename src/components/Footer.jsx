import React from 'react';
import { FaQuestionCircle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="social-media-icons">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
            </div>
            <div className="help-icon">
                <FaQuestionCircle title="
                How to register for raffle
                1.Click on an event
                2.Click on the zone
                3.Check the raflle details and click on register
                4.Wait until results have been announced
                " />
            </div>
        </footer>
    );
};

export default Footer;
