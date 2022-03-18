package binarytree

// 填充每个节点的下一个右侧节点指针 II
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xorvud/
func connect2(root *Node) *Node {
	if root == nil {
		return nil
	}
	queue := []*Node{}
	queue = append(queue, root)
	for len(queue) > 0 {
		size := len(queue)
		var pre *Node
		for i := 0; i < size; i++ {
			cur := queue[0]
			queue = queue[1:]
			if pre != nil {
				pre.Next = cur
			}
			pre = cur
			if cur.Left != nil {
				queue = append(queue, cur.Left)
			}
			if cur.Right != nil {
				queue = append(queue, cur.Right)
			}
		}
	}
	return root
}
