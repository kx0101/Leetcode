/*
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let result = [];
  let partition = [];

  dfs(s, partition, result);

  return result;
};

const isPalindrome = str => str === str.split("").reverse().join("");

function dfs(s, partition, result) {
  if (s.length === 0) {
    result.push([...partition]);
    return;
  }

  for (let i = 1; i <= s.length; i++) {
    let prefix = s.substring(0, i);
    let postfix = s.substring(i);

    if (isPalindrome(prefix)) {
      partition.push(prefix);

      dfs(postfix, partition, result);

      partition.pop();
    }
  }

  return;
}
