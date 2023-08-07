class UnionFind: 
    def __init__(self, n):
        self.par = [i for i in range(n)]
        self.rank = [1] * n

    def find(self, n):
        while self.par[n] != n:
            self.par[n] = self.par[self.par[n]]
            n = self.par[n]
        return n 
    
    def union(self, n1, n2): 
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2: 
            return False

        if self.rank[p1] > self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else: 
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]

        return True

class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        N = len(points)

        edges = []

        for i in range(N):
            x1, y1 = points[i]
            for j in range(i + 1, N):
                x2, y2 =  points[j]
                weight = abs(x1 - x2) + abs(y1 - y2)
                edges.append((i, j, weight))

        minH = []
        for n1, n2, weight in edges: 
            heapq.heappush(minH, [weight, n1, n2])

        uf = UnionFind(N) 
        res = 0

        while minH: 
            weight, n1, n2 = heapq.heappop(minH)
            if not uf.union(n1, n2):
                continue
            res += weight

        return res