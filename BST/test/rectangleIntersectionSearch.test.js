const {
  Rectangle,
  rectangleIntersectionSearch,
} = require("../rectangleIntersectionSearch");

describe("rectangleIntersectionSearch", () => {
  test("should find all intersecting rectangle pairs", () => {
    const rectangles = [
      new Rectangle(1, 1, 4, 4),
      new Rectangle(2, 2, 5, 5),
      new Rectangle(3, 0, 6, 3),
    ];

    const result = rectangleIntersectionSearch(rectangles);

    // There are three intersection pairs:
    // Between Rectangle(1, 1, 4, 4) and Rectangle(2, 2, 5, 5)
    // Between Rectangle(2, 2, 5, 5) and Rectangle(3, 0, 6, 3)
    // Between Rectangle(1, 1, 4, 4) and Rectangle(3, 0, 6, 3)
    expect(result.length).toBe(3);
  });

  test("should return an empty array when no rectangles intersect", () => {
    const rectangles = [
      new Rectangle(0, 0, 1, 1),
      new Rectangle(2, 2, 3, 3),
      new Rectangle(4, 4, 5, 5),
    ];

    const result = rectangleIntersectionSearch(rectangles);

    expect(result).toEqual([]);
  });

  test("should handle a single rectangle", () => {
    const rectangles = [new Rectangle(0, 0, 1, 1)];

    const result = rectangleIntersectionSearch(rectangles);

    expect(result).toEqual([]);
  });

  test("should handle empty input", () => {
    const rectangles = [];

    const result = rectangleIntersectionSearch(rectangles);

    expect(result).toEqual([]);
  });

  test("should handle rectangles that touch but do not intersect", () => {
    const rectangles = [new Rectangle(0, 0, 1, 1), new Rectangle(1, 0, 2, 1)];

    const result = rectangleIntersectionSearch(rectangles);

    expect(result).toEqual([]);
  });

  test("should find intersecting rectangles with negative coordinates", () => {
    const rectangles = [
      new Rectangle(-3, -3, 1, 1),
      new Rectangle(-1, -1, 3, 3),
    ];

    const result = rectangleIntersectionSearch(rectangles);

    expect(result.length).toBe(1);
  });
});
