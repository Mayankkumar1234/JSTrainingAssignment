class LRUCache {
  constructor(capacity) {
    // Your code here
    this.capacity = capacity;  // Initialize the capacity variable to set the capacity of the map
    this.cache = new Map();   // Initialize a hash Map /  Map to set all the data in the cache
  }
  get(key) {
    // Your code here
    if (!this.cache.get(key)) {   // Used the get method to the key -> value from the map.
      return -1;
    }

    let value = this.cache.get(key);
    this.cache.delete(key);  // Delete the key from the map
    this.cache.set(key, value);  // Set the same key So that the key, value becomes MRU

    return value;
  }
 
  put(key, value) {
    // Your code here
    if (this.cache.get(key)) {
      this.cache.delete(key);   
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }
}

const myLru = new LRUCache();

myLru.put("name", "Mayank");
myLru.put("book", "sapiens");
myLru.put("class", 12);

console.log(myLru.get("book"));
console.log(myLru.get("class"))
 