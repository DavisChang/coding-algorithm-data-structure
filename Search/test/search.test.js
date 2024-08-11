const BinarySearch = require("../BinarySearch");
// const LinearSearch  = require("../LinearSearch"); // Assuming you have a LinearSearch function

describe("Search Methods", () => {
  const searchTests = [
    {
      name: "BinarySearch",
      searchFunc: BinarySearch,
    },
    // {
    //   name: "LinearSearch",
    //   searchFunc: LinearSearch,
    // },
  ];

  searchTests.forEach(({ name, searchFunc }) => {
    describe(`${name}`, () => {
      test("should return the correct index when the element is found", () => {
        const list = [1, 3, 5, 7, 9, 11];
        const key = 7;
        const result = searchFunc(list, key);
        expect(result).toBe(3); // 7 is at index 3
      });

      test("should return -1 when the element is not found", () => {
        const list = [1, 3, 5, 7, 9, 11];
        const key = 8;
        const result = searchFunc(list, key);
        expect(result).toBe(-1); // 8 is not in the list
      });

      test("should return the index when searching for the first element", () => {
        const list = [1, 3, 5, 7, 9, 11];
        const key = 1;
        const result = searchFunc(list, key);
        expect(result).toBe(0); // 1 is at index 0
      });

      test("should return the index when searching for the last element", () => {
        const list = [1, 3, 5, 7, 9, 11];
        const key = 11;
        const result = searchFunc(list, key);
        expect(result).toBe(5); // 11 is at index 5
      });

      test("should return -1 for an empty array", () => {
        const list = [];
        const key = 1;
        const result = searchFunc(list, key);
        expect(result).toBe(-1); // empty list should return -1
      });

      test("should handle negative numbers correctly", () => {
        const list = [-10, -5, 0, 5, 10];
        const key = -5;
        const result = searchFunc(list, key);
        expect(result).toBe(1); // -5 is at index 1
      });

      test("should return the correct index when the list has one element", () => {
        const list = [7];
        const key = 7;
        const result = searchFunc(list, key);
        expect(result).toBe(0); // 7 is at index 0
      });

      test("should return -1 when searching for an element not in a single-element list", () => {
        const list = [7];
        const key = 3;
        const result = searchFunc(list, key);
        expect(result).toBe(-1); // 3 is not in the list
      });
    });
  });
});
