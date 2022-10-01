function levelWidth(root) {
    let array = [root, 's'];
    const counters = [0];
    
    while (array.length > 1) {
        const node = array.shift();
        
        if (node === 's') {
            array.push('s');
            counters.push(0);
        } else {
            array.push(...node.children);
            counters[counters.length - 1]++;
        }
    }
    
    return counters
}
