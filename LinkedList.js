// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  size() {
    let count = 0
    let node = this.head

    while (node) {
      this.head = node.next
      count++
    }

    return count
  }

  getFirst() {
    return this.getAt(0)
  }

  getLast() {
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.head = this.head.next ? this.head.next : null
  }

  removeLast() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    let previous = this.head
    let node = this.head.next

    while (node.next) {
      previous = node
      node = node.next
    }
    previous.next = null
  }

  insertLast(data) {
    let lastNode = getLast()
    if (lastNode) {
      lastNode.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    node = this.head

    if (!node) {
      return
    }

    let counter = 0
    while (node.next) {
      if (index === counter) {
        return node
      }
      node = node.next
      counter++
    }
    return null
  }

  removeAt(index) {
    node = this.head

    if (!node) {
      return
    }

    if (index === 0) {
      node = node.next
      return
    }

    const previous = this.getAt(index - 1)

    if (!previous || !previous.next.next) {
      return
    }

    previous.next = previous.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    if (index > this.size()) {
      insertLast(data)
      return
    }

    const currentNodeAtIndex = this.getAt(index)
    const previousNodeAtIndex = this.getAt(index - 1)

    const newNode = new Node(data)

    previousNodeAtIndex.next = newNode
    newNode.next = currentNodeAtIndex
  }

  forEach(fn) {
    let node = this.head
    let counter = 0
    while (node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList }
