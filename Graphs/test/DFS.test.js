const AdjGraph = require("../AdjGraph");
const DepthFirstPaths = require("../DepthFirstPaths");
describe("Graph and DepthFirstPaths", () => {
  let graph;
  let dfs;

  beforeEach(() => {
    graph = new AdjGraph(13);
    // Add edges
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(0, 6);
    graph.addEdge(0, 5);
    graph.addEdge(6, 4);
    graph.addEdge(4, 3);
    graph.addEdge(4, 5);
    graph.addEdge(3, 5);
    graph.addEdge(7, 8);
    graph.addEdge(9, 10);
    graph.addEdge(9, 12);
    graph.addEdge(9, 11);
    graph.addEdge(11, 12);

    // Initialize DepthFirstPaths with the graph and start vertex 0
    dfs = new DepthFirstPaths(graph, 0);
  });

  test("Graph should have correct number of vertices", () => {
    expect(graph.getV()).toBe(13);
  });

  test("Graph should have correct adjacency lists", () => {
    expect(graph.getAdj(0)).toEqual([1, 2, 6, 5]);
    expect(graph.getAdj(1)).toEqual([0]);
  });

  test("DepthFirstPaths should mark vertices correctly", () => {
    expect(dfs.marked).toEqual([
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  });

  test("DepthFirstPaths should have correct edgeTo values", () => {
    expect(dfs.edgeTo[1]).toBe(0);
    expect(dfs.edgeTo[2]).toBe(0);
    expect(dfs.edgeTo[3]).toBe(4);
  });

  test("should return undefined if no path exists", () => {
    const isolatedGraph = new AdjGraph(5);
    isolatedGraph.addEdge(0, 1);
    isolatedGraph.addEdge(2, 3);

    const dfsIsolated = new DepthFirstPaths(isolatedGraph, 0);
    expect(dfsIsolated.getPathTo(3)).toBeUndefined();
  });

  test("should return correct path to a connected vertex", () => {
    expect(dfs.getPathTo(5)).toEqual([5, 3, 4, 6, 0]);
  });
});
