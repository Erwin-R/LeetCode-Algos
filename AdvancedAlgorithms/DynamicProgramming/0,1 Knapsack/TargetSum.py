#Brute Force solution
#Time: O(2^n)
#Space:O(n)
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        def dfs(i, curSum):
            if i >= len(nums): 
                if curSum == target:
                    return 1
                return 0

            return dfs(nums, i + 1, curSum + nums[i]) + dfs(nums, i + 1, curSum - nums[i])

        return dfs(0, 0)
    
# Why TLE
# imagine nums = [1, 1, 1], target = -1, there are 3 ways we can get -1
# [-1, -1, +1], [+1, -1, -1], [-1, +1, -1]
# Brute force will do the following
#                         (0, 0) # index, summ
#                 +1/                   \-1
#               (1, 1)                  (1, -1)
#               /    \                /         \
#           (2,2)     (2,0)        (2,0)         (2,-2)
#          /     \    /     \      /   \         /     \
#      (3,3)   (3,1) (3,1),(3,-1) (3,1) (3,-1)  (3,-1) (3,-3)
# note that at the bottom we have 3 nodes with summ == -1, hence the answer
# IMP: we compute the node (2,0) twice -- if we traverse the left first
# memoize this result we won't have to traverse this branch in the right
# sub-tree.


#Dynamic Programming Solution  
#where n is length of array and m is sum of nums array
#Time: O(n * m)
#Space: O(n * m)
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        dp = {} #(index, total) -> # of ways
        def dfs(i, curSum):
            if i >= len(nums): 
                return 1 if curSum == target else 0

            if (i, curSum) in dp: 
                return dp[(i, curSum)]

            dp[(i, curSum)] = dfs(i + 1, curSum + nums[i]) + dfs(i + 1, curSum - nums[i])

            return dp[(i, curSum)]

        return dfs(0, 0)