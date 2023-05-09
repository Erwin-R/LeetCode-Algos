//Time: O(N * M) where n is number of rows and m is number of colums
//Space: Worst case O(N * M) in case the grid map is filled with lands where dfs goes by M * N deep

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    let rows = grid.length, cols = grid[0].length

    const dfs = (row, col) => {
        if(Math.min(row, col) < 0 || row == rows || col == cols ||grid[row][col] == 0){
            return 0
        }

        grid[row][col] = 0

        return 1 + dfs(row + 1, col) +
        dfs(row - 1, col) +
        dfs(row, col + 1) + 
        dfs(row, col - 1) 
    }

    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if(grid[row][col] == 1){
                maxArea = Math.max(maxArea, dfs(row, col))
            }
        }
    }


    return maxArea
};