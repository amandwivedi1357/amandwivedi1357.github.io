import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Home/Home'
import About from "../About/About"
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/project' element={<Projects/>}/>
     
    </Routes>
  )
}

export default AllRoutes
