/*
 * MergeSort
 * 1. Divide
 * 2. Sort
 * 3. Merge
 * 4. iterate
 *
 * Proposition
 *
 */

function merge(a, aux, lo, mid, hi) {
  aux = [...a];

  let i = lo;
  let j = mid + 1;

  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      a[k] = aux[j++];
    } else if (j > hi) {
      a[k] = aux[i++];
    } else if (aux[i] < aux[j]) {
      a[k] = aux[i++];
    } else {
      a[k] = aux[j++];
    }
  }
}

function sort(a, aux, lo, hi) {
  if (lo >= hi) return;
  const mid = Math.floor(lo + (hi - lo) / 2);
  sort(a, aux, lo, mid);
  sort(a, aux, mid + 1, hi);
  merge(a, aux, lo, mid, hi);
}

function MergeSort(list) {
  const aux = [...Array(list.length).keys()];
  sort(list, aux, 0, list.length - 1);
}

module.exports = MergeSort;
