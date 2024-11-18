import React from 'react'
import Navbar from '../../CommonPages/Navbar/Navbar'
import Intro from '../Intro/Intro'
import Project from '../Projects/Project'
import Experience from '../Experience/Experience'
import Cards from '../AboutMe/Cards'

// gsap
// import { gsap,Power3 } from 'gsap';
import Skills from '../Skills/Skills'
import Mail from '../Mail/Mail'
import Footer from '../../CommonPages/Footer/Footer'

const Home = () => {

  // let tl = new gsap.timeline(); //gsap
  // let ease = Power3.easeOut();

  return (
    <div>
      <Navbar />
      <Intro/>
      <div className="aboutme-container">
     
      {/* <AboutMe/> */}
      <div className='container'>
     <Cards  />
      </div>
      </div>
      <Experience/>
      <Skills/>

      <Project/>
      <Mail/>
      <Footer/>


      
    </div>
  )
}

export default Home
