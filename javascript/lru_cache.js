// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// Use a DDL and Hashmap to solve

// CREATE a node class
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.size = 0
    this.cache = new Map()
    this.head = new ListNode()
    this.tail = new ListNode()
    this.tail.prev = this.head
    this.head.next = this.tail
  }

  deleteNode = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  addToHead = function(node) {
    node.next = this.head.next
    node.next.prev = node
  
    node.prev = this.head
    this.head.next = node
  }

  get = function(key) {
    let node = this.cache.get(key)

    // if the node exist in hash, delete the node and add it to head
    if (node) {
      this.deleteNode(node)
      this.addToHead(node)
      return node.value
    } else {
      // else the key is not in the hash
      return -1
    }
  }
  put = function(key, value) {
    let node = this.cache.get(key)

    // if key in hashmap then change the value of that node
    // then delete the node and add it to the head
    if (node) {
      node.value = value
      this.deleteNode(node)
      this.addToHead(node)

    } else {
      // create a new node and add it to the hash
      let new_node = new ListNode(key, value)

      this.cache.set(key, new_node)

      // if DDL size is less than capacity 
      // then we can add the new node to the head and increase size
      if (this.size < this.capacity) {
        this.addToHead(new_node)
        this.size++
      } else {
        // else means we are at capacity. 
        // delete last recently use node which is at the tail and add new node ot the head
        this.cache.delete(this.tail.prev.key)
        this.deleteNode(this.tail.prev)
        this.addToHead(new_node)
      }
    }
  }

}










/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */