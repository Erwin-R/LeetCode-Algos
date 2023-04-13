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
var searchBST = function(root, val) {
    if(!root) return null
    
    if(root.val == val){
        return root
    } else if(root.val > val){
        return searchBST(root.left, val)
    } else{
        return searchBST(root.right, val)
    }


};

//first stack
//if(!root) return null
// if(root.val == val){
//     return root
// } else if(val < root.val){ //hit this if
//     return searchBST(root.left, val) //returns root after hitting the if in the second call need the return statement on this line otherwise it wont return anything and will be undefined
// } else{
//     return searchBST(root.right, val)
// }



//second stack
////if(!root) return null
// if(root.val == val){ //hit this if
//     return root
// } else if(val < root.val){ 
//     return searchBST(root.left, val) 
// } else{
//     return searchBST(root.right, val)
// }