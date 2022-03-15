package binarytree

func MaxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	l := MaxDepth(root.Left)
	r := MaxDepth(root.Right)
	return max(l, r) + 1
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}
