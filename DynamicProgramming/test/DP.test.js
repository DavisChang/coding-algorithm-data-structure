const fibonacci = require("../fib");
const minimumCoins = require("../minimumCoins");
const sumWayCoins = require("../sumWayCoins");

describe("Fibonacci Function (starting from 1)", () => {
  test("calculates fibonacci(1) correctly", () => {
    expect(fibonacci(1)).toBe(1);
  });
  test("calculates fibonacci(7) correctly", () => {
    expect(fibonacci(7)).toBe(13);
  });
  test("calculates fibonacci(50) correctly", () => {
    expect(fibonacci(50)).toBe(12586269025);
  });
});

describe("minimumCoins Function", () => {
  test("calculates minimumCoins m=3 correctly", () => {
    expect(minimumCoins(3, [1, 4, 5])).toBe(3);
  });
  test("calculates minimumCoins m=150 correctly", () => {
    expect(minimumCoins(150, [1, 4, 5])).toBe(30);
  });
});

describe("sumWayCoins Function", () => {
  test("calculates sumWayCoins m=5 correctly", () => {
    expect(sumWayCoins(5, [1, 4, 5])).toBe(4);
  });
  test("calculates sumWayCoins m=87 correctly", () => {
    expect(sumWayCoins(87, [1, 4, 5, 8])).toBe(3306149332861088);
  });
});
