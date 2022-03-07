package binarytree

// 二叉树的中序遍历
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xecaj6/
func inorderTraversal(root *TreeNode) (res []int) {
	if root == nil {
		return
	}
	left := inorderTraversal(root.Left)
	right := inorderTraversal(root.Right)
	res = append(append(append(res, left...), root.Val), right...)
	return
}

// 迭代思路
func inorderTraversalIter(root *TreeNode) (res []int) {
	if root == nil {
		return
	}
	var stack = []*TreeNode{}
	for len(stack) > 0 || root != nil {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		root = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		res = append(res, root.Val)
		root = root.Right
	}
	return
}

// Morris 遍历
func inorderTraversalMorris(root *TreeNode) (res []int) {
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
				res = append(res, cur.Val)
				mostRight.Right = nil
				cur = cur.Right
			}
		} else {
			res = append(res, cur.Val)
			cur = cur.Right
		}
	}
	return
}
