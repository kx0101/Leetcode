/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s, stack = []) {
    for (const bracket of s.split("")) {
        
        const isParenthesis = bracket === "(";
        if (isParenthesis) stack.push(")");
        
        const isCurlyBrace = bracket === "{";
        if (isCurlyBrace) stack.push("}");
        
        const isSquareBracket = bracket === "[";
        if (isSquareBracket) stack.push("]");
        
        const isOpenBracket = isParenthesis || isCurlyBrace || isSquareBracket;
        if (isOpenBracket) continue;
        
        const isEmpty = !stack.length;
        const isWrongPair = stack.pop() !== bracket;
        const isInvalid = isEmpty || isWrongPair;
        if (isInvalid) return false;
    }
    
    return stack.length === 0;
};
