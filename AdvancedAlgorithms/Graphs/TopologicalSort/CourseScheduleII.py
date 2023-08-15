class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        res = []
        preMap = {i: [] for i in range(numCourses)}

        for crs, pre in prerequisites:
            preMap[crs].append(pre)

        visit, cycle = set(), set()

        def dfs(crs): 
            if crs in cycle: return False
            if crs in visit:
                return True
            
            cycle.add(crs)

            for preReq in preMap[crs]:
                if not dfs(preReq): return False
            
            cycle.remove(crs)
            visit.add(crs)
            res.append(crs)
            return True
        
        for c in range(numCourses):
            if not dfs(c): return []
        
        return res