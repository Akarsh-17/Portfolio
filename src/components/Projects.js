import React from 'react'
import PortfolioItem from './ProjectItem'
import img1 from '../photos/Screenshot.png'
import img2 from '../photos/blog_app.png'


const Projects = () => {
 const  keywords1=["Node",
 "React",
"MongoDb"];
//  console.log(keywords1)
// console.log(data1)
  return (
    <div>
        <div className='mx-auto w-11/12 mt-32'>
             <h2 className='text-yellow-50 text-3xl'>Projects</h2>
             <p className='text-2xl text-white'>Some of my projects includes...</p>
             <div className='flex lg:flex-row flex-col gap-20'>
                <PortfolioItem
                   title="Study Notion" 
                   des="StudyNotion is a versatile and intuitive ed-tech platform that is designed to provide an immersive learning experience to students and a platform for instructors to showcase their expertise. The platform is built using the MERN stack"
                   img={img1} 
                   keyword={keywords1}/>

                <PortfolioItem
                   title="Blog App" 
                   des="A blog website built with the MERN stack is a modern and efficient way to publish your content online. A website where individuals or groups regularly publish content in the form of articles, posts, or entries."
                   img={img2} 
                   keyword={keywords1}/>
             </div>
        </div>
    </div>
  )
}

export default Projects