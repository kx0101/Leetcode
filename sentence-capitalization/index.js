function capitalize(str) {
  const wordsArray = str.split(" ");
  const newArray = [];

  for (let i = 0; i < wordsArray.length; i++) {
    newArray.push(wordsArray[i].replace(wordsArray[i].charAt(0), wordsArray[i].charAt(0).toUpperCase()));
  }

  return newArray.join(" ");

}
