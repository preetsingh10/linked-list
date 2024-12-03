const node = require("./node");

class LinkedList {
  head = null;
  tail = null;
  size = 0;
  append(value) {
    let newNode = new node();
    newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.nextNode = null;
      this.size++;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
      this.tail.nextNode = null;
      this.size++;
    }
  }
  prepend(value) {
    let newNode = new node();
    newNode.value = value;
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  length() {
    console.log(this.size);
    return this.size;
  }

  getHead() {
    console.log(this.head);
  }
  getTail() {
    console.log(this.tail);
  }
  at(index) {
    if (index < 0) {
      return null;
    }
    if (index > this.size) {
      return "out of bounds";
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    }
    let secondLastNode = this.at(this.size - 2);
    secondLastNode.nextNode = null;
    this.tail = secondLastNode;
    this.size--;
  }

  contains(value) {
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value == value) {
        return i;
      }
      currentNode = currentNode.nextNode;
    }
    return "not found";
  }

  insertAt(index, value) {
    let newNode = new node();
    newNode.value = value;
    if (index === 0) {
      let formerHeadNode = this.head;
      formerHeadNode.nextNode = this.head.nextNode;
      this.head = newNode;
      this.head.nextNode = formerHeadNode;
      this.size++;
      return 1;
    }
    let beforeIndex = this.at(index - 1);

    let afterIndexNode = beforeIndex.nextNode;
    beforeIndex.nextNode = newNode;
    newNode.nextNode = afterIndexNode;

    this.size++;
  }
  removeAt(index) {
    if(index === 0 ){
        this.head = this.head.nextNode
        this.size--
        return 1
    }
    let previousNode = this.at(index - 1);
    let nextNode = this.at(index + 1);

    previousNode.nextNode = nextNode;
    this.size--;
  }

  toString() {
    let currentNode = this.head;
    let linkedList = [];
    while (currentNode !== null) {
      linkedList.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }
    console.log(linkedList.join("->"));
  }
}

module.exports = LinkedList;
