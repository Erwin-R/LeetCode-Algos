var inorderTraversal = function(root, nodes = []) {
    if(!root){
        return nodes
    }

    // if(root.left.val < root.val){
    //     nodes.push(inorderTraversal(root.left))
    // } else{
    //      nodes.push(inorderTraversal(root.right))
    // }

    inorderTraversal(root.left, nodes);
    nodes.push(root.val)
    inorderTraversal(root.right, nodes);

    return nodes
};