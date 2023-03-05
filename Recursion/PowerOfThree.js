var isPowerOfThree = function(n) {
    return recursiveFunction(n)
};

const recursiveFunction = (n, power = 0) => {
    if(Math.pow(3, power) > n){
        return false
    } else if(Math.pow(3, power) === n){
        return true
    } else{
        return recursiveFunction(n, power + 1)
    }
}