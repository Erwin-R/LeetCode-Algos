/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []

    let subset = []

    const dfs = (i) => {
        if(i >= nums.length){
            res.push([...subset])
            return
        }

        //decision to include nums[i]
        subset.push(nums[i])
        dfs(i + 1)
        subset.pop()

        //decision to not include nums[i]
        dfs(i + 1)
    }

    dfs(0)

    return res 
};

//Time: O(n * 2^n), Space: O(n)