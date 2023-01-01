/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let [left, right] = [1, Math.max(...piles)];
  let result = right;

  while (left <= right) {
    let k = Math.floor((left + right) / 2);
    let hours = 0;

    for (let p of piles) {
      hours += Math.ceil(p / k);
    }

    if (hours <= h) {
      result = Math.min(result, k);
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return result;
};
