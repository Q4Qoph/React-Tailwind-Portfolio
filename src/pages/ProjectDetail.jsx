import React from "react";
import { useParams } from "react-router-dom";
import Sidenav from "../components/Sidenav";
import { FiTag,FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import projectImg1 from "../assets/images/projectImg1.png"; 
import projectImg2 from "../assets/images/projectImg2.png"; 
import projectImg3 from "../assets/images/projectImg3.jpg"; 
import projectImg5 from "../assets/images/projectImg5.jpg"; 
import projectImg22 from "../assets/images/projectImg22.jpeg"; 
import projectImg21 from "../assets/images/projectImg21.jpeg"; 
import projectImg32 from "../assets/images/projectImg32.png"; 
import projectImg31 from "../assets/images/projectImg31.png"; 



const ProjectDetail = () => {
  const { id } = useParams();

  // You can fetch project details from a database, or for now, hard-code them.
  const projectDetails = {
    1: {
      title: "Stop Trafficking Report app project",
      description:
        "This is a mobile application aimed at helping people report human trafficking incidents.",
      tag: "Mobile App",
      githubUrl: "https://github.com/Q4Qoph/Flutter-Firebase-Report-human-trafficking-app",
      websiteUrl: "", 
      objective: "To provide a platform that enables users to report human trafficking incidents quickly and anonymously.",
      tools: "Flutter, Firebase, Google Maps API, Geolocation",
      images: [projectImg1, projectImg2],
      challenges:
        "One of the key challenges was ensuring user privacy and security, especially when dealing with sensitive information. Another challenge was integrating real-time geolocation services for accurate reporting.",
    },
    2: {
      title: "Jot Notes",
      description: "A simple note-taking mobile app.",
      tag: "Mobile App",
      githubUrl: "https://github.com/Q4Qoph/Flutter-Note-App-with-SQLite",
      websiteUrl: "", 
      objective: "To offer a minimalist and efficient note-taking experience for mobile users.",
      tools: "React Native, Firebase, Redux",
      images: [projectImg22, projectImg21],
      challenges:
        "Optimizing the app for both performance and simplicity was a major challenge. Additionally, syncing notes across multiple devices in real-time required careful management of backend services.",
    },
    3: {
      title: "Fight Club",
      description: "A Figma design for a community sports app.",
      tag: "Figma Design",
      githubUrl: "",
      websiteUrl: "https://www.figma.com/proto/7xRgGgHERwLYaatxeFPwYz/figmaworks1?node-id=31-4&node-type=canvas&t=55aPJyxU45Pkch5T-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", 
      objective: "To create a social platform where local communities can organize and join sports events.",
      tools: "Figma, Adobe XD",
      images: [projectImg32, projectImg31],
      challenges:
        "Creating a design that was both intuitive and engaging was a significant challenge, particularly when addressing the needs of diverse user groups. Another challenge was ensuring mobile responsiveness in the design.",
    },
    4: {
      title: "SafeHands Dashboard",
      description: "A web app for user authentication and login features.",
      tag: "Web Application",
      githubUrl: "https://github.com/Q4Qoph",
      websiteUrl: "",
      objective: "To implement secure user authentication with a clean and responsive UI.",
      tools: "Laravel, Firebase Auth, JWT",
      images: [projectImg3, projectImg5],
      challenges:
        "The biggest challenge was implementing two-factor authentication securely while maintaining a seamless user experience. Handling different types of user roles and permissions also required thoughtful planning.",
    },
  };
  
  
  const project = projectDetails[id];

  return (
    <div>
      <Sidenav />
      <div className="m-auto md:pl-20 p-4 py-8">
        <p className="text-3xl font-bold text-left text-[#001b5e] mt-14 sm:mt-20 mb-7">
          {project?.title}
        </p>
  
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project?.tag}
            </span>
          </div>
          <div className="flex items-center mr-10">
            <FaGithub className="text-lg text-ternary-dark dark:text-ternary-light" />
            <a
              href={project?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light"
            >
              View Github repo
            </a>
          </div>
          <div className="flex items-center">
            <FiEye className="text-lg text-ternary-dark dark:text-ternary-light" />
            <a
              href={project?.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light"
            >
              Take a look
            </a>
          </div>
        </div>
  
        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mr-12">
          {project?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project Image ${index + 1}`}
              className={`rounded-lg shadow-lg ${index > 0 ? 'hidden md:block' : ''}`}
            />
          ))}
        </div>
  
        {/* Objective and Tools */}
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
          <div className="w-full sm:w-1/3 text-left">
            <div className="mb-7">
              <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                Objective
              </p>
              <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                {project?.objective}
              </p>
            </div>
            <div className="mb-7">
              <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                Tools & Technologies
              </p>
              <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                {project?.tools}
              </p>
            </div>
          </div>
  
          {/* Description and Challenges */}
          <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
              Overview
            </p>
            <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
              {project?.description}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
              Challenges
            </p>
            <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
              {project?.challenges}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ProjectDetail;
