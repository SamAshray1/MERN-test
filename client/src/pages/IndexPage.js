import About from "../About";
import Contact from "../Contact";
import Greeting from "../Greeting";
import Portfolio from "../Portfolio";
import Skills from "../Skills";

export default function IndexPage(){
    return(
        <>
        <Greeting />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        </>
    )
}