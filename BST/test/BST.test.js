const BinarySearchTree = require("../BST");

describe("BinarySearchTree", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test("should insert and retrieve values correctly", () => {
    bst.put(5, "five");
    bst.put(3, "three");
    bst.put(7, "seven");

    expect(bst.get(5)).toBe("five");
    expect(bst.get(3)).toBe("three");
    expect(bst.get(7)).toBe("seven");
  });

  test("should return null for keys that do not exist", () => {
    bst.put(5, "five");
    expect(bst.get(10)).toBeNull();
  });

  test("should update the value of an existing key", () => {
    bst.put(5, "five");
    bst.put(5, "new five");
    expect(bst.get(5)).toBe("new five");
  });

  test("should return the correct size of the tree", () => {
    expect(bst.size()).toBe(0);
    bst.put(5, "five");
    expect(bst.size()).toBe(1);
    bst.put(3, "three");
    expect(bst.size()).toBe(2);
    bst.put(7, "seven");
    expect(bst.size()).toBe(3);
  });

  test("should return the correct rank for a given key", () => {
    bst.put(5, "five");
    bst.put(3, "three");
    bst.put(7, "seven");
    bst.put(2, "two");
    bst.put(4, "four");

    expect(bst.rank(2)).toBe(0);
    expect(bst.rank(3)).toBe(1);
    expect(bst.rank(4)).toBe(2);
    expect(bst.rank(5)).toBe(3);
    expect(bst.rank(7)).toBe(4);
  });

  test("should return a sorted array of keys", () => {
    bst.put(5, "five");
    bst.put(3, "three");
    bst.put(7, "seven");
    bst.put(2, "two");
    bst.put(4, "four");

    expect(bst.iterable()).toEqual([2, 3, 4, 5, 7]);
  });

  test("should handle duplicate keys correctly", () => {
    bst.put(5, "five");
    bst.put(3, "three");
    bst.put(7, "seven");
    bst.put(3, "new three");

    expect(bst.get(3)).toBe("new three");
    expect(bst.size()).toBe(3);
  });

  test("should handle negative keys correctly", () => {
    bst.put(-5, "minus five");
    bst.put(0, "zero");
    bst.put(5, "five");

    expect(bst.get(-5)).toBe("minus five");
    expect(bst.get(0)).toBe("zero");
    expect(bst.get(5)).toBe("five");
    expect(bst.rank(0)).toBe(1);
    expect(bst.rank(-5)).toBe(0);
  });

  test("should return an empty array for an empty tree", () => {
    expect(bst.iterable()).toEqual([]);
  });

  test("should delete a leaf node", () => {
    bst.put(5, "value5");
    bst.put(3, "value3");
    bst.put(7, "value7");
    bst.delete(3);

    expect(bst.get(3)).toBe(null);
    expect(bst.iterable()).toEqual([5, 7]);
  });

  test("should delete a node with one child", () => {
    bst.put(5, "value5");
    bst.put(3, "value3");
    bst.put(2, "value2"); // Node with one child
    bst.put(7, "value7");
    bst.delete(3);

    expect(bst.get(3)).toBe(null);
    expect(bst.iterable()).toEqual([2, 5, 7]);
  });

  test("should delete a node with two children", () => {
    bst.put(5, "value5");
    bst.put(3, "value3");
    bst.put(4, "value4");
    bst.put(7, "value7");
    bst.put(6, "value6");
    bst.put(8, "value8");
    bst.delete(7);

    expect(bst.get(7)).toBe(null);
    expect(bst.iterable()).toEqual([3, 4, 5, 6, 8]);
  });

  test("should delete the root node", () => {
    bst.put(5, "value5");
    bst.put(3, "value3");
    bst.put(7, "value7");
    bst.delete(5);

    expect(bst.get(5)).toBe(null);
    expect(bst.iterable()).toEqual([3, 7]);
  });

  test("should handle deleting from an empty tree", () => {
    bst.delete(1);
    expect(bst.size()).toBe(0);
  });

  test("should handle deleting a non-existing key", () => {
    bst.put(5, "value5");
    bst.delete(10);

    expect(bst.get(5)).toBe("value5");
    expect(bst.iterable()).toEqual([5]);
  });
});
