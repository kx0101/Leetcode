function weave(sourceOne, sourceTwo) {
    const queue = new Queue();
    
    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            queue.add(sourceOne.remove());
        }
        
        if (sourceTwo.peek()) {
            queue.add(sourceTwo.remove());
        }
    }
    
    return queue; // [1, 'hi', 2, 'hello', 3, 'hey']
    
}

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
