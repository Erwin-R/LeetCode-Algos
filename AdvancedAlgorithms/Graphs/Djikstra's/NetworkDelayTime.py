#Have to iterate through each edge and in the worst case have to visit each node. Getting min from heap is log(n)
#Time: E * log(V^2) -> E * log(V)
#Where N is the space for adj list and E is for the minHeap
#Space: O(N + E)
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:

        adj = {}

        for i in range(1, n + 1):
            adj[i] = []

        for src, dst, w in times:
            adj[src].append((dst, w))

        visit = set()
        minHeap = [(0, k)]
        t = 0
        while minHeap: 
            w1, n1 = heapq.heappop(minHeap)
            if n1 in visit:
                continue
            visit.add(n1)
            t = w1 

            for n2, w2 in adj[n1]:
                if n2 not in visit: 
                    heapq.heappush(minHeap, (w1 + w2, n2))


        return t if len(visit) == n else -1