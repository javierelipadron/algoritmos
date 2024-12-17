class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

// crea un ejemplo para poder ver como se agregan los elementos
const list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("Welcome");
list.push("To");
list.push("My");
list.push("List");
list.print(); // Output: ["Hello", "World", "Welcome", "To", "My", "List"]
list.pop();
list.print(); // Output: ["Hello", "World", "Welcome", "To", "My"]
list.shift();
list.print(); // Output: ["World", "Welcome", "To", "My"]
list.unshift("Hello");
list.print(); // Output: ["Hello", "World", "Welcome", "To", "My"]
console.log(list.get(2)); // Output: Node { value: 'Welcome', next: Node { value: 'To', next: Node { value: 'My', next: null } } }
console.log(list.set(2, "Hola")); // Output: true
list.print(); // Output: ["Hello", "World", "Hola", "To", "My"]
console.log(list.insert(2, "Welcome")); // Output: true
list.print(); // Output: ["Hello", "World", "Welcome", "Hola", "To", "My"]
console.log(list.remove(2)); // Output: Node { value: 'Welcome', next: Node { value: 'Hola', next: Node { value: 'To', next: Node { value: 'My', next: null } } } }
list.print(); // Output: ["Hello", "World", "Hola", "To", "My"]
list.reverse();
list.print(); // Output: ["My", "To", "Hola", "World", "Hello"]
console.log(list);
