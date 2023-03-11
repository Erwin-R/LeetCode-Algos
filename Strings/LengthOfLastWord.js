var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let count = 0;


    while(s[i] == " "){
        i--
    }

    while(i >= 0 && s[i] != " "){
        count++
        i -= 1
    }

    return count
};