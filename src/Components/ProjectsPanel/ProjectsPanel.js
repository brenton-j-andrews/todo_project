import React from "react";

import { 
    Panel, 
    EditButtons, 
    Icon, 
    TasksList, 
    ProjectsList, 
    ProjectsListHeader 
} from "./Styles/ProjectsPanel.styles";

import { EditButton, TasksButton, ProjectButton } from "../General/Button/Button.styles";

import add from "../../Assets/add.png";
import edit from "../../Assets/edit.png";
import trash from "../../Assets/trash.png";

const ProjectsPanel = ({
    projects,
    addProjectToggle,
    setSelectedProject
    }) => {

    return (
        <Panel>
            
            <TasksList>
                <TasksButton> Show All Tasks </TasksButton>
                <TasksButton> Today's Tasks </TasksButton>
                <TasksButton> This Week's Tasks </TasksButton>
            </TasksList>

            <ProjectsList>
                <ProjectsListHeader> Projects </ProjectsListHeader>
                <EditButtons>
                    <EditButton onClick={addProjectToggle}> <Icon src={add} alt="add"></Icon></EditButton>
                    <EditButton> <Icon src={edit} alt="edit"></Icon> </EditButton>
                    <EditButton> <Icon src={trash} alt="delete"></Icon> </EditButton> 
                </EditButtons>
                
                {projects.map((project) => {
                    return (
                        <ProjectButton onClick={ () => {setSelectedProject(project.id)}}> { project.title} </ProjectButton> 
                    )
                })}

            </ProjectsList>
        </Panel>
    )
}

export default ProjectsPanel;
