class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        maxProfit = [] #only projects we can afford (max heap which gives us max profits)
        minCapital = [(c, p) for c, p in zip(capital, profits)] #pair the two arrays with their capital and profits(will minimize the heap based on the capital (c is the key))
        heapq.heapify(minCapital)
        

        for i in range(k):
            
            #goes while minCapital is not empty and capital is less than or equal to current capital(w)
            while minCapital and minCapital[0][0] <= w:
                c, p = heapq.heappop(minCapital)
                heapq.heappush(maxProfit, -1 * p)

            # if k profits are not available then break from loop
            if not maxProfit:
                break
        
            w += -1 * heapq.heappop(maxProfit)
        
        return w
        