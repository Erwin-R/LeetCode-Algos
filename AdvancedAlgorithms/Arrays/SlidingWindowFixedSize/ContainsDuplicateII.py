#Brute Force
#Time: O(n^2)
#Space: O(1)

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        
        for L in range(len(nums)):
            for R in range(L + 1, len(nums)):
                if nums[L] == nums[R] and abs(L - R) <= k:
                    return True

        
        return False