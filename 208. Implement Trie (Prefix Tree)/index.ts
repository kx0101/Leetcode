class TrieNode {
    children: {};
    isEnd: boolean;

    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let curr = this.root;

        for (const c of word) {
            if (!(c in curr.children)) {
                curr.children[c] = new TrieNode();
            }

            curr = curr.children[c];
        }

        curr.isEnd = true;
    }

    search(word: string): boolean {
        let curr = this.root;

        for (const c of word) {
            if (!(c in curr.children)) {
                return false;
            }

            curr = curr.children[c];
        }

        return curr.isEnd;
    }

    startsWith(prefix: string): boolean {
        let curr = this.root;

        for (const c of prefix) {
            if (!(c in curr.children)) {
                return false;
            }

            curr = curr.children[c];
        }

        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
