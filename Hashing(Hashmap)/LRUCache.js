class Node{
    constructor(key, val){
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = {}
    this.cap = capacity
    this.length = 0

    this.left = new Node(0, 0)
    this.right = new Node(0, 0)

    this.left.next = this.right
    this.right.prev = this.left


};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache[key]){
        this.remove(this.cache[key])
        this.insert(this.cache[key])
        return this.cache[key].val
    }

    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache[key]){
       this.remove(this.cache[key])
       this.length -= 1 
    }

    this.cache[key] = new Node(key, value)
    this.insert(this.cache[key])
    this.length += 1

    if(this.length > this.cap){
        let lru = this.left.next
        this.remove(lru)
        delete this.cache[lru.key]
        this.length -= 1
    }

};

LRUCache.prototype.remove = function(node){
    // [previous, nxt] = [node.prev, node.next]
    let previous = node.prev
    let nxt = node.next

    previous.next = nxt
    nxt.prev = previous

}

LRUCache.prototype.insert = function(node){
    // [previous, nxt] = [this.right.prev, this.right]

    let previous = this.right.prev
    let nxt = this.right

    previous.next = node
    nxt.prev = node

    node.next = nxt
    node.prev = previous
}


var obj = new LRUCache(2)
obj.put(1, 1)
console.log("1.)")
console.log(obj)
console.log("---------------------")
obj.put(2, 2)
console.log("2.)")
console.log(obj)
console.log("---------------------")
console.log(obj.get(1) + "yellow")
obj.put(3, 3)
console.log("3.)")
console.log(obj)
console.log("---------------------")

let cache = {}
cache["1"] = "1"
console.log(cache)
delete cache["1"]
console.log(cache)
