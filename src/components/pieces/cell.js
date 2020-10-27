import React, {useState} from "react";
import styled from 'styled-components'

function Cell(cords, liveList, alive){
    const [aliveDead, setAliveDead] = useState(false);
    const [coordinates, setCoordinates] = useState(cords)

    let handleOnClick = () => {
        aliveDead === false ? setAliveDead(true) : setAliveDead(false)
        console.log(coordinates)
    }

    return(
        <div className="CellWrapper" onClick={handleOnClick}>
            {aliveDead === false ? <div className="DeadCell"/> : <div className="AliveCell" />}
        </div>
    )
}

export default Cell;