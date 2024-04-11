export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export class BinaryTree {
	root: TreeNode | null;

	constructor(root?: TreeNode | null) {
		this.root = root || null;
	}

	insert(value: number): void {
		const newNode = new TreeNode(value);

		if (!this.root) {
			this.root = newNode;
			return;
		}

		let currentNode = this.root;

		while (currentNode) {
			if (newNode.val < currentNode.val) {
				if (!currentNode.left) {
					currentNode.left = new TreeNode(value);
					return;
				}

				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					currentNode.right = new TreeNode(value);
					return;
				}

				currentNode = currentNode.right;
			}
		}
	}

	remove(value: number) {
		const removeNode = function (
			node: TreeNode | null,
			value: number
		): TreeNode | null {
			if (!node) return null;

			if (!node.left && !node.right) {
				return null;
			}

			if (value == node.val) {
				if (!node.left) {
					return node.right;
				}

				if (!node.right) {
					return node.left;
				}

				let tempNode = node.right;

				while (tempNode.left !== null) {
					tempNode = tempNode.left;
				}
				node.val = tempNode.val;
				node.right = removeNode(node.right, tempNode.val);
				return node;
			} else if (value < node.val) {
				node.left = removeNode(node.left, value);
				return node;
			} else {
				node.right = removeNode(node.right, value);
				return node;
			}
		};

		this.root = removeNode(this.root, value);
	}

	// =============

	countNodes(node: TreeNode | null = this.root): number {
		if (node === null) return 0;
		const leftCount = this.countNodes(node.left);
		const rightCount = this.countNodes(node.right);
		return leftCount + rightCount + 1;
	}

	findMin(node: TreeNode | null = this.root): TreeNode | null {
		if (!node || !node.left) return node;
		return this.findMin(node.left);
	}

	findMax(node: TreeNode | null = this.root): TreeNode | null {
		if (!node || !node.right) return node;
		return this.findMax(node.right);
	}

	find(value: number): TreeNode | null {
		let currentNode: TreeNode | null = this.root;

		while (currentNode !== null && currentNode.val !== value) {
			if (value < currentNode.val) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return currentNode;
	}

	// isPresent(value: number): boolean {
	// 	return this.find(value) !== null;
	// }

	isPresent(value: number): boolean {
		let currentNode = this.root;

		while (currentNode) {
			if (value === currentNode.val) {
				return true;
			}

			if (value > currentNode.val) {
				currentNode = currentNode.right;
			} else {
				currentNode = currentNode.left;
			}
		}

		return false;
	}

	// ============

	isBalanced(node: TreeNode | null = this.root): boolean {
		return this.findMinHeight(node) >= this.findMaxHeight(node) - 1;
	}

	findMinHeight(node: TreeNode | null = this.root): number {
		if (!node) return -1;
		let leftHeight = this.findMinHeight(node.left);
		let rightHeight = this.findMinHeight(node.right);

		if (leftHeight < rightHeight) {
			return leftHeight + 1;
		} else {
			return rightHeight + 1;
		}
	}

	findMaxHeight(node: TreeNode | null = this.root): number {
		if (!node) return -1;
		let leftHeight = this.findMinHeight(node.left);
		let rightHeight = this.findMinHeight(node.right);

		if (leftHeight > rightHeight) {
			return leftHeight + 1;
		} else {
			return rightHeight + 1;
		}
	}

	// Depth-First Search (DFS) traversal. In Order
	traversalDFS(node: TreeNode | null = this.root): number[] | null {
		if (node === null) return null;
		const result = new Array();

		function traverseInOrder(node: TreeNode) {
			node.left && traverseInOrder(node.left);
			result.push(node.val);
			node.right && traverseInOrder(node.right);
		}
		traverseInOrder(node);

		return result;
	}

	// Breadth-First Search (BFS) traversal. Pre Order
	traversalBFS(node: TreeNode | null = this.root): number[] | null {
		if (node === null) return null;
		const result = new Array();

		function traversePreOrder(node: TreeNode) {
			result.push(node.val);
			node.left && traversePreOrder(node.left);
			node.right && traversePreOrder(node.right);
		}

		traversePreOrder(node);

		return result;
	}

	traversalDFSPostOrder(node: TreeNode | null = this.root): number[] | null {
		if (node === null) return null;

		const result = new Array();

		function traversePostOrder(node: TreeNode) {
			node.left && traversePostOrder(node.left);
			node.right && traversePostOrder(node.right);
			result.push(node.val);
		}
		traversePostOrder(node);

		return result;
	}
}

export function viewBinaryTree() {
	const newTree = new BinaryTree();

	newTree.insert(10);
	newTree.insert(5);
	newTree.insert(15);
	newTree.insert(3);
	newTree.insert(7);
	newTree.insert(12);

	console.log('Binary Tree:');

	console.log('Number of nodes:', newTree.countNodes());

	console.log('Minimum value:', newTree.findMin()?.val);

	console.log('Maximum value:', newTree.findMax()?.val);

	console.log('Find value 7:', newTree.find(7));

	console.log('Is value 7 present:', newTree.isPresent(7));

	console.log('Is Balanced tree', newTree.isBalanced());

	console.log('Tree Max Height:', newTree.findMaxHeight());

	console.log('Tree Min Height:', newTree.findMinHeight());

	console.log('DFS Traversal (In Order):', newTree.traversalDFS());

	console.log('BFS Traversal (Pre Order):', newTree.traversalBFS());

	console.log('DFS Traversal (Post Order):', newTree.traversalDFSPostOrder());
}
