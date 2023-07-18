#Time: O(n * 2^n)
#Space: O(n)

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        subsets, curSet = [], []
        nums.sort()

        def dfs(i): 
            if i >= len(nums):
                subsets.append(curSet.copy())
                return 
            
            #decision to include nums[i]
            curSet.append(nums[i]) 
            dfs(i + 1)
            curSet.pop()

            #decision NOT to include nums[i]
            while i + 1 < len(nums) and nums[i] == nums[i + 1]:
                i += 1
            
            dfs(i + 1)

        dfs(0)

        return subsets

