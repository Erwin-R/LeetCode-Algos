// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

var words1 = ["abc","car","ada","racecar","cool"];

function firstPalindrome(words){ //conventional form

    for(let i = 0; i < words.length; i++){
        let left = 0;
        let right = words[i].length-1;
        if(words[i].length == 1){
            return words[i]
        }
        while(left < right){
            if(words[i][left] !== words[i][right]){
                break
            }
            left++; 
            right--;
            
            if(left >= right){ //need to make it less than or equal to to accont for 3 letter words since when they meet at middle left and right will both equal 1 and wont hit this if statement
                return words[i];
            }
        }
    }
    return "";
}

console.log(firstPalindrome(words1));


function firstPalindrome(words){ //shorthand form
    for(i of words) {
        let front = 0;
        let end = i.length - 1;
        while(front <= end) {
            if(i[front] !== i[end]) break;
            front++, end--;
            if(front >= end) return i;
        }
    }
    return '';
}

//i of gives you the value of the index
//i in gives you the index that i is at