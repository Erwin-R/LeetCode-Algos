#Time and Space for function that initializes object
#Time: O(n)
#Space: O(n)

#Time and Space for function that finds sum of index range
#Time: O(1)
#Space: O(1)

class NumArray:

    def __init__(self, nums: List[int]):
        total = 0
        self.prefix = []
        for n in nums: 
            total += n
            self.prefix.append(total)


    def sumRange(self, left: int, right: int) -> int:
        #edge case is if the left is at the 0th index or out of bounds 
        preLeft = self.prefix[left - 1] if left > 0 else 0
        preRight = self.prefix[right]
        return (preRight - preLeft)

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)