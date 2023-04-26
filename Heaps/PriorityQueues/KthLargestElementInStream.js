/**
 * @param {number} k
 * @param {number[]} nums
 */

//Time Complexity: O(n * log(n)) Space: O(n)

var KthLargest = function(k, nums) {
    this.k = k

    //set up min "heap" of k max numbers (k largest)
    // so that way you can easily get the lowest kth element
    this.minHeap = new MinPriorityQueue()

    nums.forEach(num => this.minHeap.enqueue(num)) //heapify them all 

    while(this.minHeap.size() > this.k) this.minHeap.dequeue() //keeps just the top k elements
};

/** 
 * @param {number} val
 * @return {number}
 */

//Add function Time Complexity: O(m * log(n)) Space: O(n)

KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val);
    if(this.minHeap.size() > this.k) this.minHeap.dequeue() //maintain top k 
    return this.minHeap.front().element // top of heap = front of priority queue

     //keeping top k elements in minHeap will result in the kth element being at the beginning of the heap
};
 //k = 2
 //minHeap = [2,4,5,8]

 //while loop (4 > 2) -> (3 > 2) -> (2 > 2)
//minHeap = [4,5,8] -> [5,8] -> while loop stops