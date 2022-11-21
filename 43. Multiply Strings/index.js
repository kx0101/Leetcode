/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    
    let firstNumber = [...num1];
    let secondNumber = [...num2];
    
    firstNumber.reverse();
    secondNumber.reverse();
    
    let N = firstNumber.length + secondNumber.length;
    let array = new Array(N).fill(0);
    
    for(let i1 = 0; i1 < secondNumber.length; i1++) {
        let digit2 = Number(secondNumber[i1]);
        for(let i2 = 0; i2 < firstNumber.length; i2++) {
            let digit1 = Number(firstNumber[i2]);
            let currentPosition = i1 + i2;
            let carry = array[currentPosition]
            let multiplication = digit1 * digit2 + carry;
            array[currentPosition] = multiplication % 10;
            array[currentPosition + 1] += Math.floor(multiplication / 10);
        }
    }
    
    if (array[array.length - 1] === 0) {
        array.pop();
    }
    
    array.reverse();
    return array.join("");
};
