import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import { FiArrowDownCircle } from 'react-icons/fi';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="assets/images/pic1.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Fredie Nyandiek
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Junior Software Developer",
                2000,
                "Creative Designer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            {/* <FaFacebookF className='cursor-pointer' size={20}/>
              <FaTwitter   className='cursor-pointer' size={20}/>
              <FaInstagram className='cursor-pointer' size={20} />
              <FaLinkedinIn className='cursor-pointer' size={20} /> 
                          */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="cursor-pointer hover:text-blue-800 transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer hover:text-gray-500 transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="cursor-pointer hover:text-blue-600 transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                className="cursor-pointer hover:text-white transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="cursor-pointer hover:text-pink-500 transition duration-300"
                size={20}
              />
            </a>
          </div>
          <div className="flex justify-center sm:block">
          <a
						download="Fredie-Resume"
						href="/files/CV_nyandiek.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-gray-800 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-transparent text-gray-800 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;