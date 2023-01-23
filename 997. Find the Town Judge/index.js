/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) {
        return 1;
    }

    let trustScore = new Array(n + 1).fill(0);

    for(let [p1, p2] of trust) {
        trustScore[p1] -= 1;
        trustScore[p2] += 1;
    }

    for (let i = 0; i <= n; i++) {
        if ((n - 1) === trustScore[i]) {
            return i;
        }
    }

    return -1;

};
