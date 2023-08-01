#Have to iterate through each edge and in the worst case have to visit each node. Getting min from heap is log(n)
#Time: E * log(V^2) -> E * log(V)
#Where N is the space for adj list and E is for the minHeap
#Space: O(N + E)

class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start_node: int, end_node: int) -> float:
        adj = collections.defaultdict(list)
        for i in range(len(edges)):
            src, dst = edges[i]
            adj[src].append([dst, succProb[i]])
            adj[dst].append([src, succProb[i]])
        print(adj)
        #put the negative one as there are no maxHeaps in python
        maxHeap = [(-1, start_node)]
        visit = set()

        while maxHeap: 
            prob, cur = heapq.heappop(maxHeap)
            visit.add(cur)
            
            if cur == end_node:
                return prob * -1

            for n, edgeProb in adj[cur]:
                if n not in visit: 
                    heapq.heappush(maxHeap, (prob * edgeProb, n))

        return 0