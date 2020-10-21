import React, {useState} from "react";
import Cell from './cell'
import styled from 'styled-components'

function Grid(){
    const [gridSize, setGridSize] = useState(30);
    let aliveList = [];
    let grid = new Array(gridSize);
    // generating grid
    for (let i = 0; i < grid.length; i++){
        let row = new Array(gridSize)
        for(let j = 0; j < gridSize; j++){
            row[j] = {cell: <Cell cords={[i, j]} liveList={aliveList}/>, x: i, y: j}
        }
        grid[i] = row
    }

    // set number of cells, then render based off of those number of cells

    // stylings
    let WrapperDiv = styled.div`
        display: inline-block;
        width: 80%;
        padding: 0;
        margin-top: 50px;
        min-height: 500px;
    `
    let RowDiv = styled.div`
        display: inline-block;
        justify-content: center;
        margin-bottom: 0;
        margin-top: 0;
        padding: 0;
        height: 10px;
    `

    return(
        <WrapperDiv className="gridWrapper">
            {grid.map(row => {
                    return(
                        <RowDiv>
                            {row.map(item => {return(item.cell)})}
                        </RowDiv>
                    )          
            })}
        </WrapperDiv>
    )
}

export default Grid;