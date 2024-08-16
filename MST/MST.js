const QuickUnionUF = require("../QuickUnion/QuickUnionUF");

/**
 * Minimum spanning tree
 *
 * worst case: Elog(E)
 */

class MST {
  constructor(graph) {
    this.graph = graph;
    this.mst = [];
  }

  kruskalMST(edgeWeightGraph) {
    // queue
    // put all edges into queue

    const allEdges = edgeWeightGraph.edges();
    // sort allEdges
    const pq = allEdges.sort((a, b) => a.compareTo(b));

    // union-find
    const uf = new QuickUnionUF(this.graph.getV());

    while (pq.length !== 0 && this.mst.length < this.graph.getV() - 1) {
      // get minEdge to MST
      const minEdge = pq.shift();
      const v = minEdge.either();
      const w = minEdge.other(v);

      // not create a cycle
      if (!uf.connected(v, w)) {
        // merge sets
        uf.union(v, w);
        // add edge to MST
        this.mst.push(minEdge);
      }
    }
  }

  // edges in MST
  edges() {
    return this.mst;
  }
}

/**
 * Test MST
 *
 * graph = new EdgeWeightGraph(in)
 * mst = new MST(graph)
 * for (let e in mst.edges()) console.log(e)
 *
 * get (v, w, weight)
 */

module.exports = MST;
