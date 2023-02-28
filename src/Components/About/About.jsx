import React from 'react'
import Github from '../Github/Github'
import Skills from '../Skills/Skills'
import "./About.css"
const About = () => {
  return (
    <div id='skills' className='container about-container'>
      <Skills/>
      <div className='github'>
      <Github />
      </div>
    </div>
  )
}

export default About
