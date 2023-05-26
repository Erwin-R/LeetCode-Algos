class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        globMin, globMax = nums[0], nums[0]
        curMin, curMax = 0, 0
        total = 0


        for num in nums: 
            curMax = max(curMax + num, num)
            curMin = min(curMin + num, num)
            total += num
            globMax = max(globMax, curMax)
            globMin = min(globMin, curMin)


        return max(globMax, total - globMin) if globMax > 0 else globMax