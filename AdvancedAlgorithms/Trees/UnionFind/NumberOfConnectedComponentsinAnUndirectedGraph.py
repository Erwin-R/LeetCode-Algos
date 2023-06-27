#Time: O(n)
#Space: O(n)
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