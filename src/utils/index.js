// Constants
import { ROWS, COLS, POSITIONS } from "../constants";

export const randomCells = () => (
    Array(ROWS).fill().map(( row ) => (
        Array(COLS).fill().map(( col ) => Math.floor(Math.random() * 2) )
    ))
)

export const simulation = ( grid ) => (
    Array(ROWS).fill().map(( row, iR ) => (
        Array(COLS).fill().map(( col, iC ) => {
            let aliveNeighbors = 0

            POSITIONS.forEach(([ x, y ]) => {
                const newX = iR + x
                const newY = iC + y

                aliveNeighbors += (newX >= 0 && newX < ROWS && newY >= 0 && newY < COLS) ? grid[newX][newY] : 0
            })

            switch (true) {
                case aliveNeighbors < 2 || aliveNeighbors > 3 :
                    grid[iR][iC] = 0;
                    break;
            
                case grid[iR][iC] === 0 && aliveNeighbors === 3 :
                    grid[iR][iC] = 1;
                    break;
            
                default:
                    break;
            }
            return grid[iR][iC]
        } )
    ))
)