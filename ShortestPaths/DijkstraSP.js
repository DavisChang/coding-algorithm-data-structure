/**
 * Single-source shortest paths
 *
 * Find shortest path form s to every other vertex
 *
 * Shortest-paths tree (SPT)
 *
 *
 */
const IndexMinPQ = require("../Queue/IndexMinPQ");

class DijkstraSP {
  constructor(graph, s) {
    this.graph = graph;
    this.s = s;
    this.distTo = new Array(graph.getV()).fill(Infinity);
    this.edgeTo = new Array(graph.getV()).fill(null);
    this.pq = new IndexMinPQ(graph.getV());

    // Distance to the source vertex is always 0
    this.distTo[s] = 0;
    this.pq.insert(s, 0);

    // Process the vertices in order of distance from the source
    while (!this.pq.isEmpty()) {
      const v = this.pq.delMin();
      for (const e of graph.getAdj(v)) {
        this.relax(e);
      }
    }
  }

  // Returns the distance from the source vertex to vertex v
  getDistTo(v) {
    return this.distTo[v];
  }

  // Returns the edges that form the shortest path to vertex v
  getEdgeTo(v) {
    const path = [];
    for (let e = this.edgeTo[v]; e !== null; e = this.edgeTo[e.from()]) {
      path.unshift(e); // Insert at the beginning to maintain order
    }
    return path;
  }

  // Relax edge e and update the priority queue if the distance improves
  // directedEdge
  relax(e) {
    const v = e.from();
    const w = e.to();
    if (this.distTo[w] > this.distTo[v] + e.getWeight()) {
      this.distTo[w] = this.distTo[v] + e.getWeight();
      this.edgeTo[w] = e;

      if (this.pq.contains(w)) {
        this.pq.decreaseKey(w, this.distTo[w]);
      } else {
        this.pq.insert(w, this.distTo[w]);
      }
    }
  }
}

module.exports = DijkstraSP;
