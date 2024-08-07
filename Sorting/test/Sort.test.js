// Sort.test.js
const BubbleSort = require("../BubbleSort");
const SelectionSort = require("../SelectionSort");
const InsertionSort = require("../InsertionSort");
const MergeSort = require("../MergeSort");
const QuickSort = require("../QuickSort");

describe("BubbleSort", () => {
  test("should sort an array of integers in ascending order", () => {
    const list = [64, 25, 12, 22, 11];
    BubbleSort(list);
    expect(list).toEqual([11, 12, 22, 25, 64]);
  });

  test("should sort an array of negative integers in ascending order", () => {
    const list = [-3, -1, -4, -2, -5];
    BubbleSort(list);
    expect(list).toEqual([-5, -4, -3, -2, -1]);
  });

  test("should sort an array with mixed positive and negative integers in ascending order", () => {
    const list = [3, -2, 5, -1, 0];
    BubbleSort(list);
    expect(list).toEqual([-2, -1, 0, 3, 5]);
  });

  test("should sort an array with duplicate values in ascending order", () => {
    const list = [3, 3, 2, 1, 2];
    BubbleSort(list);
    expect(list).toEqual([1, 2, 2, 3, 3]);
  });

  test("should sort an already sorted array", () => {
    const list = [1, 2, 3, 4, 5];
    BubbleSort(list);
    expect(list).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an empty array", () => {
    const list = [];
    BubbleSort(list);
    expect(list).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const list = [1];
    BubbleSort(list);
    expect(list).toEqual([1]);
  });
});

describe("SelectionSort", () => {
  test("should sort an array of integers in ascending order", () => {
    const list = [64, 25, 12, 22, 11];
    SelectionSort(list);
    expect(list).toEqual([11, 12, 22, 25, 64]);
  });

  test("should sort an array of negative integers in ascending order", () => {
    const list = [-3, -1, -4, -2, -5];
    SelectionSort(list);
    expect(list).toEqual([-5, -4, -3, -2, -1]);
  });

  test("should sort an array with mixed positive and negative integers in ascending order", () => {
    const list = [3, -2, 5, -1, 0];
    SelectionSort(list);
    expect(list).toEqual([-2, -1, 0, 3, 5]);
  });

  test("should sort an array with duplicate values in ascending order", () => {
    const list = [3, 3, 2, 1, 2];
    SelectionSort(list);
    expect(list).toEqual([1, 2, 2, 3, 3]);
  });

  test("should sort an already sorted array", () => {
    const list = [1, 2, 3, 4, 5];
    SelectionSort(list);
    expect(list).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an empty array", () => {
    const list = [];
    SelectionSort(list);
    expect(list).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const list = [1];
    SelectionSort(list);
    expect(list).toEqual([1]);
  });
});

describe("InsertionSort", () => {
  test("should sort an array of integers in ascending order", () => {
    const list = [64, 25, 12, 22, 11];
    InsertionSort(list);
    expect(list).toEqual([11, 12, 22, 25, 64]);
  });

  test("should sort an array of negative integers in ascending order", () => {
    const list = [-3, -1, -4, -2, -5];
    InsertionSort(list);
    expect(list).toEqual([-5, -4, -3, -2, -1]);
  });

  test("should sort an array with mixed positive and negative integers in ascending order", () => {
    const list = [3, -2, 5, -1, 0];
    InsertionSort(list);
    expect(list).toEqual([-2, -1, 0, 3, 5]);
  });

  test("should sort an array with duplicate values in ascending order", () => {
    const list = [3, 3, 2, 1, 2];
    InsertionSort(list);
    expect(list).toEqual([1, 2, 2, 3, 3]);
  });

  test("should sort an already sorted array", () => {
    const list = [1, 2, 3, 4, 5];
    InsertionSort(list);
    expect(list).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an empty array", () => {
    const list = [];
    InsertionSort(list);
    expect(list).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const list = [1];
    InsertionSort(list);
    expect(list).toEqual([1]);
  });
});

describe("MergeSort", () => {
  test("should sort an array of integers in ascending order", () => {
    const list = [64, 25, 12, 22, 11];
    MergeSort(list);
    expect(list).toEqual([11, 12, 22, 25, 64]);
  });

  test("should sort an array of negative integers in ascending order", () => {
    const list = [-3, -1, -4, -2, -5];
    MergeSort(list);
    expect(list).toEqual([-5, -4, -3, -2, -1]);
  });

  test("should sort an array with mixed positive and negative integers in ascending order", () => {
    const list = [3, -2, 5, -1, 0];
    MergeSort(list);
    expect(list).toEqual([-2, -1, 0, 3, 5]);
  });

  test("should sort an array with duplicate values in ascending order", () => {
    const list = [3, 3, 2, 1, 2];
    MergeSort(list);
    expect(list).toEqual([1, 2, 2, 3, 3]);
  });

  test("should sort an already sorted array", () => {
    const list = [1, 2, 3, 4, 5];
    MergeSort(list);
    expect(list).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an empty array", () => {
    const list = [];
    MergeSort(list);
    expect(list).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const list = [1];
    MergeSort(list);
    expect(list).toEqual([1]);
  });
});

describe("QuickSort", () => {
  test("should sort an array of integers in ascending order", () => {
    const list = [64, 25, 12, 22, 11];
    QuickSort(list);
    expect(list).toEqual([11, 12, 22, 25, 64]);
  });

  test("should sort an array of negative integers in ascending order", () => {
    const list = [-3, -1, -4, -2, -5];
    QuickSort(list);
    expect(list).toEqual([-5, -4, -3, -2, -1]);
  });

  test("should sort an array with mixed positive and negative integers in ascending order", () => {
    const list = [3, -2, 5, -1, 0];
    QuickSort(list);
    expect(list).toEqual([-2, -1, 0, 3, 5]);
  });

  test("should sort an array with duplicate values in ascending order", () => {
    const list = [3, 3, 2, 1, 2];
    QuickSort(list);
    expect(list).toEqual([1, 2, 2, 3, 3]);
  });

  test("should sort an already sorted array", () => {
    const list = [1, 2, 3, 4, 5];
    QuickSort(list);
    expect(list).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an empty array", () => {
    const list = [];
    QuickSort(list);
    expect(list).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const list = [1];
    QuickSort(list);
    expect(list).toEqual([1]);
  });
});
