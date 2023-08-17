class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        #makes each key a list
        adj = defaultdict(list)

        for pre, crs in prerequisites:
            adj[crs].append(pre)

        def dfs(crs):
            if crs not in prereqMap: 
                prereqMap[crs] = set()
                for pre in adj[crs]: 
                    #combines the sets from each path together
                    prereqMap[crs] |= dfs(pre)
                prereqMap[crs].add(crs)

            return prereqMap[crs]

        # map course -> set indirect prereqs
        prereqMap = {}

        for crs in range(numCourses): 
            dfs(crs)

        res = []
        for u, v in queries: 
            res.append(u in prereqMap[v])

        return res