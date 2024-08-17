/**
 * Heap (MaxPQ)
 * HeapSort
 * N log(N)
 * Not Stable
 */

class Heap {
  constructor(pq) {
    this.pq = [null, ...pq]; // Start the heap at index 1 for easier calculation
    this.N = pq.length;
  }

  sort() {
    for (let i = Math.floor(this.N / 2); i >= 1; i--) {
      this.sink(i);
    }

    while (this.N > 1) {
      this.exchange(1, this.N--);
      this.sink(1);
    }
  }

  // Helper method to exchange/swap elements in the heap
  exchange(a, b) {
    const temp = this.pq[a];
    this.pq[a] = this.pq[b];
    this.pq[b] = temp;
  }

  // Sink operation to restore heap order when the root is removed
  sink(k) {
    while (2 * k <= this.N) {
      let j = 2 * k;
      if (j < this.N && this.pq[j] < this.pq[j + 1]) j++;
      if (this.pq[k] >= this.pq[j]) break;
      this.exchange(k, j);
      k = j;
    }
  }

  // Check if the heap is empty
  isEmpty() {
    return this.pq === 0;
  }

  getSortedArray() {
    return this.pq.slice(1); // Exclude the first element which is null
  }
}

module.exports = Heap;
