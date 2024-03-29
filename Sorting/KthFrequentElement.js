/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


let nums = [1,1,1,2,2,2,3], k = 2
var topKFrequent = function(nums, k) {
    let map = {}
    let freq = new Array(nums.length + 1).fill([]) //have to have nums.length + 1 because if all numbers in array are the same then you need the nums.length + 1 index to put them in

    for(let i = 0; i < nums.length;i++){
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    console.log(map)
    
    for(let num in map){
        freq[map[num]] = [...freq[map[num]], num]
        console.log("------------------")
        console.log(freq)
    }

    let res = []

    for(let i = freq.length - 1; i > 0; i--){
        for(let num of freq[i]){
            res.push(num);
            console.log(res)
            if(res.length == k) return res
        }
    }
};

//with bucket sort it has O(n) time and O(n) space

console.log(topKFrequent(nums, k))