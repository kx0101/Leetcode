/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  let [left, right] = [1, Number.MAX_SAFE_INTEGER];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canFinish(time, mid, totalTrips)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;

  function canFinish(time, mid, totalTrips) {
    let trips = 0;

    for (let i = 0; i < time.length; i++) {
      trips += Math.floor(mid / time[i]);
    }

    return trips >= totalTrips;
  }
};
