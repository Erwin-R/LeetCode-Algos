#Time: O(n^2)
#Space: O(1)
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        length = 0

        for i in range(len(s)):
            l, r = i, i 
            
            #substring of odd length
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l  + 1) > length: 
                    res = s[l : r + 1]
                    length = r - l + 1
                l -= 1
                r += 1

            l, r = i, i + 1 
            #substring of even length
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l  + 1) > length:
                    res = s[l : r + 1] 
                    length = r - l + 1
                l -= 1
                r += 1
        
        return res