/*
"Chaining Method" (open hashing: collisions stored outside of hash table)
Time: O(N/K) where n is the number of possible keys and k is the predefined nodes inserted
Space: O(K + M) where K is the number of predefined nodes in hashmap and M is the number
of unique keys inserted into hashmap
*/ 

class ListNode{
    constructor(key = -1){
        this.key = key
        this.next = null
    }
}

var MyHashSet = function() {
    this.set = new Array(1001).fill(new ListNode())
};

MyHashSet.prototype.hash = function(key){
    return key % this.set.length
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let curr = this.set[this.hash(key)]
    while(curr.next){
        if(curr.next.key == key){
            curr.next.key = key
            return      
        }
        curr = curr.next
    }

    curr.next = new ListNode(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let curr = this.set[this.hash(key)]
    while(curr && curr.next){
        if(curr.next.key == key){
            curr.next = curr.next.next
            return
        }
        curr = curr.next
    }

};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let curr = this.set[this.hash(key)].next
    while(curr){
        if(curr.key == key){
            console.log(curr.key)
            return true
        }
        curr = curr.next

    }
    
    return false
};