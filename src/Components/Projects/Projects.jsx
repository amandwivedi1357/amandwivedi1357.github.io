import {Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import "./Projects.css"
import { ProjectData } from './ProjectsData'
const Projects = () => {
  return (
    <div className='projects-cont'name="Project" >
      <div className="projects-list">
        {
            ProjectData.map((item,index)=>{
                return (
                    <div className='project' key={index}>
                        <Text className='p-text-title' paddingBottom={10} align={'center'}>{item.title}</Text>
                        <img className='project-img' src={item.img} alt={item.title} />
                        <Text className='p-text' mt={10} align={'justify'}>{item.desc}</Text>
                        <Flex>
                        <a href={item.demo}><button className='Live-btn'>Live</button></a>
                        <Spacer />
                        <a href={item.code}><button className='github-btn'>Code</button></a>
                        </Flex>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Projects
