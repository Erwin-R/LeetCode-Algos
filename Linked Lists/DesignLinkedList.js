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
