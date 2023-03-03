var sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++){
        j = i - 1
        while(j >= 0 && nums[j] > nums[j + 1]){
            let temp = nums[j + 1];
            nums[j + 1] = nums[j];
            nums[j] = temp;
            j--;
        }
    }

    return nums
};