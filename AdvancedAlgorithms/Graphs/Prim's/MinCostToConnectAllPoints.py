#Since the algorithm is so similar to Dijkstra's algorithm, the time complexity will be the same - O(E log(V))
# Where E is the number of edges and V is the number of vertices
#Time: O(E log(V))

#The Space complexity is O(E) since our hashset grows linearly to the number of edges our graph has
#Space: O(E)
class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        #Setup adj list
        N = len(points)
        adj = {i : [] for i in range(N)} # i : list of [cost,node]

        for i in range(N):
            x1, y1 = points[i]
            for j in range(i + 1 , N):
                x2, y2 = points[j]
                dist = abs(x1 - x2) + abs(y1 - y2)
                adj[i].append([dist, j])
                adj[j].append([dist, i])

        #Prim's
        res = 0 
        visit = set()
        minH = [[0,0]] #[cost, point]

        while len(visit) < N:
            cost, i = heapq.heappop(minH)

            if i in visit: 
                continue 
            
            res += cost
            visit.add(i)

            for neiCost, nei in adj[i]:
                if nei not in visit: 
                    heapq.heappush(minH, [neiCost, nei])

        return res