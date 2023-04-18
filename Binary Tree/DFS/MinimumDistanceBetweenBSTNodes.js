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
 * @return {number}
 */
var minDiffInBST = function(root) {
    let nodes = inOrderTraversal(root)
    let min = nodes[1] - nodes[0]

    for(let i = 0; i < nodes.length; i++){
        if(nodes[i + 1] - nodes[i] < min ){
            min = nodes[i + 1] - nodes[i]
        }
    }

    return min

};


const inOrderTraversal = (root, nodes = []) =>{
    if(!root) return nodes 

    inOrderTraversal(root.left, nodes)
    nodes.push(root.val)
    inOrderTraversal(root.right, nodes)

    return nodes
}