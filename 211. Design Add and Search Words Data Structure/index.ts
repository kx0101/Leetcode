class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let curr = this.root;

        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }

            curr = curr.children.get(c);
        }

        curr.isEnd = true;
    }

    search(word: string): boolean {
        return this.searchNode(this.root, word, 0);
    }

    searchNode(node: TrieNode, word: string, index: number): boolean {
        if (index === word.length) {
            return node.isEnd;
        }

        const char = word[index];

        if (char !== '.') {
            const childNode = node.children.get(char);

            if (childNode && this.searchNode(childNode, word, index + 1)) {
                return true;
            }

        } else {
            for (const childNode of node.children.values()) {
                if (this.searchNode(childNode, word, index + 1)) {
                    return true;
                }
            }
        }

        return false;
    }
}
