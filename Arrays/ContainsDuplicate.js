// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


var nums1 = [1,2,3,1]
var nums2 = [1,2,3,4]

function containsDuplicate (nums){  //only passes some test cases
    let arr = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] in arr){
            return true
        } 
        arr.push(nums[i])
    }

    return false
}

function containsDuplicate2 (nums){ //passes all solutions
    const uniqueNums = new Set; //Set is a tool which can only contain unique values
    for(let i = 0; i < nums.length; i++){
        if(uniqueNums.has(nums[i])){
            return true;
        } else {
            uniqueNums.add(nums[i]);
        }
    }
    return false;
}


console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));


