import React, {useState} from "react";
import Cell from './cell'
import styled from 'styled-components'

function Grid(){
    // at least 25 x 25 but i think i want a 50 x 50
    let grid = []
    // can change number later
    // grid creation
    for (var i = 0; i < 50; i++){
        var row = []
        for (var j = 0; j < 50; j++){
            row.push(<Cell />)
        }
        grid.push(row)
    }

    // stylings
    let WrapperDiv = styled.div`
        display: inline-block;
        width: 80%;
        padding: 0;
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
            {grid.map(row => {
                return(
                    <RowDiv>
                        {row.map(cell => { return <CellDiv>{cell}</CellDiv>})}
                    </RowDiv>    
                )
            })}
        </WrapperDiv>
    )
}

export default Grid;