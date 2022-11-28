/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let order = [];
    let queue = [];
    let graph = new Map();
    let inDegree = new Array(numCourses).fill(0);
    
    for(const [crs, pre] of prerequisites) {
        if (graph.has(pre)) {
            graph.get(pre).push(crs);
        } else {
            graph.set(pre, [crs]);
        }
        
        inDegree[crs]++;
    }
    
    for(let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    while (queue.length) {
        let pre = queue.shift();
        if (graph.has(pre)) {
            for(const crs of graph.get(pre)) {
                inDegree[crs]--;
                if (inDegree[crs] === 0) queue.push(crs);
            }
        }
        order.push(pre);
    }
    
    return numCourses === order.length ? order : [];
};
