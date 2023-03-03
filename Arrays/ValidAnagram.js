// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

function validAnagram (s,t){
    if(s.length != t.length){
        return false
    }

    let map = {};
    for(let i = 0; i < s.length; i++){
        map[s[i]] ? map[s[i]] ++ : map[s[i]] = 1; //loop through the s string 
    }
    for(let j = 0; j < t.length; j++){ //loops through t which is "nagaram"
        if(map[t[j]]){ //checks if the value that its looking through in t is in the map 
            map[t[j]]--
        } else { //if has extra letter like "p" then it will return false
            return false;
        }
    }
    console.log(map)
    return true
}

s = "anagram", t = "nagaram"
s2 = "rat", t2 = "car"
s3 = "aacc", t3 = "ccac"
console.log(validAnagram(s, t));
console.log(validAnagram(s2, t2));
console.log(validAnagram(s3, t3));



// map = {
//     a: 0,
//     n: 0, 
//     g: 0, 
//     r: 0, 
//     m: 0
// }