var replaceElements = function(arr) {
    let rightMax = -1;
    for(let i = arr.length -1; i >= 0; i--){
        let current = arr[i]
        arr[i] = rightMax;
        if (current > rightMax) rightMax = current
    }   

    return arr
};