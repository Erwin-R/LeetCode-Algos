var twoSum = function(numbers, target) {
    let front = 0
    let back = numbers.length - 1 

    while(front < back){
        if(numbers[front] + numbers[back] == target){
            return [front + 1,back + 1 ]
        } else if(numbers[front] + numbers[back] > target){
            back--
        } else{
            front++
        }
    }
};