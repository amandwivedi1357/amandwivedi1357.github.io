import {Box, Flex, Spacer, Text} from "@chakra-ui/react"
import React from 'react'
import "./Navbar.css"
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='Navbar'>
      <Flex pt={2}>
      <Text className="navList" ml={5}>
      Aman
      </Text>
      <Spacer />
      <Flex >
      <div className='abcd'>
          {/* {NavLinks.map(({ id,item }) => (
            <div key={id} className='navList'>
              <Link to={item.links} smooth duration={500} >
                {" "}
                {item.link}{" "}
              </Link>
            </div> */}
            {
              NavLinks.map((item,id)=>{
                return (
                  <div className="navList">
                    <h3 key={id} onClick = {()=>navigate(item.links)}>
                      {item.link}
                    </h3>
                  </div>
                )
              })
            }
          
        </div>
        {/* <Text className="navList" mr={10}>Home</Text>
        
        <Text className="navList" mr={10}>About</Text>
        <Text className="navList" mr={10}>Skills</Text>
        <Text className="navList" mr={10}>Projects</Text>
        <Text className="navList" mr={10}>Contact</Text> */}
      </Flex>
      </Flex>
    </div>
  )
}

export default Navbar

const NavLinks = [
  {
    id: 1,
    link: "Home",
    links:"/"
  },
  {
    id: 2,
    link: "About",
    links:"/about"
  },
  {
    id: 3,
    link: "Skills",
    links:"/skills"
  },
  {
    id: 4,
    link: "Project",
    links:"/project"
  },
  {
    id: 5,
    link: "Contact",
    links:"/contact"
  },
];