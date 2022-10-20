/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const nums = new Array(10).fill().map((_, i) => String(i));
    
    let array = [];
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    while (i >= 0 || j >= 0) {
        let firstNumber = i >= 0 ? nums.indexOf(num1[i]) : 0;
        let secondNumber = j >= 0 ? nums.indexOf(num2[j]) : 0;
        
        let remainder = (firstNumber + secondNumber + carry) % 10;
        array.unshift(remainder);
        carry = ((firstNumber + secondNumber + carry) - remainder) / 10;
        
        i--;
        j--;
    }
    if (carry) array.unshift(carry);
    return array.join("");
};
