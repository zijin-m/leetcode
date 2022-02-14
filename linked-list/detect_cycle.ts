/**
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/linked-list/jjhf6/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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

function detectCycle(head: ListNode | null): ListNode | null {
    if (head == null) {
        return null;
    }
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast !== null) {
        slow = slow!.next;
        if (fast.next === null) {
            return null;
        }
        fast = fast.next.next;
        // 追上了慢指针
        if (fast === slow) {
            // 慢指针指向头节点
            slow = head;
            while (slow !== fast) {
                // 每个指针走一步
                slow = slow!.next;
                fast = fast!.next;
            }
            return slow;
        }
    }
    return null;
};