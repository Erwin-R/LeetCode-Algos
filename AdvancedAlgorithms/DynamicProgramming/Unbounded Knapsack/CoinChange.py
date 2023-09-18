class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        def dfs(i, total):
            if i == len(coins): 
                return 0
            
            if total == amount:
                return 1
            #skip item i
            minCoins = dfs(i + 1, total)