//Time: O(n * m)
//Space: O(n * m)

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))

    // console.log(dp)
    
    for(let i = text1.length - 1; i > -1; i--){
        console.log(dp)
        for(let j = text2.length - 1; j > -1; j--){
            if(text1[i] == text2[j]){
                dp[i][j] = 1 + dp[i + 1][j + 1]  
            } else{
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
            }
        }
    }

    console.log(dp)

    return dp[0][0]
};