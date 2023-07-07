class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string) {
        let curr = this.root;

        for (const char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode());
            }

            curr = curr.children.get(char);
        }

        curr.isEnd = true;
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const trie = new Trie();
    const result = new Set<string>();
    const visited: boolean[][] = Array.from(Array(board.length), () => Array(board[0].length).fill(false));

    for (const word of words) {
        trie.addWord(word);
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            dfs(row, col, trie.root, '');
        }
    }

    function dfs(row: number, col: number, node: TrieNode, word: string) {
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || visited[row][col] === true || !node.children.has(board[row][col])) {
            return;
        }

        visited[row][col] = true;
        node = node.children.get(board[row][col]);
        word += board[row][col];

        if (node.isEnd) {
            result.add(word);
        }

        dfs(row + 1, col, node, word);
        dfs(row - 1, col, node, word);
        dfs(row, col + 1, node, word);
        dfs(row, col - 1, node, word);

        visited[row][col] = false;
    }

    return Array.from(result);
};
