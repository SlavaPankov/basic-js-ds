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

    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  minNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.minNode(node.left);
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

    return current.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    let current = this.rootNode;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}


module.exports = {
  BinarySearchTree
};
