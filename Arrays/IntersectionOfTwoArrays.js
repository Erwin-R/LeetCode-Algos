var intersection = function(nums1, nums2) {
    let resultArr = new Set;

    let compare = new Set(nums1);
    
    for(let i = 0; i < nums2.length; i++){
        if(resultArr.has(nums2[i])){
            continue
        }
        else if(compare.has(nums2[i])){
            resultArr.add(nums2[i])
        }  
    }

    return [...resultArr]
};