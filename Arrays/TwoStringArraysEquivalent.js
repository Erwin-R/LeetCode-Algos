// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

word1 = ["ab", "c"], word2 = ["a", "bc"]

word3 = ["a", "cb"], word4 = ["ab", "c"]

word5  = ["abc", "d", "defg"], word6 = ["abcddefg"]

function arrayStringsAreEqual(word1, word2){

    if(word1.join('') == word2.join('')){
        return true
    } else{
        return false
    }
}



function arrayStringsAreEqual(word1, word2){
    let string1 = '';
    let string2 = '';
    let length;
    word1.length > word2.length ? length = word1.length : length = word2.length; //sets length to whichever word array is longer
    for(let i = 0; i < length; i++){
        if(word1[i]) string1 += word1[i]; //puts together all characters at each index
        if(word2[i]) string2 += word2[i];
    }
    return string1 == string2; //returns true or false depending whether they are the same or not. 
}