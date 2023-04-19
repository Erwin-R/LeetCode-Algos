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


//before while loop
// queue = [[3,9,20,null,null,15,7]]
// levels = []

//first while iteration
    // const currLevel = [], queueLength = 1     
    // first for iteration (iterates only once)
        // curr = [3,9,20,null,null,15,7]
        // currLevel = [3]
        // queue = [[9], [20, 15, 7]]
        // levels = [[3]]


// queue = [[9], [20, 15, 7]]
//second while iteration
    // const currLevel = [], queueLength = 2  
    // first for iteration (iterates twice)
        //  curr = [9]
        //  currLevel = [9]
        //  skip if statements

    // queue = [[20, 15, 7]]
    // second for iteration 
        //  curr = [20,15,7]
        //  currLevel = [9,20]
        //  queue = [[15], [7]]
        //  levels = [[3],[9,20]]


//  queue = [[15], [7]]
// third while iteration
    // const currLevel = [], queueLength = 2  
    // first for iteration (iterates twice)
        // curr = [15]
        // currLevel = [15]
        // skip if statements

    //  queue = [[7]]    
    // second for iteration
    // curr = [7]
    // currLevel = [15,7]
    // skip if statements
    // levels = [[3],[9,20],[15,7]]