#Time: O(n)
#Space: O(n)

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        curSum = 0
        res = 0
        #add a prefix sum of 0 as this is default value for sum of 0 index 
        # using a map to count the number of times the curSum occurs
        prefixSums = { 0: 1}

        for n in nums: 
            curSum += n
            #calculate the diff as it will tell us which subarrays with prefixSum of diff we can remove to add up to k 
            diff = curSum - k 

            res += prefixSums.get(diff, 0)
            prefixSums[curSum] = 1 + prefixSums.get(curSum, 0)

        return res