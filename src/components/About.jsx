import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-8'>
      <div className='max-w-[600px] w-full text-center'>
        <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-8'>About Me</h1>
        <p className='text-gray-700 text-lg mb-8'>
          Hello! I'm Fredie Nyandiek, a passionate Junior Developer with a love for creating engaging digital experiences.
        </p>
        <button className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300'>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default About;
