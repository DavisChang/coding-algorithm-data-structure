class DepthFirstPaths {
  constructor(graph, s) {
    this.graph = graph;
    this.s = s;

    // init
    // Ensure marked array is initialized
    this.marked = Array(graph.getV()).fill(false);
    // Initialize edgeTo array
    this.edgeTo = Array(graph.getV()).fill(undefined);

    this.dfs(graph, s); // Start DFS from the source vertex
  }

  dfs(graph, v) {
    this.marked[v] = true;
    const adjV = graph.getAdj(v);
    adjV.forEach((w) => {
      if (!this.marked[w]) {
        this.dfs(graph, w);
        this.edgeTo[w] = v; // Update edgeTo for each vertex
      }
    });
  }

  hasPathTo(v) {
    return this.marked[v];
  }

  getPathTo(v) {
    if (!this.hasPathTo(v)) return;
    const path = [];
    for (let x = v; x !== this.s; x = this.edgeTo[x]) {
      path.push(x);
    }
    path.push(this.s);
    return path;
  }
}

module.exports = DepthFirstPaths;
