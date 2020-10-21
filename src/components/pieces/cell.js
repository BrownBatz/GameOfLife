import React, {useState} from "react";
import styled from 'styled-components'

function Cell(){
    const [aliveDead, setAliveDead] = useState(false);

    // stylings
    const WrapperDiv = styled.div`
        width: 10px;
        height: 10px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
    `
    const DeadCell = styled.div`
        background-color: white;
        width: 100%;
        height: 100%;
        margin-bottom: 0;
        margin-top: 0;
    `
    const AliveCell = styled.div`
        background-color: blue;
        width: 100%;
        height: 100%;
        margin-bottom: 0;
        margin-top: 0;
    `
    return(
        <WrapperDiv onClick={ () => aliveDead === false ? setAliveDead(true) : setAliveDead(false)}>
            {aliveDead === false ? <DeadCell /> : <AliveCell />}
        </WrapperDiv>
    )
}

export default Cell;