# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        stack, visit = [root], [False]
        res = []


        while stack:
            cur, visited = stack.pop(), visit.pop()
            #we want to skip over null nodes bc don't have children
            if cur: 
                if visited:
                    res.append(cur.val) 
                #order matters so we add the right side first since we want to eventually pop the left side first
                else: 
                    stack.append(cur)
                    visit.append(True)
                    stack.append(cur.right)
                    visit.append(False)
                    stack.append(cur.left)
                    visit.append(False)

        return res