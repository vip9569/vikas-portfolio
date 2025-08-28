import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
