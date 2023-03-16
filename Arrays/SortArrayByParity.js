var sortArrayByParity = function(nums) {
    let pointer = 0;

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] % 2 == 0){
            [nums[i], nums[pointer]] = [nums[pointer], nums[i]]
            pointer++
        }
    }

    return nums
};
