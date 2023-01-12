import {Box, Flex, Spacer, Text} from "@chakra-ui/react"
import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <Flex pt={2}>
      <Text className="navList" ml={5}>
      Aman
      </Text>
      <Spacer />
      <Flex >
        <Text className="navList" mr={10}>Home</Text>
        
        <Text className="navList" mr={10}>About</Text>
        <Text className="navList" mr={10}>Skills</Text>
        <Text className="navList" mr={10}>Projects</Text>
        <Text className="navList" mr={10}>Contact</Text>
      </Flex>
      </Flex>
    </div>
  )
}

export default Navbar

