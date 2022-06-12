import React, { useState } from 'react';


// Import components and styles.
import './Styles/App.css';
import Header from './Components/General/Header/Header';
import ProjectsPanel from './Components/ProjectsPanel/ProjectsPanel';
import { TasksPanel } from './Components/TasksPanel/TasksPanel';


const App = () => {

  const [projects, setProjects] = useState([]);

  // If addProject is true, TasksPanel renders the new project form. Otherwise it renders contents from selectedProject.
  const [addProjectBool, setAddProjectBool] = useState(false); 
  
  const [selectedProject, setSelectedProject] = useState(null);

  // Toggle new project menu.
  const addProjectToggle = () => {
    setAddProjectBool(!addProjectBool);
  }

  // Add new project to projects state array, activated in NewProject component.
  const addProject = (project_object) => {
    project_object.index = projects.length;
    setSelectedProject(project_object.index);
    addProjectToggle();
    setProjects(projects.concat(project_object));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className='body-wrapper'>
        <ProjectsPanel projects={projects} addProjectToggle={addProjectToggle} setSelectedProject={setSelectedProject}/>
        <TasksPanel addProject={addProject} addProjectBool={addProjectBool} selectedProject={selectedProject}/>
      </div>

    </div>
  );
}

export default App;
