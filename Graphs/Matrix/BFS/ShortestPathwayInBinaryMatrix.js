//Time: O(n * m) / O(n^2)
//Space: O(n * m)

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


//Solution 2
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let rows = grid.length, cols = grid[0].length
    let queue = [[0, 0, 1]]
    let directions = [[0,1], [0,-1], [1, 0], [-1, 0], [1, 1], [-1, -1] , [-1, 1], [1, -1]]
    let visited = new Set(['0,0']);

    while(queue.length){
        let [row, col, length] = queue.shift()
        if(Math.min(row, col) < 0 || row == rows || col == cols || grid[row][col] == 1){
            continue
        }
        if(row == rows - 1 && col == cols - 1){
            return length
        }

        for(const [dr, dc] of directions){
            let [x,y] = [row + dr, col + dc]
            let key = `${x},${y}`

            //add this line here since if we just add to visit without this if, it will always hit if on line 53
            if(!visited.has(key)){
                queue.push([x, y, length + 1])
                visited.add(key)
            }
        }

    }


    return -1    
};
