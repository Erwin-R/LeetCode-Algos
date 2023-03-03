var guessNumber = function(n) {
    return recursiveCall(n);
};

const recursiveCall = (right, left = 0) => {
    const mid = Math.floor((left + right) / 2);
    const res = guess(mid);
    if(res === -1) return recursiveCall(mid - 1, left);
    else if(res === 1) return recursiveCall(right, mid + 1);
    else return mid;
}
