// Common
import { useState } from "react"
// Components
import Button from "./shared/Button"
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
    const [isRun, setIsRun] = useState(false)
    const [interval, set] = useState(null)

    const handleRun = () => {
        setIsRun(!isRun)

        if (isRun) {
            clearInterval(interval)
        } else {
            set(setInterval(() => {
                setGrid(simulation(grid))
            }, 200));
        }
    }

    const handleReset = () => {
        clearInterval(interval)
        setIsRun(false)
        setGrid(randomCells)
    }

    return (
        <>
            <div className='flex gap-4 py-4'>
                <Button onClick={handleRun} className='px-4 py-2'>{ isRun ? 'Stop' : 'Start'}</Button>
                <Button onClick={handleReset} className='px-4 py-2'>Reset</Button>
            </div>
            <div
                style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1rem))` }}
                className='grid w-fit bg-dark border border-light rounded-md overflow-hidden'
            >
                {
                    grid.map(( row, iR ) => 
                        row.map(( col, iC ) => (
                            <Cell key={iC} alive={ grid[iR][iC] } />
                        ))
                    )
                }
            </div>
        </>
    )
}

export default Grid