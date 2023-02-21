import React from 'react'
import "./Footer.css"
import { BsGithub, BsLinkedin, BsMouse } from 'react-icons/bs'
const Footer = () => {
  return (
    <div id='footer' className='container footer-container'>

        <h1>That's All
        <a href="#home">
            <h2><BsMouse/>--scroll up--</h2>
        </a>
        </h1>
        <div className="social-links">
            <a href="#">
                <BsGithub className='social'/>
            </a>

            <a href="#">
                <BsLinkedin className='social'/>
            </a>
        </div>
    </div>
  )
}
export default Footer
