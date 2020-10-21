import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"

function Nav(){
    let WrapperDiv = styled.div`
        width: 100vw;
        background-color: yellow;
    `
    let NavItem = styled.div`
        display: inline-block;
        width: 20%;
    `
    return(
        <WrapperDiv>
            <NavItem>
                <Link to="/"><h1>Home</h1></Link>
            </NavItem>
            <NavItem>
                <Link to="/about"><h1>About</h1></Link>
            </NavItem>
        </WrapperDiv>
    )
}

export default Nav;