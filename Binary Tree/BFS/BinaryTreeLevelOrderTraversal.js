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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = []
    let levels = []
    
    if(root){
        queue.push(root)
    }

    while(queue.length > 0){
        const currLevel = [], queueLength = queue.length
        console.log(queue)
        for(let i = 0; i < queueLength; i++){
            let curr = queue.shift()
            
            currLevel.push(curr.val)

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        levels.push(currLevel)
    }

    return levels
};