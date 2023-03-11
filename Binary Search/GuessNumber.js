var guessNumber = function(n) {
    let left = 0, right = n

    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        let res = guess(middle)
        if(res == -1) right = middle - 1, left
        else if(res == 1) left = middle + 1, right
        else return middle
    }
};