import about from "./images/about.jpg"

export default function About(){
    return(
        <div id="about-main">
        <h1 className="heading">About</h1>
        <hr />
        <div id="about">  
            <div id="content">
                <div id="text-content">
                    <h2>Meet a DevOps Pro with a Passion
                        <br />for Microservices and MERN Stack</h2>
                    <p>Hey there, I’m a DevOps engineer who’s been working with Microservices and Springboot for a year now. On top of that, I’m pretty handy with MERN full-stack too.<br />I love learning new things and exploring new technologies, and I’m always on the lookout for new challenges. Hit me up if you want to chat tech or just shoot the breeze!</p>
                </div>
                <div>
                <img src={about} />
                </div>
            </div>
        </div>
        </div>
    )
}