import React from 'react'
import ChooseUs from './components/ChooseUs'
import CTASection from './components/common-ui/CTASection'
import CompanyProfile from './components/CompanyProfile'
import Footer from './components/Footer'
import OurTeam from './components/OurTeam'
import Workflow from './components/Workflow'
import Slider from './components/common-ui/Slider'
import Services from './components/Services'

const App = () => {
  return (
    <div className=''>

      <CompanyProfile />
      <ChooseUs />
      <OurTeam />
      <Services />
      <Workflow />
      <CTASection />
      <Footer />
    </div >
  )
}

export default App