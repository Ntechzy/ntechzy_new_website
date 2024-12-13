import React from 'react'
import Footer from './components/Footer'
import CTASection from './components/common-ui/CTASection'
import CompanyProfile from './components/CompanyProfile'
import ServicesGrid from './components/ServiceGrid'
import Services from './components/Services'
import OurTeam from './components/OurTeam'

const App = () => {
  return (
    <div className=''>
      <CompanyProfile />
      <Services />
      <OurTeam />
      <CTASection />
      <Footer />
    </div >
  )
}

export default App