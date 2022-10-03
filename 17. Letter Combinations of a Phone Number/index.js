var letterCombinations = function(digits) {
    let letters = {
       '2': 'abc',
       '3': 'def',
       '4': 'ghi',
       '5': 'jkl',
       '6': 'mno',
       '7': 'pqrs',
       '8': 'tuv',
       '9': 'wxyz'
    }
    
    if (!digits.length) return [];
    let res = [""];
    let lettersTwo;
    let temp; 
    
    for(let i = 0; i < digits.length; i++) {
        lettersTwo = letters[digits[i]]
        temp = [];
        for(let j = 0; j < res.length; j++) {
            for(let k = lettersTwo.length - 1; k >= 0; k--) {
                if (k === 0) {
                    res[j] += lettersTwo[k]
                } else {
                    temp.push(res[j] + lettersTwo[k]);
                }
            }
        }
        res.push(...temp);
    }
    
    return res;
    
};
