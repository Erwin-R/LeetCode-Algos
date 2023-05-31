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