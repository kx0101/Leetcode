/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    if (!node) {
        return null;
    }

    const memo = new Map();

    return dfs(node, memo);
};

function dfs(node: Node | null, memo: Map<Node, Node>): Node | null {
    if (!node) {
        return null;
    }

    if (memo.has(node)) {
        return memo.get(node);
    }

    const newNode = new Node(node.val);

    memo.set(node, newNode);

    for (let i = 0; i < node.neighbors.length; i++) {
        newNode.neighbors.push(dfs(node.neighbors[i], memo));
    }

    return newNode;
}
