import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {TiGroupOutline} from "react-icons/ti"
import {BiMessageRoundedDots} from "react-icons/bi"
import {BsArrowDownCircle} from "react-icons/bs"
import{GiSkills} from "react-icons/gi"
import "./nav.css"
const nav = () => {
  return (
    <div className='navigation'>
      <a href="#home">
        <AiOutlineHome className='icon active-nav'/>
      </a>
      {/* <a href="#about">
        <AiOutlineUser className='icon'/>
      </a> */}
      <a href="#skills">
        <GiSkills className='icon'/>
      </a>
      <a href="#projects">
        <TiGroupOutline className='icon '/>
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className='icon'/>
      </a>
      <a href="#footer">
        <BsArrowDownCircle className='icon'/>
      </a>
    </div>
  )
}

export default nav


let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach((icon)=>{
    icon.addEventListner('click',()=>{
        changeactive();
        icon.classList.add('active-nav')
    })
})

const changeactive = ()=>{
Icons.forEach((icon)=>{
    icon.classList.remove('active-nav')
})
}