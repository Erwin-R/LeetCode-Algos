//Insertion Sort
var sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++){
        j = i - 1
        while(j >= 0 && nums[j] > nums[j + 1]){
            let temp = nums[j + 1];
            nums[j + 1] = nums[j];
            nums[j] = temp;
            j--;
        }
    }

    return nums
};

//MergeSort
var sortArray = function(nums) {
    if(nums.length === 1) return nums
    let leftArr = [];
    let rightArr = [];
    let middle = Math.floor(nums.length/2);

    for(let i = 0; i < middle; i++){
        leftArr.push(nums[i])
    }

    for(let i = middle; i < nums.length; i++){
        rightArr.push(nums[i])
    }

    sortArray(leftArr);
    sortArray(rightArr);

    merge(leftArr, rightArr, nums)

    return nums
};

const merge = (leftArr, rightArr, oriArr) => {
    let leftIdx = 0;
    let rightIdx = 0; 
    let oriIdx = 0; 


    while(leftIdx < leftArr.length && rightIdx < rightArr.length){
        if(leftArr[leftIdx] <= rightArr[rightIdx]){
            oriArr[oriIdx] = leftArr[leftIdx]
            leftIdx++
        } else{
            oriArr[oriIdx] = rightArr[rightIdx]
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
        oriArr[oriIdx] = rightArr[rightIdx];
        rightIdx++
        oriIdx++
    }

    return oriArr

}