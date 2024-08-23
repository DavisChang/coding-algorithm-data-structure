const {
  BfSubstringSearch,
  BfSubstringSearch2,
} = require("../BfSubstringSearch"); // Adjust the path if necessary

describe("SubstringSearch", () => {
  const testCases = [
    {
      description: "finds a substring at the beginning",
      text: "hello world",
      pattern: "hello",
      expected: 0,
    },
    {
      description: "finds a substring in the middle",
      text: "hello world",
      pattern: "lo wo",
      expected: 3,
    },
    {
      description: "finds a substring at the end",
      text: "hello world",
      pattern: "world",
      expected: 6,
    },
    {
      description: "returns -1 when substring is not found",
      text: "hello world",
      pattern: "planet",
      expected: -1,
    },
    {
      description: "returns -1 when the pattern is longer than the text",
      text: "short",
      pattern: "longerthanthis",
      expected: -1,
    },
    {
      description: "handles an empty text",
      text: "",
      pattern: "non-empty",
      expected: -1,
    },
  ];

  function testSearchAlgorithm(searchFunc) {
    describe(`Testing ${searchFunc.name} Function`, () => {
      testCases.forEach(({ description, text, pattern, expected }) => {
        test(description, () => {
          expect(searchFunc(pattern, text)).toBe(expected);
        });
      });
    });
  }

  testSearchAlgorithm(BfSubstringSearch);
  testSearchAlgorithm(BfSubstringSearch2);
});
