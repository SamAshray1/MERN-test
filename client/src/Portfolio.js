import './App.css';

export default function Portfolio(){
    return(
        <>
        <h1 className="heading">Portfolio</h1>
        <hr/>
        <div className="portfolio">
            <div className="portfolio-col-1">
                <h2>Education</h2>
                <div className="edu">
                <p><b>GPA:</b> 7.8</p>
                <p>Bachelors in Tech.</p>
                <p>IIIT - Tiruchirapalli <br />(2018 - 2022)</p>
                </div>
            </div>
            <div className="portfolio-col-2">
                <h2>Work Experience</h2>
                <h3>DevOps Engineer @ Optum (2022 - 2023)</h3>
                <p>I have been employed at Optum Inc. for the past year, starting as a fresh graduate. During this time, 
                    I have been actively engaged as a DevOps engineer, specializing in the management of real-time transactions. 
                    Throughout my tenure, I have gained expertise in utilizing various tools and software, including <b><i>Spring Boot Microservices, Jenkins, Kubernetes, Docker, Splunk, and Grafana</i></b> for effective monitoring. 
                    Additionally, I have leveraged virtual machines (VMs) for efficient batch processing operations.
                    <br />As a DevOps engineer, I've streamlined processes and implemented automations for <b><i>real-time and batch monitoring.</i></b> This includes generating comprehensive email reports for both systems. 
                    I've also developed Kubernetes automation scripts for seamless pod scaling and secret management. These efforts have greatly improved operational workflows, enhancing overall efficiency in our environment.</p>
            </div>
        </div>
        </>
    )
}