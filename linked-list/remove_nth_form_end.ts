/**
 * https://leetcode-cn.com/leetbook/read/linked-list/jf1cc/
 * 删除链表的倒数第N个节点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) {
        return null;
    }
    let slow: ListNode = head;
    let fast: ListNode | null = head;
    // 快指针先走 n 步
    for (let i = 0; i < n; i++) {
        fast = fast!.next;
    }
    // fast 走到 null 代表走了链表的长度，那么删除的应该是头节点
    if (fast === null) {
        // 新的头节点是原头的下一个节点
        return head.next;
    }
    // 快指针走到链尾，慢指针的位置就是待删除的节点的前一个节点
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next!;
    }
    // 删除的慢指针的下一个结点， n >= 1 保证了中间至少间隔了 1 个节点
    slow.next = slow.next!.next;
    return head;
};