/**
 * f(1) = 1
 * f(2) = 1
 * f(3) = f(2) + f(1) = 2
 * ...
 */

// const memo = {};
// function fibonacci(n) {
//   if (n in memo) {
//     return memo[n];
//   }

//   if (n <= 2) {
//     return 1;
//   }

//   // Memorization
//   memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
//   return memo[n];
// }

function fibonacci(n) {
  const memo = {};

  let result = 1;
  for (let i = 1; i <= n; i++) {
    if (i <= 2) {
      result = 1;
    } else {
      result = memo[i - 1] + memo[i - 2];
    }
    memo[i] = result;
  }

  return memo[n];
}

module.exports = fibonacci;
