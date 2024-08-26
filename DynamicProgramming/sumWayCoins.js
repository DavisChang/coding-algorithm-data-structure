/**
 * solution(0) = 1
 * solution(m) = min solution(m-c)
 */

// coins = [1,4,5]
// m = 5
// const memo = {};
// function sumWayCoins(m, coins) {
//   if (memo[m]) {
//     return memo[m];
//   }

//   let answer = 0;

//   if (m === 0) {
//     return 1;
//   } else {
//     coins.forEach((coin) => {
//       let subproblem = m - coin;
//       if (subproblem >= 0) {
//         answer = answer + sumWayCoins(subproblem, coins);
//         memo[m] = answer;
//       }
//     });
//   }

//   return answer;
// }

function sumWayCoins(m, coins) {
  const memo = {};
  memo[0] = 1;

  for (let i = 1; i <= m; i++) {
    memo[i] = 0;

    coins.forEach((coin) => {
      let subproblem = i - coin;
      if (subproblem >= 0) {
        memo[i] = memo[i] + memo[subproblem];
      }
    });
  }

  return memo[m];
}

module.exports = sumWayCoins;
