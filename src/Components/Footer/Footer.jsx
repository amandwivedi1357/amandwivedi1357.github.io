import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"
import {FaHeart} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='Footer-cont'>
       
      <Flex pt={4} ml={'26rem'}> <p style={{fontSize:"20px",marginRight:"3px",}}> Made with  </p> <Box mt={1} mr={1}><FaHeart/></Box> by Aman Dwivedi</Flex>
      
    </div>
  )
}

export default Footer
