import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Artist from '../components/Artist'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <Artist/>
    
    </>
  )
}

export default Home