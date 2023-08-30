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