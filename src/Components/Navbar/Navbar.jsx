import React from 'react'
import { Link } from "react-scroll"; 
import Toggle from '../Toggle/Toggle';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='n-wrapper'>
      {/*left */}
      <div id="main">
      <div className="n-left">
        <div className="n-name">Aman</div>
        <Toggle/>
        {/*right */}
        <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                About me
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Project
              </Link>
            </li>
            
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button" id='contact'>Contact</button>
        </Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
