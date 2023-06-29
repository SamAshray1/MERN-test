import devops from "./images/devops.png"
import fullstack from "./images/fulls.png"
import jenkins from "./images/jenkins.png"
import spring from "./images/springboot.png"
import kuber from "./images/kuber.png"
import docker from "./images/docker.png"
import mongo from "./images/mongodb.png"
import express from "./images/express.png"
import react from "./images/react.png"
import nodejs from "./images/nodejs.png"

export default function Skills(){
    return(
        <>
        <h1 className="heading">Skills</h1>
        <hr/>
        <div className="skills">
            <div className="skill-col">
                <div className="skill-col-head">
                    <img src={devops}/>
                    <h4>DevOps Engineer</h4>
                </div>
                <p>I like DevOps engineering because it merges technology, collaboration, and continuous improvement, enabling efficient software delivery and ensuring high quality.</p>
                <div className="icons-list">
                <div className="icons">
                    <img src={spring}/>
                    <h5>Spring Boot</h5>
                </div>
                <div className="icons">
                    <img src={jenkins}/>
                    <h5>Jenkins</h5>
                </div>
                <div className="icons">
                    <img src={docker}/>
                    <h5>Docker</h5>
                </div>
                <div className="icons">
                    <img src={kuber}/>
                    <h5>Kubernetes</h5>
                </div>
                </div>
            </div>
            <div className="skill-col">
                <div className="skill-col-head">
                    <img src={fullstack} />
                    <h4>Full Stack Developer</h4>

                </div>
                
                <p>I like full-stack development because it allows me to work on both the front-end and back-end, giving me a holistic perspective and the ability to create end-to-end solutions.</p>
                <div className="icons-list">
                <div className="icons">
                    <img src={mongo}/>
                    <h5>MongoDB</h5>
                </div>
                <div className="icons">
                    <img src={express}/>
                    <h5>ExpressJS</h5>
                </div>
                <div className="icons">
                    <img src={react}/>
                    <h5>ReactJS</h5>
                </div>
                <div className="icons">
                    <img src={nodejs}/>
                    <h5>NodeJS</h5>
                </div>
                </div>

            </div>      
        </div>
        </>
        
    )
}