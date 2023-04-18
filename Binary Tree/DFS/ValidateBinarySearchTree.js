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
var isValidBST = function(root) {
    let nodes = inOrderTraversal(root)

    for(let i = 0; i < nodes.length; i++){
        if(nodes[i] >= nodes[i + 1]){
            return false
        }
    }

    return true
};

const inOrderTraversal = (root, nodes = []) => {
    if(!root) return nodes

    inOrderTraversal(root.left, nodes)
    nodes.push(root.val)
    inOrderTraversal(root.right, nodes)

    return nodes
}