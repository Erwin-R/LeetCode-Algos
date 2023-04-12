/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
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

//O(n * m)