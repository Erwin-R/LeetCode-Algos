#Where n is the number of courses/nodes and p is the prerequisites
#Time: O(n + p) 
#Space: O(n)

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        preMap = {i: [] for i in range(numCourses)}

        for crs, pre in prerequisites:
            preMap[crs].append(pre)

        visit = set()

        def dfs(crs):
            if crs in visit:
                return False

            #no preReqs or preReqs left
            if preMap[crs] == []:
                return True

            visit.add(crs)

            for preReq in preMap[crs]:
                if not dfs(preReq): return False

                #The .remove(crs) was so confusing but I finally understood it. Simplest explanation: if we exit the for-loop inside dfs, we know that crs is a good node without cycles. 
                #However, if it remained in the visited set, we could trip the first if-clause in the dfs function if we revisit it and return False. 
                #That's what we don't want to do, because we just calculated that crs has no cycles. So we remove it from visited so that other paths can successfully revisit it.
                #Basically we can visit the node twice without it being a cycle due to it terminating multiple paths.
            visit.remove(crs)
            preMap[crs] = []
            return True

        for crs in range(numCourses):
            if not dfs(crs): return False

        return True