import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='mx-auto'>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Projects />
        <Contact />
        
    </div>
  )
}

export default Home