/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {  
    let maxHeap = new MaxPriorityQueue()
    stones.forEach(stone => maxHeap.enqueue(stone))

    while (maxHeap.size() > 1){
        let firstStone = maxHeap.dequeue().element
        let secondStone = maxHeap.dequeue().element

        if(secondStone != firstStone){ //if stones are equal then we dont do anything since we already dequeued them
            maxHeap.enqueue(firstStone - secondStone)
        }
    }
    
    return maxHeap.size() > 0 ? maxHeap.front().element : 0
};

//stones = [8,7,4,2,1,1]

//Time: O(n * log(n)) Space: O(n)