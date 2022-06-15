import React, { useEffect, useState } from 'react';


// Import components and styles.
import './Styles/App.css';
import Header from './Components/General/Header/Header';
import ProjectsPanel from './Components/ProjectsPanel/ProjectsPanel';
import { TasksPanel } from './Components/TasksPanel/TasksPanel';
import { previewData } from './Objects/previewData';


const App = () => {

  const [useLocalStorage, setUseLocalStorage] = useState(true);
  const [previewBool, setPreviewBool] = useState(false);

  // Set projects state according to active data source (sample data, local storage data or firestore )
  const setDataSource = () => {

    if (useLocalStorage) {
      if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", "[]");
      }

      console.log(JSON.parse(localStorage.getItem("projects")));
      return JSON.parse(localStorage.getItem("projects"));
    }
  }

  const [projects, setProjects] = useState(setDataSource());
  const [selectedProject, setSelectedProject] = useState(null);

  const [addProjectBool, setAddProjectBool] = useState(false); 
  const [deleteProjectBool, setDeleteProjectBool] = useState(false);

  // Upon projects change, update localStorage if active.
  useEffect(() => {
    if (useLocalStorage) {
      console.log("projects as a string: ", localStorage.getItem("projects", JSON.stringify(projects)));
      localStorage.setItem("projects", JSON.stringify(projects));
      console.log("local storage: ", localStorage.getItem("projects"));
    }
  }, [projects]);

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
    } else {
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

  // Activate Preview mode with dummy data.
  const previewMode = () => {
    if (!previewBool) {
      setPreviewBool(true);
      setProjects(previewData);
      setSelectedProject(previewData[0]);
    } else {
      setPreviewBool(false);
      setProjects([])
      setSelectedProject(null)
    }
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

        useLocalStorage={useLocalStorage}
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


  // // If local data is in use, update upon modifying projects or tasks.
  // const updateLocalStorage = (project_object) => {
  //   let test = localStorage.getItem("projects")
  //   console.log("Beginning state: ", test);
  //   console.log("Passed object: ", project_object);

  //   if (!localStorage.getItem("projects")) {
  //     console.log("creating item...");
  //     localStorage.setItem("projects", "[]");
  //   } 
    
  //   console.log("Adding information");
  //   const localData = JSON.parse(localStorage.getItem("projects"));
  //   localData.push(project_object);
  //   console.log(localData);
  //   // setProjects(localData);
  //   localStorage.setItem("projects", JSON.stringify(localData));
    
  //   console.log("End value: ", localStorage.getItem("projects")); 
  // }