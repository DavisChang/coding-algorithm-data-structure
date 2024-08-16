class DirectedDFS {
  constructor(graph, s) {
    this.graph = graph;
    this.s = s;

    // init
    // Ensure marked array is initialized
    this.marked = Array(graph.getV()).fill(false);
    // Initialize edgeTo array
    this.edgeTo = Array(graph.getV()).fill(undefined);

    this.dfs(graph, s); // Start DirectedDFS from the source vertex
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

  visited(v) {
    return this.marked[v];
  }
}

module.exports = DirectedDFS;
