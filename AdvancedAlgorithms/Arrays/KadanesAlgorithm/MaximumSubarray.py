#Brute Force Solution
#Time: O(n)
#Space: O(1)


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]

        for i in range(len(nums)):
            subSum = 0
            for j in range(i, len(nums)):
                subSum += nums[j]
                maxSum = max(subSum, maxSum)

        return maxSum
    


# Kadane's Algorithm (Optimized Solution)
# Time: O(n)
# Space: O(1)

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]
        subSum = 0

        for i in range(len(nums)):
            subSum = max(subSum, 0)
            subSum += nums[i]
            maxSum = max(maxSum, subSum)

        return maxSum