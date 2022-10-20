var Node = function(val) {
    this.val = val;
    this.next = null;
}

var MyHashSet = function(size = 1000) {
    this.keyMap = new Array(size);
};

MyHashSet.prototype._hash = function(key) {
    return key % this.keyMap.length;
}

MyHashSet.prototype.add = function(key) {
    let index = this._hash(key);
    
    if (this.contains(key)) return;
    
    let newNode = new Node(key);
    
    if (!this.keyMap[index]) {
        this.keyMap[index] = newNode;
    } else {
        let oldNode = this.keyMap[index];
        newNode.next = oldNode;
        this.keyMap[index] = newNode;
    }
};

MyHashSet.prototype.remove = function(key) {
    let index = this._hash(key);
    if (!this.contains(key)) return false;
    
    let prevNode = this.keyMap[index];
    let currentNode = prevNode.next;
    let nodeFound = false;
    
    if (prevNode.val === key) {
        nodeFound = true;
        this.keyMap[index] = currentNode;
        return;
    }
    
    while (!nodeFound && currentNode.next) {
        if (currentNode.val === key) {
            nodeFound = true;
        } else {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }
    
    if (!currentNode) {
        prevNode.next = null;
    } else {
        prevNode.next = currentNode.next;
    }
};

MyHashSet.prototype.contains = function(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) return false;
    
    let currentNode = this.keyMap[index];
    let nodeFound = false;
    
    while (!nodeFound && currentNode) {
        if (currentNode.val === key) {
            return true;
        } else {
            currentNode = currentNode.next;
        }
    }
    
    return false;
};
