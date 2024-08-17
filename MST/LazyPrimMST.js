/**
 * Minimum spanning tree (LazyPrimMST)
 * Prim's Algorithm
 * EdgeWeightGraph
 * MinPQ
 *
 * time: ElogE
 * space: E
 */

class MinPQ {
  constructor() {
    this.pq = [];
  }

  insert(edge) {
    this.pq.push(edge);
    this.pq.sort((a, b) => a.compareTo(b)); // Sort the edges based on weight
  }

  delMin() {
    return this.pq.shift(); // Remove and return the smallest edge
  }

  isEmpty() {
    return this.pq.length === 0;
  }
}

class LazyPrimMST {
  constructor(graph) {
    this.graph = graph;
    this.marked = Array(graph.getV()).fill(false);
    this.minPQ = new MinPQ();
    this.mst = [];
    this.totalWeight = 0;

    // Start Prim's algorithm from vertex 0
    this.visit(0);

    // Build the MST
    while (!this.minPQ.isEmpty() && this.mst.length < graph.getV() - 1) {
      const edge = this.minPQ.delMin();
      const v = edge.either();
      const w = edge.other(v);

      // Skip if both endpoints are already in the MST
      if (this.marked[v] && this.marked[w]) continue;

      // Add edge to MST
      this.mst.push(edge);
      this.totalWeight += edge.weight;

      // Add the new vertex to the MST
      if (!this.marked[v]) this.visit(v);
      if (!this.marked[w]) this.visit(w);
    }
  }

  visit(v) {
    this.marked[v] = true;
    for (const edge of this.graph.getAdj(v)) {
      if (!this.marked[edge.other(v)]) {
        this.minPQ.insert(edge);
      }
    }
  }

  // Get edges in the MST
  edges() {
    return this.mst;
  }

  // Get the total weight of the MST
  weight() {
    return this.totalWeight;
  }
}

module.exports = LazyPrimMST;
