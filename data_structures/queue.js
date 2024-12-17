class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the front element of the queue
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print the elements of the queue
  printQueue() {
    return this.items.join(" ");
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.printQueue()); // Output: 1 2 3
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
