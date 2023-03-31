/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let outputArray = []

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                outputArray.push(i, j)
            }
        }
    }


    return outputArray
};

//this algo has O(n^2) time 


var twoSum = function(nums, target) {
    let map = {}

    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i]
        
        if(map[difference]){
            return [i, map[difference] - 1]
        }
        
        map[nums[i]] = i + 1
        
        

    }



};

//this algo is O(n) time