//Time: O(n)
//Space: O(1)
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {

    let count = 0;
    while (n) {
        if ((n & 1) == 1) {
            count++;
        }
        n = n >>> 1; // same as n / 2
    }
    return count;
};
