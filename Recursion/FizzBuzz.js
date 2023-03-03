var fizzBuzz = function(n) {
    return recursiveFizzBuzz(n)
};

const recursiveFizzBuzz = (num, arr = [], idx = 1) => {
    if(idx > num) return arr;
    if(idx % 15 === 0) arr.push("FizzBuzz");
    else if(idx % 5 === 0) arr.push("Buzz");
    else if(idx % 3 === 0) arr.push("Fizz");
    else arr.push(`${idx}`);
    return recursiveFizzBuzz(num, arr, idx + 1);
}


// ***********************************************//

var fizzBuzz = function(n) {
    let arr = []
    let i = 1
    return recursiveFunction(n, arr, i)
};

var recursiveFunction = (n, arr, i) => {
    if(i > n){
        return arr 
    }

    if(i % 15 == 0){
        arr.push("FizzBuzz")
        return recursiveFunction(n, arr, i + 1)
    } else if(i % 5 == 0){
        arr.push("Buzz")
        return recursiveFunction(n, arr, i + 1)
    } else if(i % 3 == 0){
        arr.push("Fizz")
        return recursiveFunction(n, arr, i + 1)
    } else{
        arr.push(i.toString())
        return recursiveFunction(n, arr, i + 1)
    }
}