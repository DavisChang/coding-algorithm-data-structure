/*
 * TODO: iterator
 * 1. hasNext() (maintain current)
 * 2. Item has next()
 */

// [] <- push | [] -> pop
// FILO

class Item {
  constructor() {
    this.string = null;
    this.next = null;
  }
}

class LinkedStackOfStrings {
  constructor() {
    this.first = null;
  }

  isEmpty() {
    return this.first === null;
  }

  push(string) {
    const oldFirst = this.first;
    this.first = new Item();
    this.first.string = string;
    this.first.next = oldFirst;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    const string = this.first.string;
    this.first = this.first.next;
    return string;
  }
}

module.exports = LinkedStackOfStrings;
