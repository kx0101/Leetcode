function vowels(str) {
  
  let count = 0;
  let vowelChars = ['a', 'e', 'i', 'o', 'u'];
  
  str.replace(/[^\w]/g, '').toLowerCase().split("").map(c => {
    if (vowelChars.includes(c)) {
      count++;
    }
  });
  
  return count
}
