/**
 * IndexMinPQ (Indexed Priority Queue)
 *
 */

class IndexMinPQ {
  constructor(maxN) {
    this.maxN = maxN; // Maximum number of elements allowed in the PQ
    this.n = 0; // Number of elements currently in the PQ
    this.keys = new Array(maxN + 1); // keys[i] is the key associated with index i
    this.pq = new Array(maxN + 1); // binary heap using 1-based indexing
    this.qp = new Array(maxN + 1).fill(-1); // qp[i] is the index of pq[i] in the heap
  }

  // Helper method to exchange/swap elements in the heap
  exchange(i, j) {
    const temp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = temp;
    this.qp[this.pq[i]] = i;
    this.qp[this.pq[j]] = j;
  }

  // Helper method to compare two keys
  greater(i, j) {
    return this.keys[this.pq[i]] > this.keys[this.pq[j]];
  }

  // Swim operation to restore the heap order when a key is inserted or updated
  swim(k) {
    while (k > 1 && this.greater(Math.floor(k / 2), k)) {
      this.exchange(k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
  }

  // Sink operation to restore heap order when the root is removed
  sink(k) {
    while (2 * k <= this.n) {
      let j = 2 * k;
      if (j < this.n && this.greater(j, j + 1)) j++;
      if (!this.greater(k, j)) break;
      this.exchange(k, j);
      k = j;
    }
  }

  // Insert a key associated with a given index
  insert(index, key) {
    if (this.contains(index))
      throw new Error("Index is already in the priority queue");
    this.n++;
    this.qp[index] = this.n;
    this.pq[this.n] = index;
    this.keys[index] = key;
    this.swim(this.n);
  }

  // Decrease the key associated with index
  decreaseKey(index, key) {
    if (!this.contains(index))
      throw new Error("Index is not in the priority queue");
    if (this.keys[index] <= key)
      throw new Error("New key is not smaller than the current key");
    this.keys[index] = key;
    this.swim(this.qp[index]);
  }

  // Check if the priority queue contains a given index
  contains(index) {
    return this.qp[index] !== -1;
  }

  // Remove and return the minimum key
  delMin() {
    const minIndex = this.pq[1];
    this.exchange(1, this.n--);
    this.sink(1);
    this.qp[minIndex] = -1; // Mark the index as removed
    this.keys[minIndex] = null;
    this.pq[this.n + 1] = -1; // Avoid loitering
    return minIndex;
  }

  // Check if the heap is empty
  isEmpty() {
    return this.n === 0;
  }
}

module.exports = IndexMinPQ;
