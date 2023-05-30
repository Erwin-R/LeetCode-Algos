#Solution with two pointers
#Time: O(n)
#Space: O(1)

class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        L = 0
        sum = 0
        count = 0

        for R in range(len(arr)):
            sum += arr[R]
            
            if R >= k: #if our window gets too big we want to subtract first value in window and move our left pointer up
                sum -= arr[L]
                L += 1
            if (sum / k) >= threshold and R - L + 1 == k: #we add one because it is 0 indexed
                count += 1


        return count