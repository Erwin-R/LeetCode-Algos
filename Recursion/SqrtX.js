var mySqrt = function (x) {
    return recursiveSqrt(x);
};

const recursiveSqrt = (num, left = 0, right = num) => {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    if (square === num) return mid;
    else if (square > num && (mid - 1) * (mid - 1) < num) return mid - 1;
    return square > num ? recursiveSqrt(num, left, mid - 1) : recursiveSqrt(num, mid + 1, right);
}

/******************************************** */


var mySqrt = function(x, num = 0) {
    if(x == num * num){
        return num
    } else if (num * num > x){
        num -= 1
        return num
    } else{
        num += 1
        return mySqrt(x, num)
    }
};