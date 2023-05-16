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

        visitSet.delete(crs)
        preMap[crs] = []

        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false
        }
    }

    return true
};