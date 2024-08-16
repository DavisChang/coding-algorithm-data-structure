/**
 * For example, given the string S = CAGCCTA and arrays P, Q such that:
 * the function should return the values [2, 4, 1], as explained above.
 * @param {string} S
 * @param {number[]} P = [2, 5, 0]
 * @param {number[]} Q = [4, 5, 6]
 * @returns number[]
 */

function solution1(S, P, Q) {
  const N = S.length;
  const M = P.length;

  // Prefix sum arrays for each nucleotide type
  const countA = new Array(N + 1).fill(0);
  const countC = new Array(N + 1).fill(0);
  const countG = new Array(N + 1).fill(0);
  const countT = new Array(N + 1).fill(0);

  // Fill the prefix sum arrays
  for (let i = 0; i < N; i++) {
    countA[i + 1] = countA[i] + (S[i] === "A" ? 1 : 0);
    countC[i + 1] = countC[i] + (S[i] === "C" ? 1 : 0);
    countG[i + 1] = countG[i] + (S[i] === "G" ? 1 : 0);
    countT[i + 1] = countT[i] + (S[i] === "T" ? 1 : 0);
  }

  const results = new Array(M);

  // Process each query
  for (let k = 0; k < M; k++) {
    const start = P[k];
    const end = Q[k] + 1;

    if (countA[end] - countA[start] > 0) {
      results[k] = 1;
    } else if (countC[end] - countC[start] > 0) {
      results[k] = 2;
    } else if (countG[end] - countG[start] > 0) {
      results[k] = 3;
    } else {
      results[k] = 4;
    }
  }

  return results;
}

const S = "CAGCCTA";
const P = [2, 5, 0];
const Q = [4, 5, 6];
console.log(solution1(A));

/**
 *
 * @param {number[]} A
 * @returns 1
 */
function solution2(A) {
  let minAvg = Infinity;
  let minIndex = 0;

  for (let i = 0; i < A.length - 1; i++) {
    // For example, if we have a slice of length 4: (P, P+1, P+2, P+3),
    // then it can be split into two smaller slices: (P, P+1) and (P+2, P+3).
    // One of these smaller slices will have a smaller or equal average.

    // Check slice of length 2
    const avg2 = (A[i] + A[i + 1]) / 2;
    if (avg2 < minAvg) {
      minAvg = avg2;
      minIndex = i;
    }

    // Check slice of length 3 (if possible)
    if (i < A.length - 2) {
      const avg3 = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (avg3 < minAvg) {
        minAvg = avg3;
        minIndex = i;
      }
    }
  }

  return minIndex;
}

const A = [4, 2, 2, 5, 1, 5, 8];
console.log(solution2(A));
