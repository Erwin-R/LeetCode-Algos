//Bottoms-Up approach 
//Time: O(n), Space: O(1)

var climbStairs = function(n) {
    let [one, two] = [1, 1] 

    for(let i = 0; i < n - 1; i++){
        temp = one
        one = one + two
        two = temp
    }

    return one
};

