const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }


  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    const newListNode = new ListNode(value);

    if (this.queue === null) {
      this.queue = newListNode;
    } else {
      this.enqueueNode(this.queue, newListNode);
    }
  }

  enqueueNode(node, value) {
    if (node.next === null) {
      node.next = value;
    } else {
      this.enqueueNode(node.next, value);
    }
  }

  dequeue() {
    let firstNode = null;

    if (this.queue === null) {
      return null
    } else {
      firstNode = this.queue;
      this.queue = this.queue.next;
    }

    return firstNode.value;
  }
}

module.exports = {
  Queue
};
