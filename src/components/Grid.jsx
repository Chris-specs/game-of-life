// Common
import { useState } from "react"
// Components
import Button from "./shared/Button"
// Utils
import { cleanCells, randomCells, simulation } from "../utils/grid"
import { blinker, chain, glider, toad } from "../utils/patterns"
// Constants
import { COLS } from "../constants"

const Cell = ({ alive, onClick = () => {} }) => (
    <>
        <div
            onClick={onClick}
            className={`w-4 h-4 cursor-pointer border-[0.5px] border-black ${ alive ? 'bg-white' : 'bg-transparent' }`}
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

    const handlePattern = ( fig ) => {
        handleClean()
        setGrid((g) => fig(g))
    }

    return (
        <>
            <div className='w-full flex justify-between py-4'>
                <Button onClick={handleRun} className='px-6 py-2'>{ isRun ? 'Stop' : 'Start'}</Button>
                <Button onClick={handleReset} className='px-6 py-2'>Reset</Button>
                <Button onClick={handleClean} className='px-6 py-2'>Clean</Button>
            </div>
            <div className="flex flex-col-reverse">
                <div className="flex justify-between py-4">
                    <Button onClick={() => handlePattern(blinker)} className='!bg-transparent border border-light overflow-hidden'><img className='w-16 h-16' src='/assets/img/blinker.png' alt="Blinker" /></Button>
                    <Button onClick={() => handlePattern(toad)} className='!bg-transparent border border-light overflow-hidden'><img className='w-16 h-16' src='/assets/img/toad.png' alt="Toad" /></Button>
                    <Button onClick={() => handlePattern(chain)} className='!bg-transparent border border-light overflow-hidden'><img className='w-16 h-16' src='/assets/img/chain.png' alt="Chain" /></Button>
                    <Button onClick={() => handlePattern(glider)} className='!bg-transparent border border-light overflow-hidden'><img className='w-16 h-16' src='/assets/img/glider.png' alt="Glider" /></Button>
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
            </div>
        </>
    )
}

export default Grid