// Constants
import { ROWS, COLS, POSITIONS } from "../constants";

export const randomCells = () => (
    Array(ROWS).fill().map(( row ) => (
        Array(COLS).fill().map(( col ) => Math.floor(Math.random() * 2) )
    ))
)

export const cleanCells = () => (
    Array(ROWS).fill().map(( row ) => (
        Array(COLS).fill(0)
    ))
)

export const simulation = ( grid ) => (
    Array(ROWS).fill().map(( row, iR ) => (
        Array(COLS).fill().map(( col, iC ) => {
            let aliveNeighbors = 0
            
            POSITIONS.forEach(([ x, y ]) => {
                const newX = iR + x
                const newY = iC + y
                
                if (newX >= 0 && newX < ROWS && newY >= 0 && newY < COLS) {
                    aliveNeighbors += grid[newX][newY];
                }
            })

            if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                return 0;
            } else if (aliveNeighbors === 3) {
                return 1;
            }
            return grid[iR][iC]
        })
    ))
)