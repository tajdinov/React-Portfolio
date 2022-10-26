import React from "react";
import avatar from "../assets/avatar.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
    return (
        <div className="container aboutContainer">
            <LazyLoadImage src={avatar} alt="Avatar" width={600} className="avatar" />
            <p className="aboutMeText justify-content-evenly col-lg-9 col-xm-12"> 
            Aspiring full-stack web developer utilising marketing and business background to build a more intuitive user experience on the web. <br></br>
            <br></br>
            Proficient and knowledgeable in JavaScript, CSS, Web-APIs, Express, SQL, NoSQL, PWA, React, Bootstrap and Database Construction. <br></br>
            <br></br>
            With years of business experience I have developed into a lateral thinker, a highly proficient team leader and an excellent communicator, capable working with others or individually. 
            I am eager to use all my previous experiences to help deliver desirable outcomes for any project I undertake.  <br></br>
            <br></br>
            Excited to apply my knowledge and understanding of current and forthcoming technologies, my mantra as a lifelong learner and positive attitude towards challenging tasks to enter a new fast paced, action-oriented industry where I will be able to work and help deliver customer oriented outcomes that exceed expectations.
            </p>
         </div>
         
         )};

export default Home;
