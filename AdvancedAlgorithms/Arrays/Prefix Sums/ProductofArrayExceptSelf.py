#Linear Time and Space Solution
#Time: O(n)
#Space: O(n)
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # we can reduce this problem to the following subproblems:
        # - traversing an array from left and from right using single ptr
        # - creating a prefix and postfix array
        # calculating the product of two numbers
        prefix = [1] * len(nums)
        postfix = [1] * len(nums)
        output = [1] * len(nums)

        L = 1
        
        # for every l in nums, prefix shows the product of elements before i
        while L < len(nums): 
            prefix[L] = prefix[L - 1] * nums[L - 1]
            L += 1
        
        R = len(nums) - 2
        # for every r in nums, postfix shows the porduct of elements after r
        while R >= 0:
            postfix[R] = postfix[R + 1] * nums[R + 1]
            R -= 1

        print(prefix)
        print(postfix)

        # for every item in nums, we find the cumulative product before and after the item
        for i in range(len(nums)):
            output[i] = prefix[i] * postfix[i]
        
        return output


#First Example:
        #nums = [1,2,3,4]
        #prefix = [1,1,1,1]
        #postfix = [1,1,1,1]
        #output = [1,1,1,1]

        #Prefix While Loop
        # L = 1
        # prefix[1] = prefix[1 - 1] * nums[1 - 1] = 1 * 1 = 1
        # prefix = [1,1,1,1]

        # L = 2
        # prefix[2] = prefix[2 - 1] * nums[2 - 1] = 1 * 2 = 2
        # prefix = [1,1,2,1]

        # L = 3
        # prefix[3] = prefix[3 - 1] * nums[3 - 1] = 2 * 3 = 6
        # prefix = [1,1,2,6]

        #Postfix While Loop
        # R = 2
        # postfix[2] = postfix[2 + 1] * nums[2 + 1] = 1 * 4 = 4
        # postfix = [1,1,4,1]

        # R = 1
        # postfix[1] = postfix[1 + 1] * nums[1 + 1] = 4 * 3 = 12
        # postfix = [1,12,2,1]

        # R = 0
        # postfix[0] = postfix[0 + 1] * nums[0 + 1] = 12 * 2 = 24
        # postfix = [24,12,4,1]

        # prefix = [1,1,2,6]
        # postfix = [24,12,4,1]
        #Output Array loop
        #  ouput[0] = prefix[0] * postfix[0] = 1 * 24 = 24
        #  ouput[1] = prefix[1] * postfix[1] = 1 * 12 = 24
        #  ouput[2] = prefix[2] * postfix[2] = 2 * 4 = 8
        #  ouput[3] = prefix[3] * postfix[3] = 6 * 1 = 6

#--------------------------------------------------------------------
#Second Example:
        #nums = [5,2,3,4]
        #prefix = [1,1,1,1]
        #postfix = [1,1,1,1]
        #output = [1,1,1,1]

        #output should be: [24, 60, 40, 30]
        #Prefix While Loop
        # L = 1
        # prefix[1] = prefix[1 - 1] * nums[1 - 1] = 1 * 5 = 5
        # prefix = [1,5,1,1]

        # L = 2
        # prefix[2] = prefix[2 - 1] * nums[2 - 1] = 5 * 2 = 10
        # prefix = [1,5,10,1]

        # L = 3
        # prefix[3] = prefix[3 - 1] * nums[3 - 1] = 10 * 3 = 30
        # prefix = [1,5,10,30]

        #Postfix While Loop
        # R = 2
        # postfix[2] = postfix[2 + 1] * nums[2 + 1] = 1 * 4 = 4
        # postfix = [1,1,4,1]

        # R = 1
        # postfix[1] = postfix[1 + 1] * nums[1 + 1] = 4 * 3 = 12
        # postfix = [1,12,4,1]

        # R = 0
        # postfix[0] = postfix[0 + 1] * nums[0 + 1] = 12 * 2 = 24
        # postfix = [24,12,4,1]

        # prefix = [1,5,10,30]
        # postfix = [24,12,4,1]
        #Output Array loop
        #  ouput[0] = prefix[0] * postfix[0] = 1 * 24 = 24
        #  ouput[1] = prefix[1] * postfix[1] = 5 * 12 = 60
        #  ouput[2] = prefix[2] * postfix[2] = 10 * 4 = 40
        #  ouput[3] = prefix[3] * postfix[3] = 30 * 1 = 30



#Linear Time and Constant Space Solution
#Time: O(n)
#Space: O(1)

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)

        prefix = 1

        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]

        postfix = 1

        for i in range(len(nums) -1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]

        return res 