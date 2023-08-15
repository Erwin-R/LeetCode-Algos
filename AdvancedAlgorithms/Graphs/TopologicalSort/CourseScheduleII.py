class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        res = []
        preMap = {i: [] for i in range(numCourses)}

        for crs, pre in prerequisites:
            preMap[crs].append(pre)

        visit = set()

        def dfs(crs): 
            if crs in visit: return False
            if preMap[crs] == []:
                return True
            
            visit.add(crs)

            for preReq in preMap[crs]:
                if not dfs(preReq): return False
            
            res.append(crs)
            visit.remove(crs)
            preMap[crs] = []