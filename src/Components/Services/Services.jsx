import React,{useContext} from 'react'
import './Services.css'
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div>
      <div className="services">
        <div className="awesome">
            
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>

            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, qui nisi 
                <br />
                nostrum doloremque odit, nobis voluptatem beatae voluptatum deserunt 
            </span>
            <a href={Resume} download>
            <button className='button s-button' id='but'>
                Download Resume
            </button>
            </a>
            
            <div className="blur s-blurl" style={{backgroung:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
           <motion.div style={{left:"16rem"}}>
            <Card 
            imoji = {HeartEmoji}
            heading={'Design'}
            detail={"node js,react js,npm"}
            />
           </motion.div>
           <motion.div style={{top:"12rem",left:"-4rem"}}>
            <Card 
            imoji={Glasses}
            heading={'Developer'}
            detail={"HTML,CSS,JS,REACT JS"}
            />
           </motion.div>
           <motiondiv style={{top:"19rem",left:"13rem"}}>
            <Card
            imoji={Humble}
            heading={'database'}
            detail={"express jsm mongo db"}
            />
           </motiondiv>
           <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        </div>
      </div>
    </div>
  )
}

export default Services
