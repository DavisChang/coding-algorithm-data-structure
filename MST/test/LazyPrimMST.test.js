const LazyPrimMST = require("../LazyPrimMST"); // Replace with your file name
const EdgeWeightGraph = require("../EdgeWeightGraph");
const Edge = require("../Edge");

describe("LazyPrimMST", () => {
  let graph;

  beforeEach(() => {
    graph = new EdgeWeightGraph(8);
    graph.addEdge(new Edge(0, 1, 4));
    graph.addEdge(new Edge(0, 2, 3));
    graph.addEdge(new Edge(1, 2, 1));
    graph.addEdge(new Edge(1, 3, 2));
    graph.addEdge(new Edge(2, 3, 4));
    graph.addEdge(new Edge(3, 4, 2));
    graph.addEdge(new Edge(4, 5, 3));
    graph.addEdge(new Edge(5, 6, 2));
    graph.addEdge(new Edge(6, 7, 1));
  });

  test("should calculate the correct MST edges", () => {
    const mst = new LazyPrimMST(graph);
    const edges = mst.edges();

    const expectedEdges = [
      [1, 2, 1],
      [1, 3, 2],
      [3, 4, 2],
      [5, 6, 2],
      [6, 7, 1],
      [0, 2, 3],
      [4, 5, 3],
    ];

    const actualEdges = edges.map((edge) => [
      edge.either(),
      edge.other(edge.either()),
      edge.weight,
    ]);

    expect(actualEdges).toEqual(expect.arrayContaining(expectedEdges));
  });

  test("should calculate the correct MST weight", () => {
    const mst = new LazyPrimMST(graph);
    expect(mst.weight()).toBe(14); // Total weight of the MST
  });

  test("should return the correct number of edges in the MST", () => {
    const mst = new LazyPrimMST(graph);
    expect(mst.edges().length).toBe(7); // MST of 8 vertices should have 7 edges
  });
});
