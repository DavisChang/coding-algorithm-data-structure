const EdgeWeightGraph = require("../EdgeWeightGraph");
const MST = require("../MST");
const Edge = require("../Edge");

describe("MST - Kruskal's Algorithm", () => {
  test("should return the correct edges in the MST", () => {
    // Create an edge-weighted graph
    const graph = new EdgeWeightGraph(4);
    graph.addEdge(new Edge(0, 1, 1));
    graph.addEdge(new Edge(0, 2, 2));
    graph.addEdge(new Edge(0, 3, 3));
    graph.addEdge(new Edge(1, 3, 4));
    graph.addEdge(new Edge(2, 3, 5));

    // Run Kruskal's algorithm
    const mst = new MST(graph);
    mst.kruskalMST(graph);

    // Get the edges in the MST
    const edges = mst.edges();

    // Assert the correct edges are in the MST
    expect(edges.length).toBe(3);
    expect(edges).toContainEqual(new Edge(0, 1, 1));
    expect(edges).toContainEqual(new Edge(0, 2, 2));
    expect(edges).toContainEqual(new Edge(0, 3, 3));
  });
});
