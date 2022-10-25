import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
    <div className="footer">
        <a href="https://github.com/tajdinov" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.facebook.com/roman.tazhdynov" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/tajdinov" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
    )
};

export default Footer;