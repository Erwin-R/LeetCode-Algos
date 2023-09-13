class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        stoneSum = sum(stones)
        target = ceil(stoneSum / 2) #23 -> 12
        print("target:", target)
        def dfs(i, total):
            if total >= target or i == len(stones): 
                return abs(total - (stoneSum - total))
            if (i, total) in dp:
                return dp[(i, total)]
            
            #not including current value, including current value
            dp[(i, total)] = min(dfs(i + 1, total), dfs(i + 1, total + stones[i]))

            return dp[(i, total)]

        dp = {}
        return dfs(0,0)