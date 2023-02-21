import React from 'react'
import "./contact.css"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
const Contact = () => {
  return (
    <div className='container contact-container' id='contact'>
      <h1>Contact Me</h1>
      <div className='contact-links'>

        <a href="" className='contact youtube'>
        <AiOutlineLinkedin className='icon'/>
        <h2>LinkedIn<span>Aman Dwivedi</span></h2>
        </a> 

        <a href="" className='contact whatsapp'>
        <AiOutlineWhatsApp className='icon'/>
        <h2>WhatsApp<span>+91 7440501499</span></h2>
        </a>

        <a href="" className='contact instagram'>
        <AiOutlineGithub className='icon'/>
        <h2>Github<span>amandwivedi1357</span></h2>
        </a>

      </div>
    </div>
  )
}

export default Contact
