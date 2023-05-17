//Bottoms-Up approach 
//Time: O(n), Space: O(1)

var climbStairs = function(n) {
    let [one, two] = [1, 1] 


    //do n - 1 since if n then it will perform operation one more than needed to
    for(let i = 0; i < n - 1; i++){
        temp = one
        one = one + two
        two = temp
    }

    return one
};

//i = 0
//temp = 1
//one = 1 + 1 = 2
//two = 1

// i = 1
//temp = 2
//one = 2 + 1 = 3
//two = 1

// i = 2
//temp = 3
//one = 3 + 1 = 4
//two = 3