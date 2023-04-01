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
 * @return {boolean}
 */
var isUnivalTree = function(root) {

    let nodes = inOrderTraversal(root)  


    return nodes.size == 1 
};


const inOrderTraversal = (root, nodes = new Set) => {
    if(!root) return nodes


    inOrderTraversal(root.left, nodes)
    nodes.add(root.val)
    inOrderTraversal(root.right, nodes)



    return nodes
}