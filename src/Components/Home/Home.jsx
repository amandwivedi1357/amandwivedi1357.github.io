import {  Flex, Text } from '@chakra-ui/react'
import React from 'react'
import "./Home.css"
import propic from "../../img/propic.jpg"
import resume from "../../Files/Resume.pdf"
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
    // const style={backgroundColor:"gray",height:"auto",width:"100%"}
  return (
    <div className='HC' name="Home" >
      <Flex>
        <div className='Left'>
            <img className="myimg" src={propic} alt="" />
            <div className="btn-cont">
            <a href={resume} download ><button className='btn'>Resume</button></a>
            <button  className='btn'>Contact</button>
            </div>
        </div>
        <div className='vl'></div>
        <div className='right'>
            <div className='right-cont'>
                    <p className='occ'>Full Stack Web Developer</p>
                    <Text ml={25} className="name" fontSize={"4xl"}>Aman Dwivedi</Text>
                    <Text className='desc'>Full Stack Web Developer with specialization in frontend and backend development.Adaptable to new technologies to enhance my skills and capabilities.</Text>
                   
            </div>
           
        </div>
        
      </Flex>
      <About/>
           <Skills/>
           <Projects/>
          <Contact/>
          <Footer/>
    </div>
  )
}

export default Home
