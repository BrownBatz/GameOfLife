import React, { useState } from "react";
import Grid from './pieces/grid'
import Cell from './pieces/cell'
import styled from 'styled-components'

function GameOfLife(){
    const [liveGrid, setLiveGrid] = useState(<Grid />);
    const [nextGeneration, setNextGeneration] = useState([]);
    function update(){
        
        // logic to update buffer grid then switch
    }

    let WrapperDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        height: auto;
        flex-wrap: wrap;
    `

    let NextStepButton = styled.div`
        display: inline-block;
        width: 10vw;
        background-color: blue;
        margin: 0 auto;
    `

    return(
        <div className="GameContainer">
            {liveGrid}    
            <button className="NextStepButton"><h2>Next Step</h2></button>    
        </div>
    )
}

export default GameOfLife;