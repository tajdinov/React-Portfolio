import React from "react";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';




const Portfolio = () => {
    VanillaTilt.init(document.querySelectorAll(".box"),
{
    max: 25,
    speed: 400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 500,
    transition: true
});
    return (
<div className="wrapper">
    <div className="box">
        <div className="description">
            <h2>Project 1</h2>
            <p>some text</p>
            <ul className="list">
                <li><a href="https://github.com/tajdinov"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>Project 2</h2>
            <p>some text</p>
            <ul className="list">
                <li><a href="https://github.com/tajdinov"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>Project 3</h2>
            <p>some text</p>
            <ul className="list">
                <li><a href="https://github.com/tajdinov"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>Project 4</h2>
            <p>some text</p>
            <ul className="list">
                <li><a href="https://github.com/tajdinov"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>Project 5</h2>
            <p>some text</p>
            <ul className="list">
                <li><a href="https://github.com/tajdinov"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>Project 6</h2>
            <p>some text</p>
            <ul className="list">
                <li><a href="https://github.com/tajdinov"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </div>
    </div>
</div>
)};

export default Portfolio;
