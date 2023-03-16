var MinStack = function() {
    this.stack = []
    this.minNum = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minNum.length === 0 || val <= this.minNum[this.minNum.length - 1]){
        this.minNum.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    num = this.stack.pop()
    if(num === this.minNum[this.minNum.length - 1]){
        this.minNum.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minNum[this.minNum.length - 1]
};