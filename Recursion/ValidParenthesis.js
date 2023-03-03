var isValid = function(s) {
    return recursiveFunction(s)
};


const recursiveFunction = (s, stack = [], i = 0) => {
    if(i >= s.length) {
       return stack.length === 0 
    }

    if(s[i] === ")" && stack[stack.length-1] === "("){
        stack.pop();
        return recursiveFunction(s, stack, i + 1)
    }
    else if(s[i] === "]" && stack[stack.length - 1] === "["){
        stack.pop();
        return recursiveFunction(s, stack, i + 1)
    }
    else if(s[i] === "}" && stack[stack.length - 1] === "{"){
        stack.pop();
        return recursiveFunction(s, stack, i + 1)
    }
    else{
        stack.push(s[i])
        return recursiveFunction(s, stack, i + 1)
    }
 
}