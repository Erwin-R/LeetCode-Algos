/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1
    let i = 0

    while(i <= right){
        if(nums[i] == 0){
            [nums[left], nums[i]] = [nums[i], nums[left]]
            left++
        } else if(nums[i] == 2){
            [nums[right], nums[i]] = [nums[i], nums[right]]
            right--
            i--
        }

        i++
    }
};