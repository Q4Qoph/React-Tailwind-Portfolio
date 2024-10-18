import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from '../components/Sidenav'
import Main from "../components/Main";
import Work from "../components/Work";
import Project from "../components/Project";
import Contact from "../components/Contact";
import ProjectDetail from "./ProjectDetail"; // Import the ProjectDetail component

const Home = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
