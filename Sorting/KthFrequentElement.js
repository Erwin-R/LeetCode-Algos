/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    let freq = new Array(nums.length + 1).fill([])

    for(let i = 0; i < nums.length;i++){
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    console.log(map)
    
    for(let num in map){
        freq[map[num]] = [...freq[map[num]], num]
        console.log(freq)
    }

    let res = []

    for(let i = freq.length - 1; i > 0; i--){
        for(let num of freq[i]){
            res.push(num);
            if(res.length == k) return res
        }
    }
};

//with bucket sort it has O(n) time and O(n) space