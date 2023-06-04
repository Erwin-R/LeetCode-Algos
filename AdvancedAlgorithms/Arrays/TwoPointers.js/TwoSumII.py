#Time: O(n)
#Space: O(1)

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        L, R = 0, len(numbers) - 1

        while L < R: 
            #if number is too big we wont reach our solution with
            #values to the right of our pointer as they are bigger
            if numbers[L] + numbers[R] > target:
                R -= 1
            #wont reach our target with values to the left of L since they
            #are smaller so move left pointer up
            elif numbers[L] + numbers[R] < target:
                L += 1
            else: 
                return [L + 1, R + 1]