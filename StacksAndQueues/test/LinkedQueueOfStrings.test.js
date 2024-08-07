const LinkedQueueOfStrings = require("../LinkedQueueOfStrings"); // Adjust the path if necessary

describe("LinkedQueueOfStrings", () => {
  let queue;

  beforeEach(() => {
    queue = new LinkedQueueOfStrings();
  });

  test("should be empty initially", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test("should not be empty after enqueue", () => {
    queue.enqueue("hello");
    expect(queue.isEmpty()).toBe(false);
  });

  test("should return the first enqueued item on dequeue", () => {
    queue.enqueue("hello");
    queue.enqueue("world");
    expect(queue.dequeue()).toBe("hello");
    expect(queue.dequeue()).toBe("world");
  });

  test("should be empty after dequeuing all items", () => {
    queue.enqueue("hello");
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("should throw error when dequeuing from an empty queue", () => {
    expect(() => queue.dequeue()).toThrow("Queue underflow");
  });

  test("should handle multiple enqueues and dequeues correctly", () => {
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    expect(queue.dequeue()).toBe("a");
    expect(queue.dequeue()).toBe("b");
    expect(queue.dequeue()).toBe("c");
  });
});
