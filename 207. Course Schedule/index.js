/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let preMap = new Map();
    
    for(let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }
    
    for(const [crs, pre] of prerequisites) {
        preMap.get(crs).push(pre);
    }
    
    let visitedSet = new Set();
    
    function dfs(crs) {
        if (visitedSet.has(crs)) {
            return false;
        }
        
        if (preMap.get(crs).length === 0) {
            return true;
        }
        
        visitedSet.add(crs);
        
        for(let pre of preMap.get(crs)) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visitedSet.delete(crs);
        preMap.set(crs, [])
        
        return true;
    }
    
    for(let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    
    return true;
};
