
let nums = [3,2,1,5,6,4]
let k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let kthLargest = nums.length - k

    const quickSelect = (left, right) => {
        let pivot = nums[right], pointer = left

        for(let i = pointer; i < right; i++){
            if(nums[i] <= pivot){
                let temp = nums[i]
                nums[i] = nums[pointer]
                nums[pointer] = temp
                pointer++
            }
        }

        nums[right] = nums[pointer]
        nums[pointer] = pivot

        if(pointer > kthLargest) return quickSelect(left, pointer - 1)
        else if(pointer < kthLargest) return quickSelect(pointer, right)
        else return nums[pointer]
    }

    return quickSelect(0, nums.length - 1)
};

console.log(findKthLargest(nums, k))