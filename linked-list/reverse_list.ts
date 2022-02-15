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

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    let pre: ListNode | null = null;
    let cur: ListNode | null = head;
    let nxt: ListNode | null = head.next;
    while (cur !== null) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
};