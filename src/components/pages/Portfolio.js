import React from "react";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import project1 from "../../assets/screenshot.png";
import project2 from "../../assets/Screenshot-main.jpeg";
import project3 from "../../assets/users.png";
import project4 from "../../assets/download.png";
import project5 from "../../assets/main.png";
import project6 from "../../assets/welcome.png";



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
            <h2>Character Generator</h2>
            <img className="preview" src={project1} alt="DND" />
            <p>This is a full stack web application that creates, updates, reads, and deletes a DnD Character.</p>
            <div className="gLink" >
            <a href="https://github.com/SamMarch/DnD-Character-Generator.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>YouTrailer</h2>
            <img className="preview" src={project2} alt="YouTrailer" />
            <p>YouTrailer is a library of trailers for different types of entertainment, whether it is movies, tv shows, video games or other sources of video entertainment.</p>
            <div className="gLink">
            <a href="https://carolinemae.github.io/YouTrailer/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>Social Network API</h2>
            <img className="preview" src={project3} alt="Social-Network-API" />
            <p>API for a social network web application where users can share thoughts, react to thoughts, and create a friend list.</p>
            <div className="gLink">
            <a href="https://github.com/tajdinov/Social-Network-API.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>PWA Text Editor</h2>
            <img className="preview" src={project4} alt="PWA-Text-Editor" />
            <p>Single page text editor that runs in the browser as well as offline.</p>
            <div className="gLink">
            <a href="https://github.com/tajdinov/PWA-Text-Editor.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>Tech Blog</h2>
            <img className="preview" src={project5} alt="Tech-Blog" />
            <p>CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>
            <div className="gLink">
            <a href="https://github.com/tajdinov/Tech-Blog.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    </div>
    <div className="box">
        <div className="description">
            <h2>Employee-Tracker</h2>
            <img className="preview" src={project6} alt="SQL-Employee-Tracker" />
            <p> Command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.</p>
            <div className="gLink">
            <a href="https://github.com/tajdinov/Employee-Tracker.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    </div>
</div>
)};

export default Portfolio;
