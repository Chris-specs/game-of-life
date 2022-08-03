// Constants
import { ROWS, COLS } from "../constants";

export const randomCells = () => (
    Array(ROWS).fill().map(( row ) => (
        Array(COLS).fill().map(( col ) => Math.floor(Math.random() * 2) )
    ))
)