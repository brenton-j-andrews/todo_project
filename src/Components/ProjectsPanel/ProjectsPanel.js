import React from "react";

import { 
    Panel, 
    EditButtons, 
    Icon, 
    TasksList, 
    ProjectsList, 
    ProjectsListHeader 
} from "./Styles/ProjectsPanel.styles";

import { EditButton, TasksButton, ProjectButton, SelectedProjectButton } from "../General/Button/Button.styles";

import add from "../../Assets/add.png";
import edit from "../../Assets/edit.png";
import trash from "../../Assets/trash.png";

const ProjectsPanel = ({
    projects,
    addProjectToggle,
    setSelectedProjectIndex,
    selectedProjectIndex
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
                    if (project.index === selectedProjectIndex) {
                        return (
                            <SelectedProjectButton key={project.index}> {project.title} </SelectedProjectButton>
                        )

                    } else {
                        return (
                            <ProjectButton onClick={ () => {setSelectedProjectIndex(project.index)}} key={project.index}> { project.title} </ProjectButton> 
                        )
                    }
                })}

            </ProjectsList>
        </Panel>
    )
}

export default ProjectsPanel;
