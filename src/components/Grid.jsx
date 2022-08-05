// Common
import { useState } from "react"
// Components
import Button from "./shared/Button"
// Utils
import { cleanCells, randomCells, simulation } from "../utils"
// Constants
import { COLS } from "../constants"

const Cell = ({ alive, onClick = () => {} }) => (
    <>
        <div
            onClick={onClick}
            className={`w-4 h-4 cursor-pointer ${ alive ? 'bg-white' : 'bg-transparent' }`}
        />
    </>
)

const Grid = () => {
    
    const [grid, setGrid] = useState(randomCells)
    const [isRun, setIsRun] = useState(false)
    const [interval, set] = useState(null)

    const handleRun = () => {
        setIsRun(!isRun)

        if (isRun) {
            clearInterval(interval)
        } else {
            set(setInterval(() => {
                setGrid((g) => simulation(g))
            }, 100));
        }
    }

    const handleReset = () => {
        clearInterval(interval)
        setIsRun(false)
        setGrid(randomCells)
    }

    const handleClean = () => {
        clearInterval(interval)
        setIsRun(false)
        setGrid(cleanCells)
    }

    const handleCellClick = (r, c) => {
        const newGrid = [...grid]
        newGrid[r][c] = grid[r][c] ? 0 : 1
        setGrid(newGrid);
    }

    return (
        <>
            <div className='flex gap-4 py-4'>
                <Button onClick={handleRun} className='px-4 py-2'>{ isRun ? 'Stop' : 'Start'}</Button>
                <Button onClick={handleReset} className='px-4 py-2'>Reset</Button>
                <Button onClick={handleClean} className='px-4 py-2'>Clean</Button>
            </div>
            <div
                style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1rem))` }}
                className='grid w-fit bg-dark border border-light rounded-md overflow-hidden'
            >
                {
                    grid.map(( row, iR ) => 
                        row.map(( col, iC ) => (
                            <Cell key={iC} alive={ grid[iR][iC] } onClick={() => handleCellClick(iR, iC)} />
                        ))
                    )
                }
            </div>
        </>
    )
}

export default Grid