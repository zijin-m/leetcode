/**
链接：https://leetcode-cn.com/leetbook/read/linked-list/jbex5/
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

 */
/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (head == null) {
        return false;
    }
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast !== null) {
        slow = slow!.next;
        if (fast.next === null) {
            return false;
        }
        fast = fast.next.next;
        // 追上了慢指针
        if (fast === slow) {
            return true;
        }
    }
    return false;
};