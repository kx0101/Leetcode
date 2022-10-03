var letterCombinations = function(digits) {
    let res = [];
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
    
    function backtrack(i, curStr) {
        if (curStr.length === digits.length) {
            res.push(curStr);
            return;
        }
        for(const c of letters[digits[i]]) {
            backtrack(i + 1, curStr + c);
        }
    }
    
    if (digits) {
        backtrack(0, "");
    }
    
    return res;
    
};
