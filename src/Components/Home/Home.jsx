import React from 'react'
import "./Home.css"
import propic from "../../img/propic.jpg"
import { BsMouse } from 'react-icons/bs'
import Button from '../Button/Button'
const Home = () => {
  return (
    <div className="container home-container" id='home'>

        <div className="logo" >
            <div className='main-img'>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            </div>
        </div>
        <img src={propic} alt="" className='my-img'/>
        <a href="#footer" className='scroll-down'>
            <hr />
            <h5>
                scroll down
            </h5>
            <BsMouse className='scroll'/>
        </a>
        <h2><span>About Me</span>
        <p>I am an aspiring web development professional, great commands at frontend designing and user-centric solutions. Collaborative, team player and also with great leadership quality in working with teams and executing goal-oriented projects. Strongly interested in obtaining the web developer position to contribute to the enhancement of the product.</p>
        </h2>
        
        <Button/>
    </div>
  )
}



export default Home

// const toggle = document.querySelector('.main-img');
// toggle.addEventListener('click',()=>{
//     toggle.classList.toggle('active');
// })