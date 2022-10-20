var ListNode = function(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
}

var MyHashMap = function() {
    this.size = 19997
    this.mult = 18258125;
    this.data = new Array(this.size);
};

MyHashMap.prototype.hash = function(key) {
    return key * this.mult % this.size;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.remove(key);
    
    let h = this.hash(key);
    let node = new ListNode(key, value, this.data[h]);
    this.data[h] = node;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let h = this.hash(key);
    let node = this.data[h];
    
    while (node) {
        if (node.key === key) {
            return node.val;
        }
        node = node.next;
    }
    
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let h = this.hash(key);
    let node = this.data[h];
    if (!node) return;
    
    if (node.key === key) {
        this.data[h] = node.next;
    } else {
        while (node.next) {
            if (node.next.key === key) {
                node.next = node.next.next;
                return;
            }
            node = node.next;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
