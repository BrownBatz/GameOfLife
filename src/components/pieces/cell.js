import React, {useState} from "react";
import styled from 'styled-components'

function Cell(cords, liveList){
    const [aliveDead, setAliveDead] = useState(false);
    const [coordinates, setCoordinates] = useState(cords)

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

    let handleOnClick = () => {
        aliveDead === false ? setAliveDead(true) : setAliveDead(false)
        console.log(coordinates)
    }

    return(
        <WrapperDiv onClick={handleOnClick}>
            {aliveDead === false ? <DeadCell /> : <AliveCell />}
        </WrapperDiv>
    )
}

export default Cell;