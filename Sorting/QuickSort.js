/*
 * QuickSort
 * 1. shuffle
 * 2. sort
 * 3. partition
 * 3. recursive sort
 *
 * Proposition
 *
 */
function less(a, b) {
  return a < b ?? true;
}

function exchange(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function partition(a, lo, hi) {
  // partition
  let i = lo;
  let j = hi + 1;

  while (true) {
    while (less(a[++i], a[lo])) {
      if (i === hi) break;
    }
    while (less(a[lo], a[--j])) {
      if (j === lo) break;
    }

    if (i >= j) break;
    exchange(a, i, j);
  }

  exchange(a, lo, j);
  return j;
}

function sort(a, lo, hi) {
  // recursive sort
  if (hi <= lo) return;
  const j = partition(a, lo, hi);
  sort(a, lo, j - 1);
  sort(a, j + 1, hi);
}

function QuickSort(list) {
  // shuffle
  // sort
  sort(list, 0, list.length - 1);
}

module.exports = QuickSort;
