// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        let length = 0;
        let current = this.head;
        while (current) {
            length++;
            current = current.next;
        }

        return length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let total = 0;
        let current = this.head;
        while (current) {
            total += current.value;
            current = current.next;
        }

        return total;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength();
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let current = this.head;

        for (let i = 0; i < n && current !== null; i++) {
            current = current.next;
        }

        return current;
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        let mid = Math.floor((this.listLength() - 1) / 2);

        return this.findNthNode(mid);
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new SinglyLinkedList;

        let current = this.head;
        while (current) {
            let node = new SinglyLinkedNode(current.value);
            node.next = reversed.head;
            reversed.head = node;

            current = current.next;
        }

        return reversed;


        
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        // if (!this.head) return;
        let pointer = this.head;
        let wall = this.tail;

        while (pointer !== wall && pointer.next !== wall) {
            pointer = pointer.next;
            wall = wall.prev;
        }

        return pointer;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new DoublyLinkedList();
        let current = this.tail;

        while(current) {
            reversed.addToTail(current.value);
            current = current.prev;
        }

        return reversed;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let current = this.tail;

        while (current) {
            let next = current.next;

            current.next = current.prev;
            current.prev = next;
            current = current.next;
        }

        let newTail = this.head;
        this.head = this.tail;
        this.tail = newTail;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
