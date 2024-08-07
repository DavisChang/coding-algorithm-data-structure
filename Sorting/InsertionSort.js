/*
 * InsertionSort
 * 1. iteration
 * 2. compare before
 * Proposition
 *
 */

function exchange(array, index, minIndex) {
  const temp = array[index];
  array[index] = array[minIndex];
  array[minIndex] = temp;
}

function InsertionSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i; j > 0; j--) {
      if (list[j] < list[j - 1]) {
        exchange(list, j, j - 1);
      } else {
        break;
      }
    }
  }
}

module.exports = InsertionSort;
