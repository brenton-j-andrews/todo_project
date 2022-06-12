import React from "react";

import NewProject from "./NewProject";

export const TasksPanel = ({
    addProject, 
    addProjectBool,
    selectedProject
}) => {

    console.log(selectedProject);
    if(addProjectBool){
        return (
            <div>
                <NewProject addProject={addProject}/>
            </div>
            
        )
    }

    else {
        return (
            <div>
                We are rendering tasks from project (index) {selectedProject}
            </div>
        )
    }
    
}

