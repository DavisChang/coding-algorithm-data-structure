function BfSubstringSearch(pat, text) {
  const m = pat.length;
  const n = text.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    for (j = 0; j < m; j++) {
      if (text.charAt(i + j) !== pat.charAt(j)) {
        break;
      }
    }
    if (j === m) {
      return i; // If we completed the inner loop without a break, we found a match
    }
  }

  return -1; // Return -1 when no match is found, which is a standard convention
}

function BfSubstringSearch2(pat, text) {
  const n = text.length;
  const m = pat.length;
  let i = text.length;
  let j = pat.length;

  for (i = 0, j = 0; i < n && j < m; i++) {
    if (text.charAt(i) === pat.charAt(j)) {
      j++;
    } else {
      i -= j;
      j = 0;
    }

    if (j === m) {
      return i - (m - 1);
    }
  }

  return -1;
}

module.exports = { BfSubstringSearch, BfSubstringSearch2 };
