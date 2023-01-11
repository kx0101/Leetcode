/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let children = new Array(n);
    let time = 0;

    for(let i = 0; i < n; i++) {
        children[i] = new Array();
    }

    for (let [par, child] of edges) {
        children[par].push(child);
        children[child].push(par);
    }

   function dfs(cur, par) {
       let flag = false;

       for (let child of children[cur]) {
           if (child === par) {
               continue;
           }
           time++;

           let childTime = dfs(child, cur);
           if (childTime) time++;
           else time--;

           flag = flag || childTime
       }
       if (hasApple[cur]) return true;

       return flag;
   }

   dfs(0);
   return time;
};
