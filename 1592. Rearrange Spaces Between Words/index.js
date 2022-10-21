/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    const spaces = text.split('').filter(char => char === " ").length;
    const words = text.split(' ').filter(word => word.length);
    
    if (words.length === 1) {
        return words + ' '.repeat(spaces);
    }
    
    const spacesBetweenWords = Math.floor(spaces / (words.length - 1));
    const remainder = spaces % (words.length - 1);
    
    return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainder);
    
};
