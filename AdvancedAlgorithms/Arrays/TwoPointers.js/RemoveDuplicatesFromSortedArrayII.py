# Time: O(n)
# Space: O(1)

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        L, R = 0, 0

        while R < len(nums):
            #Set value of count to 1 after each iteration
            count = 1

            #have to check if r + 1 is in range
            while R + 1 < len(nums) and nums[R] == nums[R + 1]:
                count += 1
                R += 1

            # only want to shift values two times(count <= 2) since we can only have duplicates of two or one
            for i in range(min(2, count)):
                nums[L] = nums[R]
                L += 1

            #want to increment by 1 since while loop only increments R when it is equal to the next value
            R += 1
        
        return L 

        #count = 2

        #[1,1,2,2,3,3,3,3]
        #             L
        #               R
