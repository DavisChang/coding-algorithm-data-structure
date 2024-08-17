const MaxPQ = require("../MaxPQ"); // Assuming the class is in MaxPQ.js

describe("MaxPQ", () => {
  it("should insert and return maximum element correctly", () => {
    const pq = new MaxPQ(10);
    pq.insert(5);
    pq.insert(2);
    pq.insert(9);
    pq.insert(3);

    expect(pq.delMax()).toBe(9);
    expect(pq.delMax()).toBe(5);
    expect(pq.delMax()).toBe(3);
    expect(pq.delMax()).toBe(2);
  });

  it("should be empty after all elements are removed", () => {
    const pq = new MaxPQ(10);
    pq.insert(5);
    pq.delMax();

    expect(pq.isEmpty()).toBe(true);
  });

  it("should handle duplicate elements correctly", () => {
    const pq = new MaxPQ(10);
    pq.insert(7);
    pq.insert(7);

    expect(pq.delMax()).toBe(7);
    expect(pq.delMax()).toBe(7);
  });
});
