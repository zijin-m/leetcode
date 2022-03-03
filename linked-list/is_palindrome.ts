/**
 * https://leetcode-cn.com/leetbook/read/linked-list/fov6t/
 * 回文链表
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 */

//@ts-ignore
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function endOfFirstHalf(head: ListNode) {
    let fast = head;
    let slow = head;
    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next!;
    }
    return slow;
}

function reverseList(head: ListNode): ListNode {
    let pre: ListNode | null = null;
    let cur: ListNode | null = head;
    let nxt: ListNode | null = head.next;
    while (cur !== null) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre!;
};

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) {
        return false;
    }
    if (head.next === null) {
        return true;
    }
    // 前半部分的最后一个节点
    const firstHalfEnd = endOfFirstHalf(head);
    // 后半部分反转后的头节点
    const secondHalfStart = reverseList(firstHalfEnd.next);
    // 切断链表
    // firstHalfEnd.next = null;
    let p1: ListNode = head;
    let p2: ListNode | null = secondHalfStart;
    let res: boolean = true;
    // 后半部分的长度要么等于前半部分长度（偶数节点），要么等于前半部分长度减去1（奇数），偶数刚好对称，而当奇数时，前半部分多出的一个不需要比较，因为是回文的中点（前部分还有值，但后半部分为null，直接忽略不比），所以比较到 p2 为 null （后半部分结束即可）
    while (res && p2 !== null) {
        if (p1.val !== p2.val) {
            res = false;
        }
        p2 = p2.next;
        p1 = p1.next!;
    }
    // 再次反转，还原链表
    // firstHalfEnd!.next = reverseList(secondHalfStart);
    // 再次反转，无需设置 firstHalfEnd!.next 因为 next 节点的关系没变过
    reverseList(secondHalfStart);
    return res;
};