/*
 * HeapSort
 * 1. Heap construction (bottom-up method)
 * 2. Sort down, repeatedly delete the largest remaining
 *
 *
 * @return unstable sorting method
 * Time Complexity: nLog(n)
 * Auxiliary Space: 1
 */

function exchange(array, index, minIndex) {
  const temp = array[index];
  array[index] = array[minIndex];
  array[minIndex] = temp;
}

function sink(list, k, N) {
  while (2 * k + 1 < N) {
    let j = 2 * k + 1; // left child
    if (j + 1 < N && list[j] < list[j + 1]) j++; // if right child exists and is greater, use it
    if (list[k] >= list[j]) break; // if parent is greater than or equal to the larger child, stop
    exchange(list, k, j);
    k = j;
  }
}

function HeapSort(list) {
  let N = list.length;

  // Convert array into a max-heap
  for (let k = Math.floor(N / 2) - 1; k >= 0; k--) {
    sink(list, k, N);
  }

  // Sort down, repeatedly delete the largest remaining
  while (N > 1) {
    exchange(list, 0, --N); // move current root to the end
    sink(list, 0, N); // restore heap property
  }
}

module.exports = HeapSort;
