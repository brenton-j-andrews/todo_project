import React, { useState} from "react";

import NewProject from "./NewProject";

import { TaskWrapper, TaskHeader, Tasks, Task  } from "./Styles/TasksPanel.styles";

export const TasksPanel = ({
    projects,
    addProject, 
    addProjectBool,
    selectedProject
}) => {

    const [render, setRender] = useState(true);
    const [addTaskBool, setAddTaskBool] = useState(false);

    // Usestate varibles for adding new task:
    const [title, setTitle] = useState(null);

    // Form methods.
    function handleChange(e) {
        setTitle(e.target.value);
        
    }

    function reRender() {
        setRender(!render);
    }
    

    if (!addProjectBool) {
        const project = projects.find(project => project.title === selectedProject.title);

        if (project) {

            const todo_tasks = project.tasks.filter(task => task.completed === false);
            const completed_tasks = project.tasks.filter(task => task.completed === true);

            return (
                <TaskWrapper>
                    
                    <TaskHeader>
                        <h1> {project.title} </h1>
                        <p> {project.description}</p>   
                    </TaskHeader>

                    
                    <Tasks>
                    
                        <h3> Remaining Tasks: </h3>
                        
                        <button onClick={function() { setAddTaskBool(true); reRender();}}> Add Task </button> 

                        {addTaskBool &&
                        <Task>
                            <form onChange={handleChange}>
                                <label> Task name <input name="title" type="text"></input></label>
                                <input 
                                type="button" 
                                value="Add Task"
                                onClick={() => {project.addTask(title); reRender(); setAddTaskBool(false); }}
                                >

                                </input>
                            </form>
                        </Task>
                        }

                        {todo_tasks.map((task) => {

                            return (
                                <Task> 
                                    <p>{task.title}</p> 
                                    <button onClick={function() {task.toggleComplete(); reRender(); }}> 🗸 </button> 

                                    <button onClick={function() {project.removeTask(task); reRender(); }}> 🗑️ </button>
                                </Task>
                            )}
                        )}

                    </Tasks>

                    <Tasks>
                        <h3> Completed Tasks:  </h3>
                        {completed_tasks.map((task) => {
                            return (
                                <Task> 
                                    <p>{task.title}</p> 
                                    <button onClick={function() {task.toggleComplete(); reRender(); }}> ↑ </button>
                                    <button onClick={function() {project.removeTask(task); reRender(); }}> 🗑️ </button> 
                                </Task>
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

