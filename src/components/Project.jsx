import React from 'react'
import ProjectItem from './ProjectItem'
import codeImg from '../assets/images/codeApp.jpg'
import mobileImg from '../assets/images/mobileApp.jpg'
import deskImg from '../assets/images/deskApp.jpg'
import laptopImg from '../assets/images/laptopApp.jpg'

const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-8'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>In this Project I applied my skills for codding and software development as a whole.
        The process is document to show the life cycle of the project.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={codeImg} title= 'Code App'/>
            <ProjectItem img={mobileImg} title= 'Moble App'/>
            <ProjectItem img={deskImg} title= 'Desk App'/>
            <ProjectItem img={laptopImg} title= 'Laptop App'/>
        </div>
    </div>
  )
}

export default Project