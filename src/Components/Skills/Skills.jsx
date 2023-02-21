import React from 'react'
import Github from '../Github/Github'
import "./Skills.css"
const Skills = () => {
  return (
    <div id='skills'>
      <span className="quali-text">My Skills</span>
      <div className="qualifications-container">
        <div className="qualification">
            <div className="content html"></div>
            <h1>html</h1>
        </div>
        <div className="qualification">
            <div className="content css"></div>
            <h1>css</h1>
        </div>
        <div className="qualification">
            <div className="content js"></div>
            <h1>javascript</h1>
        </div>
        <div className="qualification">
            <div className="content bootstrap"></div>
            <h1>chakra-ui</h1>
        </div>
        <div className="qualification">
            <div className="content react"></div>
            <h1>react</h1>
        </div>
        <div className="qualification">
            <div className="content c-plus-plus"></div>
            <h1>github</h1>
        </div>
        <div className="qualification">
            <div className="content c-sharp"></div>
            <h1>cypress</h1>
        </div>
        <div className="qualification">
            <div className="content kotlin"></div>
            <h1>npm</h1>
        </div>
      </div>
     
    </div>
  )
}

export default Skills
