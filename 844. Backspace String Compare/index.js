/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    
    while (i >= 0 || j >= 0) {
        i = clear(s, i);
        j = clear(t, j);
        
        let sChar = s[i];
        let tChar = t[j];
        
        if (sChar !== tChar) {
            return false;
        }
        
        i--;
        j--;
    }
    
    return true;
};

function clear(string, index) {
    let skip = 0;
    
    while (index >= 0) {
        if (string[index] === "#") {
            skip++;
            index--;
        } else if (skip > 0) {
            skip--;
            index--;
        } else {
            break;
        }
    }
    
    return index;
}
