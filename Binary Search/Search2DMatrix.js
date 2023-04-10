/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0, right = matrix.length - 1

    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        let row = matrix[middle]

        if(target >= row[0] && target <= row[row.length - 1]){
            let innerL = 0, innerR = row.length - 1
            while(innerL <= innerR){
                let innerM = Math.floor((innerL + innerR) / 2)

                if(target == row[innerM]){
                    return true
                } else if(target < row[innerM]){
                    innerR = middle - 1
                } else{
                    innerL = middle + 1
                }
            }

            return false
        } else if(target > row[row.length - 1]){
            left = middle + 1
        } else{
            right = middle - 1
        }
        
    }

    return false
};

//need to find out the details