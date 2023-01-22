import Node from './nodes.js'

export default class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
        }else {
            const newNode = new Node(value);
            let node = this.head;
            while (node.next !== null) { //somehow get to the last one which has a null pointer
                node = node.next; //set the last node to point to the new last node
            }
            node.next = newNode;
        }
        this.length++
    }

    prepend(value) {
        if (this.head) {
            const previousHead = this.head;
            this.head = new Node(value);
            this.head.next = previousHead;
            this.length++;
        }else {
            this.append(value);
        }
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        return node;
    }

    at(index) {
        if (index === 0) return this.head;
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        };
        return node;
    }

    pop(){
        let tail = this.tail();
        tail = null;
        this.length--;
        let node = this.head;
        for (let i = 0; i < this.length-1; i++) {
            node = node.next;
        }
        node.next = null;
    }

    contains(value) {
        if (value == this.head.data) return true;
        let node = this.head;
        for (let i = 0; i < this.length-1; i++) {
            node = node.next;
            if (value == node.data) return true;
        }
        return false;
    }

    find(value) {
        if (value == this.head.data) return 0;
        let node = this.head;
        for (let i = 1; i < this.length; i++) {
            node = node.next;
            if (value == node.data) return i;
        }
        return null;
    }

    toString() {
        if (this.head == null) return null;
        let string = '';
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            string = string.concat(`( ${node.data} ) -> `);
            node = node.next;
        }
        string = string.concat('null');
        return string;
    }
}