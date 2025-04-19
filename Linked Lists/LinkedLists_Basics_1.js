class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current) {
      current = current.next;
    }
    current.next = newNode;
  }
}

obj1LinkedList = new LinkedList();
obj1LinkedList.addAtEnd(170);
obj1LinkedList.addFirst(1);
console.log(obj1LinkedList);
