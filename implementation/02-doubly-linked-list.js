// Node class is implemented for you, no need to look for bugs here!
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
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return;

        let removed = this.head;
        this.head = this.head.next;
        if (this.head) { this.head.prev = null; }
        this.length--;
        return removed.value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.tail) return;
        
        let removed = this.tail;

        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        }
        
        this.length--;
        return removed.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (this.head) return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        if (this.tail) return this.tail.value;
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
