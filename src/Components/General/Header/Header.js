import React from "react";

// Import assets and styled components.
import { StyledHeader, StyledImg } from "./Header.styles";
import todo_logo from "../../../Assets/to-do-list.png";


const Header = () => {
    return (
        <StyledHeader>
            <div>
                <h1> To Do List </h1>
                <StyledImg src={todo_logo} alt="icon"></StyledImg>
            </div>
            
            
            
        </StyledHeader>
    )
}

export default Header;