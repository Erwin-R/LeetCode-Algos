// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

Input: nums1 = [4,3,2,7,8,2,3,1]
Output: [5,6]

// Example 2:

Input: nums2 = [1,1]
Output: [2]

function findDisappearedNumbers(nums){
    const numsSet = new Set(nums);
    const resultArr = [];

    for(let i = 1; i <= nums.length; i++){ //start at i = 1 since nums[i] is in the range [1,n] on leetcode
        if(numsSet.has(i)) resultArr.push(i)
    }

    return resultArr
}

console.log(findDisappearedNumbers(nums1))


// for first case:
// length =8;
// set = {
//     4,
//     3,
//     2,
//     7,
//     8,
//     1
// }
// ans[]
// i=1

// if checks:
// does set have a key of 1? 
// it does so we increase i by 1