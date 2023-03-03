// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

// Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false


function canPlaceFlowers (flowerbed, n){
    if(n === 0) return true; //if you dont want to plant a flower then just return true
    if(flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1){ //making it not equal to 1 accounts for index 0 where there is no flowerbed[i-1]
        n--;
        i++; //since we know flowerbed[i+1] is already a 0 we increment i so we skip over the next iteration
        if(n === 0 ) return true;
    }
    return false
}