function levelWidth(root) {
  let array = [root, 's']
  const counters = [0]

  while (array.length > 1) {
    const node = array.shift()

    if (node === 's') {
      counters.push(0)
      array.push('s')
    } else {
      array.push(...node.children)
      counters[counters.length - 1]++
    }
  }

  return counters
}
