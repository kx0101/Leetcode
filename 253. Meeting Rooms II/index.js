/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (!intervals || intervals.length === 0) {
        return 0;
    }
    
    let ends = [...intervals.sort((a, b) => a[1] - b[1])];
    let starts = intervals.sort((a, b) => a[0] - b[0]);
    
    let rooms = 0;
    let end = 0;
    
    for(let i = 0; i < intervals.length; i++) {
        if (starts[i][0] < ends[end][1]) {
            rooms++;
        } else {
            end++;
        }
        rooms = Math.max(rooms, i - end + 1)
    }
    
    return rooms;
};
