/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n

    let prev = 0 
    let current = 1 
    let sum = 0; 

    for(let i = 2; i <= n; i++){
        sum = prev + current
        prev = current
        current = sum
    }

    return sum
};