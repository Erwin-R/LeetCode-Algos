class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res, curComb = [], []

        def dfs(i, total):
            if total == target:
                res.append(curComb.copy())
                return
            
            if i >= len(candidates) or total > target: 
                return

            curComb.append(candidates[i])
            dfs(i, total + candidates[i])
            curComb.pop()

            dfs(i + 1, total)


        dfs(0, 0)

        return res