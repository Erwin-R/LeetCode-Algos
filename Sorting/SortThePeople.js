//insertion sort

var sortPeople = function(names, heights) {
    for(let i = 0; i < heights.length; i++){
        let j = i - 1
        while(j >= 0 && heights[j] < heights[j + 1]){
            let temp = names[j + 1];
            names[j + 1] = names[j]
            names[j] = temp
            let temp2 = heights[j + 1]
            heights[j + 1] = heights[j]
            heights[j] = temp2
            j--
        }
    }


    return names
    
};