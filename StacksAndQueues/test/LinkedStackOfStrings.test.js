const LinkedStackOfStrings = require("../LinkedStackOfStrings"); // Adjust the path if necessary

describe("Test LinkedStackOfStrings", () => {
  let stack;

  beforeEach(() => {
    stack = new LinkedStackOfStrings();
  });

  test("should be empty initially", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("should not be empty after push", () => {
    stack.push("hello");
    expect(stack.isEmpty()).toBe(false);
  });

  test("should return the last pushed item on pop", () => {
    stack.push("hello");
    stack.push("world");
    expect(stack.pop()).toBe("world");
    expect(stack.pop()).toBe("hello");
  });

  test("should be empty after popping all items", () => {
    stack.push("hello");
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test("should throw error when popping from an empty stack", () => {
    expect(() => stack.pop()).toThrow("Stack underflow");
  });

  test("should handle multiple pushes and pops correctly", () => {
    stack.push("a");
    stack.push("b");
    stack.push("c");
    expect(stack.pop()).toBe("c");
    expect(stack.pop()).toBe("b");
    expect(stack.pop()).toBe("a");
  });
});
