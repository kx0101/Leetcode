/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let [min, res] = [0, 0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      res = Math.min(res + 1, min);
    } else {
      min++;
    }
  }

  return res;
};
