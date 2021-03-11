class MyHashMap {
  constructor() {
    this.bucket = {}
  }

  put(key, val) {
    this.bucket[key] = val
  }

  get(key, val) {
    return this.bucket[key] >= 0 ? this.bucket[key] : -1
  }

  remove(key, val) {
    this.bucket[key] = -1
  }
}
