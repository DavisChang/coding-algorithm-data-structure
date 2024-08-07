/*
 * KnuthShuffle
 * 1. iteration
 * 2. from 0 to i Random integer
 * 3. swap a[i], a[r]
 *
 * Proposition
 *
 */

function randomIndex(number) {
  return Math.floor(Math.random() * number);
}

function exchange(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function KnuthShuffle(list) {
  for (let i = 0; i < list.length; i++) {
    const r = randomIndex(i + 1);
    exchange(list, i, r);
  }
}

module.exports = KnuthShuffle;
