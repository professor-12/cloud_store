import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import HeroSection from '../components/HeroSection'


const Homepage = () => {
      return (
            <div className='bg-backgroundGreen'>
                  <Header />
                  <HeroSection />
            </div>
      )
}

export default Homepage