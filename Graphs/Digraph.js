/**
 * Adjacency-list digraph
 *
 */

class Digraph {
  constructor(v) {
    this.v = v;
    this.adj = []; // bag

    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    // directed
    this.adj[v].push(w);
  }

  getAdj(v) {
    return this.adj[v];
  }

  getV() {
    return this.v;
  }
}

module.exports = Digraph;
