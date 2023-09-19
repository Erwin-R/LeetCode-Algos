#Time: O(amount * len(coins))
#Space: O(amount)
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1 )
        dp[0] = 0
        
        print(dp)
        #outer loop is traversing dp array where a is Amount
        for a in range(1, amount + 1):
            #inner loop is traversing coin loop
            for c in coins: 
                #difference between amount and coin value is greater than 0
                if a - c >= 0:
                    dp[a] = min(dp[a], 1 + dp[a - c])

        #if dp[amount] was never changed/updated during the loop then that means that there is no possible combination 
        return dp[amount] if dp[amount] != amount + 1 else -1
