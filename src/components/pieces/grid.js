import React, {useState} from "react";
import Cell from './cell'
import styled from 'styled-components'

function Grid(){
    const [gridSize, setGridSize] = useState(25);
    let emptyGrid = []
    for (let i = 0; i < gridSize; i++){
        emptyGrid.push(".")
    }


    // set number of cells, then render based off of those number of cells

    // stylings
    let WrapperDiv = styled.div`
        display: inline-block;
        width: 80%;
        padding: 0;
        margin-top: 50px;
    `
    let RowDiv = styled.div`
        display: inline-block;
        justify-content: center;
        margin-bottom: 0;
        margin-top: 0;
        padding: 0;
        height: 10px;
    `
    let CellDiv = styled.div`
        display: inline-block;
        margin-bottom: 0;
        margin-top: 0;
        height: 100%;
    `
    return(
        <WrapperDiv>
            {emptyGrid.map(() => {
                for (let i = 0; i < gridSize; i++){
                    return(
                        <RowDiv>
                            {emptyGrid.map(() => {
                                for (let j = 0; j < gridSize; j++){
                                    return(<Cell />)
                                }
                            })}
                        </RowDiv>
                    )
                }
            })}
        </WrapperDiv>
    )
}

export default Grid;