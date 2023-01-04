/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  let result = 0;
  let taskMap = new Map();

  for (let task of tasks) {
    taskMap.set(task, (taskMap.get(task) || 0) + 1);
  }

  for (let [key, count] of taskMap) {
    if (count === 1) return -1;

    result += Math.ceil(count / 3);
  }

  return result;
};
