package leetcode

import "github.com/zijin-m/leetcode/pkg/structures"

type TreeNode = structures.TreeNode

// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xeywh5/
func preorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	left := preorderTraversal(root.Left)
	right := preorderTraversal(root.Right)
	return append(append([]int{root.Val}, left...), right...)
}

// 迭代解法
func preorderTraversalIter(root *TreeNode) (res []int) {
	if root == nil {
		return
	}
	stack := []*TreeNode{}
	stack = append(stack, root)
	for len(stack) > 0 {
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		res = append(res, node.Val)
		if node.Right != nil {
			stack = append(stack, node.Right)
		}
		if node.Left != nil {
			stack = append(stack, node.Left)
		}
	}
	return
}
