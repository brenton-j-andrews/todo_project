import styled from "styled-components";

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;  
    height: 100%;
    background-color: #FD7702;
`

export const EditButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 10px; */
`

export const Icon = styled.img`
    height: 40px;
    width: 40px;
`

export const TasksList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 50px;
`

export const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 50px;
    padding-bottom: 50px;
    width: 90%;
    color: white;
    background-color: #4caf50;
`
export const ProjectsListHeader = styled.h1`
    color: white;
    padding-bottom: 5px;
    border-bottom: 5px solid white;
`
