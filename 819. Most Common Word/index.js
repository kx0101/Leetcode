/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/\W+/);
  const map = new Map();

  let answer = { word: '', count: 0 };

  for (let w of words) {
    if (bannedSet.has(w)) continue;
    map.set(w, (map.get(w) || 0) + 1);

    if (map.get(w) > answer.count) {
      answer = { word: w, count: map.get(w) };
    }
  }

  return answer.word;
};
