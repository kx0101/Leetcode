var jump = function(blocks) {
    let res = 0;
    let l = 0;
    let r = 0;
    
    while (r < blocks.length - 1) {
        let farthest = 0;
        for(let i = l; i < r + 1; i++) {
            farthest = Math.max(farthest, i + blocks[i]);
        }
        l = r + 1;
        r = farthest
        res += 1;
    }

  return res;
};
