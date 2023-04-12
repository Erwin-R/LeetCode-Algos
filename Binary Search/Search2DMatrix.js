/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
*/

//Time log(n + m) 

var searchMatrix = function(matrix, target) {
    let [rows, cols] = [matrix.length, matrix[0].length];
    let [top, bot] = [0, rows-1];
    
    while(top <= bot){
        let row = Math.floor((top +  bot) / 2);
        if(target > matrix[row][cols-1]) {
            top = row + 1;
        } else if(target < matrix[row][0]) {
            bot = row - 1; 
        } else {
            break;
        }
    }
    
    if(!(top <= bot)) {
        return false;
    }
    
    let row = Math.floor((top + bot) / 2);
    let [l, r] = [0, cols-1];
    while(l<=r){
        let m = Math.floor((l + r) /2);
        if(target > matrix[row][m]) {
            l = m +1;
        } else if(target < matrix[row][m]) {
            r = m - 1;
        } else if(target == matrix[row][m]) {
            return true;
        }
    }
    return false;

};


//Time log(n * m) 

//ex: [[1]]
//target = 1

var searchMatrix = function(matrix, target) {
    const [rows, cols] = [matrix.length, matrix[0].length];
    let [left, right] = [0, rows * cols - 1];


    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const [row, col] = [Math.floor(mid / cols), mid % cols];
        const guess = matrix[row][col];

        if (guess === target) return true;
        else if (target > guess) left = mid + 1;
        else if (target < guess) right = mid - 1;

    }

    return false
};


    //rows = 1
    //cols = 1

    //left = 0
    //right = 0


    //target = 1

    //first iteration
    // mid = 0
    // row = 0
    // col = 0
    // guess = matrix[0][0] = 1
console.log(Math.floor(2/4))
console.log(0%1)