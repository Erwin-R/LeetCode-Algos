#Time: O(n^2 * log(n))
#Space: O(n^2) / O(n * m)
class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        N = len(grid)
        visit = set((0,0))
        directions = [[0, 1], [0,-1], [1,0], [-1,0]]
        minHeap = [[grid[0][0], 0, 0]]

        while minHeap: 
            t, r, c = heapq.heappop(minHeap)

            if r == N - 1 and c == N - 1:
                return t 

            for dr, dc in directions: 
                neiR, neiC = dr + r , dc + c 
                if min(neiR, neiC) < 0 or max(neiR, neiC) == N or (neiR, neiC) in visit: 
                    continue
                
                visit.add((neiR, neiC))
                heapq.heappush(minHeap, [max(grid[neiR][neiC], t), neiR, neiC])