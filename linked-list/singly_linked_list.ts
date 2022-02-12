class SinglyListNode {
    public next?: SinglyListNode;
    public data: number;
    constructor(data: number) {
        this.data = data;
    }
}


class MyLinkedList {
    public size: number = 0;
    private head: SinglyListNode = new SinglyListNode(0);

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }
        return this.getNodeAtIndex(index)!.data;
    }

    addAtHead(val: number): void {
        this.addAtIndex(0, val);
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.size, val);
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) {
            return;
        }
        if (index < 0) {
            index = 0;
        }
        const pre = this.getNodeAtIndex(index - 1);
        const toAdd = new SinglyListNode(val);
        toAdd.next = pre!.next;
        pre!.next = toAdd;
        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }
        const pre = this.getNodeAtIndex(index - 1);
        pre!.next = pre?.next?.next;
        this.size--;
    }

    getNodeAtIndex(index: number) {
        if (index >= this.size) {
            return;
        }
        if (index < 0) {
            return this.head;
        }
        let node = this.head;
        while (index + 1) {
            node = node.next!;
            index--;
        }
        return node;
    }
}

const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3

