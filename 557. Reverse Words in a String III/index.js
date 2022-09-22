var reverseWords = function(s) {
    let array = s.split(" ");
    let returnedArray = [];
    
    for (let i = 0; i < array.length; i++) {
        returnedArray.push(array[i].split("").reverse().join(""));
    }
    
    return returnedArray.join(" ");
};

Runtime: 79 ms
Memory Usage: 48.5 MB
