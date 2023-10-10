import React from 'react'
import react from '../photos/react.png'
import js from '../photos/js.png'
import nodelogo from '../photos/nodejs-2.svg'
import mdb from '../photos/mongodb-icon-1.svg'
import gitlogo from '../photos/git-icon.svg'
import cpp from '../photos/c.svg'
import PortfolioItem from './ProjectItem'
import logo from '../photos/Screenshot (1726).png'
const Skills = () => {
  const keywords1=[
    "Backend",
    "MongoDb",
    "React"
  ]
  return (
    <div className='mt-60 w-11/12 mx-auto'>
      <h2 className='text-yellow-50 text-4xl'>Skills & Experience</h2>
      <div>
        <h2 className='text-white text-xl mt-3'>I have worked as a Software Developer Intern At Guruji Vacations Pvt. Ltd. <br/>
          I am looking forward to the challenges and opportunites that lie ahead. Here is an overview of my work.
        </h2>
        <PortfolioItem
                   title="Guruji Vacations" 
                   des="Guruji Vacation one stand platform where users can travel across India. Trvaellers can book their destination packages at coustomizable rates.The platform is built using the MERN stack"
                   img={logo} 
                   keyword={keywords1}
        />

      </div>
      <div className='flex flex-col mt-12 gap-10'>
        <p className='text-white text-xl'>My skill set includes</p>
        <div className='flex gap-8'>
          <img src={react} width="50" height="50"/>
          <img src={js} width="50" height="50"/>
          <img src={nodelogo} width="50" height="50"/>
        </div>
        <div className='flex gap-8'>
          <img src={mdb} width="50" height="50"/>
          <img src={gitlogo} width="50" height="50"/>
          <img src={cpp} width="50" height="50"/>
        </div>
        
      </div>
    </div>
  )
}

export default Skills