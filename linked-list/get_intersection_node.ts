/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) {
        return null;
    }
    let p1: ListNode | null = headA;
    let p2: ListNode | null = headB;
    //  要么相交结束，要么同时到链表尾部（不相交），都是 null 结束
    while (p1 !== p2) {
        p1 = p1 !== null ? p1.next : headB;
        p2 = p2 !== null ? p2.next : headA;
    }
    return p1;
}; 