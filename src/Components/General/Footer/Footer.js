import React from "react";

import { StyledFooter } from "./Footer.styles";


const Footer = () => {
    return (
        <StyledFooter>
            <p> Copyright {(new Date().getFullYear())} - Brenton Andrews - <a href="https://github.com/brenton-j-andrews/todo_project"> GitHub </a></p>  
        </StyledFooter>
    )
}

export default Footer;