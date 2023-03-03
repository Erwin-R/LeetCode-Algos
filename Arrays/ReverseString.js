// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


var reverseString = function(s) {
    let pointer1 = 0
    let pointer2 = s.length - 1

    while(pointer1 < pointer2){
        let temp = s[pointer2]
        s[pointer2] = s[pointer1]
        s[pointer1] = temp
        pointer1++
        pointer2--

    }
    // for(let i = 0; i < s.length; i++){
    //     let temp = s[i + 1];
    //     s[i + 1] = s[i];
    //     s[i] = temp;
    // }
    return s
};

// temp = s[0] = h
// s[4] = h
// s[0] = e
