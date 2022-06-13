import styled from "styled-components";


export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export const TaskHeader = styled(TaskWrapper)`
    padding: 30px 0px 0px 75px;
    & h1 {
        margin-bottom: 10px;
        font-size: 40px;
        color: #282c34;
    }

    & p {
        margin: 0px;
        padding: 5px;
        background-color: #ececec;
    }
`