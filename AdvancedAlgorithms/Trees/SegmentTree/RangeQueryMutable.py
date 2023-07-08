#Segment Tree Node
class SegmentTree: 
    def __init__(self, total, L, R):
        self.sum = total
        self.L = L 
        self.R = R
        self.left = None
        self.right = None

    @staticmethod
    def buildTree(nums, L, R):
        #array of size 1
        if L == R:
            return SegmentTree(nums[L], L, R)
        
        M = (L + R) // 2
        root = SegmentTree(0, L, R)
        root.left = SegmentTree.buildTree(nums, L, M)
        root.right = SegmentTree.buildTree(nums, M + 1, R)
        root.sum = root.left.sum + root.right.sum

        return root

    def updateTree(self, index, val):
        #base case: reached a leaf node and array of size 1
        if self.L == self.R:
            self.sum = val 
            return

        M = (self.L + self.R) // 2 

        if index > M:
            self.right.updateTree(index, val)
        else: 
            self.left.updateTree(index, val)
        
        self.sum = self.left.sum + self.right.sum

    def rangeQuery(self, L, R): 
        if self.L == L and self.R == R: 
            return self.sum

        M = (self.L + self.R) // 2 

        #if the left index of range is greater than our mid then our range will be in the right side of tree
        if L > M: 
            return self.right.rangeQuery(L, R)
        #if the right index of range is less than our mid then our range will be in the left side of tree
        elif R <= M:
            return self.left.rangeQuery(L, R)
        else: 
            return (self.left.rangeQuery(L, M) + self.right.rangeQuery(M + 1, R))

        



class NumArray:
    #
    def __init__(self, nums: List[int]):
        self.tree = SegmentTree.buildTree(nums, 0, len(nums) - 1)
    def update(self, index: int, val: int) -> None:
        self.tree.updateTree(index, val)

    def sumRange(self, left: int, right: int) -> int:
        return self.tree.rangeQuery(left, right)
