import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';  // Import the ProjectDetail component
import Work from './components/Work';  // Add if needed
import Project from './components/Project';  // Add if needed
import Contact from './components/Contact';  // Add if needed

function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidenav should be outside of Routes so it appears on every page */}
        <Sidenav /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />  {/* Dynamic route for project details */}
            <Route path="/work" element={<Work />} />  {/* Add Work route if needed */}
            <Route path="/projects" element={<Project />} />  {/* Add Projects route if needed */}
            <Route path="/contact" element={<Contact />} />  {/* Add Contact route if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
