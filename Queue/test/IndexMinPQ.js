const IndexMinPQ = require("..IndexMinPQ/IndexMinPQ"); // Adjust the path to where your IndexMinPQ file is located

describe("IndexMinPQ", () => {
  let pq;

  beforeEach(() => {
    pq = new IndexMinPQ(10); // Create a new priority queue with a max size of 10
  });

  test("insert and retrieve the minimum index", () => {
    pq.insert(3, 5);
    pq.insert(1, 2);
    pq.insert(2, 7);

    expect(pq.delMin()).toBe(1); // Index 1 has the smallest key (2)
    expect(pq.delMin()).toBe(3); // Index 3 has the next smallest key (5)
    expect(pq.delMin()).toBe(2); // Index 2 has the largest key (7)
  });

  test("decrease key and maintain heap order", () => {
    pq.insert(4, 10);
    pq.insert(5, 20);
    pq.insert(6, 15);

    pq.decreaseKey(5, 8); // Decrease key for index 5 to 8

    expect(pq.delMin()).toBe(5); // Index 5 now has the smallest key (8)
    expect(pq.delMin()).toBe(4); // Index 4 has the next smallest key (10)
  });

  test("isEmpty works correctly", () => {
    expect(pq.isEmpty()).toBe(true); // Priority queue should start empty

    pq.insert(3, 5);
    expect(pq.isEmpty()).toBe(false); // After insertion, it should not be empty

    pq.delMin();
    expect(pq.isEmpty()).toBe(true); // After removing the only element, it should be empty again
  });

  test("inserting the same index should throw an error", () => {
    pq.insert(2, 4);
    expect(() => pq.insert(2, 7)).toThrow(
      "Index is already in the priority queue"
    );
  });

  test("decreasing key to a higher value should throw an error", () => {
    pq.insert(2, 4);
    expect(() => pq.decreaseKey(2, 5)).toThrow(
      "New key is not smaller than the current key"
    );
  });

  test("contains method works correctly", () => {
    pq.insert(1, 10);
    expect(pq.contains(1)).toBe(true); // Index 1 should be in the priority queue
    expect(pq.contains(2)).toBe(false); // Index 2 should not be in the priority queue

    pq.delMin();
    expect(pq.contains(1)).toBe(false); // After removing, index 1 should no longer be in the queue
  });

  test("delMin removes the correct minimum index", () => {
    pq.insert(1, 10);
    pq.insert(2, 5);
    pq.insert(3, 8);

    expect(pq.delMin()).toBe(2); // Index 2 has the smallest key (5)
    expect(pq.delMin()).toBe(3); // Index 3 has the next smallest key (8)
    expect(pq.delMin()).toBe(1); // Index 1 has the largest key (10)
  });
});
