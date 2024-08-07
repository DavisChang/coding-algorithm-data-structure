const QuickUnionUF = require("../QuickUnionUF"); // Adjust the path if necessary

test("initial state", () => {
  const uf = new QuickUnionUF(5);
  expect(uf.list).toEqual([0, 1, 2, 3, 4]);
});

test("connected method", () => {
  const uf = new QuickUnionUF(5);
  expect(uf.connected(0, 1)).toBe(false);
  uf.union(0, 1);
  expect(uf.connected(0, 1)).toBe(true);
});

test("complex union and connected operations", () => {
  const uf = new QuickUnionUF(10);
  uf.union(4, 3);
  uf.union(3, 8);
  uf.union(6, 5);
  uf.union(9, 4);
  uf.union(2, 1);
  expect(uf.connected(8, 9)).toBe(true);
  expect(uf.connected(5, 0)).toBe(false);
  uf.union(5, 0);
  uf.union(7, 2);
  uf.union(6, 1);
  expect(uf.connected(0, 7)).toBe(true);
});
