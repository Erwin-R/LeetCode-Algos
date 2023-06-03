#Time: O(26n) -> O(n) have to search through the count map to get max count
#Space: O(1)

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {} #use map to keep track # of occurences of characters
        res = 0

        L = 0
        for R in range(len(s)):
            count[s[R]] = 1 + count.get(s[R], 0) #counting instances
            
            #if length of window - char with max count > k then we decrease count for that character and move our L pointer up
            # len(window) - char with max count = num of replacements needed to make to match all char in window
            if (R - L + 1) - max(count.values()) > k:
                count[s[L]] -= 1
                L += 1

            res = max(res, R - L + 1)



        return res
    

#More optimized solution
#Time: O(n) only keep track of most freq character
#Space: O(1)
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {} #use map to keep track # of occurences of characters
        res = 0

        L = 0
        maxF = 0
        for R in range(len(s)):
            count[s[R]] = 1 + count.get(s[R], 0) #counting instances
            maxF = max(maxF, count[s[R]])

            if (R - L + 1) - maxF > k:
                #even though we decrement count of char, we are not decrementing maxF
                count[s[L]] -= 1 
                L += 1

            res = max(res, R - L + 1)



        return res