var isPerfectSquare = function(num) {
    let left = 1
    let right = num

    while(left <= right){
        let middle = Math.floor((left + right) / 2 )

        if(middle * middle == num){
            return true
        } else if(middle * middle < num){
            left = middle + 1
        } else if(middle * middle > num){
            right = middle - 1
        }        
    } 

    return false
};