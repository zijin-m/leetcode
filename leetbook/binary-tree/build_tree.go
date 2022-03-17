package binarytree

// 保存中序遍历的值和idx对应关系
var m = make(map[int]int)

// 保存后续遍历数组
var po = []int{}

// 从中序与后序遍历序列构造二叉树
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xo98qt/
func BuildTree(inorder []int, postorder []int) *TreeNode {
	if len(inorder) == 0 || len(postorder) == 0 {
		return nil
	}
	for i, v := range inorder {
		m[v] = i
	}
	po = postorder
	return buildTree(0, len(inorder)-1, 0, len(postorder)-1)
}

func buildTree(is, ie, ps, pe int) *TreeNode {
	if ie < is || pe < ps {
		return nil
	}
	rootVal := po[pe]
	ri := m[rootVal]
	root := &TreeNode{Val: rootVal}
	root.Left = buildTree(is, ri-1, ps, ri+ps-is-1)
	root.Right = buildTree(ri+1, ie, ri+ps-is, pe-1)
	return root
}
