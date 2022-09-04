function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (stringA.length !== stringB.length) { return false }
  
  const stringAObj = {}
  const stringBObj = {}

  for (let i = 0; i < stringA.length; i++) {
    if (stringAObj[stringA[i]]) {
      stringAObj[stringA[i]]++;
    } else {
      stringAObj[stringA[i]] = 1;
    }

    if (stringBObj[stringB[i]]) {
      stringBObj[stringB[i]]++;
    } else {
      stringBObj[stringB[i]] = 1;
    }

  }

  for (let i = 0; i < stringA.length; i++) {

    if (stringBObj[stringB[i]] !== stringAObj[stringB[i]]) {
      return false;
    }
  }

  return true;

}
