piles =
[1000000000,1000000000]
h =
3
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
*/

//O(n * m)

var minEatingSpeed = function(piles, h) {
    let eatingSpeed = 1

    while(true){
        let hoursTakenToEat = 0

        for(const pile of piles){
            hoursTakenToEat += Math.ceil(pile/eatingSpeed)
        }

        if(hoursTakenToEat <= h){
            return eatingSpeed
        } else{
            eatingSpeed += 1
        }
    }

};

//O(n * log(m))

var minEatingSpeed = function(piles, h) {
    let [left, right] = [1, Math.max(...piles)]
    let res = right

    while(left <= right){
        let middle = Math.floor((left + right)/ 2)
        let hoursSpent = 0

        for(const pile of piles){
            hoursSpent += Math.ceil(pile/middle)
        }

        if(hoursSpent <= h){
            res = Math.min(res, middle)
            right = middle - 1
        } else{
            left = middle + 1
        }
    }

    return res
};