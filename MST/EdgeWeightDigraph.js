/**
 * EdgeWeightDigraph
 * adjacency-lists
 *
 */

class EdgeWeightDigraph {
  constructor(v) {
    this.v = v;
    // bag object
    // reference to a directedEdge
    this.adj = this.adj = Array(v)
      .fill()
      .map(() => []);
    this.edge = this.adj = Array(v)
      .fill()
      .map(() => []);
    this.distTo = this.adj = Array(v)
      .fill()
      .map(() => []);
  }

  getAdj(v) {
    return this.adj[v];
  }

  // directedEdge
  addEdge(e) {
    const v = e.from();
    this.adj[v].push(e);
  }

  getEdges() {
    return this.adj;
  }

  getV() {
    return this.v;
  }
}

module.exports = EdgeWeightDigraph;
