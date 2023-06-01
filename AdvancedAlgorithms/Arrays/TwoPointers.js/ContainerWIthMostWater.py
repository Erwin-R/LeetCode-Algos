class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0 

        for L in range(len(height)):
            for R in range(L + 1, len(height)):
                # Since we know that height cannot be more than the minimum of the two L and R pointers, we can just find the min of those and then proceed with calculating area.
                area = (R - L) * min(height[L], height[R]) # the height can only extend upto the min of L or R
                res = max(res, area)

        return res