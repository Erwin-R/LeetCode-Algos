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
    
    # [5, -3, 5]

#Before loop:
#curMax = 0
#curMin = 0
#total = 0
#globMax = 5
#globMin = 5


# First iteration
#curMax = 5
#curMin = 5
#total = 5
#globMax = 5
#globMin = 5

# Second iteration
#curMax = 2
#curMin = -3
#total = 2
#globMax = 5
#globMin = -3


# Third iteration
#curMax = 7
#curMin = 2
#total = 7
#globMax = 7
#globMin = -3