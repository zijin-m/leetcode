package binarytree

// 二叉树的后序遍历
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xebrb2/
func postorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	left := postorderTraversal(root.Left)
	right := postorderTraversal(root.Right)
	return append(append(left, right...), root.Val)
}

// 迭代思路
func postorderTraversalIter(root *TreeNode) (res []int) {
	if root == nil {
		return
	}
	stack := []*TreeNode{}
	tmp := []*TreeNode{}
	stack = append(stack, root)
	for len(stack) > 0 {
		cur := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		tmp = append(tmp, cur)
		if cur.Left != nil {
			stack = append(stack, cur.Left)
		}
		if cur.Right != nil {
			stack = append(stack, cur.Right)
		}
	}
	for i := len(tmp) - 1; i >= 0; i-- {
		res = append(res, tmp[i].Val)
	}
	return
}

// Morris 遍历
func postorderTraversalMorris(root *TreeNode) (res []int) {
	if root == nil {
		return
	}
	cur := root
	var mostRight *TreeNode
	for cur != nil {
		if cur.Left != nil {
			mostRight = cur.Left
			for mostRight.Right != nil && mostRight.Right != cur {
				mostRight = mostRight.Right
			}
			if mostRight.Right == nil {
				mostRight.Right = cur
				cur = cur.Left
			} else {
				// 1. 最右边界先设置为 nil，避免后续边界重复取值
				mostRight.Right = nil
				// 2. 添加左子树的右边界
				res = append(res, addRightEdge(cur.Left)...)
				cur = cur.Right
			}
		} else {
			cur = cur.Right
		}
	}
	// 添加整树的右边界
	res = append(res, addRightEdge(root)...)
	return
}

func addRightEdge(root *TreeNode) (res []int) {
	tail := revRightTree(root)
	cur := tail
	for cur != nil {
		res = append(res, cur.Val)
		cur = cur.Right
	}
	revRightTree(tail)
	return
}

func revRightTree(root *TreeNode) *TreeNode {
	var pre *TreeNode
	var cur = root
	var next *TreeNode
	for cur != nil {
		next = cur.Right
		cur.Right = pre
		pre = cur
		cur = next
	}
	return pre
}
