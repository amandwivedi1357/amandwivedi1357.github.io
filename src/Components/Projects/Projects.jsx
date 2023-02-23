import React from 'react'
import "./Projects.css"
const Projects = () => {
  return (
    <div className='container members-container' id='projects'>
      <h1 className='member-txt'>Projects</h1>
      <div className="member member-1">
      <div className="member-img1"></div>
      <div className="member-info">
        <h1 className="name">Fitness Blender</h1>
        <h3 className="position">Solo Project</h3>
        <h4 className="about">Fitness Blender is an digital fitness company. The company offers free and paid at-home exercise videos through their website and YouTube channel.User can avail any subscription plan accordingly which were correctly mentioned in the website.</h4>
        <a href="https://incandescent-dusk-dc6fe6.netlify.app/home.html" className='contact-member'>
          <span>Live</span>
        </a>
        <a style={{marginLeft:"10rem"}} href="https://github.com/amandwivedi1357/abstracted-cactus-1793" className='contact-member'>
          <span>Code</span>
        </a>
      </div>
      </div>

      <div className="member member-2">
      <div className="member-img2"></div>
      <div className="member-info">
        <h1 className="name">Campaign Monitor</h1>
        <h3 className="position">Collaborative Project</h3>
        <h4 className="about">Campaign Monitor is a global technology company that provides an email marketing platform that's easy to use yet extremely powerful. It also helps you to provide some nice looking templates for your email.</h4>
        <a href="https://funny-granita-6110f3.netlify.app/" className='contact-member'>
          <span>Live</span>
        </a>
        <a style={{marginLeft:"10rem"}} href="https://github.com/PriyanshuPatil/Campaign-monitor.com" className='contact-member'>
          <span>Code</span>
        </a>
        

      </div>
      </div>

      <div className="member member-3">
      <div className="member-img3"></div>
      <div className="member-info">
        <h1 className="name">Travelocity</h1>
        <h3 className="position">Collaborative Project</h3>
        <h4 className="about">This web site is known as Travelocity website. Travelocity is an online travel agency. From this website, users can book a hotel room, flights, cars, etc. across the world.</h4>
        <a href="travelocity-website.netlify.app/" className='contact-member'>
          <span>Live</span>
        </a>
        <a style={{marginLeft:"10rem"}} href="https://github.com/swapnilwakchaure/paltrysteam6285" className='contact-member'>
          <span>Code</span>
        </a>
      </div>
      </div>

      <div className="member member-4">
      <div className="member-img4"></div>
      <div className="member-info">
        <h1 className="name">Ainak</h1>
        <h3 className="position">Collaborative Project</h3>
        <h4 className="about">This is the photos of the Ainak website. Ainak is an online Ecommerce Website which is providing high quality eyewear. From this website, users can Order Computer Glasses,Sun Glasses,Kids Glasses and much more across the world.</h4>
        <a href="https://prismatic-taiyaki-f69ca6.netlify.app/" className='contact-member'>
          <span>Live</span>
        </a>
        <a style={{marginLeft:"10rem"}} href="https://github.com/akshay123332/Lenscart-Clone" className='contact-member'>
          <span>Code</span>
        </a>
      </div>
      </div>
    </div>
  )
}

export default Projects
