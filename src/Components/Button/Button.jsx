import React from 'react'
import "./Button.css"
import Resume from "../../Files/fw20_0455_Aman_Dwivedi_Resume.pdf"
const Button = () => {
  return (
    <div className='conatainer button-container'>
      <a href={Resume} download className='btn pri' onClick={()=>window.open('https://drive.google.com/file/d/1tUV-56yg5zQ2WvBfCQpUKaYPX3Bi-81P/view?usp=share_link')}>
        Resume
      </a>
      <a href="#contact" className='btn sec'>Get in touch</a>
    </div>
  )
}

export default Button
