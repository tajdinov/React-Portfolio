import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
    <div className="footer">
        <a href="https://github.com/tajdinov"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.facebook.com/roman.tazhdynov"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/tajdinov"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://github.com/tajdinov"><FontAwesomeIcon icon={faTelegram} /></a>
    </div>
    )
};

export default Footer;