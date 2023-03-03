// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.


var calPoints = function(operations) {
    let sum = 0;
    const stack = [];
    for(let i = 0; i < operations.length; i++){
        if(operations[i] == "C"){
            sum -= stack.pop()
        } else if(operations[i] == "D"){
            stack.push(stack[stack.length - 1] * 2)
            console.log(stack[stack.length - 1])
            sum += stack[stack.length - 1 ]
        } else if(operations[i] === "+"){
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
            sum += stack[stack.length - 1] 
        } else{
            stack.push(parseInt(operations[i]))
            sum += parseInt(operations[i])
        }
    }


    return sum
};