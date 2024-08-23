const RunLengthEncode = require("../RunLengthEncode"); // Adjust the path as necessary

describe("Run Length Encoding", () => {
  test("encodes a string with consecutive letters", () => {
    expect(RunLengthEncode("aaaabcccaa")).toBe("4a1b3c2a");
  });

  test("encodes a string with no consecutive letters", () => {
    expect(RunLengthEncode("abc")).toBe("1a1b1c");
  });

  test("returns an empty string when input is empty", () => {
    expect(RunLengthEncode("")).toBe("");
  });

  test("encodes a string with the same letter", () => {
    expect(RunLengthEncode("bbbb")).toBe("4b");
  });

  test("encodes a string with non-alphabetic characters", () => {
    expect(RunLengthEncode("1111###$$")).toBe("413#2$");
  });

  test("encodes a mixed string with letters and digits correctly", () => {
    expect(RunLengthEncode("aa22bb3")).toBe("2a222b13");
  });

  test("handles case sensitivity", () => {
    expect(RunLengthEncode("aaAA")).toBe("2a2A");
  });
});
