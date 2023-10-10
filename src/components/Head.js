import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'

const Head = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Home/>
        <Projects/>
        <Skills/>
        <About/>
    </div>
  )
}

export default Head