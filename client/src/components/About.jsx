import React from "react";
import "../about.css"

function About(){
    return(
    <div className="about" id="About">
        <div className="about-box">
          <div className="know-me">
            <h2>Get to know me!</h2>
            <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
            <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.</p>
            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            <form action="mailto: samuelthegamer12@gmail.com">
              <button className="contact" type="submit">CONTACT ME</button>
            </form>
          </div>
          <div className="skills">
            <h2>My Skills</h2>
            <h3>Programming Languages</h3>
            <ul>Python</ul>
            <ul>Java</ul>
            <ul>Javascript</ul>
            <ul>C/C++</ul>
            <h3>DevOps Tools</h3>
            <ul>Kubernetes</ul>
            <ul>Jenkins</ul>
            <h3>Front-End</h3>
            <ul>HTML/CSS</ul>
            <ul>React</ul>
            <h3>Back-End</h3>
            <ul>NodeJS</ul>
            <ul>ExpressJS</ul>
            <ul>Springboot</ul>
            <h3>DBMS</h3>
            <ul>MySQL</ul>
            <ul>MongoDB</ul>
          </div>
        </div>
    </div>
    )
}

export default About;