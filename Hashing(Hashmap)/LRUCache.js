

class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = {} // map key to node
    this.cap = capacity

    // Left = LRU, right = Most recent
    this.left = new Node(0, 0)
    this.right = new Node(0, 0)

    this.left.next = this.right
    this.right.prev = this.left


};

//remove node from list
LRUCache.prototype.remove = function (node) {
    [previous, nxt] = [node.prev, node.next]

    previous.next = nxt
    nxt.prev = previous
}

//insert node at right
LRUCache.prototype.insert = function (node) {
    [previous, nxt] = [this.right.prev, this.right]
    previous.next = node
    nxt.prev = node

    node.next = nxt
    node.prev = previous
}


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map[key]) {
        this.remove(this.map[key])
        this.insert(this.map[key])
        return this.map[key].val
    }

    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map[key]) { // want to remove value first if already exists
        this.remove(this.map[key])
    }

    this.map[key] = new Node(key, value)
    this.insert(this.map[key])

    if (Object.keys(this.map).length > this.cap) {
        // remove from the list and delete the LRU from the hashmap
        lru = this.left.next
        this.remove(lru)
        delete this.map[lru.key]
    }
};



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

