import React, { useState} from "react";

import NewProject from "./NewProject";

import { TaskWrapper, TaskHeader, Tasks, Task, TaskDiv, AddTask  } from "./Styles/TasksPanel.styles";

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
    const [dueDate, setDueDate] = useState(null);

    // Form methods.
    function handleChange(e) {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else if (e.target.name === "dueDate") {
            setDueDate(e.target.value);
            console.log(e.target.value);
        } 
    }

    function reRender() {
        setRender(!render);
    }

    function addTask(project, title) {
        if (title === null) {
            alert("Your task must have a name.");
            
        } else {
            project.addTask(title, dueDate, false); 
            reRender(); 
            setTitle(null);
            setDueDate(null);
            setAddTaskBool(false);
        }
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
                        
                        <button onClick={function() { setAddTaskBool(!addTaskBool); reRender();}}> { addTaskBool === true ? "Close Form" : "Add Task" } </button> 

                        {addTaskBool &&
                           
                            <AddTask onChange={handleChange}>

                                
                                    <label> Task name  
                                        <input name="title" type="text" required/> 
                                    </label>

                                    <label > Due Date  
                                        <input name="dueDate" type="date" /> 
                                    </label>

                                <input type="button" value="Add Task" onClick={() => {addTask(project, title)}}
                                />
                                             
                            </AddTask>
                        }

                        {todo_tasks.map((task) => {

                            return (
                                <Task> 
                                    <p>{task.title}</p> 
                                
                                    <TaskDiv>
                                        <p> Due  {task.dueDate} </p>
                                        <button variant="green" onClick={function() {task.toggleComplete(); reRender(); }}> 🗸 </button> 
                                        <button variant="red" onClick={function() {project.removeTask(task); reRender(); }}> 🗑️ </button>
                                    </TaskDiv>
                                    

                                    
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
                                    <TaskDiv>
                                        <button variant="green" onClick={function() {task.toggleComplete(); reRender(); }}> ↑ </button>
                                        <button variant="red" onClick={function() {project.removeTask(task); reRender(); }}> 🗑️ </button> 
                                    </TaskDiv>
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
