import styled from "styled-components";


export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

    & button {
        margin-bottom: 10px;
    }
`

export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    margin: 5px 0px 5px 0px;

    background-color: orange;

    & p {
        padding: 0px 20px;
    }
`

export const AddTask = styled.form`
    background-color: orange;
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin-bottom: 10px;
    padding: 10px 20px;

    & input {
        margin-left: 5px;
    }

    & div {
        display: flex;
        flex-direction: column;
    }
`

export const TaskDiv = styled.div`
    display: flex;

    & button {
        margin: 10px 10px;
    }
`