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
