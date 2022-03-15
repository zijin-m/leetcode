package binarytree

// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoxzgv/
func IsSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return isSymmetricHelper(root.Left, root.Right)
}

func isSymmetricHelper(left, right *TreeNode) bool {
	//如果左右子节点都为空，说明当前节点是叶子节点，返回true
	if left == nil && right == nil {
		return true
	}
	//如果当前节点只有一个子节点或者有两个子节点，但两个子节点的值不相同，直接返回false
	if left == nil || right == nil || left.Val != right.Val {
		return false
	}
	//然后左子节点的左子节点和右子节点的右子节点比较，左子节点的右子节点和右子节点的左子节点比较
	return isSymmetricHelper(left.Left, right.Right) && isSymmetricHelper(left.Right, right.Left)
}
