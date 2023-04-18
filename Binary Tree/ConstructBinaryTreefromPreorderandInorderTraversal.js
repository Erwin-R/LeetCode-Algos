/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null

    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1,mid + 1), inorder.slice(0,mid)) //we slice from index 1 to mid + 1 since root is preorder[0] and the root for the next recursive call will be the first index  
                                                                            //we slice from 0 to mid since in inorder traversal the values to the left of the mid index(the root) are the values left of root

    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
                                                                            // we slice mid + 1 in inorder traversal since the values right of the mid(the root) are the values to the right of the root

    return root
};



//first iteration
// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// root = 3
// mid = 1
// root.left = buildTree(preorder.slice(1,2), inorder.slice(0,1)) **we run this line first and is seen on the second iteration below. after complete this root.left is equal to 9
// root.right = buildTree(preorder.slice(2), inorder.slice(2)) ** we return to this line after second iteration is complete and recursive call can be seen on third iteration and after third root.right is 20
// return root which is 3


//second iteration (finishes off the left side of the tree)
// preorder = [9], inorder = [9]
// root = 9
// mid = 0
// root.left = buildTree(preorder.slice(1,1), inorder.slice(0,0))  **returns null
// root.right = buildTree(preorder.slice(1), inorder.slice(1)) ** returns null
// we return root which is 9 and is returned to the first iteration


//third iteration
// preorder = [20,15,7], inorder = [15,20,7]
// root = 20
// mid = 1
// root.left = buildTree(preorder.slice(1, 2), inorder.slice(0, mid)) **run this on fourth iteration and after fourth iteration root.left is 15
// root.right = buildTree(preorder.slice(2), inorder.slice(2)) **run this on fifth iteration and after fifth iteration root.right is now 7
// return root which is 20 to the first iteration

//fourth iteration
// preorder = [15], inorder = [15]
// root = 15
// mid = 0
// root.left = buildTree(preorder.slice(1, 1), inorder.slice(0, 0)) ** returns null 
// root.right = buildTree(preorder.slice(1), inorder.slice(1)) ** returns null 
// return root which is 15 to the third iteration

//fifth iteration
// preorder = [7], inorder = [7]
// root = 7
// mid = 0
// root.left = buildTree(preorder.slice(1, 1), inorder.slice(0, 0)) **returns null
// root.right = buildTree(preorder.slice(1), inorder.slice(1)) ** returns null 
// we return root which is 7 to the third iteration
