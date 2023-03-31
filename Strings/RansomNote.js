/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let map = {}

    for(let i = 0; i < magazine.length; i++){
        map[magazine[i]] ?  map[magazine[i]]++ :  map[magazine[i]] = 1;
    }


    for(let i = 0; i < ransomNote.length; i++){
        if(map[ransomNote[i]]){
            map[ransomNote[i]]--
        } else{
            return false
        }
    }

    return true


};