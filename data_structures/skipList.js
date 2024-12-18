class Node {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

class SkipList {
  constructor(maxLevel, probability) {
    this.maxLevel = maxLevel;
    this.probability = probability;
    this.level = 0;
    this.header = new Node(null, this.maxLevel);
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < this.probability && level < this.maxLevel) {
      level++;
    }
    return level;
  }

  insert(value) {
    let update = new Array(this.maxLevel + 1).fill(null);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (current === null || current.value !== value) {
      let newLevel = this.randomLevel();

      if (newLevel > this.level) {
        for (let i = this.level + 1; i <= newLevel; i++) {
          update[i] = this.header;
        }
        this.level = newLevel;
      }

      let newNode = new Node(value, newLevel);

      for (let i = 0; i <= newLevel; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  search(value) {
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
    }

    current = current.forward[0];

    return current !== null && current.value === value;
  }

  delete(value) {
    let update = new Array(this.maxLevel + 1).fill(null);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (current !== null && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].forward[i] !== current) {
          break;
        }
        update[i].forward[i] = current.forward[i];
      }

      while (this.level > 0 && this.header.forward[this.level] === null) {
        this.level--;
      }
    }
  }
}

//creame los ejemplos de como usar SkipList
const skipList = new SkipList(4, 0.5);
skipList.insert(1);
skipList.insert(2);
skipList.insert(3);
console.log(skipList.search(0)); // Output: false
console.log(skipList.search(2)); // Output: true
skipList.delete(2);
console.log(skipList.search(2)); // Output: false
console.log(skipList.search(3)); // Output: true
