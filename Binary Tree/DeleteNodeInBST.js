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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const minValueNode = (root) => { // helper function to find minimum value
        let curr = root
        while(curr && curr.left){
            curr = curr.left
        }
        return curr
    }

    if(!root) return null 

    if(key < root.val){ // used to find the val that we are going to delete
        root.left = deleteNode(root.left, key) 
    } else if(key > root.val){ // used to find the val that we are going to delete
        root.right = deleteNode(root.right, key)
    } else{
        if(!root.left) return root.right // these two lines are for cases where there is 1 or 0 children of the root
        else if(!root.right) return root.left //
        else{
            let minNode = minValueNode(root.right) // we choose from the root.right because the greater values are on the right side on the root and we can to replace it with the smallest value on the right side.
            root.val = minNode.val //now that we replaced root with the smallest right value we have duplicates 
            root.right = deleteNode(root.right, minNode.val) //to remove the duplicate we run the function on the right node with minNode val as the key
        }
    }

    return root
};