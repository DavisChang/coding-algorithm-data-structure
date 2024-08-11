/*
 * BinarySearch
 *
 * Time Complexity: Log(n)
 */

function compareTo(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

function BinarySearch(list, key) {
  let lo = 0;
  let hi = list.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let comparison = compareTo(list[mid], key);

    if (comparison === 1) {
      hi = mid - 1;
    } else if (comparison === -1) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

module.exports = BinarySearch;
