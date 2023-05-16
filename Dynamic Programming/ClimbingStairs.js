//Bottoms-Up approach 
//Time: O(n), Space: O(1)

var climbStairs = function(n) {
    let [one, two] = [1, 1] 

    for(let i = 0; i < n - 1; i++){
        temp = one
        one = one + two
        two = temp
    }

    return one
};


//Top-Down Approach (Using memoization)
//Time O(n), Space: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, cache = {}) {
    if(n <= 1) return n
    if(cache[n]) return cache[n]

    cache[n] = fib(n -1) + fib(n - 2)

    return cache[n]
};
