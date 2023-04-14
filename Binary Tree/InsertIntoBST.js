/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {

    if(!root) return new TreeNode(val)
    

    if(val > root.val){
        root.right = insertIntoBST(root.right, val)
    } else{

        root.left = insertIntoBST(root.left, val)
    }


    return root



};

//with balanced trees the time complexity wil be O(log(n)) but with skewed trees (more values on one side) the time complexity will be O(n)