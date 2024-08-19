const DijkstraSP = require("../DijkstraSP");
const EdgeWeightDigraph = require("../../MST/EdgeWeightDigraph");
const DirectedEdge = require("../../MST/DirectedEdge");

describe("DijkstraSP", () => {
  it("should calculate the shortest path from the source vertex to other vertices", () => {
    // Initialize the graph with 5 vertices
    const graph = new EdgeWeightDigraph(5);

    // Add directed edges to the graph
    graph.addEdge(new DirectedEdge(0, 1, 2));
    graph.addEdge(new DirectedEdge(0, 2, 4));
    graph.addEdge(new DirectedEdge(1, 2, 1));
    graph.addEdge(new DirectedEdge(1, 3, 7));
    graph.addEdge(new DirectedEdge(2, 3, 3));
    graph.addEdge(new DirectedEdge(3, 4, 1));

    // Initialize DijkstraSP with source vertex 0
    const dijkstra = new DijkstraSP(graph, 0);

    // Test distances from source vertex (0)
    expect(dijkstra.getDistTo(0)).toBe(0);
    expect(dijkstra.getDistTo(1)).toBe(2);
    expect(dijkstra.getDistTo(2)).toBe(3); // 0 -> 1 -> 2
    expect(dijkstra.getDistTo(3)).toBe(6); // 0 -> 1 -> 2 -> 3
    expect(dijkstra.getDistTo(4)).toBe(7); // 0 -> 1 -> 2 -> 3 -> 4

    // Test the edges in the shortest path to vertex 3
    const pathTo3 = dijkstra.getEdgeTo(3);
    expect(pathTo3.length).toBe(3); // Three edges: 0 -> 1 -> 2 -> 3
    expect(pathTo3[0].from()).toBe(0);
    expect(pathTo3[0].to()).toBe(1);
    expect(pathTo3[1].from()).toBe(1);
    expect(pathTo3[1].to()).toBe(2);
    expect(pathTo3[2].from()).toBe(2);
    expect(pathTo3[2].to()).toBe(3);

    // Test the edges in the shortest path to vertex 4
    const pathTo4 = dijkstra.getEdgeTo(4);
    expect(pathTo4.length).toBe(4); // Four edges: 0 -> 1 -> 2 -> 3 -> 4
    expect(pathTo4[0].from()).toBe(0);
    expect(pathTo4[0].to()).toBe(1);
    expect(pathTo4[1].from()).toBe(1);
    expect(pathTo4[1].to()).toBe(2);
    expect(pathTo4[2].from()).toBe(2);
    expect(pathTo4[2].to()).toBe(3);
    expect(pathTo4[3].from()).toBe(3);
    expect(pathTo4[3].to()).toBe(4);
  });
});
