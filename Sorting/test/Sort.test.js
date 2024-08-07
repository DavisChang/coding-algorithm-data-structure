// Sort.test.js
const BubbleSort = require("../BubbleSort");
const SelectionSort = require("../SelectionSort");
const InsertionSort = require("../InsertionSort");
const MergeSort = require("../MergeSort");
const KnuthShuffle = require("../KnuthShuffle"); // Adjust the path as necessary
const QuickSort = require("../QuickSort");
const HeapSort = require("../HeapSort");

describe("Sorting Algorithms", () => {
  const testCases = [
    {
      description: "should sort an array of integers in ascending order",
      input: [64, 25, 12, 22, 11],
      expected: [11, 12, 22, 25, 64],
    },
    {
      description:
        "should sort an array of negative integers in ascending order",
      input: [-3, -1, -4, -2, -5],
      expected: [-5, -4, -3, -2, -1],
    },
    {
      description:
        "should sort an array with mixed positive and negative integers in ascending order",
      input: [3, -2, 5, -1, 0],
      expected: [-2, -1, 0, 3, 5],
    },
    {
      description:
        "should sort an array with duplicate values in ascending order",
      input: [3, 3, 2, 1, 2],
      expected: [1, 2, 2, 3, 3],
    },
    {
      description: "should sort an already sorted array",
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      description: "should handle an empty array",
      input: [],
      expected: [],
    },
    {
      description: "should handle an array with one element",
      input: [1],
      expected: [1],
    },
  ];

  const runTests = (sortingFunc, sortingName) => {
    testCases.forEach(({ description, input, expected }) => {
      describe(sortingName, () => {
        test(description, () => {
          const list = [...input];
          sortingFunc(list);
          expect(list).toEqual(expected);
        });
      });
    });
  };

  runTests(BubbleSort, "BubbleSort");
  runTests(SelectionSort, "SelectionSort");
  runTests(InsertionSort, "InsertionSort");
  runTests(MergeSort, "MergeSort");
  runTests(QuickSort, "QuickSort");
  runTests(HeapSort, "HeapSort");
});

describe("Knuth Shuffle", () => {
  test("should shuffle an array of integers", () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    KnuthShuffle(array);

    expect(array).toHaveLength(originalArray.length);
    expect(new Set(array)).toEqual(new Set(originalArray));
    expect(array).not.toEqual(originalArray);
  });

  test("should handle an empty array", () => {
    const array = [];
    KnuthShuffle(array);

    expect(array).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const array = [1];
    KnuthShuffle(array);

    expect(array).toEqual([1]);
  });

  test("should handle an array with duplicate values", () => {
    const array = [1, 2, 2, 3, 3, 3];
    const originalArray = [...array];
    KnuthShuffle(array);

    expect(array).toHaveLength(originalArray.length);
    expect(new Set(array)).toEqual(new Set(originalArray));
  });

  test("should produce different permutations on different runs", () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    KnuthShuffle(array);
    KnuthShuffle(originalArray);

    // It's possible for the shuffle to produce the same order, but highly unlikely.
    // This test might fail occasionally due to randomness, but that's expected behavior.
    expect(array).not.toEqual(originalArray);
  });
});
