import React from "react";
import { useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import project1 from "../../assets/screenshot.png";
import project2 from "../../assets/Screenshot-main.jpeg";
import project3 from "../../assets/users.png";
import project4 from "../../assets/download.png";
import project5 from "../../assets/main.png";
import project6 from "../../assets/welcome.png";
import project7 from "../../assets/recordstore.png";



const Portfolio = () => {
    VanillaTilt.init(document.querySelectorAll(".box"),
{
    max: 25,
    speed: 400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 500,
    transition: true
});

const [projects,setProjects] = useState([
    { title: 'Character Generator', body: 'This is a full stack web application that creates, updates, reads, and deletes a DnD Character.', image: project1, link: 'https://github.com/SamMarch/DnD-Character-Generator.git', id: 1 },
    { title: 'YouTrailer', body: 'YouTrailer is a library of trailers for different types of entertainment, whether it is movies, tv shows, video games or other sources of video entertainment.', image: project2, link: 'https://carolinemae.github.io/YouTrailer/', id: 2 },
    { title: 'Social Network API', body: 'API for a social network web application where users can share thoughts, react to thoughts, and create a friend list.', image: project3, link: 'https://github.com/tajdinov/Social-Network-API.git', id: 3 },
    { title: 'PWA Text Editor', body: 'Single page text editor that runs in the browser as well as offline.', image: project4, link: 'https://github.com/tajdinov/Social-Network-API.git', id: 4 },
    { title: 'Tech Blog', body: 'CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.', image: project5, link: 'https://github.com/tajdinov/Tech-Blog.git', id: 5 },
    { title: 'Employee-Tracker', body: "Command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.", image: project6, link: 'https://github.com/tajdinov/Employee-Tracker.git', id: 6 },
    { title: 'Record-Store', body: "An e-commerce store for people who love music, DJs, collectors and those who just want to be on track with the latest news.", image: project7, link: 'https://github.com/tajdinov/Record-Store.git', id: 6 },

])

    return (
        
<div className="wrapper">
    {projects.map((project) => (
        <div className="box" key={project.id}>
        <div className="description">
            <h2>{project.title}</h2>
            <LazyLoadImage className="preview" src={project.image} alt={project.title} />
            <p>{project.body}</p>
            <div className="gLink" >
            <a href={project.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    </div>
    ))}
</div>
)};

export default Portfolio;
