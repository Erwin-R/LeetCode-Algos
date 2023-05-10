/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let rows = grid.length, cols = grid[0].length
    let queue = [[0, 0, 1]]
    let directions = [[0,1], [0,-1], [1, 0], [-1, 0], [1, 1], [-1, -1] , [-1, 1], [1, -1]]
    let visited = new Set([0,0]);

    while(queue.length){
        let [row, col, length] = queue.shift()
        if(Math.min(row, col) < 0 || row == rows || col == cols || grid[row][col] == 1){
            continue
        }
        if(row == rows - 1 && col == cols - 1){
            return length
        }

        for(const [dr, dc] of directions){
            if(!visited.has([row + dr, col + dc])){
                queue.push([row + dr, col + dc, length + 1])
                visited.add([row + dr, col + dc])
            }
        }

    }


    return -1
};

let set = new Set

set.add((2,2))
console.log(set)

set.add([0,2])

console.log(set)

set.add(`${2} - ${3}`)

console.log(set)