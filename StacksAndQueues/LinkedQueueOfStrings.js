/*
 * TODO: iterator
 * 1. hasNext() (maintain current)
 * 2. Item has next()
 */

// enqueue -> [] -> dequeue
// FIFO

class Item {
  constructor() {
    this.string = null;
    this.next = null;
  }
}

class LinkedQueueOfStrings {
  constructor() {
    this.first = null;
    this.last = null;
  }

  isEmpty() {
    return this.first === null;
  }

  enqueue(string) {
    const oldLast = this.last;
    this.last = new Item();
    this.last.string = string;
    this.last.next = null;

    // special cases
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue underflow");
    }

    const string = this.first.string;
    this.first = this.first.next;

    // special cases
    if (this.isEmpty()) {
      this.last = null;
    }

    return string;
  }
}

module.exports = LinkedQueueOfStrings;
