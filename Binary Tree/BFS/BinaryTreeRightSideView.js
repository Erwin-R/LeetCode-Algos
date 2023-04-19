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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let queue = []
    let res = []
    
    queue.push(root)


    while(queue.length > 0){
        let rightSide = null, queueLength = queue.length
        for(let i = 0; i < queueLength; i++){
            let curr = queue.shift()
            
            if(curr){
                rightSide = curr
                queue.push(curr.left)
                queue.push(curr.right)
            }

        }
        if(rightSide) res.push(rightSide.val)
    }

    return res
};