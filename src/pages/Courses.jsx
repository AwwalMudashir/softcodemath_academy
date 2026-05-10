import React from 'react'
import Hero from '../components/courses_components/Hero'
import CoursesSection from '../components/courses_components/CoursesSection'
import PackagesSection from '../components/packages_components/PackagesSection'

const Courses = () => {
  return (
    <div>
      <Hero/>
      <CoursesSection/>
      <PackagesSection/>
    </div>
  )
}

export default Courses