/*
 * KnuthShuffle
 * 1. iteration
 * 2. from 0 to i Random integer
 * 3. swap a[i], a[r]
 *
 * Proposition
 *
 */

function random(array, number) {
  return array[Math.floor(Math.random() * number)];
}

function exchange(array, index, minIndex) {
  const temp = array[index];
  array[index] = array[minIndex];
  array[minIndex] = temp;
}

function KnuthShuffle(list) {
  for (let i = 0; i < list.length; i++) {
    const r = random(list, i + 1);
    exchange(list, i, r);
  }
}

module.exports = KnuthShuffle;
