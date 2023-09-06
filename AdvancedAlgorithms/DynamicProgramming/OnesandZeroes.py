class Solution:
    def findMaxForm(self, strs: List[str], M: int, N: int) -> int:
        # Memoization
        dp = {}

        def dfs(i, m, n):
            if i == len(strs):
                return 0
            if (i, m, n) in dp:
                return dp[(i, m, n)]