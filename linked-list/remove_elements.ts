/**
 * https://leetcode-cn.com/leetbook/read/linked-list/f9izv/
 * 移除链表元素
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) {
        return head;
    }
    // while (head && head.val === val) {
    //     head = head.next;
    // }
    // 使用虚拟节点，可以不用考虑头节点
    head = new ListNode(-1, head);
    let cur = head;
    let next: ListNode | null = cur ? cur.next : null;
    while (cur !== null && next !== null) {
        if (next.val === val) {
            cur.next = next.next;
        } else {
            cur = next;
        }
        next = next.next;
    }
    // 虚拟节点的下一个节点
    return head.next;
};

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//     if (head === null) {
//         return head;
//     }
//     head.next = removeElements(head.next, val);
//     head = head?.val == val ? head.next : head;
//     return head;
// };