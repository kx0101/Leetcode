/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const [rows, cols] = [matrix.length, matrix[0].length];
  let [left, right] = [0, rows * cols - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [row, col] = [Math.floor(mid / cols), mid % cols];
    const guess = matrix[row][col];

    const isTarget = guess === target;
    if (isTarget) return true;

    const isTargetGreater = guess < target;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = guess > target;
    if (isTargetLess) right = mid - 1;
  }

  return false;
}
