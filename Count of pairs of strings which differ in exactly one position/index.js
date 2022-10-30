function difference(array, m) {
  let changed = new Map();
  let same = new Map();

  for(let s of array) {
    if (same.has(s)) {
      same.set(s, same.get(s) + 1);
    } else {
      same.set(s, 1);
    }

    for(let i = 0; i < m; i++) {
      let t = s.substring(0, i) + "//" + s.substring(i + 1);

      if (changed.has(t)) {
        changed.set(t, changed.get(t) + 1);
      } else {
        changed.set(t, 1);
      }
    }
  }

  return pairCount(changed) - pairCount(same) * m;
}

function pairCount(n) {
  let sum = 0;
  for(let [i, j] of n) {
    sum += Math.floor((j * (j - 1)) / 2);
  }

  return sum;
}

console.log(difference(["abc", "abd", "bbd"], 3)); // 2
