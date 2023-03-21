class Node{
    constructor(val, prev = null, next = null){
        this.val = val
        this.next = next;
        this.prev = prev;
    }
}


/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.current = new Node(homepage);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.current.next = new Node(url, this.current) //where the second parameter is the previous node
    this.current = this.current.next // we are keeping track of the most current tab 
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.current.prev && steps){
        this.current = this.current.prev
        steps--
    }

    return this.current.val
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
        while(this.current.next && steps){
        this.current = this.current.next
        steps--
    }

    return this.current.val
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */