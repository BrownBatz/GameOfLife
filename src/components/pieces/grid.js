import React, {useState} from "react";
import Cell from './cell'

function Grid(initial, oldGrid){
    const [gridSize, setGridSize] = useState(50);
    let aliveList = [];
    let grid = new Array(gridSize);
    // generating grid

    // does initial set up on first grid, if not first grid just goes through and preps the second grid.
    for (let i = 0; i < grid.length; i++){
        let row = new Array(gridSize)
        for(let j = 0; j < gridSize; j++){
            row[j] = {cell: <Cell cords={[i, j]} liveList={aliveList} alive={false}/>, x: i, y: j}
        }
        grid[i] = row
    }    


    return(
        <div className="GridWrapper">
            {grid.map(row => {
                    return(
                        <div className="RowDiv">
                            {row.map(item => {return(item.cell)})}
                        </div>
                    )          
            })}
        </div>
    )
}

export default Grid;