class Queue {
    constructor() {
        this.stackOne = new Stack()
        this.stackTwo = new Stack()
    }
 
    add(item) {
        return this.stackOne.push(item)
    }
 
    remove() {
        while (this.stackOne.peek() !== undefined) {
            this.stackTwo.push(this.stackOne.pop())
        }
 
        const removed = this.stackTwo.pop()
 
        while (this.stackTwo.peek() !== undefined) {
            this.stackOne.push(this.stackTwo.pop())
        }
 
        return removed
    }
 
    peek() {
        while (this.stackOne.peek() !== undefined) {
            this.stackTwo.push(this.stackOne.pop())
        }
 
        const peeked = this.stackTwo.peek()
 
        while (this.stackTwo.peek() !== undefined) {
            this.stackOne.push(this.stackTwo.pop())
        }
 
        return peeked
    }
}
