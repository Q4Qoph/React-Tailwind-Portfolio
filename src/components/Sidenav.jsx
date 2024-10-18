import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
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

            {nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <Link
                        onClick={handleNav}
                        to="/"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </Link>
                    <Link
                        onClick={handleNav}
                        to="/work"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <GrProjects size={20} />
                        <span className="pl-4">Skills</span>
                    </Link>
                    <Link
                        onClick={handleNav}
                        to="/projects"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineProject size={20} />
                        <span className="pl-4">Projects</span>
                    </Link>
                    <Link
                        onClick={handleNav}
                        to="/contact"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineMail size={20} />
                        <span className="pl-4">Contact</span>
                    </Link>
                </div>
            ) : null}

            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <Link
                        to="/"
                        className="rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <AiOutlineHome size={20} />
                    </Link>
                    <Link
                        to="/work"
                        className="rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <GrProjects size={20} />
                    </Link>
                    <Link
                        to="/projects"
                        className="rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <AiOutlineProject size={20} />
                    </Link>
                    <Link
                        to="/contact"
                        className="rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <AiOutlineMail size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
