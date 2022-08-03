// Common
import { useState } from "react"
// Utils
import { randomCells, simulation } from "../utils"
// Constants
import { COLS } from "../constants"

const Cell = ({ alive }) => (
    <>
        <div
            className={`w-4 h-4 ${ alive ? 'bg-white' : 'bg-transparent' }`}
        />
    </>
)

const Grid = () => {
    
    const [grid, setGrid] = useState(randomCells)
    const [runing, setRuning] = useState(false)

    const handleClick = () => {
        setRuning(!runing)

        setInterval(() => {
            setGrid(simulation(grid))
        }, 200);
    }

    return (
        <>
            <button onClick={handleClick}>Start</button>
            <div
                style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1rem))` }}
                className='grid w-fit bg-gray-900 border border-gray-900'
            >
                {
                    grid.map(( row, iR ) => 
                        row.map(( col, iC ) => (
                            <Cell alive={ grid[iR][iC] } />
                        ))
                    )
                }
            </div>
        </>
    )
}

export default Grid