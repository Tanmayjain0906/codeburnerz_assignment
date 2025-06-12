import React from 'react'
import HomeContainer from '../component/HomeContainer'
import About from '../component/About'
import Academics from '../component/Academics'
import Placement from '../component/Placement'
import IndustrialAlliance from '../component/IndustrialAlliance'
import Infrastructure from '../component/Infrastructure'
import Gallery from '../component/Gallery'
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'

const HomePage = () => {
  return (
    <div>
      <HomeContainer />
      <About />
      <Academics/>
      <Placement/>
      <IndustrialAlliance />
      <Infrastructure />
      <Gallery />
      <Testimonial />
      <Footer />
      <p className='copyright'>@ copyright</p>
    </div>
  )
}

export default HomePage