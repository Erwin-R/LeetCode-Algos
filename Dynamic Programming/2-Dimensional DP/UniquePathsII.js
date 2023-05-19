//Time: O(N * M)
//Space: O(N * M)

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = obstacleGrid.length, col = obstacleGrid[0].length

    //create array with length of row and fill with 0
    //for each 0 map an array with length col and fill with 0

    const dp = new Array(row).fill(0).map(() => new Array(col).fill(0))

    console.log(dp)

    const dfs = (r, c) =>{ 
        if(r == row || c == col || obstacleGrid[r][c]) return 0
        if(dp[r][c]) return dp[r][c]
        if(r == row - 1 && c == col - 1) return 1

        dp[r][c] = dfs(r + 1, c) + dfs(r, c + 1)

        return dp[r][c]
        
    }

    return dfs(0, 0)
};