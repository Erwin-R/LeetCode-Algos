var hasPathSum = function(root, targetSum, pathSum = 0) {
    // if(!root || pathSum > targetSum) return false // cant do this because 0 is greater than -5
    if(!root) return false
    
    pathSum += root.val     
    // if(pathSum == targetSum && !root.left && !root.right){
    //     console.log("hits this")
    //     return true
    // } 
    if(!root.left && !root.right){
        return pathSum == targetSum
    } 
    if(hasPathSum(root.left, targetSum, pathSum)){
        return true
    }  if(hasPathSum(root.right, targetSum, pathSum)){
        return true
    }

    pathSum -= root.val

    return false
};