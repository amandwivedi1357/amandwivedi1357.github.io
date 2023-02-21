import React from 'react'
import "../src/style.css"
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Nav from './Components/nav/Nav'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <>
    <div className='bg-circle1'></div>
    <div className='bg-circle2'></div>
      <Header/>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
