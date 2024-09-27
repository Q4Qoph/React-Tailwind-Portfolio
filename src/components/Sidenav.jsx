import React,{useState} from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div>
        {/* <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] '/> */}
      <button
        className="rounded-lg absolute top-4 right-4 z-[99] md:hidden"
        onClick={handleNav}
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {nav && (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          )}
          {!nav && (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
        {
            nav ?(
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20}/>
                        <span className='pl-4'>Skills</span>
                    </a>
                    <a onClick={handleNav} href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20}/>
                        <span className='pl-4'>Project</span>
                    </a>
                    {/* <a onClick={handleNav} href="#resume" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20}/>
                        <span className='pl-4'>Resume</span>
                    </a> */}
                    <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                    
                </div>
            )
            :(
                ''
            )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#work" className='rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20}/>
                    </a>
                    <a href="#project" className='rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20}/>
                    </a>
                    {/* <a href="#resume" className='rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20}/>
                    </a> */}
                    <a href="#contact" className='rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>
    </div>
  );
};

export default Sidenav;