import pic from "./images/pic.jpeg"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"
import twitter from "./images/twitter.png"

export default function Greeting(){
    return(
        <div className="greeting">
            <div className="greet-content">
                <h1>Hi! I'm Sam Ashray</h1>
                <p>I am a DevOps engineer with 1 year of experience in Microservices with Springboot
                and am skilled in MERN full-stack.</p>
                <div className="social-icons">
                    <a href="https://github.com/SamAshray1" target="_blank"><img src={github} /></a>
                    <a href="https://www.linkedin.com/in/sam-ashray-a65398187/" target="_blank"><img src={linkedin} /></a>
                    <a href="https://twitter.com/ashray_sam" target="_blank"><img src={twitter} /></a>
                </div>
                {/* <button>Learn More</button> */}
            </div>
            <img src={pic} />
            {/* <div className="scroll" /> */}
        </div>
    )
}