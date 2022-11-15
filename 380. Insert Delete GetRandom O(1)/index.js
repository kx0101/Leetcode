
var RandomizedSet = function() {
    this.map = new Map();
    this.values = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.values.length);
    this.values.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    const index = this.map.get(val);
    this._swap(index, this.values.length - 1);
    this.values.pop();
    this.map.set(this.values[index], index);
    this.map.delete(val);
    return true;
};

RandomizedSet.prototype._swap = function (a, b) {
    let temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
    return true;
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.values[Math.floor(Math.random() * this.values.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
