package binarytree

// 二叉树的层序遍历 BFS
// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xefh1i/
func levelOrder(root *TreeNode) (res [][]int) {
	if root == nil {
		return
	}
	queue := []*TreeNode{}
	queue = append(queue, root)
	for len(queue) > 0 {
		size := len(queue)
		temp := []int{}
		for i := 0; i < size; i++ {
			cur := queue[0]
			queue = queue[1:]
			temp = append(temp, cur.Val)
			if cur.Left != nil {
				queue = append(queue, cur.Left)
			}
			if cur.Right != nil {
				queue = append(queue, cur.Right)
			}
		}
		res = append(res, temp)
	}
	return
}
