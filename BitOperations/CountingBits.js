//Time: O(n)
//Space: O(1)

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    //want to make an array of length n + 1 
    //want to make offset variable to calculate change in bits per 2 base (offset * 2 is equal to new )
    let ans = new Array(n + 1).fill(0) 
    let offset = 1

    //to count the number of 1s in binary representation of i we loop 
    //the number of 1's repeats every offset (n * 2)
    for(let i = 1; i < n + 1; i++){
        if(offset * 2 == i){
            offset = i 
        }
        
        ans[i] = 1 + ans[i - offset]
    }

    return ans
};