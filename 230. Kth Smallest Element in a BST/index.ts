function kthSmallest(root: TreeNode | null, k: number): number {
    let stack: TreeNode[] = [];

    function dfs(root: TreeNode | null): void {
        if (!root) {
            return;
        }

        dfs(root.left);
        stack.push(root);
        dfs(root.right);
    }

    dfs(root);

    return stack[k - 1].val;
};
