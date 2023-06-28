#E = # of edges and V is number of vertexes
#Building the adjacency list will take O(E) operations, as we iterate over the list of edges once, and insert each edge into two lists.
#During the DFS traversal, each vertex will only be visited once. In addition, when we iterate over the edge list of each vertex, we look at each edge once. 
#Time: O(E + V) -> O(n)

#Building the adjacency list will take O(E) space. To keep track of visited vertices, an array of size O(V) is required. Also, the run-time stack for DFS will use O(V) space.
#Space: O(E + V) -> O(n)
class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        # adjList = defaultdict(list)

        # for src, dst in edges:
        #     if src not in adjList:
        #         adjList[src] = []
        #     if dst not in adjList:
        #         adjList[dst] = []
        #     adjList[src].append(dst)
        
        # print(adjList)
        
        # If we do it the way we did above it does not give us a undirected(two way) connection between nodes, only a directed direction(one way)
        # adjList1: defaultdict(<class 'list'>, {0: [1], 1: [2], 2: [], 3: [4], 4: []}) 

        # gives us a undirected graph 
        # adjList2: defaultdict(<class 'list'>, {0: [1], 1: [0, 2], 2: [1], 3: [4], 4: [3]})

        adjList = defaultdict(list)

        for src, dst in edges:
            adjList[src].append(dst)
            adjList[dst].append(src)

        def dfs(node, visited):
            if node in visited:
                return
            visited.add(node)
            for neighbor in adjList[node]: 
                dfs(neighbor, visited)

        count = 0
        visited = set()

        for node in range(n):
            if node not in visited: 
                dfs(node, visited)
                count += 1

        return count 
    
    
    
#Union Find Solution
#Iterating over the edges is O(E) and union function is O(a(n)) which is the inverse ackerman function which is O(1)
#Time: O(E * a(n)) -> O(n)
#Storing size and parents of each vertex takes O(n) space
#Space: O(n) 
class UnionFind: 
    def __init__(self, n):
        self.par = [i for i in range(n)]
        self.rank = [1] * (n)

    def find(self, n):
        while n != self.par[n]:
            self.par[n] = self.par[self.par[n]]
            n = self.par[n]
        return n

    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2: 
            return 0

        if self.rank[p1] > self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]        
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]

        return 1


class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        
        uf = UnionFind(n)
        res = n

        for src, dst in edges: 
            res -= uf.union(src, dst)

        return res