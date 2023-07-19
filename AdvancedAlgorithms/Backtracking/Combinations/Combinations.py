#Given n numbers(1 - n), return all possible combinations
# of size k. (n choose k math problem)
#Time: O(k * 2^n) where k is size of array
#Space: O(k)

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        combs, curComb = [], []

        def dfs(i): 
            if len(curComb) == k:
                combs.append(curComb.copy())
                return

            if i > n:
                return

            #decision to include nums[i]
            curComb.append(i)
            dfs(i + 1)
            curComb.pop()

            #decision NOT to include nums[i]
            dfs(i + 1)

        dfs(1)

        return combs 