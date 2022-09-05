function steps(n) {

  for (let i = 0; i < n; i++) {
    let step = '';
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        step += '#'
      } else {
        step += ' '
      }
    }
    console.log(step);
  }
  
}
