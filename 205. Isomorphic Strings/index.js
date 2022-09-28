var isIsomorphic = function(s, t) {
    
    const A = [];
    const B = [];
    
    for(let i = 0; i < s.length; i++) {
        const charA = s[i];
        const charB = t[i];
        
        if (A[charA] !== B[charB]) return false;
        
        A[charA] = i;
        B[charB] = i;
    }
    
    return true;
};
