/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    return (goal + goal).indexOf(s) !== -1 && s.length === goal.length;
};
