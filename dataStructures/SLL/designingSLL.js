let Node = function (value) {
  this.value = value;
  this.next = null;
};

let MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index, type = "val") {
  if (index < 0 || index >= this.size) return -1;
  let count = 0;
  let curNode = this.head;

  while (count < index) {
    curNode = curNode.next;
    count += 1;
  }

  return type === "val" ? curNode.value : curNode;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.size++;
    return;
  }

  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.size++;
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === this.size) return this.addAtTail(val);
  if (index === 0) return this.addAtHead(val);

  const prevNode = this.get(index - 1, (type = "node"));
  const newNode = new Node(val);
  const nextNode = prevNode.next;

  prevNode.next = newNode;
  newNode.next = nextNode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  let deleted = null;
  if (index === 0) {
    deleted = this.head;
    this.head = this.head.next;
    deleted.next = null;
    this.size--;
    return deleted;
  }

  const prev = this.get(index - 1, (type = "index"));
  deleted = prev.next;
  if (index === this.size - 1) {
    this.tail = prev;
    this.size--;
    return deleted;
  }
  prev.next = deleted.next;
  deleted.next = null;
  this.size--;

  return deleted;
};

//   Your MyLinkedList object will be instantiated and called as such:
let obj = new MyLinkedList();
let param_1 = obj.get(index);
obj.addAtHead(val);
obj.addAtTail(val);
obj.addAtIndex(index, val);
obj.deleteAtIndex(index);
