/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let num = "";
    let currStr = "";
    
    for(let c of s) {
        if (c >= "0" && c <= "9") {
            num += c;
        } else if (c === "[") {
            stack.push(num);
            stack.push(currStr);
            num = "";
            currStr = "";
        } else if (c === "]") {
            currStr = stack.pop() + currStr.repeat(Number(stack.pop()));
        } else {
            currStr += c;
        }
    }
    
    return currStr;
    
};
