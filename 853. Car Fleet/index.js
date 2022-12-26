/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const coordinates = getCoordinates(target, position, speed);

    return search(coordinates);
};

const getCoordinates = (target, position, speed) => position
    .map((_position, index) => [ _position, speed[index] ])
    .sort(([ aPosition ], [ bPosition ]) => aPosition - bPosition)
    .map(([ _position, _speed]) => (target - _position) / _speed);

const search = (coordinates, stack = []) => {
    for (let coordinate of coordinates) {
        shrink(coordinate, stack);
        stack.push(coordinate);
    }

    return stack.length;
}

const shrink = (coordinate, stack) => {
    const isPreviousLess = () => stack[stack.length - 1] <= coordinate;
    while (stack.length && isPreviousLess()) stack.pop();
}
