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
        curr = stack.pop()
        res.push(curr.val)
        curr = curr.right
    }

    return res
};