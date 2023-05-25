/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        // find the last bit of n
        const lastBit = n & 1;

        // shift the last bit of n to the left
        const reversedLastBit = lastBit << (31 - i);

        // insert the reversed last bit of n into the result
        result |= reversedLastBit;

        // the last bit of n is already taken care of, so we need to drop it
        n >>>= 1;
    }

    // convert the result to an unsigned 32-bit integer
    return result >>> 0;
}; 



// using << coerces the int to a 32-bit signed int, so the tests fail because it's interpreted as a negative value.

// Using *= coerces it back to a JS float, which is interpreted as the correct positive value (JS floats can store its up to 53 bits)
// You can still use result = result << 1 if you either (a) Math.abs(result) at the end before returning or (b) return result >>> 0 before returning. Both have the same effect.
// This is documented here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators