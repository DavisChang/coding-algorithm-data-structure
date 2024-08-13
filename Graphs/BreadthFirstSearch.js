/**
 * BreadthFirstSearch
 * 1. Queue
 * 2. Fewest number of edges
 */

class BreadthFirstSearch {
  constructor(graph, s) {
    this.graph = graph;
    this.s = s;

    // Ensure marked array is initialized
    this.marked = Array(graph.getV()).fill(false);
    // Initialize edgeTo array
    this.edgeTo = Array(graph.getV()).fill(undefined);
    // Initialize distTo array
    this.distTo = Array(graph.getV()).fill(Infinity);

    this.bfs(this.s); // Start DFS from the source vertex
  }

  bfs(s) {
    const q = [];
    q.push(s);
    this.marked[s] = true;
    this.distTo[s] = 0;

    while (q.length !== 0) {
      const v = q.shift();
      const adj = this.graph.getAdj(v);
      adj.forEach((w) => {
        if (!this.marked[w]) {
          q.push(w);
          this.marked[w] = true;
          this.edgeTo[w] = v;
          this.distTo[w] = this.distTo[v] + 1;
        }
      });
    }
  }

  hasPathTo(v) {
    return this.marked[v];
  }

  pathTo(v) {
    if (!this.hasPathTo(v)) return null;
    const path = [];
    for (let x = v; x !== this.s; x = this.edgeTo[x]) {
      path.push(x);
    }
    path.push(this.s);
    return path.reverse();
  }
}

module.exports = BreadthFirstSearch;
