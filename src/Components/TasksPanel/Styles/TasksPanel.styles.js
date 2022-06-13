import styled from "styled-components";


export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 30px 75px 0px 75px;
`

export const TaskHeader = styled(TaskWrapper)`
    width: 100%;
    padding: 0px;
    & h1 {
        margin-bottom: 10px;
        font-size: 40px;
        color: #282c34;
    }

    & p {
        text-align: left;
        margin: 0px;
        padding: 5px;
        background-color: #ececec;
        width: 100%;
    }
`

export const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Task = styled.div`
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    margin: 5px;
    padding: 5px;
    background-color: orange;

    & p {
        margin: 0px;
        padding: 5px;
    }
`