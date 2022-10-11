/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNumber = Number.MAX_VALUE;
    let secondNumber = Number.MAX_VALUE;
    
    for(const num of nums) {
        if (num <= firstNumber) {
            firstNumber = num;
        } else if (num <= secondNumber) {
            secondNumber = num;
        } else {
            return true;
        }
    }
    
    return false;
};
