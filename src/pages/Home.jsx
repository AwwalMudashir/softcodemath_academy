import React from 'react'
import Hero from '../components/home_components/Hero'
import Services from '../components/home_components/Services'
import CourseComp from '../components/home_components/CourseComp'
import AboutComp from '../components/home_components/AboutComp'
import PackagesPreview from '../components/home_components/PackagesPreview'
import InternshipSupport from '../components/home_components/InternshipSupport'

const Home = () => {
  return (
    <div className="w-full">
      <Hero/>
      <AboutComp/>
      <CourseComp/>
      <PackagesPreview/>
      <InternshipSupport/>
      <Services/>
    </div>
  )
}

export default Home