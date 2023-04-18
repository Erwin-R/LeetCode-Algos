/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    
    let root1Sorted = inOrderTraversal(root1)
    let root2Sorted = inOrderTraversal(root2)

    let root1Pointer = 0
    let root2Pointer = 0 

    let result = []

    while(root1Pointer < root1Sorted.length && root2Pointer < root2Sorted.length){
        if(root1Sorted[root1Pointer] < root2Sorted[root2Pointer]){
            result.push(root1Sorted[root1Pointer])
            root1Pointer++
        } else {
            result.push(root2Sorted[root2Pointer])
            root2Pointer++
        }
    }

    while(root1Pointer < root1Sorted.length){
        result.push(root1Sorted[root1Pointer])
        root1Pointer++
    }

    while(root2Pointer < root2Sorted.length){
        result.push(root2Sorted[root2Pointer])
        root2Pointer++
    }


    return result
};


const inOrderTraversal = (root ,sortedList = []) => {
    if(!root) return sortedList

    inOrderTraversal(root.left, sortedList)
    sortedList.push(root.val)
    inOrderTraversal(root.right, sortedList)

    return sortedList
}