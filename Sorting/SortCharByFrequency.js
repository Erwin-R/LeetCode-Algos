//merge sort
var frequencySort = function(s) {
    
    
    let map  = {}

    for(let i = 0; i < s.length; i++){
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }

    let charArr = Object.entries(map);

    merge(charArr);

    let newStr = "";

    for(let i = 0; i < charArr.length; i++){
        while(charArr[i][1] > 0){
            newStr += charArr[i][0]
            charArr[i][1]--
        }
    }

    return newStr
};


const merge = (charArr) => {
    if (charArr.length === 1) return charArr

    let leftArr = [];
    let rightArr = [];
    let middle = Math.floor(charArr.length/2);


    for(let i = 0; i < middle; i++){
        leftArr.push(charArr[i])
    }

    for(let i = middle; i < charArr.length; i++){
        rightArr.push(charArr[i])
    }

    merge(leftArr);
    merge(rightArr);

    mergeSort(leftArr, rightArr, charArr);

    console.log(leftArr)
    console.log(rightArr)
}


const mergeSort = (leftArr, rightArr, oriArr) => {
    let leftIdx = 0;
    let rightIdx = 0;
    let oriIdx = 0; 

    while(leftIdx < leftArr.length && rightIdx < rightArr.length){
        if(leftArr[leftIdx][1] >= rightArr[rightIdx][1]){
            oriArr[oriIdx] = leftArr[leftIdx];
            leftIdx++
        } else{
            oriArr[oriIdx] = rightArr[rightIdx];
            rightIdx++
        }
        oriIdx++
    }

    while(leftIdx < leftArr.length){
        oriArr[oriIdx] = leftArr[leftIdx];
        leftIdx++
        oriIdx++
    }

    while(rightIdx < rightArr.length){
        oriArr[oriIdx] = rightArr[rightIdx]
        rightIdx++
        oriIdx++
    }

    return oriArr
}


//insertion sort

var frequencySort = function(s) {
    let map = {};

    for(let i = 0; i < s.length; i++){
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    } 

    let charArr = Object.entries(map);


    for(let i = 0; i < charArr.length; i++){
        let j = i -1
        while(j >= 0 && charArr[j][1] < charArr[j+1][1]){
            let temp = charArr[j + 1]
            charArr[j + 1] = charArr[j]
            charArr[j] = temp
            j--
        }
    }

    let newStr = "";
    console.log(charArr)

    for(let i = 0; i < charArr.length; i++){
        while(charArr[i][1] > 0){
            newStr += charArr[i][0];
            charArr[i][1]--
        }
    }

    
    return newStr
};