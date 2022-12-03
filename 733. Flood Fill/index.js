/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let currColor = image[sr][sc];
    
    if (currColor === color) return image;
    
    function dfs(img, row, col) {
        if (row < 0 || row >= img.length || col < 0 || col >= img[0].length || img[row][col] !== currColor) return;
        
        img[row][col] = color;
        
        dfs(img, row + 1, col);
        dfs(img, row - 1, col);
        dfs(img, row, col + 1);
        dfs(img, row, col - 1);
        
        return img;
    }
    
    return dfs(image, sr, sc);
};
