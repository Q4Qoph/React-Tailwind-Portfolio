import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 'Web',
        title: 'Java Script, CSS, React, Tailwind, Espress, MongoDB',
        duration: '3 Years',
        description:'Proficient in creating responsive and interactive web applications using modern front-end technologies'
    },
    {
        year:'Mobile',
        title:'Flutter, Firebase, SQLite',
        duration:'2 Year',
        description:'Experienced in developing cross-platform mobile apps with Flutter and integrating Firebase for backend services.'
    },
    {
        year:'Web',
        title:'Angular, Firebase',
        duration:'2 years',
        description:'Skilled in creating user-friendly interfaces and visually appealing designs for web and mobile applications.'
    },
    {
        year:'Design',
        title:'Figma, Canvas, Photoshop',
        duration:'3 Years',
        description:'Skilled in creating user-friendly interfaces and visually appealing designs for web and mobile applications.'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Skills</h1>
        {data.map((item,idx)=>(
            <WorkItem keys={idx} year={item.year} title={item.title} duration={item.duration} details={item.description} />
        ))}
    </div>
  )
}

export default Work