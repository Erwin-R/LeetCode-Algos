// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


let nums = [-1,0,1,2,-1,-4]
//[[-1,-1,2],[-1,0,1]]

const tripletArray = (nums) => {
    let outputArray = []


    nums.sort((a,b) => a - b)
    
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i - 1] == nums[i]) continue
        let pointer1 = i + 1
        let pointer2 = nums.length - 1

        while(pointer1 < pointer2){
            if(nums[i] + nums[pointer1] + nums[pointer2] == 0){
                outputArray.push([nums[i], nums[pointer1], nums[pointer2]])
                pointer1++
                while(nums[pointer1] == nums[pointer1 - 1] && pointer1 < pointer2){
                    pointer1++
                }
            } else if(nums[i] + nums[pointer1] + nums[pointer2] > 0){
                pointer2--
            }else{
                pointer1++
            }

        }

        
    }

    return outputArray 
}

console.log(tripletArray(nums))