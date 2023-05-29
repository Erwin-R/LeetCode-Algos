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


#Optimized Solution
#Time: O(n)
#Space: O(n)
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        window = set()
        L = 0

        for R in range(len(nums)):
            if R - L > k: #window is too big and need to remove first element we added to window which is at L
                window.remove(nums[L])
                L += 1

            if nums[R] in window:
                return True

            window.add(nums[R])


        return False