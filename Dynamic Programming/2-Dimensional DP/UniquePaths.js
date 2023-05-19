//Time: O(n * m)
//Space: O(n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    prevRow = new Array(n).fill(0)

    for(let i = m - 1; i > -1; i--){
        currRow = new Array(n).fill(0)
        currRow[n - 1] = 1
        for(let i = n - 2; i > -1; i--){
            currRow[i] = currRow[i + 1] + prevRow[i]
        }
        prevRow = currRow
        console.log(prevRow)
    }

    return prevRow[0]
};