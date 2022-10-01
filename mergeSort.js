function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = [];
    
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    
    return [...results, ...left, ...right]
}
