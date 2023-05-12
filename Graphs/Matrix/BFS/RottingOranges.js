/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = []
    let minutes = 0
    let fresh = 0

    let rows = grid.length, cols = grid[0].length

    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if(grid[row][col] == 1){
                fresh += 1
            }
            if(grid[row][col] == 2){
                queue.push([row, col])
            }

        }
    }

    //down, up, right, left
    let directions = [[0,1], [0, -1], [1, 0], [-1,0]]

    while(queue.length && fresh > 0){
        queueLength = queue.length
        for(let i = 0; i < queueLength; i++){ //keeps snapshot of queue length before we add
            let [r, c] = queue.shift()
            
            for(const [dr, dc] of directions){
                let [row, col] = [r + dr, c + dc]

                if(Math.min(row, col) < 0 || row == grid.length || col == grid[0].length || grid[row][col] !== 1){
                    continue
                }

                grid[row][col] = 2
                queue.push([row, col])
                fresh -= 1
            }
        }

        minutes += 1
    }

    return fresh == 0 ? minutes : -1 

};