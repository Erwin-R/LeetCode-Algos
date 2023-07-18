class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        combs, curComb = [], []

        def dfs(i): 
            if len(curComb) == k:
                combs.append(curComb.copy())
                return

            if i > n:
                return

            curComb.append(i)
            dfs(i + 1)

            curComb.pop()
            dfs(i + 1)

        dfs(1)

        return combs 