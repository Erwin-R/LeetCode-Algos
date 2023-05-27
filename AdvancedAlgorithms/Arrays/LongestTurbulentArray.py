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