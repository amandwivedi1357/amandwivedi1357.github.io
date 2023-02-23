import React from 'react'
import "./Footer.css"
import { BsGithub, BsLinkedin, BsMouse } from 'react-icons/bs'
const Footer = () => {
  return (
    <div id='footer' className='container footer-container'>

        <h1>Thank You For Visiting
        <a href="#home">
            <h2><BsMouse/>--scroll up--</h2>
        </a>
        </h1>
        <div className="social-links">
            <a href="https://github.com/amandwivedi1357">
                <BsGithub className='social'/>
            </a>

            <a href="https://www.linkedin.com/in/aman-dwivedi-1357ad/">
                <BsLinkedin className='social'/>
            </a>
        </div>
    </div>
  )
}
export default Footer
