import React from "react";
import '../header.css'

function Header(){
    return(
        <header class="site-header">
        <div class="site-identity">
          <h1><a href="#">Sam.Ashray</a></h1>
        </div>  
        <nav class="site-navigation">
          <ul class="nav">
            <li><a href="#Home">Home</a></li> 
            <li><a href="#About">About</a></li> 
            <li><a href="#">Contact</a></li> 
            <button>View Work</button>
          </ul>
        </nav>
        </header>
        )
}

export default Header;