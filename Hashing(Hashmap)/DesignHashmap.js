/*
"Chaining Method" (open hashing: collisions stored outside of hash table)
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
    while(curr.next){ //have to do curr.next incase there is only two values at index one
        if(curr.next.key == key){ // one of which is dummy node. while loop wont reach node with key if did curr.key instead of curr.next.key
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


/*
"Open Addressing" (closed hashing: collions result in storing record in another slot of table)
Time: O(1)
Space: O(n) 
*/ 


class Pair {
    constructor(key, val){
        this.key = key
        this.val = val
    }
}

class HashMap{
    constructor(size, capacity, map){
        this.size = 0
        this.capacity = 2
        this.map = [null, null]
    }


    hash(key){
        let idx = 0
        for(let i = 0; i < key.length; i++){
            idx += key.charCodeAt(i);
        }
    
        return idx % this.capacity
    }


    get(key){
        let idx = this.hash(key)
        while(this.map[idx]){ //while there is a value at the given index
            if(this.map[idx].key == key){
                return this.map[idx].val
            }

            idx += 1
            idx = idx % this.capacity // do this incase increasing idx by one brings us out of bounds
        }

        return null
    }

    put(key, value){
        let idx = this.hash(key)

        while(true){
            if(!this.map[idx]){// if key doesnt exist 
                this.map[idx] = new Pair(key, value)
                this.size +=1
                if(this.size >= this.capacity / 2){ //want to rehash if we used half the capacity of map
                    this.rehash()
                }
                return;
            } else if(this.map[idx].key == key){ // if key already exists update value
                this.map[idx].val = value
                return 
            }


            //if key does exist and does not match with existing key at that index
            // we look for next available open index with no value 
            idx += 1
            idx = idx % this.capacity
        }
    }

    rehash(){
        this.capacity = 2 * this.capacity
        let newMap = new Array(this.capacity).fill(null)
        let oldMap = this.map
        this.map = newMap // reassigned current map to the new map with null values
        this.size = 0 //reset size to 0

        for(let i = 0; i < oldMap.length; i++){
            if(oldMap[i]){
                // dont increase size in if statement since size is increased internally in put function
                this.put(oldMap[i].key, oldMap[i].val) 
            }
        }
    }

    remove(key){
        if(this.get(key) == null){
            return;
        }

        let idx = this.hash(key);
        while(true){
            if(this.map[idx].key == key){
            // Removing an element using open-addressing actually causes a bug,
            // because we may create a hole in the list, and our get() may 
            // stop searching early when it reaches this hole.
                this.map[idx] = null
                this.size -= 1
                return
            }
            idx += 1
            idx = idx % this.capacity
        }

    }

    print() {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i]) {
                console.log(this.map[i].key + " " + this.map[i].val)
            }
        }
    }
}
