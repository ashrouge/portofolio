import React from 'react'
//
import About from './sections/About'
import GetInTouch from './sections/GetInTouch'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Worked from './sections/Worked'
import Footer from '@widgets/Footer'
import { ManufacturerProvider } from '@components/Filters/ManufacturerContext';

const Home = () => {
  return (
    <>
    <ManufacturerProvider>
      <Hero />
      <About />
      <Projects />
      <GetInTouch />
      <Footer />
    </ManufacturerProvider>

    </>
  )
}

export default Home