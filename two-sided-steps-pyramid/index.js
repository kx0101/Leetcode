function pyramid(n) {
  // generate base of pyramid, aka longest possible string
  let limit = n + n-1;

  let hashesToPrint = 1; // number of hashes to print
  for (let i = 0; i < n; i++) {
      
      // get length of spaces we need on each side
      let difference = (limit - hashesToPrint) / 2;
      
      // generate spaces string
      let spaces = ' '.repeat(difference);

      // create pounds string
      let pounds = '#'.repeat(hashesToPrint);

      // append spaces on either side of our pound string
      let newString = spaces + pounds + spaces

      console.log(newString)

      // increment our counter by two
      hashesToPrint += 2
  }
}
