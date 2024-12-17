class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  search(item) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        return i;
      }
    }
    return -1;
  }
}

const myArray = new Array();
myArray.push("Hello");
myArray.push("World");
myArray.push("Welcome");
myArray.push("To");
myArray.push("My");
myArray.push("Array");
console.log(myArray.get(0)); // Output: Hello
console.log(myArray.get(1)); // Output: World
myArray.pop();
console.log(myArray.get(1)); // Output: undefined
//agrega la busqueda de un item en el array
console.log(myArray.search("To")); // Output: 0
