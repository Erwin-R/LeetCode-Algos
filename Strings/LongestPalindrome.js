/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length == 1) return 1

    let map = {}
    let count = 0; 

    for(let i = 0; i < s.length; i++){
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1 

        if(map[s[i]] % 2 == 0){
            count += 2
        } 

    }

    
    return count < s.length ? count + 1 : count
};

//map = {a: 1, b: 2, c: 4, d: 2}