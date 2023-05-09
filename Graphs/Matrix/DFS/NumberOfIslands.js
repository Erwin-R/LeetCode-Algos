//Time: O(N * M) where n is number of rows and m is number of colums
//Space: Worst case O(N * M) in case the grid map is filled with lands where dfs goes by M * N deep

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0 // the counted islands
    let rows = grid.length, cols = grid[0].length

    // Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
    const dfs = (row, col) => {
        //Let's return IF
        // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
        if(Math.min(row, col) < 0 || row == rows || col == cols || grid[row][col] == "0"){
            return 
        }
        
        //Otherwise, we should explore it!
        //First let's set the current spot to "0"
        grid[row][col] = "0"

        //PossibilitiesL
        // down
        dfs(row + 1, col)
        //Up
        dfs(row - 1, col)
        //Right
        dfs(row, col + 1)
        //Left
        dfs(row, col - 1)

    }

    //Go though each cell of the 2d array/grid 
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if(grid[row][col] == "1"){
                dfs(row, col)
                count += 1 
            }
        }
    }




    return count


};