/**
 * https://leetcode-cn.com/leetbook/read/linked-list/f58sg/
 * 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseListTwo(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = reverseListTwo(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};