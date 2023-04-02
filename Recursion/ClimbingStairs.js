/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return climb_Stairs(n, 0)
};

const climb_Stairs = (n, i) => {

    // if(stepsTaken > n){
    //     return 0
    // }

    // if(stepsTaken == n){
    //     return 1
    // }

    // return climb_Stairs(n, stepsTaken + 1) + climb_Stairs(n, stepsTaken + 2)
    if (i > n) {
        return 0;
    }
    if (i == n) {
        return 1;
    }
    return climb_Stairs(n, i + 1) + climb_Stairs(n, i + 2);
};
