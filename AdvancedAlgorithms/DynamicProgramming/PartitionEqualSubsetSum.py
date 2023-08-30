#Brute Force Approach
#Time: O(2^N)
#Space: O(N)
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        def dfs(nums, n, subsetSum):
            #Base cases 
            if subsetSum == 0: 
                return True 
            if n == 0 or subsetSum < 0:
                return False 
            
            #checking to see if paths of subsetSum can be made
            result = (dfs(nums, n - 1, subsetSum - nums[n - 1])
                    or dfs(nums, n - 1, subsetSum))
            
            return result
        
        
        #first find sum of array
        arraySum = sum(nums)

        #if array sum is odd, it cannot be partitioned into subsets
        if arraySum % 2:
            return False 

        subsetSum = arraySum // 2 
        n = len(nums)
        return dfs(nums, n - 1, subsetSum)
    
#DP bottom-up approach
#where N is the elements in nums and sumNums is the sum after subtracting the elements
#Time: O(N * sumNums)
#since set length is based on the target size 
#Space: O(sum(nums))
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        if sum(nums) % 2:
            return False 

        dp = set()
        dp.add(0)
        targetSum = sum(nums) // 2

        for i in range(len(nums) -1, -1, -1):
            nextDp = set()
            #cant change size of set during iteration(this is a thing?)
            # for t in dp: 
            #     dp.add(t + num)
            #     dp.add(t)

            for t in dp: 
                nextDp.add(t + nums[i])
                nextDp.add(t)
            dp = nextDp
            print(dp)
        return True if targetSum in dp else False