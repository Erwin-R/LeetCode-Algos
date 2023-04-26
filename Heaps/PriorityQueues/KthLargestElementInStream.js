/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k

    this.minHeap = new MinPriorityQueue()

    nums.forEach(num => this.minHeap.enqueue(num)) 

    while(this.minHeap.size() > this.k) this.minHeap.dequeue() 
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val);
    if(this.minHeap.size() > this.k) this.minHeap.dequeue() 
    return this.minHeap.front().element 
};
