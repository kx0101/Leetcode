class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    let array = [this.root]

    while (array.length) {
      const node = array.shift()
      for (let child of node.children) {
        array.push(child)
      }

      fn(node)
    }
  }

  traverseDF(fn) {
    let array = [this.root]

    while (array.length) {
      const node = array.shift()
      array.unshift(...node.children)

      fn(node)
    }
  }
}

module.exports = { Tree, Node }
