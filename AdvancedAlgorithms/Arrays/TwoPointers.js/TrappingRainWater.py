class Solution:
    def trap(self, height: List[int]) -> int:

        if not height: return 0

        L, R = 0, len(height) - 1
        leftMax, rightMax = height[L], height[R]
        amount = 0

        while L < R: 
            leftMax = max(leftMax, height[L])
            rightMax = max(rightMax, height[R])

            if leftMax < rightMax:
                amount +=  leftMax - height[L]                
                L += 1
            else:              
                amount +=  rightMax - height[R] 
                R -= 1

        return amount