/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let [totalLoad, maxLoad] = [0, 0];

  for (let i = 0; i < weights.length; i++) {
    totalLoad += weights[i];
    maxLoad = Math.max(maxLoad, weights[i]);
  }

  let [left, right] = [maxLoad, totalLoad];

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (canShip(weights, mid, days)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;

};

function canShip(weights, capacity, days) {
  let [daysNeeded, currentLoad] = [1, 0];

  for (let i = 0; i < weights.length; i++) {
    currentLoad += weights[i];

    if (currentLoad > capacity) {
      daysNeeded++;
      currentLoad = weights[i];
    }
  }

  return daysNeeded <= days;
}
