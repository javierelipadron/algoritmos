class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.buckets[index]) return undefined;
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    if (!this.buckets[index]) return false;
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

// Ejemplo de uso
const hashTable = new HashTable();

hashTable.set("name", "John Doe");
hashTable.set("age", 30);
hashTable.set("country", "USA");

console.log(hashTable.get("name")); // John Doe
console.log(hashTable.get("age")); // 30
console.log(hashTable.get("country")); // USA

hashTable.remove("age");
console.log(hashTable.get("age")); // undefined
