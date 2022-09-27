class Queue {
    constructor() {
        this.stackOne = new Stack()
        this.stackTwo = new Stack()
    }
 
    add(item) {
        return this.stackOne.push(item)
    }
 
    remove() {
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop())
        }
 
        const removed = this.stackTwo.pop()
 
        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop())
        }
 
        return removed
    }
 
    peek() {
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop())
        }
 
        const peeked = this.stackTwo.peek()
 
        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop())
        }
 
        return peeked
    }
}
