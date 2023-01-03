/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let deleteColumns = 0;

    if (strs.length === 0) return deleteColumns;

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                deleteColumns++;
                break;
            }
        }
    }

    return deleteColumns;
};
