import {Link} from "react-router-dom";
import logo from "./images/logo.png";

export default function Header(){
    return(
        <header>
            <Link to="/" className="logo">Sam.Ashray</Link>
            {/* <a href="/" className="logo">
              <img src={logo} />
            </a> */}
            <nav>
                <a href="/">Home</a>
                <a href="#about-main">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
                <Link to="https://samashray.blogspot.com/">My Blog</Link>
            </nav>
        </header>
    )
}