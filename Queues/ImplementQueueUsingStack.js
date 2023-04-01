
var MyStack = function() {
    this.q = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x)
};
/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let size = this.q.length
    for(let i = 0; i < size - 1; i++){
        this.q.push(this.q.shift())
    }  
    return this.q.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let size = this.q.length
    for(let i = 0; i < size - 1; i++){
        this.q.push(this.q.shift())
    }  
    let top = this.q.shift();
    this.q.push(top)

    return top
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length === 0 
};