class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        length = 0
        L = 0
        hashSet = set()

        for R in range(len(s)):
            while s[R] in hashSet:
                hashSet.remove(s[L])
                L += 1 
            
            hashSet.add(s[R])
            length = max(length, R - L + 1)
            

        
        return length
    

    
        #"abcabcbb"
        # L
        #  R

        #First iteration
        # L = 0
        # R = 0
        # hits if (L = R : 0 = 0)
        # length = max(0, 0 - 0) = 0

        #Second iteration
        # L = 0
        # R = 1
        # doesnt hit if 
        # length = max(0, 1 - 0) = 1

        #Third iteration
        # L = 0
        # R = 2
        # doesnt hit if 
        # length = max(0, 1 - 0) = 1