import React from "react";

import NewProject from "./NewProject";

import { TaskWrapper, TaskHeader, Tasks, Task  } from "./Styles/TasksPanel.styles";

export const TasksPanel = ({
    projects,
    addProject, 
    addProjectBool,
    selectedProject
}) => {

    if (!addProjectBool) {
        const project = projects.find(project => project.title === selectedProject.title);

        if (project) {
            return (
                <TaskWrapper>
                    
                    <TaskHeader>
                        <h1> {project.title} </h1>
                        <p> {project.description}</p>   
                    </TaskHeader>

                    
                    <Tasks>
                    
                        <h3> Remaining Tasks: </h3>

                        {project.todo.map((task) => {
                            return (
                                <Task> <p>{task.title}</p> <button> 🗸 </button> <button> 🗑️ </button>

                                </Task>
                            )
                        })}
                    </Tasks>

                    <Tasks>
                        <h3> Completed Tasks:  </h3>
                        {project.completed_tasks.map((task) => {
                            return (
                                <Task> <p>{task.title}</p> <button> 🗑️ </button> </Task>
                            )
                        })}
                    </Tasks>
                    
                         
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

