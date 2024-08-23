class Node {
  constructor(data, freq, left = null, right = null) {
    this.data = data;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

function buildHuffmanTree(data) {
  let freq = new Map();

  // count freq
  for (let char of data) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // tries sort weight (freq)
  // minPQ
  let nodes = Array.from(freq, ([data, freq]) => new Node(data, freq));
  nodes.sort((a, b) => a.freq - b.freq);

  while (nodes.length > 1) {
    // select two tries with min weight
    let left = nodes.shift();
    let right = nodes.shift();
    // merge into single trie with cumulative weight(freq)
    let merged = new Node(null, left.freq + right.freq, left, right);
    nodes.push(merged);
    nodes.sort((a, b) => a.freq - b.freq);
  }

  return nodes[0];
}

function generateCodes(node, prefix = "", codeMap = new Map()) {
  if (!node) return codeMap;
  if (node.data !== null) {
    codeMap.set(node.data, prefix);
  }
  generateCodes(node.left, prefix + "0", codeMap);
  generateCodes(node.right, prefix + "1", codeMap);
  return codeMap;
}

function compress(data) {
  let tree = buildHuffmanTree(data);
  let codes = generateCodes(tree);
  return data
    .split("")
    .map((char) => codes.get(char))
    .join("");
}

function decompress(encoded, tree) {
  let current = tree;
  let decoded = "";

  for (let bit of encoded) {
    current = bit === "0" ? current.left : current.right;
    if (current.data !== null) {
      decoded += current.data;
      current = tree;
    }
  }

  return decoded;
}

// const data = "this is an example for huffman encoding";
// const tree = buildHuffmanTree(data);
// const encoded = compress(data);
// const decoded = decompress(encoded, tree);

// console.log(`Encoded: ${encoded}`);
// console.log(`Decoded: ${decoded}`);

module.exports = { buildHuffmanTree, generateCodes, compress, decompress };
