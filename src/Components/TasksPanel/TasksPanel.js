import React from "react";

import NewProject from "./NewProject";

import { TaskWrapper, TaskHeader } from "./Styles/TasksPanel.styles";

export const TasksPanel = ({
    projects,
    addProject, 
    addProjectBool,
    selectedProject
}) => {

    if (!addProjectBool) {
        const project = projects.find(project => project.title === selectedProject.title);
        console.log("Project: ", project);
        if (project) {
            return (
                <TaskWrapper>
                    <TaskHeader>
                        <h1> Project: {project.title} </h1>
                        <p> Description: {project.description}</p>   
                    </TaskHeader>
                         
                </TaskWrapper>
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

