package binarytree

// 保存中序遍历的值和idx对应关系
var memo = make(map[int]int)

// 保存前续遍历数组
var preArr = []int{}

// 从中序与前序遍历序列构造二叉树
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoei3r/
func BuildTreeByPreAndIn(preorder []int, inorder []int) *TreeNode {
	if len(preorder) == 0 || len(inorder) == 0 {
		return nil
	}
	for i, v := range inorder {
		memo[v] = i
	}
	preArr = preorder
	return buildTreeByPreAndIn(0, len(inorder)-1, 0, len(preorder)-1)
}

func buildTreeByPreAndIn(is, ie, ps, pe int) *TreeNode {
	if ie < is || pe < ps {
		return nil
	}
	rootVal := preArr[ps]
	ri := memo[rootVal]
	root := &TreeNode{Val: rootVal}
	root.Left = buildTreeByPreAndIn(is, ri-1, ps+1, ri+ps-is)
	root.Right = buildTreeByPreAndIn(ri+1, ie, ri+ps-is+1, pe)
	return root
}
