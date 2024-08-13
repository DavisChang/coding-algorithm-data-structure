/**
 * Adjacency-list graph
 *
 */

class AdjGraph {
  constructor(v) {
    this.v = v;
    this.adj = []; // bag

    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }

  getAdj(v) {
    return this.adj[v];
  }

  getV() {
    return this.v;
  }
}

module.exports = AdjGraph;
