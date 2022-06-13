import styled from "styled-components";


export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    flex-grow: 1;
    background-color: red;
    height: 100%;
`

export const TaskHeader = styled(TaskWrapper)`
    width: 100%;
    padding: 30px 75px 0px 75px;

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
        width: 70%;
    }
`