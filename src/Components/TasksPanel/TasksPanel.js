import React from "react";

import NewProject from "./NewProject";

export const TasksPanel = ({
    addProject, 
    addProjectBool,
    selectedProject
}) => {

    if(addProjectBool){
        return (
            <div>
                <NewProject addProject={addProject}/>
            </div>
            
        )
    }

    else if (selectedProject === undefined) {
        return (
            <div>
                Add a project to begin!
            </div>
        )
    }
    else {
        return (
            <div>
                We are rendering tasks from project {selectedProject.title}.
            </div>
        )
    }
    
}

