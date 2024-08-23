function RunLengthEncode(input) {
  if (input.length === 0) return ""; // Handle empty input

  let encoded = ""; // This will hold the encoded string
  let count = 1; // Initialize count of characters
  let char = input[0]; // Start with the first character

  // Iterate over the string, starting from the second character
  for (let i = 1; i < input.length; i++) {
    if (input[i] === char) {
      count++; // Increment count if the same character continues
    } else {
      encoded += count + char; // Append the count and character to the encoded string
      char = input[i]; // Update the character
      count = 1; // Reset the count
    }
  }

  // Append the last set of character and count
  encoded += count + char;

  return encoded;
}

module.exports = RunLengthEncode;
