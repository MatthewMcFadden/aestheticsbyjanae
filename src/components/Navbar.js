import React from 'react';
import '../index.css';
// import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";

function Navbar () {
  return (
    <header>
      <nav>  
        <h1>
          <a href="/">Aesthetics by JaNae</a>
        </h1> 
        <div className="navbar">          
          <a href="#about">
            Services
          </a>
          <Link to="/Schedule">
            Schedule
          </Link> 
          <Link to="/contact">
            Contact Me
          </Link>                            
        </div>
      </nav>
    </header>
  )
}

export default Navbar;