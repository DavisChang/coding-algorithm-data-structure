/**
 * MaxPQ (Priority Queue)
 *
 */

class MaxPQ {
  constructor(N) {
    this.N = 0; // Number of elements currently in the heap
    this.pq = new Array(N + 1); // Priority queue array (index 0 is unused)
  }

  // Helper method to exchange/swap elements in the heap
  exchange(a, b) {
    const temp = this.pq[a];
    this.pq[a] = this.pq[b];
    this.pq[b] = temp;
  }

  // Swim operation to restore heap order when a new element is added
  swim(k) {
    while (k > 1 && this.pq[Math.floor(k / 2)] < this.pq[k]) {
      this.exchange(k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
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

  // Insert a new element into the heap
  insert(x) {
    this.pq[++this.N] = x;
    this.swim(this.N);
  }

  // Remove and return the maximum element from the heap
  delMax() {
    const max = this.pq[1];
    this.exchange(1, this.N--);
    this.sink(1);
    this.pq[this.N + 1] = null; // Prevent loitering
    return max;
  }

  // Check if the heap is empty
  isEmpty() {
    return this.N === 0;
  }
}

module.exports = MaxPQ;
