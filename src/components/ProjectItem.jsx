import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ img, title, type, id }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{type}</p>
        <Link to={`/project/${id}`}>
          <p className='text-center p-4 rounded-3xl text-gray-950 font-bold cursor-pointer text-lg'>More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
