const {
  buildHuffmanTree,
  generateCodes,
  compress,
  decompress,
} = require("../HuffmanCompression"); // Adjust path as necessary

describe("Huffman Encoding and Decoding", () => {
  const data = "this is an example for huffman encoding";
  let tree;
  let codes;
  let encoded;
  let decoded;

  beforeAll(() => {
    tree = buildHuffmanTree(data);
    codes = generateCodes(tree);
    encoded = compress(data);
    decoded = decompress(encoded, tree);
  });

  test("builds correct Huffman tree", () => {
    expect(tree).not.toBeNull();
    expect(tree.freq).toBe(data.length);
  });

  test("generates valid Huffman codes", () => {
    expect(codes.size).toBeGreaterThan(0);
    data.split("").forEach((char) => {
      expect(codes.get(char)).toBeDefined();
      expect(typeof codes.get(char)).toBe("string");
    });
  });

  test("compresses data correctly", () => {
    expect(encoded).toBeDefined();
    expect(typeof encoded).toBe("string");
  });

  test("decompresses data correctly", () => {
    expect(decoded).toBe(data);
  });

  test("decompression recovers the original data", () => {
    expect(decompress(encoded, tree)).toBe(data);
  });

  test("compression reduces the size of the original data for non-trivial cases", () => {
    // This assumes the original data has enough repetition to benefit from compression
    if (data.length > 10) {
      // Adjust according to expected use case
      expect(encoded.length).toBeLessThan(data.length * 8); // Assuming original data is ASCII
    }
  });
});
