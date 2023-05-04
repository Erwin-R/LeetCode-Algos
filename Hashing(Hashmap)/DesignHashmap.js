/*
"Chaining Method" 
Time: O(N/K) where n is the number of possible keys and k is the predefined nodes inserted
Space: O(K + M) where K is the number of predefined nodes in hashmap and M is the number
of unique keys inserted into hashmap
*/ 
class ListNode{
    constructor(key = -1, value = -1){
        this.key = key
        this.value = value
        this.next = null
    }
}

var MyHashMap = function() {
    this.map = new Array(1001).fill(new ListNode())
};


MyHashMap.prototype.hash = function(key){
    return key % this.map.length
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let curr = this.map[this.hash(key)]
    while(curr.next){
        if(curr.next.key == key){
            curr.next.value = value
            return
        }
        curr = curr.next
    }

    curr.next = new ListNode(key, value)
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let curr = this.map[this.hash(key)].next //dont want to start on dummy node
    while(curr){
        if(curr.key == key){
            return curr.value
        }
        curr = curr.next
    }

    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let curr = this.map[this.hash(key)]
    while(curr && curr.next){
        if(curr.next.key == key){
            curr.next = curr.next.next
            return
        }
        curr = curr.next
    }
};