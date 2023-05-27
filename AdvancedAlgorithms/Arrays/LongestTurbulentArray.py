#Optimized solution (Kadane and Sliding Window)
#Time: O(n)
#Space: O(1)

class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        l, r = 0, 1
        #use the prev variable to keep track of previous sign between two variables
        res, prev = 1, ""

        while r < len(arr): 
            if arr[r - 1] > arr[r] and prev != ">":
                res = max(res, r - l + 1)
                prev = ">"
                r += 1
            elif arr[r - 1] < arr[r] and prev != "<":
                res = max(res, r - l + 1)
                prev = "<"
                r += 1
            else: # covers cases if numbers are equal or get same two signs in a row
                r = r + 1 if arr[r - 1] == arr[r] else r
                l = r - 1 
                prev = ""

        return res 
    


        #First loop
        #hits first if (9 > 4)
        # res = max(1, 2) = 2
        # prev = ">"
        # r = 1 + 1 = 2


        #Second loop
        #hits else (4 > 2) same sign so reset prev
        # r = 2
        # l = 2 - 1 = 1
        # prev = ""

        #Third loop
        #hits first if (4 > 2)
        # res = max(2, 2 - 1 + 1) = 2
        # prev = ">"
        # r = 2 + 1 = 3

        #Fourth loop
        #hits second if (2 < 10)
        # res = max(2, 3 - 1 + 1) = 3
        # prev = "<"
        # r = 3 + 1 = 4


        #Fifth loop
        #hits first if (10 > 7)
        # res = max(3, 4 - 1 + 1) = 4
        # prev = ">"
        # r = 4 + 1 = 5 

        #Sixth loop
        #hits second if (7 < 8)
        # res = max(4, 5 - 1 + 1) = 5
        # prev = "<"
        # r = 5 + 1 = 6


        #Seventh loop
        #hits else (8 == 8)
        # r = 7
        # l = 7 - 1 = 6
        # prev = ""


        #Eighth loop
        #hits first (8 > 1)
        # res = max(5, 7 - 6 + 1) = 5
        # prev = ">"
        # r = 7 + 1 = 8

        #Ninth loop
        #hits second if (1 < 9)
        # res = max(5, 8 - 6 + 1) = 5
        # prev = "<"
        # r = 8 + 1 = 9

        # r == len(arr) so we end loop and return res which is 5