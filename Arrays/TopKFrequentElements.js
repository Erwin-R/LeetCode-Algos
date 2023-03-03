// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

function topKFrequent(nums, k) {
    const ans = new Array(k).fill(0); //creates a new array of k length and fills each index with 0 so it would be [0, 0]

    let map = {}
    for (i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
    }

    const uniqueNums = Object.entries(map).sort((a, b) => b[1] - a[1]); //Object.entries(map) takes the key value pairs of the map we made and puts it into an array in the order they were put in and the .sort sorts the values by the second index of the entry arrays from largest to smallest value

    for (j = 0; j < k; j++) {
        ans[j] = uniqueNums[j][0];
    }

    return ans
};

map = {
    1:3,
    2:2,
    3:1
}

uniqueNums = [[1,3], [2,2], [3,1]]