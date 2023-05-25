


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]

        for i in range(len(nums)):
            subSum = 0
            for j in range(i, len(nums)):
                subSum += nums[j]
                maxSum = max(subSum, maxSum)

        return maxSum