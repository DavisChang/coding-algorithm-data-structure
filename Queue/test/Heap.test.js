const Heap = require("../Heap"); // Adjust this path based on your file structure

describe("Heap Sort", () => {
  test("should sort the array correctly", () => {
    const heap = new Heap([3, 1, 5, 2, 4]);
    heap.sort();
    expect(heap.getSortedArray()).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle already sorted arrays", () => {
    const heap = new Heap([1, 2, 3, 4, 5]);
    heap.sort();
    expect(heap.getSortedArray()).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle arrays sorted in descending order", () => {
    const heap = new Heap([5, 4, 3, 2, 1]);
    heap.sort();
    expect(heap.getSortedArray()).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an empty array", () => {
    const heap = new Heap([]);
    heap.sort();
    expect(heap.getSortedArray()).toEqual([]);
  });

  test("should handle an array with duplicates", () => {
    const heap = new Heap([4, 4, 1, 3, 2, 2]);
    heap.sort();
    expect(heap.getSortedArray()).toEqual([1, 2, 2, 3, 4, 4]);
  });
});
