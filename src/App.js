import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Navbar1 from './Components/Navbar/Navbar1'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import useViewport from './useViewPort'
const App = () => {
  const { width } = useViewport();
  const breakpoint = 920;
  return (
   <div className='App' style={{backgroundColor:"black"}}>
    <Router>
      
         {
         width < breakpoint ? <Navbar1 /> : <Navbar />
         }
      <Routes>
        <Route path='/'>
    </Route>
    </Routes>
    <Home/>
    <About/>
    
    </Router>
  </div>
  )
}

export default App
