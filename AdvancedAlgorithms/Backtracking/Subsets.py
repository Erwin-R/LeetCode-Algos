class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        subsets, curSet = [], []

        def dfs(i):
            if i >= len(nums):
                subsets.append(curSet.copy())
                return

            curSet.append(nums[i])
            dfs(i + 1)

            curSet.pop()
            dfs(i + 1)

        dfs(0)

        return subsets