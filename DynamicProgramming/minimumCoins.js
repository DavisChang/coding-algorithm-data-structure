/**
 * What's the minimum number of coins that form the sum
 *
 * Coins = [1, 4, 5]
 * Target sum = 13
 *
 * Ans: 3 (4, 4, 5)
 *
 * solution(0) = 0
 * solution(m) = min solution(m - c) + 1
 */

function min(a, b) {
  if (a === null) return b;
  if (b === null) return a;
  return Math.min(a, b);
}

const memo = [];
function minimumCoins(m, coins) {
  if (memo[m]) {
    return memo[m];
  }

  let answer = 0;

  if (m === 0) {
    return answer;
  } else {
    answer = null;

    coins.forEach((coin) => {
      const subproblem = m - coin;
      if (subproblem >= 0) {
        answer = min(answer, minimumCoins(subproblem, coins) + 1);
      }
    });
  }
  memo[m] = answer;
  return answer;
}

module.exports = minimumCoins;
