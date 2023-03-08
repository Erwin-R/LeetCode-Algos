//insertion sort
var sortTheStudents = function(score, k) {
    for(let i = 0; i < score.length; i++){
        let j = i - 1;
        while(j >= 0 && score[j][k] < score[j + 1][k]){
            let temp = score[j + 1];
            score[j + 1] = score[j]
            score[j] = temp
            j--
        }
    }

    return score
};