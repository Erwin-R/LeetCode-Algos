//insertion sort
var sortSentence = function(s) {
    let sentenceArr = s.split(" ")
    
    for(let i = 0; i < sentenceArr.length; i++){
        let j = i - 1;
        while(j >= 0 && sentenceArr[j + 1].slice(-1) < sentenceArr[j].slice(-1)){
            let temp = sentenceArr[j + 1];
            sentenceArr[j + 1] = sentenceArr[j];
            sentenceArr[j] = temp
            j--
        }
    }

    for(let i = 0; i < sentenceArr.length; i++){
        sentenceArr[i] = sentenceArr[i].slice(0, -1)

    }


    return sentenceArr.join(" ")
};