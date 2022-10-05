/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    
    for(let i = 1; i <= n; i++) {
        let newString = "";
        
        if (i % 3 === 0) {
            newString += "Fizz";
        }
        
        if (i % 5 === 0) {
            newString += "Buzz";
        }
        
        result.push(newString.length ? newString : i.toString());
    }
    
    return result;
};
