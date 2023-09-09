#Memoization Solution
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        dp = {}

        #where is each string in the strs array is represented by i 
        def dfs(i, m, n):
            if i == len(strs):
                return 0
            if (i, m, n) in dp: 
                return dp[(i, m, n)]

            mCnt, nCnt = strs[i].count("0"), strs[i].count("1")

            dp[(i, m, n)] = dfs(i + 1, m, n)

            #if there are still enough 0's and 1's to subtract
            if mCnt <= m and nCnt <= n:
                dp[(i, m, n)] = max(dp[(i, m, n)], 1 + dfs(i + 1, m - mCnt, n - nCnt))

            return dp[(i, m, n)]

        return dfs(0, m, n)
    
#DP solution 
class Solution:
    def findMaxForm(self, strs: List[str], M: int, N: int) -> int:
        #when we go out of bounds the dict will return a default value which is 0 in this case since ""dict of ints""
        dp = defaultdict(int)

        for s in strs: 
            mCnt, nCnt = s.count("0"), s.count("1")