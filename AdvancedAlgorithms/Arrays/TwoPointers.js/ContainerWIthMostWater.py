#Brute Force Solution
#Time: O(n^2)
#Space: O(1)

class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0 

        for L in range(len(height)):
            for R in range(L + 1, len(height)):
                # Since we know that height cannot be more than the minimum of the two L and R pointers, we can just find the min of those and then proceed with calculating area.
                area = (R - L) * min(height[L], height[R]) # the height can only extend upto the min of L or R
                res = max(res, area)

        return res
    

#Brute Force Solution
#Time: O(n)
#Space: O(1)

class Solution:
    def maxArea(self, height: List[int]) -> int:
        L, R = 0, len(height) - 1
        res = 0 

        while L < R: 
            area = (R - L) * min(height[L], height[R])
            res = max(res, area)

            if height[L] < height[R]:
                L += 1
            # for this problem it does not matter which pointer we shift if height[L] == height[R]
            else: 
                R -= 1



        return res