#Time: O(n)
#Space: O(n)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for n in nums:
            # check if its the start of a sequence
            if (n - 1) not in numSet:
                length = 1
                while (n + length) in numSet:
                    length += 1
                longest = max(length, longest)
        return longest
    

#Union Find solution
#Time: O(n)
#Space: O(n)

class UnionFind: 
    def __init__(self, n):
        self.par = [i for i in range(n)]
        self.rank = [1] * n

    def find(self, n):
        while n != self.par[n]:
            self.par[n] = self.par[self.par[n]]
            n = self.par[n]
        
        return n


    def union(self, x, y):
        p1, p2 = self.find(x), self.find(y)
        
        if p1 == p2:
            return

        if self.rank[p1] < self.rank[p2]:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
        else: 
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        uf = UnionFind(len(nums))
        #Initialize a dictionary to store the indices of all integers
        index = dict()
        
        for i, num in enumerate(nums):
            #Ignore duplicates
            if num in index:
                continue

            index[num] = i

            # Perform union with num - 1 and num + 1, if seen
            if num - 1 in index: 
                uf.union(i, index[num - 1])
            if num + 1 in index: 
                uf.union(i, index[num + 1])

        return max(uf.rank + [0])