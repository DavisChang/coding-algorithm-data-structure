/**
 * EdgeWeightGraph
 *
 * adjacency-lists
 */

class EdgeWeightGraph {
  constructor(v) {
    this.v = v;
    // bag [[],[],[],......]
    this.adj = Array(v)
      .fill()
      .map(() => []);
  }

  // Edge
  addEdge(e) {
    const v = e.either();
    const w = e.other(v);
    this.adj[v].push(e);
    this.adj[w].push(e);
  }

  getAdj(v) {
    return this.adj[v];
  }

  edges() {
    return this.adj.reduce((acc, curr) => [...acc, ...curr], []);
  }

  getV() {
    return this.v;
  }
}

module.exports = EdgeWeightGraph;
