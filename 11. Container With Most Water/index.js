/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    
    while(left < right) {
        const [leftHeight, rightHeight] = getHeights(height, left, right);
        const area = getArea(height, left, right);
        
        max = Math.max(max, area);
        
        const isRightGreater = leftHeight <= rightHeight;
        if (isRightGreater) left++;
        
        const isLeftGreater = leftHeight > rightHeight;
        if (isLeftGreater) right--;
        
    }
    
    return max;
};

const getHeights = (height, left, right) => [height[left], height[right]];

const getArea = (height, left, right) => {
    const [leftHeight, rightHeight] = getHeights(height, left, right);
    const _height = Math.min(leftHeight, rightHeight);
    const width = right - left;
    
    return _height * width;
}
