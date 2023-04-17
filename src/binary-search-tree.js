const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
  }

  addNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null)
        node.left = newNode;
      else
        this.addNode(node.left, newNode);
    } else
    {
      if(node.right === null) {
        node.right = newNode;
      }
      else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    if (this.rootNode === null) {
      return false;
    }

    let current = this.rootNode;
    let found = false;

    while (current && !found){
      if(data < current.data){
        current = current.left
      } else if(data > current.data){
        current = current.right
      } else {
        found = true;
      }

    }

    if(!found) {
      return false;
    }

    return found;
  }

  find(data) {
    let current = this.rootNode;
    let found = false;

    while (current && !found){
      if(data < current.data){
        current = current.left
      } else if(data > current.data){
        current = current.right
      } else {
        found = current;
      }

    }

    if(!found) {
      return null;
    }

    return found;
  }

  remove(data) {
    if (this.rootNode === null) {
      return null;
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    let current = this.rootNode;

    while (current.left !== null) {
      current = current.left;
    }

    return current;
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const BST = new BinarySearchTree();

BST.add(9);
BST.add(14);
BST.add(54);
BST.add(2);
BST.add(6);
BST.add(8);
BST.add(31);
BST.add(1);

console.log(BST.find(31).data);
console.log(BST.has(3));
console.log(BST.min());

module.exports = {
  BinarySearchTree
};
