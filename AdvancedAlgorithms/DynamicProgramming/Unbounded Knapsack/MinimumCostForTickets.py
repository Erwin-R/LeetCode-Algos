#Memoization Solution
class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        dp = {}
        
        def dfs(i): 
            if i == len(days): 
                return 0
            if i in dp:
                return dp[i]
            
            #set it to default value of inf since once we find value it will replace it
            dp[i] = float("inf")

            for d, c in zip([1, 7, 30], costs): 
                j = i
                #while j is still in bounds of days array and
                while j < len(days) and days[j] < days[i] + d:
                    j += 1
                dp[i] = min(dp[i], c + dfs(j))
            return dp[i]
        return dfs(0)
