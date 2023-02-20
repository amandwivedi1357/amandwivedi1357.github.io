import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Navbar1 from './Components/Navbar/Navbar1'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import useViewport from './useViewPort'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import AllRoutes from './Components/Routes/AllRoutes'


const App = () => {
  const { width } = useViewport();
    const breakpoint = 480;
  return (
    <div  className='App' style={{backgroundColor:"black"}}>
      <Router>
      
               {
               width < breakpoint ? <Navbar1 /> : <Navbar />
               }
            <Routes>
              <Route path='/'>
          </Route>
          </Routes> 
           <Home/>
         
           {/* <AllRoutes/>   */}
          
            </Router>
    </div>
  )
}

export default App






