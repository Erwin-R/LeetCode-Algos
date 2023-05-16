//Time: O(n) / O(N + P) number of nodes(courses) + preReqs 
//Space: O(n)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let preMap = {}

    for (let i = 0; i < numCourses; i++) {
        preMap[i] = []
    }

    console.log(preMap)

    for (const [crs, pre] of prerequisites) {
        preMap[crs].push(pre)
    }

    console.log(preMap)

    let visitSet = new Set

    const dfs = (crs) => {
        if (visitSet.has(crs)) {
            return false
        }
        if (preMap[crs] == []) {
            return true
        }

        visitSet.add(crs)

        for (const pre of preMap[crs]) {
            if (!dfs(pre)) {
                return false
            }
        }
        
        visitSet.delete(crs) //finished visiting and can take course
        preMap[crs] = [] //if we visit this node again we know we can take prereq so set it to empty array

        return true //course can be taken 
    }


    //have to manually iterate through courses like this incase we get a graph that is not entirely connected
    // 1 -> 2, 1 has preReq of 2 
    // 3 -> 4, 3 has preReq of 4
    //iterating like this fixes this issue
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false
        }
    }

    return true
};