//Time: O(n)
//Space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let rob1 = 0, rob2 = 0

    for(const i of nums){
        temp = Math.max(rob1 + i, rob2)
        rob1 = rob2
        rob2 = temp
    }

    return rob2
};

//temp = Math.max(0 + 1, 0) = 1
// rob1 = 0
//rob2 = 1

// temp = Math.max(0 + 2, 1) = 2
// rob1 = 1
// rob2 = 2

// temp = Math.max(1 + 3, 2) = 4
// rob1 = 2
// rob2 = 4


// temp = Math.max(2 + 1, 4) = 4
// rob1 = 4
// rob2 = 4
