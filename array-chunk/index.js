function chunk(array, size) {
  let finalArray = [];

  for (let i = 0; i < array.length; i+=size) {
    let newArray = [];
    for (let j = i; j < size+i; j++) {
      if (array[j] !== undefined) {
        newArray.push(array[j]);  
      }
    }
    finalArray.push(newArray);
  }

  return finalArray
}
