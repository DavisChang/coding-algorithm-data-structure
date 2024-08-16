function solution(A, B) {
  const N = A.length;
  const graph = Array.from({ length: N + 1 }, () => []);

  // Build the graph
  for (let i = 0; i < N; i++) {
    graph[A[i]].push(B[i]);
    graph[B[i]].push(A[i]);
  }

  console.log("graph:", graph);

  // DFS function to calculate fuel consumption
  function dfs(node, parent) {
    let people = 1; // Current node has 1 person
    let fuel = 0;

    for (let child of graph[node]) {
      if (child !== parent) {
        let [childPeople, childFuel] = dfs(child, node);
        people += childPeople;
        fuel += childFuel + Math.ceil(childPeople / 5);
      }
    }

    return [people, fuel];
  }

  // Start DFS from the office (node 0)
  return dfs(0, -1)[1];
}

A = [0, 1, 1];
B = [1, 2, 3];
A2 = [1, 1, 1, 9, 9, 9, 9, 7, 8];
B2 = [2, 0, 3, 1, 6, 5, 4, 0, 0];
console.log(solution(A, B));
console.log(solution(A2, B2));
