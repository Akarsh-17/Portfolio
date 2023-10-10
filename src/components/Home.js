import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-32'>
        <div className='mx-auto w-11/12 text-white flex flex-col'>
            <p className='text-2xl text-yellow-50 '>
               {/* <div className="sm:block w-0.5 bg-white absolute h-full left-1/2 transform -translate-x-1/2"></div> */}
                Hello
            </p>
            <h1 className='text-6xl mt-4'>I'm Akarsh</h1>
            <h2 className='text-richblack-400 text-xl mt-6'>Full Stack Web Developer</h2>
            <p className='text-richblack-400 mt-8'>I have good experience building amazing web projects <br/> both independently and as part of a team.</p>

            <div className='flex gap-x-16'> 
            <Link to="https://www.linkedin.com/in/akarsh-cse-2a6a62257/" target='_blank'>
                <button className='flex w-max text-center mt-7 rounded-lg px-6 py-3 text-base font-bold border-2 border-solid border-yellow-50'>
                    Connect on LinkedIn
                </button>
            </Link>

            <Link to="https://github.com/Akarsh-17" target='_blank'>
                <button className='flex w-max text-center mt-7 rounded-lg px-6 py-3 text-base font-bold border-2 border-solid border-yellow-50'>
                    Github
                </button>
            </Link>

            </div>
            
        </div>
        
        
        
    </div>
  )
}

export default Home