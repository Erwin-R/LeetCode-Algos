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
    

#Solution with One pointer 
#Time: O(n)
#Space: O(1)    

class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        res = 0
        curSum = sum(arr[:k - 1]) #end is not inclusive
        print(curSum)

        for L in range(len(arr) - k + 1):
            curSum += arr[L + k - 1 ]

            if (curSum / k) >= threshold:
                res += 1

            curSum -= arr[L]

        return res


        # res = 0
        # curSum = 4 sum of first two values of arr as k = 3

        #First iteration
        #for L in range( 8 - 3 + 1) -> for L in range(6)
        #curSum += arr[0 + 3 - 1] = arr[2] = 6
        #skips if (avg not greater than threshold) 
        #we then we remove the first element on window which is arr[L] = arr[0]
        #curSum = 4

        #Second iteration
        #curSum += arr[1 + 3 - 1] = arr[3] = 6
        #skips if (avg not greater than threshold) 
        #we then we remove the first element on window which is arr[L] = arr[1]
        #curSum = 4

        #Third iteration
        #curSum += arr[2 + 3 - 1] = arr[4] = 9
        #skips if (avg not greater than threshold) 
        #we then we remove the first element on window which is arr[L] = arr[2]
        #curSum = 7

        #Fourth iteration
        #curSum += arr[3 + 3 - 1] = arr[5] = 12
        #hits if (avg equal to threshold (12/3 == 4)) res = 1 
        #we then we remove the first element on window which is arr[L] = arr[3]
        #curSum = 10

        #Fifth iteration
        #curSum += arr[4 + 3 - 1] = arr[6] = 15
        #hits if (avg greater than threshold (15/3 > 4)) res = 2 
        #we then we remove the first element on window which is arr[L] = arr[4]
        #curSum = 10

        #Sixth iteration
        #curSum += arr[5 + 3 - 1] = arr[7] = 18
        #hits if (avg greater than threshold (18/3 > 4)) res = 3 
        #we then we remove the first element on window which is arr[L] = arr[5]
        #curSum = 13