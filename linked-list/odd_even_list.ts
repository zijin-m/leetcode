/**
 * https://leetcode-cn.com/leetbook/read/linked-list/fe0kj/
 * 奇偶链表
给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。

请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }
    let oddHead = null;
    let oddTail = null;
    let evenHead = null;
    let evenTail = null;
    let index = 0;
    let next = null;
    while (head !== null) {
        index++;
        next = head.next;
        head.next = null;
        // 奇数
        if (index % 2 === 1) {
            if (oddTail === null) {
                oddHead = head;
                oddTail = head;
            } else {
                oddTail.next = head;
                oddTail = head;
            }
        }
        // 偶数
        else {
            if (evenTail === null) {
                evenHead = head;
                evenTail = head;
            } else {
                evenTail.next = head;
                evenTail = head;
            }
        }
        head = next;
    }
    oddTail!.next = evenHead;
    return oddHead;
};