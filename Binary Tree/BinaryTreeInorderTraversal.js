// Time Complexity O(n) Space Complexity O(n)

var inorderTraversal = function(root, nodes = []) {
    if(!root){ //once we reach the bottom we want to return the nodes list
        return nodes
    }

    // if(root.left.val < root.val){
    //     nodes.push(inorderTraversal(root.left))
    // } else{
    //      nodes.push(inorderTraversal(root.right))
    // }

    inorderTraversal(root.left, nodes);// we go down the left side of tree to get the minimum values of the tree
    nodes.push(root.val) // once we come back up from the leaf node we want to push the left-most value
    inorderTraversal(root.right, nodes); //once we push the left values we push the greater values

    return nodes
};



// Time Complexity O(n) Space Complexity O(n)
var inorderTraversal = function(root) {
    let res = []
    let stack = []
    let curr = root

    while(curr || stack.length != 0){
        while(curr != null){
            stack.push(curr)
            curr = curr.left
        }
        //stack
        curr = stack.pop()
        //curr
        res.push(curr.val)
        //res
        curr = curr.right
    }

    return res
};


// Loop starts here
// [ [1,null,2,3] ] *stack
// [1,null,2,3] *curr
// [ 1 ] *res
// Loop starts here
// [ [2,3], [3] ] *stack
// [3] *curr
// [ 1, 3 ] *res
// Loop starts here
// [ [2,3] ] *stack
// [2,3] *curr
// [ 1, 3, 2 ] *res