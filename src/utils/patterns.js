import { ROW_CENTER as r, COL_CENTER as c } from "../constants"

export const blinker = ( grid ) => {
    grid[r - 1][c] = 1
    grid[r][c] = 1
    grid[r + 1][c] = 1
    
    return grid
}

export const toad = ( grid ) => {
    grid[r - 1][c] = 1
    grid[r - 1][c + 1] = 1
    grid[r - 1][c + 2] = 1
    grid[r][c - 1] = 1
    grid[r][c] = 1
    grid[r][c + 1] = 1
    
    return grid
}

export const chain = ( grid ) => {
    grid[r][c - 4] = 1
    grid[r][c - 3] = 1
    grid[r - 1][c - 2] = 1
    grid[r + 1][c - 2] = 1
    grid[r][c - 1] = 1
    grid[r][c] = 1
    grid[r][c + 1] = 1
    grid[r][c + 2] = 1
    grid[r - 1][c + 3] = 1
    grid[r + 1][c + 3] = 1
    grid[r][c + 4] = 1
    grid[r][c + 5] = 1
    
    return grid
}

export const glider = ( grid ) => {
    grid[r - 2][c - 1] = 1
    grid[r - 1][c] = 1
    grid[r][c] = 1
    grid[r][c - 1] = 1
    grid[r][c - 2] = 1
    
    return grid
}