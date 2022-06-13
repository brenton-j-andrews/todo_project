import React from "react";

import NewProject from "./NewProject";

export const TasksPanel = ({
    projects,
    addProject, 
    addProjectBool,
    selectedProject
    
}) => {
    // console.log("Projects: ", projects);
    // console.log("Selected Project: ", selectedProject);

    // Return selected project contents.
    if (!addProjectBool) {
        const project = projects.find(project => project.title === selectedProject.title);
        // console.log("Project: ", project);
        if (project) {
            return (
                <div>
                    We are rendering tasks from project {project.title}
                </div>
            )
        } else {
            return (
                <div>
                    You have no projects!
                </div>
            )
        }
        
    }
    
    // Return new project form.
    else {
        return (
            <div>
                <NewProject addProject={addProject}/>
            </div>
            
        )
    }
}

