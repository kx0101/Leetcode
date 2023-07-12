function eventualSafeNodes(graph: number[][]): number[] {
    // 0 -> not visited
    // 1 -> visiting
    // 2 -> visited && safe
    const color = new Array(graph.length).fill(0);
    const result = [];

    for (let i = 0; i < graph.length; ++i) {
        if (safe(graph, color, i)) {
            result.push(i);
        }
    }

    function safe(graph: number[][], color: number[], x: number): boolean {
        if (color[x] > 0) {
            return color[x] === 2; // safe
        }

        color[x] = 1; // mark as visiting

        for (const y of graph[x]) {
            if (!safe(graph, color, y)) {
                return false;
            }
        }

        color[x] = 2; // safe

        return true;
    }

    return result;
}
