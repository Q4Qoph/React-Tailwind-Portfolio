import React from 'react';
import ProjectItem from './ProjectItem';
import codeImg from '../assets/images/codeApp.jpg';
import mobileImg from '../assets/images/mobileApp.jpg';
import deskImg from '../assets/images/deskApp.jpg';
import laptopImg from '../assets/images/laptopApp.jpg';

const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-8'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        In this Project I applied my skills for coding and software development
        as a whole. The process is documented to show the life cycle of the project.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={codeImg} title='Stop Trafficking' type='Mobile Application' id="1" />
        <ProjectItem img={mobileImg} title='Jot Notes' type='Mobile Application' id="2" />
        <ProjectItem img={deskImg} title='Fight Club' type='Figma Design' id="3" />
        <ProjectItem img={laptopImg} title='SafeHands Dashboard' type='Web Application' id="4" />
      </div>
    </div>
  );
};

export default Project;
