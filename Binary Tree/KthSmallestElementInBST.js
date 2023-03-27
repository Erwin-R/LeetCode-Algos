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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let nodes = inOrderTraversal(root)

    return nodes[k - 1]

};
//1 - 2 - 3

//nodes = [1, 3, 4]

const inOrderTraversal = (root, nodes = []) => {
    if(!root) return nodes

    inOrderTraversal(root.left, nodes)
    nodes.push(root.val)
    inOrderTraversal(root.right, nodes)

    return nodes
}