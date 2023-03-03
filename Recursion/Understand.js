const sumNum = (num, sum = 0) => {
    if(num > 10) return sum;
    sum += num
    return sumNum(num + 1, sum)
}

console.log(sumNum(1));

