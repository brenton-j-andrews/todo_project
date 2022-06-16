import React, { useState } from 'react';


// Import components and styles.
import './Styles/App.css';
import Header from './Components/General/Header/Header';
import ProjectsPanel from './Components/ProjectsPanel/ProjectsPanel';
import { TasksPanel } from './Components/TasksPanel/TasksPanel';
import { previewData } from './Objects/previewData';
import Storage from "./Objects/storage";


const App = () => {

  let storageObject = new Storage();
  storageObject.initLocalStorage();
  // storageObject.clearLocalStorage();

  const [previewBool, setPreviewBool] = useState(false);

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [addProjectBool, setAddProjectBool] = useState(false); 
  const [deleteProjectBool, setDeleteProjectBool] = useState(false);


  // Activate Preview mode with sample data.
  const previewMode = () => {
    if (!previewBool) {
      setPreviewBool(true);
      setProjects(previewData);
      setSelectedProject(previewData[0]);
    } else {
      setPreviewBool(false);
      setSelectedProject(null)
    }
  }

  // Toggle new project menu.
  const addProjectToggle = () => {
    setAddProjectBool(!addProjectBool);
  }

  // Add new project to projects state array.
  const addProject = (project_object) => {
    if (checkTitle(project_object.title)) {
      setSelectedProject(project_object);
      addProjectToggle();
      setProjects(projects.concat(project_object));
      storageObject.addProject(project_object);
    } 
    
    else {
      alert("Projects must have different names.")
    } 
  }

  // Check new project input title for duplication.
  const checkTitle = (title) => {
    const arr = projects.filter(project => project.title === title);
    return (arr.length === 0) ? true : false;
  }

  // Activate delete mode by pressing trash button.
  const deleteProjectToggle = () => {
    setDeleteProjectBool(!deleteProjectBool);
  }

  // Remove project from projects state array.
  const removeProject = (project_object) => {
    setDeleteProjectBool(false);
    setProjects((projects) => projects.filter(project => project !== project_object));
  }


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className='body-wrapper'>

        <ProjectsPanel 
        projects={projects} 
        addProjectToggle={addProjectToggle} 

        deleteProjectToggle={deleteProjectToggle}
        deleteProjectBool={deleteProjectBool}
        removeProject={removeProject}

        setSelectedProject={setSelectedProject}
        selectedProject={selectedProject}

        previewMode={previewMode}
        previewBool={previewBool}
        />

        <TasksPanel 
        projects={projects}
        setProjects={setProjects}
        addProject={addProject} 
        addProjectBool={addProjectBool} 
        selectedProject={selectedProject}
        />

      </div>

    </div>
  );
}

export default App;
