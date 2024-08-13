const AdjGraph = require("../AdjGraph");
const BreadthFirstSearch = require("../BreadthFirstSearch");

describe("Graph and BFS Tests", () => {
  let graph;

  beforeEach(() => {
    graph = new AdjGraph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
  });

  test("Graph adjacency list should be correct", () => {
    expect(graph.getAdj(0)).toEqual([1, 2]);
    expect(graph.getAdj(3)).toEqual([1, 2, 4]);
  });

  test("BFS should mark all vertices connected to source", () => {
    const bfs = new BreadthFirstSearch(graph, 0);
    expect(bfs.hasPathTo(5)).toBe(true);
    expect(bfs.hasPathTo(4)).toBe(true);
    expect(bfs.hasPathTo(3)).toBe(true);
    expect(bfs.hasPathTo(2)).toBe(true);
    expect(bfs.hasPathTo(1)).toBe(true);
    expect(bfs.hasPathTo(0)).toBe(true);
  });

  test("BFS should return correct path", () => {
    const bfs = new BreadthFirstSearch(graph, 0);
    expect(bfs.pathTo(5)).toEqual([0, 1, 3, 4, 5]);
  });

  test("BFS should return null for unreachable vertex", () => {
    const disconnectedGraph = new AdjGraph(6);
    disconnectedGraph.addEdge(0, 1);
    disconnectedGraph.addEdge(2, 3);

    const bfs = new BreadthFirstSearch(disconnectedGraph, 0);
    expect(bfs.hasPathTo(2)).toBe(false);
    expect(bfs.pathTo(2)).toBe(null);
  });
});
