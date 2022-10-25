import React from "react";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    VanillaTilt.init(document.querySelectorAll(".icon"),
    {
      max: 25,
      speed: 400,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 500,
      transition: true
    });
    return (
    <div className="footer">
        <a className="icon" href="https://github.com/tajdinov" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a className="icon" href="https://www.facebook.com/roman.tazhdynov" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a className="icon" href="https://www.instagram.com/tajdinov" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
    )
};

export default Footer;