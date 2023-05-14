/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let newGraph = {}

    const clone = (node) =>{ //dfs function
        if(newGraph[node.val]){
            return newGraph[node.val]
        }


        let copy = new Node(node.val)
        console.log(copy)
        newGraph[node.val] = copy

        for(let neighbors of node.neighbors){
            console.log(copy.neighbors.val)
            copy.neighbors.push(clone(neighbors))
        }

        return copy

    }
    
    console.log(newGraph)

    return node ? clone(node) : null
};