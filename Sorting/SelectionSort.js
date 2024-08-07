/*
 * SelectionSort
 * 1. iteration
 * 2. find min
 * 3. exchange
 *
 * Proposition
 *
 */

function exchange(array, index, minIndex) {
  const temp = array[index];
  array[index] = array[minIndex];
  array[minIndex] = temp;
}

function SelectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    exchange(list, i, minIndex);
  }
}

module.exports = SelectionSort;
