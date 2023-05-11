//Solution 1
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
	if (grid[0][0] === 1) return -1;

    let rows = grid.length, cols = grid[0].length
    let queue = [[0, 0, 1]]
    let directions = [[0,1], [0,-1], [1, 0], [-1, 0], [1, 1], [-1, -1] , [-1, 1], [1, -1]]

    while(queue.length){
        console.log(queue.length)
        let [row, col, length] = queue.shift()
        if(row == rows - 1 && col == cols - 1){
            return length
        }

        for(const [dr, dc] of directions){
            let x = row + dr
            let y = col + dc

            if(Math.min(x, y) < 0 || x == rows || y == cols || grid[x][y] == 1){
                continue
            }

            queue.push([x, y, length + 1])
            grid[x][y] = 1
            
        }

    }


    return -1
};


