/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let result = [];
    let m = text1.length;
    let n = text2.length;

    for (let i = 0; i <= m; i++) {
        result[i] = new Array(n + 1).fill(0)
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (text1.charAt(i - 1) !== text2.charAt(j - 1)) {
                result[i][j] = Math.max(result[i - 1][j], result[i][j - 1])
            } else {
                result[i][j] = result[i - 1][j - 1] + 1;
            }
        }
    }

    return result[m][n];
};
