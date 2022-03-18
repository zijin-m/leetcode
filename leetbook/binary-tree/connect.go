package binarytree

/**
 * Definition for a Node.

 */

type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

// 填充每个节点的下一个右侧节点指针
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoo0ts/
func connect(root *Node) *Node {
	if root != nil {
		dfs(root.Left, root.Right)
	}
	return root
}

func dfs(l, r *Node) {
	if l == nil || l.Next == r {
		return
	}
	l.Next = r
	dfs(l.Left, l.Right)
	dfs(l.Right, r.Left)
	dfs(r.Left, r.Right)
}
