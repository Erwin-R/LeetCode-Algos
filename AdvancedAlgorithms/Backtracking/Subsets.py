#Time: O(n * 2^n)
#Space: O(n)

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        subsets, curSet = [], []

        def dfs(i):
            if i >= len(nums):
                subsets.append(curSet.copy())
                return

            #decision to include nums[i]
            curSet.append(nums[i])
            dfs(i + 1)

            #decision not to include nums[i]
            curSet.pop()
            dfs(i + 1)

        dfs(0)

        return subsets