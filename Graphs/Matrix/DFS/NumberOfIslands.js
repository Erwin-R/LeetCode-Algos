/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    let rows = grid.length, cols = grid[0].length

    
    const dfs = (row, col) => {
        if(Math.min(row, col) < 0 || row == rows || col == cols || grid[row][col] == "0"){
            return 
        }
        
        grid[row][col] = "0"

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)

    }

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