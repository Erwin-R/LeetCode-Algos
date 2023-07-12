#Time: 
#Retreival O(1)
#Insertion and deletion: O(log(n))
#Calculating Median: O(1)

#Space: O(n)


class MedianFinder:

    def __init__(self):
        #maxHeap and minHeap
        self.small, self.large = [], []

    def addNum(self, num: int) -> None:
        if self.large and num > self.large[0]:
            heapq.heappush(self.large, num)
        else: 
            heapq.heappush(self.small, -1 * num)

        #handle uneven heap sizes
        if len(self.small) > len(self.large) + 1:
            val = -1 * heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.large) > len(self.small) + 1:
            val = -1 * heapq.heappop(self.large)
            heapq.heappush(self.small, val)
        

    def findMedian(self) -> float:
        if len(self.large) > len(self.small):
            return self.large[0]
        elif len(self.small) > len(self.large):
            return -1 * self.small[0]
        else: 
            return (self.large[0] + (self.small[0] * -1)) / 2