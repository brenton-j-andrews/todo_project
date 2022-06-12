import styled from "styled-components";

// Edit button.
export const EditButton = styled.button`
    border: 2px solid #4caf50;
    background-color: #4caf50;
    padding: 8px 16px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: #FFF;
    }
`

// Sidebar tasks button.
export const TasksButton = styled.button`
    border: 2px solid #4caf50;
    background-color: #4caf50;
    color: #FFF;

    padding: 8px;
    margin: 5px;
    width: 250px;

    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: #FFF;
        color: #4caf50;
    }
`

// Project select button.
export const ProjectButton = styled.button`
    border: 2px solid #FD7702;;
    background-color: #FD7702;;
    color: #fff;
    padding: 8px 16px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: #FFF;
        color: black;
    }
`

// Selected project button.
export const SelectedProjectButton = styled(ProjectButton)`
    background-color: #282c34;

    &:hover {
        background-color: #282c34;
        color: #fff;
    }
`