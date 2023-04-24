/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let combination = []
    let currentCombination = []

    const helper = (i, sum) => {

        if(sum == target){
            combination.push([...currentCombination])
            return // we are done with this combination so we break out of it
        }

        if(i >= candidates.length || sum > target){
            return 
        }
        
        currentCombination.push(candidates[i])
        helper(i, sum + candidates[i]) //dont increment i yet since we may not be done with number to add.
        currentCombination.pop()

        helper(i + 1, sum) // not including the number in this call so we just increment i and dont add candidates[i] to sum
    } 

    helper(0, 0)

    return combination
};