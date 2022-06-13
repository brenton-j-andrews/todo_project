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

    deleteProjectToggle,
    deleteProjectBool,
    removeProject,

    setSelectedProject,
    selectedProject
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
                    <EditButton onClick={deleteProjectToggle}> <Icon src={trash} alt="delete"></Icon> </EditButton> 
                </EditButtons>
                
                {projects.map((project) => {
                    if (project === selectedProject) {
                        return (
                            <SelectedProjectButton onClick={ () => {deleteProjectBool ? removeProject(project) : setSelectedProject(project)}}
                            key={project.title}
                            > 
                            {project.title} 
                            </SelectedProjectButton>
                        )

                    } else {
                        return (
                            <ProjectButton onClick={ () => {deleteProjectBool ? removeProject(project) : setSelectedProject(project)}}
                            key={project.title}
                            > 
                            
                            { project.title} 
                            </ProjectButton> 
                        )
                    }
                })}

            </ProjectsList>
        </Panel>
    )
}

export default ProjectsPanel;

// () => {setSelectedProjectIndex(project.index)}} 