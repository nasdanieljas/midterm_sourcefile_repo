'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// This class implements a stack data structure to track
// ticket actions for undo history. It follows LIFO (Last In,
// First Out) so the most recent action can be undone first.
// ================================================================


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join(", ");
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

actionHistory.push("Opened ticket #101");
actionHistory.push("Assigned ticket #101");
actionHistory.push("Closed ticket #101");

console.log("Top Action:", actionHistory.peek());

console.log("Undo Action:", actionHistory.pop());

console.log("Remaining Actions:", actionHistory.toString());

console.log("Stack Size:", actionHistory.size());

// ================================================================
// PART B: QUEUE
// This class implements a queue data structure to manage
// waiting IT requests. It follows FIFO (First In, First Out)
// so requests are processed in the order they arrive.
// ================================================================

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is Emptry";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "Queue is Empty";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join(", ");
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

waitingRequests.enqueue("Tickets #201 - Password Reset");
waitingRequests.enqueue("Ticket #202 - No Internet");
waitingRequests.enqueue("Ticket #203 - Printer Problem");
waitingRequests.enqueue("Ticket #204 - Software Installation");

console.log("Next Request:", waitingRequests.front());

console.log("Processed:", waitingRequests.dequeue());
console.log("Processed:", waitingRequests.dequeue());

console.log("Remaining Request:", waitingRequests.toString());

console.log("Queue Size:", waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// This class manages urgent IT support requests by assigning
// each request a priority number. Lower numbers mean higher
// urgency. Requests are inserted in order so the most critical
// issues are processed first.
// ================================================================

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(request, priority) {
    const element = { request, priority }; 

if (this.items.length === 0) {
    this.items.push(element);
  } else {
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (element.priority < this.items[i].priority) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(element);
    }
  }
}

  dequeue() {
    if (this.length === 0) return "Priority Queue is empty";
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  print() {
    this.items.forEach(item => {
        console.log(`${item.request}, Priority ${item.priority}`);
    });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

urgentRequests.enqueue("Ticket #301 - Install Browser", 3);
urgentRequests.enqueue("Ticket #302 - Server Offline", 1);
urgentRequests.enqueue("Ticket #303 - Faculty PC Failure", 2);
urgentRequests.enqueue("Ticket #304 - Internet Laboratory Down", 1);

console.log("Initial Priority Queue");
urgentRequests.print();

console.log("Processed:", urgentRequests.dequeue().request);

console.log("\nRemaining Priority Queue:");
urgentRequests.print();

console.log("Queue Size:", urgentRequests.size());

// ================================================================
// PART D: LINKED LIST
// This class implements a linked list to store completed
// IT requests. It allows flexible insertion and removal
// of tickets at specific positions, and supports searching
// and displaying the list of completed requests.
// ================================================================

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(element) {
    const node = new Node(element);
    if (this.head == null) {
        this.head = node;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
  }

  insert(position, element) {
    if (position < 0 || position > this.length) return false;
    const node = new Node(element);
    if (position === 0) {
        node.next = this.head;
        this.head = node;
    } else {
        let current = this.head;
        let previous;
        let index = 0;
        while (index < position) {
            previous = current;
            current = current.next;
            index++;
        }
        node.next = current;
        previous.next = node;
    }
    this.length++;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    if (position === 0) {
        this.head = current.next;
    } else {
        let previous;
        let index = 0;
        while (index < position) {
            previous = current;
            current = current.next;
            index++;
        }
        previous.next = current.next;
    }
    this.length--;
    return current.element;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while(current) {
        if (current.element === element) return index;
        current = current.next;
        index++;
    }
    return -1;
  }

  remove(element) {
    const position = this.indexOf(element);
    return this.removeAt(position);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toString() {
    let current = this.head;
    let result = [];
    while (current) {
        result.push(current.element);
        current = current.next;
    }
    return result.join("\n");
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

completedRequests.append("Ticket #401 - Account Activated");
completedRequests.append("Ticket #402 - Printer Connected");
completedRequests.append("Ticket #403 - Antivirus Updated");

// 4. Insert at position 0
completedRequests.insert(0, "Ticket #400 - Computer Diagnosed");

// 5. Insert at end
completedRequests.insert(completedRequests.size(), "Ticket #405 - Browser Updated");

// 6. Display complete list
console.log("Complete List:\n" + completedRequests.toString());

// 7. Find index of Ticket #402
console.log("\nIndex of Ticket #402:", completedRequests.indexOf("Ticket #402 - Printer Connected"));

// 8. Remove item at position 1
console.log("Removed at position 1:", completedRequests.removeAt(1));

// 9. Remove Ticket #403
console.log("Removed Ticket #403:", completedRequests.remove("Ticket #403 - Antivirus Updated"));

// 10. Display final list and size
console.log("\nFinal List:\n" + completedRequests.toString());
console.log("Final Size:", completedRequests.size());
