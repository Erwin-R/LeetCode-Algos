

class Solution:
    def isPalindrome(self, s: str) -> bool:
        newStr = ""
        
        for c in s:
            if c.isalnum(): #checks if character is alphanumeric
                newStr += c.lower() #converts character to lowercase
        
        return newStr == newStr[::-1] #syntax to reverse a string