

import React from 'react'
import html from "../props/html.png"
import css from "../props/css.png"
import js from "../props/js.png"
import react from "../props/react.png"
import redux from "../props/redux.png"
import node from "../props/node.png"
import express from "../props/express.png"
import mongo from "../props/mongo.png"
import typescript from "../props/typescript.png"
import npm from "../props/npm.png"
import chakra from "../props/chakra.png"
import cypress from "../props/cypress.jpeg"
import "./Skills.css"
const Skills = () => {
  return (
    <div id='skills'>
      <div className="skill-text">My Skills</div>
      <div className="skills-container">
      {
        skills.map((el)=>{
          return (
            <div className="skill">
              {/* <img src={el.img} alt="" /> */}
              {/* <h3>{el.skill}</h3> */}
            </div>
          )
        })
      }
      </div>
        
      </div>
  )
}

export default Skills



const skills = [
  {
    skill:"HTML",
    img:html
  },
  {
    skill:"CSS",
    img:css
  },
  {
    skill:"JAVASCRIPT",
    img:js
  },
  {
    skill:"REACT",
    img:react
  },
  {
    skill:"REDUX",
    img:redux
  },
  {
    skill:"NODE JS",
    img:node
  },
  {
    skill:"EXPRESS JS",
    img:express
  },
  {
    skill:"MONGO DB",
    img:mongo
  },
  {
    skill:"TYPESCRIPT",
    img:typescript
  },
  {
    skill:"CYPRESS",
    img:cypress
  },
  {
    skill:"CHAKRA-UI",
    img:chakra
  },
  {
    skill:"NPM",
    img:npm
  }
]