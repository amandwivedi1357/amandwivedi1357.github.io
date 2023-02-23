import React from 'react'
import "./Button.css"
import Resume from "../../Files/Resume.pdf"
const Button = () => {
  return (
    <div className='conatainer button-container'>
      <a href={Resume} download className='btn pri'>
        Resume
      </a>
      <a href="#contact" className='btn sec'>Get in touch</a>
    </div>
  )
}

export default Button
