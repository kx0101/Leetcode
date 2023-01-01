var TimeMap = function() {
  // key = string, value = [ [val, time] ]
  this.store = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.store[key]) {
    this.store[key] = [];
  }

  this.store[key].push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  let result = "";

  let values = this.store[key] || [];
  let [left, right] = [0, values.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (values[mid][1] <= timestamp) {
      result = values[mid][0];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;

};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
