/*
 * BobbleSort
 *
 */

function exchange(array, index, minIndex) {
  const temp = array[index];
  array[index] = array[minIndex];
  array[minIndex] = temp;
}

function BobbleSort(list) {
  if (list.length === 0) return;

  for (let i = 0; i <= list.length - 1; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        exchange(list, j, j + 1);
      }
    }
  }
}

module.exports = BobbleSort;
