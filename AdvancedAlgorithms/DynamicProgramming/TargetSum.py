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