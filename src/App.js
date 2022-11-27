import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer"
import { useContext } from "react";
import { themeContext } from "./Context";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
    <div>
      <Navbar/>
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/> 
      <Footer/>
      </div>
    </div>
  );
}

export default App;
