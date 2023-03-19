class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;

    }
}


var MyLinkedList = function() {
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head 
};

MyLinkedList.prototype.get = function(index) {
    current = this.head.next 
    while(current && index > 0){
        current = current.next
        index--
    }

    if(current && index == 0 && current != this.tail){
        return current.val
    }

    return -1
};

/** 
 * @param {number} val
 * @return {void}
 */


MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val)
    let next = this.head.next
    let previous = this.head

    previous.next = node
    next.prev = node
    node.next = next
    node.prev = previous

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val)
    let next = this.tail
    let previous = this.tail.prev

    previous.next = node
    next.prev = node
    node.next = next
    node.prev = previous
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    current = this.head.next
    while(current && index > 0){
        current = current.next
        index--
    }


    if(current && index == 0){
        let node = new Node(val)
        let next = current
        let previous = current.prev
        previous.next = node
        next.prev = node 

        node.next = next 
        node.prev = previous
    }

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    current = this.head.next
    while(current && index > 0){
        current = current.next
        index--
    }


    if(current && index == 0 && current != this.tail){
        let next = current.next
        let previous = current.prev
        previous.next = next
        next.prev = previous
    }
};



//SLL 
class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}


var MyLinkedList = function() {
    this.head = null

};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    current = this.head
    while(current && index > 0){
        current = current.next
        index--
    }

    if(current && index == 0){
        return current.val
    }

    return -1 
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val)
    
    
    node.next = this.head 
    this.head = node

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let current = this.head
    let node = new Node(val)
    
    if(!current){
        this.head = new Node(val)
    }

    while(current){
        if(current.next == null){
            current.next = node
            current = current.next
        }
        current = current.next
    }

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let current = this.head
    let previous = null
    let node = new Node(val)

    if(index == 0){
        node.next = this.head
        this.head = node
    }

    while(current && index - 1 > 0){
        previous = current
        current = current.next 
        index-- 
    }

    if(current && index - 1 == 0){
        node.next = current.next
        current.next = node
    }

};

// 1 -> 2 -> 7 -> null

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index == 0){
        this.head = this.head.next 
        return
    }
    
    let current = this.head
    let previous = null

        

    while(current && index > 0){
        previous = current
        current = current.next 
        index-- 
    }

    if(current && index == 0){
        previous.next = current.next
    }
};